# CODEX CORRECTION — EQT-253 R3: side-bleed callout, deliverables index, equation wrap

## STOP — READ THIS FIRST

- Complete spec for round 3 on branch `eqt-253-services-v6x` (PR #37 stays open; push to the same branch). Do not hunt for other prompts.
- Files you may touch: `src/components/ServicePage.astro` and `src/styles/services.css` ONLY. The build brief's firewall stays locked (index.astro, home.css, base.css, tokens.css, icons root, glyphs contents, Layout/Nav/Footer). The R2 base.css footer exception is CLOSED; do not touch base.css this round.
- Reviewer working-tree files (`prototypes/explorations/*` modified/untracked) remain off limits: do not stage, modify, or discard.
- Report: files changed, `npm run build` green. All three items apply to all six pages via the shared template.

## 1. Highlight callout = side-bleed from the page edge (block 17 treatment)

The navy-wash callout ("A diagnostic is not a delay." etc.) currently renders as a floating contained rounded box. The locked treatment is exploration v6 **block 17**: a statement callout that RUNS OFF the side edge of the viewport — anchored to the LEFT page edge, background bleeding to the screen edge with no left radius, **rounded on the inner (right) side only**, content inside still aligned to the page's left text axis. Keep the navy-wash `#E8ECF5` fill, the Montserrat lead line, the Lora support line. Asymmetric and singular: one callout per page, exactly as block 17 demonstrates.

## 2. Deliverables index list in WHAT YOU RECEIVE

Readers cannot recall all four deliverables from a one-at-a-time carousel. Add a compact **index of the four deliverable names** between the section intro and the carousel:

- One hairline-separated row (or 2x2 at narrow widths) of the four deliverable names, Montserrat, with a small marker per item.
- Each index item is a BUTTON that jumps the carousel to that slide. The active item tracks the carousel position (terracotta text + terracotta marker, same active language as the dots). Scroll-snap, arrows and dots keep working and stay in sync with the index.
- Keyboard accessible (real buttons, visible focus), `aria-controls` on the carousel region.
- The carousel itself is unchanged otherwise.

## 3. Equation row must never orphan an operator

At some widths the CTA equation wraps with the `=` stranded at the right edge and the WHAT YOU GET box dropped to a full-width row below — the formula reads broken. Fix the grid:

- Desktop (wide): A `+` B `=` C in ONE row, five columns, operators optically centred at the new 48px size.
- When space runs out, switch deliberately (single breakpoint) to the STACKED layout: box, centred `+`, box, centred `=`, box, vertically flowing. Never an intermediate wrap that separates an operator from its neighbour boxes.
- Verify at 1440 / 1180 / 900 / 760 / 390 widths and state which breakpoint you chose.

## Acceptance (reviewer eyeballs localhost)

- [ ] Callout bleeds off the left viewport edge, rounded right side only, on all six pages; content keeps the page's left text axis.
- [ ] Four-item deliverables index above the carousel: click jumps to the slide, active state tracks scrolling, keyboard accessible.
- [ ] Equation never strands an operator at any width; clean single-row and stacked states only.
- [ ] No changes outside ServicePage.astro / services.css. `npm run build` green.

Push to `eqt-253-services-v6x`. Do NOT mark EQT-253 Done.
