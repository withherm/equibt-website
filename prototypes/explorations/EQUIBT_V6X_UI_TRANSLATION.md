# EQUIBT v6x — UI Component Translation

How every v5x UI pattern translates into the v6x direction (Anthropic editorial air + hand-drawn line-art signature). Reference for the Codex brief. Home page first, then the rest of the site inherits.

_SYNCED TO THE MERGED HOME (EQT-245/250/251) before the EQT-253 page conversions. Where this doc and the built home disagree, the home (`src/pages/index.astro`, `src/styles/home.css`, `src/styles/base.css`, `src/styles/tokens.css`) and `prototypes/DESIGN_LEARNINGS_v6x.md` are the authority. Key post-build locks now reflected here: Lora body **22px** (not 20px), the terracotta **`›` chevron link system** (not `→`), pillar/sector icons uniform **110px**, Open Sans dropped site-wide, `--link-gap:22px` standardised, eyebrow-to-title gap 14px._

## The governing principle

v5x leans on one move for everything: filled background + drop shadow + rounded box + hover lift. That is what makes the site read boxy and templated. v6x replaces that default with **open editorial layout on hairlines**. A box must be *earned*: use a real bordered or filled card only for a genuinely bounded object (one dark feature card, an image, a data record). Everything else is content on whitespace, separated by 1px hairlines.

Locked tokens carried in: Montserrat 700 headings (letter-spacing -0.012em), Lora 500 body (**22px** / 1.45, near-black `#161616`; 20px at the ≤760px breakpoint), italic Lora captions (19px, `#5A5A5A`), terracotta accent only, white `#FFFFFF` + beige `#F5F3EE` backgrounds, hand-drawn navy line-art with one terracotta accent, pillar/sector icons uniform 110px, H1 `clamp(40px,3.4vw,46px)`, section padding 130px/56px, `--max:1180px` / `--wide:1320px`, `--link-gap:22px`.

## Global rules

