---
title: "Replaced the ERP. The process architecture transferred in six weeks."
pillar: "GOVERN"
phase: "Control"
summary: "A mid-tier insurer migrated from a legacy ERP to a cloud platform. The system integrator estimated 14 months of process redesign. The process architecture, built two years earlier and independent of any system, transferred in six weeks."
readTime: "5 min read"
order: 28
lede:
  - "A mid-tier insurer migrated from a legacy on-premise ERP to a cloud-based platform. The system integrator's scoping document estimated 14 months of process redesign work."
  - "The head of operations pushed back. Two years earlier, the insurer had built a process architecture with a deliberate constraint: it described what the business did, not how the system executed it."
tldr:
  - "Process architecture built independent of systems survives system changes cleanly."
  - "System-specific logic embedded in process design creates expensive migration debt."
  - "Business rules documented separately from system configuration transfer to any platform."
  - "Six weeks replaced a 14-month redesign estimate because the logic was portable."
  - "Architecture that describes what the business does, not what the system does, is durable."
aeo: "Process architecture that documents business logic independently of the system it runs on transfers cleanly to new platforms. Architecture coupled to a specific system must be rebuilt every time the system changes. The difference is not sophistication. It is a design choice made at the start about what the architecture is describing: the business or the software."
tryThis:
  heading: "Test your process documentation with one question: does it still make sense if the system disappears?"
  body: "Take any core process document and remove every reference to a specific system, screen, field name, or configuration rule. If what remains still describes a complete, understandable process with clear inputs, outputs, decisions, and handoffs, the architecture is portable. If removing system references leaves gaps where business logic should be, the architecture is coupled to the system and will need rebuilding at the next migration. Fix those gaps now, while the current system is still running and people can explain what the business actually does versus what the system happens to do."
related:
  label: "Related service"
  title: "This thinking sits inside our Architecture and Governance service."
  href: "/services/govern/"
cta:
  heading: "Build process architecture that outlasts your systems."
  body: "We design process documentation in business terms, not system terms. The next migration becomes a configuration exercise, not a redesign programme."
draft: true
---

## What we did, and what we found.

A mid-tier insurer with 380 staff began migrating from a legacy on-premise ERP to a cloud-based platform. The system integrator's scoping document estimated 14 months of process redesign work. Their assumption was standard: new system means new processes. Every workflow, approval chain, exception path, and reporting structure would need to be mapped, redesigned for the new platform, tested, and validated.

The head of operations pushed back. Two years earlier, the insurer had invested in a process architecture programme that documented their end-to-end operations: claims, underwriting, policy administration, and finance. That architecture had been built with a deliberate constraint. It described what the business did and why, not how the system executed it. Business rules were documented as decision logic. Process flows described outcomes, handoffs, and controls. System configuration was referenced but not embedded.

When the migration team reviewed the architecture, they found that 83 percent of the documented processes could be configured directly in the new platform without redesign. The 14-month estimate collapsed to six weeks of configuration mapping.

## The pattern to avoid.

**Documenting processes inside the systems that execute them rather than in business terms.**

Most organisations document their processes inside the systems that execute them. Workflow diagrams reference screen names, field IDs, and system-specific approval triggers. This works fine as long as the system stays. The moment the system changes, every process document becomes obsolete. The organisation is not just migrating a system. It is rebuilding its entire operational knowledge base.

The insurer avoided this because the architecture described the business in business terms. A claims triage process was documented as: receive notification, assess coverage, assign complexity tier, route to handler. Not as: claim enters system via portal, auto-populates fields, triggers workflow rule, routes to queue based on lookup table. The first version transfers to any system. The second version is useless the moment the system changes.
