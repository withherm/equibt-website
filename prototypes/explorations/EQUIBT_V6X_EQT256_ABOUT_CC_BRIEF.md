# CLAUDE CODE / COWORK BRIEF — EQT-256: convert the About suite to v6x

## STOP — READ THIS FIRST

- **This file is the complete spec.** Do not hunt for other prompts. Do not open the `prompts/` folder. Everything you need is in this brief plus the source files and references it names. The reference files in section 4 ARE required reading; everything else is off limits.
- **Do not generate images.** No AI image generation, no raster assets. Artwork is a later content-only swap (EQT-274/275). Use existing line-art via the icon components only.
- **Touch ONLY the files named in section 2.** Home, base, tokens, services, industries, our-work and icon-root surfaces are conflict firewalls. If you think you need to edit one, STOP and report instead.
- **Plan-gate.** Before writing any code, post your build plan (file list, the architecture decision, the page section maps, the dark-moment decision + tone, the client-logo-wall treatment, the hero interim motif choices) and wait for go. Do not write code until the plan is approved.
- **Verify, do not self-certify.** When done, list exactly what you changed, confirm `npm run build` is green, and report honestly on screenshots. A reviewer eyeballs; false "present" passes have happened. If screenshot tooling fails, say so plainly.
- Repo discipline (AGENTS.md / CLAUDE.md govern): ONE canonical clone, work on a branch off latest `main`, never self-mark Done. Done = merged AND live-verified.

---

## 1. Job

Convert the EQUIBT **About** page and **How We Work** page from their v5x HTML prototypes into the v6x Astro system. They must read as the same site as the live v6x home, services, industries and Our Work surfaces.

- **Copy is the authority** from the two v5x prototypes (sections 5/6). STYLE comes from the v6x system, NOT from the v5x prototypes. Translate, do not transcribe the styling.
- Branch: **`eqt-256-about-v6x`** off the latest `main`. One branch, one PR.

| Page | URL | v5x source (in `prototypes/`) |
|---|---|---|
| About | `/about/` | `equibt_about_prototype_v5x.html` |
| How We Work | `/how-we-work/` | `equibt_howwework_prototype_v5x.html` |

Both `/about/` and `/how-we-work/` are linked site-wide (nav "About" dropdown, footer Company column, services/industries "where it leads"). Those inbound links must resolve after this build.

**Scope notes (locked):**
- About is the SINGLE page carrying the brand story, the Why-EQUIBT differentiation/values, and "our people" content (all folded in 2026-06-04). No standalone Why EQUIBT page.
- The standalone **Operators page is deferred — do not build it** (EQT-244). Credentials/Proven Results (EQT-222) is a separate backlog decision, NOT in scope; its proof role is covered by the client logo wall (see 5.6).

---

## 2. Files

**Create / edit ONLY these:**

```
src/pages/about.astro            (create)
src/pages/how-we-work.astro      (create)
src/styles/about.css             (create — page styles; reference tokens, do not redefine them)
```

**DO NOT TOUCH (conflict firewalls):**

```
src/pages/index.astro            (home surface)
src/styles/home.css / base.css / tokens.css
src/pages/services/** + src/styles/services.css       (EQT-253)
src/pages/industries/** + src/styles/industries.css   (EQT-254)
src/pages/our-work/** + src/styles/our-work.css       (EQT-255)
src/components/icons/**           (icon root AND glyphs/ — read and use via <Icon> / glyph imports, never edit)
src/components/ServicePage.astro / CaseStudy.astro    (READ as pattern references; do not edit)
src/components/Nav.astro / Footer.astro / src/layouts/Layout.astro   (read, use, do not edit)
src/content.config.ts             (no collection needed; do not edit)
```

---

## 3. Icons — via the existing components only

- Hero motif and section motifs: use the existing `<Icon name="..." />` dispatcher and the `src/components/icons/glyphs/*.astro` components, exactly as `ServicePage.astro` / `CaseStudy.astro` do. Do not create new glyphs or draw artwork.
- Any page hero motif is a later content-only artwork swap (EQT-275). Render the interim `<Icon>` at home-hero scale with the fine-line hero treatment (rollout lock), and leave a seam comment exactly like the ServicePage / CaseStudy hero (`<!-- hero art ... swaps in here later (artwork-authority, EQT-274/275) -->`). Confirm the interim motif choice per page at plan-gate.

---

## 4. v6x system — the rules you are building to

Required reading, in this order (all in the repo):

