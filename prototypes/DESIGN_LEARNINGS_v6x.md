# EQUIBT DESIGN LEARNINGS v6x

_CANONICAL (EQT-252). The single source of truth for v6x visual work; supersedes `DESIGN_LEARNINGS_v5x.md`, which remains as reference for the v5x prototypes only. Captured from the EQT-245 v6x home build (Brief v2 + correction rounds 1-6); icon idiom updated 2026-06-05 (single-weight stands, variable-weight explored and parked). The vault copy at `Docs/EQUIBT` becomes a pointer stub after this merge._

---

## Direction / idiom

Blended **Anthropic-style editorial calm** (air, white + beige, large clean type) with a **hand-drawn line-art signature** (engineering-schematic SVG, not stock icons, not AI raster). Terracotta is the single accent.

Guardrail: deliberately NOT a monochrome Orgonomics clone (competitor-adjacent-identity risk). Take craft and restraint, leave the wellness register. Do not copy any competitor's icons or SVGs: original set only.

Root problem v6x fixes: v5x read "too structured." Cure is two parts, not one: (1) hand-drawn line-art as texture, AND (2) broken layout regularity (asymmetric placement, varied section rhythm, off-grid art bleeding into whitespace). Decoration alone does not fix rigidity. Checklist line: "Layout rhythm varied and asymmetric; structure softened, not just decorated."

- **Minimal reveal reinstated, 2026-06-07, EQT-253 R1:** amends the static-calm lock. Use one fade plus 8px rise per SECTION, 350ms, once, no stagger, and respect reduced motion. The v5x multi-element `reveal-d1..d3` system stays retired. Home retrofit = follow-up issue.

## Type

- Headings **Montserrat 700**, letter-spacing -0.012em. Retained for brand continuity with Lean Methods.
- Body **Lora 500, 22px**, line-height 1.45, near-black `#161616`. (Raised from 20px: Lora's lower x-height reads small next to the reference serif. The gap was the font's x-height, not the point size.)
- Hero subhead Lora 500 ~22px / 1.4. Supporting/descriptions default to body size; minimise font-size variation, do not invent smaller grey sizes for sub-lines.
- **Captions in italic Lora**: metric captions, evidence source lines, flagship metric label, sector result descriptors. Functional labels (eyebrows, kickers, data labels) stay Montserrat.
- **H1 `clamp(40px, 3.4vw, 46px)`** — reduced from the inherited v5x H1 (clamp 52-56) to sit between the old H1 and H2. v6x type-scale change. H2 unchanged.

## Palette

- **White `#FFFFFF` + beige `#F5F3EE` only**, alternating. No colour washes (no navy-wash, light-grey, highlight-wash section fills).
- **Terracotta `#C15F3C`** is the single accent. Terracotta-dark `#A04E30` for hover/depth where needed.
- **Dark-slate `#2C3E50`** for the one dark card (and the CTA button hover state).
- Navy line-art `#26245C`. Hairline `rgba(38,36,92,0.13)`.

## Boxes and dividers

- Thin-lined box is the standard container: **1px hairline, rounded ~16px, no drop shadow**, white or beige. Retire the v5x heavy drop-shadow filled boxes and all hover-lift.
- Section divider = contained 2px navy bisection line (within content max-width), but ONLY where two CONSECUTIVE same-colour sections meet. Where sections already alternate white/beige, the colour change is the separator: no divider. Remove unearned rules.

## Line-art and icons

- Hand-drawn **single-weight navy `#26245C`** SVG, **one terracotta accent** per illustration, slightly off-straight (crafted, not mechanical). _(Variable-weight line-art was explored 2026-06-05 and PARKED: the redrawn variable-weight set read rougher and less consistent than the merged single-weight icons. Single-weight stands for now. Revisit the idiom as part of EQT-251 if pursued. Exploration kept for reference: `Docs/EQUIBT/EQUIBT_V6X_PILLAR_ICONS_v1.html`, `Docs/EQUIBT/EQUIBT_V6X_ICON_WEIGHT_COMPARISON.html`.)_
- One hero motif (tangle-resolving-into-a-clear-path) + one icon per DMAICO pillar + sector motifs.
- **Icon size 110px**, top-aligned with the eyebrow so the icon spans roughly eyebrow-to-bottom-of-first-body-line. **All icons one uniform size** across the page (services and industries match).
- **Icon-to-text horizontal spacing**: the "How we help" services section is the standard; every section matches its icon column width and gap.
- Use the exact approved SVG paths from the merged home: do not redraw or approximate. (Any idiom change is an EQT-251 decision.)
- **Utilities icon = transmission pylon** (tower + terracotta live wire). The abstract-waves icon was retired as too abstract.
- **Govern icon = hand-drawn shield + straight two-line terracotta tick.** Shield+tick concept kept; the tick stays two straight lines for stability and instant legibility (curved/convex variants explored and rejected, over-tuning at 110px).

