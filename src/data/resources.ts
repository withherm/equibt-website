/**
 * Resources inventory (EQT-259). Single source of truth shared by the Resources
 * hub (`src/pages/resources/index.astro`) and the resource landing template
 * (`src/pages/resources/[slug].astro`).
 *
 * All assets are ungated at launch. Download hrefs are "#" placeholders until
 * the asset issues produce the PDFs (EQT-265..271); the ROI calculator is a
 * later interactive build (EQT-269) and shows a "Coming soon" state.
 *
 * `glyph` is a key into the icon map declared in the consuming .astro files
 * (data stays plain; components are wired up at the page).
 */

export type ResourceAction = "download" | "view" | "soon";

export interface RelatedLink {
  kicker: string;
  title: string;
  href: string;
}

export interface Resource {
  slug: string;
  tag: string; // card/landing kicker, e.g. "ASSESSMENT"
  title: string;
  summary: string; // hub card description
  glyph: string; // icon map key
  action: ResourceAction;
  href: string; // "#" placeholder, or a real internal route for "view"
  actionLabel: string; // "Download" | "View" | "Coming soon"
  gov?: boolean; // government-specific resource
  landing: boolean; // generate a /resources/<slug>/ landing page
  lede?: string; // longer landing-hero intro (falls back to summary)
  whatsInside?: string[];
  related?: RelatedLink;
}

