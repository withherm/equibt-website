# AUDIT_PART1_CODEX.md

Created: 2026-05-27
Auditor: Codex
Scope: Independent Part 1 compliance audit of the 12 active EQUIBT prototype files against `EQUIBT_WEBSITE_DESIGN_SYSTEM_v1.md`.

Note: the requested path says `GOS/Repos/equibt-website/`. The live repo found in this workspace is `GOS-OBSIDIAN/REPOS/equibt-website/`, so this report is saved there.

## Executive summary

The prototypes are not compliant with the locked design system. The most material issue is CSS architecture: every audited file contains late-stage override/injection CSS and very high `!important` usage. Several final rendered values are controlled by injected rules rather than source CSS.

Highest-priority failures:

1. **FAIL: CSS injection exists in all 12 files.** The design system hard rule says no CSS injection.
2. **FAIL: Home hero final background is off-white, not navy.** Source is white, late injection changes `.hero` to `var(--off-white) !important`; expected home hero is navy.
3. **FAIL: Service page hero source background is navy, then changed by injection.** Final is `var(--off-white) !important`; expected final is white.
4. **FAIL: Numbered labels are visible across service, methodology, and about-section pages.** Examples: `.why-row-num`, `.examine-card-number`, `.phase-number-bg`.
5. **FAIL: Case study structure is not Problem / Approach / Outcomes.** Current structure uses stat/outcome/situation/result.
6. **FAIL/WARN: Typography is inconsistent.** Many source values deviate and rely on injections. Body copy is 16px on service pages and industries page instead of 17px.
7. **FAIL: Buttons do not match the locked component spec.** Primary buttons often use terracotta outside CTA panels and 3-4px radius instead of 6px.
8. **WARN/FAIL: Card backgrounds are mostly corrected by final injection, but source and earlier injection layers contain non-white/tinted/navy card treatments.**

## Files audited

| # | File | Page type |
|---|---|---|
| 1 | `prototypes/equibt_home_prototype_v4.html` | Home |
| 2 | `prototypes/equibt_methodology_prototype_v1.html` | Methodology |
| 3 | `prototypes/equibt_frame_prototype_v4.html` | Service: FRAME |
| 4 | `prototypes/equibt_plan_prototype_v4.html` | Service: PLAN |
| 5 | `prototypes/equibt_solve_prototype_v4.html` | Service: SOLVE |
| 6 | `prototypes/equibt_evolve_prototype_v4.html` | Service: EVOLVE |
| 7 | `prototypes/equibt_govern_prototype_v4.html` | Service: GOVERN |
| 8 | `prototypes/equibt_operationalise_prototype_v4.html` | Service: OPERATIONALISE |
| 9 | `prototypes/equibt_about_prototype_v2.html` | About |
| 10 | `prototypes/equibt_how_we_work_prototype_v2.html` | How we work |
| 11 | `prototypes/equibt_why_equibt_prototype_v2.html` | Why EQUIBT |
| 12 | `prototypes/equibt_industries_prototype_v2.html` | Industries |

## Check 1: CSS architecture

Any injection is a hard-rule failure. Counts below use comment-marked patch, override, injection, final-refinement, and global-rule blocks as injection-like layers.

