# EQUIBT Website — Claude Code Instructions

**Project:** equibt.com
**GitHub:** withherm/equibt-website
**Deploy:** Vercel (auto-deploy on push to main)
**Owner:** Herman Chan

---

## Rules — read every session

1. Always invoke the **frontend design skill** before writing any front-end code, every session, no exceptions.
2. Always test on **localhost** first. Do not commit or push to GitHub unless Herman explicitly says to.
3. When Herman approves a change, push to GitHub with a descriptive commit message. Vercel auto-deploys from there.
4. Use **Australian English** throughout all copy: organisation, optimise, realise, colour, programme.
5. No em dashes or en dashes anywhere. Colon or comma first.
6. All font stacks use **system-ui** (not Google Fonts). No external font imports.
7. Keep HTML files self-contained where possible. Inline CSS preferred for prototype work.

---

## Repository discipline

1. ONE working copy only: `REPOS/equibt-website`. Never create side clones, integration clones, or per-issue clones (e.g. equibt-website-integration, equibt-website-eqt207). All branches live inside the single canonical clone, which stays on main synced to origin/main. Do not work from a detached HEAD.
2. Branch per Linear issue inside that clone; PR to withherm/equibt-website; merge to main.
3. Do not commit or push without Herman's explicit approval.
4. If you find uncommitted local changes or a stash, inspect before discarding. DESIGN_LEARNINGS_v5x.md spec edits have lived only in the working tree; preserve spec updates, never silently drop them.

---

## Brand

**Primary:** Deep Navy `#26245C`
**Accent:** Terracotta `#C15F3C`
**Body text:** `#2D2D2D`
**Off-white:** `#F9F7F4`
**Warm parchment:** `#F5EBD9`
**Section bg:** `#F5F5F5`
**Dark slate (CTA panels):** `#1A1A1A`

**Typography:**
- Headings: Montserrat Bold (system-ui fallback)
- Body: Inter (system-ui fallback)
- Base body size: 14px, line-height 1.8

**Brand assets folder:** `assets/brand/` — logo SVG and brand guidelines live here. Read both before any design session.

---

## DMAICO — 6-pillar colour tokens

| Pillar | Phase | Colour |
|--------|-------|--------|
| FRAME | Define | `#8B2252` Deep Rose |
| PLAN | Measure | `#26245C` Navy |
| SOLVE | Analyse | `#0B6B82` Teal |
| EVOLVE | Improve | `#2D7A3A` Forest Green |
| GOVERN | Control | `#7A3D00` Dark Amber |
| SCALE | Operate | `#5C0A5C` Deep Plum |

Each service page uses its pillar colour as the accent throughout: pill tags, left border stripes, section highlights.

---

## Folder structure

```
equibt-website/
  assets/
    brand/              - logo, brand guidelines
    deliverables/       - A4 document mockup images, one subfolder per pillar
    Lineart/            - hero and section illustrations, one subfolder per page
  prototypes/           - HTML prototypes (current = v2)
  temp_screenshots/     - Puppeteer QA screenshots (never commit this folder)
  prompts/              - reusable prompt templates
```

Prototype naming: `equibt_[page]_prototype_v[N].html`. Increment version on substantial changes. Do not overwrite without confirming.

---

## Screenshot workflow (Puppeteer)

1. Write the code and start a local server (`npx serve .` or `python3 -m http.server 3000`).
2. Screenshot: full viewport, hero section, key content sections. Save to `temp_screenshots/` with descriptive names (`plan-hero-v2-after.png`).
3. Compare against reference. Fix mismatches. Screenshot again.
4. Delete `temp_screenshots/` before any GitHub push.

**Exception for animated elements:** Puppeteer captures a static frame. For CSS animations, canvas shaders, or keyframe backgrounds, do not use screenshot comparison. Implement the code and let Herman review in browser. Prompt note: "this is animated — skip screenshot loop."

---

## Deploy pipeline

```
Claude Code (local dev) -> localhost review -> Herman approves -> git push to main -> Vercel auto-deploys -> equibt.com live
```

Never push mid-build. Only commit on Herman's explicit instruction ("push this", "commit and ship", "push to GitHub").

When committing:
1. Add `temp_screenshots/`, `node_modules/`, `.DS_Store` to `.gitignore` if not already there.
2. Stage changed files.
3. Write a descriptive commit message (e.g. `Add SOLVE service page v2 with deliverables section`).
4. Push to `main`.

---

## Content rules

- EQUIBT voice: "we". First person plural. Professional, direct, no corporate polish.
- All clients are anonymous. No client names, no sector identifiers that narrow to one organisation.
- Do not mention: CUBOROO, Emvisage, AUSQ by name, any certifying body by name.
- DMAICO is EQUIBT's extension of DMAIC. Six phases. The sixth phase (Operate/SCALE) is what distinguishes it from DMAIC.
- Service names always all-caps: FRAME, PLAN, SOLVE, EVOLVE, GOVERN, SCALE.
- No emojis. No hashtags. No lazy CTAs ("what do you think", "let's dive in").

---

## Inspiration resources

- **Individual components:** [21st.dev](https://21st.dev) — backgrounds, shaders, buttons, animations. Copy the prompt from 21st.dev and paste it here directly.
- **Full-page reference cloning:** DevTools full-page screenshot (F12 > Ctrl+Shift+P > "capture full size screenshot") + CSS from Elements > Styles panel. Paste both here. Build structural clone first, then apply EQUIBT brand in second pass.
- **Inspiration sites:** Dribbble, godly.website, awwwards.com.

---

## graphify

This project has a knowledge graph at graphify-out/.

- For codebase questions, run `graphify query "<question>"` when graphify-out/graph.json exists.
- Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts.
- If graphify-out/wiki/index.md exists, use it for broad navigation.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
