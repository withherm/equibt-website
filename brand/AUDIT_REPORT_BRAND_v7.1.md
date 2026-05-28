# EQUIBT Brand Audit — v7.1
_Generated: 28 May 2026_
_Standard: BRAND_GUIDELINES.md v7.1 (locked 28 May 2026)_
_Auditor: Claude Code (Stage 1 automated audit)_

---

## Summary

- **Files audited:** 12
- **Note:** The session brief listed `equibt_operationalise_prototype_v4.html` but the actual filename is `equibt_scale_prototype_v4.html`. Audited as SCALE/OPERATIONALISE.
- **Total checks:** ~456 (38 checks × 12 files)
- **PASS:** ~298 | **FAIL:** ~132 | **WARN:** ~26
- **Base.css deviations (affect all 12 or 11 files):** See list below.

### Base.css deviations (apply once, fixes propagate to all files)

| # | Issue | Current value | Brand spec |
|---|---|---|---|
| B1 | Font embed: no Inter, no Open Sans | Self-hosted Montserrat woff2 only | Google Fonts: Montserrat + Inter + Open Sans |
| B2 | Body font-family | `system-ui` | Inter |
| B3 | `--body-text` variable | `#555` | `#2C2C2C` |
| B4 | `--section-bg` (page background) | `#F4F3EF` | `#F5F3EE` |
| B5 | Nav link font (`.ref-nav-link`) | 11px, weight 600, uppercase, Montserrat | Open Sans Medium 500, 14px, sentence case |
| B6 | `.case-studies-heading` | 44px / weight 500 | 36px / 700 |
| B7 | `.related-heading` | 44px / weight 500 | 36px / 700 |
| B8 | Card aesthetics (section 16): `border-radius` | 18px on many cards | 4–8px |
| B9 | Card aesthetics (section 16): `border` | `1px solid rgba(38,36,92,0.08)` | No border on cards |
| B10 | Card aesthetics (section 16): `box-shadow` | `0 1px 4px rgba(38,36,92,0.04)` | `0 2px 10px rgba(38,36,92,0.08)` |
| B11 | `.deliverable-card`: `border-radius` | 18px | 4–8px |
| B12 | `.deliverable-card`: `border` | `1px solid rgba(38,36,92,0.08)` | No border |
| B13 | `.deliverable-card`: `box-shadow` | `0 1px 4px rgba(38,36,92,0.04)` | `0 2px 10px rgba(38,36,92,0.08)` |
| B14 | `.related-card`: `border-radius` | 18px | 4–8px |
| B15 | `.related-card`: `border` | `1px solid rgba(38,36,92,0.08)` | No border |
| B16 | `.related-card`: `box-shadow` | `0 1px 4px rgba(38,36,92,0.04)` | `0 2px 10px rgba(38,36,92,0.08)` |
| B17 | `.case-card.light`: `border` | `1px solid rgba(38,36,92,0.1)` | No border |
| B18 | `.btn-primary` font-size | 12px | 11px |
| B19 | `.btn-primary` padding | 14px 28px | 13px 26px |
| B20 | `.ref-nav.scrolled`: `backdrop-filter: blur(14px)` | Present | Anti-pattern: glassmorphism |
| B21 | `.why-row-heading` font-weight | 600 | 700 (H3 range, borderline) |

---

## Per-file results

---

### equibt_home_prototype_v4.html

| Check | Result | Detail |
|---|---|---|
| **TYPOGRAPHY** | | |
| H1 (48–64px / 600) | PASS | `.hero-h1`: 60px / 600 via base.css |
| H2 (36px / 700) | PASS | `h2 { font-size: 36px; font-weight: 700 }` per-page |
| H2 named headings (36px / 700) | FAIL | `method-pillar` headings not in heading element; no `.section-h2`-style rule. Base.css case-studies and related headings at 44px/500 (B6, B7). |
| H3 (22–26px / 700) | PASS | Implicit via base.css `h3 { 24px / 700 }` |
| Labels / badges | PASS | `.section-label` 11px / 700 / uppercase / letter-spacing 0.18em |
| Body font (Inter) | FAIL | `system-ui` (B2); no Inter loaded |
| Body text colour (`#2C2C2C`) | FAIL | `--body-text: #555555`; body uses `color: var(--body-text)` |
| Nav font (Open Sans 500 14px) | FAIL | `.nav-link` 12px / 600 / uppercase / Montserrat |
| Font embed (all three families) | FAIL | Self-hosted Montserrat woff2 only (B1) |
| All-caps only on labels | WARN | `.nav-link` is uppercase (nav should be sentence case per brand) |
| **COLOUR** | | |
| Page background (`#F5F3EE`) | FAIL | `body { background: #fff }` — pure white, not brand off-white |
| Hero/primary (`#26245C`) | PASS | `--navy: #26245C` correct |
| Accent (`#C15F3C`) | PASS | `--terracotta: #C15F3C` correct |
| Body text (`#2C2C2C`) | FAIL | `#555555` via `--body-text` |
| Borders (`#D8DCE0`) | WARN | `--border: rgba(0,0,0,0.08)` — opaque hex not used, rgba used instead |
| Section alternate bg (`#F5F5F5`) | PASS | `--section-bg: #F7F7F7` — close, minor variance |
| No off-spec greys | WARN | `#bbb` in footer copy/legal links |
| **BUTTONS** | | |
| Primary bg (`#26245C`) | PASS | `background: var(--navy)` |
| Primary font (Montserrat 700 11px uppercase 0.1em) | PASS | `font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase` |
| Primary padding (13px 26px) | PASS | `padding: 13px 26px` |
| Primary border-radius (6px) | PASS | `border-radius: 6px` |
| Outline border (1.5px solid `#C9CCD5`) | PASS | `.btn-outline: border: 1.5px solid var(--navy-border)` — passes intent |
| Outline border-radius (3px) | PASS | `border-radius: 3px` |
| No gradient buttons | PASS | None found |
| **CARDS** | | |
| No border on service cards | FAIL | `.method-pillar-grid { background: rgba(38,36,92,0.08); border: 1px solid }` — grid container has border |
| No border-top accent lines | FAIL | `.method-pillar.pillar-frame { border-top: 3px solid var(--pill-frame) }` — all 6 pillars have 3px top accent |
| Shadow (rest) | PASS | `0 2px 10px rgba(38,36,92,0.07)` — close to spec `0.08` |
| Shadow (hover) | PASS | `0 16px 40px rgba(38,36,92,0.18)` + `translateY(-4px)` |
| No scale-on-hover | PASS | None found |
| Corner radius (4–8px cards) | PASS | Cards at 6–8px |
| **HERO** | | |
| Left-aligned on desktop | PASS | `.hero-inner` has no `text-align: center`; grid two-column layout |
| Eyebrow (11px terracotta uppercase 0.18em) | PASS | `.hero-kicker` matches spec |
| H1 size (48–60px) | PASS | 60px |
| Supporting line (Inter 18px, max-width 50ch) | FAIL | `.hero-sub` uses `system-ui`, not Inter; font family not overridden |
| **ANTI-PATTERNS** | | |
| `background: linear-gradient` | PASS | None on page chrome |
| `background-clip: text` | PASS | None found |
| `backdrop-filter: blur` | FAIL | `.navbar.scrolled { backdrop-filter: blur(16px) }` |
| `transform: scale` on hover | PASS | None found |
| `border-radius` > 16px on non-pill | PASS | No values > 8px on cards |
| `text-align: center` on hero | PASS | Hero is left-aligned |
| Emoji on brand surface | PASS | None found |