| File | Injection-like blocks | `!important` count | Notes on overridden properties |
|---|---:|---:|---|
| `equibt_home_prototype_v4.html` | 21 | 192 | `.hero`, `.method-pillar`, `.industry-card`, `.stat-block`, `.section-label`, `.btn*`, card backgrounds, and SVG colours are overridden after source. |
| `equibt_methodology_prototype_v1.html` | 25 | 223 | Hero H1, card backgrounds, industry cards, method pillars, stat blocks, and CTA/button colours are overridden. |
| `equibt_frame_prototype_v4.html` | 15 | 243 | `.hero` source navy, interim white, final off-white. Card backgrounds and typography heavily overridden. |
| `equibt_plan_prototype_v4.html` | 15 | 243 | Same service-page override stack; `.section-heading` remains divergent in source. |
| `equibt_solve_prototype_v4.html` | 15 | 243 | Same service-page override stack; `.section-heading` remains divergent in source. |
| `equibt_evolve_prototype_v4.html` | 15 | 243 | Same service-page override stack. |
| `equibt_govern_prototype_v4.html` | 15 | 243 | Same service-page override stack. |
| `equibt_operationalise_prototype_v4.html` | 15 | 243 | Same service-page override stack. |
| `equibt_about_prototype_v2.html` | 20 | 384 | Highest override load. Hero, cards, carousel, buttons, and background colours are all patched late. |
| `equibt_how_we_work_prototype_v2.html` | 16 | 259 | Hero, buttons, cards, and numbered rows overridden. |
| `equibt_why_equibt_prototype_v2.html` | 19 | 352 | Hero, differentiators, refuse items, buttons, and numbered rows overridden. |
| `equibt_industries_prototype_v2.html` | 15 | 253 | Hero, case cards, sector cards, buttons, and background hierarchy overridden. |

**FAIL:** All 12 files violate hard rule 9: no CSS injection.

**Source vs final control:**

| Element | Source state | Final state |
|---|---|---|
| Home hero H1 | Source `.hero h1` is 52px/600 but colour is near-black/navy on a light hero. | Late injection sets `.hero h1` navy and `.hero` off-white. Final hero does not match home navy treatment. |
| Service hero H1 | Source service pages use dark/navy hero patterns and then patch to 52px/600. | Final H1 is 52px/600/navy via `!important`; final value is injected, not clean source. |
| Section H2 | Some page-specific H2s are source-divergent, e.g. PLAN `.section-heading` 46px/700. | Late rules do not consistently normalise every H2 selector because many pages use custom heading classes. |
| Card backgrounds | Source and mid-injection layers include navy, terracotta tint, navy wash, and featured-card treatments. | Last "ALL CARDS WHITE" injection forces most card classes white. Final compliance is injection-dependent. |

## Check 2: Colour violations

### Navy as background

**Permitted:** `.ref-nav` backgrounds on all non-home pages and home nav treatment.  
**Not permitted:** cards, sections, and containers.

Findings:

| Status | File(s) | Selector / element | Actual | Expected |
|---|---|---|---|---|
| FAIL | Home | `.hero` | Source `var(--white)`, final `var(--off-white) !important` | Home hero navy `#26245C` |
| FAIL | Service pages 3-8 | `.hero` | Source `background: var(--navy)`, later final `var(--off-white) !important` | Final service hero `#FFFFFF`; source should not be navy |
| FAIL | Service pages 3-8 | `.case-card.navy` | Source `background: var(--navy)` | Case cards are card surfaces and should be white |
| FAIL | About/how/why/industries | `.hero` | Source navy in several files, later final white | Source should be white for about-section heroes |
| FAIL | About-section files | Footer/site-footer source | `background: var(--navy)` appears on footer rules | Footer expected white |
| WARN | All service pages | `.case-sector`, hidden placeholder divs, artwork gradients | navy tints via `rgba(38,36,92,...)` | Some may be decorative/labels, but card/container tinting should be reviewed |

### Terracotta as background

Findings:

| Status | File(s) | Selector / element | Actual | Expected |
|---|---|---|---|---|
| FAIL | All non-home pages | `.ref-nav-cta`, `.btn-primary`, `.cta-button` | `background: var(--terracotta)` outside CTA panel context | Primary CTA default should be navy; terracotta only on dark CTA panel per spec |
| FAIL | About-section files | `.hero .btn-cta`, `.hero .cta-button`, `.hero a[class*="btn"]` | late injection `background: var(--terracotta) !important` | Hero on light background should use navy primary button |
| FAIL | Several files | `.card-tint`, `.differentiator-item:nth-child(6)`, `.industry`, `.stat-block:nth-child(2)` and similar mid-injections | terracotta-tinted card backgrounds | All card surfaces white |
| OK | SVG focal circles | `<circle fill="#C15F3C">` | permitted | permitted |

### Non-white card backgrounds

