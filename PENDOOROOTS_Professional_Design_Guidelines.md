# PENDOOROOTS / LEMOO — PROFESSIONAL AI DESIGN BUILD GUIDELINES

## Purpose
Design authority for the PENDOOROOTS / LEMOO Washer website.
Target: **Cinematic + Classic + Premium + Natural + Editorial + Product-focused**.

Use this with `PENDOOROOTS_Cinematic_Rebuild.md`.

## 1. Core Principle
Every visual decision must have a reason:
1. What is its purpose?
2. What should the user notice first?
3. Does it strengthen the brand?
4. Does it improve understanding or conversion?
5. Does it belong to the existing visual language?

If unclear, remove it.

**Professional design is usually subtraction, not addition.**

## 2. Visual Hierarchy
Every section needs:
- Level 1: one dominant focus
- Level 2: supporting information
- Level 3: secondary details

Do not make everything equally large, bold, bright, animated, or important.

**One section = one dominant visual idea.**

## 3. Five-Second Test
Within ~5 seconds, users should understand:
- what the section is about
- what matters most
- where to look next
- what action is available

If the eye has to search, simplify.

## 4. Layout & Grid
Create consistent:
- maximum content width
- page gutters
- section spacing
- grid columns
- text widths
- image proportions
- alignment rules

Use strong alignment. Avoid arbitrary margins, random widths, accidental near-alignment, and inconsistent containers.

Use an underlying grid even for asymmetric compositions. Desktop may use a 12-column conceptual grid. Mobile must be deliberately redesigned, not merely shrunk.

## 5. Whitespace & Spacing
Whitespace is intentional; never fill it just because it exists.

Create a reusable spacing scale, e.g.:
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`

Adapt values to the existing project.

## 6. Color System
Preserve the existing PENDOOROOTS / LEMOO identity.

Preferred direction:
- natural greens
- warm cream
- soft whites
- earthy neutrals
- near-black typography
- restrained green accent

Do not introduce random neon, purple/blue "AI gradients", rainbow palettes, or unrelated colors.

Define roles:
- primary background
- secondary background
- primary text
- secondary text
- brand accent
- border
- CTA
- status/error

Use contrast through size, weight, color, whitespace, scale, position, and imagery—not color alone.

## 7. Typography
Use a limited, coherent type system:
1. Display
2. H1
3. H2
4. H3
5. Body
6. Secondary body
7. Label
8. CTA/navigation

Preserve existing fonts when available. Otherwise choose free/open fonts with a similar editorial/classic character.

Control:
- line length
- font weight
- heading scale
- line height
- wrapping
- ALL CAPS usage

Do not use many unrelated fonts or oversized text without purpose.

## 8. Imagery
Prioritize:
- recognizable product
- believable lighting
- natural textures
- controlled composition
- consistent treatment
- high resolution

Do not use random stock images to fill space.

Never distort packaging, logos, product proportions, or product claims.

## 9. Cards
AI overuses cards.

Use a card only when content genuinely needs grouping.

Prefer for this brand:
- editorial compositions
- image + text
- asymmetric layouts
- large product moments
- storytelling sections

Avoid turning every feature into a rounded card.

## 10. Radius, Borders & Shadows
Do not use huge radius everywhere (`rounded-3xl` on everything).

Use subtle/moderate radius intentionally.

Avoid excessive borders and shadows. Not every element needs to look like it is floating.

## 11. Buttons & Navigation
Use one clear primary CTA.

Avoid:
- multiple competing primary buttons
- giant pill buttons everywhere
- unclear labels
- experimental navigation that hurts usability

Navigation should be simple, readable, responsive, and predictable.

## 12. Hero
The hero establishes brand, product, mood, value proposition, and next action.

**One hero + one dominant story + one product moment + one primary action.**

Avoid excessive badges, competing headlines, 3+ CTAs, decorative blobs, floating cards, and crowded above-the-fold content.

## 13. Cinematic Motion
Motion should communicate hierarchy, continuity, feedback, or spatial relationships.

Good:
- subtle reveals
- opacity/transform
- image reveals
- gentle scale
- restrained parallax
- hover feedback

Bad:
- everything bouncing
- everything fading
- excessive parallax
- constant floating objects
- slow transitions
- animation on every scroll event

Respect `prefers-reduced-motion`.

**If removing an animation improves the design, remove it.**

## 14. AI-Generated Design Smells
Watch for:
1. Everything rounded.
2. Everything inside cards.
3. Too many gradients.
4. Too many floating objects.
5. No visual hierarchy.
6. Random spacing.
7. Random typography.
8. Excessive icons.
9. Generic AI copy.
10. Excessive animation.
11. Generic SaaS section templates.
12. Decorative elements with no purpose.
13. Inconsistent image treatment.
14. Too many primary-looking buttons.
15. Excessive shadows.
16. Poor headline wrapping.
17. Too much content above the fold.
18. Fake complexity.

## 15. Design Psychology
Use:
- **Primacy:** strongest visual gets attention first.
- **Chunking:** group related information through spacing/hierarchy.
- **Cognitive load:** reduce unnecessary choices.
- **Visual fluency:** repeat patterns consistently.
- **Trust:** consistency increases perceived credibility.
- **Scanning:** design for scanning before deep reading.

## 16. Conversion
Sell through:
- product clarity
- trust
- benefits
- storytelling
- photography
- restrained CTAs

Avoid fake urgency, excessive popups, constant sales banners, fake testimonials, invented statistics, and unsupported claims.

## 17. Content Design
Each section should answer one question:
- Hero: What is this?
- Product: Why should I care?
- Benefits: What does it do?
- Ingredients: Why trust it?
- Sustainability: Why does the brand matter?
- CTA: What should I do next?

Do not create sections merely because websites usually contain them.

## 18. Vibe-Coding Rules
Never tell AI only:
> "Make it more modern/beautiful."

Instead specify:
- what is wrong
- why it is wrong
- what principle should change
- what must remain
- how success will be judged

Use:
**Observe → Diagnose → Plan → Change → Compare → Test → Refine**

Never:
**Generate → Accept → Move on**

## 19. Responsive Rules
Explicitly test desktop, tablet, and mobile.

Check:
- type scaling
- image crops
- navigation
- spacing
- CTA placement
- section order
- cards
- overflow

Never allow clipped text, horizontal scrolling, overlaps, unreadable controls, or broken crops.

## 20. Professional Quality Gate
Before approving a page:
- [ ] clear hierarchy
- [ ] consistent grid
- [ ] consistent spacing
- [ ] restrained palette
- [ ] coherent typography
- [ ] intentional imagery
- [ ] meaningful components
- [ ] minimal decoration
- [ ] clear CTA hierarchy
- [ ] responsive
- [ ] accessible contrast
- [ ] keyboard usable
- [ ] sensible motion
- [ ] no clutter
- [ ] no generic AI patterns
- [ ] recognizable PENDOOROOTS identity

## Final Rule
The target is not:
**"AI made a cool website."**

The target is:
**"A professional design team deliberately built this brand experience."**

Prefer:
**clarity over decoration  
hierarchy over density  
consistency over novelty  
restraint over excess  
storytelling over templates  
quality over quantity**

## Agent Instruction
Before changing UI:
1. Read this entire document.
2. Read `PENDOOROOTS_Cinematic_Rebuild.md`.
3. Read every other relevant `.md` file.
4. Inspect the existing design system and assets.
5. Inspect the current website.
6. Identify the highest-impact design problems.
7. Fix them systematically.
8. Do not introduce patterns that contradict this document.

**Optimize for visual-system quality, not the amount of UI generated.**
