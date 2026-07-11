# GOS Brand Guidelines v7.1

_Shared visual identity for Lean Methods Institute and EQUIBT._
_Locked 28 May 2026. Updated 30 May 2026 (v7.2, EQUIBT web layout rules). Maintained by Herman Chan._

> Markdown mirror of `site/index.html`. The HTML site is the designer-facing surface; this file is the dev-facing reference. Same content, same source of truth.

---

## Overview

This document is the canonical visual guideline for the GOS portfolio. It governs both Lean Methods Institute (LMI) and EQUIBT, defines the shared system underneath them, and sets the standards Skye, Max, and any external partner build against. If a decision contradicts what is locked here, this document wins. If something is missing, it is a documentation gap, raise it rather than improvise.

| Brand | Mission | Tagline |
|---|---|---|
| Lean Methods Institute | Training | Lean. Service Design. Business Analysis. Training with AI built in. |
| EQUIBT | Advisory | We simplify the complex. We make it stick. |

Herman's LinkedIn headline (anchors unified positioning across both brands): _We simplify the complex. We make it stick. \| Lean x AI \| Advisory + Training_

---

## 01 — Brand architecture

LMI and EQUIBT operate as a brand family inside the GOS portfolio. They share the typographic system, the grey scale, the wordmark colour, and the layout principles. They diverge on hero colour, accent colour, background warmth, and brand expression dosage. LMI carries the training mission and runs slightly more colour expression. EQUIBT carries the advisory mission and stays leaner and more architectural. Same DNA, different posture.

### The two-layer system

Every visual artefact belongs to one of two layers. The layer dictates which palette, which typography behaviour, and which composition rules apply.

| Layer | Purpose | Used on |
|---|---|---|
| **Corporate Layer** | Brand identity and positioning | Logos, website hero, decks, proposals, banners (corporate), social, email signatures, document chrome. |
| **Framework Teaching Layer** | Visual coding of methodology steps | Illustrations of DMAIC, DMAICO, 5S, 8 wastes, kano, VSM legends, training handouts, workshop slides. |

**Hard rule.** The Framework Teaching Layer palette may only appear inside framework illustrations. It does not appear on website chrome, hero sections, brand-facing banners, document headers, social tiles, or any positioning material.

---

## 02 — Logos

Each brand has one primary lockup. Variants exist for specific surfaces (dark, square, favicon, small). All wordmarks across both brands use Dark Slate `#2C3E50`. The icon background is the brand hero colour.

### LMI primary lockup

- **File:** [`GOS/Branding/Logos/LMI/LMI-LOGO-701_MAIN-R1.svg`](assets/logos/lmi/LMI-LOGO-701_MAIN-R1.svg)
- **Icon background:** Crimson `#A51C30`
- **Wordmark:** Dark Slate `#2C3E50`
- **Minimum clear space:** Cap-height of the wordmark on all four sides
- **Minimum icon size:** 32px on screen, 9mm in print

| Variant | File | Use When |
|---|---|---|
| MAIN-R1 | `LMI-LOGO-701_MAIN-R1.svg` | Primary, all standard use |
| MAIN-R2 | `LMI-LOGO-701_MAIN-R2.svg` | Horizontal-constrained spaces |
| MAIN-DARK | `LMI-LOGO-701_MAIN-DARK.svg` | Dark backgrounds only |
| MIN1-R1 | `LMI-LOGO-701_MIN1-R1.svg` | Wordmark only, icon too small to render |
| SML-R1 | `LMI-LOGO-701_SML-R1.svg` | Favicon, avatar, app icon |
| EQ LMI | `LMI-LOGO-701_EQ LMI.svg` | Co-branded with EQUIBT |

### EQUIBT primary lockup

- **File:** [`GOS/Branding/Logos/EQUIBT/EQ-LOGO-701_EQ-MAIN-R1.svg`](assets/logos/equibt/EQ-LOGO-701_EQ-MAIN-R1.svg)
- **Icon background:** Deep Navy `#26245C`
- **Wordmark:** Dark Slate `#2C3E50`

| Variant | File | Use When |
|---|---|---|
| EQ-MAIN-R1 | `EQ-LOGO-701_EQ-MAIN-R1.svg` | Primary, all standard use |
| EQ-REV-R1 | `EQ-LOGO-701_EQ-REV-R1.svg` | Reversed horizontal, dark backgrounds |
| EQ-REV-R2 | `EQ-LOGO-701_EQ-REV-R2.svg` | Reversed compact, dark and constrained |
| EQ-LOGO-SQ | `EQ-LOGO-701_EQ-LOGO-SQ.svg` | Square format, social, badge |
| EQ-SML-R1 | `EQ-LOGO-701_EQ-SML-R1.svg` | Favicon, avatar, app icon |