Final injection fixes many card backgrounds to white, but source and mid-layer CSS still violate the rule.

| Status | File(s) | Selector / element | Actual | Expected |
|---|---|---|---|---|
| FAIL | Home | `.method-pillar` | Source `var(--off-white)`; final white only via injection | Source and final should be white |
| FAIL | Home | `.stat-block:nth-child(2)` | Mid-layer terracotta tint | White card surface |
| FAIL | Service pages | `.case-card.navy` | Source navy | White case card |
| FAIL | About/why/how/industries | `.differentiator-item`, `.refuse-item`, `.industry-card`, `.belief-card`, `.case-card` variants | Multiple mid-layer tint/dark treatments | White card surface |
| FAIL | Industries | `.case-card.light` | Source includes `border-left: 4px solid var(--terracotta)` | No left-border blockquote/card accent if used for case result styling; card should be standard white surface |

### Pillar pill colours outside permitted uses

| Status | File(s) | Selector / element | Actual | Expected |
|---|---|---|---|---|
| WARN | Service/about pages | `.pillar-tag.*` | Uses `--pill-*` variables | Spec names permitted pill selector as `.method-phase-tag`; `.pillar-tag` appears to be the local equivalent, but selector naming differs |
| FAIL | Home | `.method-pillar.pillar-operationalise` final mid-layer | border-top changed to `var(--terracotta)` in one injection before last reset | Pillar top border should use `--pill-operationalise` |

## Check 3: Typography

Expected desktop values:

- Hero H1: 52px / 600 / -0.03em / 1.06
- Statement: 52px / 600 / -0.03em
- Section H2: 44px / 500 / -0.02em
- Card title: 17-19px / 600 / near-black
- Body: 17px / 400 / 1.75 / #555
- Stat number: 56px / 700 / terracotta
- Kicker: 10px / 700 / 0.14em / terracotta
- Pill: 10px / 700 / 0.10em / white

Findings:

| Status | File(s) | Element | Actual | Expected |
|---|---|---|---|---|
| FAIL | Methodology | `.hero-h1` | Source 72px/500; one parser pass shows conflicting `.hero-h1-sub` influence; final intended 52px is injection-dependent | 52px/600 source truth |
| FAIL | Service pages 3-8 | `.hero-h1` | Final 52px/600 via `!important`; source is patched | 52px/600 in source |
| FAIL | Home | `.hero h1` | 52px/600 but final colour/navy and hero background make it an about/service-style hero, not white-on-navy home hero | Home hero H1 should be white on navy |
| FAIL | Home | `.statement-text` | 52px/600, line-height 1.08 | Expected line-height 1.06 |
| FAIL | PLAN | `.section-heading` | 46px/700/-0.025em, white | 44px/500/-0.02em, near-black unless on dark CTA |
| FAIL | SOLVE | `.section-heading` | 46px/700/-0.025em | 44px/500/-0.02em |
| WARN | About | `.section-heading` | 44px/500 but letter-spacing -0.025em | Expected -0.02em |
| FAIL | Service pages 3-8 | `p` body copy | 16px / 1.75 | 17px / 1.75 |
| FAIL | Industries | `p` body copy | 16px / 1.8 | 17px / 1.75 |
| FAIL | Home | `.method-pillar-desc` | 14px | Body/card description expected 17px unless deliberately compact, minimum not specified below body scale |
| WARN | Home | `.industry-desc` | 15px / 1.7 | Body copy expected 17px / 1.75 |
| FAIL | Home | `.stat-num` | 64px/700 | 56px/700 |
| FAIL | About | `.stat-num` | 64px/600 | 56px/700 |
| FAIL | About | `.stat-label` | 14px | Minimum 16px |
| WARN | Most files | `.section-label` | 11px / 0.18em | 10px / 0.14em |
| WARN | Home | `.method-phase-tag` | 9px / 0.14em | 10px / 0.10em |

Service-page hero colour check: service page hero H1s are navy in final, which matches the about/service hero colour intent. The fail is that final values are injection-dependent and hero background final is off-white, not white.

## Check 4: Hard rules

