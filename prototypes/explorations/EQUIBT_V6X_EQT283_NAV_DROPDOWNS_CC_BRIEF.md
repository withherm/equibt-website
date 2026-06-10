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
