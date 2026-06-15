# EQUIBT DESIGN LEARNINGS v6x

_CANONICAL (EQT-252). The single source of truth for v6x visual work; supersedes `DESIGN_LEARNINGS_v5x.md`, which remains as reference for the v5x prototypes only. Captured from the EQT-245 v6x home build (Brief v2 + correction rounds 1-6); icon idiom updated 2026-06-05 (single-weight stands, variable-weight explored and parked). **Updated 2026-06-08 to fold in the shipped rollout locks: EQT-253 services (R1-R4), EQT-254 industries (R1-R5) and EQT-255 Our Work + case study — see "Rollout page-type locks" below for the consolidated set with exact values.** The vault copy at `Docs/EQUIBT` becomes a pointer stub after this merge._

---

## Copy authorship (HARD RULE, 2026-06-14)

All user-facing copy on the site, headings, body, eyebrows, labels, microcopy, framework text and comparison sections, is authored by Claude (Cowork) so the site holds ONE consistent voice. Build agents (Codex, Claude Code) must NOT write, rephrase, expand or "tidy" site copy: they wire in the copy supplied, verbatim. If a section needs copy that has not been provided, STOP and request it, do not draft it. (This rule exists because the EQT-322 method "How it differs" sections drifted off-voice, with invented headings and phrasing, when a build agent filled copy gaps itself.)

## Direction / idiom

Blended **Anthropic-style editorial calm** (air, white + beige, large clean type) with a **hand-drawn line-art signature** (engineering-schematic SVG, not stock icons, not AI raster). Terracotta is the single accent.

Guardrail: deliberately NOT a monochrome Orgonomics clone (competitor-adjacent-identity risk). Take craft and restraint, leave the wellness register. Do not copy any competitor's icons or SVGs: original set only. _(Stock-icon scope, 2026-06-13: Forma Regular covers functional/utility glyphs plus pillar, sector and feature-card icons; bespoke originals remain only for brand marks, hero motifs and genuine illustration. See "Line-art and icons".)_

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

> **STOCK-ICON SCOPE (locked 2026-06-13, Herman sign-off. Supersedes the earlier same-day note that kept pillars/sectors/feature cards bespoke, and supersedes the bespoke pillar/sector glyph specs further down this section: 110px hand-drawn, transmission-pylon utilities icon, shield+tick govern icon. Those are kept below as historical reference only.)** Two layers:
>
> - **Bespoke hand-drawn line-art (craft preserved here):** brand marks, **hero motifs**, and genuine illustration only.
> - **Icons8 Forma Regular** (one family, rounded; no Light/Thin/Bold/Sharp/two-tone/Material on production UI): **pillar icons, sector icons, feature/difference card icons, AND all functional/utility glyphs** (nav, chevrons, close, search, hamburger, social, arrows, form affordances), plus internal collateral, decks and app/training UI.
>
> Recolour Forma to navy `#26245C` via `fill:currentColor`; choose the 6 DMAICO pillar glyphs and 4 sector glyphs deliberately (do not take whatever search returns first). Public-site utility glyphs are small and single-colour; the two-tone tile and accent-stroke treatments are for content icons, collateral, decks and app, not the hero/brand layer. Shared with LMI (same icons, slate `#2C3E50` + crimson `#A51C30`). Catalogues: `Docs/LMI/ARTWORK/ICONS8_FORMA/ICON_CATALOGUE.html` (full, weight toggle Light / Regular / Thin / Doodle) and `ICON_CATALOGUE_CORE.html` (curated 600).
>
> **EQT-274/275 scope reduction:** bespoke pillar and sector glyphs come OFF the Affinity redraw backlog (now Forma Regular). Hero scene motifs STAY bespoke on that backlog. One weight per surface.

