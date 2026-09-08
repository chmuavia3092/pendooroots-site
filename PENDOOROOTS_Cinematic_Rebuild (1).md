# PENDOOROOTS / LEMOO WASHER — Cinematic Website Rebuild Brief

## Mission
Rebuild the existing PENDOOROOTS LEMOO Washer marketing/e-commerce website from the existing codebase, preserving its brand identity while upgrading the implementation to a refined cinematic + classic premium experience.

Reference site:
https://pendooroots-site.vercel.app/

## 1. Reverse-engineering findings
The publicly crawlable site exposes this information architecture:
- Brand: PENDOOROOTS
- Product: LEMOO Washer
- Primary navigation: Home, Shop, About, Sustainability, Journal, Contact
- E-commerce UI: search, bag/cart, subtotal, shipping calculation, checkout, continue shopping
- Customer contact: WhatsApp chat entry
- Editor/admin-facing entry is present in the current UI and should not be exposed publicly in the redesigned production experience unless it is intentionally protected.
- Brand positioning visible from the page title: “Make Every Dish Shine.”

IMPORTANT: The crawler does not expose the full visual layer (exact font files, animation timings, image assets, CSS values, or all responsive states). Do NOT invent these as facts. Inspect the existing source/assets locally before changing them.

## 2. First task: audit, don't code blindly
Before implementation:
1. Inspect the entire existing repository.
2. Identify framework, language, package manager, routing, components, styling system, assets, fonts, image/video files, animations, data models, and API integrations.
3. Run the existing project locally.
4. Capture the current UI at desktop/tablet/mobile widths.
5. Identify reusable components and preserve working business logic.
6. Create `SITE_AUDIT.md` containing:
   - current architecture
   - route map
   - component map
   - asset inventory
   - typography inventory
   - color tokens
   - spacing/layout patterns
   - animation/motion patterns
   - responsive behavior
   - ecommerce/cart behavior
   - integrations
   - technical debt
   - exact files that should be changed
7. Only then start the redesign.

## 3. Design direction
Target aesthetic:
- cinematic
- classic
- premium
- editorial
- natural
- tactile
- restrained, not flashy
- strong product photography
- generous whitespace
- sophisticated typography
- subtle motion
- high perceived quality

Do NOT copy another company's proprietary design. Use the existing PENDOOROOTS site as the visual reference and evolve its own identity.

## 4. Visual system
Derive the exact values from the existing code/assets where available.

Create a centralized design system:
- CSS variables/design tokens
- typography scale
- spacing scale
- radii
- shadows
- borders
- surface/background tokens
- motion tokens
- responsive breakpoints

Prefer:
- warm natural neutrals
- controlled green accents
- cream/white surfaces
- near-black typography
- restrained contrast

Typography:
- Preserve the existing brand fonts if legally/local-assets available.
- If unavailable, select freely usable fonts with a similar editorial/classic character.
- Load fonts locally where practical.
- Define clear display, heading, body, label, and navigation styles.

## 5. Motion language
Use motion to communicate quality, not decoration:
- page/section reveal
- subtle image parallax
- product-image entrance
- smooth hover states
- scroll-triggered editorial transitions
- restrained navigation transitions
- cart drawer transitions

Avoid:
- excessive animation
- constant looping effects
- slow animations that hurt usability
- motion on every element

Respect `prefers-reduced-motion`.

## 6. Page structure
Preserve the existing information architecture unless the audit shows a better structure.

### Home
- premium hero
- LEMOO Washer product story
- key benefits
- ingredients/natural story
- product photography
- sustainability story
- editorial/journal section
- strong shop CTA
- footer

### Shop
- product discovery
- search/filter where supported
- product cards
- product detail
- cart interaction

### About
- brand story
- philosophy
- product/brand imagery

### Sustainability
- ingredients/material story
- responsible positioning
- factual claims only

### Journal
- editorial cards
- article detail pages if supported by current architecture

### Contact
- contact information
- WhatsApp CTA if currently integrated

## 7. Engineering rules
Preferred stack if the current project already uses it:
- TypeScript
- React
- Tailwind CSS
- Framer Motion or the project's existing motion library
- existing ecommerce/data layer
- Vercel deployment

Do NOT rewrite the framework merely for preference. Preserve the current stack when it is technically sound.

Architecture:
- reusable components
- feature-based organization where practical
- typed data
- accessible semantic HTML
- responsive-first implementation
- no duplicated styling
- no giant monolithic components
- keep content/data separate from presentation
- preserve SEO metadata
- optimize images and lazy-load below-the-fold media
- avoid unnecessary dependencies

## 8. AI/vibe-coding workflow
Work in controlled phases:

Phase 1 — Audit
Phase 2 — Design system
Phase 3 — Homepage
Phase 4 — Remaining pages
Phase 5 — Ecommerce interactions
Phase 6 — Responsive polish
Phase 7 — Performance/accessibility/SEO
Phase 8 — Final QA

For every phase:
1. Inspect.
2. Plan.
3. Implement the smallest coherent change.
4. Run typecheck/lint/build.
5. Test in browser.
6. Fix regressions.
7. Report changed files and remaining issues.

Never make a huge blind rewrite.

## 9. Free-first development
Use existing/free/open-source tools where possible. Do not introduce paid APIs or services unless the current project already depends on them.

Recommended:
- OpenCode for agentic coding
- Git + GitHub for version control
- VS Code for inspection/debugging
- Chrome DevTools for responsive/performance testing
- Vercel free tier for deployment if compatible
- Lighthouse for performance/accessibility/SEO
- Playwright if browser automation/testing is needed

## 10. Definition of done
The rebuilt website must:
- preserve working business logic
- feel unmistakably PENDOOROOTS/LEMOO
- have a cinematic classic visual language
- work on mobile/tablet/desktop
- have no console errors
- pass production build
- have accessible navigation and controls
- have optimized media
- preserve or improve SEO
- avoid layout shifts
- have consistent motion
- have clean reusable code

## Final instruction to OpenCode
Do not start by generating code.

Start by auditing the repository and producing `SITE_AUDIT.md`. Then propose the implementation plan. After the plan is clear, execute phase-by-phase and verify each phase before moving forward.
