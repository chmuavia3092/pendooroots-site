# Sonae Hero Template — Adapted for PENDOOROOTS

## Original Template Reference

**Source**: Sonae (`/docs/templates/sonae`)
**Framework**: Next.js 16 + Tailwind CSS 4.0
**Features**: Dark mode, SEO optimized, responsive, modern clean design

---

## Adaptation Strategy for PENDOOROOTS

| Original (Sonae) | PENDOOROOTS Adaptation |
|------------------|------------------------|
| Next.js 16 | Astro 4.x (Islands) |
| Tailwind CSS 4.0 | CSS Variables (tokens.css) + Tailwind utilities only |
| Generic SaaS aesthetic | Cinematic + Classic + Premium + Natural + Editorial |
| Inter/Geist fonts | Playfair Display (display) + Manrope (UI) |
| Blue/indigo primary | Deep Forest Green (`#004b1c`) |
| Generic accent | Vibrant Lime (`#ccff00`) |
| Simple hero | Cinematic 3D hero with parallax |
| Standard buttons | SpecularButton (WebGL) + StarBorder + ElectricBorder |

---

## Component Structure

```
src/components/hero/
├── Hero.astro              # Main hero component (server-rendered)
├── HeroBottle.astro        # 3D product showcase (client:visible)
├── HeroGrainient.astro     # WebGL background (client:load)
├── HeroStats.astro         # Animated counters (client:visible)
├── HeroCTA.astro           # CTA buttons group
└── index.ts                # Exports
```

---

## Hero Content (from EditorState)

```typescript
interface HeroContent {
  tag: string;                    // "100% Natural Botanicals"
  headline1: string;              // "Make Every"
  headline2: string;              // "Dish"
  headlineAccent: string;         // "Shine."
  subtitle: string;               // "The Lemoo Washer — engineered for everyday luxury..."
  cta1: string;                   // "Shop Now"
  cta2: string;                   // "View Product"
  stats: HeroStat[];              // [{ label: "Products", value: 19 }, ...]
}

interface HeroStat {
  label: string;
  value: number;
  suffix?: string;                // "+" or "K" or "%"
}
```

---

## Visual Design Spec

### Layout
- **Desktop**: 2-column grid (1fr 1fr), 80px gap
- **Tablet**: Stacked, text centered, bottle above
- **Mobile**: Single column, reduced padding

### Typography
```css
/* Tag */
font-family: var(--font-family-ui);
font-size: var(--text-sm);
font-weight: var(--font-weight-semibold);
letter-spacing: var(--tracking-widest);
text-transform: uppercase;
color: var(--color-accent);

/* Headline */
font-family: var(--font-family-display);
font-size: clamp(3rem, 6vw, 5rem);
font-weight: 500;
line-height: 1.1;
letter-spacing: var(--tracking-tight);
color: #ffffff;

/* Accent word */
font-style: italic;
color: var(--color-accent);

/* Subtitle */
font-family: var(--font-family-ui);
font-size: 1.15rem;
font-weight: 300;
line-height: 1.7;
color: rgba(255,255,255,0.6);
max-width: 480px;
```

### Color Palette (Hero Specific)
```css
--hero-bg: var(--color-primary-dark);           /* #003513 */
--hero-gradient-1: rgba(0,75,28,0.95);          /* Primary at 20% 50% */
--hero-gradient-2: rgba(0,50,15,0.85);          /* Primary-dark at 80% 30% */
--hero-gradient-3: rgba(200,220,0,0.08);        /* Accent hint at 70% 60% */
--hero-gradient-4: rgba(204,255,0,0.06);        /* Accent at 50% 80% */
--hero-grainient-opacity: 0.9;
--hero-tag-bg: rgba(204,255,0,0.1);
--hero-tag-border: rgba(204,255,0,0.2);
```

### Animation Spec

