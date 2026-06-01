# DESIGN_LEARNINGS_v5x.md

Supersedes: DESIGN_LEARNINGS_v3.md
Last updated: 2026-06-01
Scope: EQUIBT website prototype series - accumulated design taste and decisions. Named v5x to align with the v5x prototype series so there is one version label across design rules and prototypes. Several rules (light hero/menu, no 01/02/03 numbering, restrained type scale) now apply portfolio-wide; noted inline where they do.

Canonical location: this file at `Repos/equibt-website/prototypes/DESIGN_LEARNINGS_v5x.md` is the single source of truth. Do not keep a second editable copy in the Docs tree. v5x reconciles the contradictions that had accumulated across v3 (hero/footer colour, type scale, warm parchment, wash hex values, LMI domain, nav direction).

> READ FIRST: the "HARD RULES" and "v5x REVIEW ADDENDUM" sections win over any conflicting rule lower in this file. The "FRAME TEMPLATE SPEC" section immediately below is the locked service-pillar pattern all six service pages inherit. Hero and footer are PURE WHITE #FFFFFF. The footer is the FULL FRAME footer (brand + tagline, Services / Company / Connect link columns, and a copyright bottom bar), with NO LMI line. "No LMI line" never meant "strip the footer to copyright only" - every page carries the full footer.

---

## LOCKED SERVICE NAMES (source: EQUIBT.md, locked May 2026)

These are the public-facing service names used in h3 headings, card titles, page titles, and context cards. The DMAICO phase label (Define, Measure, etc.) is the badge only. The copy files use "root cause analysis" etc. as METHOD descriptions - that is correct and should stay. Only the SERVICE NAME heading must match this table.

| Badge | Phase | SERVICE NAME (use this in h3 / card headings) |
|---|---|---|
| FRAME | Define | Problem Framing |
| PLAN | Measure | Operations Diagnostic |
| SOLVE | Analyse | **Iterative Improvement** |
| EVOLVE | Improve | Rapid Pilot |
| GOVERN | Control | Architecture & Governance |
| SCALE | Operate | Operational Embedding |

"Root Cause Analysis and Solution Design" is the old SOLVE name - retired. Do not use it as a heading anywhere. It may appear in body copy as a description of what the service includes.

---

## FRAME TEMPLATE SPEC (locked 2026-05-31, service-pillar template)

equibt_frame_prototype_v5x.html is the locked service-pillar template. All six service pages (FRAME, PLAN, SOLVE, EVOLVE, GOVERN, SCALE) share this structure and visual language; only pillar-specific copy, colour, deliverables, and train-station "you are here" position change.

