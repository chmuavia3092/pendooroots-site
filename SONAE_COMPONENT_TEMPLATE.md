# Sonae Component Template — Adapted for PENDOOROOTS

## Overview

This document describes the **Sonae Hero Template** adapted for the PENDOOROOTS/LEMOO Washer brand. The original Sonae template is a clean, modern Next.js + Tailwind CSS template. We've reinterpreted it through the PENDOOROOTS lens: **Cinematic + Classic + Premium + Natural + Editorial + Modern**.

---

## Original Sonae Principles

| Principle | Original | PENDOOROOTS Adaptation |
|-----------|----------|------------------------|
| **Typography** | Modern sans-serif | Playfair Display (editorial serif) + Manrope (UI) |
| **Color** | Neutral + accent | Deep forest green + vibrant lime + cream |
| **Layout** | Clean, grid-based | Editorial asymmetry, generous whitespace |
| **Dark Mode** | System-aware | Full token-based theming |
| **Performance** | Next.js optimized | Astro islands + optimized assets |
| **Motion** | Subtle transitions | Cinematic scroll-triggered + reduced-motion respect |

---

## Component: `HeroSonae` (PENDOOROOTS Edition)

### Purpose
The primary hero section for the homepage — introducing the LEMOO Washer with cinematic product storytelling.

### Props Interface
```typescript
interface HeroSonaeProps {
  // Content
  tag: string;                    // "100% Natural Botanicals"
  headline1: string;              // "Make Every"
  headline2: string;              // "Dish"
  headlineAccent: string;         // "Shine."
  subtitle: string;               // Descriptive copy
  ctaPrimary: string;             // "Shop Now"
  ctaSecondary: string;           // "View Product"
  
  // Product showcase
  productImage: ImageMetadata;    // Optimized hero bottle
  productAlt: string;             // Accessibility
  
  // Stats
  stats: Array<{
    value: number;
    label: string;
  }>;
  
  // Behavior
  enableParallax?: boolean;       // Default: true
  enableGrainient?: boolean;      // Default: true
  enableOrbits?: boolean;         // Default: true
}
```

### Visual Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  HERO SECTION (min-h-screen)                                    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ BACKGROUND LAYER                                          │  │
│  │  • Grainient (WebGL noise/warp shader)                    │  │
│  │  • Radial gradient mesh (primary + accent)                │  │
│  │  • Floating particles (CSS animation)                     │  │
│  │  • Light beam sweep (CSS animation)                       │  │
│  └───────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ CONTENT GRID (2-col desktop, 1-col mobile)                │  │
│  │  LEFT COLUMN                                              │  │
│  │  • Tag badge (accent background, primary text)            │  │
│  │  • Headline (Playfair Display, clamp sizing)              │  │
│  │    - Line 1: "Make Every"                                 │  │
│  │    - Line 2: "Dish <span class="accent">Shine.</span>"    │  │
│  │  • Subtitle (Manrope 300, relaxed leading)                │  │
│  │  • CTA Group                                              │  │
│  │    - Primary: Star-border button (accent)                 │  │
│  │    - Secondary: Specular button (primary)                 │  │
│  │  • Stats row (3 columns, counter animation)               │  │
│  │                                                          │  │
│  │  RIGHT COLUMN                                             │  │
│  │  • Product showcase container                             │  │
│  │    - Pulsing rings (CSS)                                  │  │
│  │    - Orbit rings with dots (CSS)                          │  │
│  │    - Glow pulse (CSS)                                     │  │
│  │    - Hero bottle image (WebP/AVIF, optimized)             │  │
│  │      * Scroll-triggered parallax (GSAP ScrollTrigger)     │  │
│  │      * Mouse-track 3D tilt (GSAP)                         │  │
│  │    - Sparkle particles (CSS)                              │  │
│  └───────────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ SCROLL INDICATOR                                          │  │
│  │  • "Scroll" label + animated line                         │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Design Tokens Used

| Token | Usage |
|-------|-------|
| `--color-primary` | Headlines, primary buttons, brand elements |
| `--color-accent` | CTAs, highlights, tag badge, star borders |
| `--color-bg` | Page background |
| `--color-surface` | Card surfaces |
| `--font-family-display` | Headlines, stats |
| `--font-family-ui` | Body, UI, buttons |
| `--space-section-y` | Section vertical padding |
| `--space-container-gap` | Grid gap |
| `--radius-full` | Pills, badges, buttons |
| `--transition-base` | Hover transitions |
| `--shadow-lg` | Elevated elements |
| `--blur-lg` | Glass morphism |

### Animation Specifications

#### Entrance (IntersectionObserver)
```css
.reveal { opacity: 0; transform: translateY(40px); }
.reveal.revealed { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 100ms; }
.reveal-delay-2 { transition-delay: 200ms; }
.reveal-delay-3 { transition-delay: 300ms; }
.reveal-delay-4 { transition-delay: 400ms; }
```

#### Hero Bottle Parallax (GSAP ScrollTrigger)
```typescript
gsap.to(bottle, {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  },
  y: -150,
  rotateY: 15,
  rotateX: -10,
  scale: 1.05
});
```