### Misuse

**Do:** Use the locked colour pairing, brand hero on the icon and Dark Slate on the wordmark. Place on the brand's locked off-white background or pure white.

**Don't:** Do not recolour the wordmark to `#434343` or any other grey. Do not place the icon on tinted backgrounds. Do not skew, rotate, or apply effects.

---

## 03 — Colour

Three palettes operate in parallel. The two brand palettes live in the Corporate Layer. The Framework Teaching Layer palette is a separate, documented system used only inside framework illustrations.

### LMI palette

| Role | Name | Hex |
|---|---|---|
| Hero | Crimson | `#A51C30` |
| Contrast | Petrol Teal | `#004757` |
| Structural | Dark Slate | `#2C3E50` |
| Background | Off-White | `#F6F7F8` |
| Alternating | Light Grey | `#EDF0F3` |
| Body text | Near-Black | `#2C2C2C` |
| Borders | Light Grey | `#D8DCE0` |
| Caption / meta | Mid Grey | `#7A8591` |

### EQUIBT palette

| Role | Name | Hex |
|---|---|---|
| Hero | Deep Navy | `#26245C` |
| Accent | Terracotta | `#C15F3C` |
| Structural | Dark Slate | `#2C3E50` |
| Background | Off-White | `#F5F3EE` |
| Section alternate | Light Grey | `#F5F5F5` |
| Warm Parchment | Warm Parchment | `#F8F1E5` |
| Body text | Near-Black | `#2C2C2C` |
| Body text (secondary) | Mid Grey | `#555555` |
| Borders | Light Grey | `#D8DCE0` |
| Caption / meta | Mid Grey | `#7A8591` |

### Framework Teaching Layer palette (v7.1)

Fixed order, used across every framework illustration. Five colours for five-step frameworks (5S, 8 wastes). Add Deep Navy as step 6 for DMAICO.

| Step | Name | Hex | 5S | DMAIC | DMAICO |
|---|---|---|---|---|---|
| 1 | Petrol Teal | `#004757` | Sort | Define | Define |
| 2 | Amber | `#B8732F` | Set in order | Measure | Measure |
| 3 | Slate | `#2C3E50` | Shine | Analyse | Analyse |
| 4 | Crimson | `#A51C30` | Standardise | Improve | Improve |
| 5 | Forest | `#2D5F3F` | Sustain | Control | Control |
| 6 | Deep Navy | `#26245C` | — | — | Operate / Scale |

### Contrast rules

Do not place small white text (under 18px / under 14px bold) on Terracotta `#C15F3C` or Amber `#B8732F`. Both score below WCAG AA contrast against white at body sizes. Use Near-Black `#2C2C2C` text instead, or restrict white text to heading sizes (24px+). Petrol Teal `#004757` passes AA for normal text against white (8.9:1).

### Surface tier and dividers

| Colour | Hex | Role | Large area? |
|---|---|---|---|
| Off-White (EQUIBT) | `#F5F3EE` | Page bg and CTA panels | Yes |
| Off-White (LMI) | `#F6F7F8` | Page background | Yes |
| Section BG (EQUIBT) | `#F5F5F5` | Alternating section backgrounds | Yes |
| Alternating (LMI) | `#D5D8DB` | Alternating section backgrounds | Yes |
| Navy Wash | `#E8ECF5` | EQUIBT brand-tinted section bg | Yes (not for card fills) |
| Teal Wash | `#C8E5F0` | LMI brand-tinted section bg | Yes |
| Slate Mist | `#BFC1C3` | Borders and dividers only | No |

---

## 04 — Typography

Both brands share one type system. Locked 13 May 2026 (supersedes the original Source Serif 4 + Lato pairing). Display heading caps raised 30 May 2026 (H1 to 72px, H2 to 48px) for website hero and section-opener scale, per EQUIBT v5 redesign. Montserrat carries display and headings, Inter carries body, Open Sans handles navigation. Sentence case across H1 to H4. All-caps reserved for labels and badges only.

### Hierarchy

| Element | Font | Weight | Size | Notes |
|---|---|---|---|---|
| H1 (display title) | Montserrat | SemiBold (600) | 48-72px | Sentence case (sentence-form) or title case (framework names). Letter-spacing -0.02em to -0.03em. Upper range (64-72px) for website hero / large display only. |
| H2 (section headings) | Montserrat | Bold (700) | 32-48px | Sentence case. Letter-spacing -0.02em. Upper range (42-48px) for website section openers that stand alone. |
| H3 (card titles, sub-headings) | Montserrat | Bold (700) | 22-26px | Sentence case. |
| H4 (minor headings, eyebrows) | Montserrat | Bold (700) | 13-14px | All-caps, letter-spacing 0.12-0.14em. |
| Body | Inter | Regular (400) | 17-18px | `#2C2C2C`, line-height 1.55. |
| Label / badge | Montserrat | Bold (700) | 11-12px | All-caps, letter-spacing 0.14em. |
| Navigation | Open Sans | Medium (500) | 14px | Sentence case. |

