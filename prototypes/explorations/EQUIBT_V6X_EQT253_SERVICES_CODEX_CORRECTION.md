# CODEX CORRECTION — EQT-253 R1: service pages review fixes

## STOP — READ THIS FIRST

- This file is the complete correction spec for branch `eqt-253-services-v6x` (PR #37 stays open; push to the same branch). Do not hunt for other prompts.
- Same firewall as the build brief: touch ONLY `src/components/ServicePage.astro`, `src/styles/services.css`, `src/pages/services/*.astro`, plus `prototypes/DESIGN_LEARNINGS_v6x.md` for the three documented amendments in item 7. NO edits to `index.astro`, `home.css`, `base.css`, `tokens.css`, the icons root, `Layout/Nav/Footer`, or `src/components/icons/glyphs/` contents.
- Note: the working tree contains unstaged reviewer edits to `prototypes/explorations/EQUIBT_V6X_DIRECTION_EXPLORATION_v6.html`, `EQUIBT_V6X_UI_TRANSLATION.md` and an untracked `EQUIBT_V6X_EQT254_INDUSTRIES_CODEX_BRIEF.md`. LEAVE THEM ALONE: do not stage, modify, or discard them. Stage only the files you change.
- No plan-gate for this round, but your completion report MUST list: every file changed, the six old→new WHY-section headlines (item 2), and confirmation `npm run build` is green. Do not self-certify sections you did not change.

All nine changes (items 1-7 plus 5b and 5c) apply to ALL SIX service pages (the shared template makes most of them one-place fixes).

## 1. Align the left axis

THE SITUATION section's content (eyebrow, headline, prose) is indented relative to the sections below it. Every section's content must start on the same left grid line (the WHY START HERE / WHAT WE DO left edge is correct). One consistent left axis down the whole page.

## 2. Flip the WHY section headline to a positive frame

The situation section already carries the negative. The WHY START HERE headline currently doubles down on it (FRAME: "Most improvement programmes solve the wrong problem."). Rewrite the headline on each of the six pages to a positive, verb-first frame that states the payoff of starting with this service. Worked example for FRAME: "Solve the right problem, once." Keep the body prose as is (it can retain the pattern-then-fix logic). List all six old→new headlines in your report for review. Voice rules hold: verb-first, no em/en dashes, no DMAICO.

## 3. CTA eyebrow

The dark card's eyebrow `START HERE` repeats the earlier `WHY START HERE`. Change it to `WORK WITH US` on all six pages.

## 4. CTA equation boxes — make the values carry the weight

The titles inside the three equation boxes ("From 1 day", "Embedded with your team") do not stand out. Raise the value lines to Montserrat 700, ~24-26px, white. Labels stay as the small grey caps. The WHAT YOU GET deliverables list keeps the hairline rows but lifts to match the body scale. Keep the thin hairline boxes, terracotta operators, white-inverted button. Dark field on the services pages is LOCKED at dark-slate `#2C3E50` (decision 2026-06-07: dark tone varies per page TYPE, not per page — services dark-slate, industries ink-navy, home near-black).

## 5. Merge WHERE IT LEADS + NEXT STEP into one continuous section

They currently read as two separate sections (separate eyebrows, a divider between them). Merge: ONE section, one eyebrow (`WHERE IT LEADS`), one headline, the prose, the pathway, then the two next-step columns flowing directly under the pathway. Remove the bisection divider between pathway and columns, remove the `NEXT STEP` eyebrow and its headline. One background colour across the merged section; rhythm tightened so the pathway visually leads into the columns.

**5b. Make current-vs-next visually unmistakable in the columns.** Right now the two columns read as equal siblings; nothing says the left one IS this page and the right one is where to go. Fix with all three of:
- A small Montserrat caps label on the top hairline of each column: left `YOU ARE HERE` in muted grey (it echoes the terracotta YOU ARE HERE on the pathway directly above, closing the loop), right `THE NEXT STEP` in terracotta.
- De-weight the current column: kicker and heading in the muted grey register (`#7A8591` kicker), no link (it would link to the page you are on). The next column keeps full navy weight, terracotta kicker, and is the ONLY column with the `Explore <PILLAR> ›` link.
- A single large terracotta `›` glyph centred in the gutter between the two columns (desktop only; stacks away on mobile), so the eye travels left to right.
The pathway's terracotta current-station, the muted current column and the emphasised next column must all agree on every page (current = this page's pillar; next per the locked sequence; SCALE's right column points to contact).

**5c. Mark the NEXT station on the pathway itself.** Bold-navy label weight alone does not read; the SOLVE stop currently looks like every other stop. Three changes to the static pathway SVG:
- The line SEGMENT from the current station to the next station renders in terracotta (same stroke weight as the rest of the line, just the colour change) so the line shows the direction of travel.
- The NEXT station gets a filled navy core inside its ring (downstream stations stay hollow), sized between the current station's mark and the plain stops.
- A small Montserrat caps label `NEXT` in terracotta sits above the next station (quieter than YOU ARE HERE: no pointer line, smaller size), inside the container.
On SCALE (last station) there is no next stop: no terracotta segment, no NEXT label; the columns' contact framing carries the forward motion.

## 6. Hero art at home-hero scale

The pillar icon in the hero is too small and reads as an icon, not a hero image. Render the SAME pillar `<Icon>` at home-hero scale and treatment: large (wrapper ~`clamp(320px, 34vw, 460px)`, match the home hero proportions), asymmetric right, bleeding into the whitespace, off-grid per the home hero composition. Do NOT draw or modify any artwork; the wrapper scales the existing component. (Richer per-pillar hero scenes are a later content-only artwork swap by Herman: leave a one-line code comment `hero art: pillar icon at hero scale — per-pillar hero motif may swap in here later (artwork-authority)`.)

## 7. Minimal reveal animation (idiom amendment, approved 2026-06-07)

Add ONE restrained entry reveal to the service pages: each section's content fades in and rises ~8px on first entry into the viewport. 350ms ease-out, fires ONCE per section, NO staggered delays, NO per-element reveals, IntersectionObserver, and `prefers-reduced-motion: reduce` disables it entirely (content visible, no motion). Implement in `services.css` + the template script (NOT base.css — it is firewalled on this branch; promotion to base.css site-wide happens in a follow-up issue).

Then amend `prototypes/DESIGN_LEARNINGS_v6x.md` with three dated entries (2026-06-07, EQT-253 R1):
- Under the process/idiom notes: "Minimal reveal reinstated (amends the static-calm lock): one fade + 8px rise per SECTION, 350ms, once, no stagger, reduced-motion respected. The v5x multi-element reveal-d1..d3 system stays retired. Home retrofit = follow-up issue."
- Under the dark flagship/CTA section: "Dark-field tone varies per page TYPE, not per page: home near-black #101317, service pages dark-slate #2C3E50, industry pages ink-navy. Siblings within a page type share one tone."
- Under the pathway section: "Static pathway (service pages): current station = terracotta ring + YOU ARE HERE pointer; NEXT station = filled navy core + small terracotta NEXT label; the segment between them renders terracotta to show direction of travel; downstream stations hollow with grey labels. Last station (SCALE) carries no next marking."

## Acceptance (reviewer will eyeball localhost again)

- [ ] One left axis on every page; situation section no longer indented.
- [ ] Six positive WHY headlines, listed old→new in the report.
- [ ] `WORK WITH US` eyebrow on the dark card, all six pages.
- [ ] Equation values read at a glance; deliverables list legible; dark-slate field unchanged.
- [ ] WHERE IT LEADS flows straight into the next-step columns: one section, no divider, no second eyebrow.
- [ ] Hero art at home-hero scale via the wrapper only; no artwork edits.
- [ ] Reveal: subtle, once, no stagger; pages fully readable with reduced motion or JS off.
- [ ] DESIGN_LEARNINGS_v6x carries the three amendments.
- [ ] Pathway shows direction of travel: terracotta segment to the NEXT station, filled navy core, small NEXT label; SCALE carries none.
- [ ] Next-step columns asymmetric: current muted and unlinked, next emphasised with the only Explore link, terracotta chevron in the gutter.
- [ ] `npm run build` green; diff touches only the named files; reviewer working-tree files untouched.

Push to `eqt-253-services-v6x`, comment on PR #37 with the change list. Do NOT mark EQT-253 Done.
