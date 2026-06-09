# CLAUDE CODE / COWORK BRIEF — EQT-257: convert Contact + Capability Statement to v6x

## STOP — READ THIS FIRST

- **This file is the complete spec.** Do not hunt for other prompts. Do not open the `prompts/` folder. Everything you need is in this brief plus the source files and references it names. The reference files in section 4 ARE required reading; everything else is off limits.
- **Do not generate images.** No AI image generation, no raster assets. Hero/section motifs use the existing line-art via the `<Icon>` / glyph components only. Real artwork is a later content-only swap (EQT-274/275).
- **Touch ONLY the files named in section 2.** Home, base, tokens, services, industries, our-work, about, how-we-work, icon-root, Nav, Footer, Layout and content.config are conflict firewalls. If you think you need to edit one, STOP and report instead.
- **Plan-gate.** Before writing any code, post your build plan (file list, architecture decision, the page section maps, the contact-form scope, the dark-moment decision, the hero interim motif choices, the LMI-handover decision) and wait for go. Do not write code until the plan is approved.
- **Verify, do not self-certify.** When done, list exactly what you changed, confirm `npm run build` is green, and report honestly on screenshots (desktop + mobile). A reviewer eyeballs; false "present" passes have happened. If screenshot tooling fails, say so plainly.
- Repo discipline (AGENTS.md / CLAUDE.md govern): ONE canonical clone, work on a branch off latest `main`, never self-mark Done. **Done = merged to main AND deployed on Cloudflare Pages AND live-verified.** Merge alone is not live.

---

## 1. Job

Convert the EQUIBT **Contact** page and **Capability Statement** page from their v5x HTML prototypes into the v6x Astro system. They must read as the same site as the live v6x home, services, industries, Our Work, About and How We Work surfaces.

- **Copy is the authority** from the two v5x prototypes (sections 5/6). STYLE comes from the v6x system, NOT from the v5x prototypes. Translate, do not transcribe the styling.
- Branch: **`eqt-257-contact-v6x`** off the latest `main`. One branch, one PR.

| Page | URL | v5x source (in `prototypes/`) |
|---|---|---|
| Contact | `/contact/` | `equibt_contact_prototype_v5x.html` |
| Capability Statement | `/capability-statement/` | `equibt_capability_statement_prototype_v5x.html` |

**Critical dependency (the reason this is next):** `/contact/` is linked site-wide and does not exist in the Astro build yet, so every "Get in touch" currently 404s — the Nav CTA (`Nav.astro`), the footer Company column (`Footer.astro`), the home hero + home closing CTA (`index.astro`), and the About / How We Work / services / industries / Our Work CTAs all point at `/contact/`. `/capability-statement/` is linked from the home hero ("View capability statement"). Both inbound links must resolve after this build.

**Scope notes (locked):**
- The contact **form handler / live submission is OUT of scope** (EQT-262, go-live). Build the form markup + v6x hairline styling only. No backend, no email wiring. Decide the interim at plan-gate (inert submit vs `mailto:` fallback — recommend a plain `mailto:hello@equibt.com` fallback so the page is usable pre-handler, confirm).
- Capability Statement is a page, not a PDF. The old downloadable PDF is dropped pending v6x rework (UI translation block 34). The home hero already links the page route.

---

## 2. Files

**Create / edit ONLY these:**

```
src/pages/contact.astro               (create)
src/pages/capability-statement.astro  (create)
src/styles/contact.css                (create — page styles for BOTH pages; reference tokens, do not redefine them)
```

Both pages share `contact.css` (own `.contact-*` / `.cap-*` classes). **Do NOT import `about.css`, `home.css`, `services.css` or `our-work.css`** — they belong to other issues and coupling risks merge conflicts. Re-author the shared idioms (hanging-label rows, de-boxed columns, evidence rows, side-bleed, cta-grid, reveal) as your own classes in `contact.css`, mirroring those built precedents. Reuse only the genuinely global base.css classes (`.eyebrow`, `.btn-primary`, `.btn-text`/`.link-label`/`.ar`).

**DO NOT TOUCH (conflict firewalls):**