## Eyebrows

- Terracotta dot + ALL CAPS Montserrat, dot style site-wide (e.g. `FRAME · DEFINE`). Eyebrow-to-title gap ~14px, consistent, never tighter.
- Every section carries an eyebrow, including the logo wall (`CLIENTS`).

## Pillar wayfinding

- **Retire the six-colour pillar pill system.** Pillars identified by the hand-drawn icon + monochrome dotted eyebrow only. No per-pillar colour coding. (Site-wide change, EQT-260.)

## Evidence, not claims

Every metric tied to the verb-first action that produced it. No bare before/after numbers floating alone.

## Layout

Loosen the grid: generous air, **asymmetric hero** (motif right, bleeding into whitespace), icons on one calm left axis (no alternating sides), content on hairlines, varied vertical rhythm. **One dark moment maximum** per page.

## Chevron links

- All "Xxx ›" text links are **terracotta** (text + chevron). No navy chevron links remain.
- Glyph is the simplified **"›"** (replaced "→" site-wide), rendered **bigger and bolder** than the link text.
- Hover: underline draws **left to right** (transform-origin left), under the **text only** (ends at the last letter, not under the chevron); then the chevron nudges right after the underline lands. Reverses cleanly on mouse-out.
- **Standardise the vertical gap** between the last body line and the link to one consistent value across every section.

## Navigation and logo

- Nav links: larger, darker (near-black/navy) Montserrat. Corporate + gov buyers, not a youth brand.
- Down-chevron on items with a submenu (Services, Industries), **bigger and bolder** so it reads clearly.
- EQUIBT logo: left edge ~flush with the hero H1 left margin; sized to roughly the height of the "Get in touch" button.

## CTA

- "Get in touch" everywhere. Button **hover = dark grey `#2C3E50`** (navy-on-navy hover was invisible).

## Pathway / trainline (evolution of the rule-17 selector)

- Single-line off-straight station pathway, six DMAICO stations.
- **Micro-label per station: descriptor only, ≤5 words, no pillar-name prefix** (the station name already sits below the dot). Shown ABOVE the selected station, **inside the white container** (never overflowing), with a short **vertical terracotta pointer** down to the dot.
- Locked labels (verb-first):
  - FRAME · Define the real problem
  - PLAN · Diagnose how it runs
  - SOLVE · Fix the root causes
  - EVOLVE · Prove it with a pilot
  - GOVERN · Lock in the controls
  - SCALE · Embed the new standard
- **Hover acts as select and persists** on the new station (does not revert on mouse-out); click/keyboard also select. Default selected = FRAME.
- Calm **proximity effect**: nearby station circles gradually enlarge and interpolate toward terracotta by cursor distance (smooth, not a hard snap).
- **Static pathway, service pages, 2026-06-07, EQT-253 R1:** current station = terracotta ring + `YOU ARE HERE` pointer; NEXT station = filled navy core + small terracotta `NEXT` label; the segment between them renders terracotta to show direction of travel; downstream stations stay hollow with grey labels. Last station, SCALE, carries no next marking.

## Client logo wall (replaces the retired standalone Credentials page, EQT-222)

- Lives on Home (and About in its v6x conversion).
- Eyebrow `CLIENTS` + header above the top hairline; the logo grid sits between exactly one hairline above and one below.
- **Static grid, not a carousel** (a marquee reads start-up-ish and undercuts procurement-grade authority): monochrome, uniform-sized smaller marks, 5 across, 3-4 rows (~15-20), generous spacing.
- **Generic neutral placeholders only** ("Client mark") until curated logos are cleared. Real client names stay anonymised on the public surface. Real logos drop into `brand/assets/logos/clients/`.

## Dark flagship card: expand-on-scroll (DELIBERATE EXCEPTION)

This pattern overrides two v6x locks for ONE moment per page, approved by Herman:
1. contained-not-full-bleed, and
2. hand-drawn-not-photo.

