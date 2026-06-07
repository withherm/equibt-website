# CODEX BRIEF — EQT-253: convert the six service pages to v6x

## STOP — READ THIS FIRST

- **This file is the complete spec.** Do not hunt for other prompts. Do not open the `prompts/` folder. Do not open `assets/deliverables/prompts/`. Everything you need is in this brief plus the source files it names. The named reference files in section 4 ARE required reading; everything else is off limits.
- **Do not generate images.** No AI image generation, no raster assets. Where a document preview is needed, build the placeholder card described in section 6.
- **Touch ONLY the files named in section 2.** Do not edit `index.astro`, `home.css`, `base.css`, `tokens.css`, or anything inside `src/components/icons/` root. Those are EQT-272's surface and the conflict firewall between our two branches. If you think you need to change one of them, STOP and report instead.
- **Plan-gate.** Before writing any code, post your build plan (file list, the shared-template approach, the component list, how you will wire the six pages) and wait for go. Do not write code until the plan is approved.
- **Verify, do not self-certify.** When the build is done, list exactly what you changed and confirm `npm run build` is green. Do not claim a section is present without it actually being in the file. A reviewer will eyeball screenshots; false "present" passes have happened before.

---

## 1. Job

Convert the six EQUIBT service pages from their v5x HTML prototypes into the v6x Astro system. Build ONE shared service-page template, apply it to all six. The pages must read as the same site as the live v6x home (`src/pages/index.astro`).

- Copy is the authority from the six v5x prototypes (section 5).
- STYLE comes from the v6x system, NOT from the v5x prototypes. The v5x pages are boxy, drop-shadowed, six-colour-coded; v6x is editorial-calm on hairlines, one accent. Translate, do not transcribe the styling.
- Branch: **`eqt-253-services-v6x`** off the latest `main`. One branch, one PR.

The six pages and their locked URLs (confirmed against existing internal links across the repo):

| Page | URL | Service name (LOCKED) | Eyebrow |
|---|---|---|---|
| FRAME | `/services/frame/` | Problem Framing | FRAME · DEFINE |
| PLAN | `/services/plan/` | Operations Diagnostic | PLAN · MEASURE |
| SOLVE | `/services/solve/` | Iterative Improvement | SOLVE · ANALYSE |
| EVOLVE | `/services/evolve/` | Rapid Pilot | EVOLVE · IMPROVE |
| GOVERN | `/services/govern/` | Architecture & Governance | GOVERN · CONTROL |
| SCALE | `/services/scale/` | Operational Embedding | SCALE · OPERATE |

Service names are HARD-LOCKED. Rapid Pilot is delivered under EVOLVE; never confuse it with "LeanPilots". The SCALE page lives at `/services/scale/` (the old `/services/operationalise/` slug is retired; do not use it).

---

## 2. Files — create ONLY these

Create:

```
src/pages/services/frame.astro
src/pages/services/plan.astro
src/pages/services/solve.astro
src/pages/services/evolve.astro
src/pages/services/govern.astro
src/pages/services/scale.astro
src/styles/services.css
src/components/icons/glyphs/<one .astro per glyph used>   (see section 7)
```

Each `services/*.astro` imports the shared layout, `Nav`, `Footer`, the `Icon` dispatcher, and `../../styles/services.css`. Follow the exact import pattern in `src/pages/index.astro`.

If the route shape forces a decision (flat `services/frame.astro` vs `services/frame/index.astro`), pick whichever produces the trailing-slash URLs in the table above and state it at plan-gate. Confirm against how `index.astro` and the Astro config emit URLs.

**DO NOT TOUCH (conflict firewall with EQT-272):**

```
src/pages/index.astro
src/styles/home.css
src/styles/base.css
src/styles/tokens.css
src/components/icons/*.astro        (the icon root — Frame.astro, Plan.astro, Icon.astro, etc.)
src/layouts/Layout.astro            (read it, import it, do not edit it)
src/components/Nav.astro            (read it, use it, do not edit it)
src/components/Footer.astro         (read it, use it, do not edit it)
```

New glyph components go in the NEW subfolder `src/components/icons/glyphs/` only — never in the icons root. Whatever EQT-272 lands inside the icon root flows into your pages automatically because you reference pillar icons through `<Icon>`, never by copying their markup.

---

## 3. Icons — pillar icons via `<Icon>`, never inline