```
src/pages/index.astro
src/pages/about.astro / how-we-work.astro          (EQT-256, in review)
src/styles/home.css / base.css / tokens.css / about.css
src/pages/services/** + src/styles/services.css     (EQT-253)
src/pages/industries/** + src/styles/industries.css (EQT-254)
src/pages/our-work/** + src/styles/our-work.css     (EQT-255)
src/components/icons/**        (read and use via <Icon> / glyph imports, never edit)
src/components/ServicePage.astro / CaseStudy.astro  (READ as pattern references; do not edit)
src/components/Nav.astro / Footer.astro / src/layouts/Layout.astro  (read, use, do not edit)
src/content.config.ts          (no collection needed; do not edit)
```

---

## 3. Icons — via the existing components only

- Hero and section motifs: use the existing `<Icon name="..." />` dispatcher and `src/components/icons/glyphs/*.astro`, exactly as `ServicePage.astro` / `CaseStudy.astro` / `about.astro` do. Do not create new glyphs or draw artwork.
- Render the interim hero `<Icon>` at home-hero scale with the fine-line hero treatment, and leave a seam comment exactly like the ServicePage / CaseStudy / About heroes (`<!-- hero art ... swaps in here later (artwork-authority, EQT-274/275) -->`). Note: the 520-viewBox `hero-motif` renders at native weight (NO fine-line override); the 64-viewBox glyphs need the scoped fine-line stroke override (see how `about.css` `.about-hero-art.glyph` does it). Confirm the interim motif per page at plan-gate.
- The six service icons and four sector icons are available via `<Icon>` for the capability statement's WHAT WE DO and INDUSTRIES sections (uniform sizing, on one calm left axis, as the home does).

---

## 4. v6x system — the rules you are building to

Required reading, in this order (all in the repo):

1. `prototypes/DESIGN_LEARNINGS_v6x.md` — the design authority. Read fully, especially: Boxes/dividers, Eyebrows, Layout, Chevron links, **Inherited locks** (firm "we", no named individual, no dates/years, no decorative left-rule, no public prices, anonymised client descriptors, "Get in touch" CTA), and **Rollout page-type locks** (sub-page hero, side-bleed callout, footer top hairline, dark-field tone by page type).
2. `prototypes/explorations/EQUIBT_V6X_UI_TRANSLATION.md` — component-by-component v5x→v6x. Rows that matter here: **contact form** (block 26 — hairline inputs, 1px border no fill, Montserrat uppercase labels, terracotta focus ring, navy solid submit), **facts → hanging-label rows** (block 26), **evidence rows** (number tied to verb-first action, no bare stats), **side-bleed callout** (block 17), **light closing CTA** (block 22), **breadcrumb** (note — minimal, only if used).
3. `src/styles/services.css` + `src/styles/our-work.css` + `src/pages/index.astro` + `src/styles/home.css` + `src/styles/about.css` + `tokens.css` + `base.css` — the built precedents. Your `.contact-*`/`.cap-*` classes mirror these. Reference tokens (`--wide`, `--max`, `--hairline`, `--terracotta`, `--navy`, `--near-black`, `--caption`, `--muted`, `--off-white`, `--link-gap`). Do not redefine tokens.
4. `prototypes/explorations/EQUIBT_V6X_DIRECTION_EXPLORATION_v6.html` — worked component examples. Blocks **17** (side-bleed callout), **18/21** (hanging-label rows), **20** (page hero), **22** (light closing CTA), **26** (contact form + facts).

**Precedence rule:** DESIGN_LEARNINGS_v6x first, then the built home/services/industries/our-work/about surfaces, then exploration v6.

Quick reference (full detail in DESIGN_LEARNINGS_v6x):

- **Type:** Montserrat 700 headings (letter-spacing -0.012em); Lora 500 22px body, line-height 1.45, near-black `#161616`; italic Lora captions. H1 `clamp(40px,3.4vw,46px)`. Minimise font-size variation.
- **Palette:** white `#FFFFFF` + beige `#F5F3EE` only, alternating. Terracotta `#C15F3C` single accent. Navy line-art `#26245C`. Hairline `rgba(38,36,92,0.13)`. No wash section fills.
- **Boxes:** 1px hairline, rounded ~16px, no drop shadow, no hover-lift. Open content on hairlines is the default; earn the box.
- **Eyebrows:** terracotta dot + ALL CAPS Montserrat, ~14px to title. Every section carries an eyebrow.
- **Chevron links:** `.btn-text` in base.css. `btn-outline` is RETIRED.
- **Scroll-reveal:** ONE minimal reveal per SECTION (fade + ~8px rise, 350ms ease-out, once, `prefers-reduced-motion` disables it). Reuse the about.css / our-work.css `reveal` pattern. The v5x `reveal-d1..d3` stagger is RETIRED.
- **Voice (HARD):** firm "we", **no named individual**; verb-first active titles; no em/en dashes (colon or comma); **no dates/years in public copy** (drop "Operating since 2009" on the capability statement); no public prices; anonymised client-type descriptors; no visible DMAICO acronym; "Get in touch" CTA.