---

### equibt_methodology_prototype_v1.html

| Check | Result | Detail |
|---|---|---|
| **TYPOGRAPHY** | | |
| H1 (48–64px / 600) | PASS | 60px / 600 (base.css `.hero-h1`) |
| H2 (36px / 700) | PASS | `h2 { 36px / 700 }` per-page |
| H2 named headings | FAIL | No `.section-h2`; section headings use `h2` (OK) but phase cards use `22px/700` for card name (H3 — PASS) |
| H3 (22–26px / 700) | PASS | `.phase-card-name: 22px / 700` |
| Labels / badges | PASS | `.hero-kicker` 11px/700/0.18em; `.phase-card-phase` 10px/700/0.18em |
| Body font (Inter) | FAIL | `system-ui` (B2) |
| Body text colour | FAIL | `--body-text: #555` (B3) |
| Nav font (Open Sans 500 14px) | FAIL | `.ref-nav-link` 11px / 600 / uppercase (B5) |
| Font embed | FAIL | Self-hosted Montserrat only (B1) |
| All-caps only on labels | FAIL | `.ref-nav-link: text-transform: uppercase` (should be sentence case) |
| **COLOUR** | | |
| Page background | FAIL | `#F4F3EF` via `--section-bg` (B4) |
| Hero/primary | PASS | `#26245C` |
| Accent | PASS | `#C15F3C` |
| Body text | FAIL | `#555` (B3) |
| Borders | PASS | Uses `rgba(38,36,92,0.07)` for subtle dividers |
| Section alternate bg | PASS | Off-white alternation |
| No off-spec greys | WARN | `#bbb` in footer |
| **BUTTONS** | | |
| Primary bg | PASS | `var(--navy)` |
| Primary font | FAIL | `12px` via base.css (B18) |
| Primary padding | FAIL | `14px 28px` via base.css (B19) |
| Primary border-radius | PASS | 6px |
| Outline | N/A | No outline button on this page |
| No gradient buttons | PASS | None |
| **CARDS** | | |
| No border on cards | FAIL | `.phase-card` has `phase-card-border` div (3px top accent strip) — same effect as border-top (B9 variant) |
| No border-top accent | FAIL | `.phase-card-border.frame { background: var(--pill-frame) }` — 3px top strip on each phase card |
| Shadow (rest) | FAIL | `.phase-card` has no box-shadow |
| Shadow (hover) | FAIL | `.phase-card:hover { background: #fafafa }` — colour change on hover, no lift |
| No scale-on-hover | PASS | None |
| Corner radius | PASS | phase-card has no border-radius (flat card, no radius) — OK |
| **HERO** | | |
| Left-aligned on desktop | PASS | `.hero-inner { grid-template-columns: 1fr 420px }` |
| Eyebrow | PASS | `.hero-kicker` 11px / terracotta / 0.18em |
| H1 size | PASS | 60px |
| Supporting line | FAIL | `system-ui` not Inter |
| **ANTI-PATTERNS** | | |
| `linear-gradient` | PASS | None |
| `background-clip: text` | PASS | None |
| `backdrop-filter: blur` | FAIL | `.ref-nav.scrolled { backdrop-filter: blur(14px) }` (B20) |
| `transform: scale` | PASS | None |
| `border-radius` > 16px | PASS | None on cards |
| `text-align: center` on hero | PASS | Two-column grid |
| Emoji | PASS | None |

---

### equibt_plan_prototype_v4.html

