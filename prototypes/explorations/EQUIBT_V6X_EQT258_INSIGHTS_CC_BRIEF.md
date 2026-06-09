# CLAUDE CODE / COWORK BRIEF — EQT-258: convert Insights (blog) index + post template to v6x

## STOP — READ THIS FIRST

- **This file is the complete spec.** Do not hunt for other prompts. Do not open the `prompts/` folder. Everything you need is in this brief plus the source files and references it names. The reference files in section 4 ARE required reading; everything else is off limits.
- **Do not generate images.** No AI image generation, no raster assets. Hero/section motifs use the existing line-art via `<Icon>` / glyph components only. Real artwork is a later content-only swap (EQT-274/275).
- **Do not invent thought-leadership copy.** Post bodies must be real. Author ONLY the one post that has a complete written body in the v5x source (section 6); the other launch posts are a content task for Herman/Zoe (section 7) — leave them as `draft: true` placeholders, never fabricate operational claims, client stories, or numbers.
- **Touch ONLY the files named in section 2.** Everything else is a conflict firewall. If you think you need to edit one, STOP and report instead.
- **Plan-gate.** Before writing any code, post your build plan (file list, the `insights` schema changes, the index layout, the post anatomy mapping, the filter decision, the hero motif choice) and wait for go. Do not write code until the plan is approved.
- **Verify, do not self-certify.** When done, list exactly what you changed, confirm `npm run build` is green, and report honestly on screenshots (desktop + mobile). A reviewer eyeballs.
- Repo discipline (AGENTS.md / CLAUDE.md govern): ONE canonical clone, branch off latest `main`, never self-mark Done. **Done = merged to main AND deployed on Cloudflare Pages AND verified live.**

---

## 1. Job

Convert the EQUIBT **Insights** (blog) index and the **post** detail template from their v5x HTML prototypes into the v6x Astro system, driven by the existing `insights` content collection. They must read as the same site as the live v6x home, services, industries, Our Work, About and Contact surfaces.

- **Copy is the authority** from the v5x prototypes (section 5/6). STYLE comes from the v6x system, NOT from the v5x prototypes. Translate, do not transcribe the styling.
- Branch: **`eqt-258-insights-v6x`** off the latest `main`. One branch, one PR.

| Surface | URL | v5x source (in `prototypes/`) |
|---|---|---|
| Insights index | `/insights/` | `equibt_blog_prototype_v5x.html` |
| Post detail | `/insights/<slug>/` | `equibt_blog_post_prototype_v5x.html` |

**Inbound link:** the footer Company column links `Insights` → `/insights/` (`Footer.astro`). That must resolve. (Nav has no Insights item; do not add one.)

**Launch content:** **3 posts at launch, then a weekly cadence** (NOT the old 10-post target). The v5x index lists 8 headlines but only ONE has a written body — build the template and seed that one; see sections 6/7.

**Out of scope:** the six-colour pillar wayfinding retirement + the interactive pillar FILTER rework is **EQT-260**, not here. In this issue the pillar is shown as a monochrome Montserrat caption (no colour); see section 5.1 for how to treat the filter chips in the interim.

---

## 2. Files

**Create / edit ONLY these:**

```
src/content.config.ts                 (EDIT — extend the `insights` collection schema ONLY; do NOT touch `cases`)
src/pages/insights/index.astro        (create — the list)
src/pages/insights/[slug].astro       (create — renders the post; may delegate to a BlogPost component)
src/components/BlogPost.astro         (create — optional, if the post layout is worth abstracting)
src/styles/insights.css               (create — own .ins-* classes; reference tokens, do not redefine them)
src/content/insights/*.md             (create — the ONE complete launch post from section 6; drafts for the rest)
```

Own `.ins-*` classes in `insights.css`. **Do NOT import** `about.css`, `contact.css`, `home.css`, `services.css`, or `our-work.css` — re-author the shared idioms (hairline rows, thin-lined boxes, hero, reveal, chevron links) as your own classes. Reuse only base.css globals (`.eyebrow`, `.btn-primary`, `.btn-text`/`.link-label`/`.ar`). Mirror the `our-work/index.astro` + `[slug].astro` content-collection pattern (this is the closest precedent — a collection driving an index + detail pages).

**DO NOT TOUCH (conflict firewalls):**