- Hand-drawn **single-weight navy `#26245C`** SVG, **one terracotta accent** per illustration, slightly off-straight (crafted, not mechanical). _(Variable-weight line-art was explored 2026-06-05 and PARKED: the redrawn variable-weight set read rougher and less consistent than the merged single-weight icons. Single-weight stands for now. Revisit the idiom as part of EQT-251 if pursued. Exploration kept for reference: `Docs/EQUIBT/EQUIBT_V6X_PILLAR_ICONS_v1.html`, `Docs/EQUIBT/EQUIBT_V6X_ICON_WEIGHT_COMPARISON.html`.)_
- One **bespoke** hero motif (tangle-resolving-into-a-clear-path). _(Pillar and sector icons are now Forma Regular per the scope note above, no longer bespoke; the per-pillar/sector specs below are historical reference.)_
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
- Site-wide hero art size is locked to `--hero-art-w:min(210px,22vw)` in `tokens.css`; Resources, service pillar, method, industry sector, case-study and insights hero art must reference `var(--hero-art-w)` rather than copying the literal value. Hero art is centred in its own column, with no horizontal translate nudge. The industries hub cluster uses the same token per icon, not a larger cluster-specific size (EQT-324).
- Desktop hero bands should stay compact, roughly 5-6x the main nav height. If art or padding pushes the next real section below the fold, shrink the hero before adding more structure (EQT-324).
- **Hero icon weight (EQT-324):** current Forma hero icons are filled navy via `fill:currentColor`, not stroke art. Do not try to make them thin-stroke in CSS. The thin-line hero treatment is deferred to EQT-275 bespoke hero scenes; any legacy stroke overrides must remain hero-scoped and are no-ops for filled Forma art.
- Interim line-art `hero-motif` art was removed from the Home, About, Capability Statement, Services hub, and Our Work hub heroes. Redo those hero scenes under EQT-275; do not re-add the interim motif (EQT-324).
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
- **Hub hero:** the four sector icons as a calm centred **2x2 cluster**, with each icon sized by the same `--hero-art-w` token as a solo industry hero icon. The cluster may be wider than a single icon, but it must not use a separate larger per-icon size or bleed into the right whitespace. The v5x polyhedron is retired.
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

### Resources nav dropdown + method cards on /resources/ (EQT-323, In Review PR #71)

**Resources converted from flat link to dropdown.** The nav item `<a href="/resources/">Resources</a>` is now a `[data-dropdown]` div using the same `.nav-item has-dropdown` pattern as Services, Industries, and About. Four items: Method guides (`/resources/#methods`), Guides and frameworks (`/resources/#guides`), Tools and assessments (`/resources/#tools`), Templates and checklists (`/resources/#templates`). All links go to `/resources/` with a URL hash — no separate hub page.

**"Methods we apply" removed from About dropdown.** `/methods/` is no longer in the nav. The individual method pages remain accessible via the method guide cards on `/resources/` and via direct URL. About retains: How We Work, Capability Statement, Engagement Model.

**`/resources/` hub: Methods chip + hash preselection added.** New `Methods` chip inserted after `All` (order: All · Methods · Guides · Templates · Tools). Five method guide entries added to `src/data/resources.ts` with `tag: "METHOD GUIDE"` → category `"methods"`. Each card links to the existing `/methods/<slug>/` page (`landing: false`, `action: "view"`, `actionLabel: "Read guide"`). The `Network` glyph (Lean Service Design) was already in the Astro component folder and was added to the glyphs map.

**Hash-aware filter JS.** `activateFilter(filterValue)` is now a named function. On page load, `window.location.hash` is read and the matching chip is activated. Chip clicks call `activateFilter` and update the hash via `history.replaceState` (no scroll jump, no full navigation). Valid hashes: `#methods`, `#guides`, `#templates`, `#tools`. Invalid/absent hash defaults to "all".

**EQT-326 (Resources guide entry for /methods/) is resolved** by this issue. No new page was created — the `/resources/#methods` filter IS the entry point.

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

**Both industry bars are JS-driven `position:fixed`, NOT CSS `position:sticky` (EQT-296). Do not revert to CSS sticky.** `.sector-subnav` and the hub `.sector-list-sticky` pinned fine in Chrome but in Safari/WebKit the bar detached at a section boundary and never re-pinned (confirmed 2026-06-11; hard failure, not scroll jank — stayed detached when stopped). The ancestor chain is provably clean (audited live: `main`→`body` have no overflow/transform/filter/will-change/contain), and `.site-nav` CSS sticky works, so this is a WebKit sticky-engine limitation CSS cannot fix here. Layer promotion (`translateZ(0)`) did NOT fix it. Solution: drive the bar with `initialiseBarPin(bar, scope)` — a spacer holds the bar's flow space; the bar gets `.is-pinned` (`position:fixed; top:var(--nav-h)`) while its scope is the reading area and `.is-parked` (`position:absolute; bottom:0`) at the scope bottom so it releases before the next section. `position:fixed` math is identical across Chrome and Safari, so verify in Chrome and trust Safari. The scope must be `position:relative`: `.subnav-pin-scope` wraps the subnav + the five `data-subnav-section`s (releases before the CTA); the hub uses the existing `.selector-sticky-scope`. Bars are `box-sizing:border-box` so `left:0;right:0` + gutter padding span full-bleed.