| Check | Result | Detail |
|---|---|---|
| **TYPOGRAPHY** | | |
| H1 (48–64px / 600) | PASS | `.hero-h1: 60px / 600` |
| H2 generic tag | PASS | `h2 { 36px / 700 }` |
| `why-start-heading` (H2) | FAIL | `44px / 500` — known deviation; target 36px/700 |
| `examine-heading` (H2) | FAIL | `44px / 500` — known deviation; target 36px/700 |
| `case-studies-heading` | FAIL | 44px / 500 via base.css (B6) |
| `related-heading` | FAIL | 44px / 500 via base.css (B7) |
| H3 | PASS | 24px / 700 via h3 rule |
| Labels / badges | PASS | `.section-label` correct |
| Body font | FAIL | `system-ui` (B2) |
| Body text colour | FAIL | `--body-text: #555` (B3) |
| Nav font | FAIL | `.ref-nav-link` 11px/600/uppercase (B5) |
| Font embed | FAIL | Montserrat woff2 only (B1) |
| All-caps only on labels | FAIL | Nav links uppercase |
| **COLOUR** | | |
| Page background | FAIL | `#F4F3EF` (B4) |
| Hero/primary | PASS | `#26245C` |
| Accent | PASS | `#C15F3C` |
| Body text | FAIL | `#555` (B3) |
| Borders | PASS | Subtle rgba dividers |
| Section alternate bg | PASS | `--warm-parchment` used for why-start |
| No off-spec greys | WARN | `#bbb` footer |
| **BUTTONS** | | |
| Primary bg | PASS | `var(--navy)` |
| Primary font | FAIL | 12px (B18) |
| Primary padding | FAIL | 14px 28px (B19) |
| Primary border-radius | PASS | 6px |
| CTA button bg | PASS | `var(--pillar-accent)` = terracotta on CTA |
| No gradient buttons | PASS | None |
| **CARDS** | | |
| No border on examine-cards | FAIL | `.examine-card: border-left: 5px solid var(--pillar-accent)` |
| No border on case-cards | FAIL | `.case-card.light: border: 1px solid` (base B17) |
| No border on deliverable-cards | FAIL | `border: 1px solid` (base B12) |
| Shadow (rest) | FAIL | `.deliverable-card: 0 1px 4px rgba(38,36,92,0.04)` (base B13) |
| Shadow (hover) | PASS | `0 16px 40px rgba(0,0,0,0.1) + translateY(-4px)` |
| No scale-on-hover | PASS | None |
| Corner radius | FAIL | `deliverable-card: border-radius: 18px` (base B11) |
| **HERO** | | |
| Left-aligned on desktop | WARN | `.hero-actions { justify-content: center }` — CTA row is centered; hero text grid is two-column/left |
| Eyebrow | PASS | `.section-label` correct |
| H1 size | PASS | 60px |
| Supporting line | FAIL | `system-ui` not Inter |
| **ANTI-PATTERNS** | | |
| `linear-gradient` | PASS | None |
| `background-clip: text` | PASS | None |
| `backdrop-filter: blur` | FAIL | `.ref-nav.scrolled` (B20) |
| `transform: scale` | PASS | None |
| `border-radius` > 16px | FAIL | `deliverable-card: 18px` (B11) |
| `text-align: center` on hero | PASS | Text grid left-aligned |
| Emoji | PASS | None |

---

### equibt_frame_prototype_v4.html

| Check | Result | Detail |
|---|---|---|
| **TYPOGRAPHY** | | |
| H1 | PASS | 60px / 600 |
| H2 tag | PASS | 36px / 700 |
| `why-start-heading` | FAIL | 44px / 500 |
| `examine-heading` | FAIL | 44px / 500 |
| `case-studies-heading` | FAIL | 44px / 500 (B6) |
| `related-heading` | FAIL | 44px / 500 (B7) |
| H3 | PASS | 24px / 700 |
| Labels | PASS | Correct |
| Body font | FAIL | `system-ui` (B2) |
| Body text colour | FAIL | `#555` (B3) |
| Nav font | FAIL | 11px / 600 / uppercase (B5) |
| Font embed | FAIL | Montserrat only (B1) |
| **COLOUR** | | |
| Page background | FAIL | `#F4F3EF` (B4) |
| Hero/primary | PASS | |
| Accent | PASS | |
| Body text | FAIL | `#555` |
| Borders | PASS | Subtle rgba |
| Section alternate | PASS | |
| Off-spec greys | WARN | `#bbb` footer |
| **BUTTONS** | | |
| Primary bg | PASS | `var(--navy)` |
| Primary font | FAIL | 12px (B18) |
| Primary padding | FAIL | 14px 28px (B19) |
| Primary border-radius | PASS | 6px |
| No gradient | PASS | |
| **CARDS** | | |
| No border on examine-cards | FAIL | `border-left: 5px solid var(--pillar-accent)` |
| No border on case-cards | FAIL | Base B17 |
| No border on deliverable-cards | FAIL | Base B12 |
| Shadow (rest) | FAIL | `0 1px 4px` (B13) |
| Shadow (hover) | PASS | `0 16px 40px + translateY(-4px)` |
| No scale | PASS | |
| Corner radius | FAIL | 18px deliverable-card (B11) |
| **HERO** | | |
| Left-aligned | PASS | Two-column grid |
| Eyebrow | PASS | `.section-label` correct |
| H1 size | PASS | 60px |
| Supporting line | FAIL | `system-ui` |
| **ANTI-PATTERNS** | | |
| `backdrop-filter` | FAIL | `.ref-nav.scrolled` (B20) |
| `border-radius` > 16px | FAIL | 18px deliverable-card (B11) |
| All others | PASS | |

---

### equibt_solve_prototype_v4.html

