# PENDOOROOTS / LEMOO Washer - Site Audit

Date: 2026-09-02

## Current Stack

| Area | Current State |
| --- | --- |
| Runtime site | Static single-page application served from `index.html`, `styles.css`, and `app.js` |
| Migration scaffold | Astro 4 + TypeScript config is present, but no Astro pages/components exist yet |
| Language | JavaScript in the live app; TypeScript scaffold only |
| Package manager | npm scripts exist in `package.json`; dependencies are not installed locally |
| Styling | Custom CSS variables and component CSS; `src/styles/tokens.css` is a newer token draft |
| Motion | CSS keyframes, IntersectionObserver reveals, GSAP CDN, OGL CDN/import for WebGL effects |
| Deployment target | Vercel static hosting |
| Ecommerce | Client-side product/cart/wishlist/checkout mock flow using localStorage |

## Repository Map

| Path | Role |
| --- | --- |
| `index.html` | Current production shell: metadata, navigation, preloader, overlays, cart drawer, WhatsApp CTA, CDN dependencies |
| `app.js` | Monolithic SPA: product data, store, router, renderers, editor/admin pages, ecommerce logic, animations |
| `styles.css` | Current full visual system and page/component styles |
| `images/lemoo-washer.png` | Primary product image used for hero, product cards, and product detail |
| `images/lemoo-washer.svg` | Vector bottle/logo asset, currently available but not a primary rendered asset |
| `package.json` | Astro/npm script scaffold |
| `astro.config.mjs` | Static Astro config with Sharp image service and Vite config import |
| `vite.config.ts` | Vite aliases, build chunk hints for `gsap` and `ogl`, dev server on port 4321 |
| `tsconfig.json` | Strict Astro TypeScript config |
| `src/styles/tokens.css` | Extracted design-token draft, not currently wired into the live `index.html` app |
| `public/images/` | Empty asset target directory |

## Documentation Read

- `PENDOOROOTS REBUILD PROMPT.md`: Primary master specification.
- `PENDOOROOTS_Cinematic_Rebuild (1).md`: Main design/rebuild brief referenced by the master prompt.
- `SITE_AUDIT.md`: Existing audit was stale and described a pre-scaffold state, so this file has been replaced with the current audit.

## Live Reference Check

Source inspected: `https://pendooroots-site.vercel.app/` via Jina Reader.

The public page exposes the same information architecture as the local SPA:

- Hero copy: "Make Every Dish Shine."
- Product positioning: LEMOO Washer as botanical dish wash for everyday luxury.
- Navigation intent: Home, Shop, About, Sustainability, Journal, Contact.
- Ecommerce excerpts: product cards, pricing in Rs., sale prices, ratings, cart/bag language.
- Content blocks: benefits, best sellers, featured products, testimonials, brand story, newsletter.
- Assets: local LEMOO image plus multiple Unsplash hotlinks.

Crawler limitation: it does not reveal exact layout measurements, browser console state, or responsive screenshots. Those still require running the site locally in a browser.

## Route Map

The current SPA uses `data-page` navigation and `renderPage()` dispatch in `app.js`.

| Page key | User-facing route/section | Renderer |
| --- | --- | --- |
| `home` | Home | `renderHome()` |
| `products` | Shop/product listing | `renderProducts()` |
| `product-detail` | Product detail | `renderProductDetail(slug)` |
| `cart` | Cart page | `renderCart()` |
| `checkout` | Checkout page | `renderCheckout()` |
| `wishlist` | Wishlist | `renderWishlist()` |
| `about` | About | `renderAbout()` |
| `sustainability` | Sustainability | `renderSustainability()` |
| `blog` | Journal | `renderBlog()` |
| `faq` | FAQ | `renderFAQ()` |
| `privacy` | Privacy Policy | `renderPrivacy()` |
| `terms` | Terms | `renderTerms()` |
| `dashboard` | Admin dashboard | `renderDashboard()` |
| `inventory` | Inventory admin | `renderInventory()` |
| `orders` | Orders admin | `renderOrders()` |
| `customer` | Customer admin/profile | `renderCustomer()` |
| `editor` | Visual site editor | `renderEditor()` |

There are no real URL routes yet. Navigation is hashless SPA state, so deep links and static SEO for inner pages are weak.

## Data Architecture

- Products are hardcoded in the `PRODUCTS` array in `app.js`.
- There are 19 products across Kitchen Care, Hand Care, Body Care, Hair Care, Soaps, Skin Care, and Home Care.
- LEMOO Washer is the hero product in 500ml and 1L variants.
- Product model fields include `id`, `slug`, `name`, `variant`, `category`, `collection`, `price`, `oldPrice`, `rating`, `reviews`, `stock`, `badge`, `image`, `images`, `description`, `ingredients`, `benefits`, `howToUse`, `sizes`, and `relatedIds`.
- Collections are hardcoded in `COLLECTIONS`.
- Editor data is copied into localStorage under `editor_*` keys.
- Customer cart/wishlist/theme state uses `pr_cart`, `pr_wishlist`, and `pr_theme`.