**Second Safari bug — the hub bar painted a stale ghost even when fixed (EQT-296 follow-up).** After the JS-fixed switch the subnav was correct in Safari but the hub `.sector-list-sticky` still appeared mid-page. Safari's own values proved the layout was right (`position:fixed; top:81px; rectTop:81`, ancestors clean) — it was a compositing/repaint bug: Safari left a stale paint of the fixed bar at an old position because the reveal-animated `.sector-panel` + `.hub-pathway` trainline in the same `.selector-sticky-scope` repaint right next to it. The subnav's scope has no such animated neighbour, so it was fine. **Final resolution (EQT-297): the hub bar is NOT pinned. Do not re-add a pin on /industries.** Three fixes failed in Safari, each verified on the Cloudflare branch preview in a Private window: (1) GPU promotion `transform:translateZ(0); backface-visibility:hidden` on the bar — ghost still appeared on a fresh production load; (2) removing the animated neighbour (the `translateY(8px)` reveal inside `.selector-section`) while keeping the promotion — bar rode glued to the bottom of the viewport while scrolling; (3) same with the promotion removed (bar unpromoted, matching the subnav) — bar still went to the bottom of the screen on scroll. Conclusion: WebKit will not reliably paint this JS-fixed bar in this scope, promoted or not, animated neighbour or not. The bar now sits in normal flow (`position:static`, no `.is-pinned`/`.is-parked` states, no `initialiseBarPin` on this page) and the selector reveal animation is restored since there is no fixed element left in the scope. `revealPanel()` still scrolls panels below nav + bar on sector click. The sector-page subnav (`_sector.astro`) keeps its JS pin — it works and was never affected.

**Hub bar resting position (EQT-297 layout follow-up).** With the bar non-sticky it sits in normal document flow, so DOM order is its only positioning. It was rendering above the "Choose the pathway" intro because `.sector-list-sticky` was the first child of `.selector-sticky-scope`, before the `.selector-section` that holds the intro head. Fixed by moving the bar *inside* `.selector-section`: the section now holds an `.industry-inner` (intro head only), then the full-bleed `.sector-list-sticky`, then a second `.industry-inner` (the `.sector-selector` panel + trainline). The bar reads under the intro prose, where it belongs. Pure markup reorder, no pin re-added.

**Hub tile title/hook alignment (EQT-297).** The four selector tiles wrap their titles to one or two lines ("Government & Public Sector" and "Advanced Manufacturing" wrap), which left the hooks sitting at different heights across the row. Fix: top-align the tile content (`.sector-row{align-items:start}`, icon kept visually centred via `align-self:center`) and reserve a two-line title with `min-height:2.32em` on `.sector-row h3` (= 2 × `line-height:1.16`), reset to `min-height:0` at ≤860px where the hooks are hidden. Every title and every hook now lands on the same line regardless of wrap; one-line tiles carry a deliberate reserved gap under the title. Same fixed-tile-head device already used on the Capability quadrant tiles.

**Reuse note (LMI).** This hub block — a non-sticky selector bar sitting under an intro head, four hairline tiles with aligned titles/hooks, and a shared panel + trainline below — is a portable pattern for the LMI site. Carry two decisions with it: keep the bar non-sticky (a JS/CSS pin breaks in Safari in this scope, see above), and keep the title `min-height` so the tiles align. The UI translation doc (`explorations/EQUIBT_V6X_UI_TRANSLATION.md`, EQT-254 items 6-7) and exploration block 07 are synced to this as-built.