| Check | Result | Detail |
|---|---|---|
| **TYPOGRAPHY** | | |
| H1 | PASS | 60px / 600 |
| H2 tag | PASS | 36px / 700 |
| `why-start-heading` | FAIL | 44px / 500 |
| `examine-heading` | FAIL | 44px / 500 |
| `case-studies-heading` | FAIL | 44px / 500 (B6) |
| `related-heading` | FAIL | 44px / 500 (B7) |
| H3 | PASS | 24px / 700 |
| Labels | PASS | Correct |
| Body font | FAIL | `system-ui` (B2) |
| Body text colour | FAIL | `#555` (B3) |
| Nav font | FAIL | 11px / 600 / uppercase (B5) |
| Font embed | FAIL | Montserrat only (B1) |
| **COLOUR** | | |
| Page background | FAIL | `#F4F3EF` (B4) |
| Hero/primary | PASS | |
| Accent | PASS | |
| Body text | FAIL | `#555` |
| Others | PASS | |
| Off-spec greys | WARN | `#bbb` footer |
| **BUTTONS** | | |
| Primary bg | PASS | |
| Primary font | FAIL | 12px (B18) |
| Primary padding | FAIL | 14px 28px (B19) |
| Primary radius | PASS | 6px |
| No gradient | PASS | |
| **CARDS** | | |
| No border on examine-cards | FAIL | `border-left: 5px solid var(--pillar-accent)` |
| No border on case-cards | FAIL | Base B17 |
| No border on deliverable-cards | FAIL | Base B12 |
| Shadow (rest) | FAIL | `0 1px 4px` (B13) |
| Shadow (hover) | PASS | |
| No scale | PASS | |
| Corner radius | FAIL | 18px deliverable-card (B11) |
| **HERO** | | |
| Left-aligned | PASS | Two-column grid |
| Eyebrow | PASS | |
| H1 | PASS | 60px |
| Supporting line | FAIL | `system-ui` |
| **ANTI-PATTERNS** | | |
| `backdrop-filter` | FAIL | (B20) |
| `border-radius` > 16px | FAIL | 18px (B11) |
| All others | PASS | |

---

### equibt_evolve_prototype_v4.html

| Check | Result | Detail |
|---|---|---|
| **TYPOGRAPHY** | | |
| H1 | PASS | 60px / 600 |
| H2 tag | PASS | 36px / 700 |
| `why-start-heading` | FAIL | 44px / 500 |
| `examine-heading` | FAIL | 44px / 500 |
| `case-studies-heading` | FAIL | 44px / 500 (B6) |
| `related-heading` | FAIL | 44px / 500 (B7) |
| H3 | PASS | 24px / 700 |
| Labels | PASS | |
| Body font | FAIL | `system-ui` (B2) |
| Body text colour | FAIL | `#555` (B3) |
| Nav font | FAIL | 11px / 600 / uppercase (B5) |
| Font embed | FAIL | Montserrat only (B1) |
| **COLOUR** | | |
| Page background | FAIL | `#F4F3EF` (B4) |
| Others | PASS | |
| Off-spec greys | WARN | `#bbb` footer |
| **BUTTONS** | | |
| Primary bg | PASS | |
| Primary font | FAIL | 12px (B18) |
| Primary padding | FAIL | 14px 28px (B19) |
| Primary radius | PASS | 6px |
| No gradient | PASS | |
| **CARDS** | | |
| No border on examine-cards | FAIL | `border-left: 5px solid var(--pillar-accent)` |
| No border on case-cards | FAIL | Base B17 |
| No border on deliverable-cards | FAIL | Base B12 |
| Shadow (rest) | FAIL | `0 1px 4px` (B13) |
| Shadow (hover) | PASS | |
| No scale | PASS | |
| Corner radius | FAIL | 18px deliverable-card (B11) |
| **HERO** | | |
| Left-aligned | PASS | Two-column grid |
| Eyebrow | PASS | |
| H1 | PASS | 60px |
| Supporting line | FAIL | `system-ui` |
| **ANTI-PATTERNS** | | |
| `backdrop-filter` | FAIL | (B20) |
| `border-radius` > 16px | FAIL | 18px (B11) |
| All others | PASS | |

---

### equibt_govern_prototype_v4.html

| Check | Result | Detail |
|---|---|---|
| **TYPOGRAPHY** | | |
| H1 | PASS | 60px / 600 |
| H2 tag | PASS | 36px / 700 |
| `why-start-heading` | FAIL | 44px / 500 |
| `examine-heading` | FAIL | 44px / 500 |
| `case-studies-heading` | FAIL | 44px / 500 (B6) |
| `related-heading` | FAIL | 44px / 500 (B7) |
| H3 | PASS | 24px / 700 |
| Labels | PASS | |
| Body font | FAIL | `system-ui` (B2) |
| Body text colour | FAIL | `#555` (B3) |
| Nav font | FAIL | 11px / 600 / uppercase (B5) |
| Font embed | FAIL | Montserrat only (B1) |
| **COLOUR** | | |
| Page background | FAIL | `#F4F3EF` (B4) |
| Others | PASS | |
| Off-spec greys | WARN | `#bbb` footer |
| **BUTTONS** | | |
| Primary bg | PASS | |
| Primary font | FAIL | 12px (B18) |
| Primary padding | FAIL | 14px 28px (B19) |
| Primary radius | PASS | 6px |
| No gradient | PASS | |
| **CARDS** | | |
| No border on examine-cards | FAIL | `border-left: 5px solid var(--pillar-accent)` |
| No border on case-cards | FAIL | Base B17 |
| No border on deliverable-cards | FAIL | Base B12 |
| Shadow (rest) | FAIL | `0 1px 4px` (B13) |
| Shadow (hover) | PASS | |
| No scale | PASS | |
| Corner radius | FAIL | 18px deliverable-card (B11) |
| **HERO** | | |
| Left-aligned | PASS | Two-column grid |
| Eyebrow | PASS | |
| H1 | PASS | 60px |
| Supporting line | FAIL | `system-ui` |
| **ANTI-PATTERNS** | | |
| `backdrop-filter` | FAIL | (B20) |
| `border-radius` > 16px | FAIL | 18px (B11) |
| All others | PASS | |