---

## 5. Contact — `/contact/`

Source: `equibt_contact_prototype_v5x.html`. Copy is the authority. Section order (alternating white/beige):

**5.1 Hero** (white). Asymmetric, copy left, interim `<Icon>` motif right (home-hero scale, fine-line, seam comment). Eyebrow `CONTACT`, H1 from source ("Start with a 15-minute conversation."), Lora subhead ("It is enough to tell you whether EQUIBT is the right fit for your operation. No obligation."), `Get in touch` primary (anchors to the form, e.g. `#contact-form`). Recommend hero motif = `Dialogue` glyph (confirm at plan-gate).

**5.2 What to expect** (eyebrow `WHAT TO EXPECT`, H2 "The facts before we talk."). The three facts (Engagement model / Typical start / Geography) as **hanging-label rows on hairlines** (navy Montserrat label left, Lora value right) — the statement-row device. No boxes.

**5.3 Reach us** (eyebrow `REACH US`, H2 "Send the problem, not a polished brief."). Email (`hello@equibt.com`), LinkedIn, and the one-line "Form" expectation as open editorial rows / inline prose links (block 33 inline-link style: terracotta + always-on underline, external `↗`, mailto/internal no mark). No boxes.

**5.4 The form** (eyebrow `GET IN TOUCH`, H2 "Tell us what is under strain."). The v5x form becomes **v6x hairline inputs**: 1px hairline border, no fill, Montserrat uppercase labels, terracotta focus ring, generous spacing, navy solid `Get in touch` submit. Fields: Name, Organisation, "What is the operational problem?" (textarea). **No live handler this issue** — interim per plan-gate (recommended `mailto:hello@equibt.com` action). Give the section `id="contact-form"` so the hero CTA anchors to it.

No LMI handover on Contact.

---

## 6. Capability Statement — `/capability-statement/`

Source: `equibt_capability_statement_prototype_v5x.html`. This is a long single-page summary of the whole firm; it deliberately re-states home/About/services/industries/Our-Work content in one place. Re-author the idioms as `.cap-*` classes (do not import the other stylesheets). Section order (alternating white/beige):

**6.1 Hero** (white). Eyebrow `CAPABILITY STATEMENT`, H1 "A complete picture of how we work.", Lora subhead (the advisory one-liner), `Get in touch`. Interim hero motif = `hero-motif` (native weight, seam comment). Confirm.

**6.2 Who we are** (eyebrow `WHO WE ARE`, H2 "We make operational improvement hold."). Editorial prose on the left axis. **Drop "Operating since 2009."** Optionally render the "different model" line as a side-bleed callout (block 17), used once.

**6.3 How we work** (eyebrow `HOW WE WORK`, H2 "Three things make the improvement survive our exit."). The three differentiators (Sustainment / Capability / Governance) as **open editorial columns on top hairlines** with a hand-drawn glyph each (mirror the About differentiators: Roadmap / Capability / Assure). No boxes.

**6.4 What we do** (eyebrow `WHAT WE DO`, H2 "Six services. One focus: capability that holds."). The six services as the home `svc-row` idiom: hand-drawn pillar `<Icon>` on one left axis, dotted monochrome kicker (`FRAME · DEFINE`), service name, one line, `Explore <PILLAR> ›` to `/services/<pillar>/`. Locked service names (FRAME = Problem Framing, PLAN = Operations Diagnostic, SOLVE = Iterative Improvement, EVOLVE = Rapid Pilot, GOVERN = Architecture & Governance, SCALE = Operational Embedding).

**6.5 Industries** (eyebrow `INDUSTRIES WE SERVE`, H2 "Built for complex, regulated operations."). Four sectors as editorial rows with the sector `<Icon>`, linking to `/industries/<sector>/`. Mirror the home industry-list idiom.

