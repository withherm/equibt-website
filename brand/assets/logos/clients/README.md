# Client logo wall — drop target

Curated client logos for the logo wall used on **Home** and **About Us** (relationship/trust strip, not tied to any case claim). Drop one file per client here.

## Spec
- **Format:** SVG preferred (matches the rest of `brand/assets/logos/`). Transparent-background PNG acceptable only if no vector exists, exported ~120px tall (2x display) and trimmed tight to the mark.
- **Treatment:** monochrome, single navy `#26245C` (or supply full-colour and it gets desaturated in CSS). A one-colour wall reads as a trust strip and future-proofs for v6x, which is monochrome.
- **Sizing:** standardise on a consistent HEIGHT with even top/bottom clear space inside each file; tight viewBox for SVG. The page renders logos at ~40px tall.
- **Naming:** coded filenames `logo-01.svg`…`logo-NN.svg`. Never put client names in filenames (privacy: search engines read filenames). The code-to-client key lives in the vault, never in this repo.
- **Count:** up to ~20 of the strongest names. Relationship strip only, never paired with a specific result or metric.
- **Permission:** only include logos EQUIBT has the right and relationship to display.

## Status
- Logo wall is a COMPONENT on Home (built in the v6x home rebuild, EQT-245) and About Us (its v6x conversion). It is NOT a standalone page.
- Standalone Credentials page (EQT-222) retired 2026-06-04; its stat band and sector strip were dropped as redundant (proof lives on Home/Our Work; sectors live on the Industries hub).