| Element | v5x now | v6x treatment |
|---|---|---|
| Section backgrounds | navy-wash, light-grey, highlight-wash, off-white all in rotation | White and beige only, alternating. No other section fills. |
| Dark sections | full-bleed navy / dark-slate bands (proof, CTA) | Max ONE dark moment per page, as a contained rounded card (flagship 24px / CTA equation ~20px radius) sitting on a light section. Never a full-bleed band. (One approved exception: the home flagship's binary expand-on-scroll to full-bleed, see DESIGN_LEARNINGS_v6x.) Dark field is FLAT, no gradient; tone varies per page TYPE, not per page (R1 2026-06-07): home near-black `#101317`, service pages dark-slate `#2C3E50`, industry pages ink-navy. Siblings within a page type share one tone. |
| Shadows | `card-shadow` + `card-shadow-hover` everywhere | Removed. Separation by 1px hairline `rgba(38,36,92,0.13)`. |
| Corner radius | 8px on every card | Only on earned boxes: 22px on the dark card, 6-12px on images. Open content has no radius. |
| Hover lift | translateY(-6px) on all cards | Drop. Hover = the chevron-link behaviour only (underline draws left-to-right under the text, then the `›` nudges right). |
| Eyebrows | terracotta text + 2px rule, ALL CAPS | Terracotta dot + ALL CAPS, dot style site-wide: `· FRAME · DEFINE`. |

## Pillar identity (the big colour decision)

v5x runs a six-colour pillar-pill system (frame magenta, plan navy, solve teal, evolve green, govern brown, scale purple) as `pillar-badge` / `pillar-tag`, used 112 + 98 times. Six accent colours fights the "lighter, cleaner, less colour" direction hard.

**Recommendation: retire the six-colour pills.** Identify each pillar by its hand-drawn icon + a monochrome dotted eyebrow (`FRAME · DEFINE`), terracotta dot only. Keep colour coding out of the public marketing pages entirely. If a single accent per pillar is ever needed (e.g. a service-page header), use one muted navy tint, not six hues. This is a real change to flag for sign-off, not a silent edit.

## Component-by-component

| Component (class) | v5x now | v6x treatment |
|---|---|---|
| Service cards (`service-card`) | 6 white boxes, shadow, 7-col span grid | Editorial rows on hairlines, hand-drawn icon on one left axis, no box (done in exploration). |
| Examine / context / challenge cards | navy-wash or white boxes, shadow, 3-up grid | De-box. Open 2-3 column editorial blocks on hairlines, hand-drawn icon, generous gap. |
| Deliverable carousel (`deliverables-carousel`) | 88%-width white slides, shadowed white circle arrows, terracotta dots | Keep horizontal scroll-snap but de-weight: no card shadow, hairline arrow buttons (no heavy shadow), image keeps a small radius, copy is open. Terracotta dot/active indicator stays. R3 (2026-06-07): a clickable 4-item deliverables INDEX sits between the intro and the carousel — each name is a button that jumps to its slide, active item tracks the carousel (terracotta), keyboard accessible. Readers see all four deliverables at once. |
| Stat / proof blocks (`stat-num`, `proof-stat`) | big number, label, sector | **Tie every number to the action that produced it** (see The Work below). A number with no cause reads as a claim. |
| The Work strip | 3 before/after numbers in a dark box | Light evidence rows: verb-first action + the metric move + anonymised sector. No box. Proof, not assertion. |
| Case cards (`case-card`, Our Work) | 2-col box, shadow, coloured pillar label | SHIPPED EQT-255 (supersedes this row): de-boxed **compact two-column proof grid** on hairlines, NOT tall open P/A/O rows. Each case = italic-Lora sector + big navy metric + verb-first H3 + one context line (the Problem line); full P/A/O kept in data for detail pages. Pillar group = hand-drawn pillar icon + monochrome dotted eyebrow. No disclosure toggle, no `Read the case`, no coloured pillar label. The flagship dark moment lives on the case STUDY page (charcoal `#22211F`), not the index. |
| Industry cards (`industry-card`) | 452px white boxes, terracotta top bar, shadow | Drop the terracotta top bar and shadow. Editorial rows or hairline cards, hand-drawn sector motif, more air. |
| Sector cards (`sector-card`) | boxed, icon, problem text | Open blocks on hairlines, hand-drawn icon. |
| Belief / insight / related cards | boxed, shadow | De-box, hairline editorial. Related links become a simple hairline list, not a card grid. |
| Phase timeline (`phase-timeline`, `phase-card`) | boxed phase cards in a row | Hairline vertical timeline with hand-drawn connector line; phases as open steps, not boxes. |
| Station / subway pathway (`station-map`) | geometric SVG subway map | Redraw as a hand-drawn single-line pathway in the new idiom (matches the hero illustration language). Two variants: HOME = interactive selector (hover-selects-and-persists, proximity effect, label above the station inside the container — built in `index.astro`); SERVICE PAGES = static with a terracotta YOU ARE HERE on the current station, current + next labels navy, downstream labels muted `#7A8591`; R1 (2026-06-07) the NEXT station is marked on the line — terracotta segment current→next, filled navy core in the next ring, small terracotta NEXT label (no pointer); SCALE as terminus carries no next marking. The pathway and the next-step columns form ONE merged WHERE IT LEADS section (no divider, no second eyebrow); the columns carry current-vs-next asymmetry (block 09): YOU ARE HERE grey label + muted unlinked current column, THE NEXT STEP terracotta label + the only Explore link, terracotta `›` in the gutter. Industry pages keep both columns equal (entry points, not current/next). R2 responsive: columns stack at ≤860px (current above next, gutter `›` hidden when stacked); the pathway SVG scales to its container at every viewport, no clipping (below ~420px an intentional padded horizontal scroll is the only fallback). |
| Filter chips (`filter-chip`, Our Work) | filled chips | Hairline pills, terracotta fill on active (same language as carousel dot). **AS-BUILT (post-EQT-283, 2026-06-10):** Our Work index has a working chip filter — ALL chip + one per pillar (FRAME/PLAN/SOLVE/EVOLVE/GOVERN/SCALE). Chips live in `.ow-inner` inside `.ow-hero` (same pattern as Insights). Each pillar `<section class="ow-section">` carries `data-pillar`; `initialiseOwFilter()` toggles `.is-hidden` on the whole section group. CTA section has no `data-pillar` — always visible. All styles prefixed `.ow-*` in `our-work.css`; no cross-import from `insights.css`. Insights index uses identical pattern with `.ins-*` prefix. Container alignment fix: `.ow-hero .ow-inner{max-width:var(--wide);margin-top:24px;}` mirrors the Insights fix. |
| Pillar badges / tags | 6-colour pills | Retire (see above). |
| Buttons | navy solid primary, outline secondary | Keep navy solid primary (hover = dark-slate `#2C3E50`) + the terracotta `›` chevron text link (glyph bigger/bolder than the link text; underline left-to-right under text only, then chevron nudge). `→` is retired site-wide. Drop the bordered outline button for the lighter text link. |

**Three link/action types, kept distinct (do not mix):** (1) **standalone CTA** = terracotta `›` chevron link, underline draws on hover then chevron nudges, used at the end of a section; (2) **inline prose link** = terracotta always-on underline, no chevron, used mid-sentence (block 33); (3) **download** = file-type + size meta with a down-arrow, ungated direct file (block 34). The navy solid button is reserved for closing WORK WITH US CTAs and the nav bar "Get in touch" only — **never in a hero section** (EQT-285, 2026-06-10: hero primary CTAs removed site-wide; the persistent nav CTA makes hero buttons redundant and hard-sell).
| Hero (service / industry) | grid hero + low-poly gem | Editorial asymmetric hero + hand-drawn motif + air (home pattern applied). |
| CTA panel | full dark-slate band | Light by default. If the dark feature card is already used on the page, CTA stays light; only one dark per page. |
| Footer | pure white (locked) | Unchanged. |

## The Work — worked example (claim → evidence)

Problem: `18% to 24%` in a bold dark box is a claim with no cause, so it reads as marketing, not proof.

Fix: lead with the verb-first action, then the metric move as the consequence, then the anonymised descriptor. Same three data points, now evidence:

- Redesigned customer retention routing. Save rate moved 18% to 24%. Energy retailer.
- Standardised investigation across five teams. Cycle time fell 52 to 31 days. Utilities ombudsman.
- Rebuilt quality checks at the source. Rework dropped 28% to 9%. Government department.

Treatment: light evidence rows on hairlines (no dark box), terracotta metric inline, Montserrat action line, Lora sector caption. Reserve the single dark card for one flagship Our Work case that carries a real Problem / Approach / Outcome story.

## Industry-page controls (audited 2026-06-04, the complex ones)

| Component | v5x now | v6x treatment |
|---|---|---|
| Interactive service selector (`data-service-card` + `#service-panel`) | 6 pillar cards (colour-coded) act as a master-detail switcher rewriting a panel: title, copy, sector challenges, deliverables | Keep the interaction. Selector list as hairline rows on one left axis, hand-drawn pillar icon, active item marked by terracotta dot/rule (not a colour fill). Detail panel is open content on white, challenges + deliverables as hairline chip lists. No boxes, no six-colour coding. |
| Proof carousel (`proof-band`, `proof-slide`) | second carousel: stat + pillar-tagged proof slides, shadowed arrows | Same de-weighted scroll-snap as deliverables: hairline controls bottom-right, terracotta dot. Each slide is an evidence row (number tied to action), not a bare stat. |
| Sticky sub-nav | NOT shipped in v5x (this audit row described a component that was never built) | NEW v6x component on the four sector pages (decision 2026-06-07, EQT-254): slim bar pinned under the main nav — white, 1px hairline bottom, Montserrat uppercase links, terracotta marker on the active section, IntersectionObserver scroll-spy. Anchors: Challenges · How we help · Results · Our work · Where to start. Sector pages only, NOT the hub. Worked example: exploration v6 block 37. |
| Our Work accordion (`<details>`) | native expand/collapse for extra cases | Keep. Hairline rows, Montserrat summary, terracotta + on hover; no filled panel. |
| Contact form | standard fields | Hairline inputs (1px border, no fill), Montserrat labels, navy solid submit, generous spacing. |

## Case study page (SHIPPED EQT-255 2026-06-08 — this table updated to as-built)

Page order: hero → WHERE THIS FITS (trainline) → THE WORK (journey) → flagship dark moment → RELATED → WORK WITH US CTA → LMI handover.

| Part | v5x now | v6x treatment (as built) |
|---|---|---|
| One-page summary (hero `stat-band`) | eyebrow "SECTOR · PILLAR" coloured, verb-first H1, subhead, 3 boxed stat cells, low-poly gem motif | Eyebrow dotted monochrome SECTOR only (e.g. "FINANCIAL SERVICES"), verb-first H1 (kept). Hero TOP ROW = copy left + pillar `<Icon>` motif right; the hairline three-metric band runs FULL WIDTH BELOW the row (navy figures, italic-Lora captions, no boxes), motif above the boxes; actions under the band. Unified ≤960px collapse for top row + band + CTA art together. |
| Body blocks (`The problem / What we did / The result`) | stacked prose under plain h2 | THE WORK = ONE connected journey on a single continuous vertical spine (single background), each step a hairline node with a line-art glyph (RootCause / Loop / Standardise) + a terracotta connector caption ("What we did about it ↓"). Not three separate alternating sections. |
| Pathway / context | n/a (gem only) | WHERE THIS FITS = the DMAICO trainline placed directly UNDER the hero for context; heading is a per-case approach summary (`pathwaySummary`); the case's pillar station highlighted; marker reads `THIS ENGAGEMENT` (NOT `YOU ARE HERE`, which is service-page-only). |
| Flagship | (single dark card concept) | Contained flat charcoal `#22211F` outcome pull-quote, one per page. |
| Related | coloured pillar tags | Two hairline columns side by side (Service pillar + Industry), kind as eyebrow above each title, chevron links. Heading "Keep exploring." |
| LMI handover | n/a on Our Work in brief | ADDED under the CTA, industry-relevant per case (Herman override; see block 23). |

## Full coverage pass (2026-06-07) — every v5x component

A class-level scan of all v5x prototypes confirmed the component inventory; every pattern below now has a worked block in `EQUIBT_V6X_DIRECTION_EXPLORATION_v6.html` (blocks 00-37; 32 is unused, numbering jumps 31 → 33). Patterns not already covered by the tables above:

| Component (v5x classes) | v5x now | v6x treatment | Block |
|---|---|---|---|
| Site nav (`site-nav`) | built | BUILT in `src/components/Nav.astro`: sticky, hairline bottom, Montserrat 15/600 near-black links, bold down-chevron on submenu items, navy nav-CTA with dark-slate hover. Consume the component. **EQT-283 (2026-06-10): Services and Industries have dropdowns.** Wrapper: `<div class="nav-item has-dropdown" data-dropdown>` → `.nav-item-row` (flex: `<a class="nav-link">` + `<button class="nav-chevron-btn">`) → `<ul class="nav-dropdown" role="menu">`. Services items: `.nav-dropdown-eyebrow` (terracotta, 10px/700/letter-spacing 0.14em, format `PILLAR · PHASE` e.g. `PLAN · MEASURE`) + `.nav-dropdown-label`. Industries items: label only. Desktop show/hide = CSS `:hover` ONLY — not JS mouseleave. Panel: white, 1px hairline `rgba(38,36,92,0.13)`, 6px radius, `top:100%`, `padding:10px 0 8px`, `z-index:200`, soft shadow. Item hover = `color:var(--navy)` + `background:rgba(38,36,92,0.05)` (full-row grey band). Mobile = `.is-open` accordion via chevron button click; JS handles keyboard focusin/focusout + Esc. Nav order: Services, Industries, Our Work, Insights, About, Get in touch. **Nav link hover = terracotta (post-EQT-283, 2026-06-10).** `.nav-link:hover,.nav-link:focus{color:var(--terracotta);}` — was navy; changed to match the site's hover language. Chevron also transitions to terracotta via `.nav-item:hover .nav-chevron{color:var(--terracotta);}`. **HARD RULE — CSS `:hover` for dropdowns, never JS mouseleave on desktop.** `position:absolute` removes the panel from `.nav-item`'s layout bounding box, so JS `mouseleave` fires the instant the cursor enters any gap between the nav bar and the panel top. CSS `:hover` propagates via DOM containment and is unaffected by absolute positioning. Always use `top:100%` (no external gap) + `padding-top` inside the panel; `top:calc(100% + Npx)` will recreate the dead zone. | 00 |
| Sector subnav (`sector-subnav`) | n/a | BUILT on industry sector pages: `position:sticky; top:var(--nav-h,81px); z-index:20` — pins just below the main nav once the hero scrolls past. **Visibility fix (EQT-285, 2026-06-10):** without intervention, the subnav is visible at its natural document position (~357px viewport Y at scrollY=500) before it reaches the sticky threshold (scrollY=695), giving a floating-bar-in-the-middle-of-screen appearance. Fix: JS `initialiseSubnavVisibility()` uses `IntersectionObserver` on `.industry-hero` with `rootMargin: '-81px 0px 0px 0px'`; while the hero is still intersecting the viewport → `.subnav-hidden` class applied (`opacity:0; pointer-events:none`); when hero exits → class removed and subnav is already pinned at top. The hero exit and the sticky activation happen at identical scrollY, so the subnav appears only when it is actually sticking. No-JS fallback: class is applied only by JS so the subnav remains visible in its natural position if JS is absent. | 00 |
| Page hero (`hero`, `hero-panel`, `hero-geometry`) | grid hero + low-poly gem; industry heroes carry boxed stat cells (`stat-num`) | Editorial asymmetric hero: top-left copy, motif right bleeding into whitespace, optional secondary chevron text link only (e.g. "View capability statement", "View all industries"). Gem RETIRED. **HARD RULE (EQT-285, 2026-06-10): NO primary CTA button in any hero section.** The nav bar carries a persistent "Get in touch" — a duplicate in the hero is repetitive and reads as hard-sell. Secondary text links are acceptable where they add wayfinding value; omit if no natural secondary destination exists. R1/R2/R4 (2026-06-07): the sub-page hero motif renders at HOME-HERO scale — size the SVG element DIRECTLY at `min(540px,48vw)`, exactly as home does — WITH the R4 fine-line treatment: a hero-scoped stroke override thins the lines so visual weight matches the home hero (blown-up icon strokes read as fat marker, rejected); terracotta keeps its extra-weight ratio; the override never leaks beyond the hero wrapper. Per-pillar/sector hero SCENES are queued as Herman-drawn artwork (EQT-275, content-only swap at the marked seam). The hairline metric band stays available for pages with genuine hero stats (case study), but the EQT-254 industry pages SKIP it: figures live in the proof carousel. | 20 |
| Statement rows (`difference-point`) | filled difference cards | BUILT on home: hanging-label rows on hairlines (navy Montserrat lead left, Lora right). | 21 |
| Light closing CTA (`cta-panel`, on all pages) | full dark-slate band on every page | LIGHT closing CTA on the alternating section colour: eyebrow, headline, prose, navy button. The dark moment belongs to the flagship or the CTA equation, never the closing CTA. | 22 |
| LMI handover (`lmi-handover`, `training-handover`) | navy band with white LMI mark | BUILT on home: hairline-bounded band, full-colour clickable LMI-LOGO-702 (701 superseded), links to leanmethods.com.au (interim AU). Home + industry pages + **Our Work case pages** (EQT-255, industry-relevant per case), never service pages and never the Our Work index. | 23 |
| Client logo wall (v6x addition, replaces Credentials page) | n/a | BUILT on home: static monochrome grid, 5 across, one hairline above and below, coded filenames logo-01..20, empty alt, client key vault-only. Never a marquee. | 24 |
| Our Work accordion (`case-disclosure`) + pillar section headers (`pillar-section-header`) | filled disclosure panels, coloured pillar groupings | Native `<details>` on hairline rows, Montserrat summary, terracotta +/− marker, no filled panel. Pillar groupings become dotted eyebrow + title (no colour coding). | 25 |
| FAQ (`faq-item`, resources) | boxed FAQ cards | Same accordion language as Our Work: hairline `<details>` rows. | 25 |
| Contact form (`prototype-form`) + facts (`fact-card`) | filled fields + fact cards | Hairline inputs (1px border, no fill, terracotta focus ring), Montserrat uppercase labels, navy solid submit. Facts become hanging-label rows. | 26 |
| Blog index list (`insight-card`) | shadowed cards | **AS-BUILT EQT-258 (override of "de-box to rows"):** responsive 3-up card grid, thin hairline boxes (1px, 16px radius, NO shadow), hover border-darken + 3px lift; dotted kicker + H3 + summary + italic read-time + Read chevron. Working client-side pillar filter (hairline pills, terracotta active, no six-colour; full filter/colour rework stays EQT-260). **Post-EQT-283 polishes (2026-06-10):** (1) Filter chips moved into `.ins-hero` (after `.ins-hero-inner`, wrapped in `.ins-inner`); hero padding-bottom 104px → 52px; list padding-top 48px → 32px; `margin-bottom:44px` removed from `.ins-filter` (last element in hero, was stacking onto list padding). Net result: ~80px dead space eliminated. (2) `border-bottom:1px solid var(--hairline)` added to `.ins-hero` — separates hero from card list. (3) Filter bug fixed: JS was querying `.ins-row` (does not exist); corrected to `.ins-card[data-pillar]`. Chips now filter correctly. (4) Chip alignment: `.ins-hero .ins-inner{max-width:var(--wide);margin-top:24px;}` — `.ins-hero-inner` uses `--wide` (1320px) but the default `.ins-inner` was `--max` (1180px), causing a shifted left edge at wide viewports. Override aligns the chip row to the prose. | 28 |
| Blog skim anchors (`tldr`, `tryThis`) | navy-wash boxes | **AS-BUILT EQT-258:** TL;DR = beige `#F5F3EE` contained box (skim). "One thing to try" = navy-wash `#E8ECF5` band bleeding off the LEFT viewport edge. Terracotta Montserrat label on both. (Deliberate wash exception, scoped to blog anchors.) | 27 |
| AEO answer / hook / key-insight (`aeo`, `lede`, body descriptor) | wash box / styled | **AS-BUILT EQT-258:** Hook (`lede`) = quiet prose, story-driven scene. AEO = **bold** near-black, quiet, no box (deviation from `BLOG_WRITING_STANDARDS_v1` italic). Key-insight descriptor line = terracotta-wash `#F4E8E1` band bleeding off the LEFT edge + interim line-art light-bulb marker (navy + terracotta filament). Closing line cut as filler. | note |
| Related-service box (`related`) | filled box | **AS-BUILT EQT-258:** de-boxed; related title ABOVE the DMAICO trainline (reused from CaseStudy, current pillar highlighted, marker `THIS INSIGHT`, full content width), then the chevron/headline link. | 27 |
| Resource cards (`resource-action`, resources hub) | boxed cards with pillar badges | Editorial rows on hairlines: hairline type pill, title, description, chevron action. Coming-soon = italic caption, no greyed box. | 28 |
| Problem-framing wizard (`wizard-shell`, resource landing / EQT-242) | filled wizard step cards | Open Montserrat question, hairline choice buttons (terracotta active, chip language), recommendation in a thin-lined box with chevron link. | 29 |
| We are / We're not (`compare-card`, How We Work) | two compare cards | Two open columns on top hairlines, items as hairline list rows. | 30 |
| Our Story field notes (`story-item`, About) | hook + copy list | Hanging-label rows (beliefs device). Drop "Since 2009" at conversion: no dates/years in public copy. | 31 |
| Why-EQUIBT rows (`why-body-row`, about/howwework/operators/capability) | label + copy rows | Same hanging-label editorial device as beliefs/statements. No separate pattern. | 18/21 |
| Site footer (`site-footer`) | built | BUILT in `src/components/Footer.astro`: pure white, full FRAME footer, NO LMI line, entity + ABN bottom strip. Consume the component. R2 (2026-06-07): at phone widths (≤760/≤460) the brand block sits full-width on top and the three link columns flow in a 2-COLUMN grid, never one long single stack (footer rules in base.css, applies site-wide). EQT-255 (site-wide): the footer content (`.footer-inner`) carries a 1px hairline TOP + 64px padding-top so it separates cleanly when the last section is white; `.site-footer` top padding cut to suit. | 36 |
| Breadcrumb (`breadcrumb`, resource landing) | text trail | Keep minimal: Montserrat caption-grey trail with `›` separators. No chips. | note |
| Scroll-reveal system (`reveal`, `reveal-d1..d3`, 312 uses site-wide) | fade/slide-in on scroll | The v5x multi-element system stays RETIRED — do not port it. AMENDED R1 (2026-06-07): one minimal SECTION reveal reinstated as the v6x idiom — fade + ~8px rise, 350ms ease-out, fires once per section, no stagger, `prefers-reduced-motion: reduce` disables it. Lives in the page stylesheet until promoted to base.css (home retrofit = follow-up issue). | note |
| Page scaffolding (`page-shell`, `wide-inner`) | wrapper divs | v6x uses `.section`/`.section-inner` with `--max`/`--wide` tokens (see base.css/home.css). | note |
| Outline button (`btn-outline`) / secondary (`btn-secondary`) | bordered outline | RETIRED for the terracotta chevron text link. | 12 |
| Persona narrative ("Michael", all six service pages) | named buyer persona | Rewrite to second-person/role framing: firm "we", no named individual (EQT-253 decision). | note |
| **Inline prose link** (`<a>` inside `<p>`, mailto, external) | ad-hoc, unstyled | NEW lock: terracotta text + always-on 1px underline (3px offset), no chevron. External opens new tab `rel="noopener"` with a small outbound `↗` mark; internal + mailto/tel drop the mark. The chevron `›` link is RESERVED for standalone CTAs and never used mid-sentence. Hover = terracotta-dark. | 33 |
| **Downloadable document** (`Download` card-links, resources/home/blog) | bare "Download" card-link | NEW lock: UNGATED (no form; all resources ungated), direct file via the `download` attribute. Hairline row, doc glyph, title + one-line use, DOWNLOAD action with file-type + size meta (e.g. "PDF · 280 KB"). Distinct from a page/tool link (block 28). Covers the capability statement PDF (dropped pending v6x rework) and any template. | 34 |
| **Legal / utility page** (Privacy, Terms; only "Privacy" client labels exist today) | none built | NEW low-chrome archetype: shared nav + footer, NO marketing components, NO dark moment, NO CTA equation. Simple hero (LEGAL eyebrow + H1 + last-updated), prose with Montserrat sub-headings on hairlines, inline links per block 33. **FLAG (Herman decision): the "Last updated" date is a proposed exception to the no-dates-in-public-copy hard rule, since privacy/terms legally need an effective date.** Footer carries Privacy · Terms in a legal link row (grey Montserrat label style). NB: the built `Footer.astro` + the legal pages do not exist yet — needs its own Linear issue (suggest folding into EQT-262 go-live). | 35 / 36 |

## More patterns (service / about / industry pages)

| Component | v5x now | v6x treatment |
|---|---|---|
| CTA equation (`cta-equation`) | heavy dark band, filled meta cells: timeline + how we work = deliverables | Contained dark card (rounded), thin hairline boxes, terracotta + and = operators, white "Get in touch". The A+B=C logic kept. R1 (2026-06-07): eyebrow is `WORK WITH US` (`START HERE` retired, echoed WHY START HERE); value lines Montserrat 700 ~25px white so they carry the weight; dark field dark-slate `#2C3E50` on all service pages (per-page-type tone rule). R2: `+` and `=` operators 48px/700 terracotta (matches the locked v5x equation precedent). R3: the equation NEVER orphans an operator — one five-column row at desktop, one deliberate stacked layout (box / + / box / = / box) below a single breakpoint, no intermediate wraps. |
| Side-bleed highlights (`highlight-callout`) | navy-wash / white callout blocks | Keep. Statement callouts that run off the side edge, rounded on the inner side only. Navy-wash (#E8ECF5) for one, white-with-hairline for the other. Used sparingly, asymmetric. R3 (2026-06-07) reaffirmed: the bleed is REQUIRED — anchored to the viewport edge, no radius on the bleeding side, content keeps the page's left text axis. A floating contained box is wrong. |
| Beliefs list (`belief-row`, the vertical terracotta lines) | terracotta left-rule on each item | Drop the left rule (the design-learnings ban decorative left-rule on prose, and Herman does not want it). Becomes hanging-label editorial rows on hairlines, same as the statement rows. |
| Why-sector formula (`method × context = fix`) | filled boxes + heavy sub-panel | Thin-lined white boxes, navy × and = operators, the four-shape row as hairline columns (Bank / Government / Telco / Production line). |

Retired: the **vertical terracotta left-rule** is not adopted. It conflicts with the locked "no decorative left-rule on prose" rule and Herman does not like it.

## Adopted structural devices (from Herman, 2026-06-04)

- **Contained bisection line** (2px navy, sits within the content max-width, NOT edge-to-edge) as the primary divider device. Herman prefers the contained v3 width, not full-bleed.
- **Thin-lined boxes are a core container** (1px hairline, rounded ~16px, no shadow, white or beige). Herman likes these. The thing being retired is the heavy drop-shadow filled box, not boxes themselves. Inside a box, content can still use hairline rows (e.g. The Work). "Earn the box" means avoid shadows and clutter, not avoid containers.
- **Italic Lora for captions and descriptors**, not just notes: metric captions, evidence source lines, the flagship metric label, sector result descriptors. Functional labels (eyebrows, kickers, data labels) stay Montserrat. Italic serif = the figure-caption convention, gives an editorial feel and ties to the explanatory-note style.
- **Carousel controls bottom-right** (right-handed usability), dots then arrows.
- **Hand-drawn lines stay slightly off-straight** (the station pathway wobble) for the crafted, distinct feel.
- **Client results / proof slides are fine-line boxed cards** (1px hairline, rounded, white) for readability. The three-output trio and next-step columns stay as open columns on a top hairline, not boxed (boxing them framed the icons like image borders, not wanted).
- **Eyebrow-to-title spacing ~14px**, consistent everywhere (the "WHAT WE DO" gap is the reference). Not tighter.
- **Minimise font-size variation.** Default supporting copy (including highlight sub-lines like "It is abandonment.") to plain body text (Lora 500, **22px**), rather than inventing smaller sizes. Fewer sizes reads cleaner. Italic captions (19px) are the deliberate exception. Evidence action lines are Montserrat 600 20px (the one functional-label exception, per the built home).

## EQT-253 R1 amendments (Herman review, 2026-06-07)

1. **One left axis per page.** Every section's content starts on the same left grid line; no indented sections (THE SITUATION had drifted).
2. **WHY-section headlines carry a positive frame.** The situation section owns the negative; the why-start-here headline states the payoff, verb-first (FRAME: "Solve the right problem, once.").
3. **`WORK WITH US` is the dark CTA eyebrow.** `START HERE` retired site-wide (echoed WHY START HERE / WHERE TO START). Applies to the industries light closing CTA too (EQT-254 brief).
4. **Dark tone per page TYPE:** home near-black `#101317`, services dark-slate `#2C3E50`, industries ink-navy. Never per page within a type.
5. **WHERE IT LEADS is one continuous section:** pathway flows into the next-step columns; no divider, no second eyebrow. Columns asymmetric (current muted/unlinked, next emphasised/linked, terracotta `›` gutter); pathway marks NEXT on the line itself (blocks 08b + 09).
6. **Sub-page hero motifs at home-hero scale** via the wrapper; artwork unchanged (artwork-authority swap later).
7. **Minimal section reveal reinstated** (amends static-calm): fade + 8px rise, 350ms, once, no stagger, reduced-motion respected. v5x multi-element system stays retired.

## EQT-253 R2 amendments (Herman review, 2026-06-07)

1. **CTA equation operators 48px/700 terracotta** (the locked v5x precedent; 24px read too quiet).
2. **Sub-page hero art sized on the SVG element at `min(540px,48vw)`** — home parity; wrapper-clamp sizing rejected (did not land visually).
3. **Footer mobile = 2-column link grid** at ≤760/≤460, brand full-width on top. Footer rules in base.css, site-wide (deliberate shared-component exception).
4. **WHERE IT LEADS responsive locks:** columns stack at ≤860 (current above next, gutter `›` hidden when stacked); pathway SVG scales without clipping at every viewport.

## EQT-253 R3 amendments (Herman review, 2026-06-07)

1. **Side-bleed callout enforced:** the navy-wash callout genuinely bleeds off the left viewport edge, rounded inner side only (block 17 as drawn; the floating contained box was a build error).
2. **Deliverables index:** clickable 4-item index above the WHAT YOU RECEIVE carousel, synced both ways with the slides and dots.
3. **Equation wrap rule:** A + B = C renders as one row or as a deliberate stack; an operator is never separated from its boxes at any width.

## EQT-253 R4 amendment (Herman review, 2026-06-07)

1. **Hero fine-line treatment:** at hero scale the icon's strokes are thinned via a hero-scoped CSS override to match the home hero's visual line weight (sparse + fine = deliberate minimalism; fat + sparse rejected). Terracotta/navy weight ratio preserved; no icon component edited; override never leaks beyond the hero. Interim until the EQT-275 hero scene motifs (Herman, Affinity) swap in at the marked seam. Applies to EQT-254 sector heroes identically.

## EQT-254 R1-R5 amendments (industries hub + 4 sector pages, shipped 2026-06-08)

Industry-specific locks from the conversion. Full consolidated set with exact values is in `DESIGN_LEARNINGS_v6x.md` → "Rollout page-type locks".

1. **Shared template, no URL sniffing.** The four sector pages are thin wrappers over `src/pages/industries/_sector.astro` (sector key as a prop); the hub is `index.astro`. No `Astro.url`/pathname parsing.
2. **Industry dark tone = ink-navy `#202946`** (the page's one dark moment, the proof carousel). Confirms the per-page-type rule with the exact shipped value.
3. **Sticky sub-nav (sector pages only):** left-aligned to the grid axis; `top` = real nav height (`--nav-h`) so it does not hide behind the main nav; anchored sections get `scroll-margin-top: calc(--nav-h + 51px + 12px)`.
4. **Hub hero = 2x2 sector-icon cluster** at the home-hero footprint (`min(540px,48vw)`, each icon ~`min(240px,21vw)`), bleeding right. Polyhedron retired.
5. **Hub "why sector" takeaway = right-bleed white panel** (white fill, left corners ~16px, square right edge, no shadow/border; text on the wide grid axis).
6. **Hub sector selector restructured:** the selector intro head ("Choose the pathway for your operating context.") sits ABOVE a horizontal four-tile sector row (terracotta rule under the active tile), then a full-width shared challenges / where-to-start panel, then the full-width de-coloured station line — NOT a left side-list, station line unboxed. Tile = sector icon + title + hook; the title block carries a fixed two-line `min-height` (`2.32em`, reset to `0` ≤860px where hooks hide) with the row top-aligned (`align-items:start`, icon `align-self:center`) so every title and every hook lands on the same line regardless of wrap. Same fixed-tile-head device as the Capability quadrant tiles.
7. **Hub sector row is NOT sticky (EQT-296/297, supersedes the original page-long-sticky plan).** Both CSS `position:sticky` and a JS `position:fixed` pin failed in Safari/WebKit in this scope: a stale ghost paint of the fixed bar mid-page, then (after removing the animated neighbour) the bar rode to the bottom of the viewport on scroll; three documented fixes failed. Final resolution: the bar sits in normal flow (`position:static`), placed in the markup AFTER the intro head and before the panel so it rests under the intro. Do NOT re-add a pin on the hub. The sector-page sub-nav keeps its JS pin (item 3) and was never affected. Full story in `DESIGN_LEARNINGS_v6x.md` → hub bar section.
8. **Station / entry-point mapping (SPEC CHANGE, supersedes brief §5.6/6.3):** lit stations = exactly the two entry-point columns. FS = PLAN, GOVERN · Government = PLAN, GOVERN · Utilities = PLAN, GOVERN · Manufacturing = PLAN, SOLVE. SOLVE drops off Government; SCALE lights nowhere. Re-mark resets all six to muted before marking the selected set (class-driven, not baked SVG attributes).
9. **Industry next-step columns stay equal** (both entry points, both linked) — NOT the current/next asymmetry used on service pages.
10. **Service-selector detail titles drop the `PILLAR:` prefix** (kicker already carries the pillar); verb-first. Deliverable items = Montserrat 600 16px near-black `#161616` with a small terracotta `::before` dot (~5px, ~14px gap).
11. **Closing CTA = home `cta-grid` treatment** (copy left, art right): the page's own sector `<Icon>` ~260px (hub = the 2x2 cluster reduced).
12. **LMI handover band = BEIGE on industry pages** (white-band R1 reversed in R2). Logo uses the transparent variant `LMI-LOGO-702_MAIN-R1_TRANSPARENT.svg` (white background rect removed; mark untouched), original 702 left alone, never 701. Chevron link left-aligned (`display:table`), never centred. Footer gap killed by reducing the handover bottom spacing against the footer's 120px top padding. Handover on home + industry pages only, never service pages.

## EQT-255 amendments (Our Work index + case study, Herman review, shipped 2026-06-08)

1. **Our Work index is a compact two-column proof grid,** not the brief's tall open Problem/Approach/Outcome rows (too tall and repetitive). Each case: italic-Lora sector + big navy metric + verb-first H3 + one context line (the Problem line). Full P/A/O kept in the case data for detail pages. Pillar group = hand-drawn pillar icon + monochrome dotted eyebrow + intro.
2. **Invented Outcome lines** (verb-first, tied to each metric, no new numbers) authored per case and held in the data; Herman approved.
3. **Illustrative markers removed from public output** entirely (no `<!-- ILLUSTRATIVE -->`, no visible label); the `illustrative` flag stays in data, unrendered. (Override of the brief's "preserve markers".)
4. **Case hero:** copy + motif in a top row, the hairline three-metric band runs full width below, motif above the boxes. Top row + band + CTA art share one ≤960px collapse.
5. **THE WORK = one connected journey on a single vertical spine** with line-art glyph nodes and terracotta connector captions, not three alternating sections.
6. **WHERE THIS FITS = the trainline moved directly under the hero;** heading is a per-case `pathwaySummary`; station marker reads `THIS ENGAGEMENT` (not `YOU ARE HERE`); "Follow the workstream." retired.
7. **RELATED = two columns side by side,** kind as eyebrow above title; heading "Keep exploring."
8. **Case-page dark moment = flat charcoal `#22211F`** (the page-type tone).
9. **LMI handover added to case pages, industry-relevant** (Herman override of services-parity). Index has none.
10. **Architecture:** `cases` content collection drives both surfaces; `[slug].astro` → `CaseStudy.astro` for `fullStudy` entries only; a `/our-work/<slug>/` page exists only where full Problem/Approach/Result copy exists. Styles in `our-work.css` (own `.ow-*` classes, references tokens).

## EQT-276 reconciliation (exploration v6 blocks redrawn to as-built, 2026-06-08)

The exploration block library predated the EQT-253/254 conversions, so several blocks were rebuilt to match shipped behaviour (reference HTML only, no `src/` change). This doc is the authority and needed no behavioural change; the notes below keep the two files consistent and resolve stale cross-references.

- **Authoritative rows:** where the older "Industry-page controls (audited 2026-06-04)" table disagrees with the **EQT-253 R1-R4** and **EQT-254 R1-R5** amendment sections, the amendment sections win. Specifically: the sector-page service-selector deliverables are **Montserrat 600 16px near-black `#161616` + a terracotta dot** (NOT the "hairline chip lists" phrasing in the 2026-06-04 row), and the industry proof carousel is the **ink-navy `#202946` proof-shell panel** (the 2026-06-04 row predates that).
- **Block numbers:** the merged WHERE IT LEADS is exploration block **08b + 09** (one section, one eyebrow); the industry hub sector selector + full-width station line is block **07** (the old "editorial rows" block was repurposed, since the shipped hub uses the sticky top-row selector, not rows); the footer is block **36** (not 32).
- **Footer:** carries the EQT-255 top hairline (see the Site footer row above).

## Decisions (locked, 2026-06-04)

1. **Retire the six-colour pillar pill system.** Pillars identified by hand-drawn icon + monochrome dotted eyebrow. Terracotta is the only accent.
2. **The Work becomes light evidence rows** (number tied to action); the page's one dark card becomes a flagship Our Work case with a real story. Applied in `EQUIBT_V6X_DIRECTION_EXPLORATION_v2.html`.
3. **Carousel translates to de-weighted scroll-snap:** no shadows, hairline arrow controls, terracotta dot indicator.

## EQT-256 / EQT-257 amendments (About, How We Work, Contact, Capability Statement — shipped 2026-06-09)

Full detail and exact values: `DESIGN_LEARNINGS_v6x.md` → the EQT-256/257 rollout-locks section. Built in Cowork. About + How We Work share `about.css` (`.about-*`); Contact + Capability Statement share `contact.css` (`.cx-*`); neither imports another page's stylesheet.

**Brand-level (site-wide):**
1. **Geography = Australia only.** Drop "and New Zealand" everywhere.
2. **LMI handover scope widened** to About, How We Work, and the Capability Statement (Herman override), in addition to home + industry + Our Work case pages; still never on service pages, the Our Work index, or Contact. Eyebrow on the new pages = `OUR TRAINING DIVISION` (home still `TRAINING`); framing is the differentiator ("Build lean, AI-capable teams").
3. **Artwork redraw narrowed (EQT-274/275):** only hero/CTA art, deliverables glyphs, the 4 sector identity icons, and the service icons get redrawn in Affinity. General/section/story glyphs AND sector-challenge glyphs keep the shipped line-art. So on converted pages only the hero motif and CTA art swap at the seam.

**Component rows (additions / changes to the tables above):**

| Component | v5x / prior | v6x as built (EQT-256/257) |
|---|---|---|
| Side-bleed callout (about) | single navy-wash | a PAIR used sparingly and asymmetric: navy-wash callout bleeding off the LEFT edge + a white hairline "answer" bleeding off the RIGHT edge, matched internal spacing. |
| Our Story field notes | hanging-label rows | hanging-label rows WITH an inline line-art glyph per note at site small-icon size (~54px), so Our Story reads distinctly from the (glyph-less) beliefs rows. Drop all dates. |
| We-are / we're-not (How We Work) | two compare cards | two open columns on hairlines (block 30 as built). |
| The Arc (How We Work) | phase timeline | the CaseStudy connected journey spine (glyph nodes + terracotta connectors), followed by the in-room/out-of-room posture as a TWO-COLUMN principle under its own eyebrow `WHEN WE STAY, WHEN WE LEAVE` (not orphan steps). |
| Closing CTA (about/HWW/capability) | light, plain | light `cta-grid`: copy left, interim line-art motif right. Cliché "firmer footing" headline retired. |
| Capability "what we do" | n/a | the home `svc-row` idiom (pillar icon + dotted kicker + name + line + `Explore PILLAR ›`), icons at site small-icon size. |
| Capability industries + proof | two separate sections | MERGED into ONE sector-organised section: a **2x2 quadrant of beige tiles** (earned boxes, 16px radius, no border/shadow). Each tile = bigger sector icon (~68px) + name + descriptor, then that sector's 2 evidence rows (one quiet divider), then `Explore <Sector> ›`. The tile head has a **fixed min-height so the proof points start on the same line in every tile** regardless of descriptor length. Replaced the fine-line-soup of separate industry rows + proof groups. |
| Capability "how to engage" / facts | facts rows | REMOVED (Herman). |
| Contact form | hairline inputs | v6x hairline inputs kept; heading "Let's talk about your operation." (Herman re-allowed "Let's talk" as a HEADING; the CTA button stays "Get in touch"). CAPTCHA = **real Cloudflare Turnstile** (interim TEST sitekey; production key + server-side verification at go-live EQT-262) + honeypot; `mailto:` action interim. |
| Contact REACH US | email + LinkedIn | monochrome Google-Maps embed left + details right (real Melbourne office + Melbourne/Sydney numbers + email + LinkedIn). Heading "Reach us directly." |
