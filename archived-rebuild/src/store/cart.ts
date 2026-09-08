/**
 * PENDOOROOTS — Client-side cart store
 * Persists to localStorage under `pr_cart` (preserves legacy contract).
 */

import { formatPrice, getProductById, type Product } from '@data/products';

export interface CartItem {
  productId: number;
  size: string;
  quantity: number;
}

const STORAGE_KEY = 'pr_cart';
const FREE_SHIPPING_OVER = 1000;
const FLAT_SHIPPING = 100;

function readStorage(): CartItem[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (it): it is CartItem =>
        typeof it === 'object' &&
        it !== null &&
        typeof (it as CartItem).productId === 'number' &&
        typeof (it as CartItem).size === 'string' &&
        typeof (it as CartItem).quantity === 'number',
    );
  } catch {
    return [];
  }
}

function writeStorage(items: CartItem[]): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

type Listener = (items: CartItem[]) => void;

class CartStore {
  private items: CartItem[] = readStorage();
  private listeners = new Set<Listener>();

  getItems(): CartItem[] {
    return this.items;
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private commit(): void {
    writeStorage(this.items);
    for (const fn of this.listeners) fn(this.items);
  }

  add(product: Product, size: string, quantity = 1): void {
    const existing = this.items.find(
      (it) => it.productId === product.id && it.size === size,
    );
    if (existing) {
      existing.quantity = Math.max(1, existing.quantity + quantity);
    } else {
      this.items.push({ productId: product.id, size, quantity: Math.max(1, quantity) });
    }
    this.commit();
  }

  remove(productId: number, size: string): void {
    this.items = this.items.filter(
      (it) => !(it.productId === productId && it.size === size),
    );
    this.commit();
  }

  updateQuantity(productId: number, size: string, quantity: number): void {
    const next = Math.max(1, Math.floor(quantity));
    const item = this.items.find(
      (it) => it.productId === productId && it.size === size,
    );
    if (item) {
      item.quantity = next;
      this.commit();
    }
  }

  clear(): void {
    this.items = [];
    this.commit();
  }

  count(): number {
    return this.items.reduce((sum, it) => sum + it.quantity, 0);
  }

  subtotal(): number {
    return this.items.reduce((sum, it) => {
      const product = getProductById(it.productId);
      if (!product) return sum;
      return sum + product.price * it.quantity;
    }, 0);
  }

  shipping(): number {
    const sub = this.subtotal();
    if (sub === 0) return 0;
    if (sub >= FREE_SHIPPING_OVER) return 0;
    return FLAT_SHIPPING;
  }

  total(): number {
    return this.subtotal() + this.shipping();
  }

  formatSubtotal(): string {
    return formatPrice(this.subtotal());
  }

  formatShipping(): string {
    const s = this.shipping();
    return s === 0 ? 'Free' : formatPrice(s);
  }

  formatTotal(): string {
    return formatPrice(this.total());
  }
}

export const cart = new CartStore();
