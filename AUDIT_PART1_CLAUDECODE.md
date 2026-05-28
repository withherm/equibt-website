# EQUIBT Website Design System Audit — Part 1
**Date:** 2026-05-27
**Scope:** 12 prototype HTML files vs EQUIBT_WEBSITE_DESIGN_SYSTEM_v1.md
**Auditor:** Claude Code (read-only, no edits made)

---

## 1. FAILS — Hard rule violations (fix before build)

**Rule 1 — Navy as background fill (Hard Rule 1)**

1. `equibt_frame_prototype_v4.html` — `.case-card.navy { background: var(--navy) }` (line 155). Navy card background on case study. Final injection at line 978 overrides `.case-card` to `#ffffff !important` — but `.case-card.navy` is a more specific selector and the injection targets `.case-card` (without `.navy`). Specificity conflict: actual rendered state may still be navy. Needs browser verification.
2. `equibt_plan_prototype_v4.html` — `.case-card.navy` same pattern as above (same injection specificity issue). All 6 service pages share this pattern.
3. `equibt_solve_prototype_v4.html` — `.case-card.navy` same pattern.
4. `equibt_evolve_prototype_v4.html` — `.case-card.navy` same pattern.
5. `equibt_govern_prototype_v4.html` — `.case-card.navy` same pattern.
6. `equibt_scale_prototype_v4.html` — `.case-card.navy` same pattern.
7. `equibt_home_prototype_v4.html` — Injection block at line 494: `.stat-block:nth-child(2) { background: var(--navy) !important }`. Later injection at line 806 overrides `.stat-block:nth-child(2)` to `#ffffff !important` — but rule order makes the second `!important` win. Needs browser verification to confirm the later injection wins.

**Rule 2 — Card backgrounds white (Hard Rule 2)**

8. `equibt_home_prototype_v4.html` — `.method-pillar { background: var(--off-white) }` (line 124). Pillar cards in the connected grid use off-white instead of white. Spec requires white card surfaces. This is source CSS, not overridden by final injection (final injection targets `.method-pillar` generically and sets `#ffffff !important` at line 962 — cross-check needed).
9. `equibt_home_prototype_v4.html` — `.stat-block { background: var(--off-white) }` (line 168). Stat blocks use off-white. Final injection overrides to `#ffffff !important` at line 806 — needs browser verification.

**Rule 3 — Hero H1 52px / weight 600 (Hard Rule 3)**

10. `equibt_frame_prototype_v4.html` — Source `.hero-h1 { font-size: 64px; font-weight: 700 }` (line 103). Injection fixes to 52px/600 via `!important` (line 301). Passes functionally but injection is CSS debt (also Hard Rule 9 violation).
11. `equibt_plan_prototype_v4.html` — Same 64px/700 source, injection fix to 52px/600.
12. `equibt_solve_prototype_v4.html` — Same 64px/700 source, injection fix to 52px/600.
13. `equibt_evolve_prototype_v4.html` — Same 64px/700 source, injection fix to 52px/600.
14. `equibt_govern_prototype_v4.html` — Same 64px/700 source, injection fix to 52px/600.
15. `equibt_scale_prototype_v4.html` — Same 64px/700 source, injection fix to 52px/600.
16. `equibt_methodology_prototype_v1.html` — Source `.hero-h1 { font-size: 72px; font-weight: 500 }` (line 105). Injection fixes to 52px via mobile breakpoint (line 246) — but that is a mobile-only override. Desktop source is 72px. Expected: 52px/600. Actual: 72px/500 on desktop. FAIL on both size and weight.

**Rule 4 — Section H2 44px / weight 500 (Hard Rule 4)**

17. `equibt_home_prototype_v4.html` — `.method-header h2 { font-size: 51px; font-weight: 600 }` (line 109). Same for `.evidence-header h2` (line 146) and `.industries-header h2` (line 192). Expected: 44px/500. Actual: 51px/600.
18. `equibt_home_prototype_v4.html` — `.cta-inner h2 { font-size: 48px; font-weight: 600 }` (line 206). Expected: 44px/500.
19. `equibt_frame_prototype_v4.html` — `.why-start-heading { font-size: 46px; font-weight: 700 }` (line 110). `.examine-heading { font-size: 46px; font-weight: 700 }` (line 123). `.deliverables-heading { font-size: 46px; font-weight: 700 }` (line 142). All should be 44px/500.
20. `equibt_plan_prototype_v4.html` — Same section headings at 46px/700.
21. `equibt_solve_prototype_v4.html` — Same.
22. `equibt_evolve_prototype_v4.html` — Same.
23. `equibt_govern_prototype_v4.html` — Same.
24. `equibt_scale_prototype_v4.html` — Same.

