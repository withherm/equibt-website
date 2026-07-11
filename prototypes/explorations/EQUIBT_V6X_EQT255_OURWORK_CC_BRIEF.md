# CLAUDE CODE BRIEF — EQT-255: convert Our Work index + case study pages to v6x

## STOP — READ THIS FIRST

- **This file is the complete spec.** Do not hunt for other prompts. Do not open the `prompts/` folder or `assets/deliverables/prompts/`. Everything you need is in this brief plus the source files it names. The reference files in section 4 ARE required reading; everything else is off limits.
- **Do not generate images.** No AI image generation, no raster assets. Artwork is a later content-only swap (EQT-274/275).
- **Touch ONLY the files named in section 2.** The home, base, tokens, services, industries and icon-root surfaces are conflict firewalls. If you think you need to edit one, STOP and report instead.
- **Plan-gate.** Before writing any code, post your build plan (file list, the case-study architecture decision, the component list, the case data model, how you wire the index grouping and the case study route, the dark-moment treatment) and wait for go. Do not write code until the plan is approved.
- **Verify, do not self-certify.** When the build is done, list exactly what you changed, confirm `npm run build` is green, and report honestly on screenshots. A reviewer will eyeball; false "present" passes have happened before on this site. If your screenshot tooling fails, say so plainly.
- Repo discipline (AGENTS.md / CLAUDE.md govern): ONE canonical clone, work on a branch off latest `main`, never self-mark Done.

---

## 1. Job

Convert the EQUIBT **Our Work index** and the **case study pages** from their v5x HTML prototypes into the v6x Astro system. The pages must read as the same site as the live v6x home (`src/pages/index.astro`), services (`src/pages/services/`) and industries (`src/pages/industries/`).

- **Copy is the authority** from the two v5x prototypes (section 5/6). STYLE comes from the v6x system, NOT from the v5x prototypes. The v5x pages are boxy, drop-shadowed, six-colour pillar-coded; v6x is editorial-calm on hairlines, one accent. Translate, do not transcribe the styling.
- Branch: **`eqt-255-our-work-v6x`** off the latest `main`. One branch, one PR.

| Page | URL | v5x source (in `prototypes/`) |
|---|---|---|
| Our Work index | `/our-work/` | `equibt_our_work_prototype_v5x.html` |
| Case study (template + each study) | `/our-work/<slug>/` | `equibt_case_study_prototype_v5x.html` |

`/our-work/` is already linked site-wide (home, services `ServicePage.astro`, industries). Those inbound links are live and must resolve after this build.

---

## 2. Files

**Create / edit ONLY these:**

```
src/pages/our-work/index.astro          (create — the index)
src/pages/our-work/[slug].astro         (create — the case study route, IF you take the content-collection path; see section 7)
src/components/CaseStudy.astro          (create — shared case study template component, ServicePage.astro pattern)
src/content/cases/<slug>.md             (create — one markdown file per study with full copy; the cases collection is currently empty except .gitkeep)
src/content.config.ts                   (EDIT — the `cases` collection schema only; see section 7)
src/styles/our-work.css                 (create — page styles; reference tokens, do not redefine them)
```

**DO NOT TOUCH (conflict firewalls):**

```
src/pages/index.astro                   (home surface)
src/styles/home.css / base.css / tokens.css
src/pages/services/** and src/styles/services.css        (EQT-253 surface)
src/pages/industries/** and src/styles/industries.css    (EQT-254 surface)
src/components/icons/**                  (icon root AND glyphs/ — read and use via <Icon> / imports, never edit; EQT-272/274 surface)
src/components/ServicePage.astro         (READ as the pattern reference; do not edit)
src/components/Nav.astro / Footer.astro  (read, use, do not edit)
src/layouts/Layout.astro                 (read, import, do not edit)
src/content.config.ts → the `insights` collection block (leave untouched; edit ONLY the `cases` block)
```

Glyphs and pillar/sector icons are consumed through the existing components (`src/components/icons/Icon.astro` dispatcher; `src/components/icons/glyphs/*.astro`). Import and use them; never copy their markup or edit them.

---

## 3. Icons — via the existing components only

- Pillar icons: `<Icon name="frame" />` … `<Icon name="scale" />`. Never inline a pillar SVG.
- Small glyphs (if a section needs one, e.g. a page motif): import the existing `src/components/icons/glyphs/*.astro` components, same as `ServicePage.astro` does. Do not create new glyphs and do not draw artwork.
- Any page hero motif is a later content-only artwork swap (EQT-274/275). If you give the index a hero motif slot, leave a seam comment exactly like `ServicePage.astro` line ~158 (`<!-- hero art ... swaps in here later (artwork-authority) -->`) and use an existing `<Icon>` or a page-motif glyph as the interim, at the 110px idiom. Confirm the interim choice at plan-gate.

