---
title: "Forty steps on the process map. Three hundred and forty in the data."
pillar: "PLAN"
phase: "Measure"
summary: "Analysis of a major Australian bank's home loan call centre interaction logs revealed 340 distinct process variants from a documented 40-step process. Three variants accounted for 18 percent of volume and 61 percent of total handling time."
readTime: "4 min read"
order: 3
publishedDate: 2026-06-12
lede:
  - "Three months into a diagnostic engagement at a major Australian bank, analysis of home loan call centre interaction logs revealed 340 distinct process variants from a documented process with 40 steps."
  - "Three variants accounted for 18 percent of volume and 61 percent of total handling time. Nobody had known they existed as a distinct pattern."
tldr:
  - "Process mining shows what actually happens, not what the process map says should happen."
  - "LLM analysis now does what used to require expensive specialist tools and weeks of data science work."
  - "Most rework and delay concentrate in two to three variants accounting for under 20 percent of volume."
  - "The team can run the analysis themselves in a workshop without external data science expertise."
  - "Analysis that stays inside your governance boundary is operationally and commercially useful."
aeo: "Process maps describe how a process is supposed to work. Transaction data describes how it actually works. LLM analysis of event logs makes the gap visible at scale without months of observation or expensive specialist tools. The gap between the map and the data is where the improvement opportunity lives."
tryThis:
  heading: "Pull the event log before you start redesigning."
  body: "Before your next process improvement project, ask your data team to extract the event log data for that process and count the distinct variants. How many different paths does work actually take from start to finish? Which variants carry the most cost or delay? If the answer is more than 10 variants, the variants are where the investigation should start, not the documented process map. Run the analysis in a team workshop. The team interprets the patterns in context: they know which loops are genuine exceptions and which reflect system behaviour. They are active interpreters of their own data, not passive recipients of an external report."
related:
  label: "Related service"
  title: "This thinking sits inside our Operations Diagnostic."
  href: "/services/plan/"
cta:
  heading: "Show us the event log before you start the redesign."
  body: "We run process mining analysis as the first step in any improvement diagnostic. The variants tell us where work concentrates, so effort goes to the right place from day one."
draft: true
---

## What we did, and what we found.

Three months into a diagnostic engagement at a major Australian bank, analysis was run on their home loan call centre interaction logs. The documented process had 40 steps. The actual transaction data revealed 340 distinct process variants. Most of the rework and delay concentrated in three of those variants, which accounted for 18 percent of volume but 61 percent of total handling time. Nobody had known those three variants existed as a distinct pattern.

The documented process described what should happen. The transaction data described what actually happens. The gap between them is where the improvement opportunity lives.

## The pattern to avoid.

**Starting process redesign from the process map rather than the transaction data.**

Process mining is the analysis of process execution data to understand how work actually flows. Every action, every decision point, every rework loop leaves a trace in event logs. Most organisations have years of this data but have never looked at it systematically. A claims process is documented as received, eligibility check, assessment, approval, payment. In reality, 23 percent of claims do the eligibility check twice. Thirty-four percent go back to assessment after approval. Seventeen percent follow a completely different path.

Three years ago, surfacing these patterns required expensive specialist tools with six-figure annual licences and data scientists to configure the analysis. The lead time from question to answer was eight to twelve weeks. Now you extract the event log from your system, load it into an LLM with a structured prompt asking for patterns, bottlenecks, decision points, and rework loops, and the analysis returns in minutes. The team reviews it in a workshop, challenges the patterns against what they know, and identifies which loops are diagnostic targets and which are explainable exceptions.