**Rule 5 — No terracotta background fill (Hard Rule 5)**

25. `equibt_home_prototype_v4.html` — `.btn-primary` not affected (navy). But injection at line 310 sets `.hero .btn-cta { background: var(--terracotta) !important }`. The `cta-section` itself uses off-white background, so the CTA button terracotta is not a section fill — this is spec-permitted (CTA panel button). However `.btn-primary:hover { background: var(--terracotta) }` (line 84) is hover state only — technically allowed as hover is not a background fill in context. PASS for section fills.
26. `equibt_methodology_prototype_v1.html` — `.btn-primary { background: var(--terracotta) }` (line 109). Design system spec says `.btn-primary` should use navy background with terracotta only on CTA panels. This is used in the hero and general page context. FAIL: terracotta as primary button background on non-CTA-panel contexts.
27. `equibt_frame_prototype_v4.html` — Same: `.btn-primary { background: var(--terracotta) }` (line 92). Service pages use terracotta for `btn-primary` globally, not just on CTA panel. FAIL on all 6 service pages (files 3–8).
28–32. `equibt_plan_prototype_v4.html`, `equibt_solve_prototype_v4.html`, `equibt_evolve_prototype_v4.html`, `equibt_govern_prototype_v4.html`, `equibt_scale_prototype_v4.html` — same terracotta btn-primary issue.

**Rule 9 — No CSS injection (Hard Rule 9)**

33. All 12 files contain injection blocks. Confirmed by injection marker counts: home=19 markers, methodology=23, service pages v4=11 each, about=16, how_we_work=14, why_equibt=16, industries=13. This is a universal FAIL across all 12 files.

**Rule 7 — No left-border blockquote styling on case result text (Hard Rule 7)**

34. `equibt_industries_prototype_v2.html` — `.case-card.navy .case-result { border-left-color: var(--terracotta) }` (line 351). Left border on case result text. FAIL.

**Rule 8 — All client references anonymous (Hard Rule 8)**

35. All service pages reference named sectors (Financial Services, Government and Public Sector, etc.) — these are sector labels, not client names. No named organisations found. PASS on Hard Rule 8.

---

## 2. WARNINGS — Spec deviations (fix recommended)

**Check 1 — CSS architecture / !important bloat**

1. `equibt_about_prototype_v2.html` — 377 `!important` declarations, 16 injection marker blocks. Highest count in the set. CSS consolidation is overdue.
2. `equibt_why_equibt_prototype_v2.html` — 343 `!important` declarations, 16 injection markers.
3. `equibt_how_we_work_prototype_v2.html` — 256 `!important` declarations, 14 injection markers.
4. `equibt_industries_prototype_v2.html` — 253 `!important` declarations, 13 injection markers.
5. `equibt_frame_prototype_v4.html` through `equibt_scale_prototype_v4.html` — 238 `!important` each, 11 injection markers each. Consolidation needed (see Design System K).
6. `equibt_methodology_prototype_v1.html` — 223 `!important` declarations, 23 injection markers.
7. `equibt_home_prototype_v4.html` — 192 `!important` declarations, 19 injection markers.

**Check 2 — Colour deviations**

8. `equibt_home_prototype_v4.html` — Hero background is `var(--white)` in source (line 74). Design system spec section H says home hero should be navy. Source is white. This may be intentional (the design has evolved away from navy hero) but it conflicts with spec. Note: injection at line 631 also forces `.hero { background: var(--off-white) !important }` which would override to off-white, not white. Three-way conflict: spec=navy, source=white, injection=off-white. Needs Herman decision (see FLAGS).
9. `equibt_about_prototype_v2.html` — `--dark-slate` CSS variable is set to `#1A1A1A` (line 36). Spec says CTA panel dark-cta = `#2C3E50`. All 4 about-section pages (about, how_we_work, why_equibt, industries) define `--dark-slate: #1A1A1A` instead of `#2C3E50`. CTA panel background will render as near-black, not dark slate.
10. `equibt_methodology_prototype_v1.html` — `--dark-slate: #2C3E50` is correct (line 44). Service pages v4 also `#2C3E50`. About-section pages v2 use `#1A1A1A`. Inconsistency across the set.
11. `equibt_home_prototype_v4.html` — `--off-white` and `--warm-parchment` are both defined as `#F2F1ED` (lines 23–24). Spec defines `--off-white: #F5F3EE` and greyish-beige as `#F2F1ED`. Home page conflates these. This means all uses of `var(--off-white)` on the home page render as `#F2F1ED` (greyish-beige), not `#F5F3EE`.
12. `equibt_frame_prototype_v4.html` — Source `.hero { background: var(--navy) }` (line 98) is overridden by injection to white. The source CSS violates the service page spec (hero should be white). Source should be corrected as part of consolidation.

