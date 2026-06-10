# BUILD BRIEF — EQT-283: nav dropdowns (Services, Industries) + add Insights

## STOP — READ THIS FIRST
- This brief is the complete spec. Do not hunt for other prompts or open the `prompts/` folder. Do not generate images.
- Touch only: `src/components/Nav.astro` and the nav block in `src/styles/base.css` (lines ~26-225). If nav toggle JS lives elsewhere (a layout or global script), you may extend that script for the dropdown/accordion behaviour — find it first and say where it is in your plan.
- Show your plan before writing code (plan-gate). Branch off latest `main` as `eqt-283-nav-dropdowns`.
- v6x design system applies: Montserrat labels, white panel, hairlines `rgba(38,36,92,0.13)`, navy `#26245C`, terracotta accent `#C15F3C`, 1px hairline borders not heavy shadows, tokens from `tokens.css`. Match the existing `.nav-link` styling.

## Current state (verified 2026-06-10)
`Nav.astro` renders top-level links only; the `⌄` chevrons next to Services and Industries are decorative — there is NO dropdown markup, panel, or script. `Insights` is missing entirely. Current links: Services → `/services/`, Industries → `/industries/`, Our Work → `/our-work/`, About → `/about/`, Get in touch (CTA) → `/contact/`. Mobile (<=760px) uses `.nav-toggle` + `.nav-links.is-open` (hamburger).

## What to build

### 1. Services dropdown
Parent "Services" still links to `/services/` (the hub). On hover/focus (desktop) or chevron tap (mobile), reveal a dropdown listing the six services. Items (label → href), in this order:
- Problem Framing → `/services/frame/`
- Operations Diagnostic → `/services/plan/`
- Iterative Improvement → `/services/solve/`
- Rapid Pilot → `/services/evolve/`
- Architecture & Governance → `/services/govern/`
- Operational Embedding → `/services/scale/`

Optional but on-brand: a small dotted-eyebrow pillar label (FRAME / PLAN / SOLVE / EVOLVE / GOVERN / SCALE) above each item name, matching the eyebrow treatment used on the services hub. Keep it clean, not crowded.

### 2. Industries dropdown
Parent "Industries" still links to `/industries/`. Dropdown items:
- Financial Services → `/industries/financial-services/`
- Government and Public Sector → `/industries/government/`
- Utilities → `/industries/utilities/`
- Advanced Manufacturing → `/industries/manufacturing/`

