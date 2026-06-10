---
title: "Three redesigns. Cycle time never improved. The process was not the problem."
pillar: "PLAN"
phase: "Measure"
summary: "A state government agency redesigned their approvals process three times in four years. Cycle time never improved. The diagnostic found the process was sound. Sixty-two percent of applications arrived with incomplete or inconsistent data."
readTime: "4 min read"
order: 8
lede:
  - "A state government agency responsible for business licence approvals had redesigned their end-to-end process three times since 2022. Each time, the new process looked faster on paper. Each time, cycle time stayed between 28 and 34 days against a target of 15."
  - "The diagnostic mapped the process. Then it measured something the redesigns had not."
tldr:
  - "Three redesigns failed because the constraint was not the process itself."
  - "Data quality upstream determined cycle time downstream, not process design."
  - "Sixty-two percent of applications required manual correction before processing could begin."
  - "Diagnostics must trace the constraint, not assume it sits where delays appear."
  - "Fixing the intake data cut rework by more than any process change could."
aeo: "When a well-designed process consistently underperforms, the constraint is often not the process but the quality of data entering it. Diagnostics that measure inputs before process steps find the real bottleneck faster. A process that works on clean data does not need redesigning. It needs clean data."
tryThis:
  heading: "Measure the condition of work entering the process before redesigning the process itself."
  body: "Before any process improvement or redesign, sample 100 cases and classify them as clean (no rework required to process) or defective (requires correction before processing can begin). If defective cases exceed 30 percent, the highest-impact intervention is not process redesign. It is fixing the intake mechanism: validation rules, mandatory fields, real-time checks at submission. A process that works on clean data does not need redesigning. It needs clean data."
related:
  label: "Related service"
  title: "This thinking sits inside our Operations Diagnostic."
  href: "/services/plan/"
cta:
  heading: "Diagnose the constraint before redesigning the process."
  body: "We measure the condition of work entering the process before recommending any change. Most persistent underperformance has a cause upstream of where the delay appears."
draft: true
---

## What we did, and what we found.

A state government agency responsible for business licence approvals had redesigned their end-to-end process three times. Each redesign followed the same logic: map the current state, identify delays, streamline handoffs, reduce approval layers. Each time, the new process looked faster on paper. Each time, cycle time stayed between 28 and 34 days against a target of 15.

The operations director requested a diagnostic. The assumption going in was that the process design was still wrong. The diagnostic mapped the process but also measured something the redesigns had not: the condition of work entering the process. Of 1,400 applications sampled over 90 days, 62 percent required at least one correction before they could be assessed. The average correction cycle added 11 days. The process from the point of receiving a clean application to issuing a decision was already running at 13 days, within target.

The constraint was never in the process. It was in the data arriving at the process boundary.

## The pattern to avoid.

**Redesigning the process when the constraint is the quality of inputs arriving at it.**

The three previous redesigns had all focused on what happened after an application entered the system. They streamlined assessor allocation, reduced approval tiers, and digitised paper handoffs. All of those changes were sensible. None of them addressed the fact that most applications were incomplete on arrival. Assessors were spending the first third of their time on each case correcting data: chasing missing documents, reconciling inconsistent records, and verifying details that should have been validated at submission.

This is common in government and regulated sectors where intake forms are designed around compliance requirements rather than data quality requirements. The form captures what legislation says must be collected. It does not enforce completeness, consistency, or accuracy at the point of entry. The result is a process that works perfectly on clean data and grinds to a halt on everything else.
