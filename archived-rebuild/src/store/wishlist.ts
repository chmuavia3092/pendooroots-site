/**
 * PENDOOROOTS — Client-side wishlist store
 * Persists to localStorage under `pr_wishlist` (preserves legacy contract).
 */

const STORAGE_KEY = 'pr_wishlist';

type Listener = (ids: number[]) => void;

class WishlistStore {
  private ids: number[] = (() => {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed: unknown = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((id): id is number => typeof id === 'number');
    } catch {
      return [];
    }
  })();
  private listeners = new Set<Listener>();

  getIds(): number[] {
    return this.ids;
  }

  has(productId: number): boolean {
    return this.ids.includes(productId);
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  toggle(productId: number): void {
    if (this.has(productId)) {
      this.ids = this.ids.filter((id) => id !== productId);
    } else {
      this.ids = [...this.ids, productId];
    }
    this.persist();
  }

  count(): number {
    return this.ids.length;
  }

  private persist(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.ids));
    }
    for (const fn of this.listeners) fn(this.ids);
  }
}

export const wishlist = new WishlistStore();
