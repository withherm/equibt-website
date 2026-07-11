# CLAUDE CODE / COWORK BRIEF — EQT-286: pre-launch audit fixes (v6x)

## STOP — READ THIS FIRST

- **This is a targeted FIX sweep, not a page build.** Unlike the conversion briefs, this brief DELIBERATELY edits several normally-firewalled surfaces. Touch ONLY the exact files + lines named per item below. Do not refactor or restyle anything else.
- **Do not generate images. Do not invent metrics or claims.** Item 3 is specifically about NOT shipping invented numbers.
- **Plan-gate (light).** Before writing code, post: the exact edit list per item, the `/services/` hub structure, the decision on item 3 (real figures vs remove), and the per-location CTA replacement wording. Wait for go.
- **Verify, do not self-certify.** `npm run build` green; screenshot the changed surfaces desktop + mobile; confirm `/services/` resolves (no 404) and zero new horizontal overflow at 390px. A reviewer eyeballs.
- Repo discipline: ONE canonical clone; never self-mark Done. **Done = merged to main AND deployed on Cloudflare Pages AND verified live.**

Source: the pre-launch audit `GOS/Runtime/00_Meta/Docs/EQUIBT/EQUIBT_V6X_PRELAUNCH_AUDIT.md` and Linear **EQT-286**. Authority for rules: `prototypes/DESIGN_LEARNINGS_v6x.md` ("Inherited locks": Australia only; "Get in touch" CTA; verb-first titles; no em/en dashes; firm "we"; anonymised descriptors).

## Branches — TWO, because item 1 is on an open PR

