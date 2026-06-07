# CODEX CORRECTION — EQT-253 R4: hero art fine-line treatment (single item)

## STOP — READ THIS FIRST

- Complete spec for round 4 on branch `eqt-253-services-v6x` (PR #37 stays open; push to the same branch). One item only.
- Files you may touch: `src/styles/services.css` (and `src/components/ServicePage.astro` only if a wrapper class is needed). NOTHING else. Do NOT edit any file in `src/components/icons/` — the icon components stay byte-identical (EQT-272 firewall).
- Reviewer working-tree files (`prototypes/explorations/*` modified/untracked) remain off limits.
- Report: the chosen stroke values, the measured home-hero line weight you matched against, `npm run build` green.

## 1. Thin the hero art strokes to the fine-line idiom

Context: the hero icon now renders at home-hero scale (R2), but its strokes scale up with it (~17px visual) and it reads as a fat marker blow-up. The home hero reads as a fine-line engineering schematic. Match the LINE WEIGHT, not just the size.

- Scope a stroke override to the hero wrapper ONLY, e.g. `.service-hero-art svg .hd`, `.hd-acc` (and a catch-all for icons that carry stroke-width as SVG attributes — CSS beats presentation attributes): reduce stroke-width so the VISUAL line weight at the rendered hero size matches the home hero's lines at the same viewport. For a 64-viewBox icon rendered ~540px wide, expect somewhere around `stroke-width: 0.3-0.4`; derive the exact value by measuring the home hero's rendered line weight and report both numbers.
- The terracotta accent keeps its slight extra weight relative to navy (same ratio as the icon set: 2.3/2).
- Keep `stroke-linecap`/`linejoin` round. The icon stays sparse — that is accepted; sparse + fine reads as deliberate minimalism. Fat + sparse is the thing being killed.
- Everywhere else (selector list, next-step columns, trio glyphs) icons keep their normal weight: the override must not leak beyond `.service-hero-art`.
- This is an INTERIM treatment: per-pillar hero scene motifs are queued as Herman-drawn artwork (content-only swap later). Update the existing code comment to: `hero art: pillar icon at hero scale, fine-line interim — per-pillar hero scene swaps in here later (artwork-authority)`.

## Acceptance (reviewer eyeballs localhost)

- [ ] Hero art line weight visually matches the home hero at the same viewport on all six pages; values reported.
- [ ] Terracotta/navy weight ratio preserved; round caps intact.
- [ ] No stroke change anywhere outside the hero. No icon component edited.
- [ ] `npm run build` green.

Push to `eqt-253-services-v6x`. Do NOT mark EQT-253 Done.