### Casing rules

| Treatment | Where it applies | Example |
|---|---|---|
| Sentence case | H1, H2, H3, H4, body, CTA labels, nav, breadcrumbs, footer links | "Build the capability to keep improving." |
| Title case | Framework names, proper nouns, product names | "5S Workplace", "DMAICO Method" |
| All-caps | Labels, badges, eyebrows, small metadata only. Never on body or H1-H4. | "FRAMEWORK TEACHING LAYER" |

### Font sources

- Montserrat: <https://fonts.google.com/specimen/Montserrat>
- Inter: <https://fonts.google.com/specimen/Inter>
- Open Sans: <https://fonts.google.com/specimen/Open+Sans>

Web embed:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## 05 — Iconography

Monoline, single colour, no fill. Architectural geometry, not generic stock icon-set style.

| Property | Spec |
|---|---|
| Style | Monoline outline, no fill |
| Stroke weight | 1.5 to 2 units on a 24-unit grid |
| Line caps / joins | Round caps, round joins |
| Container | Optional circular outline at same stroke weight, same colour |
| Colour | Single colour per icon. Corporate Layer: navy (EQUIBT) or slate. Framework Teaching Layer: the step colour. |
| Banned | Multi-colour icons, gradients, drop shadows, sparkles layered on utility icons, hand-drawn strokes, generic Iconfinder / stock-set output. |

### EQUIBT public-site line-art layer (web)

The EQUIBT marketing site runs a separate hand-drawn line-art layer for its pillar and sector marks (this is the deliberate exception to the monoline-stock rule above; utility/nav glyphs stay Forma Regular). Spec: viewBox `0 0 375 375`, navy `#26245C` strokes, round caps and joins, exactly one terracotta `#C15F3C` accent element per icon, single weight. Full detail lives in `prototypes/DESIGN_LEARNINGS_v6x.md`.

- **Sector set (complete, 2026-07-09):** financial-services, government, utilities, manufacturing, property, fmcg, insurance, chemicals. The last four were added because the case-study sectors (Property Group, FMCG, Chemical Sales, Specialty Insurer) had no honest fit in the original four.
- **List markers (web).** Positive outcome/result = navy tick. Challenge/problem = navy circle with a white exclamation. Do not use a plain square bullet. Keep the two markers distinct so outcome lists and problem lists read differently at a glance.

---

## 06 — Layout & spacing

Off-white backgrounds carry both brands. Never pure white at full bleed. EQUIBT runs warmer (`#F5F3EE`), LMI runs cooler (`#F6F7F8`). Asymmetric editorial layouts preferred over centered "poster" compositions, except for vertical pull-up banners where stacked composition is fine.

### EQUIBT card standard (locked May 2026)

| Property | Service cards | Industry cards |
|---|---|---|
| Background | White | White |
| Top accent bar | None | Terracotta, 30px |
| Icon stroke | n/a | Navy `#26245C`, 56×56px |
| Shadow (rest) | `0 2px 10px rgba(38,36,92,0.08)` | Same |
| Hover | `translateY(-6px)` + `0 16px 40px rgba(38,36,92,0.18)` | Same |
| Tint-on-hover | Rejected, reads as a stain on white | Rejected |

### Document spacing

| Property | Value |
|---|---|
| Section spacer | 320 DXA (~5.6mm) |
| Paragraph spacing | 160 to 280 DXA |
| Table cell padding | 80 DXA top/bottom, 120 DXA left/right |

### Page numbers (Word and PowerPoint)

- Position: bottom right
- Format: "Page X of Y"
- Font: Inter Regular, current page number bold in Hero colour
- Rule: thin Hero-colour horizontal rule above the page number

---

## 07 — Web design system

This section is the build reference for coding agents (Claude Code, Cowork, Codex). Match the components, recipes, and spacing on this page. If a pattern you need is not documented here, raise a documentation gap rather than improvise.

### Spacing scale

One scale across both brands. Multiples of 4px. Do not invent off-scale values.

| Name | Px |
|---|---|
| 3xs | 4 |
| 2xs | 8 |
| xs | 12 |
| sm | 16 |
| md | 24 |
| lg | 32 |
| xl | 48 |
| 2xl | 64 |
| 3xl | 96 |
| 4xl | 128 |

### Breakpoints

