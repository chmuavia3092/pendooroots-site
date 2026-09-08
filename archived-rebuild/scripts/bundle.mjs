// Bundle dist/ into a single self-contained index.html for offline review.
// - inlines all <link rel="stylesheet">
// - rewrites url(...) inside inlined CSS to data: URIs
// - inlines all <script src> modules
// - leaves the page external-references-free
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(__dirname, '..', 'dist');
const ENTRY = join(ROOT, 'index.html');
const OUT = resolve(__dirname, '..', 'index-review.html');

const MIME = {
  '.css': 'text/css;charset=utf-8',
  '.js': ' ' /* dummy — JS is inlined as raw text, not data URI */,
  '.mjs': 'application/javascript;charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
};

function isLocalUrl(url) {
  return (
    typeof url === 'string' &&
    !url.startsWith('http://') &&
    !url.startsWith('https://') &&
    !url.startsWith('data:') &&
    !url.startsWith('//')
  );
}

function toDataUri(absPath) {
  // Synchronous wrapper via import — keep simple
  return null;
}

async function fileToDataUri(absPath) {
  const ext = extname(absPath).toLowerCase();
  const mime = MIME[ext];
  if (!mime) return null;
  const buf = await readFile(absPath);
  return `data:${mime};base64,${buf.toString('base64')}`;
}

async function readIfExists(p) {
  if (!existsSync(p)) return null;
  return readFile(p, 'utf8');
}

async function rewriteCssUrls(cssText, cssFilePath) {
  // Match url(...) with optional quotes
  const urlRe = /url\(\s*(['"]?)([^'")]+)\1\s*\)/g;
  const tasks = [];
  const matches = [];
  for (const m of cssText.matchAll(urlRe)) {
    matches.push({ full: m[0], quote: m[1], path: m[2], index: m.index });
  }
  // Build replacements in reverse order
  let out = cssText;
  for (let i = matches.length - 1; i >= 0; i--) {
    const { full, path: relPath, index } = matches[i];
    if (!isLocalUrl(relPath)) continue;
    const abs = resolve(cssFilePath, '..', relPath);
    if (!existsSync(abs)) continue;
    const data = await fileToDataUri(abs);
    if (!data) continue;
    out = out.slice(0, index) + `url(${data})` + out.slice(index + full.length);
  }
  return out;
}

async function bundle() {
  let html = await readFile(ENTRY, 'utf8');

  // 1) Inline <link rel="stylesheet" href="...">
  const linkRe = /<link[^>]+rel=["']stylesheet["'][^>]*>/gi;
  for (const m of [...html.matchAll(linkRe)]) {
    const tag = m[0];
    const href = tag.match(/href=["']([^"']+)["']/i)?.[1];
    if (!href || !isLocalUrl(href)) continue;
    const abs = resolve(ROOT, href.replace(/^\//, ''));
    if (!existsSync(abs)) continue;
    let css = await readFile(abs, 'utf8');
    css = await rewriteCssUrls(css, abs);
    html = html.replace(tag, `<style>\n${css}\n</style>`);
  }

  // 2) Inline <link rel="icon"> (favicon svg)
  const iconRe = /<link[^>]+rel=["']icon["'][^>]*>/gi;
  for (const m of [...html.matchAll(iconRe)]) {
    const tag = m[0];
    const href = tag.match(/href=["']([^"']+)["']/i)?.[1];
    if (!href || !isLocalUrl(href)) continue;
    const abs = resolve(ROOT, href.replace(/^\//, ''));
    if (!existsSync(abs)) continue;
    const data = await fileToDataUri(abs);
    if (data) html = html.replace(tag, tag.replace(href, data));
  }

  // 3) Inline <script type="module" src="...">
  const scriptRe = /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>\s*<\/script>/gi;
  for (const m of [...html.matchAll(scriptRe)]) {
    const tag = m[0];
    const src = m[1];
    if (!isLocalUrl(src)) continue;
    const abs = resolve(ROOT, src.replace(/^\//, ''));
    if (!existsSync(abs)) continue;
    const js = await readFile(abs, 'utf8');
    const inlined = tag.replace(/\s*src=["'][^"']+["']/, '').replace(
      '></script>',
      `>${js}</script>`,
    );
    html = html.replace(tag, inlined);
  }

  // 4) <img src="..."> — convert to data URI for local images so file:// works
  const imgRe = /<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi;
  for (const m of [...html.matchAll(imgRe)]) {
    const tag = m[0];
    const src = m[1];
    if (!isLocalUrl(src)) continue;
    const abs = resolve(ROOT, src.replace(/^\//, ''));
    if (!existsSync(abs)) continue;
    const data = await fileToDataUri(abs);
    if (data) html = html.replace(tag, tag.replace(src, data));
  }

  // 5) <source srcset="..."> in <picture> if any
  const sourceRe = /<source\b[^>]*\bsrcset=["']([^"']+)["'][^>]*>/gi;
  for (const m of [...html.matchAll(sourceRe)]) {
    const tag = m[0];
    const src = m[1];
    if (!isLocalUrl(src)) continue;
    const abs = resolve(ROOT, src.replace(/^\//, ''));
    if (!existsSync(abs)) continue;
    const data = await fileToDataUri(abs);
    if (data) html = html.replace(tag, tag.replace(src, data));
  }

  // 6) Add a comment marker so reviewers know what they're looking at
  const banner = `<!--
  PENDOOROOTS / LEMOO Washer — Self-contained review build
  Generated: ${new Date().toISOString()}
  Source: dist/index.html (Astro static build)
  All CSS, JS, fonts, and images are inlined. Open this file in any browser.
-->\n`;
  html = html.replace(/^<!doctype html>/i, `<!doctype html>\n${banner}`);

  await writeFile(OUT, html, 'utf8');
  const stats = await import('node:fs').then((m) => m.statSync(OUT));
  console.log(`[bundle] wrote ${OUT}`);
  console.log(`[bundle] ${(stats.size / 1024).toFixed(1)} kB`);
}

bundle().catch((e) => {
  console.error(e);
  process.exit(1);
});
