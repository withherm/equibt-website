# CODEX CORRECTION R3 — EQT-254 industries v6x

## STOP — READ THIS FIRST

- Deltas to the R2 state. Brief + R1 + R2 still govern everything not amended here.
- Same firewalls. Fix 4 adds ONE new asset file (additive); nothing else changes scope.
- R2's sticky row was claimed verified "statically in CSS" and does not stick in practice. That is self-certification. This round, behavioural fixes get behavioural verification or an honest "could not verify".

---

## 1. Hub sticky sector row — diagnose and fix, then prove it

The row does not pin when the selector section is in view. `position: sticky` fails silently when ANY ancestor between the sticky element and the scroll root has `overflow` set (hidden/auto/clip/scroll) or a `transform`/`filter`/`will-change`. The scroll-reveal animation likely puts a transform on the section, or a bleed wrapper sets overflow.

- Find the actual blocker and name it in your report.
- The sticky element must be a direct child of the tall selector-section container so its sticking range spans the panel + station line.
- If the section's reveal transform is the blocker, exclude the selector section's wrapper from the transform-based reveal (apply the reveal to inner content instead) — do not remove the reveal idiom itself.
- Verification: a real screenshot with the row visibly stuck under the main nav while the station line is in view. If your tooling cannot capture it, say exactly that and describe what you observed in a real browser run — do not claim fixed from CSS reading.

## 2. Deliverables list — typographic differentiation

In the service selector detail panel, the deliverables items read as Lora prose and blur into the copy above. Change the deliverable items to the functional-label idiom: Montserrat, 600 weight, ~16px, near-black `#161616`, slight letter-spacing if needed for balance. Keep the hairline row separators and spacing. The `DELIVERABLES` and `SECTOR CHALLENGES ADDRESSED` kickers and the challenge chips stay as they are. One change in the shared template covers all four pages — confirm it lands on all four.

## 3. Hub station line — re-mark must RESET before marking

Bug: switching sectors adds recommended marks without clearing the previous sector's, so stations (e.g. SCALE) stay lit after hovering Utilities or Manufacturing. Fix:

- On every selection, reset ALL six stations to the muted state first, then mark only the selected sector's recommended set.
- Move the ring/core sizing out of baked SVG attributes into CSS driven by the `is-recommended` class (ring r 11 vs 8, core visible vs hidden, navy vs muted label), so the class toggle controls the entire visual state.
- Verify: select Utilities, then select Government — SCALE must drop back to muted. Screenshot the Government state after that exact sequence.

## 4. LMI logo — additive transparent asset

The white box behind the logo is a background rectangle baked inside `brand/assets/logos/lmi/LMI-LOGO-702_MAIN-R1.svg`. Herman wants the logo sitting directly on the beige band.

- Create a COPY: `brand/assets/logos/lmi/LMI-LOGO-702_MAIN-R1_TRANSPARENT.svg`. Remove ONLY the full-canvas white background rect. Touch nothing else — the white "M" inside the red square is part of the mark and must remain.
- Do NOT edit the original file (home and other surfaces reference it).
- Reference the transparent copy in the industries LMI handover (all five pages). Do not touch home.
- Verify by rendering the band and eyeballing the mark's integrity at full and 2x zoom; screenshot it.

---

## Verify

- `npm run build` green.
- Screenshots: stuck sector row mid-scroll (fix 1), Government hub state after Utilities→Government selection (fix 3), a detail panel showing the new deliverables treatment (fix 2), an LMI band with the transparent logo (fix 4).
- Report changed files and the named sticky blocker. No commit, no push, no Linear changes.
