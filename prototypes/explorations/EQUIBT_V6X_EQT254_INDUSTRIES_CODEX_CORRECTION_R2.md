# CODEX CORRECTION R2 — EQT-254 industries v6x

## STOP — READ THIS FIRST

- Deltas to the R1 state. The original brief and R1 still govern everything not amended here.
- Same firewalls. The create-only file list is amended by fix 1 below; nothing else changes scope.
- Do not redraw or generate artwork. No commits, no pushes (git is handled on Herman's machine).

---

## 1. Refactor the sector template — kill the URL sniffing

`financial-services.astro` is currently the shared template for all four sectors, selecting the sector via `Astro.url.pathname` parsing, with the other three pages importing it. This works but is fragile and unreadable. Restructure:

- Move the shared template to `src/pages/industries/_sector.astro` (underscore prefix = no route generated). This file is hereby ADDED to the allowed create list.
- The template takes the sector key as a prop (`<SectorPage sector="government" />`). No `Astro.url` inspection anywhere.
- All four sector pages become thin wrappers (~5 lines) importing `_sector.astro` and passing their own key. `financial-services.astro` becomes one of them.
- URLs, output and rendered content must be byte-equivalent before/after (diff the `dist/` HTML to confirm and report).

## 2. Hub sector row — sticky within the selector section

Make the hub's horizontal sector row sticky: it pins under the main nav (white background, hairline bottom border) while the user scrolls through the selector section (panel + station line), and releases when the section ends. `position: sticky` scoped to the selector section; no JS beyond what exists. Works at mobile widths too. The row must remain fully functional while stuck (hover-persist, click, keyboard).

## 3. LMI handover — beige band on all five pages

Reverse R1 fix 5a. Herman's call after eyeballing: the beige band (as currently on Utilities) is the locked treatment. Apply the beige band to all five industry pages. The logo keeps its white rectangle, it reads as a deliberate tile on beige. Keep R1's reduced bottom spacing (the footer-gap fix stays).

## 4. LMI handover — left-align the chevron link

`Explore training at Lean Methods Institute ›` is still centred. Left-align it to the same grid axis as the eyebrow, heading, paragraph and logo, on all five pages. Nothing floats centre in this band.

## 5. Service selector detail titles — drop the pillar prefix

The detail panel titles repeat the pillar name that already sits in the list kicker ("SOLVE: isolate the structural cause of waste."). Strip the `<PILLAR>: ` prefix from every detail title, all six pillars, all four sectors. Capitalise the first word of what remains, keep it verb-first (e.g. "Isolate the structural cause of waste."). Do not change copy beyond the prefix removal and capitalisation.

## 6. Station line mapping — verify, do not change

The per-sector recommended stations are LOCKED and currently correct in the data: FS = PLAN, GOVERN · Government = PLAN, SOLVE, GOVERN · Utilities = PLAN, GOVERN, SCALE · Manufacturing = PLAN, SOLVE, SCALE. After the fix-1 refactor, re-verify each built page renders exactly its own mapping (and the hub re-marks correctly per selection). Report the four rendered mappings explicitly.

## 7. Closing CTA art — size check

The sector icon in the closing CTA renders small. Set it to the specified ~260px wrapper, vertically balanced against the copy, per the home cta-grid proportions. All five pages.

---

## Verify

- `npm run build` green; dist diff for fix 1 equivalence.
- Re-screenshot: hub selector mid-scroll with the row stuck (desktop + ~390px), one sector page LMI band + chevron alignment, one detail panel showing the de-prefixed title, manufacturing closing CTA.
- Report changed files. Honest screenshots; say so if tooling fails.
- No commit, no push, no Linear changes.