| Element | Animation | Duration | Trigger |
|---------|-----------|----------|---------|
| Reveal (text) | Fade + slide up | 0.8s | IntersectionObserver |
| Reveal stagger | Delay 100ms each | — | CSS delay classes |
| Bottle float/rotate | 3D transform keyframes | 8s | Loop (CSS) |
| Bottle spin filter | Drop-shadow rotation | 20s | Loop (CSS) |
| Orbit rings | Rotate + scale pulse | 12s/18s/25s | Loop (CSS) |
| Sparkles | Rise + drift + fade | 3-7s | Loop (CSS) |
| Light beam | Sweep rotation | 8s | Loop (CSS) |
| Grainient | Shader noise/warp | Continuous | WebGL (viewport) |
| Mouse parallax | GSAP transform | 0.06 lerp | Mousemove |
| Scroll parallax | GSAP ScrollTrigger | Scrub 1 | Scroll |
| Counters | Count up | ~2s | IntersectionObserver |

### Reduced Motion
- All CSS animations → `animation-duration: 0.001s`
- WebGL → pause via IntersectionObserver + visibilitychange
- GSAP → skip initialization
- Reveal → instant opacity: 1

---

## Component API

### Hero.astro
```astro
---
interface Props {
  content: HeroContent;
  bottleImage: ImageMetadata;
}
---
<HeroContent {...content} bottleImage={bottleImage} />
```

### HeroBottle.tsx (client:visible)
```typescript
interface Props {
  src: string;
  alt: string;
  priority?: boolean;
}
```
- 3D float/rotate via CSS keyframes
- Mouse-tracking parallax via GSAP (desktop only)
- Scroll-linked parallax via ScrollTrigger

### HeroGrainient.tsx (client:load)
```typescript
interface Props {
  config?: Partial<GrainientConfig>;
}
```
- OGL WebGL shader
- Pauses when not in viewport
- Respects reduced motion

### HeroStats.astro (client:visible)
```typescript
interface Props {
  stats: HeroStat[];
}
```
- IntersectionObserver triggered count-up
- Tabular numbers font variant

---

## Responsive Breakpoints

```css
/* Desktop: > 1024px */
.hero-grid { grid-template-columns: 1fr 1fr; gap: 80px; }
.hero-title { font-size: clamp(3rem, 6vw, 5rem); }

/* Tablet: 768px - 1024px */
@media (max-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr; gap: 60px; text-align: center; }
  .hero-left { max-width: 100%; }
  .hero-actions { justify-content: center; }
  .hero-stats { justify-content: center; gap: 32px; }
}

/* Mobile: < 768px */
@media (max-width: 768px) {
  .hero { min-height: auto; padding: 100px 0 80px; }
  .hero-content { padding: 80px 0 60px; }
  .hero-title { font-size: clamp(2.5rem, 8vw, 3.5rem); }
  .hero-subtitle { font-size: 1rem; max-width: 100%; }
  .hero-stats { flex-wrap: wrap; gap: 24px; }
  .hero-bottle { max-width: 320px; }
}
```

---

## Accessibility

- [ ] Semantic `<header>` for hero section
- [ ] `<h1>` for main headline
- [ ] Alt text: "LEMOO Washer dish wash bottle — Make Every Dish Shine"
- [ ] Focus visible on CTA buttons
- [ ] ARIA labels on icon-only buttons
- [ ] Reduced motion respected
- [ ] Color contrast: WCAG AA on all text

---

## Performance Notes

- **Bottle image**: Preload with `fetchpriority="high"`, WebP/AVIF via Astro Image
- **Grainient**: Only initializes when in viewport
- **GSAP/ScrollTrigger**: Code-split, loaded only on hero page
- **OGL**: Code-split into separate chunk
- **Fonts**: Preload critical (Playfair Display 500, Manrope 400/600)

---

## Implementation Checklist

- [ ] Create `Hero.astro` with server-rendered content
- [ ] Create `HeroBottle.astro` with client:visible hydration
- [ ] Create `HeroGrainient.astro` with client:load hydration
- [ ] Create `HeroStats.astro` with client:visible hydration
- [ ] Create `HeroCTA.astro` with SpecularButton + StarBorder
- [ ] Add GSAP ScrollTrigger parallax for bottle
- [ ] Add mouse-tracking parallax (desktop only)
- [ ] Implement reduced motion guards
- [ ] Optimize bottle image (WebP/AVIF, multiple sizes)
- [ ] Test: Desktop, tablet, mobile, reduced motion, Lighthouse