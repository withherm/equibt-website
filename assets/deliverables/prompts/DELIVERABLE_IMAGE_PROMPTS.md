# EQUIBT Website — Deliverable Image Generation Prompts
**Owner:** Herman Chan
**Date:** 2026-05-24 (updated 2026-07-04: added 3 missing 4th-deliverable prompts, normalised SCALE filenames, switched to landscape/single-page/no-date/no-marble per Herman's test-render review)
**Model:** ChatGPT gpt-image-1 (or DALL-E 3)
**Output:** Save as JPG, landscape A4 proportions (297×210mm visible area)
**Target path:** `assets/deliverables/[PILLAR]/[FILENAME].jpg`

**2026-07-04 note:** Every pillar page actually has 4 deliverables in code, but this doc previously specced only 3 for FRAME and SOLVE, and used an inconsistent `OPS-` prefix for SCALE (folder is `assets/deliverables/SCALE/`, filenames should match). Fixed below. A first-pass set was generated for PLAN (4/4) and SOLVE (4, ad hoc, predates this doc's SOLVE-DEL-4) and sits unused in the vault at `Docs/EQUIBT/EQUIBT_Website/Lineart/SERVICE-PLAN/` and `SERVICE-SOLVE/`. Decision: regenerate the full set fresh (all 6 pillars, 24 images) rather than reuse those, using them only as a style/consistency reference so the whole set feels like one shoot, not two GPT sessions months apart.

---

## How to use these prompts

Each prompt below produces one photorealistic image of a single professional A4 consulting document page lying flat on a clean surface. Generate each image individually. Save with the filename shown above each prompt.

**Upload the EQUIBT logo as a reference image before every single generation:** `GOS/Branding/Logos/EQUIBT/EQ-LOGO-701_EQ-LOGO-FAV.svg`. Text instructions alone are not enough, gpt-image-1 will hallucinate a generic symbol without the uploaded reference every time.

**Consistent system prompt to prepend to every prompt:**

> Photorealistic product shot. A single sheet of A4 paper, landscape orientation, lying flat on a clean matte white or light neutral desktop surface — NOT marble, NOT stone, no veining or texture in the surface, a plain flat desk-like background only. Soft, even studio lighting with subtle shadows on the left and bottom edges. Only ONE page is visible, this is not a cover, not a booklet, not a stack, no second page peeking out from behind or beneath it. The document itself contains no dates anywhere, no date fields, no "date:" labels, no calendar references of any kind. Professional, minimal, premium look. No hands, no people, no desk clutter. Camera directly overhead, slight 5-degree tilt for depth. Shallow depth of field — document sharp, surface slightly soft. Include the uploaded EQUIBT logo exactly as provided, printed on the document itself in the lower right corner only, small and understated, approximately 1/20th of page height. Right and bottom margin from the page edge equal to the logo's own width. No other logo placement anywhere in the image.

Then append the specific prompt for each document below. Every per-document prompt below has been rewritten for a single landscape page — none should describe a cover, a second page, or a date field. If a regenerate reintroduces any of these, restate "single page, landscape, no date" explicitly in that generation.

---

## FRAME | Define

### FRAME-DEL-1-SPINREPORT.jpg
**Document:** SPIN Workshop Report

The document is a single landscape page. Title: "SPIN Workshop Report" in navy (#26245C), top left. Subtitle: "Situation | Problem | Implication | Need-Payoff". A horizontal colour bar in deep rose (#8B2252) runs below the title. Below that, on this same single page: a structured 2×2 analysis grid (Situation, Problem, Implication, Need-Payoff quadrants) with handwritten-style annotation marks and typed text blocks. Client name field shows "Confidential" in light grey. No date anywhere on the page.

### FRAME-DEL-2-CHARTER.jpg
**Document:** Project Charter

The document shows a project charter template, partially filled. Title: "Project Charter" in navy. Sections visible: Problem Statement (2-3 lines of text), Scope Boundary (bulleted list, 4 items), Success Criteria (numbered, 3 items), and a small signature block at the bottom. A deep rose (#8B2252) left-border accent stripe runs the full height. Typed in clean sans-serif. The content is specific and professional — not lorem ipsum. Use plausible operational improvement language.

### FRAME-DEL-3-CRITERIA.jpg
**Document:** Success Criteria Framework

The document shows a single-page framework template. Title: "Success Criteria Framework" in navy. Three columns visible: "Metric", "Current Baseline", "Target State". Four rows of data filled in with professional operational metrics (e.g., processing time, error rate, cycle time, customer satisfaction score). A footer row shows a sign-off name field only, no date. Deep rose (#8B2252) column header background. Clean table with thin borders.

### FRAME-DEL-4-RECORD.jpg
**Document:** SPIN Workshop Record

The document shows a facilitated workshop record. Title: "SPIN Workshop Record" in navy. Subtitle: "Situation | Problem | Implication | Need-Payoff". The page reads as meeting-record style: a chronological log down the left column with short timestamped entries (e.g., "09:40 — Directorate A hypothesis raised", "10:15 — Evidence tested against call data"), and a right column summarising the reasoning trail with 3-4 short numbered notes ending in the agreed problem statement. A small attendee list block in the bottom left (4-5 role titles, no real names). Deep rose (#8B2252) left accent stripe. Clean, factual, workshop-minutes aesthetic, not a polished report.

---

## PLAN | Measure

### PLAN-DEL-1-ASSESSMENT.jpg
**Document:** Current-State Assessment

The document shows a structured assessment report. Title: "Current-State Assessment" in navy (#26245C). Visible content: a value stream map sketch (hand-drawn style boxes and arrows on the right side of the page), a data table with process steps on the left listing times and defect rates, and a summary callout box labelled "Key Findings". Navy left accent stripe. Typed professional content — operational improvement context.

### PLAN-DEL-2-CAPGAP.jpg
**Document:** Capability Gap Analysis

The document shows a capability gap analysis. Title: "Capability Gap Analysis" in navy. A radar/spider chart visible at the top — 6 axes (e.g., Data Literacy, Process Knowledge, Change Readiness, Analytical Skills, Leadership Support, Tool Proficiency). Two overlapping data series: "Current State" (light fill) and "Required State" (navy dashed outline). Below the chart: a table with three columns — Capability, Gap, and Priority. Navy left accent stripe.

### PLAN-DEL-3-ROADMAP.jpg
**Document:** Prioritised Improvement Roadmap

The document shows a prioritised roadmap. Title: "Prioritised Improvement Roadmap" in navy. A 2×2 matrix visible: axes are "Impact" (y) and "Readiness" (x), with project initiative bubbles plotted in each quadrant. Below the matrix: a numbered list of top 5 priority initiatives with effort estimates and owners. Navy accent. Professional consulting aesthetic.

### PLAN-DEL-4-PATHWAY.jpg
**Document:** Engagement Pathway Recommendation

The document shows a one-page recommendation. Title: "Engagement Pathway Recommendation" in navy. A horizontal process flow shows 3-4 boxes (PLAN → SOLVE → EVOLVE → GOVERN) with the recommended starting point highlighted in navy. Below: two paragraphs of typed rationale text and a "Recommended next step" callout box. Navy left accent stripe.

---

## SOLVE | Analyse

### SOLVE-DEL-1-RCA.jpg
**Document:** Root Cause Analysis Report

The document shows a root cause analysis report. Title: "Root Cause Analysis Report" in navy (#26245C). A fishbone (Ishikawa) diagram fills the upper half of the page — horizontal spine pointing right to "Effect" box, 6 bones branching off with typed cause labels. Below the diagram: a 5-Why analysis table showing 3-4 rows of "Why" and "Answer" columns, ending in root cause identification. Deep teal (#0B6B82) accent stripe on the left.

### SOLVE-DEL-2-DESIGN.jpg
**Document:** Future State Design

The document shows a future state design. Title: "Future State Design" in navy. The page shows a clean process flow diagram: swim-lane format with 3 lanes (e.g., Operations Team, Technology System, Customer), boxes and arrows showing the redesigned process steps. Key changes highlighted with teal (#0B6B82) fill on improved steps. A callout box on the right: "Key Design Decisions" with 3 bullet points. Teal left accent stripe.

### SOLVE-DEL-3-CBA.jpg
**Document:** Cost-Benefit Analysis

The document shows a cost-benefit analysis. Title: "Cost-Benefit Analysis" in navy. A simple two-column table: "Costs" (left) and "Benefits" (right), with line items and dollar values. At the bottom: a summary row showing Net Benefit and Payback Period. A small bar chart below the table shows Year 1, Year 2, Year 3 net benefit bars — navy filled. Teal left accent stripe. Clean, precise, financial consulting aesthetic.

### SOLVE-DEL-4-READINESS.jpg
**Document:** Implementation Readiness Assessment

The document shows a readiness assessment. Title: "Implementation Readiness Assessment" in navy. A checklist-style table with columns: Readiness Area, Status (Ready / In Progress / Not Started), Owner. 6-7 rows covering typical pre-deployment areas (e.g., "Process documentation", "System access provisioned", "Team training scheduled", "Rollback plan defined"). Status column uses small coloured dot indicators (green/amber/grey). A summary readiness score box at the top right: "Overall Readiness: 78%". Deep teal (#0B6B82) left accent stripe.

---

## EVOLVE | Improve

### EVOLVE-DEL-1-PILOT.jpg
**Document:** Pilot Results Report

The document shows a pilot results report. Title: "Pilot Results Report" in navy (#26245C). Three metric callout boxes at the top (e.g., "Processing Time: -23%", "Error Rate: -41%", "Customer Satisfaction: +18pt") with up/down arrows in forest green (#2D7A3A). Below: a line chart showing the metric trend across the 6-week pilot period. Two lines: "Baseline" (grey dashed) and "Pilot" (green solid). A "Go/No-Go Recommendation" box at the bottom with a checkmark: "Proceed to full deployment." Forest green left accent stripe.

### EVOLVE-DEL-2-BRD.jpg
**Document:** Business Requirements Document

The document shows a business requirements document. Title: "Business Requirements Document" in navy. A structured table with columns: ID, Requirement, Priority (High/Medium/Low), Owner, Acceptance Criteria. 6-8 rows visible with typed requirements in professional operational language. A version control block at the top right: Version 1.0, Status: Final. Forest green left accent stripe.

### EVOLVE-DEL-3-IMPL.jpg
**Document:** Implementation and Change Management Plan

The document shows an implementation plan. Title: "Implementation and Change Management Plan" in navy. A Gantt-style chart fills the upper two-thirds: rows for project phases (Preparation, Training, Deployment, Stabilisation), columns for weeks (Week 1 through Week 12), with green-filled bars showing timing. Below the Gantt: a change impact section with a 3-column table (Stakeholder Group, Impact Level, Engagement Action). Forest green left accent stripe.

### EVOLVE-DEL-4-AUTHBRIEF.jpg
**Document:** Deployment Authorisation Brief

The document shows a one-page authorisation brief. Title: "Deployment Authorisation Brief" in navy. A clear recommendation statement at the top: "Recommendation: Proceed to full deployment" in bold. Below: a 3-row evidence summary table (Metric, Pilot Result, Target) with a tick indicator column. A sign-off block at the bottom with 3 approval lines (role titles, no real names), one marked "Approved", no date fields. Forest green (#2D7A3A) left accent stripe. Board-ready, decisive, minimal.

---

## GOVERN | Control

### GOVERN-DEL-1-ARCH.jpg
**Document:** Process Architecture Document

The document shows a process architecture document. Title: "Process Architecture Document" in navy (#26245C). A structured process flow diagram showing end-to-end process steps with decision diamonds, role swimlanes (3 lanes), and system integration points marked with cloud icons. Decision rights annotated at key nodes (e.g., "Operations Manager: Approve"). A RACI summary table at the bottom. Dark amber (#7A3D00) left accent stripe.

### GOVERN-DEL-2-CONTROL.jpg
**Document:** Control Plans

The document shows a control plan. Title: "Control Plans" in navy. A table format with columns: Process Step, Measure, Specification/Threshold, Measurement Frequency, Who Monitors, Response if Out-of-Control. 5-6 rows filled with typed operational control parameters. A red-threshold callout box at the top right: "Trigger threshold — escalate within 24 hours." Dark amber (#7A3D00) left accent stripe. Professional quality control document aesthetic.

### GOVERN-DEL-3-DASH.jpg
**Document:** Monitoring Dashboard Specification

The document shows a dashboard specification. Title: "Monitoring Dashboard Specification" in navy. A wireframe-style layout of a dashboard is sketched on the page: 4 KPI tiles at the top (labelled Process Speed, Error Rate, Backlog Volume, SLA Compliance), 2 trend charts below (line chart and bar chart placeholders), and a table section at the bottom. Annotations in pencil-style lines pointing to each element with labels like "updates daily", "drill-down enabled". Dark amber (#7A3D00) left accent stripe.

### GOVERN-DEL-4-AIFRAME.jpg
**Document:** AI Governance Framework

The document shows an AI governance framework. Title: "AI Governance Framework" in navy. A structured table: rows for each AI-assisted process in the operation, columns for Model Owner, Validation Method, Retraining Schedule, Drift Threshold, Human Override Trigger. 4 rows filled with plausible AI governance parameters. A small decision tree diagram below: "Output Review Required?" with Yes/No branches. Dark amber (#7A3D00) left accent stripe. Technical, precise, compliance-focused aesthetic.

---

## SCALE | Operate

### SCALE-DEL-1-PLAYBOOK.jpg
**Document:** Standardisation Playbook

The document is a single landscape page. Title: "Standardisation Playbook" in navy (#26245C). Subtitle: "Non-Negotiables and Adaptables — Full Organisation Deployment." A two-column table visible: "Non-Negotiable (must be consistent)" and "Adaptable (local variation permitted)". 4-5 rows of operational parameters listed. A small icon grid at the top right showing 4 business unit logos as grey placeholder squares. Deep plum (#5C0A5C) left accent stripe.

### SCALE-DEL-2-AUTO.jpg
**Document:** Automation Deployment Package

The document shows an automation deployment specification. Title: "Automation Deployment Package" in navy. A structured layout: a process flow diagram at the top showing where automation steps are inserted (highlighted in deep plum), with "Human checkpoint" markers at validation points. Below: a table listing Automation ID, Process Step, Tool/Technology, Governance Owner, Drift Detection Method. 4 rows filled. Deep plum (#5C0A5C) left accent stripe.

### SCALE-DEL-3-CAPABILITY.jpg
**Document:** Capability Transfer Programme

The document shows a capability transfer programme plan. Title: "Capability Transfer Programme" in navy. A schedule table: rows for each team/business unit, columns for Training Module, Delivery Method (Coaching / Shadowing / Practice), Week, and Sign-off. 5 rows visible. A "Independence Checklist" callout box on the right: 5 items with checkbox squares (2 checked). Deep plum (#5C0A5C) left accent stripe.

### SCALE-DEL-4-CI.jpg
**Document:** Continuous Improvement System

The document shows a continuous improvement system specification. Title: "Continuous Improvement System" in navy. A PDCA cycle diagram (Plan-Do-Check-Act) in the centre of the page — circular arrow diagram with 4 quadrants, each labelled with review cadence details. Around the diagram: 4 annotation boxes (Review Cadence: monthly, Improvement Log: shared drive, Escalation Protocol: defined, Owner: Operations Lead). Deep plum (#5C0A5C) left accent stripe. Clean, systematic, operational excellence aesthetic.

---

## Notes for image generation

- Landscape only, single page only, no marble/stone surface, no dates anywhere in the document (see system prompt). Regenerate if any of these four slip through, gpt-image-1 has a tendency to add a date field or a second page unprompted.
- Keep all text in images plausible but generic — no real client names, no EQUIBT client references.
- Document content should look like real consulting deliverables, not lorem ipsum.
- All accent colours match the pillar colour for that service page.
- Target output resolution: 1754×1240px (A4 landscape at 150dpi) or larger.
- File format: JPG, quality 90+.
- After generating, drop each file into the matching subfolder: `assets/deliverables/[PILLAR]/`