| Name | Min-width | Notes |
|---|---|---|
| mobile | — | Default. Single column. Edge padding 24px. |
| tablet | 768px | Two-column where the design supports it. Edge padding 32px. |
| desktop | 1024px | Full layout. Container max-width 1200px. Edge padding 48-64px. |
| wide | 1440px | Container caps at 1200px, gutters widen. |

### Buttons

Three button treatments. No fourth invented. No ghost button with chevron icon. No gradient buttons.

**Primary (EQUIBT)**
```css
background: #26245C;
color: #fff;
font: 700 11px Montserrat;
padding: 13px 26px;
border-radius: 6px;
letter-spacing: 0.1em;
text-transform: uppercase;
```

**Primary (LMI)** — Same dimensions, fill is Crimson `#A51C30`.

**Outline (secondary)**
```css
background: transparent;
border: 1.5px solid #C9CCD5;
color: #2C2C2C;
border-radius: 3px;
padding: 11.5px 24.5px;
font: 700 11px Montserrat;
text-transform: uppercase;
letter-spacing: 0.1em;
```

**Text link (inline)** — Brand colour, no underline at rest, underline on hover. No arrow icon by default.

### Cards

The card is the highest-signal pattern in the system. Get this wrong and the brand looks generic.

**Card rule:** No border on the side. No thin accent strip on the top. Cards live on white, separated from the page by a brand-tinted soft shadow and corner radius. If a card needs categorical signal, use a properly-sized graphic block (the EQUIBT industry-card 30px terracotta top block), never a 2-3px line.

**Service card recipe**
```css
background: #fff;
border-radius: 8px;
box-shadow: 0 2px 10px rgba(38,36,92,0.08);
padding: 28px;
transition: transform 0.22s, box-shadow 0.22s;
/* Hover */
transform: translateY(-6px);
box-shadow: 0 16px 40px rgba(38,36,92,0.18);
/* Pill tag carries the pillar colour */
/* NO border. NO border-top. NO outline. */
```

**Industry card recipe** (categorical signal via 30px top block, locked May 2026)
```css
background: #fff;
border-radius: 8px;
box-shadow: 0 2px 10px rgba(38,36,92,0.08);
overflow: hidden;
/* Top block: 30px solid #C15F3C (terracotta), full width. */
/* Inner padding: 28px, padding-top 22px. */
/* Icon: 56x56 inline SVG, stroke #26245C (navy), no fill. */
/* hover: same lift as service card. */
/* NO border around the card. NO 2-3px accent line. */
```

### Navigation (top bar)

- Logo wordmark in Montserrat Bold, all-caps, letter-spacing 0.12em, 15px.
- Nav links Open Sans Medium 14px in sentence case.
- Primary CTA right-aligned, Montserrat Bold 11px, navy fill.
- No drop-shadow on the bar.
- No thin border below the bar at rest. Separation by background colour only.

### Hero section

Eyebrow + H1 + supporting line + two CTAs. Asymmetric, left-aligned. No centered alternative on desktop.

- Background: Off-White `#F5F3EE` only. Never navy or dark (revised 30 May 2026: navy is too heavy as the first thing a visitor hits).
- Eyebrow: Montserrat Bold 11px, terracotta (EQUIBT) or crimson (LMI), uppercase, letter-spacing 0.18em.
- H1: Montserrat SemiBold, near-black/navy, line-height 1.06, letter-spacing -0.03em. Website hero scale 64-72px (display cap raised 30 May 2026); 48-60px elsewhere.
- Supporting line: Inter Regular 18px, slate, max-width 50ch.
- Two CTAs: Primary + Outline. Gap 12px.

### EQUIBT web layout rules (added 2026-05-30, from home v5 review)

Authority on conflict: this guideline, mirrored in DESIGN_LEARNINGS_v3 hard-rules section and HOME_BUILD_SHEET_v5.

- **Hero and menu are always light.** Off-white `#F5F3EE`, dark text. Never navy or dark. Navy is too heavy as a hero background.
- **Dark accent sections are allowed lower down**, as deliberate moments for rhythm: navy `#26245C` proof/stat strip, dark slate `#2C3E50` CTA panel. Never the hero, menu, or opening section. One or two dark moments per page.
- **Hero and footer are pure white `#FFFFFF`, dark text.** Locked 30 May 2026 after v5x review (reverses both the earlier dark-navy footer and the off-white-only rule, for hero/footer specifically). Other sections still use off-white `#F5F3EE` and light grey `#F5F5F5` for alternation. The only dark moments are the proof strip and CTA panel in the body.
- **Section backgrounds:** off-white `#F5F3EE`, light grey `#F5F5F5`, Navy Wash / light blue `#E8ECF5`, plus the permitted dark moments above. Nothing else.
- **Highlight colour is the cool light-blue wash `#E8ECF8`** (Navy Wash family), not warm parchment. Warm parchment retired as the highlight (read weak). Small emphasis elements only, never a section background.
- **Card grids:** consistent card dimensions and padding. Create rhythm by offsetting rows horizontally, never by resizing cards.
- **Type scale (home hero):** keep the step from hero H1 to section H2 to body proportionate. Hero H1 ~52-56px, section H2 ~36-40px, body 18px. Avoid an oversized hero that dwarfs everything below.
- **Industries strip: 4 equal cards** - Financial Services, Government and Public Sector, Utilities, Advanced Manufacturing.
- **No 01 02 03 numbering** on sections or cards.