**Sector subnav overflow chevrons (EQT-296).** The subnav tab strip (`.sector-subnav-inner`) is `overflow-x:auto; scrollbar-width:none`, so on narrow widths clipped tabs (e.g. "Where to start") had no discoverability cue. `‹`/`›` chevrons (`.sector-subnav-arrow`, abs-positioned over each edge with a short white fade) show only when `.sector-subnav` has `.can-scroll-prev`/`.can-scroll-next` — toggled by `initialiseSubnavOverflow()` reading `scrollLeft`/`scrollWidth` on scroll/resize. Tapping nudges the strip by 0.7×clientWidth. No chevrons when everything fits.

### Interactive resource tools — assessments (EQT-309, shipped 2026-06-12)

Two scored assessments live at `/resources/transformation-readiness-assessment/` and `/resources/ci-maturity-assessment/` (Astro static page + vanilla JS state, no framework island, no server, no email gate). These set the reusable pattern for any future on-site scored tool. The other four EQT-309 resources (government checklist, consulting brief template, engagement model, CI framework) shipped earlier in the same issue; the assessment UX below is the as-built standard.

**One rating scale, used everywhere on the tool (the key lock).** A single 4-band scale drives the overall result, every dimension, the tag pills, the legend and the print output, with matching thresholds so the headline band always agrees with the legend. Earlier builds had three competing vocabularies (overall tier names, dimension status, gap tags) at three different thresholds, which produced a "68% = Developing" headline against a legend that called 65-74% "Progressing". Resolved to one `band(pct)` function:
- **Needs attention** — below 40%
- **Developing** — 40-64%
- **Established** — 65-74%
- **Strong** — 75%+

**Scoring colours = traffic light (DELIBERATE SCOPED EXCEPTION to the navy + terracotta palette).** Assessment scoring is functional data display, not brand chrome, so it uses a red→orange→amber→green progression. Bars and legend dots use the bright shade; text, pills and the score circle use a slightly darker shade of the same hue for legibility on white:

| Band | Bar / dot | Text / pill / circle |
|---|---|---|
| Needs attention | `#E23B33` | `#C62828` |
| Developing | `#F2912E` | `#D9730B` |
| Established | `#F4C20D` | `#B07A00` |
| Strong | `#46A546` | `#2E7D32` |

The brand navy/terracotta still owns all non-scoring chrome on the page (nav, breadcrumb, hero, buttons, stepper, likert controls). Traffic-light is confined to the score readout. Recorded in `BRAND_SYSTEM.md` and `COLOUR_USAGE_RULES.md` (Rule 4) so it is not read as off-brand.

**State-aware hero (intro → question → results).** The hero is not static; it carries the tool through three states, and the questions are gated behind a Start click (the first page is a true intro, not a long scroll with the form already open):
- **Intro:** full hero — H1 question, lede, privacy line, gauge motif, `Start the assessment` (primary) + `Talk it through instead` (text link). This is the ONLY state that carries CTAs.
- **Question:** hero collapses to the tool name only (H1), no lede, no motif (blank right column is intentional), shorter padding (`.res-hero.is-compact`). The section stepper + questions sit below.
- **Results:** hero becomes the result — H1 reads "Your transformation readiness is developing" / "Your CI maturity is strong" (grammar special-cased so "Needs attention" reads "Your … needs attention"), the tier description as prose, and the score circle (band text colour, white %) replacing the gauge on the right. `Start again` returns to the intro.

This refines the EQT-285 "no primary CTA in hero" lock for interactive tools: the Start button is the tool's function, not a hard-sell, and it appears on the intro state only.

**Close-section rhythm (assessment pages).** Below the tool: white "Work with us" (`WORK WITH US` / "Rather have us run it with you?", EQUIBT contact) then beige "Build with us" (`BUILD WITH US` / "Build the capability in-house", the LMI handover). The white→beige alternation is the separator, so the LMI band's top/bottom hairlines are dropped (the "alternate, don't rule" divider rule). Scoped to the assessment pages via the page `<style is:global>` so other resource pages are untouched.