## Ecommerce Behavior

- Add to cart supports selected size and defaults to the first size.
- Cart item key combines product id and size.
- Quantity controls enforce a minimum quantity of 1.
- Remove item works from cart page and cart drawer.
- Subtotal is computed client-side.
- Shipping is free above Rs.1000 and Rs.100 otherwise.
- Checkout is a mock form with credit card, cash on delivery, and bank transfer options.
- Checkout success clears the cart and returns to home.
- Wishlist is persisted and reflected in badges/product cards.
- Search is client-side over product name, category, and description.

## Integrations

- WhatsApp deep links use `https://wa.me/923474736347`.
- Google Fonts loads Manrope and Playfair Display from `fonts.googleapis.com`.
- Font Awesome loads from CDN.
- GSAP and ScrollTrigger load from CDN.
- OGL loads dynamically from jsDelivr.
- No backend API or real payment gateway is present.

## Visual Architecture

### Color

Current brand tokens:

```css
--primary: #004b1c;
--primary-light: #006b2a;
--primary-dark: #003513;
--accent: #ccff00;
--accent-dim: #b8e600;
--bg: #f9f9fc;
--bg-alt: #f0f0f5;
--surface: #ffffff;
--text: #1a1a1a;
--text-secondary: #555566;
--text-muted: #888899;
```

The current palette reads botanical and high-contrast, but the chartreuse accent is very loud for the requested classic premium direction. Recommendation: keep it as a signature micro-accent and shift most surfaces toward warmer cream, linen, deep green, and near-black.

### Typography

- Display: Playfair Display.
- UI/body: Manrope.
- Current typography has a strong editorial + modern pairing and should be preserved unless self-hosting requires equivalent open font files.
- Several headings use negative letter spacing; the rebuild should normalize letter spacing to `0` where possible per UI rules, while preserving elegance through font choice, scale, and line-height.

### Layout

- Main container: `1240px`; wide container: `1440px`.
- Nav height: `72px`.
- Section rhythm: large desktop padding, generally `80px-120px`.
- Hero: two-column editorial composition on desktop; stacked/centered below 1024px with product visual hidden at tablet/mobile.
- Product grids: CSS Grid with fluid cards.
- Cards use 16px-24px radii in many places; rebuild should reduce generic card feel and use more editorial bands, rule lines, and product-led layouts.

### Imagery

- Strongest asset is `images/lemoo-washer.png`.
- `images/lemoo-washer.svg` can support logo/illustrative use.
- Most non-LEMOO imagery is remote Unsplash, which is fragile and less brand-specific.
- No responsive image variants, WebP, AVIF, or local optimized derivatives exist yet.

## Motion Architecture

Current motion includes:

- Preloader with fixed 2200ms delay.
- CSS reveal class driven by IntersectionObserver.
- Hero particle field and sparkles generated by JS.
- Hero bottle float/spin keyframes and GSAP mouse tracking.
- Product/card hover transforms.
- Testimonial auto-scroll.
- Counter animations.
- WebGL/OGL specular buttons and grainient backgrounds.
- Canvas electric borders.
- Magic Bento GSAP interactions in admin/dashboard UI.
- `prefers-reduced-motion` exists in CSS and should be preserved.

Motion risk: there are many systems for a relatively small storefront. The rebuild should keep one restrained motion language: CSS for basic UI, GSAP only for hero/scroll storytelling, and OGL only if it adds measurable value.

## Responsive Behavior

Observed from CSS:

- `max-width: 1024px`: hero becomes one column, right product visual hidden, major grids collapse.
- `max-width: 768px`: nav links collapse to hamburger, product grid becomes two columns, most sections tighten, custom cursor disabled.
- `max-width: 480px`: product grid becomes one column, hero buttons full-width.

Risk: hiding the hero product visual below 1024px weakens the product-first requirement on tablet/mobile. Rebuild should keep a mobile-friendly product image in the first viewport.

## Reverse-Engineered Design Methodology

- Product as icon: the LEMOO bottle is treated as the primary brand artifact, not just a SKU.
- Editorial contrast: Playfair creates classic emotional weight while Manrope keeps commerce controls clear.
- Botanical futurism: deep green plus chartreuse signals natural care with a modern edge.
- Layered cinema: hero background, particles, rings, glow, and product image create depth.
- Conversion pacing: hero promise leads to benefits, then best sellers, collections, social proof, story, newsletter.
- Trust through specificity: ratings, reviews, ingredient lists, stock, sizes, and WhatsApp contact make the storefront feel concrete.