### Section pattern

Every content section follows the same anatomy: eyebrow (label), H2 (sentence-case), short supporting paragraph, then the section content. No decorative dividers between sections. Background tone alternation does the separation work (off-white → `#F5F5F5` → off-white).

### Interaction patterns (added 2026-07-09)

- **Carousel controls.** Prev/next arrows sit on the left and right edges of the slide, vertically centred (circular white buttons, hairline border, soft shadow, invert to navy on hover). Dot indicators sit centred below the slide. Do not bunch arrows and dots together in one corner.
- **Trainline / pathway callouts.** When a pathway highlights a recommended sequence, the recommended stations carry a terracotta leader line and a short label above them (first = START HERE, second = THEN). Where a pathway supports a "where to start" panel, it sits inside that panel column, not full-width beneath it.
- **List-icon indent (responsive).** Icon-plus-text list rows that bleed their hover fill past the container on desktop (negative `margin-inline` + matching padding) must keep matching horizontal padding at mobile breakpoints, so the icon stays on the content axis instead of sliding to the viewport edge. Match the home service-list idiom.
- **Card hover.** White cards lift (`translateY(-3px)`), darken their border, and turn the title terracotta on hover. On a tinted (beige) section the hover fill flips to white; on a white section it flips to beige. Keep the two tones opposite so cards read as lifting off the section.
- **Full-card click.** When a whole card should be clickable, use a stretched-link `::after{position:absolute;inset:0}` on the card's primary action link, with the card `position:relative`. Never nest anchors. Exclude non-navigable states (e.g. "coming soon").
- **CTA hero art size.** The WORK-WITH-US CTA illustration is `min(170px, 22vw)` desktop, `min(160px, 40vw)` mobile, consistent across pages. Multi-icon clusters may run larger.
- **Dark flagship / outcome card.** The dark quote/outcome card expands on scroll from a centred rounded card to a full-bleed band. The home flagship triggers on viewport coverage; the shorter case-study outcome card triggers relative to its own height (expand at >=60% of the card in view). Deliberate exception; reserved for the single flagship or case-study outcome moment.
- **Case carousels.** Multi-item case sections use the shared carousel idiom: side arrows (circular, on the slide edges, invert to navy on hover) and centred dots below. Data-driven from published cases where possible, so figures and labels stay in sync.

### Case study content (public site)

- **Anonymous, always.** Use anonymised sector labels (e.g. "Bank", "Industry Ombudsman", "Specialty Insurer"), never client names, even for publicly referenceable clients. Prefer the least-identifying label that is still accurate.
- **No dollar benefit figures in public copy.** Show operational outcomes (rates, cycle time, handoffs, deflection). Keep dollar estimates internal (the case register), not on the page.
- **Realised, not hedged.** All case studies are real anonymised engagements. Present the result plainly (no "projected" qualifier). Do not publish composite or hypothetical examples.
- **One engagement, one set of numbers.** Where the same engagement appears in more than one place (home flagship and its case page), keep the figures identical.

---

## 08 — Anti-patterns to reject

The patterns below are the visual hallmarks of vibe-coded AI-generated UI. They are not GOS aesthetic. Coding agents producing GOS UI should treat these as failed output and rebuild on-spec.

### The card rule, in detail

**Reject (AI default):**
```css
/* Every card */
.card { border: 1px solid #D8DCE0; border-radius: 8px; padding: 20px; background: #fff; }
/* Coloured category cue */
.card.solve { border-top: 3px solid #5B8DEF; }
```

**Use (GOS card):**
```css
.card { background: #fff; border-radius: 8px; padding: 28px;
        box-shadow: 0 2px 10px rgba(38,36,92,0.08); }
.card .pill.solve { background: rgba(0,71,87,0.12); color: #004757;
                    font: 700 10px Montserrat; padding: 5px 10px;
                    border-radius: 100px; letter-spacing: 0.14em; }
```

### Other tells to reject