---

## 4. v6x system — the rules you are building to

Required reading, in this order (all in the repo):

1. `prototypes/DESIGN_LEARNINGS_v6x.md` — the design authority. Read it fully.
2. `src/components/ServicePage.astro` + `src/styles/services.css` — **the closest built precedent.** Our Work reuses its `case-list` / `case` / `case-meta` / `case-block` / `case-label` editorial pattern, its `btn-text` chevron links, its per-section scroll-reveal, and its carousel JS shape if you carousel anything. Read it before you design.
3. `src/pages/index.astro` + `src/styles/home.css` + `src/styles/tokens.css` + `src/styles/base.css` — the v6x reference; your pages must read as the same site.
4. `prototypes/explorations/EQUIBT_V6X_DIRECTION_EXPLORATION_v6.html` — worked component examples. Block **06** (de-boxed editorial case), block **20** (page hero), block **22** (light closing CTA) are the structural references here.

**Precedence rule:** if references disagree, the order is DESIGN_LEARNINGS_v6x first, then the built home/services/industries surfaces, then exploration v6.

Quick reference (full detail in DESIGN_LEARNINGS_v6x):

- **Type:** Montserrat 700 headings (letter-spacing -0.012em); Lora 500 22px body, line-height 1.45, near-black `#161616`; **italic Lora captions** (metric captions, evidence source lines, sector descriptors). Functional labels (eyebrows, kickers, data labels) stay Montserrat. H1 `clamp(40px,3.4vw,46px)`. Minimise font-size variation.
- **Palette:** white `#FFFFFF` + beige `#F5F3EE` ONLY, alternating. Terracotta `#C15F3C` single accent (terracotta-dark `#A04E30` hover). Dark-slate `#2C3E50`. Navy line-art `#26245C`. Hairline `rgba(38,36,92,0.13)`. No wash section fills.
- **Boxes:** 1px hairline, rounded ~16px, no drop shadow, no hover-lift. Earn the box: open content on hairlines is the default. Reference the `tokens.css` variables (`--wide`, `--max`, `--hairline`, `--terracotta`, `--navy`, `--near-black`, `--caption`, `--muted`, `--off-white`, `--link-gap`); do not redefine them.
- **Dividers:** alternating white/beige is the separator. A contained 2px navy bisection line ONLY where two consecutive same-colour sections meet.
- **Eyebrows:** terracotta dot + ALL CAPS Montserrat, ~14px to title. Every section carries an eyebrow.
- **Pillar wayfinding RETIRED:** no six-colour pillar pills, no coloured tags, no per-pillar colour. The v5x `pillar-section-plan/solve/evolve/govern` colour coding and `PLAN | Measure` coloured headers become monochrome: dotted Montserrat eyebrow + the locked pillar phrasing, no colour. No `01/02/03` numbering.
- **Chevron links:** terracotta text + bolder/bigger `›`; underline draws left-to-right under the text only, then the chevron nudges. Match `.btn-text` in `home.css`/`services.css`. The v5x `btn-outline` secondary button is RETIRED.
- **Evidence, not claims:** every metric tied to the verb-first action that produced it. No bare before/after number floating alone. This page IS the proof spine — hold the line hard here.
- **Layout:** generous air, asymmetric hero (motif right, bleeding into whitespace), content on one calm left axis, varied vertical rhythm. **One dark moment maximum per page** (section 5/6 define where).
- **Scroll-reveal:** ONE minimal reveal per SECTION: fade + ~8px rise, 350ms ease-out, fires once, no stagger, `prefers-reduced-motion: reduce` disables it. Reuse the `ServicePage.astro` `service-reveal` implementation pattern. The v5x `reveal` / `reveal-d1..d3` multi-element system is RETIRED — do not port it (the case study source still has `reveal-d1/d2`; drop the staggering).
- **Voice (HARD):** firm "we", no named individual; **verb-first active case/summary titles** (Herman's hard rule — "Redesigned claims exception routing." not "Claims exception routing redesigned."); no em/en dashes (colon or comma); no dates/years in public copy; no public prices; anonymised client-type descriptors only (e.g. "Specialty Insurer", "Energy Retailer"); no visible DMAICO acronym; "Get in touch" CTA.

---

## 5. Our Work index — `/our-work/`

Source: `equibt_our_work_prototype_v5x.html`. Copy is the authority; lift it verbatim (headlines, descriptors, metrics, Problem/Approach/Outcome text). Section order:

**5.1 Hero** (white). Asymmetric, copy left, motif right per section 3 (interim `<Icon>` / page motif at 110px, seam comment for the later swap). Eyebrow `OUR WORK`, H1 `Proven in practice.`, the two intro paragraphs from the source ("Operations problems, redesigned with the teams who own them. Every result below was built to run without us." and the anonymisation paragraph). Action: `Get in touch` (btn-primary to `/contact/`). NO hero metric band (site rule).

**5.2 Case index, grouped by pillar** (alternating white/beige sections). The v5x page groups cases under pillar sections (PLAN | Measure, SOLVE | Analyse, EVOLVE | Improve, GOVERN | Control), each with a pillar header + a one-line pillar intro + a set of case entries. Convert to v6x:

- Each pillar group = a section with a **monochrome dotted eyebrow** carrying the locked pillar phrasing (e.g. `PLAN · MEASURE`) and the source's pillar intro line as the section sub-line. No pillar colour, no coloured band.
- Each case entry = a **de-boxed editorial row on a top hairline** (reuse the `case` / `case-meta` / `case-block` / `case-label` pattern from `ServicePage.astro` §OUR WORK and `services.css`): left meta column = italic sector descriptor + big navy metric + italic caption; right = verb-first H3 + `Problem` / `Approach` / `Outcome` hanging-label blocks + a `Full case study ›` chevron link to `/our-work/<slug>/` (only for cases that have a full study; section 7). No boxes, no drop shadows, no `pillar-badge`, no `Read the case / Hide` disclosure toggle (the v6x row shows the content open on hairlines).
[RETIRED] Illustrative flag and markers removed (July 2026). All cases are real anonymised engagements.
- Keep grouping order and case order from the source.

**5.3 Closing CTA** (LIGHT, block 22; the v5x dark `cta-panel` is retired). Eyebrow `WORK WITH US`, the source's headline ("Put a complex operation on firmer footing.") rendered verb-first compliant — keep "Put a complex operation on firmer footing." (already verb-first), support line if the source has one, navy `Get in touch` button to `/contact/`.

**No LMI handover on Our Work** (matches services pages; LMI handover is industry-pages-only). Footer is the shared `Footer.astro`, unchanged.

---

## 6. Case study template + studies — `/our-work/<slug>/`

Source: `equibt_case_study_prototype_v5x.html` (the worked example is the mortgage lead-leakage study). Build a reusable **`CaseStudy.astro`** component (data-driven, exactly the `ServicePage.astro` model) and render one page per study. Section order from the source:

**6.1 Hero** (white). Eyebrow (sector descriptor, e.g. `FINANCIAL SERVICES`), verb-first H1 from the source ("Cut mortgage lead leakage across direct and broker channels."), Lora subhead. Then the **one-page summary as a hairline metric band** (the v5x `stat-band`): a row of metric cells, each = big navy figure + italic Lora caption, separated by hairlines (NOT filled stat boxes). Each figure tied to its caption (evidence, not bare number). Action: `Get in touch` + `View our work ›` chevron to `/our-work/`.

**6.2 Body** (alternating white/beige), reusing hanging-label editorial blocks: `The problem`, `What we did`, `The result` — each an eyebrow/H2 + prose from the source. Verb-first on any sub-headings. Drop the v5x `reveal-d1/d2` stagger; one reveal per section.

**6.3 The one dark moment (optional, max one).** If a study warrants a flagship pull-quote or headline outcome, it may use the single dark-moment treatment per DESIGN_LEARNINGS (contained, flat dark field, not full-bleed, terracotta accent, copy legible). **Dark tone for Our Work / case pages: propose the exact value at plan-gate**, a flat dark tone distinct from home (near-black), services (dark-slate `#2C3E50`) and industries (ink-navy) per the "tone by page TYPE" rule — e.g. a flat charcoal or deep slate. If a study has no natural flagship moment, omit it; do not force a dark box.

**6.4 Related** (alternating). Eyebrow `RELATED`, headline from the source ("Follow the workstream."), a small set of hairline links to related studies/services (de-boxed, chevron links). No coloured pillar tags.

**6.5 Closing CTA** (LIGHT, block 22): eyebrow `WORK WITH US`, the source CTA headline, `Get in touch`.

**Studies to create:** at minimum the fully-worked study in the case-study prototype. For the other index cases, create a study page **only where full Problem/Approach/Outcome + result copy exists** in the sources; where only the index teaser exists, the index row carries the content and does NOT link to a `/our-work/<slug>/` page. **State the exact study list (slugs + which have full copy) at plan-gate** — do not invent case content to fill pages.

---

## 7. Case study architecture (decide at plan-gate)

A `cases` content collection already exists in `src/content.config.ts` (schema: `title`, `sector`, `stat`) and `src/content/cases/` is empty (`.gitkeep`). Two clean options:

- **(Recommended) Content collection:** extend the `cases` schema in `content.config.ts` with the fields these pages need (e.g. `slug`/derived, `pillar`, `descriptor`, `metric`, `caption`, `problem`, `approach`, `outcome`, summary-band `stats[]`, `related[]`, `draft`). Author each study as `src/content/cases/<slug>.md`. The index reads the collection and groups by pillar; `[slug].astro` renders via `CaseStudy.astro`. This matches the existing scaffolding and the empty-collection build warning.
- **(Alternative) Flat data + pages:** a typed data object + flat `our-work/<slug>.astro` wrappers, mirroring the services `data` + `ServicePage.astro` pattern.

Edit ONLY the `cases` block of `content.config.ts`; leave `insights` untouched. Confirm your choice, the schema, and the field list at plan-gate.

---

## 8. Acceptance checklist (the reviewer eyeballs, does not trust self-checks)

- [ ] `/our-work/` index live; case study pages live at `/our-work/<slug>/` for every study you create; all inbound `/our-work/` links across the site still resolve.
- [ ] `npm run build` green. No references to non-existent assets. Empty-collection warning resolved if you populate `cases`.
- [ ] No edits outside section 2's create/edit list. `insights` schema untouched. Zero changes to home/base/tokens/services/industries/icon-root/Nav/Footer/Layout. (Clean firewall = zero merge conflict with parallel branches.)
- [ ] Cases de-boxed on hairlines (Problem/Approach/Outcome retained); NO `pillar-badge`, NO six-colour pillar coding, NO `Read the case`/`Hide` disclosure, NO `01/02/03` numbering, NO `btn-outline`, NO wash fills.
- [ ] Pillar groups carry monochrome dotted eyebrows with the locked pillar phrasing, no colour.
- [ ] Case study one-page summary = hairline metric band (figure + italic caption), not filled stat boxes. Every figure tied to its action/caption (evidence, not claims).
- [ ] At most ONE dark moment per page; flat dark field, not full-bleed; tone distinct from home/services/industries per the page-type rule. Closing CTAs are light.
- [ ] Italic Lora captions; Lora 22px body; type matches the merged home/services. One reveal per section; no `reveal-d1..d3` stagger.
- [ ] Verb-first headlines throughout; firm "we"; no named individual; no em/en dashes; no dates/years; no public prices; anonymised client descriptors; no visible DMAICO.
[RETIRED] Illustrative markers removed (July 2026).
- [ ] No LMI handover on Our Work (services parity).

When done: open a PR, post the PR URL as a comment on Linear **EQT-255**, list the changed files, and confirm the build. Do NOT mark the issue Done — Herman/Cowork sets Done after merge and live verify.

---

## AS-BUILT ADDENDUM (Herman review, 2026-06-08)

The build was shipped with these approved deviations from the spec above. The canonical record is `DESIGN_LEARNINGS_v6x.md` → "Our Work index + case study (EQT-255)" and `EQUIBT_V6X_UI_TRANSLATION.md` → "EQT-255 amendments"; this addendum just flags where the build departs from the brief.

1. **Index is a compact two-column proof grid, not open P/A/O rows** (§5.2). The full-width Problem/Approach/Outcome rows read too tall and repetitive. Each case shows italic sector + big metric + verb-first H3 + one context line (the Problem). Full P/A/O stays in the case data for detail pages.
2. **Invented verb-first Outcome lines** per case (tied to the existing metric, no new numbers) — Herman approved, overriding "do not invent case content".
3. **Illustrative concept fully retired** (July 2026): schema field, HTML markers and visible labels all removed. All cases are real anonymised engagements.
4. **LMI handover ADDED to each case page, industry-relevant** (§5.3 / acceptance "No LMI handover" reversed). Industry pulled from the case's related Industry link. Index still has no handover.
5. **WHERE THIS FITS (trainline) moved directly under the hero** (was inside Related, §6.4); heading is a per-case `pathwaySummary`; station marker reads `THIS ENGAGEMENT` (not `YOU ARE HERE`).
6. **THE WORK rebuilt as one connected journey** on a single vertical spine with line-art glyph nodes + connector captions, not three alternating hairline-block sections.
7. **Case hero restructured:** motif sits above a FULL-WIDTH three-metric band (copy+motif top row, band below). Unified ≤960px responsive collapse for hero row + band + CTA art.
8. **Dark-moment tone = flat charcoal `#22211F`** (§6.3 value chosen at plan-gate).
9. **Sector descriptor rendered italic Lora** on index rows (differs from the services OUR WORK section's caps-terracotta sector; reconcile later).