```
src/pages/index.astro
src/pages/about.astro / how-we-work.astro / contact.astro / capability-statement.astro
src/styles/home.css / base.css / tokens.css / about.css / contact.css
src/pages/services/** + services.css        (EQT-253)
src/pages/industries/** + industries.css    (EQT-254)
src/pages/our-work/** + our-work.css         (EQT-255)
src/components/icons/**                       (read and use, never edit)
src/components/ServicePage.astro / CaseStudy.astro / Nav.astro / Footer.astro / src/layouts/Layout.astro (read, use, do not edit)
the `cases` collection in content.config.ts   (read for the pattern; do not change it)
```

---

## 3. Data — the `insights` collection (already exists)

`content.config.ts` already defines `insights` (loader globs `src/content/insights/**/*.md`) with a MINIMAL schema: `{ title, pillar (FRAME|PLAN|SOLVE|EVOLVE|GOVERN|SCALE), summary, draft }`. There are NO post files yet (only `.gitkeep`).

Extend the `insights` schema with the fields the index + post need, e.g.: `phase` (Define|Measure|Analyse|Improve|Control|Operate, to render the dotted kicker `PLAN · MEASURE`), `readTime` (e.g. "4 min read"), `lede` (the 1-2 quiet opening lines), `tldr` (string array — the TL;DR skim points), `tryThis` (the "one thing to try" — `{ heading, body }`), `order`/`date` for sort (NB: **no public dates in copy** — a sort key is fine, but do not render a published date on the page). The post BODY is the markdown content of the file (rendered via the collection's `render()`), not a frontmatter field. Confirm the exact field set at plan-gate. Keep `draft` filtering (drafts never render or list).

---

## 4. v6x system — the rules you are building to

Required reading, in this order (all in the repo):

1. `prototypes/DESIGN_LEARNINGS_v6x.md` — the authority. Especially: Boxes/dividers, Eyebrows, Chevron links, **Inherited locks** (firm "we", no named individual, **no dates/years in public copy**, no decorative left-rule, anonymised client descriptors, "Get in touch" CTA, **geography = Australia only**), and the EQT-255/256/257 rollout-locks (content-collection pattern, reveal, side-bleed, tiles).
2. `prototypes/explorations/EQUIBT_V6X_UI_TRANSLATION.md` — the rows that matter here: **blog skim anchors** (`tldr`/`takeaway` → thin-lined WHITE boxes with a terracotta Montserrat label; TL;DR top, one-thing-to-try bottom — block 27), **AEO answer / hook / closing** (QUIET plain prose, NO box — locked blog decision), **related-service box** → hairline row (block 27), **resource/insight cards → editorial rows on hairlines** (block 28), **FAQ/accordion** language if used (block 25), **breadcrumb** (minimal Montserrat caption-grey trail with `›`), **inline prose link** (terracotta always-on underline, no chevron — block 33), pillar shown as caption not colour.
3. `src/pages/our-work/index.astro` + `src/pages/our-work/[slug].astro` + `src/components/CaseStudy.astro` + `src/styles/our-work.css` + `tokens.css` + `base.css` — the built precedents for a collection-driven index + detail. Your `.ins-*` classes mirror these.
4. `prototypes/explorations/EQUIBT_V6X_DIRECTION_EXPLORATION_v6.html` — blocks **20** (page hero), **25** (accordion), **27** (TL;DR / takeaway / related-service), **28** (resource/editorial rows), **33** (inline link), **34** (download).

Quick reference: Montserrat 700 headings; Lora 500 22px body; italic Lora captions; H1 `clamp(40px,3.4vw,46px)`; white + beige only, alternating; terracotta single accent; 1px hairlines, no shadow, no hover-lift; one minimal reveal per section (no `reveal-d1..d3`); `.btn-text` chevron links; `btn-outline` retired. Voice: firm "we", no named individual, no em/en dashes (colon or comma), no public dates/years, no public prices, no visible DMAICO, "Get in touch".

---

## 5. Insights index — `/insights/`

Source: `equibt_blog_prototype_v5x.html`.

**5.1 Hero** (white). Eyebrow `INSIGHTS`, H1 "Field notes from the work.", Lora subhead ("Short, specific reads on diagnosing and fixing operations. Written for the people who run them."). Interim hero motif: a line-art glyph (recommend `DocReport` or the pen/`Blog post default` motif idiom) at home-hero scale, fine-line, seam comment. Confirm at plan-gate.

**5.2 Filter row** (interim). The v5x filter chips (All · FRAME · PLAN · SOLVE · EVOLVE · GOVERN · SCALE) render as **hairline pills, terracotta fill on active**, NO six-colour coding (the colour retirement and the full interactive filter rework are EQT-260). **Decide at plan-gate:** render the chips as a simple working client-side filter now (filter the list by pillar, no colour), OR render them static/visual and defer all filter behaviour to EQT-260. Recommend a minimal working client-side filter (hairline pills, terracotta active) so the page is usable, with the colour-system retirement still owned by EQT-260.

**5.3 The list.** De-boxed **editorial rows on hairlines** (NOT filled cards): each row = monochrome dotted pillar kicker (`PLAN · MEASURE`), verb-first/headline H3 (the post title), one-line summary, read-time as an italic-Lora caption, whole row links to `/insights/<slug>/` with the chevron idiom. Sorted by the collection sort key (newest first), drafts excluded. One reveal for the section.

---

## 6. Post template — `/insights/<slug>/`

Source: `equibt_blog_post_prototype_v5x.html`. Anatomy (top to bottom), per the v6x blog locks:

1. **Breadcrumb** (minimal): `Insights › <pillar>` caption-grey Montserrat with `›` separators. No chips.
2. **Hero / header** (white): dotted pillar kicker (`PLAN · MEASURE`), H1 (the headline), read-time italic caption, interim line-art motif (the `Blog post default` pen idiom), seam comment. No dark hero.
3. **Lede** (QUIET plain prose, no box): the 1-2 opening lines ("Forty-seven issues. Six operational areas..." + "We spent a week mapping cause and effect chains instead.").
4. **TL;DR** (skim box, TOP): a **thin-lined WHITE box** (1px hairline, ~16px radius, no shadow) with a terracotta Montserrat `TL;DR` label and the skim points. Earned container.
5. **Body** (rendered markdown): Lora 22px prose, generous measure (~680-720px), Montserrat sub-headings on hairlines for the "The pattern behind this:" style breaks, inline prose links per block 33.
6. **One thing to try** (skim box, BOTTOM): thin-lined white box, terracotta Montserrat label ("ONE THING TO TRY"), the heading + body.
7. **Closing / next step** (light): a hairline related row or a light CTA to `/contact/` ("Get in touch"). Keep it quiet — no dark moment, no CTA equation. Confirm the exact closing at plan-gate. (LMI handover does NOT belong on blog posts.)

Author exactly ONE real post from the v5x source: **"The diagnostic found 47 problems. The real number was 6."** (PLAN · MEASURE, 4 min read) — its full body, TL;DR points, "the pattern behind this" section, and "one thing to try" are all written in the v5x prototype. Lift that copy faithfully (drop any dates). This is the template proof.

---

## 7. The other launch posts (content task, NOT a build task)

The v5x index lists 8 headlines; only the one above has a written body. **Do not fabricate** the others. For launch (3 posts), the remaining 2 need real copy from Herman/Zoe. In this issue: create them as `draft: true` stubs (title + pillar only) so they don't render, and flag in the PR that 2 real posts are needed to hit the 3-post launch. The index must render correctly with however many non-draft posts exist (1 at first).

---

## 8. Architecture + dark-moment (decide at plan-gate)

- **Architecture:** `insights` collection → `src/pages/insights/index.astro` (lists non-draft, sorted) + `src/pages/insights/[slug].astro` (`getStaticPaths` over non-draft entries, renders the post; a `BlogPost.astro` component is optional). Mirror `our-work/index.astro` + `[slug].astro`. Confirm.
- **Dark moment:** NONE. Blog is editorial/quiet; all-light. The only "boxes" are the thin-lined white TL;DR / try-this skim boxes. No CTA equation, no flagship card.
- **Footer top hairline** (base.css) already separates a white last section from the footer.

---

## 9. Acceptance checklist (the reviewer eyeballs)

- [ ] `/insights/` and `/insights/<slug>/` live; the footer `Insights` link resolves.
- [ ] `npm run build` green. No references to non-existent assets. Drafts never render or list.
- [ ] No edits outside section 2's create/edit list. `cases` collection untouched; only the `insights` schema extended. Zero changes to home/base/tokens/about/contact/services/industries/our-work/icons/Nav/Footer/Layout.
- [ ] Index = editorial rows on hairlines (NOT filled cards); pillar a monochrome dotted caption (no colour); read-time italic Lora; whole row links via chevron idiom.
- [ ] Filter chips are hairline pills, terracotta active, NO six-colour coding (interactive/colour rework stays EQT-260).
- [ ] Post: quiet lede (no box); TL;DR + one-thing-to-try are thin-lined WHITE skim boxes with terracotta labels; AEO/closing prose is quiet (no box); inline links per block 33; Montserrat sub-headings on hairlines.
- [ ] ONE real post authored ("47 problems / 6"); the other launch posts are `draft:true` stubs, NOT fabricated.
- [ ] No dates/years in public copy (sort key may exist in frontmatter but is not rendered); firm "we"; no named individual; no em/en dashes; no visible DMAICO; Australia-only; no dark moment; no `btn-outline`.
- [ ] Italic Lora captions; Lora 22px body; one reveal per section; no `reveal-d1..d3`. Screenshots eyeballed desktop + mobile; no horizontal overflow at 390px.

When done: open a PR, post the PR URL as a comment on Linear **EQT-258**, list the changed files, confirm the build, and flag that 2 real launch posts are still needed. Do NOT mark the issue Done — Herman/Cowork sets Done after merge AND Cloudflare Pages deploy AND live verify.

---

## As-built addendum (Cowork, 2026-06-09)

Built directly in Cowork (not Codex), then reviewed with Herman across several rounds. Where the as-built differs from the brief above, the as-built wins; canonical record is `DESIGN_LEARNINGS_v6x.md` → "Insights / blog (EQT-258)".

**Files created/edited:** `src/content.config.ts` (extended `insights` schema only), `src/pages/insights/index.astro`, `src/pages/insights/[slug].astro`, `src/components/BlogPost.astro`, `src/styles/insights.css`, `src/content/insights/prioritising-after-diagnostic.md` (real post) + two `draft:true` stubs. No firewall files touched.

**Schema (as shipped):** `phase?, readTime?, order, lede[], aeo?, tldr[], tryThis{heading,body}?, related{label,title,href}?, closingLine?` added to `title, pillar, summary, draft`.

**Decisions / deviations from this brief:**
1. **Index = responsive 3-up card grid, not editorial rows** (Herman). Thin hairline boxes (no shadow), 3 → 2 → 1.
2. **Copy follows `BLOG_WRITING_STANDARDS_v2`** (Zoe, 2026-06-09; v1 archived). Hook is a story-driven scene (actor + numbers + tension), not abstract fragments; three body headings (What we did, and what we found / The pattern to avoid / One thing to try).
3. **Three tinted callouts, all on-brand:** beige TL;DR (skim), terracotta-wash `#F4E8E1` key-insight band with a light-bulb marker (left-bleed), navy-wash `#E8ECF5` "one thing to try" band (left-bleed). A one-off light green was rejected as off-brand. Deliberate exception to the v6x "no wash fills" lock, scoped to blog anchors.
4. **AEO answer = bold** (codified in v2; was italic in v1). Closing CTA header customised per post via the `cta` field (e.g. "Bring us your symptoms.") with a generic fallback.
5. **Trainline added to the post** (reused from CaseStudy; pillar highlighted, marker `THIS INSIGHT`), title above it, full content width.
6. **Light-bulb key-insight marker** (interim line-art, data-URI) on the bold descriptor line; bespoke Affinity glyph swaps later (EQT-274/275).
7. Closing italic line **cut as filler** (the standard expects one — flagged as an open standard question).

**RESOLVED (2026-06-09):** `BLOG_WRITING_STANDARDS_v2` now codifies the new headings, AEO-bold, the dropped closing line, the story-driven hook, the highlighted key insight, and the per-post CTA header. The proof post matches v2. The other 21 v1 posts migrate to v2 when ported into the `insights` collection.

**Still outstanding for launch:** 2 real posts (drafts `the-bottleneck-wasnt-where-anyone-was-looking` and `rapid-pilot-before-rollout` are title-only stubs). Build green; PR / commit pending on Herman's Mac (Cowork cannot run git in the sandbox).