| Anti-pattern | Why it fails | Use instead |
|---|---|---|
| Gradient text on H1 (`background-clip: text`) | Reads as AI landing page. Loses authority. | Solid brand colour. Near-Black for body headings, hero colour for emphasis. |
| Gradient backgrounds (blue→purple, animated mesh) | Generic SaaS hero. | Solid surfaces from the locked palette. |
| Glassmorphism (`backdrop-filter: blur`) | Decorative tech, not advisory authority. | Solid backgrounds, tints from the palette. |
| Scale-on-hover (`transform: scale(1.05)`) | Toy interaction. | `translateY(-2 to -6px)` only. |
| Excessive rounded corners (`rounded-2xl`, `rounded-3xl`) | Consumer-app aesthetic. | 4-8px on cards, 3-6px on buttons. Pills (100px) are fine. |
| Default Lucide / Heroicons in primary positions | Generic. Same five icons everywhere. | Custom architectural icons matching the locked stroke spec, or none. |
| Centered everything (hero, three-card row, headings) | AI landing-page default. | Asymmetric left-aligned editorial layout where the format allows. |
| Auto-emoji decoration (🚀 next to "fast", ✨ next to "AI") | Loses authority instantly. | No emoji on any brand surface. |
| Lazy CTAs ("Get Started", "Learn More", "Click Here") | Generic. | Specific action-naming CTAs: "Talk to us about your operation", "See how Lean& Methods works". |
| Inset shadows on inputs | Simulated depth, dated. | Clean border at rest, brand-colour border on focus. |
| Navy or dark hero/menu background | Too heavy as the first thing a visitor hits. | Light hero and menu (off-white), dark text. Dark sections lower down only. |
| Warm parchment as a section background | Overwhelms; parchment is an accent. | Parchment for small highlights only. |
| 01 02 03 section/card numbering | Generic AI/template tell. | Eyebrow label text alone. |
| Animated underlines, growing dots, spinning borders | Decoration, not communication. | Simple colour change, simple translateY, or nothing. |
| "As seen on" greyscale logo strips with placeholders | Lazy social proof. | Real logos with permission, or omit. Per case study anonymisation rule, EQUIBT clients stay anonymous, so this strip is generally not used. |

### Self-test

If the page looks like every AI-generated landing page from the last two years, the choice is wrong. Refer to the EQUIBT v4 prototype (`REPOS/equibt-website/prototypes/equibt_home_prototype_v4.html`) and the Web design section above for what on-system looks like.

---

## 09 — Framework Teaching Layer

Framework illustrations explain methodology. They live inside Corporate Layer chrome (a banner top and footer carry brand identity, the framework content inside uses the teaching palette). Use the same colours in the same order across every framework so visual sequencing builds recognition.

### Application standards

**Typography inside framework illustrations:**

- Framework title: Montserrat SemiBold. Sentence case (sentence-form) or title case (framework names).
- Step names: Montserrat Bold, sentence case. Letter-spacing -0.02em at display sizes.
- Body: Inter Regular at `#2C2C2C`.
- Small labels and badges inside framework illustrations: Montserrat Bold all-caps, 11-12px, letter-spacing 0.14em.

**Icons inside framework illustrations:**

- Style: monoline, single colour, no fill.
- Stroke: 1.5 to 2 units on 24-unit grid. Round caps acceptable.
- Container: circular outline in the same colour as the icon, stroke matches icon weight, no fill.
- Banned: rough or hand-drawn strokes, gradient fills, drop shadows, multicoloured icons, sparkle decorations layered onto utility icons, generic stock-set icons.

**Saturation rule:** Enterprise tones, not pastels. If a colour reads pastel on white at 100% opacity, the saturation is wrong. The 2024 and 2025 LMI training banners use pastel orange and bright leaf-green that read soft. Retired under v7.1.

### Brand expression by layer

LMI training collateral may run more colour expression than EQUIBT collateral, because LMI's primary job is teaching frameworks and the Framework Teaching Layer earns its place there. EQUIBT collateral stays leaner: corporate identity dominates, framework illustrations appear only where genuinely needed (proposals teaching DMAICO, case studies referencing 5S), and stay on the same Framework Teaching Layer palette as LMI. Both brands share the framework palette. Same DNA, different expression dosage.

---

## 10 — Applications

Worked example: the 5S Workplace pull-up banner, rebuilt on v7.1.