Design-system rules for the rebuild:

- Keep the product visible early on every viewport.
- Use chartreuse only for primary conversion moments, focus rings, tiny tags, and active states.
- Make content sections feel editorial: fewer equal cards, more mixed-scale layouts.
- Use texture through real product/material imagery, not decorative gradients.
- Keep motion slow, tactile, and interruptible; never let animation block shopping.
- Preserve commerce clarity over cinematic flourishes.

## Existing Problems

Critical:

- Runtime app is still a 3890-line monolith.
- Astro scaffold is incomplete and not connected to live UI.
- `node_modules` is absent, so `npm run typecheck` fails with `tsc` not found.
- No Astro pages/components exist despite Astro config.
- Admin/editor routes are publicly exposed in navigation.
- External CDNs are required for fonts/icons/GSAP/OGL.
- Unsplash hotlinks are used for most images.

High:

- No true route URLs for shop/product/about/etc.
- SEO metadata is global only.
- Checkout is mock-only and should be labeled/treated as such unless real payment is added.
- Hero product image is PNG only and lacks optimized variants.
- Multiple animation technologies increase performance and maintenance cost.
- Fixed preloader delay hurts perceived performance.

Medium:

- Inline event handlers and inline styles are widespread.
- Search lacks debouncing.
- Cart drawer dialog lacks full focus management.
- Some factual claims are broad and need careful wording.
- Social links are placeholders.

## Recommended Architecture

Proceed with the started Astro + TypeScript migration rather than adding another framework.

Suggested target:

- Astro static pages for Home, Shop, Product detail, About, Sustainability, Journal, Contact, FAQ, Privacy, Terms, 404.
- TypeScript product/content data in `src/data`.
- Shared `.astro` components for layout, header, footer, product cards, editorial sections.
- Small client-side TypeScript islands/modules for cart, wishlist, search, and checkout.
- Central CSS tokens in `src/styles/tokens.css`, plus global/layout/component styles split by responsibility.
- Local optimized assets in `public/images`.
- Preserve the current localStorage cart/wishlist behavior during migration.
- Hide or gate editor/admin links from public navigation until an auth story exists.

## Files That Will Change

Phase 2 foundation:

- `src/styles/tokens.css`
- Add `src/styles/global.css`
- Add `src/data/products.ts`
- Add `src/data/site.ts`
- Add `src/layouts/BaseLayout.astro`
- Add shared components under `src/components/`
- Add Astro pages under `src/pages/`
- Copy or move usable images into `public/images/`

Legacy preservation:

- Keep `index.html`, `app.js`, and `styles.css` untouched initially as rollback/reference files.
- Once Astro reaches parity, decide whether to archive/remove legacy files.

## Verification Status

- Markdown files read: passed.
- Repository/source inspection: passed for current files.
- Live public content inspection: passed through reader.
- `npm run typecheck`: failed because `node_modules` is not installed and `tsc` is unavailable.
- `npm run lint`: not run because dependencies are missing.
- `npm run build`: not run because dependencies are missing and would require installed packages/output writes.
- Local browser screenshots: not captured yet; requires running the app and browser tooling.

## Implementation Plan

### Phase 2 - Design System and Foundation

1. Install dependencies with npm.
2. Wire Astro entry pages and global CSS.
3. Port product data to typed TypeScript.
4. Create layout/header/footer primitives.
5. Preserve cart/wishlist storage contract.
6. Run typecheck/build.

### Phase 3 - Homepage

1. Build a cinematic first viewport that keeps LEMOO visible on desktop, tablet, and mobile.
2. Port benefits, product showcase, sustainability/story, testimonials, journal, newsletter, and footer.
3. Add restrained reveal/parallax behavior with reduced-motion support.
4. Test desktop/tablet/mobile and console.

### Phase 4 - Commerce and Pages

1. Build shop and product detail pages from typed data.
2. Build cart, checkout, wishlist, about, sustainability, journal, contact, FAQ, privacy, terms, and 404.
3. Keep checkout mock behavior unless real payment is separately requested.
4. Hide public editor/admin routes or isolate them.

### Phase 5 - Polish and QA

1. Optimize images and font loading.
2. Remove CDN dependence where practical.
3. Improve accessibility and focus management.
4. Add per-page metadata and product structured data.
5. Run typecheck, lint, build, and responsive browser checks.

## Assumptions

- Astro migration is acceptable because scaffold files already exist.
- No paid services should be added.
- Mock checkout remains acceptable for now.
- PKR/Rs. pricing remains the target currency.
- WhatsApp number should be preserved.
- The public editor link should be removed from customer-facing navigation unless later protected.