**Check 3 — Typography deviations**

13. `equibt_methodology_prototype_v1.html` — `.hero-h1 { font-size: 72px; font-weight: 500 }` (line 105). Desktop renders at 72px/500. Expected 52px/600. The 52px injection at line 246 is inside `@media (max-width: 768px)` only — does not fix desktop. Weight 500 vs required 600 is also incorrect.
14. `equibt_home_prototype_v4.html` — `.stat-num { font-size: 64px }` (line 169). Spec requires 56px. Home page stat numbers render larger than spec.
15. `equibt_frame_prototype_v4.html` through `equibt_scale_prototype_v4.html` — `.case-stat { font-size: 64px }` (various lines). Case stat numbers at 64px. Spec stat number is 56px. These are case stats not proof strip stats, but they use the same role visually. Deviation flagged.
16. `equibt_home_prototype_v4.html` — Section H2s at 51px/600 (method, evidence, industries headers) and 48px/600 (CTA). Spec: 44px/500.
17. `equibt_frame_prototype_v4.html` — Section headings (why-start, examine, deliverables, case-studies) at 46px/700. Spec: 44px/500. Applies to all 6 service pages.
18. `equibt_methodology_prototype_v1.html` — `.section-h2 { font-size: 44px; font-weight: 500 }` (line 89). Correct. PASS. This is the reference implementation.

**Check 5 — Connected pillar grid**

19. `equibt_methodology_prototype_v1.html` — Uses `.phase-grid` (not `.method-pillar-grid`) and `.phase-card-border` element for the top border stripe. Pillar border colours are correct via `.phase-card-border.frame/plan/solve/evolve/govern/scale` background rules (lines 149–154). The scale pillar in an injection block gets `border-top: 3px solid var(--terracotta) !important` (line 837) — this overrides the correct `var(--pill-scale)` colour to terracotta. FAIL on scale border colour.
20. `equibt_home_prototype_v4.html` — Pillar grid border-top colours correct (lines 125–130), using `var(--pill-*)` variables. PASS.

**Check 6 — Industry card SVGs (home)**

21. `equibt_home_prototype_v4.html` — The 4 main industry gem SVGs all use `viewBox="0 0 280 160"`. Spec says `viewBox="0 0 280 160"` for home cards. PASS on viewBox.
22. `equibt_home_prototype_v4.html` — Industry card icon SVGs (small nav icons above the gem, lines 1079–1161) use schematic rect/polyline shapes: bar charts (`<rect>` elements), lightning bolt polyline, process arrows. These are not gem illustrations. However these appear to be small decorative icons, not the main industry visual gem. The main gem SVGs (lines 1182–1293) are correctly faceted triangular mesh. The small icons are a secondary concern but deviate from illustration spec.
23. `equibt_home_prototype_v4.html` — `.industry-visual svg { height: auto }` (line 196). No fixed height constraint. SVG will scale freely. No clipping risk found.

**Check 7 — Service page gem SVGs**

24. All 6 service pages — `viewBox="0 0 440 380"` confirmed (frame line 1034, plan line 1399, solve line 1039, evolve line 1030, govern line 1032, scale line 1032). PASS.

**Check 8 — Section background sequence**

