# EQUIBT DESIGN LEARNINGS v6x

_CANONICAL (EQT-252). The single source of truth for v6x visual work; supersedes `DESIGN_LEARNINGS_v5x.md`, which remains as reference for the v5x prototypes only. Captured from the EQT-245 v6x home build (Brief v2 + correction rounds 1-6); icon idiom updated 2026-06-05 (single-weight stands, variable-weight explored and parked). **Updated 2026-06-08 to fold in the shipped rollout locks: EQT-253 services (R1-R4), EQT-254 industries (R1-R5) and EQT-255 Our Work + case study — see "Rollout page-type locks" below for the consolidated set with exact values.** The vault copy at `Docs/EQUIBT` becomes a pointer stub after this merge._

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
- **Dark-field tone by page type, 2026-06-07, EQT-253 R1:** tone varies per page TYPE, not per sibling page. Home = near-black `#101317`; service pages = dark-slate `#2C3E50`; industry pages = ink-navy **`#202946`** (shipped EQT-254, in the `#1E2742`-`#232B47` register). Siblings within a page type share one tone. Our Work / case pages = flat charcoal **`#22211F`** (shipped EQT-255), distinct from the other three.
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

## Rollout page-type locks (EQT-253 services, EQT-254 industries — shipped, 2026-06-08)

These are the locked deltas from the two conversions that merged after the home build. Exact values are taken from the shipped CSS, not from the briefs. They govern every later page conversion (EQT-255..259).

### Sub-page hero (services + industries)
- Size the hero SVG **directly** at `width:min(540px,48vw)` (home parity). Wrapper-clamp sizing was tried (EQT-253 R1) and rejected — it did not land visually (R2).
- **Fine-line interim treatment (R4):** a hero-scoped stroke override thins the lines so the visual weight matches the home hero. Shipped value: **`stroke-width:.25`** scoped to `.service-hero-art svg .hd/.hd-f1/.hd-f2/.hd-f3` plus a catch-all for icons that carry `stroke` as an SVG attribute (CSS beats presentation attributes). The terracotta accent keeps its weight ratio; round caps stay; the override must never leak beyond the hero wrapper. Industry sector heroes use the identical override. This is interim until the EQT-275 Affinity hero scenes swap in at the marked seam (content-only).
- No hero metric band on industry pages: every figure lives in the proof carousel (EQT-254). The hairline metric band stays available where a page has genuine hero stats (case study, EQT-255).

### CTA equation (service pages)
- Eyebrow `WORK WITH US` (`START HERE` retired site-wide). Dark field dark-slate `#2C3E50`. Value lines Montserrat 700 ~25px white so they carry the weight (R1).
- `+` and `=` operators **48px / 700 / terracotta** (R2, matches the locked v5x precedent).
- The equation never orphans an operator: one five-column row at desktop, or one deliberate stacked layout (box / + / box / = / box) below a single breakpoint — no intermediate wraps (R3).

### Side-bleed callout (service pages)
- The statement callout genuinely **bleeds off the left viewport edge**, rounded on the inner (right) side only, content still on the page's left text axis. Navy-wash `#E8ECF5` fill. A floating contained box is wrong (R3, block 17).

### Deliverables (service pages)
- A clickable **4-item deliverables index** sits between the section intro and the WHAT YOU RECEIVE carousel; each name is a button that jumps to its slide and tracks carousel position (terracotta active), keyboard accessible, `aria-controls` on the region (R3).
- In the industry service-selector detail panel, deliverable items are **Montserrat 600, 16px, near-black `#161616`**, each with a small **terracotta `::before` dot ~5px, ~14px gap** (EQT-254 R3/R5). No chevrons, no navy bullets.

### Merged WHERE IT LEADS (service pages)
- Pathway and next-step columns are ONE section: one eyebrow, no divider between pathway and columns (R1).
- **Static pathway:** current = terracotta ring + `YOU ARE HERE` pointer; NEXT = filled navy core + small terracotta `NEXT` label; the segment current→next renders terracotta to show travel; downstream stations hollow with grey `#7A8591` labels; SCALE (terminus) carries no next marking.
- **Next-step columns asymmetric on service pages:** current column muted and unlinked (`YOU ARE HERE` grey label), next column emphasised with the only `Explore <PILLAR> ›` link (`THE NEXT STEP` terracotta), single large terracotta `›` in the gutter (desktop). Columns stack at ≤860px (current above next, gutter chevron hidden); pathway SVG scales to its container at every viewport, padded horizontal scroll only below ~420px (R2).