- Pillar / hero icons come ONLY from the dispatcher: `<Icon name="frame" />`, `<Icon name="plan" />`, `<Icon name="solve" />`, `<Icon name="evolve" />`, `<Icon name="govern" />`, `<Icon name="scale" />`. Never inline a pillar SVG, never copy icon markup out of the components.
- Pillar icons render at the uniform **110px** wrapper size (same as the home `.svc-icon` / `.ic`).
- The small service glyphs (proof rows + deliverable cards) are a SEPARATE set you create under `src/components/icons/glyphs/` from the SVGs pasted in section 7. They are NOT pillar icons and do not go through `<Icon>`.

---

## 4. v6x system — the rules you are building to

Required reading, in this order (all in the repo):

1. `prototypes/DESIGN_LEARNINGS_v6x.md` — the design authority. Read it fully.
2. `src/pages/index.astro` + `src/styles/home.css` — the built v6x reference; your pages must read as the same site.
3. `prototypes/explorations/EQUIBT_V6X_UI_TRANSLATION.md` — the v5x→v6x component translation map.
4. `prototypes/explorations/EQUIBT_V6X_DIRECTION_EXPLORATION_v6.html` — **the worked example of every component this page needs**, in real FRAME content. Blocks 03 (examine trio), 04 (deliverables carousel), 06 (case editorial), 08 (station pathway), 09 (next-step columns), 16 (CTA equation) and 17 (side-bleed highlights) are the structural references for this build. Lift the structure and treatment from these blocks.

**Precedence rule:** both reference files were SYNCED to the merged home on 2026-06-07 (Lora 22px body, terracotta `›` chevron link system, 110px pillar/sector icons, locked GOVERN shield, Open Sans removed), so they should agree with the built home. If you still find a disagreement, the order is: DESIGN_LEARNINGS_v6x first, then the built home (`index.astro` / `home.css` / `base.css` / `tokens.css`), then exploration v6. For components that exist only in exploration v6 (carousel, trio, CTA equation, static pathway, next-step columns), exploration v6 is the structural reference.

Quick reference:

- **Type:** Montserrat 700 headings (letter-spacing -0.012em); Lora 500 22px body, line-height 1.45, near-black `#161616`; italic Lora for captions (metric captions, evidence source lines, sector descriptors). Functional labels (eyebrows, kickers, data labels) stay Montserrat. H1 `clamp(40px,3.4vw,46px)`. Minimise font-size variation; do not invent smaller grey sub-sizes.
- **Palette:** white `#FFFFFF` + beige `#F5F3EE` ONLY, alternating. Terracotta `#C15F3C` single accent (terracotta-dark `#A04E30` for hover). Dark-slate `#2C3E50`. Navy line-art `#26245C`. Hairline `rgba(38,36,92,0.13)`. No navy-wash, no grey-wash, no highlight-wash fills.
- **Boxes:** 1px hairline, rounded ~16px, no drop shadow, no hover-lift. Earn the box: open content on hairlines is the default; use a real bordered/filled card only for a genuinely bounded object. Reuse the design tokens already defined in `tokens.css` / `base.css` (e.g. `--wide`, `--max`, `--hairline`, `--terracotta`, `--navy`, `--near-black`, `--mid-grey`, `--caption`, `--off-white`, `--link-gap`). Do not redefine them; reference them from `services.css`.
- **Dividers:** alternating white/beige is the separator — no divider where colours already alternate. A contained 2px navy bisection line ONLY where two consecutive same-colour sections meet.
- **Eyebrows:** terracotta dot + ALL CAPS Montserrat, dot style (`FRAME · DEFINE`). Eyebrow-to-title gap ~14px, never tighter. Every section carries an eyebrow.
- **Pillar wayfinding:** the six-colour pill system is RETIRED. Pillars are identified by the hand-drawn icon + monochrome dotted eyebrow only. No per-pillar colour coding anywhere on these pages. No 01/02/03 numbering.
- **Chevron links:** terracotta text + bolder/bigger `›` glyph; underline draws left-to-right under the text only, then the chevron nudges. One consistent vertical gap (`--link-gap`) between the last body line and the link in every section. Match the `.btn-text` pattern in `home.css`.
- **Evidence, not claims:** every metric is tied to the verb-first action that produced it. No bare before/after number floating alone.
- **Layout:** generous air, asymmetric hero (motif right, bleeding into whitespace), icons on one calm left axis (no alternating sides), varied vertical rhythm. **One dark moment maximum per page** (that is the CTA equation card — section 6).
- **Voice (HARD):** firm "we", no named individual, verb-first active headlines, no em/en dashes (colon or comma), no dates/years in public copy, no public prices, anonymised client-type descriptors, no visible DMAICO acronym, "Get in touch" as the CTA.

