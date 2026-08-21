---
title: "How far does a wrong AI output travel before something stops it?"
pillar: "PLAN"
phase: "Measure"
summary: "AI proposed the matches. An accountant checked every one. That is a safeguard right up until volume arrives."
readTime: "5 min read"
order: 31
publishedDate: 2026-08-21
lede:
  - "A finance team had automated bank transaction matching. The tool was good, and two thousand transactions a month ran through it. The obvious safeguard was already in place: an accountant approved every proposed match before it posted."
  - "Its financial controller asked a sharper question: what stops a wrong match when the accountant misses one? Checking every transaction works, right up to the point where it becomes the constraint the automation was bought to remove."
aeo: "Every automated workflow has a point where a wrong output stops. Most teams have never identified theirs, because the answer is usually a person, and a person does not appear in a process map. Find that point and you know what the workflow depends on. If the answer is someone checking, the automation has moved the work rather than removed it."
tldr:
  - "Most AI safeguards are a person checking the output. That is the weakest of six available options and the only one whose cost rises with every transaction."
  - "Six levels can stop wrong output: signal, check, apply, limit, exchange and design. They are not equally strong."
  - "The first two spend attention on every output. The last four spend it once, on the design of the work."
  - "A safeguard that catches an error sometimes is not a safeguard. The question is whether it stops the error reliably."
  - "Tracing one wrong output through a workflow shows which level a process actually depends on, usually inside an hour."
tryThis:
  heading: "Trace one wrong output through a workflow and mark where it reliably stops."
  body: "Choose the last task your team automated. Take one output you know was wrong, or invent a plausible one, and walk it forward through the process step by step. At each step, ask what would have caught it. Mark the first point where it reliably stops, meaning it stops every time and not only when someone is paying attention. That point is the safeguard your process depends on. If there is no such point, the gap is the finding. If the answer is a person reviewing, your attention is still being spent on every transaction and the automation has changed where the work happens rather than how much of it there is."
related:
  label: "Related service"
  title: "This thinking sits inside our Operations Diagnostic."
  href: "/services/plan/"
closingLine: "If your process relies on signal or check, your attention is still spent on every transaction."
cta:
  heading: "Show us the last thing you automated."
  body: "We will trace one wrong output through it and show you where it stops, or where it does not."
draft: false
---

## What we did, and what we found.

We mapped the six ways a workflow can stop wrong output, then walked bank transaction matching through each one.

**Signal.** Signal that output needs verifying. The wrong match travels unless someone notices it, and the signal can be ignored.

**Check.** Check every output before it is used. The wrong match stops if the approver rejects it, and the approver can still miss it.

**Apply.** Apply rules that output must pass. The wrong match stops when it breaks a rule, and a wrong match that breaks no rule still passes.

**Limit.** Limit AI's authority to preparation only. The output cannot travel beyond preparation, and someone can grant the permission back.

**Exchange.** Exchange AI judgement for a fixed method. There is no matching decision to get wrong, and it requires each payment to carry a unique identifier.

**Design.** Design the unnecessary work out. There is no separate matching task, and it requires payment and invoice closure to happen in one flow.

The initials spell SCALED, which is how the team remembered it a week later.

Applied to that process, statement lines matched to open receivables, the six read like this. At Signal, the tool shows a confidence score beside each proposed match. At Check, AI proposes the matches and an accountant approves them before posting. At Apply, the ledger rejects matches that fail account, amount, date or tolerance rules. At Limit, AI prepares the batch but its account holds no posting permission. At Exchange, each customer pays through a unique virtual account number. At Design, payment closes the invoice and records settlement, so no matching task exists.

The workflow stopped at Check. Everything the tool produced was read by a person before it posted, and nothing else in the process would have caught a wrong match. Two thousand transactions a month, every one of them read by an accountant.

## The pattern to avoid.

**Treating a person checking the output as a safeguard. Attention does not scale with volume.**

A person reviewing output feels like a safeguard because it usually works. The reviewer is competent, they catch things, and the errors that get through are rare enough to look like bad luck rather than a design problem.

The trouble is what happens to the cost. Every additional transaction adds review time. Automation that doubles throughput doubles the reviewing. The team gets faster at the task and slower at everything else, and nobody can point to the moment it went wrong, because no single transaction was unreasonable to check.

The levels below Check behave differently. A validation rule costs the same whether it runs a hundred times or a hundred thousand. A permission boundary is set once. A unique identifier removes the judgement entirely. The work moves out of the transaction and into the design, and the design is paid for once.
