# Session Brief: Industries Page Prototype
**File to create:** `prototypes/equibt_industries_prototype_v1.html`
**URL:** `/industries/`
**Date:** 2026-05-25
**Status:** Ready for build

---

## What this page does

The industries page is a conversion page for visitors who arrive asking "do they work in my sector?" It is not a brochure. It answers that question fast, shows sector-specific problems EQUIBT solves, and gives proof before pushing to a call.

Two entry paths: someone clicked "Explore" on a sector card from the home page, or they arrived directly from a search. In both cases they are in evaluation mode — comparing EQUIBT against other advisory firms.

**Primary conversion action:** Book a discovery call.
**Secondary:** Navigate to a specific service (PLAN, SOLVE, etc.) based on the problem described for their sector.

---

## Design system — match exactly

Use the same design system as all other EQUIBT prototypes. Do not deviate.

- **Font stack:** `system-ui, -apple-system, sans-serif` — no Google Fonts, no external imports
- **Primary nav:** sticky, navy `#26245C` background, same 6-link nav as all pages (FRAME, PLAN, SOLVE, EVOLVE, GOVERN, OPERATIONALISE + Let's talk CTA). No active state on nav for this page.
- **CSS custom properties:** copy the `:root` block from `equibt_plan_prototype_v2.html` exactly
- **Self-contained:** all CSS inline in `<style>` block, no external stylesheets

**Colour tokens (copy from plan v2):**
```
--navy: #26245C
--terracotta: #C15F3C
--body-text: #2D2D2D
--off-white: #F9F7F4
--warm-parchment: #F5EBD9
--section-bg: #F5F5F5
--dark-slate: #1A1A1A
```

**Section backgrounds follow the alternating pattern from other pages:**
- Hero: white `#ffffff`
- Why these sectors: warm parchment `#F5EBD9`
- Sector deep-dives: white `#ffffff`
- Case studies: `#F9F7F4`
- Related services: `#F5F5F5`
- CTA panel: `#1A1A1A`

---

## Page sections

### Section 1 — Hero (white background)

**Section label (ALL CAPS, 11px, Montserrat Bold):** INDUSTRIES

**H1 (Montserrat, 52px):**
High-complexity service operations are what we know.

**Subhead (Inter, 20px):**
EQUIBT works in sectors where operational precision is not optional. High process volumes, regulatory constraint, AI adoption pressure, and zero tolerance for sustained underperformance.

**Body (Inter, 14px):**
Most operational improvement programmes fail not because the methodology is wrong but because the firm applying it does not understand the sector. The regulatory environment, the political dynamics, the data constraints, the workforce profile — these shape which interventions work and which ones look right on paper but fail on implementation.

We do not apply generic frameworks to complex environments. We bring the DMAICO methodology and a track record in four sectors where complexity is structural, not exceptional.

**No CTA in hero.** Let the sector sections do the work.

---

### Section 2 — Why sector context matters (warm parchment `#F5EBD9`)

**Section label:** WHY SECTOR CONTEXT MATTERS

**H2 (Montserrat, 36px):**
The same problem looks different depending on where it lives.

**Left column (60%, Inter):**
A rework problem in a bank is shaped by regulatory documentation requirements, approval hierarchies, and the risk appetite of the compliance function. The same problem in a government department is shaped by ministerial accountability, public service enterprise agreements, and procurement constraints. The same problem in a manufacturer is shaped by shift patterns, machine uptime, and supplier variability.

Solving it the same way in all three is not rigour. It is ignorance.

EQUIBT's DMAICO methodology does not change by sector. The diagnostic tools, analytical methods, pilot structure, governance frameworks, and continuous improvement systems are the same. What changes is how we apply them — the questions we ask in the diagnostic, the benchmarks we use, the stakeholder dynamics we navigate, and the change management approach we take.

**Right column (40%) — three proof statements (use same card style as Why Start Here on service pages, with dark icon SVGs):**

1. **Regulatory environments require different governance.** Control plans and AI governance frameworks built for financial services have to account for APRA, AUSTRAC, and internal model risk. Government equivalents need to survive ministerial scrutiny. We build for the actual environment.

2. **Workforce profiles shape what sustains.** A Lean transformation in a unionised public sector environment requires different capability transfer than the same transformation in a private manufacturing operation. We design for what will hold.

3. **Benchmarks that mean something.** We do not benchmark your operation against a generic industry average. We benchmark against the best performers in your specific regulatory and operating context.

---

### Section 3 — Sector deep-dives (white background, 4 sector cards)

**Section label:** WHERE WE WORK

**H2 (Montserrat, 36px):**
Four sectors. Structural complexity in each.

**Layout:** 2x2 grid of expanded sector cards. Each card has a terracotta `#C15F3C` top bar (same as home page industry cards), sector heading, a short problem statement, a list of common DMAICO entry points for that sector, and a stat or proof point.

Use the same `.industry-card` styles as the home page but expand them — these cards are larger and have more content.

---

**Card 1 — Financial Services**

Heading: Financial Services

Problem statement: High transaction volumes, regulatory complexity, and the growing role of AI in credit decisions, fraud detection, and customer onboarding have made operational precision a compliance requirement, not just an efficiency goal. Rework compounds fast. Drift goes undetected until it is material.

Common entry points:
- Operations diagnostic (PLAN) for claims, lending, or onboarding processes where rework rate is above threshold
- Root cause analysis (SOLVE) for persistent error patterns that training programmes have failed to resolve
- AI governance framework (GOVERN) for AI-assisted decision processes that lack clear ownership or drift detection
- Standardisation and automation deployment (OPERATIONALISE) following a successful pilot

Proof point: "23% reduction in claims rework rate. 8-week pilot. EVOLVE and GOVERN engagement, financial services client, 2024."

---

**Card 2 — Government and Public Sector**

Heading: Government & Public Sector

Problem statement: Service delivery, budget constraint, and procedural rigour run simultaneously in an environment shaped by ministerial accountability, enterprise agreements, and procurement rules. Improvement programmes that work in private sector environments often stall here not because the methodology is wrong but because the change management was designed for a different operating context.

Common entry points:
- Operations diagnostic (PLAN) for service delivery processes with rising backlog or increasing complaint rates
- Future state design (SOLVE) for processes where incremental improvement has failed and structural redesign is needed
- Governance and control infrastructure (GOVERN) for processes where improvements have been made but do not hold
- Capability transfer (OPERATIONALISE) where the team needs to run the improved process independently, without ongoing external support

Proof point: "41% reduction in investigation cycle time. PLAN, SOLVE, and GOVERN engagement, state government client, 2025."

---

**Card 3 — Utilities**

Heading: Utilities

Problem statement: Uptime, safety, and compliance run simultaneously with no margin for variation. Regulatory review cycles create pressure to demonstrate sustained improvement, not just point-in-time results. AI-assisted monitoring and predictive maintenance are being deployed into operations that often lack the governance infrastructure to detect when the model is wrong.

Common entry points:
- Operations diagnostic (PLAN) for maintenance, inspection, or asset management processes where compliance gaps are emerging
- Root cause analysis (SOLVE) for recurring incidents or near-misses that corrective action plans have not resolved
- AI governance framework (GOVERN) for AI-assisted monitoring processes that require defined human override protocols
- Continuous improvement systems (OPERATIONALISE) to sustain performance between regulatory review periods

Proof point: "Sustained 18% improvement in first-time-fix rate, 14 months post-engagement. PLAN, SOLVE, and OPERATIONALISE engagement, energy sector client."

---

**Card 4 — Advanced Manufacturing**

Heading: Advanced Manufacturing

Problem statement: Precision, throughput, and quality control at scale leave no room for drift. Cycle time, defect rate, and yield sit in constant tension. AI-assisted quality inspection and predictive maintenance are raising the capability floor — and also creating new governance challenges when the model drifts without detection.

Common entry points:
- Operations diagnostic (PLAN) for production processes where defect rates or cycle times are trending in the wrong direction
- Future state and reengineering (SOLVE) where line redesign or process restructuring is needed to hit throughput targets
- Pilot validation (EVOLVE) before committing a full production line to a redesigned process
- Standardisation across shifts and sites (OPERATIONALISE) to ensure the improved process runs consistently under volume

Proof point: "14% cycle time reduction. 6-month PLAN and SOLVE engagement, precision manufacturer, ANZ operations."

---

### Section 4 — Case studies (off-white `#F9F7F4`)

**Section label:** HOW IT LOOKS IN PRACTICE

**H2 (Montserrat, 36px):**
Two engagements. Different sectors. Same rigour.

**Layout:** 2-column case study cards (same style as home page case cards).

**Case 1 — Financial Services**
Tag: Financial Services · PLAN and SOLVE
Heading: Persistent rework that three programmes had not resolved.
Body: A large financial services operation had a rework problem in its lending operations that three previous improvement programmes had failed to fix. Each programme had treated the symptom — additional training, updated checklists, system modifications — without isolating the root cause. We ran a PLAN diagnostic to establish the true baseline and map where the rework was actually originating. SOLVE identified the root cause: a missing decision right at a specific point in the approval process, combined with inconsistent training across teams. The fix was structural, not procedural. The rework rate fell 23% within eight weeks of implementation.
Metric: 23% rework reduction
Link: Read case study →

**Case 2 — Logistics**
Tag: Logistics · EVOLVE and GOVERN
Heading: Cutting order-to-delivery cycle time without adding headcount.
Body: A national logistics operator needed to reduce order-to-delivery cycle time under sustained volume growth. Adding headcount was not on the table. We designed the future state in SOLVE, ran a structured 8-week pilot through one business unit in EVOLVE with live metrics and a defined go/no-go decision, validated the results, and used GOVERN to build the control infrastructure before national rollout. The improved process is now running across four business units. Cycle time is down 31% against the pre-engagement baseline.
Metric: 31% cycle time reduction
Link: Read case study →

---

### Section 5 — Related services (section-bg `#F5F5F5`)

**Section label:** WHERE TO START

**H2 (Montserrat):**
Most engagements in complex sectors begin with PLAN.

**Body:**
If you know something is wrong but cannot pinpoint the source, an operations diagnostic is the right starting point. If you have a clear picture of the problem and need to design the solution, SOLVE is where to go. If you have a solution that is not holding, GOVERN builds the infrastructure that sustains it.

**2-column related service cards (same style as service pages):**

Card 1: PLAN | Measure — Operations Diagnostic
"See the full picture before you act. Evidence-based diagnostic that maps current state, establishes baselines, and identifies where to focus first."
Link: Learn about PLAN →

Card 2: SOLVE | Analyse — Root Cause Analysis and Solution Design
"Move from symptoms to causes. From causes to costed solutions. Structured analysis that transfers capability to your team."
Link: Learn about SOLVE →

---

### Section 6 — CTA panel (dark-slate `#1A1A1A`)

**H2 (Montserrat, white):**
Working in one of these sectors? Let's talk.

**Body (Inter, grey #999):**
A fifteen-minute conversation is enough to tell you whether EQUIBT is the right fit for your operation, and which service is the right starting point. No obligation.

**Detail box (same style as service page CTA boxes, border rgba(255,255,255,0.1)):**
- Typical engagement start: 2 to 3 weeks from first conversation
- Sectors served: Financial Services, Government, Utilities, Advanced Manufacturing
- Geography: Australia and New Zealand
- Engagement type: Advisory and capability transfer. Not staff augmentation.

**CTA button:** Book a discovery call

---

## What to exclude

- No stock photography or placeholder images — this page is text-driven
- No sector icons unless you can use simple inline SVGs (single-colour, line art style consistent with other pages)
- No client names
- No mention of CUBOROO, Emvisage, AUSQ
- No emojis, no hashtag stacks, no motivational language

---

## Acceptance criteria

- [ ] Reads correctly in browser at 1280px and 375px (mobile responsive)
- [ ] All 6 nav links present, no active state on this page
- [ ] 4 sector cards visible in 2x2 grid on desktop, stacked on mobile
- [ ] Both case study cards render with tag, heading, body, and metric
- [ ] CTA panel has detail box with 4 bullet items
- [ ] No external font or CSS imports
- [ ] Australian English throughout
- [ ] No em dashes anywhere

---

## Files to read before building

1. `prototypes/equibt_plan_prototype_v2.html` — copy the full CSS `:root` block and layout patterns exactly
2. `prototypes/equibt_home_prototype_v2.html` — reference the industry card CSS (`.industry-card`, `.industry-bar`) and case card CSS

Do not start from scratch. Extract the CSS from these files and build on it.

---

*Brief v1 | EQUIBT Industries Page | 2026-05-25*