**Print / PDF output (`window.print()` on a generated tab, dedicated layout).** Arranged to mirror the results hero: EQUIBT wordmark top-right + tool-name title across the top on a 2px rule; then the result headline + tier-description prose on the left with the score circle on the right; DIMENSION BREAKDOWN cards; colour legend; a full **Your responses** list (every question with the answer chosen); then a footer with "Generated [date] · Anonymous results" and `www.equibt.com`. Print body text is near-black (`#0d0d0d` body, `#2a2a2a` labels/scores, `#1a1a1a` legend) — print greys must be far darker than screen greys or the PDF reads fuzzy. The browser tab `<title>` is the tool name ("Transformation Readiness Assessment — Results"), not a generic "Results".

**Text contrast (older-exec audience).** Use the dark tokens, not washed-out greys: body/action text `var(--mid-grey)` `#2B2B2B`, secondary (scores, captions, italic context) `var(--caption)` `#5A5A5A`. Avoid `#999`/`#aaa` for any content text. Sizes were lifted a step (action 16px, context/score 14px, dimension labels 12px). The redundant lower-case status word under each bar was removed — the coloured pill carries the band name once.

### Method explainer pages (EQT-322, archetype locked 2026-06-13)

New page type. Routes `/methods/<slug>/` for the five named methods (Lean Business Analysis, Lean, Lean Six Sigma, Lean Service Design, Lean Agile). **No nav item, no `/methods/` index.** Reached only contextually: the service-pillar "Methods we use here" line (links into `/methods/<slug>/`) and the How We Work methods list. Subordinate to DMAICO, **application angle** (how EQUIBT applies the method and what a client gets), never curriculum (LMI teaches). Component `src/components/MethodPage.astro`, fed a typed `data` object per thin route, mirrors `ServicePage.astro`. Method-specific CSS scoped under `.method-*`; hero/CTA/LMI reuse existing patterns, do not reinvent.

Six sections. After the white hero, backgrounds run **cheat (white) → How it differs (beige) → In Our Work (beige) → Work With Us (white) → LMI (beige)**:
1. **Hero** (white, asymmetric, method icon right): eyebrow `METHOD`, H1 = the **method name**, body = an **impersonal authority-tone overview paragraph** (purpose, approach, outcomes; no "we"/"you" - reads like a definition, not infographic patter). Hero height ~half the standard `service-hero` (scoped `.method-hero` padding ~62/56). Uses the per-method Forma icon via `heroIcon`, not `hero-motif`; the glyph is scaled around `min(200px,20vw)` so it balances the title and overview paragraph.
2. **1-minute cheat sheet:** two columns. Left = framework as styled text in a bordered box (terracotta letter circles with a bold ring matching the letter stroke, navy headings) with a commented hand-drawn-diagram insertion point (`<!-- METHOD FRAMEWORK DIAGRAM ... -->`, no visible placeholder). Cheat-sheet title = the **verb-first one-line description** (NOT the method name - that is the hero H1; duplicating them was a rejected first pass). Right column = What it is / When it is useful / What you get. The prior separate "When to reach for it" and "The problem" blocks are consolidated into `cheatSheet.whenUseful`.
3. **How it differs:** beige section, eyebrow `HOW IT DIFFERS`, heading from supplied copy. The hook sits in the existing side-bleed `.service-callout`, which is on-system. Below it, the comparison uses Same foundation / What is different two-column structure, Montserrat leads and Lora body on hairlines. "And the method itself is lean" renders as the same plain hairline item treatment, not a bespoke bordered box. The summary is a plain Montserrat closing line around 21px. No new typefaces, oversized pull-statements, invented cards, or bespoke boxes.
4. **In Our Work:** proof points = industry `<Icon>` + sector + metric + verb-first title + a one-line context pulled from the case's own `problem` field. Link to `/our-work/<slug>/` **only when `fullStudy` is true** (the route filters on it); compact cases render as text, no dead links.
5. **Work With Us CTA:** `ow-cta-grid`, eyebrow `WORK WITH US`, copy + prose + "Get in touch" button left; the **How We Apply It block** (eyebrow + succinct "we" prose + clickable DMAICO phase chips linking to `/services/<phase>/`) occupies the right column (replaces the motif there).
6. **LMI handover** (beige): standard treatment (see LMI handover lock) - eyebrow `TRAINING`, heading, paragraph, full-colour 702-transparent wordmark, btn-text "Explore training at Lean Methods Institute" to `leanmethods.com.au`. Method pages DO carry the handover (the EQUIBT-applies / LMI-teaches cross-link is the point), unlike service pages.

