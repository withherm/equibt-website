# CLAUDE CODE FIX R4 — EQT-254 industries v6x (final fixes + git close-out)

## STOP — READ THIS FIRST

- You are Claude Code on Herman's Mac, repo `REPOS/equibt-website`. This file is the complete spec for this round. The EQT-254 brief and corrections R1-R3 in `prototypes/explorations/` govern everything not amended here.
- Conflict firewalls still apply: do NOT edit `src/pages/index.astro`, `src/styles/home.css`, `src/styles/tokens.css`, `src/components/icons/*.astro` (root), `src/pages/services/**`, `src/styles/services.css`, `src/layouts/Layout.astro`, `src/components/Nav.astro`, `src/components/Footer.astro`. Exception this round: `src/styles/base.css` MAY receive ONE narrow change (fix 1c sub-nav offset) — nothing else in it.
- Allowed surfaces: `src/pages/industries/**`, `src/styles/industries.css`, the base.css exception above.
- Do not redraw or generate artwork.

## 0. Git first (you have real git — Codex was blocked)

1. `rm -f .git/index.lock` if present (stale sandbox lock).
2. `git status` — expect untracked/modified EQT-254 files. Confirm or switch to branch `eqt-254-industries-v6x` (created off main at 413aa87). The new files travel with the switch.
3. Commit the existing R1-R3 state as-is BEFORE touching anything: `eqt-254: industries hub + 4 sector pages v6x (build + R1-R3)`. Include: `src/pages/industries/**`, `src/styles/industries.css`, `brand/assets/logos/lmi/LMI-LOGO-702_MAIN-R1_TRANSPARENT.svg`, and the brief/correction files in `prototypes/explorations/` if untracked.
4. Apply the fixes below, then commit separately: `eqt-254 R4: page-long sticky sector row, sub-nav offset, entry-point train line, LMI link alignment`.

## 1. Sticky fixes

**Diagnosis (verified in code):** `.sector-list` is `position:sticky; top:80px` inside `.sector-selector`. A sticky element can only stick while its PARENT still has scroll travel; on a tall viewport the selector section nearly fits on screen, so the row sticks for a few pixels and releases. The CSS "works"; the scope is wrong for the requested behaviour.

**1a. Page-long sticky scope (hub).** Herman wants the sector row pinned under the main nav from the moment it reaches the nav until the end of the page. Restructure `src/pages/industries/index.astro`: wrap the selector section, the closing CTA section and the LMI handover section in one `<div class="selector-sticky-scope">`. The row stays where it is in the DOM (inside the selector section) but the sticky element's effective travel must span the scope — the cleanest way: move the `.sector-list` to be the first child INSIDE the scope wrapper (directly above the selector section), keeping its white background + hairlines so it reads identically in its resting position. `position:sticky` on it then pins it for the full scope. Section backgrounds must remain full-bleed and unchanged.

**1b. Top offset.** `top` must equal the real rendered height of the sticky main nav (measure it; it is ~72px, not assumed 80). Set z-index below the main nav, above content.

**1c. Sector-page sub-nav stuck offset (latent bug, fix it).** `.sector-subnav` is `position:sticky; top:0; z-index:20` while `.site-nav` in base.css is sticky `top:0; z-index:50` — when stuck, the sub-nav slides BEHIND the opaque main nav and disappears. Set the sub-nav's `top` to the main nav's height (same value as 1b). This is the one permitted base.css-adjacent change: prefer making it in `industries.css` if the selector lives there; only touch base.css if the rule is there.

**1d. Selection while stuck.** When the row is pinned and the user selects a sector, the panel may be off-screen. On selection, if the panel's top is above the viewport, smooth-scroll the panel to just below the pinned row (respect `prefers-reduced-motion: reduce` — jump instead of smooth). Small addition to the existing selector script.

**1e. Mobile.** Row wraps 2x2 below 860px; pinned 2x2 eats too much viewport. When stuck at ≤860px, compact the row: hide the hook line, shrink the icon (~28px), single-row height per item. CSS only.

## 2. LMI chevron link alignment (all five pages)

**Diagnosis (verified in code):** in `_sector.astro` (and the hub) the logo anchor `.lmi-logo-link` (inline-block, 250px) and the chevron anchor `.btn-text` sit on the same inline text line, so the chevron renders beside the logo box instead of under it on the left axis.

Fix in `industries.css`: `.lmi-handover .btn-text { display: table; margin-top: var(--link-gap, 22px); }` (display:table keeps the underline draw scoped to the label width). The link must land flush on the same left axis as the eyebrow, heading, copy and logo. Both the sector template and the hub handover.

## 2b. Train line marking — SPEC CHANGE, entry points only (all five pages)

Herman has overruled the original 2-3 station mapping. The station line must highlight EXACTLY the two services shown as next-step entry-point columns, nothing else, so line, columns and copy always agree:

- Financial Services: PLAN, GOVERN
- Government: PLAN, GOVERN
- Utilities: PLAN, GOVERN
- Manufacturing: PLAN, SOLVE

Update the `recommended` arrays in BOTH `_sector.astro` (sector data) and `index.astro` (hub `sectors` data) to these pairs. The hub selector re-mark then follows automatically. SOLVE must no longer light on Government; SCALE must no longer light anywhere. Entry-point columns and prose copy stay unchanged. Note the spec change in the PR description (supersedes the mapping in brief section 5.6/6.3).

## 3. Verification — real browser, no static self-passes

- `npm run build` green.
- Run the dev server and verify in a real browser (Playwright or headed Chrome):
  - Hub: scroll to the bottom of the page — the sector row stays pinned under the nav the whole way. Screenshot at the CTA section with the row pinned.
  - Hub: while pinned at the LMI section, select Manufacturing — panel scrolls into view below the row, station line shows PLAN/SOLVE only. Then select Financial Services — line shows PLAN/GOVERN only. Screenshots of both.
  - Each sector page where-to-start line shows exactly its 2b pair. Screenshot Government (PLAN/GOVERN, SOLVE unlit).
  - FS page: scroll past the hero — the sub-nav is VISIBLE pinned below the main nav (not hidden behind it). Screenshot.
  - Manufacturing page: LMI band — chevron link flush left under the logo. Screenshot.
  - ~390px width: pinned compact row screenshot.
- Confirm no firewalled file changed (`git diff --stat` against 413aa87 shows only allowed surfaces).

## 4. Close-out

- Push the branch, open the PR titled `EQT-254: industries hub + 4 sector pages to v6x`, listing build + R1-R4 rounds in the description.
- Post the PR URL as a comment on Linear EQT-254. Do NOT mark the issue Done (Cowork/Herman set Done after merge).
