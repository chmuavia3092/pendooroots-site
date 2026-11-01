/**
 * PENDOOROOTS — Client-side product search engine
 *
 * Pure, dependency-free live search over the existing product catalogue.
 * - Case-insensitive, whitespace-normalized, partial-word matching
 * - Searches name, variant, category, collection, ingredients, benefits, description
 * - Ranked results: exact/partial name > category/collection > ingredient > benefit/description
 * - Popular searches derived from real catalogue data (no hardcoded list)
 */
import { products } from '@/data/products';
import type { Product } from '@/data/products';

/* ── field weights for ranking ── */
const FIELD_WEIGHTS: Record<string, number> = {
  name: 6,
  variant: 5,
  category: 5,
  collection: 5,
  ingredient: 3,
  benefit: 2,
  description: 1,
};

/* ── text normalization ── */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s]/g, ' ');
}

export function tokenize(query: string): string[] {
  return normalize(query).split(' ').filter(Boolean);
}

/* ── result type ── */
interface SearchResult {
  product: Product;
  score: number;
}

/* ── score a single product against all query words ── */
function scoreProduct(product: Product, words: string[]): SearchResult | null {
  const fields: Record<string, string> = {
    name: product.name,
    variant: product.variant,
    category: product.category,
    collection: product.collection,
    ingredient: product.ingredients.join(' '),
    benefit: product.benefits.join(' '),
    description: product.description,
  };

  let totalScore = 0;

  for (const word of words) {
    let best = 0;
    for (const [field, value] of Object.entries(fields)) {
      const v = value.toLowerCase();
      if (v.includes(word)) {
        let weight = FIELD_WEIGHTS[field] ?? 1;
        const pos = v.indexOf(word);
        if (pos === 0) weight += 3;          // match at start of field
        else if (pos < 10) weight += 1;       // match near start
        const fieldScore = weight * 100;
        if (fieldScore > best) best = fieldScore;
      }
    }
    // Every query word must appear somewhere for the product to match
    if (best === 0) return null;
    totalScore += best;
  }

  return { product, score: totalScore };
}

/**
 * Live-search the product catalogue.
 * Returns ranked matches (empty array when nothing fits).
 */
export function searchProducts(query: string, list: Product[] = products): Product[] {
  const words = tokenize(query);
  if (words.length === 0) return [];

  const results: SearchResult[] = [];
  for (const product of list) {
    const scored = scoreProduct(product, words);
    if (scored) results.push(scored);
  }

  // Higher score first; ties broken by review count (social proof)
  results.sort((a, b) => b.score - a.score || b.product.reviews - a.product.reviews);
  return results.map((r) => r.product);
}

/* ── Popular searches derived from the catalogue (real data, no invention) ── */

function frequency<T>(items: T[]): Map<T, number> {
  const map = new Map<T, number>();
  for (const item of items) map.set(item, (map.get(item) ?? 0) + 1);
  return map;
}

export function getPopularSearches(limit = 8): string[] {
  const categories = [...new Set(products.map((p) => p.category))];
  const collections = [...new Set(products.map((p) => p.collection))];
  const allIngredients = products.flatMap((p) => p.ingredients);
  const allBenefits = products.flatMap((p) => p.benefits);

  const topIngredients = [...frequency(allIngredients).entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([term]) => term)
    .slice(0, 4);

  const topBenefits = [...frequency(allBenefits).entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([term]) => term)
    .slice(0, 2);

  const popular = [...categories, ...collections, ...topIngredients, ...topBenefits];
  const seen = new Set<string>();
  return popular.filter((t) => {
    if (seen.has(t)) return false;
    seen.add(t);
    return true;
  }).slice(0, limit);
}