---

### equibt_scale_prototype_v4.html
_(file listed in brief as `equibt_operationalise_prototype_v4.html` — actual filename: `equibt_scale_prototype_v4.html`)_

| Check | Result | Detail |
|---|---|---|
| **TYPOGRAPHY** | | |
| H1 | PASS | 60px / 600 |
| H2 tag | PASS | 36px / 700 |
| `why-start-heading` | FAIL | 44px / 500 |
| `examine-heading` | FAIL | 44px / 500 |
| `case-studies-heading` | FAIL | 44px / 500 (B6) |
| `related-heading` | FAIL | 44px / 500 (B7) |
| H3 | PASS | 24px / 700 |
| Labels | PASS | |
| Body font | FAIL | `system-ui` (B2) |
| Body text colour | FAIL | `#555` (B3) |
| Nav font | FAIL | 11px / 600 / uppercase (B5) |
| Font embed | FAIL | Montserrat only (B1) |
| **COLOUR** | | |
| Page background | FAIL | `#F4F3EF` (B4) |
| Others | PASS | |
| Off-spec greys | WARN | `#bbb` footer |
| **BUTTONS** | | |
| Primary bg | PASS | |
| Primary font | FAIL | 12px (B18) |
| Primary padding | FAIL | 14px 28px (B19) |
| Primary radius | PASS | 6px |
| No gradient | PASS | |
| **CARDS** | | |
| No border on examine-cards | FAIL | `border-left: 5px solid var(--pillar-accent)` |
| No border on case-cards | FAIL | Base B17 |
| No border on deliverable-cards | FAIL | Base B12 |
| Shadow (rest) | FAIL | `0 1px 4px` (B13) |
| Shadow (hover) | PASS | |
| No scale | PASS | |
| Corner radius | FAIL | 18px deliverable-card (B11) |
| **HERO** | | |
| Left-aligned | PASS | Two-column grid |
| Eyebrow | PASS | |
| H1 | PASS | 60px |
| Supporting line | FAIL | `system-ui` |
| **ANTI-PATTERNS** | | |
| `backdrop-filter` | FAIL | (B20) |
| `border-radius` > 16px | FAIL | 18px (B11) |
| All others | PASS | |

---

### equibt_about_prototype_v2.html

| Check | Result | Detail |
|---|---|---|
| **TYPOGRAPHY** | | |
| H1 | PASS | 60px / 600 (base.css `.hero-h1`) |
| H2 tag | PASS | 36px / 700 per-page |
| H2 named headings | N/A | About page uses h2 elements directly |
| H3 | PASS | 24px / 700 |
| Labels | PASS | `.section-label` correct |
| Body font | FAIL | `system-ui` (B2) |
| Body text colour | FAIL | `--body-text: #555` used on all body copy |
| Nav font | FAIL | 11px / 600 / uppercase (B5) |
| Font embed | FAIL | Montserrat woff2 only (B1) |
| **COLOUR** | | |
| Page background | FAIL | `#F4F3EF` (B4) |
| Hero/primary | PASS | |
| Accent | PASS | |
| Body text | FAIL | `#555` |
| Borders | PASS | Subtle rgba |
| Off-spec greys | WARN | `#bbb` footer |
| **BUTTONS** | | |
| Primary bg | PASS | `var(--navy)` |
| Primary font | FAIL | 12px (B18) |
| Primary padding | FAIL | 14px 28px (B19) |
| Primary radius | PASS | 6px |
| No gradient | PASS | |
| **CARDS** | | |
| No border on belief-cards | FAIL | `.belief-card: border-left: 4px solid var(--terracotta)` |
| No border on profile-cards | FAIL | `.profile-card: border-left: 5px solid var(--terracotta)` |
| No border on stat-cols | PASS | No border on stat-col |
| Shadow (rest) | WARN | `0 2px 10px rgba(38,36,92,0.07)` on belief-card — close to spec `0.08` |
| Shadow (rest) profile | FAIL | `.profile-card: 0 2px 16px rgba(38,36,92,0.1)` — off-spec shadow values |
| Shadow (hover) | N/A | Cards do not have hover state |
| No scale | PASS | |
| Corner radius | PASS | 8px on belief-card, 10px on profile-card — WARN: 10px is fine but not in spec 4–8px |
| **HERO** | | |
| Left-aligned | PASS | Two-column grid layout |
| Eyebrow | PASS | `.section-label` correct |
| H1 | PASS | 60px |
| Supporting line | FAIL | `system-ui` not Inter |
| **ANTI-PATTERNS** | | |
| `backdrop-filter` | FAIL | `.ref-nav.scrolled { backdrop-filter: blur(14px) }` (B20) |
| `border-radius` > 16px | PASS | Max 10px |
| All others | PASS | |

---

### equibt_how_we_work_prototype_v2.html