### 3. Add Insights
Add a top-level link **Insights → `/insights/`** to the nav, placed after "Our Work" (order: Services, Industries, Our Work, Insights, About, Get in touch). No dropdown on Insights. (Do NOT add Resources — that page doesn't exist yet.)

## Behaviour
**Desktop (>760px):**
- Dropdown opens on hover AND on keyboard focus (`:focus-within` or JS), closes on mouse leave / blur / Esc.
- The parent label remains a working link to the hub page; the chevron rotates ~180° when open.
- Panel: white background, 1px hairline border, generous padding, subtle (optional) shadow but lead with the hairline. Items have a hover state (terracotta text or navy, matching `.btn-text`/nav hover). Align under the parent.

**Mobile (<=760px):**
- Inside the existing `.nav-links.is-open` stacked menu, Services and Industries become accordions: tapping the chevron expands the submenu inline (do not navigate); tapping the label text still goes to the hub. Provide the small JS to toggle an `is-expanded` class per group.
- Insights sits as a normal stacked link.

**Accessibility:**
- Parent uses `aria-haspopup="true"` + `aria-expanded` (synced to open state); submenu is a `<ul>`/list with links. Esc closes and returns focus to the parent. Visible `:focus` states. Keyboard: Tab into items; arrow-key navigation is a nice-to-have, not required.

## Verify before sign-off
- Desktop: hover Services → 6 items resolve to the correct service pages; hover Industries → 4 sectors resolve; Insights link works; parent labels still navigate to hubs; chevron rotates.
- Mobile (390px): hamburger opens; Services/Industries accordions expand inline; no horizontal overflow; CTA still visible.
- Build green (`npm run build`). Eyeball screenshots at desktop + 390px — do not trust self-checks.
- Commit `EQT-283: nav dropdowns + Insights`, push, open PR, comment PR URL on EQT-283, set In Review. Cowork verifies and merges; Cowork sets Done after Cloudflare deploy is live (Done = merged + live, per CLAUDE.md).

---

## Build outcome (2026-06-10)

**PR #46 merged to main. EQT-283 = Done (live on Cloudflare Pages).**

### What was built vs spec

Built exactly to spec: Services dropdown (6 items with pillar eyebrows), Industries dropdown (4 items, label-only), Insights top-level link. Parent anchors link to hubs; chevron rotates on open; mobile accordion works; keyboard focus/Esc handled. `aria-haspopup` and `aria-expanded` on the chevron button; `role="menu"` / `role="menuitem"` on the panel.

Minor deviation from spec: the spec said "hover state (terracotta text or navy, matching `.btn-text`/nav hover)". Shipped as navy colour + `rgba(38,36,92,0.05)` background band (a full-row highlight), which reads better than a text-only colour change. Herman confirmed: exactly right.

### Post-merge bug: dropdown closes on cursor travel (FIXED same session)

**Symptom:** hovering "Services" opened the dropdown; moving the cursor down toward the panel closed it before the cursor arrived.

**Root cause:** `top: calc(100% + 10px)` on `.nav-dropdown` created a 10px gap between the nav bar bottom edge and the dropdown panel. This gap is OUTSIDE `.nav-item`'s layout bounding box. JS `mouseleave` fires when the cursor leaves the element's layout box — so the cursor crossing through this gap triggered `mouseleave` on `.nav-item`, which called `closeItem()` and hid the panel.

**Fix (hotfix, cherry-picked to main):**
1. Changed `top: calc(100% + 10px)` to `top: 100%` — no external gap.
2. Added `padding-top: 10px` INSIDE the dropdown to preserve visual breathing room.
3. Replaced JS `mouseenter`/`mouseleave` on desktop with CSS `:hover`:
   ```css
   @media(min-width:761px){
     .nav-item:hover .nav-dropdown{display:block;}
     .nav-item:hover .nav-chevron{transform:rotate(180deg);}
   }
   ```
   CSS `:hover` propagates through the DOM to absolutely-positioned descendants; the gap-vs-hitbox problem cannot occur. JS still handles keyboard focus and mobile accordion.

**Why CSS `:hover` is correct here:** `mouseleave` uses the element's layout bounding box. `position:absolute` removes the dropdown from flow, so it does NOT extend `.nav-item`'s box. CSS `:hover` uses DOM containment — if the element is a descendant in the DOM tree, `:hover` on the ancestor stays active. The fix is architectural, not a tweak.

### Additional UI improvements (same session, confirmed by Herman)

- **Hover highlight band added** to `.nav-dropdown-item`: `background:rgba(38,36,92,0.05)` on hover/focus. Gives a clear row-selection visual without colour noise.
- **Insights filter chips moved into `.ins-hero`**: the chips were rendering inside `.ins-list`, creating a large section gap between the hero headline and the filter row. Moved `.ins-filter` into `.ins-hero` (after `.ins-hero-inner`, wrapped in `.ins-inner`); adjusted hero bottom padding 104px → 52px and list top padding 64px → 48px. Chips now sit adjacent to the hero copy with no dead space.

### Git note

A GDrive FUSE mount issue created stale git lock files (`.git/HEAD.lock`, `.git/index.lock`, `.git/ORIG_HEAD.lock`) that blocked commits. Cleared with `rm -f`. The hotfix was committed on the feature branch, then cherry-picked to main after pulling remote (PR #46 had already merged while the hotfix was on the feature branch). Standard GDrive session startup: always `rm -f .git/*.lock` before first commit.

---

## Post-merge UI polishes (same session, shipped 2026-06-10)

Three incremental commits followed the EQT-283 merge. All shipped to main and live on Cloudflare Pages.

### Commit 178b939 — terracotta hover + DMAICO phase eyebrows

**Nav hover colour.** Changed `.nav-link:hover,.nav-link:focus` from navy to terracotta. Added `.nav-item:hover .nav-chevron{color:var(--terracotta);}`. Added `color` to `.nav-chevron` transition. Rationale: all other interactive hover states on the site use terracotta; the nav was the outlier.

**Dropdown eyebrows carry full DMAICO phase.** Updated all six service dropdown eyebrows from bare pillar names (`PLAN`) to the full dotted format (`PLAN · MEASURE`). Consistent with the site's established eyebrow idiom wherever pillar + phase is referenced.

### Commit e8efdfb — chip alignment, Our Work chips, filter bug, hairline, gap

**Insights chip alignment.** `.ins-hero .ins-inner` was constrained to `--max` (1180px) while `.ins-hero-inner` uses `--wide` (1320px). Added override: `.ins-hero .ins-inner{max-width:var(--wide);margin-top:24px;}`. Chips now start from the same left edge as the hero prose.

**Our Work filter chips.** Added the hairline-pill chip filter to the Our Work index (`src/pages/our-work/index.astro` + `src/styles/our-work.css`). ALL chip plus one per pillar (FRAME/PLAN/SOLVE/EVOLVE/GOVERN/SCALE). Pillar `<section>` elements carry `data-pillar` attributes; `initialiseOwFilter()` toggles `.is-hidden` on sections by filter value. CTA section has no `data-pillar` — always visible. All styles use `.ow-*` prefix; no cross-import from `insights.css`.

**Insights filter bug.** JS filter was querying `.ins-row` (does not exist). Fixed to `.ins-card[data-pillar]`.

**Insights hero hairline.** Added `border-bottom:1px solid var(--hairline)` to `.ins-hero`. Separates hero from card list cleanly.

**Chip-to-card gap.** Removed `margin-bottom:44px` from `.ins-filter` (last element in hero — margin was stacking onto list padding). Reduced `.ins-list` padding-top 48px → 32px. Net: ~80px of dead space eliminated.
