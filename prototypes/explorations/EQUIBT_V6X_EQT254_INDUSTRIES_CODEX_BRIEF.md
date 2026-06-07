# CODEX BRIEF — EQT-254: convert the industries hub + 4 sector pages to v6x

## STOP — READ THIS FIRST

- **This file is the complete spec.** Do not hunt for other prompts. Do not open the `prompts/` folder. Do not open `assets/deliverables/prompts/`. Everything you need is in this brief plus the source files it names. The named reference files in section 4 ARE required reading; everything else is off limits.
- **Do not generate images.** No AI image generation, no raster assets.
- **Touch ONLY the files named in section 2.** Do not edit `index.astro`, `home.css`, `base.css`, `tokens.css`, anything inside `src/components/icons/` root, or anything under `src/pages/services/` / `src/styles/services.css` (EQT-253's surface). Those are the conflict firewalls with the two parallel branches (EQT-272 icons, EQT-253 services). If you think you need to change one of them, STOP and report instead.
- **Plan-gate.** Before writing any code, post your build plan (file list, the shared sector-template approach, the component list, the glyph mapping, the sub-nav anchor ids, how you will wire the hub selector) and wait for go. Do not write code until the plan is approved.
- **Verify, do not self-certify.** When the build is done, list exactly what you changed and confirm `npm run build` is green. Do not claim a section is present without it actually being in the file. A reviewer will eyeball screenshots; false "present" passes have happened before.

---

## 1. Job

Convert the EQUIBT industries hub and the four sector pages from their v5x HTML prototypes into the v6x Astro system. Build the **Financial Services page as the shared sector template first**, clone it to Government, Utilities and Advanced Manufacturing, then build the hub. The pages must read as the same site as the live v6x home (`src/pages/index.astro`).

- Copy is the authority from the five v5x prototypes (section 5/6).
- STYLE comes from the v6x system, NOT from the v5x prototypes. The v5x pages are boxy, drop-shadowed, six-colour-coded; v6x is editorial-calm on hairlines, one accent. Translate, do not transcribe the styling.
- Branch: **`eqt-254-industries-v6x`** off the latest `main`. One branch, one PR.

The five pages and their locked URLs (confirmed against the internal links in `src/pages/index.astro` and `src/components/Nav.astro`):

| Page | URL | v5x source (in `prototypes/`) |
|---|---|---|
| Industries hub | `/industries/` | `equibt_industries_prototype_v5x.html` |
| Financial Services | `/industries/financial-services/` | `equibt_industry_financial_services_prototype_v5x.html` |
| Government & Public Sector | `/industries/government/` | `equibt_industry_government_prototype_v5x.html` |
| Utilities | `/industries/utilities/` | `equibt_industry_utilities_prototype_v5x.html` |
| Advanced Manufacturing | `/industries/manufacturing/` | `equibt_industry_manufacturing_prototype_v5x.html` |

The manufacturing slug is `manufacturing` (not `advanced-manufacturing`). If the route shape forces a decision (flat `.astro` files vs `<name>/index.astro`), pick whichever produces the trailing-slash URLs above and state it at plan-gate.

---

## 2. Files — create ONLY these

Create:

```
src/pages/industries/index.astro
src/pages/industries/financial-services.astro
src/pages/industries/government.astro
src/pages/industries/utilities.astro
src/pages/industries/manufacturing.astro
src/styles/industries.css
src/components/icons/glyphs/<one .astro per glyph used>   (CONDITIONAL — see section 7)
```

Each page imports the shared layout, `Nav`, `Footer`, the `Icon` dispatcher, and `../../styles/industries.css`. Follow the exact import pattern in `src/pages/index.astro`.

**DO NOT TOUCH (conflict firewalls):**

```
src/pages/index.astro                modify nothing (EQT-272 + home surface)
src/styles/home.css
src/styles/base.css
src/styles/tokens.css
src/components/icons/*.astro         (the icon root — Icon.astro, FinancialServices.astro, etc. — EQT-272's surface)
src/pages/services/** and src/styles/services.css   (EQT-253's surface, may or may not exist on main yet)
src/layouts/Layout.astro             (read it, import it, do not edit it)
src/components/Nav.astro             (read it, use it, do not edit it)
src/components/Footer.astro          (read it, use it, do not edit it)
```

`src/components/icons/glyphs/` is ADDITIVE ONLY: you may add new files there, you must never edit a file that already exists in it (those belong to EQT-253). Whatever EQT-272 lands inside the icon root flows into your pages automatically because you reference pillar and sector icons through `<Icon>`, never by copying their markup.

---

## 3. Icons — pillar and sector icons via `<Icon>`, never inline

- Sector + pillar icons come ONLY from the dispatcher: `<Icon name="financial-services" />`, `<Icon name="government" />`, `<Icon name="utilities" />`, `<Icon name="manufacturing" />`, `<Icon name="frame" />` ... `<Icon name="scale" />`. Never inline a sector or pillar SVG, never copy icon markup out of the components. (The Government sector icon is being redrawn under EQT-272 — Parliament House motif. It flows through `<Icon>` automatically; that is why inlining is banned.)
- Sector hero icons render at the uniform **110px** wrapper size (same as the home `.svc-icon` / `.ic`). Pillar icons inside the service-selector list render small (~34px wrapper, per exploration block 13's `.si`); pillar icons in the next-step columns render ~50px (block 09).
- The small challenge glyphs (section 7) are a SEPARATE set under `src/components/icons/glyphs/`. They are NOT pillar icons and do not go through `<Icon>`.

---

## 4. v6x system — the rules you are building to

Required reading, in this order (all in the repo):

1. `prototypes/DESIGN_LEARNINGS_v6x.md` — the design authority. Read it fully.
2. `src/pages/index.astro` + `src/styles/home.css` — the built v6x reference; your pages must read as the same site.
3. `prototypes/explorations/EQUIBT_V6X_UI_TRANSLATION.md` — the v5x→v6x component translation map (see the "Industry-page controls" table).
4. `prototypes/explorations/EQUIBT_V6X_DIRECTION_EXPLORATION_v6.html` — **the worked example of every component these pages need.** Blocks **07** (sector rows), **08a** (interactive pathway selector), **08b** (static pathway styling), **09** (next-step columns), **13** (industry service selector, master-detail), **14** (proof carousel as evidence slides), **19** (why-sector formula), **20** (page hero), **22** (light closing CTA), **23** (LMI handover), **37** (sticky sub-nav) are the structural references for this build. Lift the structure and treatment from these blocks.

**Precedence rule:** if the references disagree, the order is DESIGN_LEARNINGS_v6x first, then the built home (`index.astro` / `home.css` / `base.css` / `tokens.css`), then exploration v6. For components that exist only in exploration v6 (selector, proof carousel, formula, pathway, next-step columns, sub-nav), exploration v6 is the structural reference.

Quick reference:

- **Type:** Montserrat 700 headings (letter-spacing -0.012em); Lora 500 22px body, line-height 1.45, near-black `#161616`; italic Lora captions (metric captions, evidence source lines, sector descriptors). Functional labels (eyebrows, kickers, data labels) stay Montserrat. H1 `clamp(40px,3.4vw,46px)`. Minimise font-size variation.
- **Palette:** white `#FFFFFF` + beige `#F5F3EE` ONLY, alternating. Terracotta `#C15F3C` single accent (terracotta-dark `#A04E30` hover). Dark-slate `#2C3E50`. Navy line-art `#26245C`. Hairline `rgba(38,36,92,0.13)`. No navy-wash, grey-wash or highlight-wash section fills.
- **Boxes:** 1px hairline, rounded ~16px, no drop shadow, no hover-lift. Earn the box: open content on hairlines is the default. Reuse the design tokens in `tokens.css` / `base.css` (`--wide`, `--max`, `--hairline`, `--terracotta`, `--navy`, `--near-black`, `--mid-grey`, `--caption`, `--off-white`, `--link-gap`). Do not redefine them; reference them from `industries.css`.
- **Dividers:** alternating white/beige is the separator. A contained 2px navy bisection line ONLY where two consecutive same-colour sections meet.
- **Eyebrows:** terracotta dot + ALL CAPS Montserrat (`FINANCIAL SERVICES`), eyebrow-to-title gap ~14px. Every section carries an eyebrow. The v5x sentence-case eyebrow "How might we help?" becomes `HOW WE HELP IN FINANCIAL SERVICES` (etc. per sector — block 13 pattern).
- **Pillar wayfinding:** the six-colour pill system is RETIRED. No `pillar-badge`, no coloured train pills, no per-pillar colour anywhere. Pillars identified by hand-drawn icon + monochrome dotted kicker only. No 01/02/03 numbering.
- **Chevron links:** terracotta text + bolder/bigger `›` glyph; underline draws left-to-right under the text only, then the chevron nudges. Match the `.btn-text` pattern in `home.css`. The v5x `btn-outline` secondary button is RETIRED — hero secondary actions become chevron text links.
- **Evidence, not claims:** every metric is tied to the verb-first action that produced it. No bare before/after number floating alone.
- **Layout:** generous air, asymmetric hero (motif right, bleeding into whitespace), icons on one calm left axis, varied vertical rhythm. **One dark moment maximum per page** (section 5.4 defines it for sector pages; the hub has NO dark moment).
- **Scroll-reveal:** the v5x multi-element `reveal` / `reveal-d1..d3` system is RETIRED. Do not port it. The v6x idiom (amended 2026-06-07, EQT-253 R1, see DESIGN_LEARNINGS) is ONE minimal reveal per SECTION: fade + ~8px rise, 350ms ease-out, fires once, no stagger, `prefers-reduced-motion: reduce` disables it. Implement in `industries.css` + the page scripts, matching the EQT-253 implementation.
- **Voice (HARD):** firm "we", no named individual, verb-first active headlines, no em/en dashes (colon or comma), no dates/years in public copy, no public prices, anonymised client-type descriptors, no visible DMAICO acronym (station names FRAME..SCALE are fine), "Get in touch" as the CTA.

---

## 5. Sector page — the shared template (all four identical, only copy/icon/glyphs/links/stations vary)

Read the four sector sources for the copy. The v5x section order is identical across all four: hero → challenges → services-fit → proof-band → cases → related → cta-panel → lmi-handover. Build it as below.

**5.0 Sticky sub-nav** (NEW in v6x — the v5x pages never shipped one; structural reference = exploration block 37). A slim in-page anchor bar that sits under the main nav and pins to the top on scroll: white background, 1px hairline bottom border, Montserrat links, terracotta marker on the active section (scroll-spy via IntersectionObserver, calm, no animation beyond the marker). Five anchors per sector page: `Challenges · How we help · Results · Our work · Where to start`, pointing at the section ids you assign (propose the ids at plan-gate). Sector pages only — the hub does NOT carry a sub-nav.

**5.1 Hero** (white). Asymmetric: copy left, sector `<Icon>` right at HOME-HERO scale bleeding into whitespace. Size the SVG element DIRECTLY at `min(540px, 48vw)`, exactly as the home hero does (locked at EQT-253 R2; wrapper-clamp sizing was rejected because it did not land visually), with the hero grid columns proportioned like home's. **Fine-line treatment (locked at EQT-253 R4):** scope a stroke-thinning override to the hero wrapper only so the VISUAL line weight at hero scale matches the home hero's lines (~`stroke-width: 0.3-0.4` for a 64-viewBox icon at ~540px; match the value EQT-253 shipped in `services.css`); terracotta accent keeps its extra-weight ratio; the override must not leak beyond the hero wrapper. The v5x geometric hero motifs are RETIRED; do not draw or modify artwork. Per-sector hero scenes are a later content-only artwork swap (EQT-275): leave the seam comment. Dotted eyebrow = sector name (e.g. `FINANCIAL SERVICES`), verb-first H1 from the source (e.g. "Fix the process, not the symptom."), Lora subhead + body from the source. Actions: `Get in touch` (btn-primary to `/contact/`) + `View all industries ›` chevron text link to `/industries/`. **NO hero metric band** (decision locked 2026-06-07): every figure stays in the proof carousel.

**5.2 Sector challenges** (beige). Eyebrow `WHY THIS SECTOR IS DIFFERENT`, headline + section note from the source. The six v5x challenge cards de-box into **six open columns on top hairlines (3 across, 2 rows)**: each = assigned challenge glyph (section 7, ~44px wrapper) + Montserrat bold lead (the v5x card h3) + Lora support line (the v5x card p). No boxes, no icon frames.

**5.3 Interactive service selector** (white). Structure = exploration block **13** exactly: eyebrow `HOW WE HELP IN <SECTOR>`, headline ("Six services, calibrated to financial services." etc.), intro note from the source, then the master-detail: LEFT a hairline list of the six pillars on one axis (small pillar `<Icon>` ~34px + Montserrat pillar kicker, terracotta active rule/dot, NO colour-coding), RIGHT an open detail panel (`aria-live="polite"`): title, copy, `Sector challenges addressed` as hairline chips, `Deliverables` as a hairline-separated list. All per-pillar data (title / copy / challenges / deliverables) comes from the v5x source's `data-*` attributes on each `data-service-card` — carry it verbatim per sector. Each selector item ALSO links to its service page `/services/<pillar>/` (the v5x cards were links; keep a chevron `Explore <PILLAR> ›` link inside the detail panel rather than making list items navigate). Default selected = FRAME. Lift the interaction pattern from block 13's `sel()` script.

**5.4 Proof carousel — the page's ONE dark moment** (contained dark rounded panel sitting on the alternating light section; flat dark field, no gradient, terracotta accent intact, copy legible). Dark tone is LOCKED per the page-type decision (2026-06-07): industry pages use a flat **ink-navy** (propose the exact value at plan-gate, in the `#1E2742`-`#232B47` register); services own dark-slate `#2C3E50`, home owns near-black. All five industry-section panels share the one tone. Structure = exploration block **14**: eyebrow `CLIENT RESULTS`, headline from the source, then the de-weighted scroll-snap carousel. **Each slide is an evidence row, not a bare stat**: rewrite each v5x slide so the number (or pillar tag) is tied to the verb-first action that produced it, using the slide's label + sub copy. Controls bottom-right: dots first, then two 46px hairline-circle arrows; active dot = terracotta pill. Lift the carousel JS from block 14.

Illustrative handling (LOCKED): preserve every `<!-- ILLUSTRATIVE -->` comment exactly where the source has one; do not add or strip markers.
- FS: all four slides carry ILLUSTRATIVE comments — keep them as comments.
- Utilities: the lead 27% restoration slide carries the VISIBLE caption per block 14's worked example ("Energy distribution operator · PLAN, GOVERN and SCALE engagement · anonymised, illustrative pending a confirmed metric."). Keep it visible.
- Government (41%) and Manufacturing (14%): vetted anonymised figures (confirmed 2026-06-07) — carry their "Anonymised." captions as-is, no Illustrative flag.

**5.5 Our work — the case** (alternating colour). Eyebrow `OUR WORK`, headline `Proven in practice.`, then the source's single anonymised case per exploration block **06** (de-boxed editorial): left meta column = italic sector descriptor + big navy stat + caption (keep the FS case's ILLUSTRATIVE comment); right = verb-first h3 + Problem / Approach / Outcomes hanging-label blocks + `View our work ›` link to `/our-work/`. No dark box, no pillar badges.

**5.6 Where to start** (alternating colour). Eyebrow `WHERE TO START`, headline from the source ("Most financial services work begins with PLAN." etc.), section note. Then:
- **Static hand-drawn station pathway** (adapt exploration block **08b** styling, no JS): the single off-straight `.hd-f2` line with six stations at the home coordinates. Responsive locks from EQT-253 R2 apply: the SVG scales to its container at every viewport (no clipping; below ~420px an intentional padded horizontal scroll is the only fallback), and the next-step columns stack at ≤860px. The sector's RECOMMENDED stations get the terracotta ring + terracotta core and navy labels; all other station labels muted `#7A8591`. No "YOU ARE HERE" callout (that is the service-page variant). Each station links to its service page `/services/<pillar>/`. Recommended stations per sector: FS = PLAN, GOVERN · Government = PLAN, SOLVE, GOVERN · Utilities = PLAN, GOVERN, SCALE · Manufacturing = PLAN, SOLVE, SCALE.
- **Next-step columns** (block **09**) below it: the source's two context cards become two open columns on top hairlines, each = pillar `<Icon>` ~50px + dotted kicker + locked service name + the source's one-line summary + `Explore <PILLAR> ›` chevron link. (FS/Gov/Utilities = PLAN + GOVERN; Manufacturing = PLAN + SOLVE.) NOTE: do NOT apply the services pages' current-vs-next asymmetry (EQT-253 R1 item 5b) here — on an industry page BOTH columns are recommended entry points, equal weight, both linked.

**5.7 Closing CTA** (LIGHT, block **22** — the v5x dark cta-panel band is retired). Eyebrow `WORK WITH US` (locked 2026-06-07; `START HERE` retired site-wide as it echoes the WHERE TO START / WHY START HERE sections), the source's headline ("Put a financial services operation on a firmer footing." etc.), support line, navy `Get in touch` button to `/contact/`.

**5.8 LMI handover** — industry pages DO carry this; it is the one sanctioned LMI mention on industry pages. Structure, logo and link = the built home's handover section (block **23** / the `lmi-handover` section in `index.astro`): hairline-bounded band, eyebrow `TRAINING`, **full-colour LMI-LOGO-702 wordmark, clickable**, linking `https://leanmethods.com.au`, `Explore training at Lean Methods Institute ›` chevron link to the same URL. Heading + paragraph come from the v5x source page and carry the sector phrase ("Train your team in your own context." + "Lean Methods Institute contextualises our training to financial services operations, ..." — swap the sector phrase per page; the hub uses "complex operations"). **Never reference LMI-LOGO-701 and never link leanmethodsinstitute.com** — both are superseded; the v5x sources are wrong on both counts.

Footer is the shared `Footer.astro`, unchanged (full FRAME footer, no LMI line).

---

## 6. Industries hub

Source: `equibt_industries_prototype_v5x.html`. Section order: hero → why-sector formula → sector pathway selector → closing CTA → LMI handover. No sub-nav, NO dark moment on this page.

**6.1 Hero** (white). Copy from the source (eyebrow `INDUSTRIES`, H1 "Build improvement for the sector you operate in.", subhead). Action: `Get in touch` only. Hero art (decision locked 2026-06-07): the v5x polyhedron is retired — compose the FOUR sector icons as a calm 2x2 cluster right of the copy, each via `<Icon>` at the 110px idiom, bleeding into whitespace per the home hero. Show the cluster layout at plan-gate.

**6.2 Why sector context matters** (beige). Structure = exploration block **19** exactly: eyebrow `WHY SECTOR CONTEXT MATTERS`, headline "One method. Calibrated to your sector.", note, then the formula: three thin-lined boxes (`What stays constant / Method rigour.` × `What changes by sector / Operating context.` = `What holds / A fix that survives.`) with **navy × and = operators**, then the four-shape hairline row ("One method, four different shapes." — Bank / Government agency / Telco / Production line). Keep the source's takeaway line as plain body prose.

**6.3 Sector pathway selector** (white). The hub's signature interaction — rule-17 selector semantics applied to sectors (same interaction model as the home pathway: hover acts as select AND persists, click/keyboard also select, default = Financial Services). Eyebrow `SECTORS`, headline "Choose the pathway for your operating context.", note from the source. Three connected pieces:
1. **Four sector rows** (block **07** treatment): hairline editorial rows on one left axis, each = sector `<Icon>` + h3 + terracotta-free hook line + support line (copy verbatim from the source's sector cards). Active row marked by a terracotta rule/dot, no fill, no box, no six-colour anything.
2. **Shared panel**: `Common challenges` (the selected sector's five challenges as a hairline list) + `Where to start` (the selected sector's pathway text + `Explore <Sector> ›` chevron link to its page). All four sectors' data comes verbatim from the source's `pathwayContent` JS object (challenges / text / label per sector — update the links to the v6x URLs in section 1).
3. **The station line** (de-coloured): the same hand-drawn six-station pathway as 5.6, re-marked on sector selection — the selected sector's recommended stations (same mapping as 5.6) get the terracotta ring + navy labels, the rest muted. Stations link to `/services/<pillar>/`. The v5x six-colour station pills are RETIRED.

**6.4 Closing CTA** (LIGHT, block 22, eyebrow `WORK WITH US`): "Put a complex operation on a firmer footing." + source support line + `Get in touch`.

**6.5 LMI handover**: as 5.8, hub phrasing ("complex operations").

---

## 7. Challenge glyphs — CONDITIONAL source + per-page assignment

The six challenge columns per sector page (5.2) each carry a small glyph. These come from the shared placeholder glyph set (navy `#26245C` single-weight 2.8, round caps, one terracotta `#C15F3C` accent, 64 viewBox) that EQT-253 is also landing under `src/components/icons/glyphs/`.

**At branch time, check whether `src/components/icons/glyphs/` exists on main:**
- **If it exists (EQT-253 merged):** import the existing glyph components. Create a new component ONLY for a name that is missing, from the markup below. Never edit an existing file in that folder.
- **If it does not exist (EQT-253 not yet merged):** create the components you need from the markup below, one `.astro` per glyph, same pattern as the icon components (the SVG verbatim, sized by the wrapper). If a later rebase onto main hits an add/add conflict on any glyph file, **take main's version** and re-check your imports still resolve.

These are PLACEHOLDER artwork (Herman redraws in Affinity later, EQT-274, content-only swap). Do NOT ship the v5x geometric challenge icons and do NOT draw new glyphs: only the set below.

### Suggested assignment (confirm the final mapping at plan-gate; reuse across pages is expected)

| Page | Challenge → glyph |
|---|---|
| FS | Documentation burden → `doc-report` · Approval hierarchy → `network` · Risk appetite → `assure` · AI-assisted decisions → `automation` · High-volume handoffs → `transfer` · Customer impact → `dialogue` |
| Government | Investigation and assessment backlogs → `evidence` · Cycle times under public and ministerial scrutiny → `gauge` · Process change constrained by enterprise agreements → `charter` · Legacy systems that cannot be replaced quickly → `future-state` · AI adoption pressure without a governance path → `automation` · Reporting burden that crowds out frontline work → `doc-report` |
| Utilities | Processes drifting off standard → `gauge` · Reliability and SLA pressure → `assure` · Regulatory reporting carried manually → `doc-report` · Field and back-office handoffs → `transfer` · AI and automation without governance → `automation` · Improvement that fades → `loop` |
| Manufacturing | Cycle time and throughput below capacity → `gauge` · Quality variation and rework → `root-cause` · Changeover and downtime losses → `standardise` · Supplier variability → `network` · Capability that does not outlast the consultant → `capability` · AI without floor-level governance → `automation` |

(15 distinct names used: `doc-report`, `network`, `assure`, `automation`, `transfer`, `dialogue`, `evidence`, `gauge`, `charter`, `future-state`, `loop`, `root-cause`, `standardise`, `capability`, plus `roadmap` unused — drop it unless your plan-gate mapping needs it.)

### Glyph SVG markup (identical to the EQT-253 brief set — keep it byte-faithful)

`doc-report`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 10 H43 Q46 10 46 13 V51 Q46 54 43 54 H21 Q18 54 18 51 V13 Q18 10 21 10 Z"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M25 22 H39"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M25 30 H39"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M25 38 H33"/></svg>
```

`network`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" cx="16" cy="20" r="5.5"/><circle fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" cx="48" cy="16" r="5.5"/><circle fill="#C15F3C" stroke="none" cx="36" cy="46" r="5.8"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M19 25 L33 41"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M45.5 21 L38.5 40.5"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21.5 19.3 L42.5 16.7"/></svg>
```

`assure`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M32 8 Q25 12 16 13 Q15.5 32 20 41 Q25 50 32 55 Q39 50 44 41 Q48.5 32 48 13 Q39 12 32 8 Z"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M25 31 L30 38 L40 24"/></svg>
```

`automation`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M44.35 33.96 L49.28 34.74 A17.5 17.5 0 0 0 49.28 29.26 L44.35 30.04 A12.5 12.5 0 0 0 42.11 24.65 L46.16 21.71 A17.5 17.5 0 0 0 42.29 17.84 L39.35 21.89 A12.5 12.5 0 0 0 33.96 19.65 L34.74 14.72 A17.5 17.5 0 0 0 29.26 14.72 L30.04 19.65 A12.5 12.5 0 0 0 24.65 21.89 L21.71 17.84 A17.5 17.5 0 0 0 17.84 21.71 L21.89 24.65 A12.5 12.5 0 0 0 19.65 30.04 L14.72 29.26 A17.5 17.5 0 0 0 14.72 34.74 L19.65 33.96 A12.5 12.5 0 0 0 21.89 39.35 L17.84 42.29 A17.5 17.5 0 0 0 21.71 46.16 L24.65 42.11 A12.5 12.5 0 0 0 30.04 44.35 L29.26 49.28 A17.5 17.5 0 0 0 34.74 49.28 L33.96 44.35 A12.5 12.5 0 0 0 39.35 42.11 L42.29 46.16 A17.5 17.5 0 0 0 46.16 42.29 L42.11 39.35 A12.5 12.5 0 0 0 44.35 33.96 Z"/><circle fill="#C15F3C" stroke="none" cx="32" cy="32" r="3.6"/></svg>
```

`transfer`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 24 Q14 10 32 10 Q44 10 50 19"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M50 11 V19 H42"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M50 40 Q50 54 32 54 Q20 54 14 45"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 53 V45 H22"/></svg>
```

`dialogue`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M15 11 H40 Q44 11 44 15 V27 Q44 31 40 31 H24 L16 38 V31 Q12 31 12 27 V14 Q12 11 15 11 Z"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M37 39 H50 Q52 39 52 41 V48 Q52 50 50 50 H45 L41 54 V50 H37 Q35 50 35 48 V41 Q35 39 37 39 Z"/></svg>
```

`evidence`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" cx="27" cy="27" r="15"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M38 38 L52 52"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 33 V27"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M27 33 V20"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M33 33 V24"/></svg>
```

`gauge`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M11 45 A21 21 0 0 1 53 45"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M11 45 L15 44"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M53 45 L49 44"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M32 45 L44 27"/><circle fill="#26245C" stroke="none" cx="32" cy="45" r="3.2"/></svg>
```

`charter`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M17 8 H41 L48 15 V53 Q48 56 45 56 H17 Q14 56 14 53 V11 Q14 8 17 8 Z"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M41 8 V15 H48"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 24 H41"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 31 H41"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 38 H34"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M21 47 Q25 43 28 47 Q31 51 35 46 Q37 44 41 45"/></svg>
```

`future-state`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="10" y="10" width="20" height="20" rx="2" stroke-dasharray="4.5 5"/><rect fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="34" y="34" width="20" height="20" rx="2"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M24 24 L36 36"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M36 29 V36 H29"/></svg>
```

`loop`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 26 A18 18 0 0 1 47 19"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M47 10.5 V19 H38.5"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M50 38 A18 18 0 0 1 17 45"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M17 53.5 V45 H25.5"/></svg>
```

`root-cause`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 16 H27"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M37 16 H50"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 26 H27"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M37 26 H50"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M14 36 H27"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M37 36 H50"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M32 8 V45"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M26.5 39.5 L32 45 L37.5 39.5"/><circle fill="#C15F3C" stroke="none" cx="32" cy="54" r="3.6"/></svg>
```

`standardise`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="11" y="11" width="17" height="17" rx="2"/><rect fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="36" y="11" width="17" height="17" rx="2"/><rect fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="11" y="36" width="17" height="17" rx="2"/><rect fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" x="36" y="36" width="17" height="17" rx="2"/></svg>
```

`capability`
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" cx="25" cy="19" r="8"/><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M11 50 Q11 35 25 35 Q39 35 39 50"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M48 26 V38"/><path fill="none" stroke="#C15F3C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M42 32 H54"/></svg>
```

`roadmap` (only if your plan-gate mapping needs it)
```svg
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#26245C" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" d="M10 52 C22 52 20 32 32 32 C44 32 42 12 54 12"/><circle fill="#26245C" stroke="none" cx="10" cy="52" r="3"/><circle fill="#26245C" stroke="none" cx="32" cy="32" r="3"/><circle fill="#C15F3C" stroke="none" cx="54" cy="12" r="3.6"/></svg>
```

---

## 8. Acceptance checklist (the reviewer will eyeball, not trust self-checks)

- [ ] Five pages at the exact URLs in section 1; the four sector pages structurally identical, only copy/icon/glyph/links/stations vary.
- [ ] `npm run build` green. No references to non-existent assets.
- [ ] No edits to `index.astro`, `home.css`, `base.css`, `tokens.css`, `src/components/icons/` root, `src/pages/services/**`, or `src/styles/services.css`. Glyphs additive-only under `src/components/icons/glyphs/`; no existing glyph file edited. (Clean firewall = zero merge conflict with EQT-253/272.)
- [ ] Sector + pillar icons via `<Icon>` only; no inline sector/pillar SVG anywhere.
- [ ] Sticky sub-nav on the four sector pages (white, hairline bottom, terracotta active marker, scroll-spy works); NOT on the hub.
- [ ] NO hero metric band; all figures live in the proof carousel as evidence slides.
- [ ] One dark moment per sector page = the contained proof panel; flat dark field, no gradient, not full-bleed. Hub has NO dark moment. Closing CTAs are light.
- [ ] No six-colour pillar pills or coloured station pills anywhere. No 01/02/03 numbering. No wash section fills.
- [ ] Service selector matches block 13: hairline list, terracotta active, panel rewrites title/copy/challenges/deliverables from the source data, default FRAME, keyboard accessible.
- [ ] Hub selector: hover-selects-and-persists, default Financial Services, panel + station line re-mark on selection, sector links go to the v6x URLs.
- [ ] Proof carousel matches block 14: evidence slides (number tied to action), controls bottom-right, terracotta active dot; carousel JS works. ILLUSTRATIVE comments preserved exactly; Utilities 27% keeps its visible illustrative caption; Gov 41% + Mfg 14% carry no flag (vetted).
- [ ] LMI handover present on all five pages: LMI-LOGO-702 full colour, links to leanmethods.com.au, sector phrase swapped per page. No LMI-LOGO-701, no leanmethodsinstitute.com anywhere.
- [ ] No named persona, firm "we" voice, verb-first headlines, no em/en dashes, no dates/years, no public prices, no client names, no visible DMAICO.
- [ ] Type sizes match the merged home (Lora 22px body etc.). No scroll-reveal system.

When done: open a PR, post the PR URL as a comment on Linear EQT-254, and list the changed files + confirm the build. Do NOT mark the issue Done (Herman/Cowork sets Done after merge).
