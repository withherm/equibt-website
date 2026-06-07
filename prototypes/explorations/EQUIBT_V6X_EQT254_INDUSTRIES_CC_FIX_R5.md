# CLAUDE CODE FIX R5 — EQT-254 industries v6x (anchor offset, deliverable bullets, copy reconcile)

## STOP — READ THIS FIRST

- Same branch `eqt-254-industries-v6x`, new commit(s) onto open PR #38. Brief + R1-R4 govern everything not amended here.
- Same firewalls: only `src/pages/industries/**` and `src/styles/industries.css`.
- Replacement copy in fix 3 is exact and locked — paste it verbatim, do not rewrite it.

## 1. Anchor jump offset (sector pages)

Jumping via the sticky sub-nav buries each section's eyebrow and title under the pinned nav + sub-nav stack; worse on mobile. Fix with `scroll-margin-top` on the anchored sections: `calc(var(--nav-h) + <measured sub-nav height> + 12px)`. Measure the real rendered sub-nav height at desktop AND at ≤860px (it may differ when compacted) — set per breakpoint if needed, don't assume one value. Also confirm the hub's select-while-pinned scroll (R4 fix 1d) leaves the panel's heading fully visible below the pinned row; apply the same margin approach there if it clips.

## 2. Deliverables bullets ("How we help in..." detail panel, all four pages)

Add a marker to each deliverable item. Locked style: a small terracotta dot, the same device as the eyebrow marker — `::before` round dot ~5px diameter, terracotta `#C15F3C`, hanging to the left of the text with ~14px gap, vertically centred on the first text line. Keep the Montserrat 600 16px treatment, hairline separators and existing spacing. No chevrons, no navy bullets, no list-style defaults.

## 3. Copy reconcile — five strings, exact replacements (LOCKED COPY)

The R4 train-line change left five guidance sentences naming pillars that no longer light. Replace verbatim:

`src/pages/industries/_sector.astro`:

- Utilities `startNote` (currently "...bring GOVERN and SCALE into scope early.") →
  `If the process keeps drifting under load, start with the diagnostic. If reliability and reporting need to hold after go-live, bring GOVERN into scope early.`
- Manufacturing `startNote` (currently "...move quickly into SOLVE and prepare the standard for SCALE.") →
  `If throughput or quality is leaking, start with the diagnostic. If the operating cause is known but unresolved, move quickly into SOLVE.`

`src/pages/industries/index.astro` (hub `pathway` strings):

- Government →
  `Start with PLAN to baseline the backlog, then GOVERN to make the faster process defensible.`
- Utilities →
  `Start with PLAN to baseline where the operation drifts, then GOVERN to embed the standard and hold reliability across the network.`
- Manufacturing →
  `Start with PLAN to baseline the loss, then SOLVE to isolate the cause on the floor and cost the fix.`

FS sector note, Government sector note and the FS hub pathway already name only lit pillars — do not touch them.

## 4. Verify (real browser)

- `npm run build` green.
- Sector page at ~390px: tap each sub-nav anchor; every section's eyebrow + title fully visible below the pinned stack. Screenshot one mid-page anchor landing (mobile + desktop).
- Detail panel screenshot showing the terracotta-dot deliverables.
- Hub: select each sector; panel prose names only the lit stations. Screenshot Manufacturing.
- Commit, push to PR #38, note R5 in the PR description. Issue stays In Review.