export const resources: Resource[] = [
  {
    slug: "method-lean",
    summary: "Take waste, delay and cost out of how the work flows.",
    tag: "METHOD GUIDE",
    title: "Lean",
    glyph: "Loop",
    href: "/methods/lean/",
    action: "view" as const,
    actionLabel: "Read guide",
    landing: false,
  },
  {
    slug: "method-lean-six-sigma",
    summary: "Get to the root cause of a costly, recurring problem and prove the fix.",
    tag: "METHOD GUIDE",
    title: "Lean Six Sigma",
    glyph: "Gauge",
    href: "/methods/lean-six-sigma/",
    action: "view" as const,
    actionLabel: "Read guide",
    landing: false,
  },
  {
    slug: "method-lean-business-analysis",
    summary: "Pin down the real problem and lock scope before money gets spent on a solution.",
    tag: "METHOD GUIDE",
    title: "Lean Business Analysis",
    glyph: "Charter",
    href: "/methods/lean-business-analysis/",
    action: "view" as const,
    actionLabel: "Read guide",
    landing: false,
  },
  {
    slug: "method-lean-service-design",
    summary: "Redesign a service end to end so it works for the customer and the operation.",
    tag: "METHOD GUIDE",
    title: "Lean Service Design",
    glyph: "Network",
    href: "/methods/lean-service-design/",
    action: "view" as const,
    actionLabel: "Read guide",
    landing: false,
  },
  {
    slug: "method-lean-agile",
    summary: "Get change delivered and kept, not just designed, in short cycles.",
    tag: "METHOD GUIDE",
    title: "Lean Agile",
    glyph: "Transfer",
    href: "/methods/lean-agile/",
    action: "view" as const,
    actionLabel: "Read guide",
    landing: false,
  },
  {
    slug: "capability-statement",
    tag: "CAPABILITY STATEMENT",
    title: "EQUIBT Capability Statement",
    summary:
      "Our services, sectors, and approach in one document. Use it before a conversation.",
    glyph: "Capability",
    action: "view",
    href: "/capability-statement/",
    actionLabel: "View",
    landing: false,
  },
  {
    slug: "transformation-readiness-assessment",
    tag: "ASSESSMENT",
    title: "Transformation Readiness Assessment",
    summary:
      "19 questions across four readiness dimensions: leadership, operational, change, and measurement. Use it before committing budget to a transformation programme.",
    glyph: "Gauge",
    action: "view",
    href: "/resources/transformation-readiness-assessment/",
    actionLabel: "Start assessment",
    landing: false,
    lede:
      "Most transformation programmes fail on readiness, not ambition. Use this to test whether the conditions for success are in place before you commit budget.",
    whatsInside: [
      "19 questions across leadership, operational, change, and measurement readiness",
      "A scoring guide that turns answers into a readiness tier",
      "An interpretation framework for where to shore up before you start",
    ],
    related: {
      kicker: "PLAN · MEASURE",
      title: "Operations Diagnostic",
      href: "/services/plan/",
    },
  },
  {
    slug: "ci-maturity-assessment",
    tag: "ASSESSMENT",
    title: "Continuous Improvement Maturity Assessment",
    summary:
      "20 questions across five CI dimensions. Diagnose where your capability stands and what it takes to move up a tier.",
    glyph: "Loop",
    action: "view",
    href: "/resources/ci-maturity-assessment/",
    actionLabel: "Start assessment",
    landing: false,
    lede:
      "Know where your continuous improvement capability actually sits today, and what it takes to move up a tier rather than stall.",
    whatsInside: [
      "20 questions across leadership, process stability, methods, rhythm, and measurement",
      "A maturity scale from developing to sustaining",
      "The shifts that move a capability up a tier, not just a score",
    ],
    related: {
      kicker: "GOVERN · CONTROL",
      title: "Architecture & Governance",
      href: "/services/govern/",
    },
  },
  {
    slug: "ci-programme-design-framework",
    tag: "GUIDE / FRAMEWORK",
    title: "CI Programme Design Framework",
    summary:
      "A framework for CI programmes that hold after the consultants leave. Covers the four components every programme needs: management system, methodology, capability, and measurement.",
    glyph: "Charter",
    action: "view",
    href: "/resources/ci-programme-design-framework/",
    actionLabel: "Explore framework",
    landing: false,
    lede:
      "A continuous improvement programme holds or it drifts. This framework sets out the four components that keep it holding after the consultants leave.",
    whatsInside: [
      "Why most CI programmes fail, in plain terms",
      "The four components every programme needs: management system, methodology, capability, measurement",
      "How to design each one so improvement sustains without external support",
    ],
    related: {
      kicker: "GOVERN · CONTROL",
      title: "Architecture & Governance",
      href: "/services/govern/",
    },
  },
  {
    slug: "engagement-model",
    tag: "GUIDE",
    title: "EQUIBT Engagement Model",
    summary:
      "How an engagement runs from first conversation to handover. What to expect, what you commit to, and what close looks like.",
    glyph: "Transfer",
    action: "view",
    href: "/resources/engagement-model/",
    actionLabel: "View model",
    landing: false,
    lede:
      "Know exactly how working with us runs before you start, from first conversation to a handover that leaves the capability with your team.",
    whatsInside: [
      "What to expect at each stage, from discovery to close",
      "What you commit to, and what we commit to",
      "How the work ends: what a successful handover looks like",
    ],
    related: {
      kicker: "HOW WE WORK",
      title: "How we work",
      href: "/how-we-work/",
    },
  },
  {
    slug: "roi-calculator",
    tag: "CALCULATOR",
    title: "Operational Improvement ROI Calculator",
    summary:
      "Enter baseline metrics and improvement assumptions. Returns annual benefit, payback period, and multi-year return.",
    glyph: "DocChart",
    action: "soon",
    href: "#",
    actionLabel: "Coming soon",
    landing: false,
  },
  {
    slug: "government-programme-checklist",
    tag: "CHECKLIST / TEMPLATE",
    title: "Government Programme Checklist",
    summary:
      "25 items across three phases: before you start, during delivery, and at close. Includes common government programme failure modes.",
    glyph: "DocTick",
    action: "view",
    href: "/resources/government-programme-checklist/",
    actionLabel: "Open checklist",
    gov: true,
    landing: false,
    lede:
      "Government programmes fail in predictable ways. This 25-item checklist covers what to get right before you start, during delivery, and at close.",
    whatsInside: [
      "Governance readiness checks before you start",
      "Operating-rhythm checks for during the programme",
      "Handover-readiness checks at close, plus common government failure modes to watch for",
    ],
    related: {
      kicker: "GOVERN · CONTROL",
      title: "Architecture & Governance",
      href: "/services/govern/",
    },
  },
  {
    slug: "consulting-brief-template",
    tag: "TEMPLATE",
    title: "Consulting Brief Template",
    summary:
      "A template for briefing external consultants. Covers problem statement, scope, success criteria, commercial expectations, and evaluation criteria.",
    glyph: "DocReport",
    action: "view",
    href: "/resources/consulting-brief-template/",
    actionLabel: "Build your brief",
    landing: false,
    lede:
      "A sharp brief gets you a sharp engagement. This template forces the discipline that makes external work land, before you issue it.",
    whatsInside: [
      "Prompts for the problem statement, scope, and success criteria",
      "Operating conditions and commercial expectations to set out up front",
      "Evaluation criteria so you can compare responses on substance",
    ],
    related: {
      kicker: "FRAME · DEFINE",
      title: "Problem Framing",
      href: "/services/frame/",
    },
  },
];

export const downloadableResources = resources.filter((r) => r.landing);