---

## 5. Page structure — the shared template (all six identical, only copy/icon/glyphs/links vary)

Read the six source prototypes for the copy: `prototypes/equibt_frame_prototype_v5x.html`, `_plan_`, `_solve_`, `_evolve_`, `_govern_`, `_scale_`. The section order below is consistent across all six. Apply the v6x translation in the right-hand notes.

1. **Hero** (white). Asymmetric: copy left, pillar `<Icon>` motif right bleeding into whitespace (home hero pattern). Dotted eyebrow (e.g. `FRAME · DEFINE`), verb-first H1 (the v5x hero H1 is already verb-first, keep it), Lora subhead, actions = `Get in touch` (btn-primary to `/contact/`) + a `View our work ›` text link to `/our-work/`.

2. **Context / "the situation"** (beige). The v5x prototypes open this with a NAMED PERSONA ("Michael ..."). **DECISION LOCKED: rewrite to role framing.** Drop the name. Recast in second-person / role voice that preserves the tension, e.g. for FRAME: "Most operations leaders have been here. The leadership team holds three different views: the COO calls it a technology problem, the operations director a people problem, finance a cost problem. They are all partly right, and that is the problem." Keep it firm-"we"/second-person throughout, no named character on any of the six pages. Open editorial prose on whitespace, no box.

3. **Why start here** (white). Eyebrow `WHY START HERE` (FRAME) / equivalent per page, a short headline, the section prose from the v5x source, then the **three proof points** as open columns on a top hairline (NOT boxed — boxing framed the icons like image borders, not wanted). Each column = the assigned small glyph (section 7, displayed ~44px) + a Montserrat bold lead + Lora support line. The three leads per page are listed in section 7's table. If the v5x source carries a highlight callout in this region, translate it per exploration v6 block 17: side-bleed statement callout, navy-wash `#E8ECF5` or white-with-hairline, rounded on the inner side only, used sparingly and asymmetric (this is the ONE sanctioned wash, a callout, never a section fill).

4. **What we do — the examine trio** (beige). Structure = exploration v6 **block 03**: eyebrow `WHAT WE DO`, headline, intro, then **three open columns on a top hairline**, each column = small glyph (~54px, reuse the closest glyph from the section 7 set; propose the mapping at plan-gate) + Montserrat heading + Lora description. No boxes, no six-colour coding. Trio item names per page are in the v5x source (e.g. FRAME = Stakeholder Alignment / Project Charter / Success Criteria).

5. **What you receive — deliverables** (white). Structure = exploration v6 **block 04**: eyebrow `WHAT YOU RECEIVE`, headline, intro, then the **de-weighted scroll-snap carousel**. Each slide = 2-col grid: LEFT a 4:3 document panel (beige fill, 1px hairline, ~8px radius) carrying the assigned `doc-*` glyph as a faint ghost placeholder (see section 6); RIGHT the deliverable name (Montserrat h3) + description (Lora) from the v5x source. NO card shadow. Controls bottom-right (right-handed): dots first then two 46px hairline-circle arrows; active dot = terracotta pill. Lift the carousel JS pattern from exploration v6 (`carousel()` fn) into the template's inline script.

6. **Our work — proof** (beige). Eyebrow `OUR WORK`, headline `Proven in practice.`, then the two anonymised cases from the v5x source rendered per exploration v6 **block 06** (de-boxed editorial case): left meta column = terracotta sector kicker + big navy stat + italic caption; right = verb-first h3 + Problem / Approach / Outcome hanging-label blocks + `View our work ›` link. Hairline-separated, no dark box, no six-colour pillar tag. Every stat stays tied to the action that produced it.