Framework box rules: **every item description starts with an action verb.** Current locked framework wording: Lean Business Analysis SCOPE = Situation "Investigate what is actually happening.", Context "Map whose problem it is and who is affected.", Outcome "Separate the real problem from the assumed fix.", Parameters "Define scope, assumptions, dependencies and risks.", Expectations "Consolidate the requirements in writing: what Done looks like."; Lean Agile DRIVE = Define "Set the outcome and the guardrails.", Right-size "Size the next increment to deliver value in one cycle.", Implement "Roll it into the live operation.", Validate "Measure against the outcome, not the plan, then go again.", Embed "Lock it into standard work, run the retro, feed it back."; Lean Service Design DMADV = Define "Define the service goals and what the customer counts as quality.", Measure "Set the metrics and baseline service, needs and risks.", Analyse "Develop and weigh service design options against customer needs.", Design "Build and prototype the service, ironing out the weak points.", Verify "Prove the redesigned service works in real conditions before launch." EQUIBT-owned frameworks (SCOPE, DRIVE) are named as ours; standard cycles (DMAIC, DMADV) are shown as background structure - we own the emphasis/harmonisation, never the cycle. Lean and Lean Six Sigma both show framework title `DMAIC` with a same-size parenthetical sublabel: Lean `(Improve Workflow)`, Lean Six Sigma `(Fix Root Causes)`. Keep DMAIC (the five-phase cycle) and DMAICO (our high-level approach) distinct. Voice: hero overview impersonal/authoritative, everything else firm "we"; verb-first titles, Australian English, no em/en dashes, no dates, anonymised client descriptors.

Global change made this issue: `.btn-text .ar` gained a small left gap (`margin-left:3px`) so the chevron is not jammed against the label - site-wide. Took four correction rounds on the Lean Business Analysis archetype before lock (bespoke blocks > reuse v6x patterns; hero card > line-art motif; standalone Problem/Apply sections > folded into cheat sheet then Apply relocated to the CTA; dog-food block > standard LMI handover; method-name de-duplicated; hero overview made impersonal). Stage 2 clones the locked archetype to the other four.

Correction rule: the How We Apply It prose is plain language. DMAICO phase wayfinding lives in the chips only, never recited in prose.

Service-pillar method block rule: after the deliverables carousel, the service page renders eyebrow `THE METHODS BEHIND THIS WORK` followed by per-method descriptor and link in a two-column layout. Each method row shows the small per-method Forma icon beside the method name, around 48px. Every pillar carries two methods in this order: FRAME = Lean Business Analysis + Lean Service Design; PLAN = Lean Business Analysis + Lean; SOLVE = Lean Six Sigma + Lean Business Analysis; EVOLVE = Lean Agile + Lean Service Design; GOVERN = Lean Six Sigma + Lean Business Analysis; SCALE = Lean Agile + Lean Business Analysis.

### Methods hub + comparison grid (EQT-325, locked 2026-06-14)

New page type at `/methods/` (the index EQT-322 deliberately omitted). **Reverses the EQT-322/313 "no `/methods/` index, no nav" guardrail** - a conscious call: the five method pages now have a home, surfaced as an About dropdown item **"Methods we apply"** (added under How We Work in `Nav.astro`). DMAICO stays the spine; the hub reinforces it by organising the page BY the six phases, so methods read as subordinate explainers, not a rival taxonomy. Page in `src/pages/methods/index.astro`; CSS scoped `.method-hub` / `.method-matrix` in `services.css`; data-driven, `getFit()` resolves each cell so the grading can't drift.

Section order: compact `.method-hero` -> the comparison grid (white) -> framing (beige) -> closing CTA (white) -> LMI/Training handover (beige, LAST). The handover sits last by Herman's call (the page ends on the training cross-link). Hero copy is **problem-first and never prints "DMAICO" on the page** (the acronym is the internal spine, not public jargon): H1 "Match the method to the problem.", the overview leads with the problem and the outcome, then the methods, "the method follows the problem, not habit".