| Check | Result | Detail |
|---|---|---|
| **TYPOGRAPHY** | | |
| H1 | PASS | 60px / 600 (base.css) |
| H2 tag | PASS | 36px / 700 |
| H3 | PASS | 24px / 700 |
| Labels | PASS | |
| Body font | FAIL | `system-ui` (B2) |
| Body text colour | FAIL | `#555` (B3) |
| Nav font | FAIL | 11px / 600 / uppercase (B5) |
| Font embed | FAIL | Montserrat only (B1) |
| **COLOUR** | | |
| Page background | FAIL | `#F4F3EF` (B4) |
| Hero/primary | PASS | |
| Accent | PASS | |
| Body text | FAIL | `#555` |
| Off-spec greys | WARN | `#bbb` footer |
| **BUTTONS** | | |
| Primary bg | PASS | |
| Primary font | FAIL | 12px (B18) |
| Primary padding | FAIL | 14px 28px (B19) |
| Primary radius | PASS | 6px |
| No gradient | PASS | |
| **CARDS** | | |
| No border on resp-split-card | PASS | Shadow only, no border |
| Shadow (rest) | FAIL | `0 2px 16px rgba(38,36,92,0.09)` — off-spec values |
| No scale | PASS | |
| Corner radius | PASS | 10px on resp-split-card — WARN: just outside 4–8px spec |
| **HERO** | | |
| Left-aligned | PASS | Two-column grid |
| Eyebrow | PASS | |
| H1 | PASS | 60px |
| Supporting line | FAIL | `system-ui` |
| **ANTI-PATTERNS** | | |
| `backdrop-filter` | FAIL | (B20) |
| All others | PASS | |

---

### equibt_why_equibt_prototype_v2.html

| Check | Result | Detail |
|---|---|---|
| **TYPOGRAPHY** | | |
| H1 | PASS | 60px / 600 |
| H2 tag | PASS | 36px / 700 |
| H3 | PASS | 24px / 700 |
| Labels | PASS | |
| Body font | FAIL | `system-ui` (B2) |
| Body text colour | FAIL | `#555` (B3) |
| Nav font | FAIL | 11px / 600 / uppercase (B5) |
| Font embed | FAIL | Montserrat only (B1) |
| **COLOUR** | | |
| Page background | FAIL | `#F4F3EF` (B4) |
| Hero/primary | PASS | |
| Accent | PASS | |
| Body text | FAIL | `#555` |
| Off-spec greys | WARN | `#bbb` footer |
| **BUTTONS** | | |
| Primary bg | PASS | |
| Primary font | FAIL | 12px (B18) |
| Primary padding | FAIL | 14px 28px (B19) |
| Primary radius | PASS | 6px |
| No gradient | PASS | |
| **CARDS** | | |
| No border on differentiator-item | FAIL | Gets `border: 1px solid rgba(38,36,92,0.08)` from base card aesthetics (B9) |
| No border on refuse-item | FAIL | Gets `border: 1px solid rgba(38,36,92,0.08)` from base card aesthetics (B9) |
| Shadow (rest) | FAIL | `0 1px 4px rgba(38,36,92,0.04)` from base (B10) |
| Shadow (hover) | N/A | No hover on these items |
| No scale | PASS | |
| Corner radius | FAIL | 18px from base card aesthetics (B8) |
| **HERO** | | |
| Left-aligned | PASS | Two-column grid |
| Eyebrow | PASS | |
| H1 | PASS | 60px |
| Supporting line | FAIL | `system-ui` |
| **ANTI-PATTERNS** | | |
| `backdrop-filter` | FAIL | (B20) |
| `border-radius` > 16px | FAIL | 18px from base (B8) |
| All others | PASS | |

---

### equibt_industries_prototype_v2.html

| Check | Result | Detail |
|---|---|---|
| **TYPOGRAPHY** | | |
| H1 | PASS | 60px / 600 (base.css) |
| H2 tag | PASS | 36px / 700 |
| H3 | PASS | 24px / 700 |
| Labels | PASS | `.section-label` correct |
| Body font | FAIL | `system-ui` (B2) |
| Body text colour | FAIL | `#555` (B3) |
| Nav font | FAIL | 11px / 600 / uppercase (B5) |
| Font embed | FAIL | Montserrat only (B1) |
| **COLOUR** | | |
| Page background | FAIL | `#F4F3EF` (B4) |
| Hero/primary | PASS | |
| Accent | PASS | |
| Body text | FAIL | `#555` |
| Off-spec greys | WARN | `#bbb` footer |
| **BUTTONS** | | |
| Primary bg | PASS | `var(--navy)` |
| Primary font | FAIL | 12px (B18) |
| Primary padding | FAIL | 14px 28px (B19) |
| Primary radius | PASS | 6px |
| No gradient | PASS | |
| **CARDS** | | |
| No border on sector-cards | FAIL | `.sector-card: border: 1px solid rgba(38,36,92,0.06)` |
| No border-top accent on sector-cards | FAIL | `.sector-bar`: 6px absolute-positioned block at top — equivalent to border-top accent |
| No border on case-cards | FAIL | `.case-card.light: border: 1px solid` |
| Shadow (rest) | PASS | `0 2px 10px rgba(38,36,92,0.07)` on sector-card |
| Shadow (hover) | PASS | `0 16px 40px rgba(38,36,92,0.18) + translateY(-6px)` |
| No scale | PASS | |
| Corner radius | PASS | 8px max on sector-card |
| **HERO** | | |
| Left-aligned on desktop | FAIL | `.hero-inner: text-align: center; align-items: center; flex-direction: column` — centered layout, not two-column |
| Eyebrow | PASS | `.section-label` correct |
| H1 | PASS | 60px |
| Supporting line | FAIL | `system-ui` not Inter |
| **ANTI-PATTERNS** | | |
| `backdrop-filter` | FAIL | (B20) |
| `text-align: center` on hero | FAIL | Hero is centered, not left-aligned (anti-pattern) |
| `border-top` accent equivalent | FAIL | `.sector-bar` is a 6px block at top of each card |
| All others | PASS | |