### Industry pages (EQT-254)
- **Architecture:** the four sector pages share ONE template, `src/pages/industries/_sector.astro`, taking a sector key as a prop (`<SectorPage sector="government" />`). No `Astro.url`/pathname sniffing. The four routes are ~5-line wrappers. The hub is `index.astro`. Glyphs and pillar/sector icons come through the existing components only.
- **Sticky sub-nav (sector pages only, not the hub):** slim bar, white, 1px hairline bottom, Montserrat uppercase links, terracotta active marker, IntersectionObserver scroll-spy. **Left-aligned** to the wide grid axis (not centred). Anchors: Challenges · How we help · Results · Our work · Where to start. Its `top` must equal the real main-nav height (`var(--nav-h, 81px)`), or it slides behind the opaque main nav. Anchored sections carry `scroll-margin-top: calc(var(--nav-h,81px) + 51px + 12px)` (51px = the sub-nav height) so jumps don't bury the section title.
- **Hub hero:** the four sector icons as a calm **2x2 cluster** at the home-hero footprint (`min(540px,48vw)` overall, each icon ~`min(240px,21vw)`), bleeding into the right whitespace. The v5x polyhedron is retired.
- **Hub "why sector" takeaway:** the formula takeaway line renders as a **white panel that bleeds to the right viewport edge** (white fill, ~16px radius on the left corners, square on the right, no shadow/border); inner text stays on the wide grid axis.
- **Hub sector selector:** a horizontal **sector row across the top** (icon + name + one-line hook, terracotta rule under the active item), a full-width shared panel below, and the de-coloured six-station line **full width** beneath it (no box around it). NOT a left side-list. Rule-17 semantics: hover selects and persists, click/keyboard select, default Financial Services. Mobile: row wraps 2x2 ≤860px.
- **Hub sector row sticks across its selector panel only (SPEC CHANGE — supersedes "page-long sticky"):** the sticky scope wraps the selector bar + the selector section ONLY, NOT the closing CTA + LMI. Page-long sticky was wrong: it pinned the industry selector over the "Work with us" CTA and the LMI training handover, where a sector picker has no business and reads as a stuck/broken bar. The bar now pins from the selector heading and **releases before the closing CTA** via the bounded scope alone. It is **a plain always-visible `position:sticky` bar** (no hide-until-stuck — SPEC CHANGE 2026-06-11, EQT-295): because the scope is bounded to the selector panel, the bar is in-flow at the panel top, pins under the nav while you read the panel, and releases at the scope end. The earlier stuck-detector (show only when `top ≈ navH ± 1.5px`) matched for a single pin instant, so on tall viewports the whole panel fits on one screen and the selector never appeared at all. **Gotcha (still true):** `position:sticky` fails silently if any ancestor between the sticky element and the scroll root has `overflow`, `transform`, `filter`, or `will-change`; keep the section-reveal transform on inner content, never the section wrapper. On selection while pinned, scroll the panel to just below the row (respect reduced-motion).
- **Station / entry-point mapping (SPEC CHANGE, R4 — supersedes the original brief mapping):** the lit stations are EXACTLY the two next-step entry-point columns, so line, columns and copy always agree. Shipped: **Financial Services = PLAN, GOVERN · Government = PLAN, GOVERN · Utilities = PLAN, GOVERN · Manufacturing = PLAN, SOLVE.** SOLVE no longer lights on Government; SCALE lights on no industry page. On every sector re-selection the station line **resets all six stations to muted first, then marks** the selected set (state driven by the `is-recommended` class, not baked SVG attributes), so a previous sector's marks never linger.
- **Closing CTA (all five pages):** home `cta-grid` treatment — copy left, art right, the page's own sector `<Icon>` at ~260px (hub uses the 2x2 cluster at reduced scale) — eyebrow `WORK WITH US`, light section.
- **Industry service-selector detail titles drop the pillar prefix:** the kicker already carries the pillar, so the detail title is verb-first with no `PILLAR:` prefix ("Isolate the structural cause of waste." not "SOLVE: isolate ...") (R2).