**6.6 Proven in practice** (eyebrow `PROVEN IN PRACTICE`, H2 "Operational gains that stay visible after the project ends."). The engagements as **light evidence rows on hairlines** grouped by sector: verb-first action + the metric move (terracotta inline) + anonymised descriptor (italic Lora). NO boxes, NO bare stats. Keep the anonymised descriptors as-is (Bank, Property Group, Government Department, Privacy Regulator, Utilities Ombudsman, Energy Retailer, Industrial Manufacturer, Chemical Sales). `Read the full case studies ›` → `/our-work/`. Reconcile the energy-retailer save rate to **18% to 24%** (EQT-248 pinned this; the capability source already says 18% to 24% — keep it).

**6.7 How to engage** (eyebrow `HOW TO ENGAGE`, H2 "The facts before we talk."). The facts (Engagement model / Typical start / Geography / How to reach us) as hanging-label rows, same device as Contact 5.2. `hello@equibt.com` as an inline link.

**6.8 Closing CTA** (LIGHT, block 22). Eyebrow `WORK WITH US`, a verb-first headline (the v5x "Put a complex operation on firmer footing." is RETIRED as cliché per EQT-256 review — write a fresh verb-first line, e.g. "Start with the problem that won't stay fixed." or propose one), navy `Get in touch`. Optionally cta-grid copy-left / motif-right. No dark CTA.

LMI handover on the capability statement: **default NONE** (brand rule keeps it to home + industry + Our Work case pages; About + How We Work were a Herman override). Propose at plan-gate if you think the capability statement warrants it.

---

## 7. Architecture + dark-moment (decide at plan-gate)

- **Architecture:** two standalone one-off `.astro` pages sharing `contact.css`, mirroring `index.astro`'s page pattern — NOT the `ServicePage.astro` data-object model. Confirm. (The capability statement's services/industries/evidence lists may use a small local data array mapped in-file, like the How We Work arc, to avoid repetitive markup — your call, confirm.)
- **Dark moment:** Contact warrants NONE (utility page). Capability statement is long/positioning and may warrant NONE; default all-light. If one moment genuinely earns dark, propose a flat tone distinct from home `#101317`, services `#2C3E50`, industries `#202946`, case `#22211F`. Do not force it.
- **Footer top hairline** (base.css, EQT-255) already separates a white last section from the footer — no action needed.

---

## 8. Acceptance checklist (the reviewer eyeballs, does not trust self-checks)

- [ ] `/contact/` and `/capability-statement/` live; all inbound links resolve (Nav CTA, footer Contact, home hero "Get in touch" + "View capability statement", and the About/How-We-Work/services/industries/Our-Work CTAs that point at `/contact/`).
- [ ] `npm run build` green. No references to non-existent assets.
- [ ] No edits outside section 2's create list. Zero changes to home/base/tokens/about/services/industries/our-work/icon-root/Nav/Footer/Layout/content.config. (Clean firewall = zero merge conflict.)
- [ ] Contact form is v6x hairline inputs (1px border, no fill, Montserrat uppercase labels, terracotta focus ring, navy submit); no live handler wired (interim per plan-gate); hero CTA anchors to the form.
- [ ] Facts / how-to-engage are hanging-label rows on hairlines, NOT boxes.
- [ ] Capability differentiators + services + industries are open rows/columns on hairlines (no boxes, no shadow, no hover-lift); pillar/sector icons via `<Icon>`, uniform size, one left axis.
- [ ] Proven-in-practice are light evidence rows (number tied to verb-first action), anonymised descriptors italic Lora; NO bare stat boxes; energy retailer = 18% to 24%.
- [ ] NO dates/years anywhere ("Operating since 2009" dropped). Verb-first headlines; firm "we"; no named individual; no em/en dashes; no public prices; no visible DMAICO.
- [ ] Side-bleed callout (if used) genuinely bleeds off the viewport edge, rounded inner side only, content on the page axis.
- [ ] At most ONE dark moment per page (likely none); closing CTA light; no `btn-outline`; no wash fills.
- [ ] Italic Lora captions; Lora 22px body; one reveal per section; no `reveal-d1..d3`.
- [ ] Screenshots eyeballed at desktop + mobile; no horizontal overflow at 390px.

When done: open a PR, post the PR URL as a comment on Linear **EQT-257**, list the changed files, and confirm the build. Do NOT mark the issue Done — Herman/Cowork sets Done after merge AND Cloudflare Pages deploy AND live verify.