- Behaviour is **scroll-scrubbed, not a binary toggle**. `coverage = (min(card.bottom, innerHeight) - max(card.top, 0)) / innerHeight`; `p = clamp((coverage - 0.30) / (0.70 - 0.30), 0, 1)`.
- Resting (p=0): contained card **~80% width, 24px radius**, calm air. Full-bleed (p=1, ~70% coverage): **100vw, 0 radius**. Interpolate width, horizontal margin/padding and border-radius off p; smooth, eased, no jank.
- Layout = **copy left, abstract image right** (Anthropic "Project Glasswing" model). Card background is a **FLAT near-black field (~#101317), no gradient**; the image carries the texture. **No divider/seam** between the copy and image columns: one continuous background. Image sits as a contained square panel on the right with breathing room around it (per the Anthropic reference), not a stretched full-edge wash. Layout holds in both contained and full-bleed states; content stays in the normal container (no width scrubbing — the R6 continuous scrub broke this and was reverted).
- Expand mechanic = **binary `.is-expanded` CSS transition** (smooth both ways, returns to the box), toggled on viewport coverage with hysteresis (expand 0.32, contract 0.28). The R6 continuous width-scrub was rejected.
- **Dark-field colour may vary per page** to avoid monotony across the site: home uses flat near-black `#101317`, but other pages may use a different flat dark tone for their one dark moment (e.g. deep slate, ink-navy, charcoal-green, dark plum). Constraints hold: still dark and FLAT (no gradient), one dark moment per page only, terracotta accent intact, copy legible.
- **Dark-field tone by page type, 2026-06-07, EQT-253 R1:** tone varies per page TYPE, not per sibling page. Home = near-black `#101317`; service pages = dark-slate `#2C3E50`; industry pages = ink-navy. Siblings within a page type share one tone.
- Background = **abstract image** (dark, textured). Current placeholder = a generated Voronoi/glasswing mesh (`prototypes/assets/flagship-mesh-placeholder.svg`); the real image swaps in later via the image pipeline by replacing that file. (Alt held in reserve: a flowing-topographic-lines SVG, `EQUIBT_V6X_FLAGSHIP_PHOTO_PLACEHOLDER.html` — keep for other surfaces.) Content legible across the full range; terracotta accent intact.
- **Anthropic reference finding (measured 2026-06-04):** their dark CTA box rests at ~89% of viewport width with 24px corners; the travel is small and subtle, not a tiny box ballooning. Restraint is the point. A ~58% resting box was rejected as too aggressive; ~80% keeps the motion visible without looking like a trick.

## Logos

- EQUIBT: the home nav and footer use the official EQUIBT artwork (matches `brand/assets/logos/equibt/EQ-LOGO-701_EQ-MAIN-R1.svg`), inlined.
- **Training / LMI handover carries the LMI logo in FULL COLOUR**, stacked left (eyebrow → heading → paragraph → LMI wordmark → "Explore training at Lean Methods Institute ›" link). A handover is meant to be recognised, and the footer already carries a full-colour EQUIBT mark, so full colour is consistent, not a clash. Modest size, the SVG's internal white background rect removed so it sits cleanly on the section (no white box). (Considered monochrome; rejected — a handover needs visibility.)
- **LMI handover links to `https://leanmethods.com.au`** (interim AU domain) until the global switch to leanmethodsinstitute.com. The LMI wordmark is itself clickable to the same destination. (NB: v5x industry-page handovers still point at leanmethodsinstitute.com — reconcile in the rollout.)
- **Use `LMI-LOGO-702_MAIN-R1.svg` only. LMI-LOGO-701 is SUPERSEDED** (per the 701 file's own header, 28 May 2026: 702 left-aligns "INSTITUTE" under "Lean Methods"). Never reference 701.

## Inherited locks (still hold from v5x)

- Hero and footer pure white, dark text, nav light. **Never a dark hero.**
- Firm **"we"** voice, no named individual. Verb-first active case/summary titles. **No em/en dashes** (colon or comma). No public price ranges. Anonymised client-type descriptors. **No dates/years in public copy** (e.g. "Operating since 2009" removed). No 01/02/03 numbering. No decorative left-rule on prose (the beliefs terracotta rule is retired).
- Locked service names: FRAME = Problem Framing, PLAN = Operations Diagnostic, SOLVE = Iterative Improvement, EVOLVE = Rapid Pilot, GOVERN = Architecture & Governance, SCALE = Operational Embedding.
- Footer link font mirrors the corrected top nav (same family, size, weight, colour); footer column labels and the copyright line use the grey Montserrat label style.

## Site-wide implications (the rollout, EQT-249)

The v6x type pairing (Montserrat + Lora 22px body) and the six-colour pillar retirement are site-wide changes. Foundation steps before page conversions: EQT-250 base CSS tokens, EQT-251 illustration/icon set, **EQT-252 = this document merged into the repo**. Pillar-colour retirement = EQT-260.

## Process notes

- Build runs via Codex on branch `eqt-245` (single canonical clone); Herman/Cowork review screenshots and the file directly. Codex's screenshot environment was blocked this session, and self-checks are not trusted for sign-off (past false passes). Six correction rounds (R1-R6) produced this set. Icon options and the Govern-tick exploration are recorded in `EQUIBT_V6X_ICON_OPTIONS.html`, `EQUIBT_V6X_GOVERN_TICK_OPTIONS.html`, `EQUIBT_V6X_GOVERN_FINAL.html` (Docs/EQUIBT).
