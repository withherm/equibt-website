# EQUIBT v6x Home Page Build — Codex Brief (v2)

Linear: EQT-245 (Urgent). Branch: `eqt-245`. Target: 2026-06-12.
Supersedes the original orgonomics-only v6x brief. The design direction is now settled and approved by Herman.

---

## STOP — READ THIS FIRST

This file is the COMPLETE spec for the v6x home page build. Do not hunt for other prompts. Do not open the `prompts/` folder or other `*_CODEX_*` files.

The visual source of truth is three approved exploration files, which will be placed in the repo at `prototypes/explorations/` on branch `eqt-245`:
- `EQUIBT_V6X_DIRECTION_EXPLORATION_v2.html` — the home page layout and section flow in the v6x direction.
- `EQUIBT_V6X_DIRECTION_EXPLORATION_v6.html` — the component library: one worked example of every UI pattern, in real content.
- `EQUIBT_V6X_UI_TRANSLATION.md` — the written rules behind every component and device.

You may also consult `prototypes/DESIGN_LEARNINGS_v5x.md` for inherited locked tokens, voice and copy rules. Build to match the explorations. Do not reinterpret the direction.

Touch ONLY the home page. Create a NEW file `prototypes/equibt_home_prototype_v6x.html`. Do not overwrite v5x. Do not edit the service pages, industry pages, About suite, or `equibt-base.css` in any way that changes another page. Work on branch `eqt-245` in the single canonical clone. No side clones.

Show your PLAN and get approval before writing code (plan-gate). Do not push to GitHub unless Herman explicitly says so. Local prototype file only. Do not self-mark the Linear issue Done.

---

## What this is

A re-skin and re-rhythm of the home page into the v6x direction: Anthropic-style editorial calm (air, white and beige, large clean type) carrying a hand-drawn line-art signature (engineering-schematic SVG, not stock icons, not AI raster). It is NOT a content rewrite. Same messaging and section flow as `equibt_home_prototype_v5x.html`, restyled. Home page only. Rollout to the rest of the site is a SEPARATE Linear issue, not this one.

---

## Locked design system (apply exactly — see the exploration files for the live reference)

**Type.** Headings Montserrat 700 (letter-spacing -0.012em). Body Lora 500, 20px / line-height 1.45, near-black `#161616`. Hero subhead Lora 500 ~22px / 1.4. Supporting/descriptions Lora 19px. Minimise font-size variation: default supporting copy to body size rather than inventing smaller sizes.

**Captions in italic Lora.** Metric captions, evidence source lines, the flagship metric label, sector result descriptors are Lora italic. Functional labels (eyebrows, kickers, data labels) stay Montserrat. Do not make a separate small grey size for sub-lines; use body size.

**Palette.** White `#FFFFFF` and beige `#F5F3EE` only, alternating. No colour washes (no navy-wash, light-grey, highlight-wash section fills). Terracotta `#C15F3C` is the single accent. Dark-slate `#2C3E50` only for the one dark card. Hairline `rgba(38,36,92,0.13)`.

**Boxes and dividers.** Thin-lined boxes are the standard container: 1px hairline, rounded ~16px, no drop shadow, white or beige. Retire the v5x heavy drop-shadow filled boxes and all hover-lift. Section divider is a contained 2px navy bisection line (within the content max-width, not edge-to-edge).

**Line-art.** Hand-drawn single-weight navy `#26245C` SVG line-art, one terracotta accent per illustration, slightly off-straight (crafted, not mechanical). One hero motif (the approved tangle-resolving-into-a-clear-path illustration in v2) plus one icon per DMAICO pillar (FRAME, PLAN, SOLVE, EVOLVE, GOVERN, SCALE). Take the exact SVGs from the exploration files.

**Eyebrows.** Terracotta dot + ALL CAPS, dot style site-wide (e.g. `FRAME · DEFINE`). Eyebrow-to-title gap ~14px, consistent, never tighter.

**Retire the six-colour pillar pill system.** Pillars are identified by the hand-drawn icon + monochrome dotted eyebrow only. No per-pillar colour coding.

**Evidence, not claims.** Every metric is tied to the verb-first action that produced it. No bare before/after numbers floating alone.

