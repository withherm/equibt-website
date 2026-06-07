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
| Dark sections | full-bleed navy / dark-slate bands (proof, CTA) | Max ONE dark moment per page, as a contained rounded card (flagship 24px / CTA equation ~20px radius) sitting on a light section. Never a full-bleed band. (One approved exception: the home flagship's binary expand-on-scroll to full-bleed, see DESIGN_LEARNINGS_v6x.) Dark field is FLAT, no gradient; colour may vary per page (home uses near-black `#101317`, the CTA equation dark-slate `#2C3E50`). |
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
| Deliverable carousel (`deliverables-carousel`) | 88%-width white slides, shadowed white circle arrows, terracotta dots | Keep horizontal scroll-snap but de-weight: no card shadow, hairline arrow buttons (no heavy shadow), image keeps a small radius, copy is open. Terracotta dot/active indicator stays. Consider a calm stacked variant on desktop for accessibility. |
| Stat / proof blocks (`stat-num`, `proof-stat`) | big number, label, sector | **Tie every number to the action that produced it** (see The Work below). A number with no cause reads as a claim. |
| The Work strip | 3 before/after numbers in a dark box | Light evidence rows: verb-first action + the metric move + anonymised sector. No box. Proof, not assertion. |
| Case cards (`case-card`, Our Work) | 2-col box, shadow, coloured pillar label | De-box to hairline-framed editorial. Keep Problem / Approach / Outcome substance. Make ONE flagship the single dark feature card (the page's one dark moment) with real story, verb-first title, result, "Read the case" link. |
| Industry cards (`industry-card`) | 452px white boxes, terracotta top bar, shadow | Drop the terracotta top bar and shadow. Editorial rows or hairline cards, hand-drawn sector motif, more air. |
| Sector cards (`sector-card`) | boxed, icon, problem text | Open blocks on hairlines, hand-drawn icon. |
| Belief / insight / related cards | boxed, shadow | De-box, hairline editorial. Related links become a simple hairline list, not a card grid. |
| Phase timeline (`phase-timeline`, `phase-card`) | boxed phase cards in a row | Hairline vertical timeline with hand-drawn connector line; phases as open steps, not boxes. |
| Station / subway pathway (`station-map`) | geometric SVG subway map | Redraw as a hand-drawn single-line pathway in the new idiom (matches the hero illustration language). Two variants: HOME = interactive selector (hover-selects-and-persists, proximity effect, label above the station inside the container — built in `index.astro`); SERVICE PAGES = static with a terracotta YOU ARE HERE on the current station, current + next labels navy, downstream labels muted `#7A8591`. |
| Filter chips (`filter-chip`, Our Work) | filled chips | Hairline pills, terracotta fill on active (same language as carousel dot). |
| Pillar badges / tags | 6-colour pills | Retire (see above). |
| Buttons | navy solid primary, outline secondary | Keep navy solid primary (hover = dark-slate `#2C3E50`) + the terracotta `›` chevron text link (glyph bigger/bolder than the link text; underline left-to-right under text only, then chevron nudge). `→` is retired site-wide. Drop the bordered outline button for the lighter text link. |

**Three link/action types, kept distinct (do not mix):** (1) **standalone CTA** = terracotta `›` chevron link, underline draws on hover then chevron nudges, used at the end of a section; (2) **inline prose link** = terracotta always-on underline, no chevron, used mid-sentence (block 33); (3) **download** = file-type + size meta with a down-arrow, ungated direct file (block 34). The navy solid button stays for the primary "Get in touch" action only.
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
| Sticky sub-nav | sticky in-page nav band | Keep sticky, restyle: white, hairline bottom border, Montserrat links, terracotta dot/underline on active. |
| Our Work accordion (`<details>`) | native expand/collapse for extra cases | Keep. Hairline rows, Montserrat summary, terracotta + on hover; no filled panel. |
| Contact form | standard fields | Hairline inputs (1px border, no fill), Montserrat labels, navy solid submit, generous spacing. |

## Case study page

| Part | v5x now | v6x treatment |
|---|---|---|
| One-page summary (hero `stat-band`) | eyebrow "SECTOR · PILLAR" coloured, verb-first H1, subhead, 3 boxed stat cells, low-poly gem motif | Eyebrow dotted monochrome (e.g. "FINANCIAL SERVICES · RAPID PILOT"), verb-first H1 (kept), hairline three-metric band (terracotta figures, no boxes), hand-drawn motif replaces the gem. |
| Body blocks (`The problem / What we did / The result`) | stacked prose under plain h2 | Editorial blocks with a hanging Montserrat label column (label left, Lora prose right) on hairlines, calm left axis, generous air. Optional sticky metric summary while scrolling. |

## Full coverage pass (2026-06-07) — every v5x component

A class-level scan of all v5x prototypes confirmed the component inventory; every pattern below now has a worked block in `EQUIBT_V6X_DIRECTION_EXPLORATION_v6.html` (blocks 00-32). Patterns not already covered by the tables above:

| Component (v5x classes) | v5x now | v6x treatment | Block |
|---|---|---|---|
| Site nav (`site-nav`) | built | BUILT in `src/components/Nav.astro`: sticky, hairline bottom, Montserrat 15/600 near-black links, bold down-chevron on submenu items, navy nav-CTA with dark-slate hover. Consume the component. | 00 |
| Page hero (`hero`, `hero-panel`, `hero-geometry`) | grid hero + low-poly gem; industry heroes carry boxed stat cells (`stat-num`) | Editorial asymmetric hero: top-left copy, 110px-idiom motif right bleeding into whitespace, Get in touch + chevron link. Gem RETIRED. Industry hero stats become a hairline metric band (terracotta figures, italic captions, no boxes). | 20 |
| Statement rows (`difference-point`) | filled difference cards | BUILT on home: hanging-label rows on hairlines (navy Montserrat lead left, Lora right). | 21 |
| Light closing CTA (`cta-panel`, on all pages) | full dark-slate band on every page | LIGHT closing CTA on the alternating section colour: eyebrow, headline, prose, navy button. The dark moment belongs to the flagship or the CTA equation, never the closing CTA. | 22 |
| LMI handover (`lmi-handover`, `training-handover`) | navy band with white LMI mark | BUILT on home: hairline-bounded band, full-colour clickable LMI-LOGO-702 (701 superseded), links to leanmethods.com.au (interim AU). Home + industry pages ONLY, never service pages. | 23 |
| Client logo wall (v6x addition, replaces Credentials page) | n/a | BUILT on home: static monochrome grid, 5 across, one hairline above and below, coded filenames logo-01..20, empty alt, client key vault-only. Never a marquee. | 24 |
| Our Work accordion (`case-disclosure`) + pillar section headers (`pillar-section-header`) | filled disclosure panels, coloured pillar groupings | Native `<details>` on hairline rows, Montserrat summary, terracotta +/− marker, no filled panel. Pillar groupings become dotted eyebrow + title (no colour coding). | 25 |
| FAQ (`faq-item`, resources) | boxed FAQ cards | Same accordion language as Our Work: hairline `<details>` rows. | 25 |
| Contact form (`prototype-form`) + facts (`fact-card`) | filled fields + fact cards | Hairline inputs (1px border, no fill, terracotta focus ring), Montserrat uppercase labels, navy solid submit. Facts become hanging-label rows. | 26 |
| Blog skim anchors (`tldr`, `takeaway`) | navy-wash boxes | Thin-lined white boxes (earned containers) with terracotta Montserrat label. TL;DR top, One-thing-to-try bottom. | 27 |
| AEO answer / hook / closing (`aeo-answer`, `lede`, `closing-line`) | wash box / styled | QUIET plain prose, no box (locked blog decision). | note |
| Related-service box (`related-box`) | filled box | Hairline row: grey label, body line, chevron link. | 27 |
| Resource cards (`resource-action`, resources hub) | boxed cards with pillar badges | Editorial rows on hairlines: hairline type pill, title, description, chevron action. Coming-soon = italic caption, no greyed box. | 28 |
| Problem-framing wizard (`wizard-shell`, resource landing / EQT-242) | filled wizard step cards | Open Montserrat question, hairline choice buttons (terracotta active, chip language), recommendation in a thin-lined box with chevron link. | 29 |
| We are / We're not (`compare-card`, How We Work) | two compare cards | Two open columns on top hairlines, items as hairline list rows. | 30 |
| Our Story field notes (`story-item`, About) | hook + copy list | Hanging-label rows (beliefs device). Drop "Since 2009" at conversion: no dates/years in public copy. | 31 |
| Why-EQUIBT rows (`why-body-row`, about/howwework/operators/capability) | label + copy rows | Same hanging-label editorial device as beliefs/statements. No separate pattern. | 18/21 |
| Site footer (`site-footer`) | built | BUILT in `src/components/Footer.astro`: pure white, full FRAME footer, NO LMI line, entity + ABN bottom strip. Consume the component. | 32 |
| Breadcrumb (`breadcrumb`, resource landing) | text trail | Keep minimal: Montserrat caption-grey trail with `›` separators. No chips. | note |
| Scroll-reveal system (`reveal`, `reveal-d1..d3`, 312 uses site-wide) | fade/slide-in on scroll | **RETIRED.** The merged home ships without it; v6x pages are static-calm. Do not port. | note |
| Page scaffolding (`page-shell`, `wide-inner`) | wrapper divs | v6x uses `.section`/`.section-inner` with `--max`/`--wide` tokens (see base.css/home.css). | note |
| Outline button (`btn-outline`) / secondary (`btn-secondary`) | bordered outline | RETIRED for the terracotta chevron text link. | 12 |
| Persona narrative ("Michael", all six service pages) | named buyer persona | Rewrite to second-person/role framing: firm "we", no named individual (EQT-253 decision). | note |
| **Inline prose link** (`<a>` inside `<p>`, mailto, external) | ad-hoc, unstyled | NEW lock: terracotta text + always-on 1px underline (3px offset), no chevron. External opens new tab `rel="noopener"` with a small outbound `↗` mark; internal + mailto/tel drop the mark. The chevron `›` link is RESERVED for standalone CTAs and never used mid-sentence. Hover = terracotta-dark. | 33 |
| **Downloadable document** (`Download` card-links, resources/home/blog) | bare "Download" card-link | NEW lock: UNGATED (no form; all resources ungated), direct file via the `download` attribute. Hairline row, doc glyph, title + one-line use, DOWNLOAD action with file-type + size meta (e.g. "PDF · 280 KB"). Distinct from a page/tool link (block 28). Covers the capability statement PDF (dropped pending v6x rework) and any template. | 34 |
| **Legal / utility page** (Privacy, Terms; only "Privacy" client labels exist today) | none built | NEW low-chrome archetype: shared nav + footer, NO marketing components, NO dark moment, NO CTA equation. Simple hero (LEGAL eyebrow + H1 + last-updated), prose with Montserrat sub-headings on hairlines, inline links per block 33. **FLAG (Herman decision): the "Last updated" date is a proposed exception to the no-dates-in-public-copy hard rule, since privacy/terms legally need an effective date.** Footer carries Privacy · Terms in a legal link row (grey Montserrat label style). NB: the built `Footer.astro` + the legal pages do not exist yet — needs its own Linear issue (suggest folding into EQT-262 go-live). | 35 / 36 |

## More patterns (service / about / industry pages)

| Component | v5x now | v6x treatment |
|---|---|---|
| CTA equation (`cta-equation`) | heavy dark band, filled meta cells: timeline + how we work = deliverables | Contained dark card (rounded), thin hairline boxes, terracotta + and = operators, white "Get in touch". The A+B=C logic kept. |
| Side-bleed highlights (`highlight-callout`) | navy-wash / white callout blocks | Keep. Statement callouts that run off the side edge, rounded on the inner side only. Navy-wash (#E8ECF5) for one, white-with-hairline for the other. Used sparingly, asymmetric. |
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

## Decisions (locked, 2026-06-04)

1. **Retire the six-colour pillar pill system.** Pillars identified by hand-drawn icon + monochrome dotted eyebrow. Terracotta is the only accent.
2. **The Work becomes light evidence rows** (number tied to action); the page's one dark card becomes a flagship Our Work case with a real story. Applied in `EQUIBT_V6X_DIRECTION_EXPLORATION_v2.html`.
3. **Carousel translates to de-weighted scroll-snap:** no shadows, hairline arrow controls, terracotta dot indicator.
