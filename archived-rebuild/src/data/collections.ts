/**
 * PENDOOROOTS — Collection metadata
 * Maps product collections to editorial categories.
 */

import type { CollectionKey } from './products';

export interface CollectionMeta {
  key: CollectionKey;
  name: string;
  description: string;
}

export const COLLECTIONS: Record<CollectionKey, CollectionMeta> = {
  rose: {
    key: 'rose',
    name: 'Rose Collection',
    description: "Infused with the essence of real rose petals",
  },
  aloe: {
    key: 'aloe',
    name: 'Aloe Vera Collection',
    description: "Nature's soothing miracle for your skin",
  },
  kitchen: {
    key: 'kitchen',
    name: 'Kitchen Care',
    description: 'Premium natural cleaning for your home',
  },
  premium: {
    key: 'premium',
    name: 'Premium Botanicals',
    description: 'Our finest formulations for discerning care',
  },
};

export const COLLECTION_LIST: CollectionMeta[] = Object.values(COLLECTIONS);