- **2025 original (off-spec under v7.1):** `GOS/Branding/Guidelines/LMI_BANNER_5S_2025_orig.png` (rendered from the uploaded PDF for comparison). Pastel palette, generic sans headings, light grey body. Replaced.
- **v7.1 rebuild:** `GOS/Branding/Guidelines/LMI_BANNER_5S_v7-1.svg` and `.png`. Framework Teaching Layer palette, Montserrat SemiBold title, Montserrat Bold step names in sentence case, Inter Regular body at `#2C2C2C`, architectural monoline icons.
- **Comparison:** `GOS/Branding/Guidelines/LMI_BANNER_5S_comparison.png`

---

## 11 — Voice & tone

Direct. Plain Australian business English. Practitioner-led, not thought-leader-led. Short sentences. No hedging. Plain words over technical terms where both work. No corporate polish.

### Avoid

- Em dashes and en dashes. Use commas, colons, ellipses, or restructure.
- AI tells: "game-changer", "unlock", "leverage", "unpack", "journey", "let's dive in", "in today's fast-paced world", "it's not just X, it's Y".
- Rhetorical triplets.
- Tidy bow endings.
- Lazy CTAs ("thoughts?", "what do you think?"). If there is a question, make it specific.

### Australian English

Organise, optimise, realise, colour, programme (UK -mme variant for ongoing programme of work; "program" acceptable for software). Standardise, analyse, recognise.

---

## 12 — Reconciliation against legacy

Two parts of v7.0 were stale at the time v7.1 was locked.

### Typography supersession

BRAND_SYSTEM.md v7.0 still lists Source Serif 4 for display and Lato for body. Superseded 13 May 2026 by `GOS/Runtime/00_Meta/Docs/EQUIBT/EQUIBT_Website/Typography_Decision_v1.md`. Both brands now run on Montserrat (SemiBold for H1, Bold for H2+) plus Inter Regular for body, plus Open Sans Medium for nav. Source Serif 4 and Lato should be archived out of `GOS/Branding/Fonts/` to prevent accidental use.

### Petrol Teal value

`COLOUR_USAGE_RULES.md V7.1` lists the LMI contrast colour as Pacific Teal `#008B9E` and writes Rule 1 (white-text contrast failure) against that lighter value. BRAND_SYSTEM.md v7.0 already correctly lists Petrol Teal `#004757`. v7.1 confirms Petrol Teal `#004757` as the locked value. Petrol Teal passes WCAG AA for normal text on white (8.9:1) so the small-white-text restriction does not apply. The restriction remains in force for Terracotta and Amber.

### Retired collateral

1. The blue / pastel-orange / light-grey / coral / leaf-green palette on `LMI_BANNER_DMAIC-2024` and `LMI_BANNER_5S-2025`. Replaced by the Framework Teaching Layer palette.
2. Generic sans-serif headings on framework banners. Replaced by Montserrat SemiBold (titles) and Montserrat Bold (step names).
3. Light grey body text on framework banners. Replaced by Inter Regular at `#2C2C2C`.
4. Pale ghost decorative shapes used as filler on Corporate Layer banners. Removed.
5. Any per-step colour coding on Corporate Layer material. The Corporate Layer carries one brand accent only.

Existing physical banners do not need to be reprinted immediately. Replacement happens at natural refresh, or when a new banner is commissioned.

---

## 13 — Downloads & files

### Logos — locked refined lockups (28 May 2026)

SVG sources are the canonical vector files. PNG masters at multiple sizes are rendered into `exports/` subfolders for placement-ready use (decks, social, favicons, partner kits).

#### LMI — SVG sources
- [`GOS/Branding/Logos/LMI/LMI-LOGO-702_MAIN-R1.svg`](assets/logos/lmi/LMI-LOGO-702_MAIN-R1.svg) — primary lockup (refined 28 May 2026, INSTITUTE left-aligned). 701 is superseded but still present in the folder; delete manually when convenient.
- [`GOS/Branding/Logos/LMI/LMI-LOGO-701_MAIN-R2.svg`](assets/logos/lmi/LMI-LOGO-701_MAIN-R2.svg) — horizontal-constrained variant
- [`GOS/Branding/Logos/LMI/LMI-LOGO-702_MAIN-R1-DARK.svg`](assets/logos/lmi/LMI-LOGO-702_MAIN-R1-DARK.svg) — on dark backgrounds (refined 28 May 2026, matches 702 lockup)
- [`GOS/Branding/Logos/LMI/LMI-LOGO-701_MIN1-R1.svg`](assets/logos/lmi/LMI-LOGO-701_MIN1-R1.svg) — wordmark only
- [`GOS/Branding/Logos/LMI/LMI-LOGO-701_FAV-R2.svg`](assets/logos/lmi/LMI-LOGO-701_FAV-R2.svg) — square icon (favicon, avatar)
- [`GOS/Branding/Logos/LMI/LMI-LOGO-701_EQ LMI.svg`](assets/logos/lmi/LMI-LOGO-701_EQ LMI.svg) — co-branded with EQUIBT