**Layout.** Loosen the v5x grid: generous air, asymmetric hero (motif right, bleeding into whitespace), icons on one calm left axis (no alternating sides), content on hairlines, varied vertical rhythm. One dark moment maximum on the page, as a contained rounded card, never a full-bleed band.

**Carousels** (if used on home): de-weighted scroll-snap, hairline controls bottom-right (dots then arrows), terracotta dot indicator, no shadows.

## What stays locked (inherit from DESIGN_LEARNINGS_v5x.md)

- Hero and footer pure white, dark text, nav light. Never a dark hero.
- Type scale H1 clamp(52px,4.15vw,56px)/600-700/1.08; H2 clamp(36px,3.2vw,40px). (Montserrat retained for brand continuity across EQUIBT and Lean Methods.)
- Voice: firm "we", no named individual. Verb-first active case/summary titles. No em dashes (colon/comma). No public price ranges. Button label "Get in touch" everywhere. Anonymised client-type descriptors. No dates/years in public copy. No 01/02/03 numbering. No decorative left-rule on prose (the beliefs vertical terracotta rule is retired).
- Locked service names: FRAME=Problem Framing, PLAN=Operations Diagnostic, SOLVE=Iterative Improvement, EVOLVE=Rapid Pilot, GOVERN=Architecture & Governance, SCALE=Operational Embedding.

---

## Home section flow (content unchanged from v5x; treatment per the explorations)

1. Hero — eyebrow "OPERATIONAL CAPABILITY ADVISORY", H1, supporting line, "Get in touch" + text link. Hand-drawn hero motif, right/asymmetric, bleeding into the whitespace.
2. Statement — "THE EQUIBT DIFFERENCE" / "We build capability, not dependency." Editorial rows on hairlines.
3. Six services — "HOW WE HELP" / "Six services. One focus: capability that holds." Editorial rows, hand-drawn pillar icon on one left axis, dotted eyebrow per pillar. Not a rigid 3x2 grid, no boxes.
4. The Work — "THE WORK" / "Operational gains that stay visible after the project ends." Light evidence rows (number tied to action), then the single flagship dark card (one real case with a story). This is the page's one dark moment.
5. Industries — "INDUSTRIES WE SERVE" / "Built for complex, regulated operations." Editorial rows, hand-drawn sector motif, no terracotta top bar.
6. Our Work — "OUR WORK" / "Proven in practice." Keep the locked single Our Work pattern, de-boxed to hairline editorial (Problem / Approach / Outcome retained).
7. Pathway — "Start where the work actually is." Hand-drawn single-line station pathway (off-straight), one terracotta "you are here".
8. Training / LMI handover — "TRAINING" / "Need to build the skills in-house?" Understated warm handover, leanmethodsinstitute.com.
9. CTA — light (the dark moment is already spent on The Work). "Start where the work actually is." "Get in touch". Full FRAME footer, pure white.

---

## Definition of right (sign-off checklist)

- A distinct point of view readable in three seconds. Does not look like a template.
- Hand-drawn line-art reads as engineering-schematic craft, not wellness illustration. Authority intact.
- Layout rhythm varied and asymmetric; the "too structured" feeling is gone. White and beige only; exactly one dark card.
- Type, palette, voice and every locked rule above hold. Captions italic. Eyebrow spacing consistent.
- Works on mobile: motif and asymmetry degrade gracefully; text never flush to the screen edge.

## Process rules

- Branch `eqt-245`, single canonical clone, stay off other pages.
- Plan-gate: show the plan before code. Provide full-page screenshots (desktop + mobile) for review. Herman/Cowork eyeball the screenshots — do NOT rely on automated self-checks for sign-off (past self-checks have reported false passes).
- Illustrations are hand-crafted SVG line-work. Do not generate raster/AI images.
- Do not push unless Herman says so. Do not self-mark Done.

## Site-wide implications to flag (not part of this build)

The v6x type pairing (Montserrat + Lora body) and the retirement of the six-colour pillar pills are site-wide changes if rolled out. This build is home-only. Reconciling the rest of the site is a separate Linear issue to be raised after home sign-off.
