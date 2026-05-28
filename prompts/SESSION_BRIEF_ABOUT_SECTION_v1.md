# Session Brief: About Section — Three Pages
**Files to create:**
- `prototypes/equibt_about_prototype_v1.html`
- `prototypes/equibt_why_equibt_prototype_v1.html`
- `prototypes/equibt_how_we_work_prototype_v1.html`

**URLs:** `/about/` | `/why-equibt/` | `/how-we-work/`
**Date:** 2026-05-25
**Status:** Ready for build

---

## What these pages do

**About EQUIBT** answers who they are and why they exist. It is not a brochure. It is the brand story told without sentimentality — founding context, what EQUIBT believes, and who is behind the work.

**Why EQUIBT** is the sceptic's page. The target reader (Michael, Operations or Transformation Director) has been burned by consultants before. He needs to understand what makes EQUIBT different — not in marketing language, but in concrete terms — before he picks up the phone. This page does that work.

**How We Work** answers what an engagement actually looks like. Michael needs to know what he is committing to before he calls. This page covers the engagement model, what each DMAICO phase delivers, what the client is responsible for, and EQUIBT's AI-ready approach.

Together these three pages are the primary pre-call trust stack.

---

## Design system — match exactly

Use the same design system as all other EQUIBT prototypes. Do not deviate.