7. **Where it leads — station pathway + next step** (white). Structure = exploration v6 **blocks 08 + 09**, NOT the home interactive selector. The service-page pathway is **STATIC**: single hand-drawn off-straight line (`.hd-f2`), six stations at the home coordinates, with the CURRENT page's station marked by a terracotta ring + terracotta core + a terracotta `YOU ARE HERE` label and pointer above it (inside the container, never overflowing). Station labels: current + next in navy `#26245C`, downstream labels grey `#7A8591` (matches the locked current+next convention). No hover/proximity JS for the pathway: it is a static SVG. Below it, the **next-step two columns** (block 09) on top hairlines: left = the current pillar (`<Icon>` sized ~50px by the wrapper, dotted kicker, locked service name, one-line summary, no link), right = the next pillar (`<Icon>` ~50px, dotted kicker, locked service name, summary, `Explore [PILLAR] ›` link). Sequence: FRAME→PLAN, PLAN→SOLVE, SOLVE→EVOLVE, EVOLVE→GOVERN, GOVERN→SCALE. For SCALE (last station) the right column points to `/contact/` ("the operation runs itself; talk to us about where to start" framing, `Get in touch ›`).

8. **CTA equation — the one dark moment** (the page's single dark card). Structure = exploration v6 **block 16**: contained dark rounded card (radius ~20-22px) sitting on a light section, NOT full-bleed. Light eyebrow, white headline, support prose, then the A + B = C equation from the v5x source: thin hairline boxes (`rgba(245,243,238,0.22)` borders, ~12px radius) for `Typical timeline` + `How we work` = `What you get` (deliverables as a hairline-separated list), terracotta `+` and `=` operators (Montserrat 700, ~24px), and the **white-inverted button** (`background:#fff`, near-black text) reading `Get in touch` → `/contact/`. Dark-field colour: exploration uses dark-slate `#2C3E50`; a different flat dark tone per page is acceptable (deep slate / ink-navy / charcoal) but must stay dark, FLAT, no gradient, terracotta accent intact, copy legible. This is the ONLY dark moment on the page.

Footer is the shared `Footer.astro`, unchanged. The FRAME footer treatment (full footer, no LMI handover line on service pages) holds — service pages do NOT carry the LMI handover block (that is Home + industry pages only).

---

## 6. Deliverable carousel — placeholder document cards (images do NOT exist)

The v5x prototypes reference `assets/deliverables/<PILLAR>/*.jpg`, but those image files were never generated (the folders contain only `.gitkeep`). **Do not reference those paths — they will 404. Do not generate images.**

Instead, follow exploration v6 block 04's placeholder treatment exactly (the file now demonstrates it with the real glyphs): each slide's LEFT panel is a 4:3 document panel (beige `#F5F3EE` fill, 1px hairline border, ~8px radius, no shadow) with the assigned `doc-*` glyph (section 7) centred inside as a ghost placeholder, ~46px at wrapper `opacity:0.4` (the glyphs carry inline colours, so opacity goes on the wrapper). Glyph-by-document-type: written report → `doc-report`; charter / sign-off / criteria / authorisation → `doc-tick`; analysis / assessment / dashboard → `doc-chart`; roadmap / plan / programme → `doc-calendar`. Confirm the exact mapping at plan-gate; keep it consistent across pages.

Leave a clear, single integration seam so a later content-only swap (EQT-274 / image pipeline) replaces the panel contents with a real `<img>` without touching layout. Note in a code comment: `placeholder document panel — real mockup image swaps in here later (EQT-274)`.

---

## 7. Small service glyphs — paste set + per-page assignment

Create one Astro component per glyph used, in `src/components/icons/glyphs/`, from the markup below (each is a standalone SVG with inline stroke/fill: navy `#26245C` single-weight 2.8, round caps, one terracotta `#C15F3C` accent, 64 viewBox). Size them by the wrapper (proof columns ~44px, examine trio ~54px, carousel ghost panels ~46px faint). These are PLACEHOLDER artwork; Herman redraws them in Affinity later (EQT-274), a content-only swap. Do NOT ship the v5x geometric proof/deliverable icons, and do NOT draw new glyphs: only the pasted set below.

### Per-page assignment

**Proof glyphs** (the three "why start here" columns), mapped to each page's three proof leads:

| Page | Proof lead 1 → glyph | Proof lead 2 → glyph | Proof lead 3 → glyph |
|---|---|---|---|
| FRAME | Alignment before action → `align-target` | SPIN methodology → `dialogue` | Charter, not recommendations → `charter` |
| PLAN | Evidence-based, not assumption-driven → `evidence` | Capability readiness matters → `capability` | Roadmap, not recommendations → `roadmap` |
| SOLVE | Causes, not symptoms → `root-cause` | Designed future state → `future-state` | Capability transfer → `transfer` |
| EVOLVE | Real data, real metrics → `gauge` | Controlled scope, controlled risk → `assure` | Requirements after validation → `future-state` |
| GOVERN | Process architecture, not documentation → `network` | Control plans that catch drift early → `assure` | AI governance frameworks → `automation` |
| SCALE | Standardisation without rigidity → `standardise` | Automation with governance → `automation` | Continuous improvement systems → `loop` |

(Reuse across pages is fine and expected — there are 15 distinct proof glyphs, not 18.)

**Deliverable glyphs** (the carousel ghost panels) — the four `doc-*` glyphs, assigned by document type as set out in section 6. Exact mapping is your call at plan-gate; keep it consistent across pages.

### Glyph SVG markup (paste into the components)

`align-target.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M20 10 H13 Q10 10 10 13 V20"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M44 10 H51 Q54 10 54 13 V20"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M54 44 V51 Q54 54 51 54 H44"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M20 54 H13 Q10 54 10 51 V44"/><circle fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" cx="32" cy="32" r="9"/><circle fill="#C15F3C" stroke="none" cx="32" cy="32" r="3.4"/></svg>
```

`dialogue.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M15 11 H40 Q44 11 44 15 V27 Q44 31 40 31 H24 L16 38 V31 Q12 31 12 27 V14 Q12 11 15 11 Z"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M37 39 H50 Q52 39 52 41 V48 Q52 50 50 50 H45 L41 54 V50 H37 Q35 50 35 48 V41 Q35 39 37 39 Z"/></svg>
```

`charter.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M17 8 H41 L48 15 V53 Q48 56 45 56 H17 Q14 56 14 53 V11 Q14 8 17 8 Z"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M41 8 V15 H48"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 24 H41"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 31 H41"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 38 H34"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 47 Q25 43 28 47 Q31 51 35 46 Q37 44 41 45"/></svg>
```

`evidence.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" cx="27" cy="27" r="15"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M38 38 L52 52"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 33 V27"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M27 33 V20"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M33 33 V24"/></svg>
```

`capability.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" cx="25" cy="19" r="8"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M11 50 Q11 35 25 35 Q39 35 39 50"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M48 26 V38"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M42 32 H54"/></svg>
```

`roadmap.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M10 52 C22 52 20 32 32 32 C44 32 42 12 54 12"/><circle fill="#26245C" stroke="none" cx="10" cy="52" r="3"/><circle fill="#26245C" stroke="none" cx="32" cy="32" r="3"/><circle fill="#C15F3C" stroke="none" cx="54" cy="12" r="3.6"/></svg>
```

`root-cause.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 16 H27"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M37 16 H50"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 26 H27"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M37 26 H50"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 36 H27"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M37 36 H50"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M32 8 V45"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M26.5 39.5 L32 45 L37.5 39.5"/><circle fill="#C15F3C" stroke="none" cx="32" cy="54" r="3.6"/></svg>
```

`future-state.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="10" y="10" width="20" height="20" rx="2" stroke-dasharray="4.5 5"/><rect fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="34" y="34" width="20" height="20" rx="2"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M24 24 L36 36"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M36 29 V36 H29"/></svg>
```

`transfer.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 24 Q14 10 32 10 Q44 10 50 19"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M50 11 V19 H42"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M50 40 Q50 54 32 54 Q20 54 14 45"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 53 V45 H22"/></svg>
```

`gauge.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M11 45 A21 21 0 0 1 53 45"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M11 45 L15 44"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M53 45 L49 44"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M32 45 L44 27"/><circle fill="#26245C" stroke="none" cx="32" cy="45" r="3.2"/></svg>
```

`assure.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M32 8 Q25 12 16 13 Q15.5 32 20 41 Q25 50 32 55 Q39 50 44 41 Q48.5 32 48 13 Q39 12 32 8 Z"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M25 31 L30 38 L40 24"/></svg>
```

`network.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" cx="16" cy="20" r="5.5"/><circle fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" cx="48" cy="16" r="5.5"/><circle fill="#C15F3C" stroke="none" cx="36" cy="46" r="5.8"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M19 25 L33 41"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M45.5 21 L38.5 40.5"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21.5 19.3 L42.5 16.7"/></svg>
```

`automation.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M44.35 33.96 L49.28 34.74 A17.5 17.5 0 0 0 49.28 29.26 L44.35 30.04 A12.5 12.5 0 0 0 42.11 24.65 L46.16 21.71 A17.5 17.5 0 0 0 42.29 17.84 L39.35 21.89 A12.5 12.5 0 0 0 33.96 19.65 L34.74 14.72 A17.5 17.5 0 0 0 29.26 14.72 L30.04 19.65 A12.5 12.5 0 0 0 24.65 21.89 L21.71 17.84 A17.5 17.5 0 0 0 17.84 21.71 L21.89 24.65 A12.5 12.5 0 0 0 19.65 30.04 L14.72 29.26 A17.5 17.5 0 0 0 14.72 34.74 L19.65 33.96 A12.5 12.5 0 0 0 21.89 39.35 L17.84 42.29 A17.5 17.5 0 0 0 21.71 46.16 L24.65 42.11 A12.5 12.5 0 0 0 30.04 44.35 L29.26 49.28 A17.5 17.5 0 0 0 34.74 49.28 L33.96 44.35 A12.5 12.5 0 0 0 39.35 42.11 L42.29 46.16 A17.5 17.5 0 0 0 46.16 42.29 L42.11 39.35 A12.5 12.5 0 0 0 44.35 33.96 Z"/><circle fill="#C15F3C" stroke="none" cx="32" cy="32" r="3.6"/></svg>
```

`standardise.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="11" y="11" width="17" height="17" rx="2"/><rect fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="36" y="11" width="17" height="17" rx="2"/><rect fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="11" y="36" width="17" height="17" rx="2"/><rect fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="36" y="36" width="17" height="17" rx="2"/></svg>
```

`loop.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 26 A18 18 0 0 1 47 19"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M47 10.5 V19 H38.5"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M50 38 A18 18 0 0 1 17 45"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M17 53.5 V45 H25.5"/></svg>
```

`doc-report.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 10 H43 Q46 10 46 13 V51 Q46 54 43 54 H21 Q18 54 18 51 V13 Q18 10 21 10 Z"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M25 22 H39"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M25 30 H39"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M25 38 H33"/></svg>
```

`doc-tick.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 10 H43 Q46 10 46 13 V51 Q46 54 43 54 H21 Q18 54 18 51 V13 Q18 10 21 10 Z"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M25 20 H39"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M25 36 L30 42 L39 28"/></svg>
```

`doc-chart.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 10 H43 Q46 10 46 13 V51 Q46 54 43 54 H21 Q18 54 18 51 V13 Q18 10 21 10 Z"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M25 20 H39"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M24 42 L30 33 L35 37 L40 27"/></svg>
```

`doc-calendar.svg`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="14" y="14" width="36" height="38" rx="3"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M24 8 V19"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M40 8 V19"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 27 H50"/><circle fill="#C15F3C" stroke="none" cx="24" cy="37" r="3"/></svg>
```

---

## 8. Acceptance checklist (the reviewer will eyeball, not trust self-checks)

- [ ] Six pages at the exact URLs in section 1, all structurally identical, only copy/icon/glyph/links vary.
- [ ] `npm run build` green. No references to non-existent images (no deliverable `.jpg` paths).
- [ ] No edits to `index.astro`, `home.css`, `base.css`, `tokens.css`, or `src/components/icons/` root. New glyphs only under `src/components/icons/glyphs/`. (This is the EQT-272 firewall — a clean diff here = zero merge conflict.)
- [ ] Pillar icons via `<Icon>` only; no inline pillar SVG.
- [ ] One dark moment per page (the CTA equation card); no full-bleed dark band; no navy/grey/highlight wash fills.
- [ ] No six-colour pillar pills anywhere. Dotted monochrome eyebrows. No 01/02/03 numbering.
- [ ] No named persona on any page (role framing applied). Firm "we" voice.
- [ ] No em/en dashes, no dates/years, no public prices, no client names, no visible DMAICO acronym.
- [ ] Verb-first active headlines. Evidence rows tie every metric to its action.
- [ ] Station pathway is STATIC per exploration v6 block 08: terracotta YOU ARE HERE on the current station, current + next labels navy, downstream grey. No pathway JS.
- [ ] Carousel matches exploration v6 block 04: ghost document panels (no broken image paths), controls bottom-right, terracotta active dot; carousel JS works.
- [ ] Type sizes match the merged home (Lora 22px body etc.), NOT the smaller exploration v6 demo sizes.
- [ ] Service pages do NOT carry the LMI handover block.

When done: open a PR, post the PR URL as a comment on Linear EQT-253, and list the changed files + confirm the build. Do NOT mark the issue Done (Herman/Cowork sets Done after merge).
```