| Rule | Result | Evidence |
|---|---|---|
| 1. Navy background fill | FAIL | Source `.hero` navy on service/about-section pages; `.case-card.navy`; footer navy in several files. Some fixed by final injection, but source violates rule. Home hero also fails because final is not navy where it should be. |
| 2. Card backgrounds white | FAIL | Final injection forces many cards white, but source/mid-layer CSS includes off-white, navy, terracotta tint, and navy wash card backgrounds. |
| 3. Hero H1 52px / 600 | FAIL | Final mostly 52px/600 via injection; source values are divergent in methodology and service/about families. Hard rule requires source truth, not injected correction. |
| 4. Section H2 44px / 500 | FAIL | PLAN and SOLVE show 46px/700 `.section-heading`; many pages use custom H2 selectors not normalised by the locked selector. |
| 5. No terracotta background fill | FAIL | Terracotta primary buttons outside CTA panels; injected terracotta card tints; hero button injections. |
| 6. No numbered labels | FAIL | Visible `01-06` labels exist in methodology `.phase-number-bg`, service `.why-row-num` and `.examine-card-number`, and about/how/industries `.why-row-num`. Home `.method-pillar-num` is low opacity, but still present. |
| 7. No left-border blockquote styling | FAIL | `case-card.light` in industries uses `border-left: 4px solid var(--terracotta)`; case result styles include left-border colour patterns. |
| 8. Client references anonymous | FLAG | Case references are anonymous sectors. About bio names GE and AGSM as credentials/training, not clients, but they are named organisations and need Herman decision. |
| 9. No CSS injection | FAIL | All 12 files contain injection/override blocks. |
| 10. Service pages: 4 deliverables each | PASS | Each service file has exactly 4 `.deliverable-card` elements. |
| 11. Case stat standalone | FAIL | Several outcome headlines restate or embed the stat concept: e.g. EVOLVE "6 weeks" and "week seven"; GOVERN "3 weeks" and "week three"; OPERATIONALISE "4" and "four regions/business units"; PLAN "32%" and 32% in situation/outcome area. |
| 12. Case study structure | FAIL | Current case cards use `.case-stat`, `.case-outcome`, `.case-situation`, `.case-result`, not Problem / Approach / Outcomes. |

## Check 5: Connected pillar grid

### Home

| Item | Result | Evidence |
|---|---|---|
| 3 columns | PASS source | `.method-pillar-grid { grid-template-columns: repeat(3, 1fr); }` |
| 1px gap | FAIL final | Source has `gap: 1px`; injection changes grid/card aesthetic to separated 12px gap and transparent background. |
| Parent background `rgba(38,36,92,0.08)` | FAIL final | Source has correct value; injection changes `background: transparent !important`. |
| 6 pillar cards | PASS | Six `.method-pillar` elements. |
| Correct coloured top borders | WARN | Source uses correct pillar colours. Later injections temporarily alter OPERATIONALISE to terracotta and final all-card reset removes top borders via `border-top: none !important`; likely final fail. |
| White cards | PASS final / FAIL source | Source cards are `var(--off-white)`; final injection makes them white. |
| Background numbers non-visible | FLAG | `.method-pillar-num` colour `rgba(38,36,92,0.045)` is below the ~0.06 threshold, but visible labels still exist in DOM. |

### Methodology

The methodology page does not use `.method-pillar-grid`; it uses phase cards with visible `.phase-number-bg` labels. This fails the "no numbered labels" hard rule and does not match the connected 3-column pillar grid requirement if the methodology page is expected to share the same connected grid component.

## Check 6: Home industry card SVGs

| Item | Result | Evidence |
|---|---|---|
| Four industry SVGs | PASS | Four `viewBox="0 0 280 160"` SVGs in the industry cards. |
| ViewBox | PASS | All four industry SVGs use `0 0 280 160`. |
| Low-poly gem style | PASS | Each has 18 path faces, navy linework, terracotta focal circle, open-circle nodes. |
| No old schematic elements | PASS for the four industry SVGs | The four 280x160 industry SVGs contain no `<line>`, `<rect>`, or `<polyline>` elements. |
| `.industry-visual` container height | FLAG | CSS sets no explicit height; SVG is `width: 100%; height: auto;`. Likely no clipping, but container is not locked to 280x160 aspect ratio. |