#### LMI — PNG masters
- `GOS/Branding/Logos/LMI/exports/LMI_lockup_{2400,1200,800}w.png` — transparent
- `GOS/Branding/Logos/LMI/exports/LMI_lockup_on-white_{2400,1200}w.png`
- [`GOS/Branding/Logos/LMI/exports/LMI_lockup_on-dark_2400w.png`](assets/logos/lmi/exports/LMI_lockup_on-dark_2400w.png)
- `GOS/Branding/Logos/LMI/exports/LMI_icon_{1024,512,256,128,64}.png` — square icon
- [`GOS/Branding/Logos/LMI/exports/LMI_cobranded_with_EQUIBT_2400w.png`](assets/logos/lmi/exports/LMI_cobranded_with_EQUIBT_2400w.png)

#### EQUIBT — SVG sources
- [`GOS/Branding/Logos/EQUIBT/EQ-LOGO-701_EQ-MAIN-R1.svg`](assets/logos/equibt/EQ-LOGO-701_EQ-MAIN-R1.svg) — primary lockup
- [`GOS/Branding/Logos/EQUIBT/EQ-LOGO-701_EQ-REV-R1.svg`](assets/logos/equibt/EQ-LOGO-701_EQ-REV-R1.svg) — reversed (on dark)
- [`GOS/Branding/Logos/EQUIBT/EQ-LOGO-701_EQ-REV-R2.svg`](assets/logos/equibt/EQ-LOGO-701_EQ-REV-R2.svg) — reversed compact
- [`GOS/Branding/Logos/EQUIBT/EQ-LOGO-701_EQ-LOGO-SQ.svg`](assets/logos/equibt/EQ-LOGO-701_EQ-LOGO-SQ.svg) — square (social, badge)
- [`GOS/Branding/Logos/EQUIBT/EQ-LOGO-701_EQ-LOGO-FAV.svg`](assets/logos/equibt/EQ-LOGO-701_EQ-LOGO-FAV.svg) — favicon
- [`GOS/Branding/Logos/EQUIBT/EQ-LOGO-701_EQ-SML-R1.svg`](assets/logos/equibt/EQ-LOGO-701_EQ-SML-R1.svg) — small horizontal

#### EQUIBT — PNG masters
- `GOS/Branding/Logos/EQUIBT/exports/EQUIBT_lockup_{2400,1200,800}w.png` — transparent
- `GOS/Branding/Logos/EQUIBT/exports/EQUIBT_lockup_on-white_{2400,1200}w.png`
- [`GOS/Branding/Logos/EQUIBT/exports/EQUIBT_lockup_on-dark_2400w.png`](assets/logos/equibt/exports/EQUIBT_lockup_on-dark_2400w.png)
- `GOS/Branding/Logos/EQUIBT/exports/EQUIBT_square_{1024,512}.png` — social, badge
- `GOS/Branding/Logos/EQUIBT/exports/EQUIBT_favicon_{256,128}.png`

### Fonts (Google Fonts)
- Montserrat: <https://fonts.google.com/specimen/Montserrat>
- Inter: <https://fonts.google.com/specimen/Inter>
- Open Sans: <https://fonts.google.com/specimen/Open+Sans>

### Reference docs
- `GOS/Branding/Guidelines/BRAND_SYSTEM.md` (v7.0, requires typography update)
- `GOS/Branding/Guidelines/BRAND_SYSTEM_v7.1_ADDENDUM.md`
- `GOS/Branding/Guidelines/COLOUR_USAGE_RULES.md` (requires Petrol Teal reconciliation)
- `GOS/Runtime/00_Meta/Docs/EQUIBT/EQUIBT_Website/Typography_Decision_v1.md`

---

## 14 — Changelog

| Version | Date | Change |
|---|---|---|
| v7.1 | 28 May 2026 | Framework Teaching Layer introduced. Typography reconciled to Montserrat + Inter (per Typography_Decision_v1.md, 13 May 2026). Petrol Teal value reconciled. Visual brand guideline site built. Web design system and Anti-patterns sections added. All card chrome (1px borders, 2-3px top accent lines) removed in favour of brand-tinted soft shadow. Refined LMI and EQUIBT lockups locked: PNG masters rendered into `exports/` subfolders alongside the SVG sources. |
| v7.0 | 19 May 2026 | Brand system formalised in markdown. LMI Crimson + Petrol Teal, EQUIBT Deep Navy + Terracotta. Logo lockups locked. |
| v6 and earlier | — | Archived. Not authoritative. |

---

_Maintained by Herman Chan. Questions route through Claire. This document supersedes any conflicting earlier guideline._