25. `equibt_home_prototype_v4.html` — Hero background: source=white, spec=navy. Off-white injection at line 631 overrides to `var(--off-white)`. Final state unclear without browser rendering. See FAILS item above and FLAGS.
26. `equibt_home_prototype_v4.html` — `method-section` background is `var(--off-white)` (spec: greyish-beige). On this file, `--off-white` is defined as `#F2F1ED` which equals the spec's greyish-beige. So functionally correct but token naming is wrong.
27. `equibt_home_prototype_v4.html` — `cta-section` uses `var(--off-white)` (line 203). Spec requires dark slate `#2C3E50` for CTA panel. FAIL: CTA section is not dark on home page.
28. `equibt_about_prototype_v2.html`, `equibt_how_we_work_prototype_v2.html`, `equibt_why_equibt_prototype_v2.html`, `equibt_industries_prototype_v2.html` — CTA panel uses `--dark-slate: #1A1A1A`. Spec says `#2C3E50`. Renders darker than spec but same dark treatment. Minor deviation.
29. `equibt_how_we_work_prototype_v2.html` — Source hero `background: var(--navy)` (line 169). Injection overrides to `#ffffff` (line 1062). Final state: white. Correct per spec. But injection method is CSS debt.
30. `equibt_why_equibt_prototype_v2.html` — Same: source navy, injection to white.
31. `equibt_industries_prototype_v2.html` — Same: source navy, injection to white.

**Check 9 — Navigation**

32. Navigation types are correct across all 12 files: home uses `.navbar`, all other 11 pages use `.ref-nav`. PASS.

**Check 10 — Buttons**