Note: Home contains other non-industry SVGs with lines/rects/polylines, but the four industry card SVGs themselves comply.

## Check 7: Service page gem illustrations

| File | Result | Evidence |
|---|---|---|
| FRAME | PASS | Hero SVG uses `viewBox="0 0 440 380"` and locked FRAME coordinates/topology. |
| PLAN | PASS | Hero SVG uses locked PLAN coordinates/topology. |
| SOLVE | PASS | Hero SVG uses locked SOLVE coordinates/topology. |
| EVOLVE | PASS | Hero SVG uses locked EVOLVE coordinates/topology. |
| GOVERN | PASS | Hero SVG uses locked GOVERN coordinates/topology. |
| OPERATIONALISE | PASS | Hero SVG uses locked OPER coordinates/topology. |

Shared note: each service hero gem is placed in `.hero-visual`, has navy linework, unfilled triangular faces, terracotta focal circle, and white open-circle nodes. Some SVGs also include faint horizontal guide lines; these are not part of the locked topology and should be reviewed, but they do not break the vertex set.

## Check 8: Section background sequence

### Home expected

Expected: Hero navy -> Statement white -> Method greyish-beige `#F2F1ED` -> Proof strip off-white `#F5F3EE` -> Services overview white -> CTA dark slate `#2C3E50` -> Footer white.

Actual:

| Section | Actual | Result |
|---|---|---|
| Hero | Source white; final off-white via `.hero { background: var(--off-white) !important; }` | FAIL, should be navy |
| Statement | white | PASS |
| Method | source off-white, later section reset greyish-beige | WARN/PASS final if reset applies |
| Social proof / industries / evidence | Mixed section ordering not identical to expected "services overview" sequence | FLAG |
| Proof strip | source off-white; final greyish-beige due reset | WARN |
| CTA | `.cta-section` source off-white | FAIL, should be dark slate `#2C3E50` |
| Footer | white | PASS |

### Service pages expected

Expected: Hero white -> Why start here warm parchment -> What we examine white -> What you receive navy wash -> Case studies white -> Related services `#F5F5F5` -> CTA dark slate -> Footer white.

Actual across files 3-8:

| Section | Actual | Result |
|---|---|---|
| Hero | source navy, intermediate white, final `var(--off-white) !important` | FAIL, should be white |
| Why start here | `var(--warm-parchment)` | PASS |
| What we examine | white | PASS |
| What you receive | `var(--navy-wash)` | PASS |
| Case studies | white | PASS |
| Related services | `var(--section-bg)` | PASS if `--section-bg` is `#F5F5F5`; verify variable per file |
| CTA panel | source `var(--dark-slate)` | PASS if variable equals `#2C3E50` |
| Footer | footer markup present; CSS should be checked because global footer rules include navy in some about-section files | FLAG |

### About-section pages expected

Expected: Hero white, 2-col; alternating white and off-white/greyish-beige sections; CTA panel; footer white.

Actual:

| File | Actual | Result |
|---|---|---|
| About | Final hero white via injection; source hero was navy. Footer source includes navy. CTA inner panel uses rgba white, outer panel needs dark slate check. | FAIL source / FLAG final |
| How we work | Final hero white via injection; source hero was navy. Several sections use numbered rows. | FAIL source / FLAG final |
| Why EQUIBT | Final hero white via injection; source hero was navy. Numbered rows and card treatments are patched late. | FAIL source / FLAG final |
| Industries | Final hero white via injection; source hero was navy. Case card left-border treatment remains. | FAIL source / FLAG final |

## Check 9: Navigation

| File | Expected | Actual | Result |
|---|---|---|---|
| Home | `.navbar`, white background, navy text, Services dropdown | `.navbar` present | PASS |
| Other 11 pages | `.ref-nav`, navy background, white text | `.ref-nav` present | PASS |

