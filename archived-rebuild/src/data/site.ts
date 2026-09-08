/**
 * PENDOOROOTS — Site-wide content
 * SEO metadata, contact, navigation, brand copy.
 */

export const SITE = {
  name: 'PENDOOROOTS',
  shortName: 'PendooRoots',
  tagline: 'Nature Perfected.',
  heroHeadline: 'Make Every Dish Shine.',
  heroSubhead:
    'A botanical dish wash, crafted with lemon extract and skin-friendly surfactants. Honest ingredients, beautiful results.',
  description:
    'PENDOOROOTS — premium natural household care. LEMOO Washer and a curated line of botanical soaps, hand washes, and home care, made in Pakistan.',
  url: 'https://pendooroots-site.vercel.app',
  locale: 'en',
  email: 'hello@pendooroots.com',
  whatsapp: '923474736347',
  whatsappDisplay: '+92 347 473 6347',
  whatsappPrefill:
    "Hi PendooRoots! I'm interested in your products.",
  addressLine1: 'Karachi, Pakistan',
  social: {
    instagram: 'https://instagram.com/pendooroots',
    facebook: 'https://facebook.com/pendooroots',
    tiktok: 'https://tiktok.com/@pendooroots',
    youtube: 'https://youtube.com/@pendooroots',
  },
  copyrightYear: 2026,
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_NAV = {
  shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'LEMOO Washer', href: '/shop/lemoo-washer' },
    { label: 'Hand Care', href: '/shop?category=Hand+Care' },
    { label: 'Body Care', href: '/shop?category=Body+Care' },
    { label: 'Soaps', href: '/shop?category=Soaps' },
  ],
  brand: [
    { label: 'Our Story', href: '/about' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ],
  support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/faq#shipping' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;

export const SHIPPING = {
  freeOver: 1000,
  flat: 100,
  currency: 'Rs.',
};

export interface Benefit {
  title: string;
  description: string;
  icon: 'leaf' | 'droplet' | 'sparkle' | 'hand' | 'shield' | 'bottle';
}

export const LEMOO_BENEFITS: Benefit[] = [
  {
    title: 'Grease Lifting Power',
    description:
      'Cuts through the toughest grime with lemon-derived surfactants, leaving every plate spotless.',
    icon: 'sparkle',
  },
  {
    title: 'Skin Friendly',
    description:
      'Aloe vera and vitamin E keep hands soft, even with daily use. No harsh sulfates, ever.',
    icon: 'hand',
  },
  {
    title: 'Perfect Shine',
    description:
      'A streak-free, residue-free finish on glass, ceramic, and steel. Dishes that look new again.',
    icon: 'droplet',
  },
  {
    title: 'Botanical Fragrance',
    description:
      'Cold-pressed lemon and citronella essential oils. A clean, natural scent that never overpowers.',
    icon: 'leaf',
  },
  {
    title: 'Eco-Conscious Formula',
    description:
      'Plant-based, biodegradable, and never tested on animals. Rs.20 of every bottle funds reforestation.',
    icon: 'shield',
  },
  {
    title: 'A Little Goes a Long Way',
    description:
      'Highly concentrated. One small squeeze lifts an entire sink of dishes — economical and gentle.',
    icon: 'bottle',
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  city: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'I have tried every dish wash on the market. LEMOO actually cuts grease on the first wipe — and my hands do not feel like sandpaper after. I refill the 1L every month.',
    author: 'Hira M.',
    city: 'Lahore',
  },
  {
    quote:
      'The scent is the first thing I noticed. Real lemon, not a chemical lemon. My kitchen smells clean for hours.',
    author: 'Sana R.',
    city: 'Karachi',
  },
  {
    quote:
      'We have a small guesthouse and switched every room to PendooRoots. Guests ask about the products at checkout. That is a first.',
    author: 'Fatima K.',
    city: 'Islamabad',
  },
  {
    quote:
      'I am a chef and I am picky. LEMOO leaves glassware streak-free and does not dry out my hands during a 12-hour shift. Genuinely impressed.',
    author: 'Bilal A.',
    city: 'Karachi',
  },
];

export interface JournalTeaser {
  title: string;
  excerpt: string;
  href: string;
  date: string;
  category: string;
}

export const JOURNAL_TEASERS: JournalTeaser[] = [
  {
    title: 'Why We Refuse to Use Sulfates',
    excerpt:
      'The argument for botanical surfactants, and what they actually do to your skin over time.',
    href: '/journal/why-we-refuse-sulfates',
    date: 'August 2026',
    category: 'Ingredients',
  },
  {
    title: 'A Note on Transparency',
    excerpt:
      'Every ingredient on our label, explained in plain language. No proprietary blends, no surprises.',
    href: '/journal/transparency',
    date: 'July 2026',
    category: 'Brand',
  },
  {
    title: 'Rs.20 Per Bottle, Planted',
    excerpt:
      'How our reforestation partnership with local growers works, and where the first 2,000 trees went.',
    href: '/journal/reforestation',
    date: 'June 2026',
    category: 'Sustainability',
  },
];

export interface IngredientSpotlight {
  name: string;
  role: string;
  description: string;
}

export const LEMOO_INGREDIENTS: IngredientSpotlight[] = [
  {
    name: 'Lemon Extract',
    role: 'Degreaser',
    description:
      'Cold-pressed lemon oil breaks down grease without synthetic solvents. The natural acidity lifts residue.',
  },
  {
    name: 'Coconut-derived Surfactant',
    role: 'Cleanser',
    description:
      'A plant-based cleanser that foams richly and rinses clean. Biodegradable and gentle on skin.',
  },
  {
    name: 'Aloe Vera',
    role: 'Skin Conditioner',
    description:
      'Soothes and hydrates hands with every wash. Sourced from local growers in Sindh.',
  },
  {
    name: 'Vitamin E',
    role: 'Antioxidant',
    description:
      'A natural preservative and skin protector. Keeps the formula fresh without parabens.',
  },
  {
    name: 'Citronella Essential Oil',
    role: 'Fragrance',
    description:
      'A bright, herbaceous note that complements the lemon. Naturally insect-deterring.',
  },
];