- **Item 1** (About hero NZ) → fix on the existing **`eqt-256-about-v6x`** branch (it's still in review as PR #41). One-line edit, re-push, the PR updates. Do NOT put item 1 on a new branch.
- **Items 2, 3, 4** → one new branch **`eqt-286-prelaunch-fixes`** off the **latest `main`** (these surfaces are already merged to main). One branch, one PR.

---

## Item 1 — Geography: Australia only  (branch `eqt-256-about-v6x`)

`src/pages/about.astro` hero subhead currently:
> "...across Australia and New Zealand to build the capability..."

Change to "...across Australia to build the capability...". Remove "and New Zealand" only; leave the rest. That is the entire edit. Re-push the eqt-256 branch.

---

## Item 2 — Build a `/services/` hub  (branch `eqt-286-prelaunch-fixes`)

**Problem:** `Nav.astro` links Services → `/services/`, but only `src/pages/services/{frame,plan,solve,evolve,govern,scale}.astro` exist — no index — so `/services/` 404s. Industries has `industries/index.astro`; Services must match.

**Fix:** create `src/pages/services/index.astro` — a v6x Services hub. Do NOT edit `Nav.astro` (the link already points here). Mirror the `src/pages/industries/index.astro` hub pattern and reuse `src/styles/services.css` (add a small `.service-hub-*` block if needed; reference tokens, no new global tokens). Structure:
- Hero (white): eyebrow `SERVICES`, a verb-first H1 (e.g. "Six services. One focus: capability that holds."), Lora subhead, `Get in touch`. Interim hero motif via `<Icon>` (the home hero-motif or a glyph), fine-line, seam comment.
- The six pillars as editorial rows on hairlines (mirror the home `svc-row` idiom in `index.astro`): pillar `<Icon>`, dotted monochrome kicker (`FRAME · DEFINE`), service name (locked: FRAME = Problem Framing, PLAN = Operations Diagnostic, SOLVE = Iterative Improvement, EVOLVE = Rapid Pilot, GOVERN = Architecture & Governance, SCALE = Operational Embedding), one line, `Explore <PILLAR> ›` → `/services/<pillar>/`.
- Optional: the de-coloured six-station DMAICO pathway (reuse the built static pathway) if it fits; confirm at plan-gate.
- Light closing CTA (copy-left / motif-right), `Get in touch`. No dark moment.
- Use the existing `Nav`, `Footer`, `Layout`, `<Icon>` components. One section reveal each, no `reveal-d1..d3`.

Acceptance: `/services/` returns 200, reads as the same site, all six `Explore` links resolve, no six-colour coding.

---

## Item 3 — [DONE] Replace placeholder industry metrics with real anonymised figures  (branch `eqt-286-prelaunch-fixes`)

`src/pages/industries/_sector.astro` Financial Services + Utilities proof slides carry figures (23%, 18%, 11 days, 27%, etc.) that were placeholder figures. They render as real claims — a fabrication risk. **Do NOT invent numbers** (Herman confirmed 2026-06-09: no faked proof on a procurement-facing site).

**DECISION (Herman): reuse the REAL anonymised metrics EQUIBT already publishes** on Home / Our Work / Capability Statement, mapped to the sector. Replace the placeholder slides with these (keep the anonymised client descriptors):
- **Financial Services:** "Cut mortgage lead leakage across direct and broker channels from **30% to 10%**." (Bank); "Cut the close-to-board reporting cycle from **18 to 5 days**." (Property Group).
- **Utilities:** "Cut investigation cycle time across the teams, from **52 to 31 days**." (Utilities Ombudsman); "Lifted the residential retention save rate from **18% to 24%**." (Energy Retailer).

The carousel is shorter (two real slides per sector) but every figure is true and already vetted elsewhere on the site. If a sector ends up with only confirmed real slides, that is fine. Check Government + Manufacturing for any remaining placeholders; reuse the existing real anonymised figures for those sectors too (Government: 28%→9% grant-processing rework, Government Department; 67→38 days complaint resolution, Privacy Regulator. Manufacturing: 38% deflected, Industrial Manufacturer; 12 steps cut, Chemical Sales) where they apply. 

---

## Item 4 — Retire "Put a complex operation on firmer footing" site-wide  (branch `eqt-286-prelaunch-fixes`)

DECISION (Herman): retire the cliché everywhere, replaced with **context-appropriate, verb-first** CTA headlines (the button stays "Get in touch"). Occurrences and recommended replacements (confirm/adjust at plan-gate):

| File:line | Context | Recommended replacement |
|---|---|---|
| `src/components/CaseStudy.astro:213` | case-study closing CTA | "Bring us the operation that keeps drifting back." |
| `src/components/BlogPost.astro:26` | blog post default CTA heading | "Put your hardest operational problem in front of us." |
| `src/pages/industries/index.astro:241` | industries hub CTA | "Start with the strain in your sector." |
| `src/pages/industries/_sector.astro:112` | FS sector CTA (`ctaTitle`) | "Start with the financial services problem that won't stay fixed." |
| `src/pages/our-work/index.astro:89` | Our Work index CTA | "Start with the problem that won't stay fixed." |

(The About CTA was already changed to "Start with the problem that won't stay fixed." — vary the Our Work line if duplication reads odd; confirm.) No em/en dashes, firm "we", "Get in touch" button unchanged.

---

## Item 2 — Services hub, REVIEW ROUND 1 (Herman, 2026-06-09) — apply on `eqt-286-prelaunch-fixes`

Three changes to the `/services/` hub (`src/pages/services/index.astro` + the `.service-hub-*` block in `services.css`):

**R1 — Hero: remove the button, kill the dead white space.**
- **Remove the `Get in touch` button from the hero.** A services hub's job is to route to the six services, not to push contact; the CTA belongs only at the bottom of the page. Delete the hero action button (keep the bottom closing CTA).
- The hero currently has a large empty gap between the subhead and the first service row. **Reduce the hero height** (tighten the hero bottom padding / min-height) so the first service row sits closer. Optionally add one more sentence to the subhead for left-column balance against the motif, but the priority is remove-button + reduce-height. Keep the hero-motif on the right.

**R2 — Pathway hover labels.** On the hub's DMAICO pathway, add a **hover/focus label that shows the full service NAME above the hovered station**, reusing the home pathway's label-above-station idiom (label inside the container, never overflowing, short terracotta pointer down to the dot). Names (locked): FRAME → "Problem Framing", PLAN → "Operations Diagnostic", SOLVE → "Iterative Improvement", EVOLVE → "Rapid Pilot", GOVERN → "Architecture & Governance", SCALE → "Operational Embedding". Hover and keyboard-focus both reveal the label; mouse-out/blur hides it. This is a hover affordance only — NOT the home selector's persist-select, and no six-colour coding.

**R3 — Add LMI, framed as a service offering.** Add the LMI handover to the hub, positioned and worded as **one of EQUIBT's offerings (training / capability-building)**, not a footer-style afterthought. Reuse the LMI handover treatment (full-colour 702 TRANSPARENT logo, link `https://leanmethods.com.au`). Frame it as the training service that sits alongside the six advisory services: e.g. an eyebrow that reads as an offering ("TRAINING" / "CAPABILITY TRAINING"), heading "Build lean, AI-capable teams.", a line positioning structured Lean + AI training as how EQUIBT builds the capability directly. Place it after the six service rows (before or above the closing CTA). Confirm the exact form at plan-gate — a service-styled entry consistent with the six rows is preferred over a generic handover band, so it reads as part of the offering. Keep consistent with the LMI handover on About/HWW/Capability (transparent 702, leanmethods.com.au, never 701).

Re-verify after R1-R3: `npm run build` green, `/services/` renders, hero tighter with no button, station hover labels work (mouse + keyboard), LMI offering present, no horizontal overflow at 390px.

## Item 2 — Services hub, REVIEW ROUND 2 (Herman, 2026-06-09) — apply on `eqt-286-prelaunch-fixes`

**R4 — Hero: make it bigger and wider.** The hero currently reads small/empty — copy in the left half, a faint motif right, dead white below. Make it a confident, expansive opener:
- Use the `--wide` (1320) container for the hero inner (match home).
- **Enlarge and strengthen the hero motif** so the right side is a deliberate illustration, not a ghost — increase the SVG width (toward ~`min(620px,52vw)`) and lift the line visibility (it's reading too faint).
- Close the vertical dead space: vertically centre the hero content against the motif (or add top padding) so the block feels big and balanced, not top-loaded with empty space beneath. Goal phrase: "wider and big." Confirm exact dimensions visually at plan-gate.

**R5 — LMI capability-training section: fix the layout AND move it below the CTA.**
- The current version crammed the LMI logo into a service-row icon slot — wrong. Rebuild it as the **standard LMI handover band, stacked on the left axis**: eyebrow `CAPABILITY TRAINING` → heading "Build lean, AI-capable teams." → paragraph → the **full-colour 702 transparent LMI logo at proper size** (~250px wide, as on About / Capability Statement) as the clickable mark → `Explore training at Lean Methods Institute ›`. NOT a small icon beside the heading.
- **Move this section to be the LAST content section, AFTER the closing CTA** (new order: hero → six service rows → DMAICO pathway → closing CTA → LMI capability training → footer). Fix the white/beige alternation so it still alternates and the footer top-hairline separates cleanly.
- Keep the R3 framing (training as an EQUIBT offering) in the copy; only the layout + position change.

**R6 — Service rows: adopt the HOME "How we help" treatment (it's better).** Herman: the home page's "How we help" section is superior to the hub's current service list. Match it. Reference: the `.svc-list` / `.svc-row` idiom in `src/pages/index.astro` + `src/styles/home.css` (icon on one calm left axis at the home size, dotted kicker `FRAME · DEFINE`, service name h3, one-line description, `Explore <PILLAR> ›` chevron link, hairline between rows, generous padding). Port that exact treatment into the hub's `.service-hub-*` block in `services.css` (firewall: do NOT import home.css — replicate the styling: icon column width, icon size, gaps, type sizes, row padding, hairline). The hub's six rows should be visually indistinguishable from the home "How we help" rows.

**R7 — Remove visible "DMAICO" (brand rule violation).** The pathway section currently shows the eyebrow `THE DMAICO PATHWAY` and the body "Each service maps to a phase of the DMAICO improvement cycle." The "no visible DMAICO acronym in public copy" lock is broken. Rename the eyebrow (e.g. `THE PATHWAY` or `WHERE TO START`) and reword the body to drop "DMAICO" ("Each service maps to a phase of the improvement cycle..."). Keep the six-station pathway itself.

Re-verify after R4-R7: build green, `/services/` renders, hero reads big/wide/balanced, service rows match the home "How we help" treatment, LMI is a proper stacked handover band sitting under the CTA, no visible "DMAICO" anywhere on the page, links resolve, no overflow at 390px.

## Item 2 — Services hub, REVIEW ROUND 3 (Herman, 2026-06-09)

**R8 — LMI "Explore training" link is mis-placed.** It currently floats centred/indented below the LMI band. The locked LMI-handover rule: the chevron link is **left-aligned on the same axis** as the logo and heading (`display:table`), never centred. Match the About / Capability Statement LMI handover exactly (eyebrow, heading, paragraph, logo, link all on the one left axis).

**R9 — Pathway labels: match the HOME pathway treatment.** The hub pathway's station labels (FRAME, PLAN, …) render grey and smaller, and the terracotta pointer line under the micro-label is shorter, than on the home pathway (`index.astro` `.pathway-*`), where the station labels are navy, larger, with a longer pointer. Match the home pathway's label styling exactly: navy station labels at the home size/weight, and the home pointer length/position. Keep the R2 hover-name behaviour. (If on review this is actually about the service-row descriptions, Herman to confirm — primary read is the pathway.)

Re-verify after R8-R9: LMI link left-aligned on the content axis; pathway labels navy/sized to match home; build green; no overflow at 390px.

## Item 2 — Services hub, REVIEW ROUND 4 (Herman, 2026-06-09)

**R10 — Kill the gap between the LMI section and the footer.** The hub's LMI section bottom spacing stacks with the footer's top padding into a large white gap (per DESIGN_LEARNINGS "Kill the white gap before the footer"). Reduce the LMI section's bottom padding so the footer sits close, matching the About / How We Work / Capability LMI handover bottom spacing.

**R11 — Hub hero height: normalise to the site standard.** Herman decision "one standard hero, hub included." Set the hub hero padding to the standard **`124px top / 112px bottom`** (it's currently ~140px from R4). This reverts R4's height increase only — KEEP R4's stronger motif strokes and the `--wide` container; just bring the hero height in line with home / services / industries. After this the hub hero matches the other 112px-bottom pages.

Re-verify after R10-R11: no large gap before the footer; hub hero height matches home/services (124/112); motif still reads strong; build green; no overflow at 390px.

## Acceptance checklist

- [ ] Item 1: About hero says "across Australia" (NZ gone); committed on `eqt-256-about-v6x`, PR #41 re-pushed.
- [ ] Item 2: `src/pages/services/index.astro` created; `/services/` returns 200; six `Explore` links resolve; reads on-system; no Nav edit.
- [x] Item 3: all placeholder figures replaced with real confirmed anonymised metrics. No invented numbers.
- [ ] Item 4: "firmer footing" gone from all five files; replacements verb-first, context-appropriate; "Get in touch" buttons intact.
- [ ] `npm run build` green; changed surfaces eyeballed desktop + mobile; zero new horizontal overflow at 390px; no other files touched.
- [ ] Two PRs: the re-pushed eqt-256 (#41) for item 1, and a new PR for `eqt-286-prelaunch-fixes` (items 2-4). Post both URLs on Linear **EQT-286**. Do NOT mark Done — Herman/Cowork sets Done after merge AND Cloudflare deploy AND live verify.
