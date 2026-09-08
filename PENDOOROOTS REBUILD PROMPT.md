# PENDOOROOTS / LEMOO WASHER — MASTER OPENCODE REBUILD PROMPT

You are acting as a **Senior Full-Stack Developer, AI Engineer, UI/UX Engineer, Design Systems Architect, Prompt Engineer, Product Strategist, Reverse-Engineering Specialist, and QA Engineer**.

Your job is to rebuild and significantly improve my existing **PENDOOROOTS / LEMOO Washer marketing website** while preserving the existing codebase, business logic, brand identity, and working functionality.

## REFERENCE WEBSITE

Existing live website:

https://pendooroots-site.vercel.app/

The target aesthetic is:

**Cinematic + Classic + Premium + Natural + Editorial + Modern**

Do NOT make it look like a generic SaaS website.

---

# 1. IMPORTANT: READ EVERYTHING FIRST

Before writing or modifying ANY code:

### A. Inspect the entire existing repository

Understand:

- Framework
- Programming language
- Package manager
- Folder structure
- Routes
- Components
- Styling system
- CSS/Tailwind configuration
- Fonts
- Images
- Videos
- Icons
- Animations
- Data structures
- APIs
- Ecommerce functionality
- Cart
- Checkout
- Product system
- Contact/WhatsApp integration
- SEO
- Metadata
- Environment variables
- Existing dependencies
- Deployment configuration

### B. READ ALL RELEVANT `.md` FILES

Search the repository recursively for:

- `*.md`
- `README.md`
- `CLAUDE.md`
- `AGENTS.md`
- `CONTRIBUTING.md`
- project documentation
- architecture documents
- design documents
- task documents
- existing AI-agent instructions

Read them before making implementation decisions.

If there are multiple instruction files, determine their scope and priority.

**Do not ignore existing project instructions.**

If I provide a specific rebuild/reverse-engineering `.md` file, treat it as a primary project specification.

Use the provided:

`PENDOOROOTS_Cinematic_Rebuild.md`

as the main design/rebuild specification.

---

# 2. DO NOT CODE IMMEDIATELY

Your first job is **RESEARCH + AUDIT**, not implementation.

Create:

`SITE_AUDIT.md`

Document:

### Technical architecture
- framework
- language
- dependencies
- routing
- component architecture
- data architecture
- API integrations

### Visual architecture
- color system
- typography
- font families
- font weights
- font sizes
- spacing
- grid
- layout
- borders
- shadows
- radius
- imagery
- iconography

### Motion
Identify:

- entrance animations
- scroll animations
- hover effects
- transitions
- parallax
- image movement
- page transitions
- loading states

### Responsive behavior

Analyze:

- desktop
- tablet
- mobile

Determine how layouts transform between breakpoints.

### Assets

Inventory:

- images
- videos
- logos
- SVGs
- icons
- fonts
- product photography
- backgrounds

Do not invent assets that already exist.

### Ecommerce

Document:

- product structure
- product pages
- cart
- quantity controls
- checkout
- pricing
- shipping
- state management

---

# 3. REVERSE-ENGINEER THE DESIGN

Study the existing website and determine the design methodology behind it.

Do not merely describe what you see.

Identify the underlying:

- design patterns
- visual hierarchy
- composition
- spacing system
- typography hierarchy
- component patterns
- interaction patterns
- storytelling structure
- conversion strategy
- visual rhythm
- cinematic techniques
- product presentation strategy

Explain WHY each major design decision works.

Then translate those principles into reusable design-system rules.

---

# 4. BRAND DIRECTION

The website represents:

**PENDOOROOTS**

Primary product:

**LEMOO Washer**

Core feeling:

> Premium natural household care presented through cinematic editorial storytelling.

The design should feel:

- sophisticated
- premium
- timeless
- natural
- tactile
- cinematic
- trustworthy
- elegant
- minimal
- product-focused

Avoid:

- generic SaaS layouts
- excessive gradients
- excessive glassmorphism
- childish UI
- excessive rounded cards
- unnecessary animations
- visual clutter
- template-like sections
- over-engineered interactions