### LMI handover (home + industry pages + Our Work case pages; never service pages or the Our Work index)
- **Industry-page band is BEIGE** (locked EQT-254 R2; the white-band experiment in R1 was reversed). The logo reads as a deliberate tile on beige.
- **Case pages added EQT-255 (Herman override of the brief's services-parity "no handover on Our Work").** The handover sits under the closing CTA, is INDUSTRY-RELEVANT per case (heading "Build this capability inside your <Industry> team.", body referencing "<industry> operations"), industry pulled from the case's related Industry link. Band white on case pages (alternates off the beige CTA above it). The Our Work INDEX carries no handover (only the case pages do).
- The logo uses a **transparent variant file, `brand/assets/logos/lmi/LMI-LOGO-702_MAIN-R1_TRANSPARENT.svg`** — a copy of the 702 mark with ONLY the full-canvas white background rect removed (the white "M" inside the red square stays). The original 702 file is untouched (home and other surfaces reference it). Never reference 701; never link `leanmethodsinstitute.com` (interim AU domain `leanmethods.com.au` until the global switch).
- Stack left: eyebrow → heading → paragraph → clickable full-colour wordmark → `Explore training at Lean Methods Institute ›`. The chevron link is **left-aligned on the same axis** as the rest (shipped via `display:table`), never floating centre.
- Kill the white gap before the footer: the handover's bottom spacing plus the footer's 120px top padding stacked into a large gap; reduce the handover-side bottom spacing.

### Footer (site-wide, shared component)
- At phone widths (≤760/≤460) the brand block sits full-width on top and the three link columns flow in a **2-column grid**, never one long single stack (EQT-253 R2, footer rules in base.css — deliberate shared-component exception).
- **Top hairline on the footer content (EQT-255):** `.footer-inner` carries a 1px hairline top + 64px padding-top (matching the contained line above the copyright strip), so the footer separates cleanly when the last section is white (e.g. the case-page LMI handover). `.site-footer` top padding reduced 120→56 to keep total spacing. Site-wide.

### Our Work index + case study (EQT-255, shipped 2026-06-08)

Architecture: a `cases` content collection (`src/content/cases/*.md`) drives both surfaces. The index reads the collection and groups by pillar; `src/pages/our-work/[slug].astro` renders `src/components/CaseStudy.astro` for entries flagged `fullStudy` only. Styles in `src/styles/our-work.css` (own `.ow-*` classes, references tokens, does not import services.css). A study gets a `/our-work/<slug>/` page ONLY where full Problem/Approach/Result copy exists; other index rows do not link out. Schema fields: `title, sector, pillar, order, metric, caption?, problem, approach, outcome, illustrative, fullStudy, heroSubhead?, pathwaySummary?, problemFull?/approachFull?/resultFull?, stats[]?, flagship?, related[]?, draft`.

**Index — compact proof grid (NOT tall open P/A/O rows).** The brief's full-width Problem/Approach/Outcome rows read too tall and repetitive (Herman, R-feedback). Shipped instead: a **two-column** de-boxed grid on top hairlines; each case = italic-Lora sector descriptor + big navy metric + verb-first H3 + ONE context line (the Problem line). Full Problem/Approach/Outcome stay in the data for detail pages, not shown on the index. Each pillar group carries its hand-drawn pillar `<Icon>` on the left axis + monochrome dotted eyebrow (`PLAN · MEASURE` etc.) + the source intro line. Verb-first Outcome lines were authored per case (tied to the existing metric, no new numbers — Herman approved) and live in the data.
- **Sector descriptor = italic Lora** on case rows (the italic-captions rule). NB this differs from the services-page OUR WORK section, which still uses caps-terracotta sector; reconcile later.
- **Illustrative markers fully removed from output** (Herman override of the brief's "preserve `<!-- ILLUSTRATIVE -->`"): no HTML comment, no visible label. The `illustrative` flag stays in the schema/data, unrendered.
- Index carries NO LMI handover (only case pages do).

**Case study page order:** hero → WHERE THIS FITS (trainline) → THE WORK (journey) → flagship dark moment → RELATED → WORK WITH US CTA → LMI handover.
- **Hero:** copy + pillar motif in a top row; the hairline **three-metric stat band runs FULL WIDTH below** the row (motif reads above the boxes, boxes span the width); actions under the band. Stat figures navy Montserrat, captions italic Lora. No filled stat boxes.
- **WHERE THIS FITS = the DMAICO trainline, placed directly under the hero** for context (not down in Related). Section heading is a **per-case approach summary** (`pathwaySummary`, e.g. "Mapped the end-to-end flow, piloted the redesign across both channels, then handed it back to the teams."). The case's pillar station is highlighted (terracotta ring + core); the marker reads **`THIS ENGAGEMENT`** — NOT `YOU ARE HERE` (that label is service-page-only). "Follow the workstream." retired.
- **THE WORK = one connected journey,** not three separate alternating sections. Problem → Approach → Result on ONE continuous vertical spine (single background), each step a hairline node circle with a line-art glyph (RootCause / Loop / Standardise) and a terracotta connector caption ("What we did about it ↓") carrying the eye down.
- **Flagship dark moment = flat charcoal `#22211F`** (the page-type tone), contained, one per page, on the outcome pull-quote.
- **RELATED = two hairline columns side by side** (Service pillar + Industry); the kind is an eyebrow ABOVE each title (no wide left-label gutter). Heading "Keep exploring."
- **LMI handover** under the CTA, industry-relevant (see LMI handover section above).

**Unified responsive breakpoint (case hero) = 960px:** the hero top row, the three-metric stat band, and the CTA art all collapse to one column TOGETHER at ≤960, so the page never shows a stacked hero beside a still-three-up stat band. Content grids (index case 2-col, related 2-col, pillar group head) collapse at ≤860.

### About + How We Work (EQT-256) and Contact + Capability Statement (EQT-257), shipped 2026-06-09

Built in Cowork (not Codex), each as standalone one-off pages mirroring `index.astro`. About + How We Work share `src/styles/about.css` (own `.about-*` classes); Contact + Capability Statement share `src/styles/contact.css` (own `.cx-*` classes). Neither imports another page's stylesheet (clean firewall, reuses only base.css globals). One minimal section reveal each, no `reveal-d1..d3`.

**Brand-level locks (site-wide, set this round):**
- **Geography: Australia only.** EQUIBT focuses on Australia; "and New Zealand" is dropped everywhere (hero subheads, meta, geography facts). Update older copy that still says ANZ.
- **LMI handover scope expanded.** The handover now also appears on **About, How We Work, and the Capability Statement** (Herman override of the brief's "no handover on About"), in addition to home + industry pages + Our Work case pages. Still never on service pages, the Our Work index, or Contact. On these new pages the eyebrow is **`OUR TRAINING DIVISION`** (home still uses `TRAINING` — reconcile later) and the framing is the brand differentiator: capability transfer, increasingly AI-capable teams ("Build lean, AI-capable teams"). Uses the transparent 702 mark, links `leanmethods.com.au`.
- **Artwork-authority redraw narrowed (EQT-274/275).** The shipped single-weight line-art glyph library is FINAL; only four asset classes get redrawn in Affinity: hero + CTA images, deliverables glyphs, the 4 sector identity icons, the service icons. General/section/story glyphs AND the sector-challenge glyphs stay line-art. So on converted pages, only the hero motif and the CTA art swap at the marked seam; section/story glyphs are done.

**About (`/about/`):** single page carrying brand story + Why-EQUIBT + our-people (firm voice, no named individual). Order: hero → THE PROBLEM WE SOLVE (navy-wash side-bleed callout off the LEFT edge + a white hairline answer bleed off the RIGHT edge, matched internal spacing, sparing/asymmetric) → WHY EQUIBT (3 de-boxed glyph columns) → WHAT WE BELIEVE (hanging-label rows, terracotta left-rule gone) → OUR STORY (hanging-label rows WITH an inline line-art glyph per note at site small-icon size ~54px, so it reads distinctly from the beliefs rows; all dates dropped) → CLIENTS (logo wall) → LMI handover → light CTA. Hero motif interim = `hero-motif` (native weight).

**How We Work (`/how-we-work/`):** hero (interim `Transfer` glyph, fine-line) → THE OPERATING MODEL (side-bleed callout) → HOW WE OPERATE (we-are / we-are-not as two open columns on hairlines) → THE ARC (the connected journey spine reused from CaseStudy; line-art glyph nodes + terracotta connectors) followed by the in-room/out-of-room posture reframed as a **two-column principle** under its own eyebrow `WHEN WE STAY, WHEN WE LEAVE` (so it does not read as orphan steps after the spine) → LMI handover → light CTA. H1 "We design every engagement with an end in mind." Cliché "firmer footing" CTA line retired.

**Closing CTA on these pages = copy-left / line-art-motif-right** (the `cta-grid` treatment), light, interim line-art at the seam.

**Capability Statement (`/capability-statement/`):** long single-page summary. Order: hero (`hero-motif`) → WHO WE ARE (prose + side-bleed callout) → HOW WE WORK (3 glyph columns) → WHAT WE DO (the six services as the home `svc-row` idiom, icons at site small-icon size) → **INDUSTRIES (Industries and Proven-in-Practice MERGED into ONE sector-organised section)** → LMI handover → light CTA. HOW TO ENGAGE / "facts" section removed (Herman). "Operating since 2009" dropped; energy-retailer stat pinned 18% to 24% (EQT-248).
- **Merged industries section = a 2x2 quadrant of beige tiles (earned boxes).** Each tile: bigger sector icon (~68px) + name + descriptor, a clear gap, then that sector's two evidence rows (verb-first action + terracotta metric + italic-Lora anonymised descriptor) with ONE quiet divider between them, then an `Explore <Sector> ›` link. Beige fill + 16px radius, no border, no shadow. This replaced two separate sections (industry rows + proof groups) that overlapped and read as fine-line soup; the tiles contain each sector and cut the floating hairlines. `Read the full case studies ›` → `/our-work/` under the grid.

**Contact (`/contact/`):** hero (interim `Dialogue` glyph) → GET IN TOUCH form → REACH US. 
- Form = v6x hairline inputs (1px border, no fill, Montserrat uppercase labels, terracotta focus ring, navy submit). Heading **"Let's talk about your operation."** (Herman re-allowed "Let's talk" as a section HEADING here; the CTA BUTTON stays "Get in touch", so the "no Let's talk" rule still holds for buttons). Intro carries the "plain description of the operational issue or goal is enough to start" framing.
- **CAPTCHA = real Cloudflare Turnstile** (fits Cloudflare Pages) replacing the interim maths question, plus an off-screen honeypot. Interim TEST sitekey only; the production sitekey + SERVER-SIDE token verification land with the form handler at go-live (EQT-262) — a static page cannot verify the token. Form action is `mailto:` interim.
- REACH US = monochrome Google-Maps embed left + details right (real Melbourne office Level 15, 470 Collins Street; Melbourne + Sydney numbers; email; LinkedIn). Heading "Reach us directly." (the "send the problem" framing moved up into the form).

### Insights / blog (EQT-258, shipped 2026-06-09)

Architecture: an `insights` content collection (`src/content/insights/*.md`) drives `src/pages/insights/index.astro` (lists non-draft, sorted by `order` desc) + `src/pages/insights/[slug].astro` → `src/components/BlogPost.astro`. Styles in `src/styles/insights.css` (own `.ins-*` classes; references tokens; imports no other page stylesheet). Built in Cowork. Schema fields: `title, pillar, phase?, summary, readTime?, order, lede[], aeo?, tldr[], tryThis{heading,body}?, related{label,title,href}?, closingLine?, draft`. Drafts never render or list. One real launch post authored ("The diagnostic found 47 problems. The real number was 6.", PLAN); the rest are `draft:true` stubs pending real copy (Herman/Zoe).

**Copy structure follows `BLOG_WRITING_STANDARDS_v2` (Zoe, 2026-06-09; v1 archived).** Order: hook = story-driven scene (actor + sector + numbers + the tension question, NOT abstract fragments) → TL;DR → AEO answer → **What we did, and what we found.** → **The pattern to avoid.** + key-insight descriptor → **One thing to try.** → related-service (trainline) → customised closing CTA. Three body headings now (v1 had two; "The pattern behind this" renamed to "The pattern to avoid", new "What we did" heading over the scenario). The related + CTA are template chrome (every page carries them); they are NOT sell copy inside the article, per the standard's "no Why-work-with-us in the body" rule.

**Index = responsive card grid, NOT editorial rows** (Herman override of the brief's "editorial rows on hairlines"). Each card ~1/3 width: thin hairline box (1px, 16px radius, NO shadow), hover = border darken + 3px lift; monochrome dotted kicker (`PLAN · MEASURE`), H3 title, summary, footed row (italic-Lora read-time + Read chevron). Grid 3 → 2 → 1 (≤960 → ≤760). Filter chips = working client-side filter, hairline pills, terracotta active, NO six-colour coding (the colour-system retirement + full filter rework stays EQT-260).

**Three tinted skim/callout bands (DELIBERATE EXCEPTION to the "no wash fills" lock, scoped to blog anchors).** All three drawn from the brand palette, no foreign hue (a one-off light green was proposed then rejected as off-brand):
- **TL;DR = beige `#F5F3EE` contained box** (the scannable skim layer), 1px hairline, 16px radius.
- **Key insight = terracotta-wash `#F4E8E1` band** on the bold descriptor line (`.ins-body p:has(>strong:only-child)`), bleeding off the LEFT viewport edge, with an interim line-art **light-bulb marker** (navy body + terracotta filament, ~46px, data-URI) on the body axis. Generous vertical padding (~40px) so the line is not tight. Bespoke Affinity bulb swaps later (EQT-274/275).
- **One thing to try = navy-wash `#E8ECF5` band**, bleeding off the LEFT viewport edge.
- So beige = skim, terracotta-wash = the insight, navy-wash blue = the action. Left-bleed achieved with the full-bleed margin trick, clipped by `.ins-post-body overflow:hidden`; the bands collapse to contained boxes ≤860 so they cannot overflow.

**AEO answer = BOLD** (near-black, quiet, no box), between TL;DR and the scenario body. Codified in `BLOG_WRITING_STANDARDS_v2` (was italic in v1). The bold descriptor line under a section heading is a separate element (the key-insight band above). The closing CTA header is customised per post to the post's thesis (e.g. "Bring us your symptoms."), via the `cta` frontmatter field, with a generic template fallback.

**Post = no dark moment** (editorial/quiet). **Breadcrumb** `Insights › <pillar>` (caption-grey Montserrat with `›`). **Trainline on the post = the DMAICO pathway reused from CaseStudy**, in the related-service section, with the related-service **title ABOVE the trainline**; the current pillar is highlighted and the marker reads **`THIS INSIGHT`**. The pathway box spans the full content width (~1180), matching Our Work / industries (NOT a narrow centred box). **Closing CTA = copy-left / line-art-motif-right**, light, interim DocReport glyph at the seam.

**Body alignment:** the post body sits on the centred 1180 axis (wrapped in `.ins-inner`) like the other content sections; the 720 reading measure is left-aligned within it; hero on the 1320 axis like the other heroes. Hero height matches Contact (124/104).

**RESOLVED (2026-06-09): `BLOG_WRITING_STANDARDS_v2` codifies all of it** — AEO-bold, the three renamed/added body headings (What we did, and what we found / The pattern to avoid / One thing to try), the closing line dropped, the story-driven hook, the single highlighted key insight, and the per-post customised CTA header. The proof post (`prioritising-after-diagnostic`) was updated to match. The other 21 v1 posts still need migrating to v2 when they are ported into the `insights` collection.

### Nav dropdowns + Insights chips (EQT-283, shipped 2026-06-10)

Built and merged via PR #46. A post-merge hover-gap bug required a same-session hotfix (see below); the hotfix landed on main before end of session.

**Dropdown HTML structure.** Each dropdown item in the nav is a `[data-dropdown]` `<div class="nav-item has-dropdown">` wrapping a `.nav-item-row` (flex row with the `<a class="nav-link">` label + `<button class="nav-chevron-btn">` chevron button) and a `<ul class="nav-dropdown" role="menu">` panel. Services items carry a `.nav-dropdown-eyebrow` (terracotta, 10px/700, letter-spacing 0.14em) above the `.nav-dropdown-label`. Industries items have a label only (no pillar eyebrow). The parent anchor still navigates to the hub page (`/services/`, `/industries/`); the chevron button is a separate focusable element for keyboard/mobile use.

**CSS `:hover` is the authoritative desktop show/hide mechanism.** Do NOT use JS `mouseenter`/`mouseleave` to open/close dropdown panels on desktop. The CSS rule is:

```css
@media(min-width:761px){
  .nav-item:hover .nav-dropdown{display:block;}
  .nav-item:hover .nav-chevron{transform:rotate(180deg);}
}
```

This works because CSS `:hover` propagates through the DOM tree to absolutely-positioned descendants, so the dropdown panel is treated as part of `.nav-item` for hover purposes regardless of visual position. JS `mouseleave` fires based on the element's **layout bounding box** — if the dropdown panel sits outside the parent's box (which it does, because `position:absolute` removes it from flow), the cursor crossing into the panel triggers `mouseleave` on the parent. JS hover was removed from `Nav.astro` as part of the hotfix; a comment marks its absence.

**The hover gap bug (post-merge, fixed same session).** The initial build used `top: calc(100% + 10px)` on `.nav-dropdown` to create visual breathing room between the nav bar and the panel, combined with JS `mouseenter`/`mouseleave`. This 10px gap was outside `.nav-item`'s layout bounding box, so moving the cursor from the nav label down toward the panel fired `mouseleave` on `.nav-item` and closed the dropdown before the cursor arrived. Fix: `top: 100%` (no external gap) + `padding-top: 10px` INSIDE the dropdown, plus switching to CSS `:hover`. The padding moves the first item down visually while keeping the panel flush against the nav bar so the hover region is unbroken.

**Dropdown item hover state = grey highlight band.** `.nav-dropdown-item:hover,.nav-dropdown-item:focus{ color:var(--navy); background:rgba(38,36,92,0.05); }` — a subtle full-width band that reads as a highlight row without introducing colour. The band fills the full padding width of the item (20px horizontal padding).

**Mobile = accordion, JS only.** The chevron button's click handler toggles `.is-open` on `.nav-item`. The dropdown then shows via `.nav-item.is-open .nav-dropdown{display:block;}`. Desktop CSS hover still takes over at ≥761px, so the `.is-open` class on mobile becomes inert on desktop (harmless).

**Keyboard (desktop).** `focusin`/`focusout` on the `.nav-item` wrapper open/close the dropdown via `.is-open`. Esc closes and returns focus to the chevron button.

**Insights filter chips live in `.ins-hero`, not `.ins-list`.** The chips were originally rendered at the top of the `.ins-list` section (inside `.ins-inner`). This put them below the hero section with a large section-gap between the hero heading and the filter row, requiring the user to scroll before filtering. Fix: move `.ins-filter` into `.ins-hero` (after `.ins-hero-inner`), wrapped in `.ins-inner` for max-width alignment. Hero bottom padding reduced 104px → 52px; list top padding reduced 64px → 48px. The chips now sit visually adjacent to the hero copy.

### Post-merge UI polishes (EQT-283 follow-up, shipped 2026-06-10)

**Nav link hover colour = terracotta (commit 178b939).** Top-level `.nav-link:hover` and `.nav-link:focus` changed from navy to terracotta, matching the site's hover language for all other interactive elements. The chevron also transitions to terracotta on parent hover via `.nav-item:hover .nav-chevron{color:var(--terracotta);}`. The `color` property was added to the chevron's `transition` declaration alongside `transform`.

**Service dropdown eyebrows carry the full DMAICO phase (commit 178b939).** All six dropdown eyebrows now read `FRAME · DEFINE`, `PLAN · MEASURE`, `SOLVE · ANALYSE`, `EVOLVE · IMPROVE`, `GOVERN · CONTROL`, `SCALE · OPERATE` — not bare pillar names. Format matches the dotted-eyebrow idiom used on the services hub, case pages, and Our Work sections. Consistency rule: any UI surface that references a DMAICO pillar should carry the full `PILLAR · PHASE` pair, not the pillar alone.

**Chip alignment fix — Insights (commit e8efdfb).** The chips container (`.ins-inner` inside `.ins-hero`) was constrained to `--max` (1180px) while the hero-inner used `--wide` (1320px). At wide viewports this caused the chips to start ~70px further right than the hero prose. Fix: override `.ins-hero .ins-inner{max-width:var(--wide);}` so both containers share the same left edge. The `margin-top:24px` on the same rule preserves the gap between lede and chips (matches H1 `margin-bottom`).

**Our Work filter chips (commit e8efdfb).** The same hairline-pill chip pattern from Insights was added to the Our Work index. Chips sit in a `.ow-inner` div at the bottom of `.ow-hero`, flush with the prose left edge (same `max-width:var(--wide)` override). Each pillar section in the groups map carries `data-pillar={group.pillar.toLowerCase()}`. JS `initialiseOwFilter()` in `our-work/index.astro` toggles `.is-hidden` (display:none) on sections matching the active filter; the closing CTA section has no `data-pillar` attribute and is always visible regardless of filter state. Stylesheet: `.ow-hero .ow-inner{max-width:var(--wide);margin-top:24px;}`, `.ow-filter`, `.ow-chip`, `.ow-section.is-hidden{display:none;}` — all `.ow-*` prefixed, no cross-import from `insights.css`.

**Insights filter bug fix (commit e8efdfb).** The Insights page JS was querying `.ins-row` (a class that does not exist in the markup). Cards are `.ins-card` with `data-pillar` attributes. Fix: `document.querySelectorAll(".ins-row")` → `document.querySelectorAll(".ins-card[data-pillar]")`.

**Hero section hairline divider — Insights (commit e8efdfb).** Added `border-bottom:1px solid var(--hairline)` to `.ins-hero`. Provides a clean visual break between the hero and the card list, consistent with the footer hairline pattern. Apply this to any hero-to-content transition that would otherwise show two unbroken white sections.

**Chip-to-card gap tightened — Insights (commit e8efdfb).** `.ins-filter` had `margin-bottom:44px`; since the filter is the last element inside the hero, this stacked directly on top of the list section's 48px top padding, creating ~100px+ of dead space between the chips and the first card. Fix: `margin-bottom` removed from `.ins-filter` (zero is correct — nothing follows inside the section). `.ins-list` padding-top reduced 48px → 32px for further tightening. Rule: the bottom spacing of the last element inside a section is governed by the section's `padding-bottom`, not the element's own margin.

### Hero CTA removal + sector subnav sticky fix (EQT-285, pending merge 2026-06-10)

**No primary CTA in hero sections — locked rule.** All `btn-primary "Get in touch"` links removed from hero sections across every page (index, about, how-we-work, our-work, industries index, all sector pages, resources, capability-statement). Rationale: the nav bar "Get in touch" is persistent and prominent across every page; a second hard-sell CTA immediately in the hero is repetitive and reads as desperate. **Exceptions that stay:** secondary text links in hero (`View capability statement`, `View all industries`) are kept — they serve a navigation purpose, not a conversion pressure function. All bottom-of-page WORK WITH US section CTAs are kept — they are positioned at the point where the reader has finished the content and the CTA is appropriate. The contact page form submit button is untouched.

**Sector subnav is always visible (SPEC CHANGE — Herman 2026-06-11, supersedes EQT-289 "hide until stuck").** EQT-289 hid the `sector-subnav` until it stuck (IntersectionObserver on the hero toggling `.subnav-hidden`). That made it pop in on scroll-down and vanish again near the hero, which read as broken. The subnav is now a **plain always-visible sticky bar**: it sits at the top of the sector content on load and pins under the main nav on scroll, never hidden. `initialiseSubnavVisibility()` removed from `_sector.astro`; no `.subnav-hidden` is ever applied to the subnav. Scroll-spy active-state still uses its own IntersectionObserver (unaffected). Its sticky `top` must equal the real nav height (`var(--nav-h,81px)`).

**Hub sector selector bar is plain always-visible sticky (EQT-295, supersedes the stuck-detector).** EQT-291 gave the hub `sector-list-sticky` a deterministic stuck-detector (`initialiseStickyBarVisibility()` showing it only when `Math.abs(top - navH) <= 1.5`). That over-corrected: the 1.5px window matched for a single pin instant, so during a normal scroll the bar flashed in and out, and on tall viewports — where the whole selector panel fits on one screen — the bar's top never landed in the window and the picker was invisible (reproduced live 2026-06-11). Fix: **remove the visibility toggle entirely**; the bounded `.selector-sticky-scope` (selector bar + panel only, CTA/LMI outside) already makes plain `position:sticky` do the right thing — in-flow at the panel top, pinned under the nav while reading, released at the scope end before the CTA. `initialiseStickyBarVisibility()` deleted from `index.astro`. `.subnav-hidden` is now dead (no element toggles it); both bars are plain sticky. A sticky bar in a correctly bounded scope does not float mid-page, so no hide-until-stuck is needed — that was only ever a workaround for the EQT-289 IntersectionObserver race.

## Process notes

- Build runs via Codex on branch `eqt-245` (single canonical clone); Herman/Cowork review screenshots and the file directly. Codex's screenshot environment was blocked this session, and self-checks are not trusted for sign-off (past false passes). Six correction rounds (R1-R6) produced this set. Icon options and the Govern-tick exploration are recorded in `EQUIBT_V6X_ICON_OPTIONS.html`, `EQUIBT_V6X_GOVERN_TICK_OPTIONS.html`, `EQUIBT_V6X_GOVERN_FINAL.html` (Docs/EQUIBT).