1. `prototypes/DESIGN_LEARNINGS_v6x.md` — the design authority. Read it fully, especially: Boxes/dividers, Eyebrows, Layout, Chevron links, **Client logo wall**, **Inherited locks** (firm "we", no named individual, no dates/years, no decorative left-rule), and **Rollout page-type locks** (sub-page hero, side-bleed callout, footer top hairline, dark-field tone by page type).
2. `prototypes/explorations/EQUIBT_V6X_UI_TRANSLATION.md` — component-by-component v5x→v6x. The rows that matter here: **beliefs list** (drop the left rule → hanging-label rows), **Our Story field notes** (block 31, drop "Since 2009"), **We are / We're not compare-card** (block 30 → two open columns), **side-bleed highlight** (block 17), **highlight-callout / answer-box**, **light closing CTA** (block 22), **client logo wall** (block 24).
3. `src/styles/services.css` + `src/styles/our-work.css` + `src/pages/index.astro` + `src/styles/home.css` + `tokens.css` + `base.css` — the built precedents. Your `.about-*` classes mirror these patterns; reuse global `.eyebrow`, `.btn-primary`, `.btn-text`/`.link-label`/`.ar` from base.css; reference the tokens (`--wide`, `--max`, `--hairline`, `--terracotta`, `--navy`, `--near-black`, `--caption`, `--muted`, `--off-white`, `--link-gap`). Do not redefine tokens.
4. `prototypes/explorations/EQUIBT_V6X_DIRECTION_EXPLORATION_v6.html` — worked component examples. Blocks **17** (side-bleed callout), **18/21** (hanging-label statement rows), **20** (page hero), **22** (light closing CTA), **24** (client logo wall), **30** (we-are/we're-not), **31** (story field notes).

**Precedence rule:** DESIGN_LEARNINGS_v6x first, then the built home/services/industries/our-work surfaces, then exploration v6.

Quick reference (full detail in DESIGN_LEARNINGS_v6x):

- **Type:** Montserrat 700 headings (letter-spacing -0.012em); Lora 500 22px body, line-height 1.45, near-black `#161616`; italic Lora captions. H1 `clamp(40px,3.4vw,46px)`. Minimise font-size variation.
- **Palette:** white `#FFFFFF` + beige `#F5F3EE` only, alternating. Terracotta `#C15F3C` single accent. Navy line-art `#26245C`. Hairline `rgba(38,36,92,0.13)`. No wash section fills.
- **Boxes:** 1px hairline, rounded ~16px, no drop shadow, no hover-lift. Open content on hairlines is the default; earn the box.
- **Eyebrows:** terracotta dot + ALL CAPS Montserrat, ~14px to title. Every section carries an eyebrow.
- **Chevron links:** terracotta text + bolder `›`, underline draws left-to-right under the text then the chevron nudges. Match `.btn-text` in base.css. `btn-outline` is RETIRED.
- **Layout:** generous air, asymmetric hero (motif right, bleeding into whitespace), content on one calm left axis, varied vertical rhythm. **One dark moment maximum per page** (and these pages may warrant none — see 7).
- **Scroll-reveal:** ONE minimal reveal per SECTION (fade + ~8px rise, 350ms ease-out, once, `prefers-reduced-motion: reduce` disables it). Reuse the `our-work.css` `ow-reveal` / `service-reveal` pattern. The v5x `reveal-d1..d3` stagger is RETIRED — do not port it.
- **Voice (HARD):** firm "we", **no named individual** (the "our people / our team" content stays firm-voice, never names Herman); verb-first active titles; no em/en dashes (colon or comma); **no dates/years in public copy** (drop "Since 2009" / "Operating since ..."); no public prices; anonymised client-type descriptors; no visible DMAICO acronym; "Get in touch" CTA.
- **No decorative left-rule on prose** (the v5x beliefs terracotta left-rule is retired).

---

## 5. About — `/about/`

Source: `equibt_about_prototype_v5x.html`. Copy is the authority; lift it (headlines, paragraphs, belief text, story field-notes). Drop any dates/years. Section order (alternating white/beige):

**5.1 Hero** (white). Asymmetric, copy left, interim `<Icon>` motif right (home-hero scale, fine-line, seam comment). Eyebrow `ABOUT`, H1 from source ("We make operational improvement hold."), Lora subhead, `Get in touch` primary. No hero metric band.

**5.2 The problem we solve** (eyebrow `THE PROBLEM WE SOLVE`, source H2 "Most improvement programmes produce results. Fewer produce results that last."). The v5x `why-intro` + `highlight-callout` + `why-copy` + `answer-box` become: editorial prose on the left axis, with the `highlight-callout` rendered as the **side-bleed callout** (block 17 — genuinely bleeds off the left viewport edge, navy-wash `#E8ECF5`, rounded inner side only, content on the page axis) and the `answer-box` as a white-with-hairline side-bleed on the right edge (the two bleeds asymmetric, used sparingly). No drop-shadow boxes.

**5.3 Why EQUIBT / differentiators** (eyebrow `WHY EQUIBT`, source H2 "What makes improvement hold in your team."). The three v5x `challenge-card` boxes de-box to **open editorial columns on top hairlines** with a hand-drawn glyph each (one calm left axis idiom, like the services proof columns). No boxes, no shadow.

**5.4 What we believe** (eyebrow `WHAT WE BELIEVE`, source H2 "Four things we will not negotiate on."). The four v5x `belief-row` items become **hanging-label editorial rows on hairlines** (navy Montserrat lead left, Lora prose right) — the statement-row device (blocks 18/21). **Retire the terracotta left-rule.**

**5.5 Our story** (eyebrow `OUR STORY`, source H2 "Equipped to make it hold."). The five v5x `story-item` field notes become **hanging-label field-note rows** (block 31): terracotta Montserrat hook label + Lora prose. **Drop "Since 2009" and any year.** Firm "we" voice; this is where "our people / our team" lives, but no named individual.

**5.6 Client logo wall** (DESIGN_LEARNINGS: the logo wall lives on Home AND About). Eyebrow `CLIENTS` + header above a top hairline; a **static monochrome grid** (NOT a carousel), 5 across, 3-4 rows, generic neutral placeholders only ("Client mark"), one hairline above and one below. Reuse the home logo-wall idiom; real logos are a later content swap. Confirm at plan-gate whether to lift the exact home markup pattern or rebuild a minimal version in `about.css`.

**5.7 Closing CTA** (LIGHT, block 22). Eyebrow `WORK WITH US`, the source CTA headline ("Put a complex operation on firmer footing."), navy `Get in touch`. Optionally the `cta-grid` copy-left / motif-right treatment used on Our Work/industries. No dark CTA.

**LMI handover: NONE on About** (the LMI handover is home + industry + Our Work case pages only; About carries the client logo wall instead, not the training handover).

---

## 6. How We Work — `/how-we-work/`

Source: `equibt_howwework_prototype_v5x.html`. Section order (alternating white/beige):

**6.1 Hero** (white). Asymmetric, interim `<Icon>` motif. Eyebrow `HOW WE WORK`, H1 from source ("We design every engagement to end."), Lora subhead, `Get in touch`.

**6.2 The operating model** (eyebrow `THE OPERATING MODEL`, source H2 "We build the operation to run without us."). Editorial prose with air; side-bleed callout if the source carries one.

**6.3 How we operate / we are — we're not** (eyebrow `HOW WE OPERATE`, source H2 "Direct about what we are, and what we are not."). The two v5x `compare-card` boxes become **two open columns on top hairlines** (block 30), each a hairline list of rows ("We are ..." / "We are not ..."). No boxes.

**6.4 The arc** (eyebrow `THE ARC`, source H2 "How an engagement runs."). The v5x `operating-arc` becomes a **hairline vertical timeline** with a hand-drawn connector line, phases as open steps (not boxes) — the phase-timeline translation. Consider reusing the connected-spine idiom built in `CaseStudy.astro` "THE WORK" (line-art nodes on one continuous spine) if it fits; confirm at plan-gate.

**6.5 Closing CTA** (LIGHT). Eyebrow `WORK WITH US`, source CTA headline ("See how this fits your operation." rendered verb-first compliant), navy `Get in touch`.

---

## 7. Architecture + dark-moment (decide at plan-gate)

- **Architecture:** these are two bespoke one-off content pages, NOT a data-driven template family. Recommended: two standalone `.astro` pages (`about.astro`, `how-we-work.astro`) sharing `about.css`, mirroring `index.astro`'s page pattern — NOT the `ServicePage.astro` data-object model (no repetition to abstract). Confirm.
- **Dark moment:** at most one per page, and these pages may warrant NONE (they are narrative/positioning, no natural flagship metric). Default to all-light. If a single belief or arc moment genuinely earns a dark treatment, propose the flat dark tone at plan-gate — it must be distinct from home (`#101317`), services (`#2C3E50`), industries (`#202946`) and case pages (`#22211F`) per the page-type-tone rule. Do not force a dark box.
- **Footer top hairline** (added site-wide in base.css, EQT-255) already separates a white last section from the footer — no action needed, just be aware the last section can be white.

---

## 8. Acceptance checklist (the reviewer eyeballs, does not trust self-checks)

- [ ] `/about/` and `/how-we-work/` live; all inbound nav/footer/where-it-leads links to them resolve.
- [ ] `npm run build` green. No references to non-existent assets.
- [ ] No edits outside section 2's create list. Zero changes to home/base/tokens/services/industries/our-work/icon-root/Nav/Footer/Layout/content.config. (Clean firewall = zero merge conflict.)
- [ ] Beliefs are hanging-label rows on hairlines; the terracotta left-rule is GONE.
- [ ] Story field notes are hanging-label rows; NO dates/years anywhere ("Since 2009" dropped).
- [ ] Differentiators and we-are/we're-not are open columns on hairlines, NOT boxes; no drop shadow, no hover-lift.
- [ ] Side-bleed callout genuinely bleeds off the viewport edge, rounded inner side only, content on the page axis (not a floating contained box).
- [ ] Client logo wall on About: static monochrome grid (not a carousel), generic placeholders, one hairline above/below.
- [ ] At most ONE dark moment per page (likely none); closing CTAs are light; no `btn-outline`; no wash fills.
- [ ] Italic Lora captions; Lora 22px body; type matches the merged surfaces. One reveal per section; no `reveal-d1..d3` stagger.
- [ ] Verb-first headlines; firm "we"; no named individual; no em/en dashes; no public prices; anonymised client descriptors; no visible DMAICO.
- [ ] No LMI handover on About or How We Work.

When done: open a PR, post the PR URL as a comment on Linear **EQT-256**, list the changed files, and confirm the build. Do NOT mark the issue Done — Herman/Cowork sets Done after merge AND live verify.