---

# 5. VISUAL DESIGN SYSTEM

Extract exact existing values wherever possible.

Create centralized design tokens for:

- colors
- typography
- spacing
- sizing
- borders
- shadows
- radii
- transitions
- breakpoints

Preferred visual direction:

- natural greens
- warm neutrals
- cream
- white
- black / near-black
- subtle earthy tones

But do NOT blindly apply these values.

First inspect the existing implementation and assets.

---

# 6. TYPOGRAPHY

Determine the existing fonts from:

- source code
- CSS
- font files
- Google Fonts
- imported font libraries
- assets

If existing fonts are available and usable, preserve them.

If not available, select free/open fonts with the closest editorial/classic characteristics.

Define:

- display typography
- heading typography
- body typography
- navigation typography
- labels
- buttons
- product information

Typography should be a major part of the cinematic identity.

---

# 7. CINEMATIC EXPERIENCE

Build the site around **visual storytelling**, not just sections stacked vertically.

Use:

- strong hero composition
- large-scale imagery
- controlled whitespace
- editorial layouts
- product-focused photography
- visual transitions
- subtle scroll interactions
- layered compositions
- intentional pacing

Motion must support storytelling.

Use animation sparingly.

Respect:

`prefers-reduced-motion`

---

# 8. WEBSITE STRUCTURE

Preserve existing routes where practical.

Expected structure:

### HOME
- cinematic hero
- LEMOO Washer introduction
- product benefits
- ingredients / natural story
- product photography
- sustainability
- brand story
- editorial content
- shop CTA
- footer

### SHOP
- product discovery
- product cards
- product details
- purchasing
- cart interaction

### ABOUT
- brand story
- philosophy
- visual storytelling

### SUSTAINABILITY
- sustainability story
- ingredients/material information
- factual claims only

### JOURNAL
- editorial content
- articles
- storytelling

### CONTACT
- contact information
- WhatsApp CTA if already implemented

Do not remove existing functionality unless there is a clear technical reason.

---

# 9. CODE QUALITY

Follow professional production standards.

Use:

- TypeScript
- reusable components
- semantic HTML
- accessible controls
- responsive design
- typed data
- clean architecture
- centralized design tokens
- reusable UI primitives

Avoid:

- giant components
- duplicated code
- duplicated CSS
- unnecessary dependencies
- unnecessary abstractions
- hardcoded repeated values
- broken responsive layouts

---

# 10. DO NOT REWRITE THE PROJECT UNNECESSARILY

This is an existing project.

Before replacing anything ask:

**Can the current implementation be improved instead?**

Preserve:

- working ecommerce logic
- existing APIs
- useful components
- existing routes
- SEO
- existing data
- deployment configuration

Only replace architecture when there is a measurable technical reason.

---

# 11. AI VIBE-CODING WORKFLOW

Work in controlled phases.

## PHASE 1 — REPOSITORY AUDIT

Read all `.md` files.

Inspect the complete repository.

Run the project.

Understand the current architecture.

Create:

`SITE_AUDIT.md`

Do NOT redesign yet.

---

## PHASE 2 — DESIGN SYSTEM

Create/update:

- design tokens
- typography
- colors
- spacing
- responsive rules
- animation system
- reusable UI primitives

Do not build every page at once.

---

## PHASE 3 — HOMEPAGE

Build the homepage first.

Focus heavily on:

- hero
- product storytelling
- typography
- imagery
- cinematic transitions
- responsive behavior

Test it before continuing.

---

## PHASE 4 — OTHER PAGES

Then rebuild:

- Shop
- Product
- About
- Sustainability
- Journal
- Contact

Reuse the design system.

---

## PHASE 5 — ECOMMERCE

Verify:

- product selection
- quantity
- cart
- subtotal
- shipping
- checkout
- persistence
- responsive behavior

Do not break existing purchasing functionality.

---

## PHASE 6 — POLISH

Improve:

- spacing
- typography
- animation
- responsive layouts
- loading states
- image optimization
- hover states
- accessibility
- visual consistency

---

# 12. TEST AFTER EVERY MAJOR CHANGE

After each phase:

1. Run typecheck.
2. Run lint.
3. Run build.
4. Run the development server.
5. Test desktop.
6. Test tablet.
7. Test mobile.
8. Check browser console.
9. Check broken links.
10. Check images.
11. Check interactions.
12. Fix regressions before continuing.

Never accumulate multiple unknown errors.

---

# 13. PERFORMANCE

Optimize for production.

Check:

- image sizes
- image formats
- lazy loading
- font loading
- JavaScript bundle size
- unnecessary dependencies
- layout shifts
- animation performance
- Core Web Vitals

Do not sacrifice performance for visual effects.

---

# 14. SEO + ACCESSIBILITY

Preserve or improve:

- page titles
- descriptions
- Open Graph metadata
- semantic HTML
- alt text
- heading hierarchy
- keyboard navigation
- focus states
- accessible buttons
- color contrast

---

# 15. FREE-FIRST TOOL STRATEGY

I am building this with a **free-first budget**.

Prefer:

- OpenCode
- Git
- GitHub
- VS Code
- Chrome DevTools
- Lighthouse
- Playwright
- free/open-source libraries
- Vercel free tier

Do NOT introduce paid services unless absolutely necessary.

If a paid service is currently present, document it before replacing it.

---

# 16. OPEN SOURCE / FREE LIBRARY POLICY

Before adding a dependency:

Ask:

1. Do we actually need it?
2. Is there already a dependency that does this?
3. Is there a free/open-source alternative?
4. Will it increase bundle size?
5. Does it improve maintainability?

Avoid dependency bloat.

---

# 17. REVERSE ENGINEERING ETHICS

Use the existing PENDOOROOTS website as the reference for understanding its own:

- structure
- design language
- patterns
- content organization
- interaction model

Do not copy proprietary designs from unrelated brands.

The goal is to create a refined evolution of the existing PENDOOROOTS identity.

---

# 18. DECISION-MAKING RULE

When something is unclear:

First inspect the repository.

Then inspect existing assets.

Then inspect the live website.

Then make the smallest reasonable assumption.

Do not fabricate technical facts.

Clearly label assumptions inside `SITE_AUDIT.md`.

---

# 19. COMMUNICATION FORMAT

Before implementation, report:

### Current Stack
...

### Current Architecture
...

### Existing Problems
...

### Design Opportunities
...

### Recommended Architecture
...

### Implementation Plan
...

### Files That Will Change
...

Then begin implementation.

After every major phase, report:

### Completed
...

### Files Changed
...

### Tests
...

### Problems Found
...

### Next Phase
...

Keep reports concise.

---

# 20. DEFINITION OF DONE

The final website must:

- preserve PENDOOROOTS identity
- retain working business logic
- feel cinematic
- feel classic
- feel premium
- feel natural
- work perfectly on mobile
- work on tablet
- work on desktop
- have consistent typography
- have consistent spacing
- have refined animation
- have optimized imagery
- have accessible interactions
- have good SEO
- have no console errors
- pass production build
- avoid unnecessary dependencies
- use reusable components
- be maintainable by another developer

---

# FINAL COMMAND

**DO NOT START BY WRITING CODE.**

First:

1. Read every relevant `.md` file.
2. Inspect the complete existing codebase.
3. Inspect the existing website.
4. Audit the architecture.
5. Audit the visual system.
6. Audit the assets.
7. Reverse-engineer the design methodology.
8. Create `SITE_AUDIT.md`.
9. Present the implementation plan.
10. Then execute the rebuild phase-by-phase.
11. Test every phase.
12. Never perform a blind full-project rewrite.

Your goal is not simply to make the website “look better.”

Your goal is to create a **production-quality cinematic PENDOOROOTS / LEMOO Washer website based on the existing codebase, existing brand identity, and a professionally reverse-engineered design system.**