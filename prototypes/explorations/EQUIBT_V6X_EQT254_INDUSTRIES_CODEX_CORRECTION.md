# CODEX CORRECTION R1 — EQT-254 industries v6x

## STOP — READ THIS FIRST

- These are review deltas to the build you just completed on `eqt-254-industries-v6x`. The original brief (`EQUIBT_V6X_EQT254_INDUSTRIES_CODEX_BRIEF.md`) still governs everything not amended here.
- Same conflict firewalls: touch ONLY the six files you created (`src/pages/industries/*.astro`, `src/styles/industries.css`). You may READ `home.css` / `index.astro` as references; you must not edit them.
- Do not redraw, restyle or generate any artwork. Hero art quality is handled later by a content-only artwork swap (separate issues); your job is composition and sizing only.
- No plan-gate this round. Apply, rebuild, re-screenshot, report.

---

## 1. Hub hero — rescale the sector cluster

The 2x2 sector cluster reads undersized next to the home hero idiom. Recompose it as ONE motif block whose overall footprint matches the home hero (`min(540px, 48vw)` total), the four icons arranged 2x2 inside it (each roughly `min(240px, 21vw)` with calm gaps), bleeding into the right whitespace exactly as the home hero does. Icons stay `<Icon>` references. Order unchanged: FS, Government / Utilities, Manufacturing.

## 2. Hub formula takeaway — promote to a right-bleed white panel

The plain-prose takeaway line ("Generic application is not rigour. We keep the method constant and calibrate how we apply it, so the fix survives contact with your operating reality.") becomes a white panel that bleeds to the RIGHT viewport edge of the beige section: white fill, rounded ~16px on the left corners, square against the right edge, no shadow, no border. Inner text stays aligned to the wide grid (DESIGN_LEARNINGS rule 18) at Lora body size. Nothing else in the formula section changes.

## 3. Hub sector selector — restructure to top row + full-width station line

Retire the left side-list layout. New structure, top to bottom:

1. **Sector row across the top**: one horizontal hairline row of four items, each = sector `<Icon>` (~44-54px) + Montserrat sector name + the one-line hook. Active item marked by a terracotta rule under the item. Rule-17 semantics unchanged (hover selects and persists, click/keyboard select, default Financial Services).
2. **Shared panel** below, full width on the grid: Common challenges + Where to start + `Explore <Sector> ›` link, content unchanged.
3. **Station line** below the panel, FULL WIDTH at the home pathway scale. Remove the hairline box currently wrapped around it (earn-the-box; it reads as an afterthought at its current size). Re-marking behaviour, mappings and station links unchanged.

Mobile: sector row wraps to 2x2 at ≤860px; station line scales to its container with the locked ≤420px padded horizontal-scroll fallback; panel stacks below the row.

## 4. Closing CTA — add art, home treatment (all five pages)

Adopt the home closing-CTA treatment: copy left, art right (use home's cta-grid as the structural reference, replicate the needed rules in `industries.css`, do not import or edit `home.css` beyond what is already imported site-wide). The art is the page's own sector `<Icon>` at a reduced scale (~260px), echoing the page hero. Hub uses the same 2x2 cluster from fix 1 at reduced scale. This ties the closing CTA back to the hero per the home idiom.

## 5. LMI handover — four fixes (all five pages)

a. **White band**: render the handover band on WHITE on every page regardless of where it falls in the alternation (home does this; the beige placement is why the logo shows a white box). Keep the hairline bounds. If the band now abuts another white section, apply the contained 2px navy bisection line per the divider rule.
b. **Asset check**: report which LMI-LOGO-702 file in `public/` you reference. Do not swap assets; just report format and whether it carries a baked white background.
c. **Alignment**: match the home handover layout exactly — heading, paragraph, logo and the `Explore training at Lean Methods Institute ›` chevron on the same grid axes as home. The chevron is currently misaligned (floating centred); place it per home.
d. **Footer gap**: kill the large white gap between the handover and the footer on the hub. Find the spacing source and state what caused it in your report.

## 6. Sector sub-nav — left-align

Left-align the anchor row to the wide grid axis (the same left axis the section content sits on). Not centred. Sticky behaviour, anchors, scroll-spy and terracotta marker unchanged.

## 7. Sector hero — verify, do not compensate

Confirm the hero SVG sits at `min(540px, 48vw)` with the hero grid proportioned like home, and that the scoped stroke-thinning override uses the SAME value EQT-253 shipped in `services.css`. Do not push stroke weight or any other styling to compensate for placeholder artwork; leave the artwork-swap seam comments in place.

---

## Verify

- `npm run build` green.
- Re-screenshot: hub (hero, selector + station line, CTA, LMI handover + footer junction), Financial Services (hero + sub-nav, CTA, handover), one clone — at desktop AND ~390px mobile width for the hub selector and station line.
- Report changed files and what caused the footer gap. Honest screenshots; say so if tooling fails.
- Still no commit to firewalled files, no self-marking Done.