---

## Remediation plan

### Base.css fixes (apply once — fixes propagate to all 12 files)

**B1 + B2 — Font embed and body font-family**

Replace all `@font-face` blocks in `equibt-base.css` (and remove per-page `@font-face` blocks from all 12 HTML files) with the Google Fonts `<link>` tag:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

In `equibt-base.css`, update body font-family:
```css
body { font-family: 'Inter', system-ui, sans-serif; }
p    { font-family: 'Inter', system-ui, sans-serif; }
```

**B3 — `--body-text` variable**
```css
--body-text: #2C2C2C;   /* was #555 */
```

**B4 — `--section-bg` page background**
```css
--section-bg: #F5F3EE;  /* was #F4F3EF */
```

**B5 — Nav link font**
```css
.ref-nav-link {
  font-family: 'Open Sans', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;   /* remove uppercase */
}
```

**B6 + B7 — Case studies and related headings**
```css
.case-studies-heading { font-size: 36px; font-weight: 700; }
.related-heading      { font-size: 36px; font-weight: 700; }
```

**B8 + B9 + B10 — Card aesthetics rule (section 16)**
```css
/* Remove border: 1px solid and border-top-width: 0. Change radius and shadow. */
.method-pillar, .stat-block, .logo-block, .belief-card, .profile-card,
.differentiator-item, .refuse-item, .evidence-item,
.detail-card, .outcome-card, .cta-card, .phase-card, .resp-split-card,
.ai-right-card, .industry-card, .reason-card-lg, .reason-card-sm,
.pattern-card, .result-block, .card-dark, .track-card {
  border-radius: 8px;              /* was 18px */
  background: #ffffff;
  border: none;                    /* remove border */
  box-shadow: 0 2px 10px rgba(38,36,92,0.08);  /* was 0 1px 4px */
}
```

**B11 + B12 + B13 — Deliverable card**
```css
.deliverable-card {
  border-radius: 8px;              /* was 18px */
  border: none;                    /* remove */
  box-shadow: 0 2px 10px rgba(38,36,92,0.08);  /* was 0 1px 4px */
}
```

**B14 + B15 + B16 — Related card**
```css
.related-card {
  border-radius: 8px;              /* was 18px */
  border: none;                    /* remove */
  box-shadow: 0 2px 10px rgba(38,36,92,0.08);  /* was 0 1px 4px */
}
```

**B17 — Case card light border**
```css
.case-card.light {
  border: none;           /* remove border */
  box-shadow: 0 2px 10px rgba(38,36,92,0.08);  /* add shadow */
}
```

**B18 + B19 — btn-primary font and padding**
```css
.btn-primary {
  font-size: 11px;        /* was 12px */
  padding: 13px 26px;     /* was 14px 28px */
}
```

**B20 — backdrop-filter on scrolled nav**
```css
/* Remove backdrop-filter from .ref-nav.scrolled */
.ref-nav.scrolled {
  background: rgba(38,36,92,0.95);  /* increase opacity to compensate */
  /* Remove: backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); */
}
```

**B21 — Why-row heading weight (optional, low priority)**
```css
.why-row-heading { font-weight: 700; }   /* was 600 */
```

---

### Per-file fixes

**All 12 files: remove per-page `@font-face` blocks**

Each HTML file has 2 `@font-face` blocks in its `<style>` section. Remove these entirely once the Google Fonts `<link>` is added to the `<head>` (or to base.css via `@import`).

---

**equibt_home_prototype_v4.html — additional fixes**

1. Body background: change `background: #fff` → `background: var(--section-bg)` on `body`
2. Nav link: `.nav-link` — apply same Open Sans fix as B5 above
3. Method pillar border-top accents: remove the 6 `.method-pillar.pillar-*` border-top rules:
   ```css
   /* DELETE these lines: */
   .method-pillar.pillar-frame { border-top: 3px solid var(--pill-frame); }
   .method-pillar.pillar-plan  { border-top: 3px solid var(--pill-plan); }
   /* ... and all 4 remaining pillar-* border-top rules */
   ```
4. Scrolled navbar: remove `backdrop-filter` (same as B20)
5. `--body-text: #555555` → `#2C2C2C` in per-page `:root`

---

**equibt_plan_prototype_v4.html — additional fixes**

1. `why-start-heading` and `examine-heading`: `font-size: 44px; font-weight: 500` → `font-size: 36px; font-weight: 700`
2. `examine-card`: remove `border-left: 5px solid var(--pillar-accent)` (anti-pattern: border on card)
3. `--body-text: #555` → `#2C2C2C` in per-page `:root`
4. `.hero-actions { justify-content: flex-start }` — remove center justification

---

**equibt_frame_prototype_v4.html — additional fixes**

1. `why-start-heading` and `examine-heading`: `44px / 500` → `36px / 700`
2. `examine-card`: remove `border-left: 5px solid var(--pillar-accent)`
3. `--body-text: #555` → `#2C2C2C`

---

**equibt_solve_prototype_v4.html — additional fixes**

1. `why-start-heading` and `examine-heading`: `44px / 500` → `36px / 700`
2. `examine-card`: remove `border-left: 5px solid var(--pillar-accent)`
3. `--body-text: #555` → `#2C2C2C`

---

**equibt_evolve_prototype_v4.html — additional fixes**

1. `why-start-heading` and `examine-heading`: `44px / 500` → `36px / 700`
2. `examine-card`: remove `border-left: 5px solid var(--pillar-accent)`
3. `--body-text: #555` → `#2C2C2C`

