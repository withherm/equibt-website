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
    slug: "capability-statement",
    tag: "CAPABILITY STATEMENT",
    title: "EQUIBT Capability Statement",
    summary:
      "Our track record, services, and operating model in one place. Who we are, what we do, the sectors we work in, and representative client outcomes. Use this if you are weighing up working with us and want to understand the approach before a conversation.",
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
      "A 19-question self-assessment across four dimensions: leadership readiness, operational readiness, change readiness, and measurement readiness. Check whether your organisation is ready to run a transformation programme before you commit budget. Includes a scoring guide and interpretation framework.",
    glyph: "Gauge",
    action: "download",
    href: "#",
    actionLabel: "Download",
    landing: true,
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
      "A 20-question self-assessment across five dimensions: leadership support, process stability, CI methods, improvement rhythm, and measurement. See where your CI capability stands today, from developing to sustaining, and what needs to change to move up a tier.",
    glyph: "Loop",
    action: "download",
    href: "#",
    actionLabel: "Download",
    landing: true,
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
      "A practical framework for designing a continuous improvement programme that actually holds. Why most CI programmes fail, the four components every programme needs (management system, methodology, capability, measurement), and how to design each one so improvement sustains without external support.",
    glyph: "Charter",
    action: "download",
    href: "#",
    actionLabel: "Download",
    landing: true,
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
      "A plain-language guide to how an engagement works, from first conversation to close. What to expect, what you commit to, how the work happens, and how it ends. Covers the discovery process, the pricing approach, and what a successful handover looks like.",
    glyph: "Transfer",
    action: "download",
    href: "#",
    actionLabel: "Download",
    landing: true,
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
      "Estimate the financial return from an operational improvement initiative. Enter baseline metrics (cycle time, volume, cost, rework) and improvement assumptions to calculate annual benefit, payback period, and multi-year return. Build a business case with numbers, not just qualitative arguments.",
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
      "A 25-item checklist for government leaders running an improvement programme. What to do before you start (governance readiness), during the programme (operating rhythm), and at close (handover readiness). Includes common failure modes in government programmes and what to watch for.",
    glyph: "DocTick",
    action: "download",
    href: "#",
    actionLabel: "Download",
    gov: true,
    landing: true,
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
      "A template for briefing an external consulting firm, including us. Covers problem statement, scope, success criteria, operating conditions, commercial expectations, and evaluation criteria. Forces the right discipline before you issue a brief.",
    glyph: "DocReport",
    action: "download",
    href: "#",
    actionLabel: "Download",
    landing: true,
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