33. `equibt_frame_prototype_v4.html` through `equibt_scale_prototype_v4.html` — `.btn-primary { background: var(--terracotta) }` globally (not only on CTA panel). Spec says btn-primary should be navy by default, terracotta only on `.cta-panel .btn-primary`. The hero `btn-primary` on service pages ("Let's talk") is on a white background and renders terracotta — this is a semantic mismatch (terracotta is permitted only on dark CTA panels per spec). See also FAILS item 26–32.
34. `equibt_about_prototype_v2.html` — `.btn-secondary-light { color: rgba(38,36,92,0.55) }` (line 138–143). The class name is `.btn-secondary-light` but it is styled with dark navy text — it has been repurposed as a light-bg button. This should be renamed `.btn-secondary-dark` per spec. The colour value is correct for light backgrounds but the class name is misleading.
35. `equibt_how_we_work_prototype_v2.html`, `equibt_why_equibt_prototype_v2.html`, `equibt_industries_prototype_v2.html` — Same `.btn-secondary-light` misuse as about page (class name doesn't match use context).
36. `equibt_home_prototype_v4.html` — `.btn-primary { border-radius: 3px }` (line 83). Spec: 6px. Deviation of 3px vs 6px.
37. `equibt_frame_prototype_v4.html` through `equibt_scale_prototype_v4.html` — `.btn-primary { border-radius: 3px }` (line 92 etc.). Same 3px vs 6px deviation.

**Check 4 — Remaining hard rules**

38. `equibt_home_prototype_v4.html` — `.method-pillar-num { color: rgba(38,36,92,0.045) }` (line 131). The number is visible but extremely faint (opacity ~4.5%). This is borderline — technically visible, not display:none. Hard Rule 6 says no numbered labels. Four pillar number divs are in the HTML (lines 991, 1004, 1017, 1030). Recommend setting `display:none` or `opacity:0`.
39. `equibt_frame_prototype_v4.html` through `equibt_industries_prototype_v2.html` — Injection blocks contain `.method-pillar.pillar-scale .method-pillar-num { color: rgba(38,36,92,0.05) !important }` — pillar numbers exist in CSS but are set near-invisible. No HTML div with class `method-pillar-num` found in service pages outside home. PASS for service pages on Rule 6.

**Check 10 — Deliverable cards**

40. All 6 service pages — 8 `.deliverable-card` HTML divs found in each file. The `deliverables-grid` is `grid-template-columns: repeat(2, 1fr)` — a 2x2 grid = 4 visible cards. With 8 divs, this renders as a 2x4 grid (8 cards) — that is double the spec requirement of exactly 4. This is likely 4 card instances with image placeholder divs inside each, but needs visual verification. FAIL if all 8 are card-level elements in the HTML.

---

## 3. FLAGS — Needs Herman decision

1. **Home hero background:** Spec (section H) says home hero = navy. Source CSS is white. A shared injection block forces `.hero { background: var(--off-white) !important }` which would also fire on the home page hero. Three states conflict: spec=navy, source=white, injection=off-white. Decision needed: what is the intended final home hero background colour?

2. **Home CTA section:** `.cta-section { background: var(--off-white) }` (line 203). Design system says CTA panel = dark slate `#2C3E50`. Home page uses off-white for its CTA area. Decision needed: should the home page CTA adopt the dark slate treatment, or is off-white intentional for this page only?

3. **Service page btn-primary = terracotta:** All 6 service pages define `.btn-primary` as terracotta globally. Spec says btn-primary is navy by default, terracotta only on dark CTA panels. The hero "Let's talk" button is on a white background. Decision needed: should service page hero btn-primary be navy (per spec) or terracotta (current state)?

4. **case-card.navy on service pages:** Each service page has one navy-background case study card (`.case-card.navy`). This is a navy background fill on a card, which violates Hard Rule 1. Decision needed: remove the navy card treatment and make all case cards white, or create a formal exception for one dark case card per service page?

5. **Dark card exceptions on home page:** Injection blocks create navy cards for `.differentiator-item:nth-child(1)` and `.refuse-item:nth-child(1)`. These are then overridden by the final injection to white. The intent appears to be: no navy cards. But the intermediate injection creates them before the override fires. Decision needed: confirm these elements should always be white (final injection wins), and remove the intermediate injection during consolidation.

6. **Methodology hero H1 72px/500 (desktop):** Source is 72px/500. Expected 52px/600. No desktop injection fix exists — only a mobile breakpoint. Decision needed: correct source to 52px/600 in methodology page, or is 72px intentional as a display header?

7. **Section H2 sizes across home and service pages:** Home uses 51px/600 for section H2. Service pages use 46px/700 for section headings (why-start, examine, deliverables). Spec is 44px/500. These appear to be intentional design choices made before the spec was locked. Decision needed: enforce 44px/500 uniformly, or accept page-specific sizes as design exceptions?

8. **About-section pages .btn-secondary-light class name mismatch:** These pages use `.btn-secondary-light` class with dark navy text styling (correct for light backgrounds) instead of `.btn-secondary-dark`. The visual result is correct but the class name is wrong. Decision needed: rename the class in the HTML to `.btn-secondary-dark` during CSS consolidation, or leave as-is since it renders correctly?

9. **Deliverable card count on service pages (8 vs 4):** Grep found 8 `<div class="deliverable-card">` per service page. If these are 8 separate cards (not nested), the grid renders as a 2-column, 4-row grid rather than the spec's 2x2. Decision needed: verify in browser whether 4 or 8 cards are visible in the deliverables section.

10. **Methodology scale pillar border-top = terracotta:** An injection block overrides the scale pillar top border to `var(--terracotta)` (line 837). The spec says pillar colours only on `border-top` of pillar cards. Terracotta is the wrong colour for scale (should be `#5C0A5C` deep plum). Decision needed: fix injection to use `var(--pill-scale)`.

11. **Small schematic icons inside home industry cards:** Lines 1079–1161 contain small SVG icons (bar charts, lightning bolt, process arrows, circles) that are not gem-style illustrations. They appear as decorative badges above the main gem SVG. Decision needed: are these intentional supplementary icons, or should they be removed/replaced with gem-style miniatures?

12. **Home and service pages share a CSS injection block:** The shared injection block (targeting `.hero { background: var(--off-white) !important }`) fires across all pages sharing the injection. This means the home page hero also gets the off-white override. If the home hero is meant to stay white (or navy), the shared injection scope is too broad. Decision needed: scope the hero injection to only non-home pages, or split injection blocks by page type during consolidation.

---

## Summary counts

**FAILS (Hard rule violations):** 34 findings (CSS injection universal across all 12 files = 12 instances of Rule 9; plus individual rule violations)
**WARNINGS (Spec deviations):** 40 findings
**FLAGS (Herman decisions needed):** 12 decisions

## Priority order for next session

1. CSS consolidation — resolve all injection blocks into source. Highest leverage fix (removes ~80% of all violations).
2. Fix section H2 to 44px/500 across home and service pages during consolidation.
3. Fix methodology hero H1 to 52px/600 in source.
4. Decision on navy case-card (Flag 4) — needed before service page consolidation.
5. Decision on home hero background (Flag 1) and CTA section (Flag 2) — needed before home consolidation.
6. Fix methodology scale pillar border-top to `var(--pill-scale)`.
7. Fix `--dark-slate` on about-section pages from `#1A1A1A` to `#2C3E50`.
8. Verify deliverable card count (Flag 9) in browser.