Section flow:
1. Nav: pure white #FFFFFF, dark text, sticky, standard EQUIBT logo. Same as Home v5x. (Service pages use the same light nav as Home: the old navy `.ref-nav` is retired, see HARD RULE 1.)
2. Hero: pure white #FFFFFF, dark text, never navy. Pillar eyebrow (PILLAR | PHASE), H1, supporting line, CTAs. Low-poly gem illustration retained.
3. "Why start" / "Why this matters" problem section: light background (off-white #F5F3EE or light grey #F5F5F5), never warm parchment. The section is framed by a LEFT-bleed highlight callout (#E8ECF8, see the highlight callout left full-bleed rule) and the three proof points rendered as RIGHT-bleed white boxes (see the why-section right full-bleed rule).
4. "What we do" / disciplines (NOT "phases"): cards, consistent size, on a WHITE #FFFFFF (or off-white #F5F3EE) section, with cards `background: var(--navy-wash)` #E8ECF5 so the blue cards read against the light section. Do NOT put navy-wash cards on a navy-wash section: no contrast, the block goes flat. That was the GOVERN/SCALE drift (both section and cards navy-wash), fixed under EQT-212. Section eyebrow reads "WHAT WE DO" on ALL SIX pages (locked 2026-06-01); only the heading varies per pillar (Three outputs / Three areas / Three disciplines / Four systems / Four activities).
5. "What you receive" deliverables: HORIZONTAL CAROUSEL, one large LANDSCAPE slide at a time, thin sliver (8-12%) of next slide peeking. Prev/next arrows pinned to the left/right EDGES of the carousel, vertically centred on the slide (circular icon buttons, white/off-white, navy arrow, terracotta hover, focus ring). Dot indicators below. Mobile-safe (arrows must not cover text; fall back below on narrow screens). Images landscape (4/3 or 3/2), filenames assets/deliverables/[PILLAR]/[PILLAR]-DEL-N-NAME.jpg, graceful onerror landscape placeholder until jpgs exist. 4 deliverables per page.
6. Our Work (case studies): eyebrow "OUR WORK", title "Recent engagements." Uses the unified Our Work card pattern (see the "ONE Our Work pattern" rule): left rail sector + pillar badge + navy "X to Y" stat, right column headline + Problem/Approach/Outcomes with pillar-coloured sub-labels, "View our work" link. No left-border quote styling, stat stands alone (outcome must not repeat the number), operational metrics only.
7. "Where it leads" train station: horizontal rail of 6 stops FRAME PLAN SOLVE EVOLVE GOVERN SCALE in that order (use SCALE, never OPERATIONALISE). Pills standard size. "YOU ARE HERE" marker on the current pillar. CURRENT PILLAR PILL IS 15% LARGER than all others: scale width and height by 1.15, adjust rx to half the new height (pill shape), font-size 16.1px (from 14px base), re-centre the rect on the same x-axis midpoint so the arrow still lands correctly. Only TWO pills stay full pillar colour: (1) the current pillar, (2) the immediately next pillar (one step ahead). Every other pill - including past pillars the visitor has already completed - renders dimmed light grey (#D8DCE0, text #7A8591). Past steps are behind you, not a destination; dimming them focuses the eye on where you are and where you go next. Title "Where it leads". NO visible DMAICO anywhere (DMAICO only in SEO meta).
8. Next-step cards below the station: v5x card style. WHICH TWO CARDS: the two cards mirror the two COLOURED pills, namely the CURRENT pillar and the IMMEDIATELY-NEXT pillar. Not the pillar before and the pillar after. So on SOLVE the cards are SOLVE (current) and EVOLVE (next); on PLAN they are PLAN (current) and SOLVE (next). The pillar badge on each context card MUST match the visual state of that pillar's pill on the trainline above: since both cards are coloured pills, both badges use the full pillar colour class. The dimmed inline style `background:#D8DCE0; color:#7A8591` is only ever used if a dimmed pillar must be shown as a card (it normally should not be). Cognitive consistency: coloured pill = coloured card; the current pill (biggest, YOU ARE HERE) and the next pill each get a card. The CURRENT-pillar card is a quiet anchor, not a navigation target: it does not link to its own page and carries NO bottom label at all (no "Explore X", no "You are here"). Badge, h3 name, and body only, rendered as a non-link card. The station's YOU ARE HERE marker already owns the "you are here" signal directly above, so repeating it on the card is redundant. The NEXT-pillar card links forward with the "Explore X" link and carries the "where it leads" meaning. EDGE CASE - SCALE (last pillar) has no next: show the SCALE current card plus a forward card to the services overview or a "start a conversation" CTA, not a seventh pillar.
9. CTA panel: dark slate #2C3E50 (permitted dark moment). Structure unchanged: `.section.cta-panel` > `.section-inner.cta-box.reveal` > [verb-first H2] [stage-specific body] [CTA meta strip on service pages] [one button]. CTA CONTENT RULES (locked 2026-06-01, EQT-214; equation pattern locked 2026-06-02, EQT-215; prominent operators locked 2026-06-02, EQT-216): (a) Button label is "Get in touch" on EVERY contact CTA across the site, the panel button AND the nav `.nav-cta` AND the hero `.btn-primary`. Never "Book a discovery call" (SaaS funnel signal, wrong for a referral-driven advisory) and never "Let's talk". (b) NO public price ranges. The "Typical investment" meta card is banned site-wide. (c) All SIX service pages carry the CTA meta strip as an equation: "Typical timeline" + "How we work" = "What you get". Card 1 is the low-anchor timeline; card 2 is "Embedded with your team"; prominent `.cta-eq-op` operators sit between the cards and are about 2x the value size and bold (`font-size: 48px; font-weight: 700;`); card 3 is a vertical stack of four mini-cards showing deliverable NAMES only, matching that page's "What you receive" section. The label is "What you get", not "What you leave with". Home is card-less: it is not a single pillar, so per-service cards do not map. (d) Body copy is firm "we" voice, no named individual (one-man-band signals = procurement risk for corporate/gov buyers), stage-specific per DMAICO step, and must NOT use the old formula "a fifteen-minute conversation will scope X. No obligation." (e) Timeline card anchors LOW: lead with the smallest honest start as "From X weeks", never a wide range and never a month-count at the CTA (a long, scope-dependent range reads as scary at the point of contact and loses new clients). FRAME "From 1 day" (workshop), PLAN "From 2 weeks", SOLVE/EVOLVE/GOVERN/SCALE "From 4 weeks". No month-counts at the CTA. (f) Measurable client numbers belong in case studies, not the CTA. Full EQT-214 copy blocks live in `Runtime/01_Projects/Active/EQUIBT_CTA_REDESIGN_OUTPUT_v1.md`; EQT-215 equation prompt lives in `Runtime/01_Projects/Active/EQUIBT_CTA_EQUATION_CODEX_PROMPT.md`.
10. Footer: pure white #FFFFFF, dark text. The FULL FRAME footer on every page: footer-brand (logo + tagline "We simplify the complex. We make it stick."), three link columns (Services: the six pillars; Company: About, Our Work, Insights, Contact; Connect: hello@equibt.com, LinkedIn), then a footer-bottom copyright bar. NO LMI line anywhere in it. Do NOT ship a stripped copyright-only footer - that was a misread of the "no LMI line" rule and left PLAN/SOLVE/EVOLVE looking footerless.

Tokens: use the Home/FRAME v5x :root exactly. navy #26245C, terracotta #C15F3C (accent only), off-white #F5F3EE, light grey #F5F5F5, navy-wash #E8ECF5 (tinted section backgrounds), highlight-wash #E8ECF8 (highlight callout blocks), dark-slate #2C3E50. Fonts Montserrat/Inter/Open Sans. Type: hero H1 52px weight 600, section H2 36-40px weight 500, body 18px line-height 1.6 (see Typography). No gradients, glassmorphism, scale-on-hover (translateY lift fine), no 01/02/03 numbering, no warm parchment, no stock photos.

Copy-file caveat: the [PILLAR]_COPY files predate the light rules and still specify navy heroes, warm-parchment sections, DMAICO-context sections, and near-black CTAs. Use the copy TEXT verbatim, but apply the FRAME v5x STRUCTURE and backgrounds above, ignore the old background/section instructions in the copy files.

---

## Typography

**Hero H1 is the deliberate exception at weight 600.** All other headings (section H2, card titles, display) are weight 500, not 600 - 600 looks aggressive at those sizes, 500 reads authoritative without being loud. Hero H1 alone carries 600 because it is the single loudest moment on the page.

**Hero H1:** 52px / weight 600 / letter-spacing -0.03em / line-height 1.06. Locked 2026-05-27 after visual review. The instinct to go bigger is wrong; 700 still looks corporate and heavy. (Rule 10 permits 52-56px; treat 52px as the default, 56px as the ceiling.)

**Statement text must match hero H1 exactly.** If hero is 52px/600, statement-text is 52px/600. They are the same voice at the same scale. One is the claim, the other is the evidence. They should feel like the same person speaking.

**Section H2:** 36-40px / weight 500 (Rule 10, supersedes the earlier 44px). Do not go to 600 even when the text is short. Keep the step down from H1 proportionate, not a cliff.

**Body:** 18px / #555 / line-height 1.6 (Rule 10, supersedes the earlier 17px/1.75). Do not reduce to 16px.

**Proof strip minimum:** stat-label 16px (#111). stat-sub 14px (#777). The off-white background has very low contrast - 12px and #999 are both too small. Never go below these numbers on any beige/off-white panel.

---

## Illustration style

**The style is low-poly triangulated polygon, also called faceted gem or cut gem style.** It is NOT:
- Simplified geometric shapes (circles, squares, flat shapes)
- Origami fold lines (single diagonal crease lines)
- Minimal line illustrations with thick strokes
- Flat icon art

It IS:
- Many small triangular faces forming a complete mesh
- Every triangle shares its edges with adjacent triangles - no gaps
- Navy (#26245C) lineart throughout at 1.5px stroke
- stroke-linejoin: round
- No fill on any triangular face
- One terracotta (#C15F3C) circle accent at the focal point (the intervention point, the centre of the system)
- Small white open-circle nodes at key vertices (cx, cy, r="4", fill="white", stroke navy)
- The silhouette reads as a gem, diamond, or crystal - not a paper animal

**Reference:** Herman showed 20-animal low-poly grid and fox head/body illustrations in this style as reference images on 2026-05-26. The polygon gem in equibt_home_prototype_v4.html is the first approved implementation.

**SVG construction rule:** design with named vertices first, then derive every face as a triangle from those vertices. Verify the mesh is closed - every outer edge is covered by one face, every interior edge shared by two faces. No orphaned edges.

**Hero SVG viewport:** 440x380, viewBox="0 0 440 380". Illustration centred within it.

---

## Section layout preferences

**Hero:** 2-column CSS grid (text left, SVG right). SVG hidden on mobile. No decorative elements behind the text.

**Statement:** Single full-width column. Max-width 820px centred. No sidebar, no 2-col. This section is editorial - it earns the full width. 52px statement text followed by an 18px sub-paragraph with left border accent (terracotta at 25% opacity, 3px, padding-left 24px).

**Method/system sections:** Connected card grid, NOT a vertical list. For a 6-item system, use 3x2 grid. The 1px gap technique: set `gap: 1px; background: rgba(38,36,92,0.08)` on the grid, white cards inside. The navy-tinted gap background shows as connecting lines between cards. This makes them feel like a system, not a checklist.

**Card-based sections:** Each card gets a phase-coloured top border (3px). Faint 88px background number (opacity 0.045) for visual depth - this is a decorative watermark, not 01/02/03 sequence numbering. Phase pill tag. Clear hierarchy: pill -> name -> description -> delivers -> link.

**Proof strip:** 4-column stat grid. Each stat block: large number (stat-num), label (stat-label 16px), and context line (stat-sub 14px/#777). Never let stat-sub go below 14px on any beige background.

---

## What does NOT work

**Vertical lists for a multi-pillar system.** Six full-width stacked rows reads as a long document, not a system. It breaks the viewer's sense of interconnection. Always use a grid for system-level content.

**Hero H1 at 700.** Locked 2026-05-27 after visual review. 700 at 52px looks corporate and heavy. 600 at 52px reads authoritative without being loud.

**Small text on off-white backgrounds.** The off-white (#F5F3EE) is very low contrast. Any text below 14px or above #999 grey disappears. Be aggressive with font size and colour on these panels.

**Placeholder icons in service cards.** If there is no illustration yet, leave the space empty rather than using a generic SVG. A placeholder icon that is wrong reads worse than no icon.

**Two-column statements.** The statement section reads best at full editorial width. A sidebar or 2-col version breaks the rhetorical punch.

**Origami fold lines.** Simple diagonal crease lines on a flat polygon do not read as the illustration style Herman wants. They look like a budget icon. The style is many small triangular faces, not a few folds.

---

## HARD RULES - HERO/MENU LIGHT, DARK ACCENTS OK LOWER (added 2026-05-30, REVISED same day)

These supersede every earlier hero/footer/parchment instruction in this file. When this section conflicts with anything lower, this section wins.

The core issue: navy is too heavy as a HERO background, it is a wall the moment a human lands. It is NOT a problem as a deliberate dark accent lower down the page, where it reads as emphasis and gives the page dark-light rhythm (the elevenlabs / epicagile move). So:

**1. Hero and menu are always light, never dark.** Nav/menu background is light (off-white #F5F3EE or white) with dark text. Hero background is pure white #FFFFFF (see rule 3), never a navy or dark fill. Applies to ALL pages including Home. This reverses the old "Home page hero IS navy" call, which is fully retired.

**2. Dark accent sections are ALLOWED lower down, as deliberate moments, not the opening.** A navy #26245C proof/stat strip and a dark slate #2C3E50 CTA panel are fine in the body of the page. They give rhythm and authority. Just never first, never the hero, never the menu. Use them sparingly: roughly one or two dark moments per page, not every other section.

**3. Hero and footer are PURE WHITE #FFFFFF, dark text. FINAL (locked 2026-05-30 after v5x review).** Other sections use off-white #F5F3EE, light grey #F5F5F5, and navy-wash #E8ECF5 for alternation. The only permitted dark moments are the proof strip and CTA panel in the body.

**4. Section backgrounds, light surfaces: off-white #F5F3EE, light grey #F5F5F5, navy-wash #E8ECF5.** Plus the permitted dark accent moments in rule 2, plus the LMI training-handover section on Home (rule 13). Nothing else. (Highlight CALLOUT blocks use highlight-wash #E8ECF8, see rule 8, that is a callout colour, not a section background.)

**5. Warm parchment is fully retired.** Neither a background nor a highlight. The old values #F5EBD9 and #F8F1E5 are dead. Highlight callouts (a highlighted stat, a callout, a pull-quote bar) use the highlight-wash #E8ECF8 (distinct from the section navy-wash #E8ECF5). See rule 8.

**6. No 01 02 03 section/card numbering.** Eyebrow label text alone. Portfolio-wide.

---

## HARD RULES - v5x REVIEW ADDENDUM (locked 2026-05-30, Herman review of Codex v5x, the chosen Home direction)

v5x (Codex) is the chosen Home direction over v5 (Claude Code). These apply to v5x and forward to all pages. Where they conflict with anything above, these win.

**7. Hero and footer are PURE WHITE #FFFFFF.** Menu/nav light. Dark moments only as the proof strip and CTA panel in the body.

**8. Cool washes are two tokens, NOT warm parchment. Locked to match the build (Herman 2026-06-01).** Tinted SECTION backgrounds (examine, what-you-receive, alternation) use navy-wash `--navy-wash` #E8ECF5. Highlight CALLOUT blocks (a highlighted stat, a callout, a pull-quote bar) use highlight-wash `--highlight-wash` #E8ECF8. These two stay distinct, matching the v5x build. Warm parchment retired (read weak/beige); #F5EBD9, #F8F1E5 and the stray "what you receive" #EEF0F8 are all dead. (The earlier spec attempt to collapse to a single #E8ECF5 is reversed: the build always kept both tokens and that is now the standard.)

**Highlight callout, LEFT FULL-BLEED (locked 2026-06-01, EQT-202, all pages).** The shared `.highlight-callout` component bleeds to the LEFT viewport edge for a more distinct highlight. Left edge sits at viewport 0 with no left gap or margin; the right side stays within the content column. Left corners square (top-left and bottom-left radius 0); right corners keep the existing radius, so it reads as a band anchored to the page edge. Text inside KEEPS left padding so it stays aligned with the page content column (body-text left edge), never flush against the viewport. Use the existing container/gutter variable for the negative offset, do not hardcode. Mobile: keep a small safe left padding so text never touches the screen edge; the bleed is primarily a desktop/tablet effect. Applies to every page using `.highlight-callout`.

**Why-section proof points, RIGHT FULL-BLEED white boxes (locked 2026-06-01, EQT-205/EQT-206, all service pages).** In the "Why this matters" section the three proof points render as three stacked WHITE #FFFFFF boxes that bleed to the RIGHT viewport edge: right corners square (top-right and bottom-right radius 0), left corners keep the standard radius, a card shadow so white reads on the light section background, text aligned within the content column (never flush to the screen edge), safe right padding on mobile. This mirrors the left-bleed highlight callout, so the why-section is framed by a left-bleed highlight box and right-bleed proof boxes. Tested on EVOLVE, approved, now the standard for every service-page why-section (FRAME, PLAN, SOLVE, EVOLVE, and GOVERN/SCALE as built).

**Eyebrows / kicker labels stay TERRACOTTA site-wide.** A pillar-colour eyebrow (green hero eyebrow on EVOLVE) was tested 2026-06-01 and REJECTED. Eyebrows are the cross-page connective accent and must stay terracotta #C15F3C on every page and every section. Do not recolour eyebrows to the pillar colour. Pillar colour stays on badges, pills, and the Our Work PAO sub-labels; the illustration focal circle stays terracotta.

**9. Type scale: locked to the FRAME/PLAN reference (Herman 2026-06-01, EQT-212).** Hero H1 `clamp(52px, 4.15vw, 56px)`, weight 600, line-height 1.08. Section H2 (`.section-title`) `clamp(36px, 3.2vw, 40px)`, weight 700, line-height 1.06. Card H3 25px, weight 700. Body 18px, line-height 1.6. These are the FRAME and PLAN values; SOLVE/EVOLVE/GOVERN/SCALE had drifted (fixed 52px H1 with lh 1.06; EVOLVE/GOVERN/SCALE H2 dropped to weight 500) and are corrected to match. This supersedes the earlier "section H2 weight 500" restraint wording: Herman chose the bolder 700 section heading that FRAME ships.

**10. Card grids: consistent card dimensions and padding; rhythm via horizontal row offset, not by resizing cards.** The v5x bento used different-sized cards, which read as inconsistent. Keep all cards the same size and padding; stagger rows horizontally for interest.

**11. Industries: 4 cards, equal size.** Financial Services, Government and Public Sector, Utilities, Advanced Manufacturing (per Herman 2026-05-30). Healthcare drops from the home industries strip. Advanced Manufacturing card copy (approved 2026-05-30): "Precision, throughput, and quality under tight tolerances. We help manufacturers cut waste, stabilise processes, and build improvement capability on the floor."

**12. LMI training handover belongs on the Home page.** Dedicated warm-handover section, light background, near the bottom. Approved copy 2026-05-30: eyebrow TRAINING; heading "Need to build the skills in-house?"; body "Lean Methods Institute is our specialist training division. If your team needs Lean and AI capability built through structured courses rather than an advisory engagement, that is where to start."; link "Explore training at Lean Methods Institute" -> https://leanmethodsinstitute.com. Understated, warm handover not hard sell.

**13. LMI appears in exactly ONE place on the EQUIBT site: the Home page training-handover section.** Not in any footer, not on service pages, not anywhere else. Domain: leanmethodsinstitute.com (global primary), not leanmethods.com.au and not theleanmethods.com. EQUIBT footers carry the full FRAME footer (brand, nav columns, copyright) with no LMI line; "no LMI line" does not mean strip the footer. Locked 2026-05-31, footer scope clarified 2026-06-01.

**14. Drop DMAICO jargon from the home hero copy.** DMAICO is not established enough to lead with. No "Six services aligned to DMAICO" in the hero; reference the six services plainly. DMAICO may stay in the SEO/AEO block and on deeper pages.

**Consequence for the six service pages:** mostly fine under these rules. Their dark-slate CTA panels stay (rules 2, 3); their footers go pure white (rule 3, no LMI line). The navy `.ref-nav` is already replaced by the light Home nav in the v5x service pages, so nav is done. Remaining touch-ups: (a) any service-page hero that is navy must go pure white, (b) warm-parchment SECTION backgrounds become light grey or off-white, with no parchment highlight either (callouts use highlight-wash #E8ECF8). A light touch-up, not a rebuild.

---

## Service page section order (locked, reconciled with FRAME v5x template)

1. Hero: pure white #FFFFFF + bottom border, dark text
2. Why start: light grey #F5F5F5 or off-white #F5F3EE (parchment retired)
3. What we do: WHITE #FFFFFF or off-white #F5F3EE section, cards `background: var(--navy-wash)` #E8ECF5 for contrast (eyebrow "WHAT WE DO", never navy-wash on navy-wash)
4. What you receive: horizontal carousel (see FRAME spec section 5), navy-wash #E8ECF5 surface
5. Our Work (case studies): pure white #FFFFFF. Uses the unified "Our Work" card pattern shared with the home page (see the Our Work pattern rule below).
6. Related services / where it leads: light grey #F5F5F5
7. CTA panel: dark slate #2C3E50
8. Footer: pure white #FFFFFF, full FRAME footer (brand + nav columns + copyright bar), no LMI line

**Background alternation:** light surfaces alternate between off-white #F5F3EE, white #FFFFFF, light grey #F5F5F5 and navy-wash #E8ECF5. The only dark moments are the proof/stat strip (navy #26245C) and the CTA panel (dark slate #2C3E50). Home additionally carries the LMI warm-handover section near the bottom (rule 12).

**Accent colour:** terracotta (#C15F3C) is used sparingly - eyebrows / kicker lines (site-wide, see the eyebrow rule), proof-STRIP stat numbers, pillar link text, the "View our work" link, and the one focal circle in each illustration. NOT the Our Work big case stat (that is navy #26245C) and NOT the Our Work PROBLEM/APPROACH/OUTCOMES sub-labels (those are the pillar colour). Never a background fill.

**Navy (#26245C):** primary brand colour. Used for all illustration linework, nav text/logo, pillar name headings, the proof strip, and some display elements.

---

## Copy and voice

**EQUIBT is not a consulting brand. It is a system.** Every piece of copy should frame the work as a set of interconnected pillars, not a service menu. Avoid "our team will help you" framing. Use "the system does X" framing.

**Statement section tone:** One clear problem (e.g. "Most improvements hold for twelve months. Then the team turns over and the operation drifts back."), followed by one clear positioning statement about what EQUIBT does differently. No bullet points in the statement section.

**Section H2 style:** Short, confident. Use a line break to create visual tension. "Six pillars.\nOne system." Not "Six integrated pillars that form one coherent system."

**No em dashes.** Use colon, comma, or restructure the sentence. This applies to all copy in all prototype files.

**Summary / case-study titles are VERB-FIRST and active. HARD RULE (Herman 2026-06-01, preferred consulting style).** Every Our Work case-card headline (and any "what we did" summary title) must start with an action word, not end in a passive past participle. "Redesigned claims exception routing." NOT "Claims exception routing redesigned." "Standardised the investigation process across teams." NOT "Investigation process standardised across teams." "Validated the field operations redesign." NOT "Field operations redesign validated." Lead with the verb. This is a small detail that signals EQUIBT's action-oriented values, and it is non-negotiable across every page.

---

## File conventions

**Prototype files:** `equibt_home_prototype_vN.html` in `Repos/equibt-website/prototypes/`. Increment version for major rounds. Minor edits go in-place on the current version.

**Session briefs:** `SESSION_BRIEF_EQUIBT_WEBSITE_vN.md` in `Runtime/01_Projects/Active/`. Move prior version to `Runtime/01_Projects/Archive/` when creating new version.

**Design learnings:** this file. ONE canonical copy at `Repos/equibt-website/prototypes/`. Append or supersede. Do not fork a second copy into the Docs tree - that caused the v3 drift this version fixed.

**Do not push to GitHub** unless Herman explicitly instructs. Local prototype and vault files only.

---

## Service page hard rules (section-level)

**No numbered labels anywhere on service pages.** No 01, 02, 03 in the Why EQUIBT section, no numbered labels on examine/what-we-do cards, no numbered phases. These look like generic AI-generated layouts. Numbers imply sequence; the distinctions and disciplines are not a sequence, they are parallel truths.

**Always 4 deliverables per service page.** No exceptions. 3 deliverables creates an orphan card in the 2x2 grid. 4 cards sit cleanly in the repeat(2,1fr) 2x2 layout. If a pillar genuinely has 3 primary outputs, split one or add a natural fourth (e.g. a workshop record, readiness assessment, or authorisation brief).

**Examine/what-we-do items are disciplines, not phases.** Do not use the word "phases" in section headings for the what-we-do section. These are areas of work, not a linear sequence. Use words like "disciplines", "activities", "areas", or name them directly.

**No left-border quote block styling.** The case-result solution paragraph must not use `border-left` or a tinted background block. These are the default "AI blockquote" pattern and look generic. Plain body text only, with subtle padding for visual separation.

**ONE "Our Work" pattern across every page (home + all six service pages). Locked 2026-06-01.** The home "Our Work" section and the service-page case section are the same component, not two designs. Unified structure:
- Section eyebrow + title: LOCKED 2026-06-01 as eyebrow "OUR WORK", title "Recent engagements." on every page. Home and service pages identical.
- Two-column card. Left rail (light grey #F5F5F5): SECTOR label, pillar badge (PILLAR | PHASE, full pillar colour), and the BIG STAT. Right column: descriptive headline (what was done) then PROBLEM / APPROACH / OUTCOMES. The headline is VERB-FIRST and active (see the action-oriented headline hard rule in Copy and voice): "Redesigned claims exception routing." not "Claims exception routing redesigned."
- BIG STAT shows the improvement at a glance, "from X to Y" format wherever a before/after baseline exists: "18% to 24%", "52 to 31 days". Where only a single delta exists, a single improvement metric is allowed ("47% reduction", "errors eliminated"). NEVER a bare input count ("3"), never an abbreviation ("1 wk").
- Full Problem / Approach / Outcomes body on EVERY card including home (Herman 2026-06-01). Home cards are not a condensed variant.
- A consistent "View our work" link at the foot of each card (present on all pages, not just home). It needs clear vertical separation from the OUTCOMES paragraph above it: roughly 40px (about one extra blank line), not flush against the last line of body text.
- The big case-card stat (e.g. "18% to 24%", "5 days", "47% reduction") is NAVY #26245C. It is NOT terracotta. (This is unchanged from the original cards; the terracotta "stat numbers" rule in the Accent colour section refers to the PROOF STRIP stat-num, a different element, not the Our Work case stat.)
- PROBLEM / APPROACH / OUTCOMES sub-labels take the card's PILLAR colour, NOT terracotta (locked 2026-06-01). Teal on SOLVE, green on EVOLVE, navy on FRAME/PLAN, etc. On the home page each card's sub-labels use that case's pillar colour, matching its badge. Reason: terracotta was doing too many jobs in one card and the sub-labels blurred into the link. In the Our Work card, terracotta is reserved for the section eyebrow, the sector label, and the "View our work" action link only. Pillar colour carries structural/identity meaning; terracotta carries accent/action meaning; navy carries the headline stat. Keep the three roles distinct.
- The SOLVE government card's current "3" stat is non-compliant and must become a real before/after metric under this rule.

**Case study stats must be operational improvement metrics.** The big number in a case card must show something the client improved: a percentage reduction, a time-to-outcome, a count of failures eliminated, or a "from X to Y" delta. Not a count of inputs ("3 views") or an abbreviated time period ("1 wk", "6 wks"). No shorthand abbreviations in stats. Spell out "weeks", "months", "days".

**The stat number stands alone. The case-outcome headline must not repeat it.** If the stat is "47%", the outcome cannot start with "47%" or say "reduced by 47%". If the stat is "5 days", the outcome cannot say "achieved in five days". The number makes the claim. The outcome explains what changed. They are two separate statements. Rephrase the outcome to name the result without restating the figure.

**Case study cards follow Problem / Approach / Outcomes structure.** Each card has three layers of depth: (1) case-outcome: the headline result in 1-2 sentences, stat already covered; (2) case-situation: the problem - who, what challenge, what was at stake, why previous attempts failed or why action was needed. 3-4 sentences, specific. Not bullet points; (3) case-result: the approach and outcome - what was done step by step, specific methods, what happened. 4-5 sentences. Should read like a practitioner describing real work, not a consultant summarising a case. SCALE page cards are the reference standard for this level of specificity.

---

## Open issues (as of 2026-06-01 session 5)

Resolved in session 3:
- Left border quote-block styling: DONE (case-result border-left removed all pages)
- Numbered labels (01/02/03) in why-equibt and examine sections: DONE (CSS hidden all pages)
- FRAME, SOLVE, EVOLVE at 3 deliverables: DONE (4th deliverable added, headings updated)
- EVOLVE examine heading said "Two phases": DONE (now "Three disciplines. Pilot. Specify. Manage.")
- Case stat abbreviations (wk, mo, BUs): DONE (spelled out or replaced with proper metrics)

Resolved in session 4:
- Stat repetition in case-outcome headlines: DONE (all 6 pages, all cards)
- Case study copy expanded to Problem/Approach/Outcomes format: DONE (PLAN cards significantly expanded; all pages at SCALE-level detail)
- Hard rules added: stat standalone rule + PAO structure rule

Resolved in session 5 (this version, v5x):
- Nav unification: RESOLVED. HARD RULE 1 settles it and the v5x service pages already use the light Home nav; the navy `.ref-nav` is retired. No outstanding build action.
- Document drift: RESOLVED. v3 existed as two out-of-sync copies (Repo 2026-06-01 vs Docs 2026-05-31). v5x is the single canonical copy in the Repo; the Docs copy is replaced with a pointer.
- Type scale, hero/footer colour, warm parchment, wash hex sprawl, LMI domain: RESOLVED inline (see Typography, HARD RULES, rules 8/13).

Still open:
1. Pillar colour at page level: now carried on the pill, the badge, and the Our Work PAO sub-labels. A pillar-colour eyebrow was tested on EVOLVE 2026-06-01 and REJECTED (eyebrows stay terracotta site-wide). A page-level hero tint was not pursued. Treat as closed unless Herman revisits.
2. Service page hero body text length: the "Michael..." persona paragraphs are long for the 2-col layout. May need trimming on desktop view.

v5x build status (2026-06-01): Home, FRAME, PLAN, SOLVE, EVOLVE built. GOVERN and SCALE not yet built (they inherit every locked rule). Live merge tracked in Linear EQT-200/201/202 (merged), EQT-203/204/205 (EVOLVE stack, in review), EQT-206 (proof-box rollout to FRAME/PLAN/SOLVE).

---

## Pillar illustration vertex sets (locked)

Each service page uses a unique vertex configuration with the same 18-face topology. Copy these for any future re-render or Squarespace implementation. (The sixth key is labelled SCALE, matching the locked pillar name; older files used the key "OPER".)

```
FRAME:  T(220,58)  TL(105,108) TR(335,108) IC(220,132) IL(148,162) IR(292,162)
        OL(32,190) OR(408,190) GC(220,190) PL(148,218) PR(292,218) BL(92,268)  BR(348,268) B(220,328)

PLAN:   T(220,28)  TL(145,100) TR(295,100) IC(220,118) IL(168,150) IR(272,150)
        OL(65,188) OR(375,188) GC(220,188) PL(168,226) PR(272,226) BL(118,268) BR(322,268) B(220,358)

SOLVE:  T(205,38)  TL(112,112) TR(318,112) IC(210,135) IL(148,165) IR(290,165)
        OL(38,195) OR(402,195) GC(215,195) PL(145,255) PR(298,255) BL(78,280)  BR(355,275) B(208,355)

EVOLVE: T(220,18)  TL(125,95)  TR(315,95)  IC(220,110) IL(158,148) IR(282,148)
        OL(48,192) OR(392,192) GC(220,192) PL(162,248) PR(278,248) BL(105,272) BR(335,272) B(220,348)

GOVERN: T(220,45)  TL(108,95)  TR(332,95)  IC(220,118) IL(152,155) IR(288,155)
        OL(45,192) OR(395,192) GC(220,192) PL(152,245) PR(288,245) BL(98,285)  BR(342,285) B(220,345)

SCALE:  T(220,38)  TL(118,98)  TR(322,98)  IC(220,125) IL(155,158) IR(285,158)
        OL(42,192) OR(398,192) GC(220,192) PL(155,228) PR(285,228) BL(105,278) BR(335,278) B(220,355)
```

Face topology (applies to all 6):
Crown: T-TL-IC, T-IC-TR, TL-OL-IL, TL-IL-IC, TR-IC-IR, TR-IR-OR, OL-GC-IL, IL-GC-IR, IR-GC-OR, IC-IL-IR
Pavilion: OL-PL-GC, GC-PL-PR, GC-PR-OR, OL-BL-PL, PL-BL-B, PL-B-PR, PR-B-BR, PR-BR-OR

---

## Session history

- Pre-v3 sessions: established brand colours, pillar structure, section order, service page template, social proof approach, evidence section layout
- DESIGN_LEARNINGS_v2 (prior): captured detailed CSS rules for nav, hero, service page anatomy, card styles, known bugs across all prototype files
- 2026-05-26 session 1: low-poly illustration direction locked, typography scale locked, method section redesigned to 3x2 pillar card grid, statement reverted to single-column, proof strip legibility fixed
- 2026-05-26 session 2: all 6 service pages patched to v4. Footer added, mobile nav added, hero converted to 2-col, low-poly gem illustrations added per pillar, examine-card margins fixed, DMAICO SVG hidden on mobile, FRAME deliverable grid fixed to 3-col
- 2026-05-26 session 3: case-result border-left removed (all pages), case stat abbreviations fixed, numbered labels (01/02/03) hidden via CSS (all sections, all pages), 4th deliverable added to FRAME/SOLVE/EVOLVE, EVOLVE examine heading corrected, hard rules section added to this doc
- 2026-05-30: HARD RULES added (light hero/menu, dark accents lower), v5x review addendum locked (pure white hero/footer, cool-wash highlight, restrained type scale, 4 equal industry cards, LMI handover on Home)
- 2026-05-31: LOCKED SERVICE NAMES table added; FRAME v5x template locked; LMI single-placement rule locked
- 2026-06-01 session 5: train station logic corrected (only current + next coloured; past steps dimmed same as future); current pill 15% larger with 16.1px font; examine cards changed from white to navy-wash (#E8ECF5) for contrast; context card badges must match trainline pill state. Applied to FRAME and PLAN v5x. Rule for remaining 4 pillars: apply same logic when building SOLVE, EVOLVE, GOVERN, SCALE.
- 2026-06-01 Our Work unification: home "Our Work" (from-X-to-Y stat, short outcome) and service-page case sections were structurally different. Locked one pattern across all pages: left-rail X-to-Y improvement stat + sector + badge, right-column headline + full Problem/Approach/Outcomes, consistent "View our work" link. Unified heading locked "OUR WORK / Recent engagements." (2026-06-01). SOLVE "3" stat to be replaced with a real before/after metric. Spans home + all service pages, bigger than EQT-200.
- 2026-06-01 footer scope fix (EQT-204): the "copyright line ONLY" footer wording was a misread of "no LMI line" and caused PLAN/SOLVE/EVOLVE to ship a bare copyright bar (looked footerless). Corrected: every page carries the FULL FRAME footer (brand + tagline + Services/Company/Connect columns + copyright bar), no LMI line. FRAME and Home already correct; PLAN, SOLVE, EVOLVE to be fixed.
- 2026-06-01 wash tokens (EQT-202 era): reversed the earlier "collapse to single #E8ECF5" call to match the build. Two tokens stand: navy-wash #E8ECF5 for tinted section backgrounds, highlight-wash #E8ECF8 for highlight callout blocks. Also locked the highlight callout left full-bleed (EQT-202).
- 2026-06-01 context-card fix: pinned WHICH two cards the "Where it leads" section shows. Earlier builds (PLAN, SOLVE) showed the pillar before + the pillar after; correct rule is current + immediately-next, mirroring the two coloured pills. Both badges coloured; current card is "you are here" (no self-link). Applies retro to PLAN and SOLVE and forward to EVOLVE/GOVERN/SCALE. See FRAME TEMPLATE SPEC section 8.
- 2026-06-01 v5x: reconciliation pass, named v5x to match the v5x prototype series and end version-reference confusion. Removed self-contradictions carried in v3: "Home page hero IS navy" (reversed by HARD RULE 1), warm-parchment section background and dead hex values (#F5EBD9/#F8F1E5/#EEF0F8 retired; see 2026-06-01 wash note below for the navy-wash #E8ECF5 vs highlight-wash #E8ECF8 split), conflicting type scale (locked H1 52/600, H2 36-40/500, body 18/1.6), LMI domain (leanmethods.com.au -> leanmethodsinstitute.com), navy `.ref-nav` open issue (resolved to light nav, already done in v5x pages), stale section-order block (rebuilt around FRAME v5x template). Collapsed two divergent canonical copies into one.
- 2026-06-01 examine-section + type-scale consistency (EQT-212, Herman): drifts fixed across the six service pages, all aligned to the FRAME/PLAN reference. (a) Background: the "what we do" section is WHITE #FFFFFF (or off-white) with navy-wash #E8ECF5 cards. GOVERN and SCALE had drifted to a navy-wash SECTION with navy-wash cards (flat, no contrast) and are corrected to white. (b) Eyebrow label: standardised to "WHAT WE DO" on all six (FRAME was already correct; PLAN/SOLVE/EVOLVE/GOVERN/SCALE were "WHAT WE EXAMINE", which mis-describes build/deploy pillars). (c) Type scale: H1 clamp(52px,4.15vw,56px)/600/1.08 and H2 clamp(36-40px)/700/1.06 per FRAME/PLAN; SOLVE/EVOLVE/GOVERN/SCALE H1 was fixed 52px/1.06, and EVOLVE/GOVERN/SCALE H2 was weight 500: corrected. Headings still vary per pillar. FRAME and PLAN need no change.
- 2026-06-01 CTA panel content redesign (EQT-214, Herman): locked the CTA content standard (see FRAME TEMPLATE SPEC rule 9). Three changes across all seven v5x pages. (1) Button label unified to "Get in touch" on nav, hero and panel, replacing "Book a discovery call" (panel) and "Let's talk" (nav + hero). Reason: EQUIBT is referral-driven advisory, not a call-booking funnel; "Get in touch" is the corporate/gov-safe action a referred senior buyer takes. (2) "Typical investment" price card removed site-wide (no public dollar ranges); on SOLVE/EVOLVE/GOVERN it is replaced so the strip stays three cards: Typical timeline | How we work ("Embedded with your team") | What you leave with (tangible per-pillar outcome). SCALE went two cards to three. Home/FRAME/PLAN keep no cards. (3) Formulaic body copy ("fifteen-minute conversation will scope X. No obligation.") rewritten stage-specific, firm "we" voice, NO named individual (one-man-band = procurement risk). Copy + ready HTML blocks in EQUIBT_CTA_REDESIGN_OUTPUT_v1.md; Codex prompt in EQUIBT_CTA_REDESIGN_CODEX_PROMPT.md.
- 2026-06-01 CTA refinement (EQT-214 follow-up, Herman): three changes folded into the same PR before merge. (1) Strip extended to ALL SIX service pages: FRAME and PLAN now carry it too (they previously had none), so the service range is consistent; Home stays card-less. Porting required copying the `.cta-meta*` base CSS + mobile override into FRAME/PLAN, which lacked it. (2) Timelines reframed to anchor low (drop scary wide ranges/months): FRAME "From 1 day", PLAN "From 2 weeks", SOLVE/EVOLVE/GOVERN/SCALE "From 4 weeks" (SOLVE was "6 to 12 weeks", SCALE was "3 to 12 months"). (3) "What you leave with" values made tangible artefacts: SOLVE "A costed design and business case", EVOLVE "Pilot evidence and a go/no-go call", GOVERN "Control plans and live dashboards", SCALE "Standard work your team owns", FRAME "An agreed problem and project charter", PLAN "A prioritised improvement roadmap". Card layout rearrange (feature the outcome card) deferred to its own design-led issue.
- 2026-06-01 SCALE terminal-pillar / cycle loop (EQT-211, Herman): SCALE is the LAST pillar, but the "Where it leads" section does NOT dead-end and does NOT fall back to a generic services-overview CTA. It shows the iterative-improvement loop (build, test, learn, repeat): the DMAICO cycle returns to FRAME and begins again. Train station: SCALE current (plum #5C0A5C, enlarged, YOU ARE HERE) + FRAME re-activated to its pillar colour #8B2252, with a curved RETURN arrow from SCALE back to FRAME and a subtle loop marker; PLAN/SOLVE/EVOLVE/GOVERN dimmed. FRAME is the existing first pill re-lit, NOT a seventh station. Context cards mirror the two coloured pills: SCALE current (non-link, no label) + FRAME next (`frame` badge, "Problem Framing.", cycle-restart body, link to /services/frame/). This refines the "current + immediately-next" context-card rule for the final pillar: "next" wraps around to the first pillar. Locked into SESSION_BRIEF_EQUIBT_SCALE_V5X.md.
- 2026-06-02 CTA equation strip (EQT-215, Herman): all six service pages now render the CTA meta strip as Typical timeline + How we work = What you get, with quiet `.cta-eq-op` operators and a four-deliverable name stack matching each page's What you receive section. Home remains card-less.
- 2026-06-02 CTA operator emphasis (EQT-216, Herman): overrides the earlier quiet-operator direction. CTA equation operators are now prominent: 48px, weight 700, vertically aligned between the cards on desktop and mobile.
```