- **Font stack:** `system-ui, -apple-system, sans-serif` — no Google Fonts, no external imports
- **Primary nav:** sticky, navy `#26245C` background, same 6-link nav (FRAME, PLAN, SOLVE, EVOLVE, GOVERN, OPERATIONALISE + Let's talk CTA). No active state on nav for these pages.
- **CSS custom properties:** copy the `:root` block from `equibt_plan_prototype_v2.html` exactly
- **Self-contained:** all CSS inline in `<style>` block, no external stylesheets

**Colour tokens:**
```
--navy: #26245C
--terracotta: #C15F3C
--body-text: #2D2D2D
--off-white: #F9F7F4
--warm-parchment: #F5EBD9
--section-bg: #F5F5F5
--dark-slate: #1A1A1A
```

**Warm parchment rule:** use only on "Why EQUIBT?" panels and contextual "why" sections. Nowhere else.

---

## Files to read before building

1. `prototypes/equibt_plan_prototype_v2.html` — copy the full CSS `:root` block and layout patterns exactly
2. `prototypes/equibt_home_prototype_v2.html` — reference the case card CSS and CTA panel style

Do not start from scratch. Extract the CSS from these files and build on it.

---

---

# PAGE 1: About EQUIBT
**File:** `prototypes/equibt_about_prototype_v1.html`

## Section backgrounds

- Hero: white `#ffffff`
- Origin: warm parchment `#F5EBD9`
- What we believe: white `#ffffff`
- Our People: off-white `#F9F7F4`
- Track record: `#F5F5F5`
- CTA panel: `#1A1A1A`

---

### Section 1 — Hero (white)

**Section label (ALL CAPS, 11px, Montserrat Bold):** ABOUT EQUIBT

**H1 (Montserrat, 52px):**
Operational improvement that holds.

**Subhead (Inter, 20px):**
EQUIBT is an operational improvement advisory. We work with complex service organisations across ANZ to build the capability, systems, and governance that make improvement stick.

**Body (Inter, 14px):**
Most improvement programmes produce results. Fewer produce results that last. The difference is not methodology — it is whether the organisation has the capability, governance, and systems to maintain what was built after the engagement closes. That is the problem EQUIBT was created to solve.

**No CTA in hero.**

---

### Section 2 — Why we exist (warm parchment)

**Section label:** WHY WE EXIST

**H2 (Montserrat, 36px):**
The number one failure mode of operational improvement is not bad methodology. It is abandonment.

**Left column (60%, Inter, 16px):**
Most improvement programmes follow the same arc. A consulting firm arrives, runs a diagnostic, identifies problems, designs solutions, runs a pilot. Results look good. The firm leaves. Twelve months later, the operation has drifted back to where it was. Sometimes further back, because the improvement programme disrupted existing stability without building what replaces it.

This is not a methodology problem. DMAIC is a rigorous framework. Lean is a rigorous framework. The problem is that neither was designed with exit in mind.

EQUIBT was built around a different model. DMAICO — Define, Measure, Analyse, Improve, Control, Operate — adds the phase that DMAIC never had. Operate makes sustainment someone's job, not everyone's assumption. Every engagement is designed from the outset to end with the organisation running the improved process independently, without us in the room.

**Right column (40%) — three proof statements (icon + bold header + body, same card style as service pages):**

1. **Sustainment, not just delivery.** Every EQUIBT engagement is scoped with an exit plan. The exit criteria are defined before the engagement begins. We do not move to the next phase until the current one is embedded.

2. **Capability at the centre.** We measure success by what the client team can do when we leave, not by what we delivered while we were there. Capability transfer is not an add-on. It is the point.

3. **Governance that runs itself.** Process architecture, control plans, dashboards, and escalation protocols are not post-engagement paperwork. They are the mechanism that keeps improvement alive.

---

### Section 3 — What we believe (white)

**Section label:** WHAT WE BELIEVE

**H2 (Montserrat, 36px):**
Four things we will not negotiate on.

**Layout:** 2x2 grid of belief cards. Each card has a terracotta left border, bold heading, and two to three sentences. No icons needed here — content carries it.

**Card 1:**
Heading: Measurement before intervention.
Body: We do not accept anecdotal accounts of where the problem is. We measure it. Every engagement begins with a quantified baseline. Opinion without data is not a starting point. It is a bias.

**Card 2:**
Heading: Root cause before solution.
Body: Addressing symptoms is not improvement. It is maintenance. We do not design solutions until we have isolated the cause. A well-designed solution for the wrong problem wastes time, budget, and goodwill.

**Card 3:**
Heading: Context shapes method.
Body: DMAICO does not change by sector. How we apply it does. The questions we ask in financial services are different from the questions we ask in government. Benchmarks that mean something in manufacturing are different from benchmarks that mean something in utilities. Generic application is not rigour.

**Card 4:**
Heading: AI-ready, not AI-naive.
Body: AI is not a replacement for operational rigour. It is an accelerant — when the process is stable, the governance is in place, and the team understands what the model is doing. We help organisations get there. We do not sell automation into unstable operations.

---

### Section 4 — Our People (off-white `#F9F7F4`)

**Section label:** OUR PEOPLE

**H2 (Montserrat, 36px):**
The work is done by people who have done this before.

**Layout:** Single featured profile card (Herman), then a short team note below.

**Herman's card:**
Name: Herman Chan
Title: Founder and Principal Advisor
Body: Herman is a Master Black Belt in Lean Six Sigma with over twenty years of operational improvement experience across ANZ corporate and government. He trained at GE, holds a business degree from AGSM, and is the creator of DMAICO — an extension of DMAIC designed for AI-assisted operations. He leads every EQUIBT engagement personally. Clients do not work with a team that has been briefed on their situation. They work with the person who built the methodology.

Current focus: operational improvement in financial services, government, utilities, and advanced manufacturing. AI governance frameworks for regulated operations.

**Team note below the card (Inter, 14px, body-text):**
EQUIBT engagements are led by Herman and supported by a network of specialist advisors. We do not deploy junior consultants as primary delivery. If you engage EQUIBT, you get the people you met in the discovery conversation.

---

### Section 5 — Track record (section-bg `#F5F5F5`)

**Section label:** TRACK RECORD

**H2 (Montserrat, 36px):**
Twenty years of engagements across ANZ.

**Layout:** Three-column strip. Each column is a category with a stat and a short line.

**Column 1:**
Stat: 20+
Label: Years of operational improvement practice

**Column 2:**
Stat: ANZ
Label: Corporate and government engagements across Australia and New Zealand

**Column 3:**
Stat: 6
Label: DMAICO phases, built for AI-era operations

**Below the strip — sector track record paragraph (Inter, 14px):**
EQUIBT has worked across financial services, government and public sector, utilities, and advanced manufacturing. Clients include large financial institutions, federal and state government agencies, energy and infrastructure operators, and precision manufacturers. All engagements are confidential. Proof is available through referenced outcomes and direct client conversations on request.

---

### Section 6 — CTA panel (dark-slate `#1A1A1A`)

**H2 (Montserrat, white):**
Ready to talk? So are we.

**Body (Inter, grey #999):**
A fifteen-minute conversation is enough to tell you whether EQUIBT is the right fit for your operation. No obligation.

**Detail box (border rgba(255,255,255,0.1)):**
- Engagement model: Advisory and capability transfer. Not staff augmentation.
- Typical engagement start: 2 to 3 weeks from first conversation
- Geography: Australia and New Zealand
- All engagements led by Herman Chan, Principal Advisor

**CTA button:** Let's talk

---

---

# PAGE 2: Why EQUIBT
**File:** `prototypes/equibt_why_equibt_prototype_v1.html`

## Section backgrounds

- Hero: white `#ffffff`
- What most firms do: warm parchment `#F5EBD9`
- How EQUIBT is different: white `#ffffff`
- What we refuse to do: off-white `#F9F7F4`
- CTA panel: `#1A1A1A`

---

### Section 1 — Hero (white)

**Section label:** WHY EQUIBT

**H1 (Montserrat, 52px):**
Most firms deliver. Fewer leave something behind.

**Subhead (Inter, 20px):**
EQUIBT was built around a specific thesis: improvement that depends on the consultant staying in the room is not improvement. It is management.

**Body (Inter, 14px):**
If you have worked with large consulting firms before, you may recognise the pattern. A rigorous diagnostic. A well-structured report. Recommendations that require another engagement to implement. Implementation that requires ongoing support to sustain. The engagement never really ends — it just changes shape.

EQUIBT is built differently. This page explains how.

**No CTA in hero.**

---

### Section 2 — What most firms do (warm parchment)

**Section label:** THE PATTERN MOST FIRMS FOLLOW

**H2 (Montserrat, 36px):**
The consulting dependency model has a cost most organisations do not price in.

**Body (Inter, 16px, single column, max-width 720px, centred):**
Most operational improvement engagements follow the same structure. The consulting firm is the expert. The client organisation is the recipient. Knowledge flows one way. Deliverables are produced by the firm and handed over. The client's job is to approve, implement, and — if they are lucky — sustain.

The problem is that this model optimises for the consulting firm's continuation, not the client's independence. When the firm leaves, the capability leaves with them. The organisation is left with a report, a process map, and no one who understands why the solution was designed the way it was.

Twelve months later, the improved process has drifted. The board asks what happened to the improvement programme. Nobody has a clear answer, because nobody owns it.

This is not a methodology failure. It is a delivery model failure. And it is entirely predictable from the structure of how most engagements are scoped.

---

### Section 3 — How EQUIBT is different (white)

**Section label:** HOW EQUIBT IS DIFFERENT

**H2 (Montserrat, 36px):**
Six differences. Each one structural, not rhetorical.

**Layout:** Vertical list of 6 differentiators. Each uses the "X, not X." bold heading format (same as "Why EQUIBT?" panels on service pages), followed by two to three sentences of explanation. Full width, generous spacing between items. Terracotta accent on the header (same colour as headings on service pages).

**Item 1:**
**Capability transfer, not consulting dependency.**
The test of a successful engagement is not what EQUIBT delivered. It is what the client team can do when we leave. We build the internal capability to run, maintain, and improve the process independently. That capability belongs to the organisation, not to us.

**Item 2:**
**Evidence-based, not assumption-driven.**
We do not accept anecdotal accounts of where the problem is. We measure it before we touch it. Every engagement begins with a quantified baseline. If you cannot tell us how big the problem is, we will measure it for you. Assumptions drive programmes in the wrong direction.

**Item 3:**
**Structured methodology, context-applied.**
DMAICO does not change by sector. How we apply it does. The questions we ask in a bank are different from the questions we ask in a government department. The benchmarks that matter in manufacturing are not the benchmarks that matter in utilities. Generic methodology applied without sector context is not rigour. It is speed.

**Item 4:**
**Sustained outcomes, not point-in-time results.**
Most improvement programmes report results at the point of implementation. EQUIBT is designed around what holds twelve months later. Govern (Control) and Operationalise (Operate) are not optional phases. They are where the work either sustains or fails. We do not exit an engagement until the governance and capability to sustain it are in place.

**Item 5:**
**AI-ready governance, not AI-avoidant caution.**
AI is being deployed into operations whether organisations are ready or not. EQUIBT helps clients identify the right automation opportunities within their existing corporate tooling — Microsoft Copilot, Google Gemini — and builds the governance infrastructure to ensure AI-assisted processes do not drift without detection. We work inside corporate constraints, not around them.

**Item 6:**
**Defined scope, not open-ended retainer.**
Every EQUIBT engagement has defined phases, defined deliverables, and a defined exit. We do not scope engagements that require us to stay in order to sustain. If a client wants ongoing advisory support after a project closes, we can provide that — but it is a separate conversation, not the default.

---

### Section 4 — What we refuse to do (off-white `#F9F7F4`)

**Section label:** WHAT YOU WILL NOT GET FROM EQUIBT

**H2 (Montserrat, 36px):**
Five things we do not do.

**Layout:** Clean unordered list, full width, generous line height. Each item is bold for the first phrase, then body weight for the explanation.

- **Recommendations without implementation infrastructure.** We do not deliver reports and leave. Every recommendation comes with the plan, the governance model, and the capability transfer required to act on it.

- **Junior consultants as primary delivery.** If you engage EQUIBT, the person who led your discovery conversation leads your engagement. The work is not handed to a team that was briefed on your situation after the sale.

- **Benchmarks that do not apply to your context.** We do not compare your operation against a generic industry average. We benchmark against best performers in your specific regulatory and operating environment.

- **Programmes scoped around our continuation.** An engagement that requires us to stay in the room to sustain is not a successful engagement. It is a dependency. We design for independence from the start.

- **AI sold into unstable operations.** Automation accelerates whatever process you already have. If the process is broken, automation makes it break faster and at scale. We do not recommend AI deployment until the process is stable and the governance is in place.

---

### Section 5 — CTA panel (dark-slate `#1A1A1A`)

**H2 (Montserrat, white):**
Still have questions? A conversation is faster than a proposal.

**Body (Inter, grey #999):**
If you want to understand whether EQUIBT is the right fit for your operation, fifteen minutes with Herman will tell you more than this page can.

**Detail box (border rgba(255,255,255,0.1)):**
- No obligation. No sales pitch.
- Typical response time: same business day
- Geography: Australia and New Zealand
- Engagement model: Advisory and capability transfer

**CTA button:** Let's talk

---

---

# PAGE 3: How We Work
**File:** `prototypes/equibt_how_we_work_prototype_v1.html`

## Section backgrounds

- Hero: white `#ffffff`
- Before you commit: warm parchment `#F5EBD9`
- Engagement model (DMAICO phases): white `#ffffff`
- Responsibilities: off-white `#F9F7F4`
- AI-ready approach: `#F5F5F5`
- Why EQUIBT? panel: warm parchment `#F5EBD9`
- CTA panel: `#1A1A1A`

---

### Section 1 — Hero (white)

**Section label:** HOW WE WORK

**H1 (Montserrat, 52px):**
An engagement with EQUIBT has a defined start, defined phases, and a defined exit.

**Subhead (Inter, 20px):**
Before you commit to anything, you will know exactly what you are committing to — what each phase covers, what we deliver, what you are responsible for, and what the exit looks like.

**Body (Inter, 14px):**
Most improvement programmes are scoped in broad terms and then defined in detail after the engagement begins. By the time the scope is clear, the budget is committed and the timeline is set. EQUIBT works differently. We define scope, deliverables, and exit criteria before the work begins. If the scope changes — and sometimes it does — we discuss it openly before acting on it. You do not discover the cost of scope changes at invoice time.

**No CTA in hero.**

---

### Section 2 — Before you commit (warm parchment)

**Section label:** BEFORE YOU COMMIT

**H2 (Montserrat, 36px):**
The discovery conversation is not a sales call. It is a scoping conversation.

**Left column (60%, Inter, 16px):**
Most consulting firms use discovery calls to sell. EQUIBT uses them to scope. There is a difference.

A sales call is designed to produce a proposal. A scoping conversation is designed to determine whether the engagement makes sense — for both sides. We will ask about the problem, the scale, the timeline, what has already been tried, and what success looks like. If the engagement is not the right fit, we will tell you. If it is, we will scope it clearly and give you a fixed price.

Discovery conversations are led by Herman. They typically run thirty to forty-five minutes. You will leave knowing whether EQUIBT can help, what the engagement would involve, and what it would cost.

**Right column (40%) — three items, same card style:**

1. **No proposal without a scoping conversation.** We do not send unsolicited proposals. We scope first, propose second. The proposal reflects a real conversation about your actual situation.

2. **Fixed price, defined scope.** EQUIBT engagements are priced on scope, not on hours. You know the cost before the engagement begins. Scope changes are discussed before they affect the price.

3. **No engagement that is not a fit.** If the problem is not one we can help with, we will tell you in the discovery conversation. We do not take on engagements we cannot deliver.

---

### Section 3 — Engagement model: DMAICO phases (white)

**Section label:** THE ENGAGEMENT MODEL

**H2 (Montserrat, 36px):**
Every engagement follows DMAICO. Not every engagement uses every phase.

**Intro paragraph (Inter, 16px, max-width 720px):**
DMAICO is Herman Chan's extension of DMAIC — Define, Measure, Analyse, Improve, Control, Operate. It adds the phase DMAIC never had: Operate, which makes sustainment a designed outcome rather than an assumption. Most EQUIBT engagements begin at FRAME or PLAN. Not every engagement runs to OPERATIONALISE. Where you start and how far you go is determined by your situation, not by a fixed package.

**Layout:** 6 vertical phase rows. Each row has: phase pill (terracotta background, white text, e.g. "FRAME | Define"), timeline estimate, a bold "what this phase covers" heading, a body paragraph, and a "what the client gets at exit" line in a slightly recessed style. Use the same pill style as the subway strip on service pages but stacked vertically here.

---

**Phase 1 — FRAME | Define**
Timeline: 1 to 2 days

What this phase covers:
Problem and objective definition using SPIN (Situation, Problem, Implication, Non-Negotiable Needs and Payoffs). Stakeholder alignment. Project charter. Success criteria definition. Scope lock.

What the client gets at exit: A clear, agreed definition of the actual problem — not the presenting problem — with aligned stakeholders and a locked project charter before any diagnostic begins. This document governs the rest of the engagement.

---

**Phase 2 — PLAN | Measure**
Timeline: 3 to 6 weeks

What this phase covers:
Operations diagnostic. Current state mapping. Data collection and baseline measurement. Voice of customer, process, and business. Performance gap quantification. Business analysis of the current state.

What the client gets at exit: An evidence-based picture of how the operation actually works, where the gaps are, and what the baseline performance looks like before any changes are made. The diagnostic is the foundation everything else is built on.

---

**Phase 3 — SOLVE | Analyse**
Timeline: 4 to 8 weeks

What this phase covers:
Root cause analysis. Business analysis of the future state. Process redesign and operational reengineering. Solution development. Cost-benefit analysis. Future state design.

What the client gets at exit: Identified root causes (not symptoms), a designed future state, and a costed solution ready for pilot validation. Business analysis deliverables specify what needs to change and why.

---

**Phase 4 — EVOLVE | Improve**
Timeline: 6 to 12 weeks

What this phase covers:
Rapid pilot in a controlled scope. Change management. Implementation planning and risk mitigation. Pilot results validation. Service design. Business and product requirements development.

What the client gets at exit: A validated future state — tested under real conditions, not modelled assumptions — with implementation plans, change management, and fully developed requirements ready for scale.

---

**Phase 5 — GOVERN | Control**
Timeline: 4 to 6 weeks

What this phase covers:
Process architecture. Control plans. Dashboards and performance monitoring. AI governance frameworks. Standard operating procedures. Escalation protocols.

What the client gets at exit: The governance infrastructure to sustain improvements — documented processes, control mechanisms, monitoring systems, and clear escalation paths. This is where improvements either hold or drift. We do not exit an engagement until this infrastructure is in place and owned internally.

---

**Phase 6 — OPERATIONALISE | Operate**
Timeline: Varies by scope

What this phase covers:
Standardisation across business units. Automation deployment within approved corporate tooling. Organisation-wide rollout. Training and capability transfer. Continuous improvement systems embedding.

What the client gets at exit: The improved operation running at scale, with automation deployed, teams trained, and continuous improvement systems embedded. This is the phase DMAIC never had. It makes ongoing governance someone's job, not everyone's assumption.

---

### Section 4 — Responsibilities (off-white `#F9F7F4`)

**Section label:** WHAT EACH SIDE IS RESPONSIBLE FOR

**H2 (Montserrat, 36px):**
This is a collaboration, not a handover.

**Layout:** Two-column table or split card. Left column: what EQUIBT is responsible for. Right column: what the client is responsible for. Each column has a heading and a clean list (no bullet styling — use spacing and dividers instead).

**EQUIBT is responsible for:**
- Defining the scope clearly before the engagement begins
- Measuring the current state with rigour before recommending any intervention
- Isolating root causes before designing solutions
- Running pilots under controlled conditions with defined go/no-go criteria
- Building governance infrastructure that runs without ongoing external support
- Transferring capability to the client team at every phase
- Raising scope changes before acting on them

**The client is responsible for:**
- Access to the people, data, and processes that need to be measured
- Senior sponsor visibility — someone with authority over the problem space
- Honest information about what has already been tried and why it did not work
- Timely decisions at key phase gates
- Allocating team time for capability transfer sessions
- Owning the governance infrastructure after the engagement closes

**Note below (Inter, 14px, body-text, max-width 720px):**
An EQUIBT engagement is not something that happens to your organisation. It is something your organisation participates in. The capability transfer only works if there are people on your side who are learning and building ownership throughout the engagement, not waiting for a handover at the end.

---

### Section 5 — AI-ready approach (section-bg `#F5F5F5`)

**Section label:** AI-READY OPERATIONS

**H2 (Montserrat, 36px):**
AI that fits inside your corporate constraints, not around them.

**Left column (60%, Inter, 16px):**
Most organisations in the sectors EQUIBT works in — financial services, government, utilities, manufacturing — operate inside a defined corporate technology stack. Microsoft Copilot for Microsoft 365 environments. Google Gemini for Workspace environments. These are not fringe tools. They are the tools your team is already licensed to use and already subject to your data governance policies.

EQUIBT identifies AI automation opportunities inside this existing stack. Not hypothetical automation that requires new vendor relationships, new data agreements, and new approval processes. Practical automation using the tools that are already approved, already deployed, and already familiar to your team.

When the process is stable, the governance is in place, and the right automation opportunity is identified, LMI — EQUIBT's specialist training division — trains your team on AI-augmented Lean methods. Your people learn to run the improved process using the tools they already have, at the capability level the improved process requires.

**Right column (40%) — three items:**

1. **Corporate stack, not fringe tools.** We identify automation opportunities inside Microsoft Copilot, Google Gemini, and other corporate-approved platforms. We do not recommend tools your IT governance function will block.

2. **Stable process first.** Automation accelerates whatever process you have. If the process is broken, automation makes it break faster. We do not recommend AI deployment until the process is stable and the governance is in place.

3. **Team capability, not tool dependency.** Your team learns to use the tools, not to depend on EQUIBT to operate them. When we leave, the capability stays.

**LMI cross-sell note (terracotta text, Inter, 14px, below the column):**
Training your team in AI-augmented Lean methods is delivered through Lean Methods Institute, EQUIBT's specialist training division. leanmethodsinstitute.com

---

### Section 6 — Why EQUIBT? panel (warm parchment `#F5EBD9`)

**Section label:** WHY EQUIBT?

**Layout:** Same as all other "Why EQUIBT?" panels — eyebrow label, three items with icons, "X, not X." bold header format.

**Item 1:**
**Defined scope, not open-ended retainer.**
Every phase has defined deliverables and exit criteria. You know what you are committing to before the engagement begins. We do not scope engagements designed to perpetuate themselves.

**Item 2:**
**Client capability at exit, not consultant dependency.**
The test of a successful engagement is what your team can do when we leave. We transfer capability at every phase. Governance and process ownership belong to your organisation before we close.

**Item 3:**
**Integrated AI, not AI as an afterthought.**
AI opportunity identification and governance are built into the DMAICO engagement model — not added as a separate workstream after the fact. We identify what is automatable, build the governance for it, and train your team to run it.

---

### Section 7 — CTA panel (dark-slate `#1A1A1A`)

**H2 (Montserrat, white):**
Seen enough? Let's scope it.

**Body (Inter, grey #999):**
A thirty-minute scoping conversation will tell you whether the engagement makes sense, what it would involve, and what it would cost. No proposal without a conversation. No commitment without a clear scope.

**Detail box (border rgba(255,255,255,0.1)):**
- Discovery conversation: 30 to 45 minutes with Herman Chan
- Typical engagement start: 2 to 3 weeks from scoping conversation
- Fixed-price engagements: scope and cost locked before work begins
- Geography: Australia and New Zealand

**CTA button:** Let's talk

---

## What to exclude — all three pages

- No stock photography or placeholder images
- No client names — all engagements are confidential
- No mention of CUBOROO, Emvisage, or AUSQ by name
- No emojis, no hashtag stacks, no motivational language
- No em dashes — use commas, colons, or restructure
- Australian English throughout: organisation, optimise, operationalise, programme, behaviour, practitioner

---

## Acceptance criteria — all three pages

- [ ] Reads correctly at 1280px and 375px (mobile responsive)
- [ ] All 6 nav links present, no active state
- [ ] All section backgrounds match the spec above
- [ ] "Why EQUIBT?" panel (where present) uses "X, not X." bold header format
- [ ] No external font or CSS imports
- [ ] Australian English throughout
- [ ] No em dashes anywhere
- [ ] CTA button reads "Let's talk" (About and Why EQUIBT pages) or "Let's talk" (How We Work)

---

*Brief v1 | EQUIBT About Section (3 pages) | 2026-05-25*
