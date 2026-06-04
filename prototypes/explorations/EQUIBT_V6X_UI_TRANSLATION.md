# EQUIBT v6x — UI Component Translation

How every v5x UI pattern translates into the v6x direction (Anthropic editorial air + hand-drawn line-art signature). Reference for the Codex brief. Home page first, then the rest of the site inherits.

## The governing principle

v5x leans on one move for everything: filled background + drop shadow + rounded box + hover lift. That is what makes the site read boxy and templated. v6x replaces that default with **open editorial layout on hairlines**. A box must be *earned*: use a real bordered or filled card only for a genuinely bounded object (one dark feature card, an image, a data record). Everything else is content on whitespace, separated by 1px hairlines.

Locked tokens carried in: Montserrat 700 headings, Lora 500 body (20px / 1.45, near-black `#161616`), terracotta accent only, white `#FFFFFF` + beige `#F5F3EE` backgrounds, hand-drawn navy line-art with one terracotta accent.

## Global rules

| Element | v5x now | v6x treatment |
|---|---|---|
| Section backgrounds | navy-wash, light-grey, highlight-wash, off-white all in rotation | White and beige only, alternating. No other section fills. |
| Dark sections | full-bleed navy / dark-slate bands (proof, CTA) | Max ONE dark moment per page, as a contained rounded card (radius 22px) sitting on a light section. Never a full-bleed band. |
| Shadows | `card-shadow` + `card-shadow-hover` everywhere | Removed. Separation by 1px hairline `rgba(38,36,92,0.13)`. |
| Corner radius | 8px on every card | Only on earned boxes: 22px on the dark card, 6-12px on images. Open content has no radius. |
| Hover lift | translateY(-6px) on all cards | Drop. Hover = colour shift on the link/arrow only. |
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
| Station / subway pathway (`station-map`) | geometric SVG subway map | Redraw as a hand-drawn single-line pathway in the new idiom (matches the hero illustration language). |
| Filter chips (`filter-chip`, Our Work) | filled chips | Hairline pills, terracotta fill on active (same language as carousel dot). |
| Pillar badges / tags | 6-colour pills | Retire (see above). |
| Buttons | navy solid primary, outline secondary | Keep navy solid primary + terracotta-arrow text link. Drop the bordered outline button for the lighter text link. |
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
- **Minimise font-size variation.** Default supporting copy (including highlight sub-lines like "It is abandonment.") to plain body text (Lora 500, 20px), rather than inventing smaller sizes. Fewer sizes reads cleaner. Italic captions are the deliberate exception.

## Decisions (locked, 2026-06-04)

1. **Retire the six-colour pillar pill system.** Pillars identified by hand-drawn icon + monochrome dotted eyebrow. Terracotta is the only accent.
2. **The Work becomes light evidence rows** (number tied to action); the page's one dark card becomes a flagship Our Work case with a real story. Applied in `EQUIBT_V6X_DIRECTION_EXPLORATION_v2.html`.
3. **Carousel translates to de-weighted scroll-snap:** no shadows, hairline arrow controls, terracotta dot indicator.