Open note: `.ref-nav-cta` uses terracotta background. This is currently part of the nav implementation, but it conflicts with the general no-terracotta-background rule unless nav CTA is treated as an explicit exception.

## Check 10: Buttons

| Status | File(s) | Selector / element | Actual | Expected |
|---|---|---|---|
| FAIL | Home | `.btn-primary` | navy background, white text, border-radius 3px | border-radius 6px |
| FAIL | Service pages 3-8 | `.btn-primary` | terracotta background, border-radius 3px | navy primary on light hero; terracotta only on dark CTA panel; radius 6px |
| FAIL | Methodology | `.btn-primary` | terracotta background, border-radius 3px | navy primary unless inside dark CTA panel; radius 6px |
| FAIL | Industries | `.btn-primary` | terracotta background, border-radius 4px | navy primary unless inside dark CTA panel; radius 6px |
| FAIL | About/how/why | Primary CTA not consistently using `.btn-primary`; hero/CTA links use secondary-light variants on light hero contexts | Use locked button classes consistently |
| PASS | Service pages 3-8 | Hero secondary CTA | `.btn-secondary-dark` used on white/off-white hero | Correct class for light hero |
| FAIL | About/how/why/industries | `.btn-secondary-light` on light hero | Class name says light/dark-background variant, but colour is patched to navy-tinted | Should use `.btn-secondary-dark` on white/off-white hero |
| WARN | Secondary buttons | Borders | No obvious visible border on secondary CTAs after patches | Keep borderless per spec |

## Additional compliance notes

### Font loading

`@font-face` declarations are present in every file. Methodology has four declarations; the others have two.

### Mobile overrides

All files contain `@media` blocks. This passes the presence check, but many mobile values are mixed into override layers and should be consolidated with source CSS.

### Accessibility quick scan

Most major illustrative SVGs have either `aria-hidden="true"` on their container or `aria-label` on the SVG. This is acceptable for decorative hero art. However, many inline SVG icons inside buttons/links do not declare `aria-hidden="true"`, which is a minor accessibility clean-up item.

## Ordered discrepancy list

1. **FAIL:** All files: remove CSS injection layers and consolidate final intended values into source CSS.
2. **FAIL:** Home: restore locked home hero treatment: navy background with white hero H1, not off-white/light-page hero.
3. **FAIL:** Service pages: clean source `.hero` to white and remove the navy -> white -> off-white override stack.
4. **FAIL:** All relevant pages: remove visible numbered labels (`.phase-number-bg`, `.why-row-num`, `.examine-card-number`; decide whether home `.method-pillar-num` should be `display:none`).
5. **FAIL:** All case study sections: restructure to Problem / Approach / Outcomes.
6. **FAIL:** Case stat standalone: remove duplicated stat references from outcome headlines and nearby case headlines.
7. **FAIL:** Buttons: standardise `.btn-primary` to navy/white/6px except inside dark CTA panel, where terracotta is allowed.
8. **FAIL:** Replace `.btn-secondary-light` on light heroes with `.btn-secondary-dark` on about/how/why/industries pages.
9. **FAIL:** Section background sequence: fix home hero, home CTA, service hero final background, and footer background consistency.
10. **FAIL:** Typography: correct body copy to 17px, stat numbers to 56px/700, stat labels to minimum 16px, section labels to 10px/0.14em, and section H2s to 44px/500.
11. **FAIL/WARN:** Card background rules: remove non-white card backgrounds from source and mid-layer CSS, not just final injection.
12. **FAIL:** Remove left-border case styling in industries and any case-result blockquote-style accents.
13. **FLAG:** Decide whether named credentials in About (`GE`, `AGSM`) are acceptable under the "all client references anonymous" rule.
14. **FLAG:** Decide whether `.pillar-tag` is accepted as the service-page equivalent of `.method-phase-tag`, or rename for component consistency.
15. **FLAG:** Lock `.industry-visual` dimensions/aspect ratio so 280x160 SVGs cannot clip in future responsive states.