#### Mouse-track 3D Tilt (GSAP)
```typescript
// On mousemove within showcase container
gsap.set(bottle, {
  rotateX: -mouseY * 15,
  rotateY: mouseX * 25,
  x: mouseX * 20,
  y: mouseY * 15
});
```

#### Ambient Animations (CSS, respects reduced-motion)
| Element | Animation | Duration |
|---------|-----------|----------|
| Pulsing rings | `ringPulse` (scale + opacity) | 4s / 5s |
| Orbit rings | `orbitSpin` (rotate) | 12s / 18s / 25s |
| Glow | `glowPulse` (scale + rotate + opacity) | 4s |
| Shadow | `shadowPulse` (scaleX + opacity) | 8s |
| Light beam | `lightbeamSweep` (rotate + opacity) | 8s |
| Sparkles | `sparkleFloat` (y + x drift + scale) | 3-7s |
| Particles | `particleFloat` (y + rotate) | 10-20s |
| Scroll line | `scrollLine` (translateY) | 2s |

### Responsive Behavior

| Breakpoint | Layout | Typography | Animations |
|------------|--------|------------|------------|
| Desktop (≥1024px) | 2-col grid (1fr 1fr) | Headline: clamp(3rem, 6vw, 5rem) | Full parallax + tilt |
| Tablet (768-1023px) | 2-col grid (1fr 1fr) | Headline: clamp(2.5rem, 5vw, 4rem) | Parallax only |
| Mobile (<768px) | Stacked (content first, then product) | Headline: clamp(2rem, 8vw, 3.5rem) | Reduced (no tilt, subtle parallax) |

### Accessibility

- **Semantic HTML**: `<section class="hero">` with `aria-labelledby="hero-title"`
- **Heading**: `<h1 id="hero-title">` contains full headline
- **Images**: `alt` describes product + brand promise
- **Buttons**: Descriptive text + `aria-label` where icon-only
- **Reduced motion**: All CSS animations wrapped in `@media (prefers-reduced-motion: reduce)`
- **Focus**: Visible focus rings on all interactive elements
- **Color contrast**: AA compliant (primary on cream, accent on dark)

### Performance

- **Hero image**: Preloaded, WebP/AVIF, proper dimensions (width/height), `fetchpriority="high"`
- **Grainient**: Paused via IntersectionObserver when not in viewport
- **WebGL contexts**: Single grainient instance, reused
- **Fonts**: Preloaded, subset, woff2
- **Critical CSS**: Inlined for hero

### Usage in Astro Page

```astro
---
import HeroSonae from '@/components/hero/HeroSonae.astro';
import { heroContent } from '@/data/content';
import lemooWasher from '@/assets/images/lemoo-washer.png';
---

<HeroSonae
  tag={heroContent.tag}
  headline1={heroContent.headline1}
  headline2={heroContent.headline2}
  headlineAccent={heroContent.headlineAccent}
  subtitle={heroContent.subtitle}
  ctaPrimary={heroContent.cta1}
  ctaSecondary={heroContent.cta2}
  productImage={lemooWasher}
  productAlt="LEMOO Washer dish wash bottle — Make Every Dish Shine"
  stats={[
    { value: heroContent.stats.products, label: 'Products' },
    { value: 12000, label: 'Happy Customers' },
    { value: 100, label: '% Natural' }
  ]}
/>
```

---

## Implementation Checklist

- [ ] Create `src/components/hero/HeroSonae.astro`
- [ ] Create `src/components/hero/HeroSonae.ts` (client-side animations)
- [ ] Add hero content to `src/data/content.ts`
- [ ] Optimize hero image (WebP/AVIF, multiple sizes)
- [ ] Implement GSAP ScrollTrigger parallax
- [ ] Implement mouse-track tilt
- [ ] Add reduced-motion guards
- [ ] Test: Desktop, tablet, mobile, reduced-motion
- [ ] Lighthouse: LCP < 2.5s, CLS < 0.1

---

## Differences from Original Sonae

| Aspect | Sonae Original | PENDOOROOTS HeroSonae |
|--------|----------------|----------------------|
| Framework | Next.js 16 | Astro 4.x |
| Styling | Tailwind CSS 4.0 | CSS Variables + Tailwind utilities |
| Hero Image | Static | Scroll-parallax + 3D tilt |
| Background | Solid/gradient | Grainient WebGL shader |
| CTAs | Standard buttons | Star-border + Specular (WebGL) |
| Stats | Simple numbers | Animated counters |
| Product | Generic | LEMOO Washer (3D showcase) |
| Motion | CSS transitions | GSAP + CSS + WebGL orchestrated |
| Dark Mode | Tailwind `dark:` | CSS variable tokens |

---

## Migration Notes

When adapting other Sonae components:
1. **Replace Tailwind classes** with CSS variable references
2. **Swap fonts** to Playfair Display + Manrope
3. **Use token colors** instead of zinc/slate palette
4. **Add cinematic motion** where appropriate (scroll-triggered, not decorative)
5. **Ensure accessibility** — semantic HTML, ARIA, contrast
6. **Respect reduced-motion** globally