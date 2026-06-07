# CODEX CORRECTION — EQT-253 R2: equation operators, hero scale, footer mobile

## STOP — READ THIS FIRST

- Complete spec for round 2 on branch `eqt-253-services-v6x` (PR #37 stays open; push to the same branch). Do not hunt for other prompts.
- Files you may touch: `src/components/ServicePage.astro`, `src/styles/services.css`, and — as a DELIBERATE, Herman-approved exception (2026-06-07) — the footer rules inside `src/styles/base.css` (item 3 ONLY; nothing else in that file). Everything else from the build brief's firewall stays locked: `index.astro`, `home.css`, `tokens.css`, icons root, glyphs contents, `Layout/Nav/Footer` components.
- Reviewer working-tree files (`prototypes/explorations/*` modified/untracked) remain off limits: do not stage, modify, or discard.
- Report: files changed, what you found in item 2's diagnosis, before/after rendered hero-art width, `npm run build` green.

## 1. Double the equation operators

`.cta-op` is 24px. Make the `+` and `=` operators **48px, Montserrat 700, terracotta** (this matches the locked v5x CTA-equation precedent of 48px/700 operators). Keep them optically centred between the boxes at the new size, desktop and stacked mobile.

## 2. Hero art is still small — diagnose, then match the home hero

The R1 change (`.service-hero-art span{width:clamp(320px,34vw,460px)}`) does not visibly land. Diagnose why (likely candidates: the hero grid's art column constraining the span; the span/svg sizing chain; a stale dev-server build) and fix so the rendered art visually matches the HOME hero's scale and presence:

- Size the SVG directly, the way home does: `.service-hero-art svg{width:min(540px,48vw);height:auto;}` (home uses exactly `min(540px,48vw)` on the svg element).
- Ensure `.service-hero-inner`'s grid gives the art column the same proportion as the home hero grid; the motif bleeds right into the whitespace (the `translateX` nudge can stay).
- Verify by measuring the rendered svg width on `/services/frame/` against the home hero at the same viewport width; report both numbers. Do not claim fixed without the numbers.

## 3. Footer: two link columns on mobile (base.css exception)

At phone widths the footer link sections (SERVICES / COMPANY / CONNECT) stack into one long single column. Fix in the footer rules of `base.css`:

- ≤760px (and ≤460px): brand block (logo + tagline) full-width on top, then the three link columns flow in a **2-column grid** (SERVICES and COMPANY side by side, CONNECT below in the left cell or spanning as the natural grid flow dictates). Comfortable gaps, no squashing.
- Touch ONLY the `.site-footer` / `.footer-*` rules in `base.css`. This intentionally lands site-wide (home included): footer is one shared component.

## 4. Responsive check on the merged WHERE IT LEADS section

At a ~580-700px viewport the reviewer observed the next-step columns still side by side (cramped, gutter `›` visible mid-content) and the pathway SVG clipping off the right edge. Verify and fix:

- `.next-grid` must stack to one column at the existing ≤860px breakpoint — confirm the rule actually applies (specificity/ordering) and the gutter `›` is hidden whenever stacked.
- The pathway SVG must scale to its container width at all viewports (viewBox scaling, no fixed min-width, no right clipping). If a horizontal-scroll fallback is genuinely needed below ~420px, make it an intentional, padded scroll, not a clip.
- When stacked, the current column sits ABOVE the next column with both status labels readable.

## Acceptance (reviewer eyeballs localhost)

- [ ] Operators read at 48px/700 terracotta, balanced in both desktop and stacked layouts.
- [ ] Hero art on all six pages visually matches the home hero scale; measured widths reported.
- [ ] Footer shows brand on top + 2-column link grid at phone widths, all pages.
- [ ] WHERE IT LEADS stacks cleanly at narrow widths; no SVG clipping; gutter chevron never shows when stacked.
- [ ] No changes outside ServicePage.astro / services.css / base.css footer rules. `npm run build` green.

Push to `eqt-253-services-v6x`. Do NOT mark EQT-253 Done.
