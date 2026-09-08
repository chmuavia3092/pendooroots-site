/**
 * PENDOOROOTS — Content Data
 * Single source of truth for all editorial content
 */

export interface HeroContent {
  tag: string;
  headline1: string;
  headline2: string;
  headlineAccent: string;
  subtitle: string;
  cta1: string;
  cta2: string;
  stats: HeroStat[];
}

export interface HeroStat {
  label: string;
  value: number;
  suffix?: string;
}

export interface FeatureContent {
  icon: string;
  title: string;
  desc: string;
}

export interface TestimonialContent {
  name: string;
  text: string;
  rating: number;
}

export interface FAQContent {
  q: string;
  a: string;
}

export interface SettingsContent {
  brandName: string;
  primaryColor: string;
  accentColor: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  instagram: string;
  facebook: string;
  twitter: string;
}

// Hero Content (from EditorState defaults)
export const heroContent: HeroContent = {
  tag: '100% Natural Botanicals',
  headline1: 'Make Every',
  headline2: 'Dish',
  headlineAccent: 'Shine.',
  subtitle: 'The LEMOO Washer — engineered for everyday luxury. Premium botanical dish wash that cuts through grease while keeping your hands soft and nourished.',
  cta1: 'Shop Now',
  cta2: 'View Product',
  stats: [
    { label: 'Products', value: 19 },
    { label: 'Happy Customers', value: 12000, suffix: '+' },
    { label: 'Natural', value: 100, suffix: '%' }
  ]
};

// Features Content (Why PendooRoots)
export const featuresContent: FeatureContent[] = [
  { icon: 'fa-leaf', title: '100% Natural', desc: 'Sourced from certified organic farms.' },
  { icon: 'fa-flask', title: 'Lab Tested', desc: 'Rigorous quality testing for purity.' },
  { icon: 'fa-recycle', title: 'Eco Packaging', desc: 'Recyclable materials, zero waste.' },
  { icon: 'fa-heart', title: 'Cruelty Free', desc: 'Never tested on animals.' }
];

// Testimonials
export const testimonialsContent: TestimonialContent[] = [
  { name: 'Priya Sharma', text: 'The Rose Body Wash is absolutely divine. It turns my shower into a luxury spa experience.', rating: 5 },
  { name: 'Ananya Patel', text: 'Finally, cleaning products that are both effective AND natural.', rating: 5 },
  { name: 'Vikram Singh', text: 'The Botanical Luxury Shampoo transformed my hair. Remarkable difference.', rating: 5 }
];

// FAQs
export const faqsContent: FAQContent[] = [
  { q: 'Are PendooRoots products really 100% natural?', a: 'Yes! Every product is made with 100% naturally-derived ingredients. We source from certified organic farms and never use synthetic chemicals, parabens, sulfates, or artificial fragrances.' },
  { q: 'How long does shipping take?', a: 'Standard shipping within Pakistan takes 3-5 business days. Express shipping delivers within 1-2 business days. International shipping takes 7-14 business days.' },
  { q: 'Do you offer returns or exchanges?', a: 'We offer a 30-day satisfaction guarantee. If you\'re not happy with your purchase, contact us for a full refund or exchange.' },
  { q: 'Are your products tested on animals?', a: 'Absolutely not. PendooRoots is certified cruelty-free. We never test on animals and neither do our suppliers.' },
  { q: 'What is your sustainability commitment?', a: 'We use 100% recycled packaging, carbon-neutral shipping, and concentrate formulas to reduce water waste. We also donate 1% of revenue to environmental restoration projects.' },
  { q: 'Do you offer wholesale or bulk pricing?', a: 'Yes! We offer special pricing for retailers, hotels, spas, and corporate orders. Contact us at ibmilyas347@gmail.com for details.' }
];

// Settings
export const settingsContent: SettingsContent = {
  brandName: 'PENDOOROOTS',
  primaryColor: '#004b1c',
  accentColor: '#ccff00',
  email: 'ibmilyas347@gmail.com',
  phone: '0313-5442427',
  whatsapp: '03474736347',
  address: '42 Botanical Lane, Garden District, Karachi, Pakistan',
  instagram: '@pendooroots',
  facebook: 'pendooroots',
  twitter: 'pendooroots'
};

// Collections
export const collectionsContent = {
  kitchen: { name: 'Kitchen Care', desc: 'Premium natural cleaning for your home', icon: 'sparkles', color: 'var(--color-primary)' },
  rose: { name: 'Rose Collection', desc: 'Infused with the essence of real rose petals', icon: 'flower', color: '#e74c3c' },
  aloe: { name: 'Aloe Vera Collection', desc: 'Nature\'s soothing miracle for your skin', icon: 'leaf', color: '#27ae60' },
  premium: { name: 'Premium Botanicals', desc: 'Our finest formulations for discerning care', icon: 'crown', color: '#f39c12' }
} as const;