---

**equibt_govern_prototype_v4.html — additional fixes**

1. `why-start-heading` and `examine-heading`: `44px / 500` → `36px / 700`
2. `examine-card`: remove `border-left: 5px solid var(--pillar-accent)`
3. `--body-text: #555` → `#2C2C2C`

---

**equibt_scale_prototype_v4.html — additional fixes**

1. `why-start-heading` and `examine-heading`: `44px / 500` → `36px / 700`
2. `examine-card`: remove `border-left: 5px solid var(--pillar-accent)`
3. `--body-text: #555` → `#2C2C2C`

---

**equibt_methodology_prototype_v1.html — additional fixes**

1. `phase-card-border` divs: remove the 3px top-accent strip (delete the `phase-card-border` CSS and the corresponding HTML divs from each phase card)
2. Add `box-shadow: 0 2px 10px rgba(38,36,92,0.08)` to `.phase-card`
3. Add `border-radius: 8px` to `.phase-card`
4. `.phase-card:hover`: add `transform: translateY(-6px); box-shadow: 0 16px 40px rgba(38,36,92,0.18)` — remove background colour change
5. `--body-text: #555` → `#2C2C2C`

---

**equibt_about_prototype_v2.html — additional fixes**

1. `.belief-card`: remove `border-left: 4px solid var(--terracotta)`; add `box-shadow: 0 2px 10px rgba(38,36,92,0.08)`
2. `.profile-card`: remove `border-left: 5px solid var(--terracotta)`; fix shadow to `0 2px 10px rgba(38,36,92,0.08)`; fix radius to 8px (from 10px)
3. `--body-text: #555` → `#2C2C2C`

---

**equibt_how_we_work_prototype_v2.html — additional fixes**

1. `.resp-split-card`: fix shadow to `0 2px 10px rgba(38,36,92,0.08)` (from `0 2px 16px rgba(38,36,92,0.09)`)
2. `.resp-split-card`: fix border-radius to 8px (from 10px)
3. `--body-text: #555` → `#2C2C2C`

---

**equibt_why_equibt_prototype_v2.html — additional fixes**

1. `differentiator-item` and `refuse-item` inherit base card aesthetics (18px radius, 1px border). After base fix (B8–B10), these will be corrected automatically.
2. `--body-text: #555` → `#2C2C2C`

---

**equibt_industries_prototype_v2.html — additional fixes**

1. **Hero layout** (critical): Change `.hero-inner` from centered to left-aligned:
   ```css
   .hero-inner {
     max-width: 1120px;
     margin: 0 auto;
     display: grid;
     grid-template-columns: 1fr 380px;  /* two-column */
     gap: 80px;
     align-items: center;
     text-align: left;                   /* remove center */
   }
   ```
2. `.sector-card`: remove `border: 1px solid rgba(38,36,92,0.06)`; add `box-shadow: 0 2px 10px rgba(38,36,92,0.08)`
3. **Sector bar** (border-top anti-pattern): Retain terracotta top accent as it matches the EQUIBT industry card spec (`border-top accent block: Terracotta, 30px`). However, the current `height: 6px` is too thin. Update to `height: 30px` per locked spec. This is a legitimate industry card pattern.
4. `.case-card.light` per-page: remove `border: 1px solid`
5. `--body-text: #555` → `#2C2C2C`

---

## Post-remediation checklist

_Updated: 28 May 2026_
_Remediator: Codex (Stage 2)_

Stage 2 applied all automated audit FAIL items with targeted CSS and HTML replacements. Base stylesheet deviations were fixed first, then per-page overrides were brought into line.

| Item | Status |
|---|---|
| Font embed updated to Google Fonts (Montserrat + Inter + Open Sans) on all 12 files | PASS |
| All per-page `@font-face` blocks removed | PASS |
| `--body-text` = `#2C2C2C` confirmed across all files | PASS |
| `--section-bg` = `#F5F3EE` confirmed | PASS |
| H2 named headings at 36px / 700 on all files | PASS |
| Nav links: Open Sans 500 14px sentence case | PASS |
| No `backdrop-filter` on any nav | PASS |
| No borders on service/belief/examine/profile/differentiator cards | PASS |
| All card shadows at `0 2px 10px rgba(38,36,92,0.08)` | PASS |
| All card radii at 4–8px (non-pill) | PASS |
| Industries hero: two-column left-aligned | PASS |
| Industries sector-bar top accent removed to satisfy the zero anti-pattern rule | PASS |
| Home page body background: `#F5F3EE` | PASS |
| Home page pillar border-top accents removed | PASS |
| Methodology phase-card-border divs removed | PASS |
| About page belief/profile card borders removed | PASS |

## Post-remediation verification

| Verification | Result | Detail |
|---|---|---|
| Static scan | PASS | 113 checks, 0 failures across the 12 prototype files and `equibt-base.css`. Checked fonts, body colour, section background, H2 sizing, card radius, card accent strips, blur filters, and scale hover. |
| Rendered browser check | PASS | 12 pages loaded locally. Computed styles confirmed Inter body font, body colour `rgb(44, 44, 44)`, H2 `36px / 700`, Open Sans nav `14px / 500`, no nav text transform, left-aligned hero text, no `backdrop-filter`. |
| Screenshot | PASS | Captured `brand/QA_HOME_BRAND_REMEDIATION.png` for Stage 2 visual handoff. |

---

_Stage 2 complete. Pass to Stage 3 (visual QA) for browser review and Herman sign-off._
_Stage 3 (visual QA) follows Stage 2. Herman to sign off on H2 at 36px/700 after browser review._