**The comparison grid (the centrepiece).** A real `<table>`: methods are the five columns, plain-language use cases are the rows, grouped by the six DMAICO phases (three use cases per phase, 18 rows). Each cell is a three-level traffic light showing how much that method leads that kind of work. It is the product-comparison-matrix FORMAT (estimando-style) rendered on the v6x system, never the estimando look.

- **On-brand chrome, no heavy fills, no rules.** Method headers render on white with NO navy band and NO dividers of any kind: no terracotta underline (hard rule: no terracotta horizontal lines), no vertical column rules, no header underline. Structure is carried by equal column widths and aligned rows instead. `table-layout:fixed` + a table `min-width` give equal method columns that hold on mobile; the use-case column is wider. The three header elements align across all five columns on shared rows: bare Forma Regular method icon (no circle behind it), the method-name link (wrapped in an element with `min-height:42px` so single- and two-line names still leave the sub-labels on one baseline), then the muted sub-label (flow & waste / evidence & control / problem & scope / end-to-end service / delivery in cycles). The corner label "Where the problem sits > the method that fits" is `vertical-align:bottom`, level with the method names.
- **Phase bands = light + service wayfinding.** Each phase is a full-width band: a LIGHT tint (beige/off-white) with hairline top/bottom rules only (NOT the dark fill of the first build). It carries the pillar Forma `<Icon name={pillar}>`, the phase word as a link to `/services/<pillar>/`, and the plain-language gloss as the standard animated `btn-text` chevron link to the same pillar (e.g. "Embed it in the operation >"). So the band groups the use cases AND jumps to the matching service pillar. Phase -> pillar is 1:1 by name lowercased (FRAME -> frame ... SCALE -> scale).
- **Traffic light = deliberate scoped off-brand signal layer** (same rationale as the EQT-309 assessment scoring colours; the ONLY off-brand element on the page, scoped to the matrix cells). **Lead** = green `#2F9E6B` filled disc with a white geometric SVG tick (not a font glyph). **Supporting** = amber `#E2A12F` filled disc. **Minimal** = grey `#D5D0C6` outline disc with an ~8px centre dot. Legend under the grid: Lead method / Supporting / Minimal. The wording is deliberate: "Lead" (the method you reach for), not "good"/"best" - the page argues fit-to-problem, not method quality.
- **Grading is authored and honest** (Cowork-owned copy, hard rule). One lead per row; supporting only where a method genuinely contributes; everything else minimal. The spread is the point: Lean Business Analysis is the connective method and leads most framing/scope/govern rows; Lean Six Sigma clusters in Solve and Govern; Lean Agile in Evolve and Scale; Lean Service Design leads only the two journey rows (it is the narrowest, honestly shown); Lean leads diagnosis and standard work.
- **Accessibility, not colour-only.** Real table semantics (`th scope` on methods, use cases, and phase rowgroups); every cell carries a `title` plus a visually-hidden "Method: Level for use case" string; the dot is `aria-hidden`. The grid is a keyboard-focusable scroll region with a **sticky first column + horizontal scroll** below ~390px (method columns scroll, use-case labels stay), never collapsing or dropping columns.

Took several Herman review rounds off the first (heavy) build: navy header band + black phase bands -> light; icon circles dropped; terracotta header underline removed (hard no); columns equalised and header rows aligned to remove the need for any dividers; minimal dot enlarged; Training/CTA swapped; "DMAICO" stripped from page copy; framing section given eyebrow `HOW THEY FIT` + title "Run them as one engagement, not five separate tools." The standalone sign-off mock is `Runtime/01_Projects/Active/EQT325_METHODS_HUB_GRID_MOCK.html` (vault). The Resources-hub entry point for the same page is delivered as part of EQT-323 (see nav section below).

## Process notes

- Build runs via Codex on branch `eqt-245` (single canonical clone); Herman/Cowork review screenshots and the file directly. Codex's screenshot environment was blocked this session, and self-checks are not trusted for sign-off (past false passes). Six correction rounds (R1-R6) produced this set. Icon options and the Govern-tick exploration are recorded in `EQUIBT_V6X_ICON_OPTIONS.html`, `EQUIBT_V6X_GOVERN_TICK_OPTIONS.html`, `EQUIBT_V6X_GOVERN_FINAL.html` (Docs/EQUIBT).
