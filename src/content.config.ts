import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const insights = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    pillar: z.enum(["FRAME", "PLAN", "SOLVE", "EVOLVE", "GOVERN", "SCALE"]),
    // DMAICO phase word for the dotted kicker (PLAN · MEASURE).
    phase: z
      .enum(["Define", "Measure", "Analyse", "Improve", "Control", "Operate"])
      .optional(),
    summary: z.string(),
    readTime: z.string().optional(), // e.g. "4 min read"
    // Sort key only. NEVER rendered as a public date (no dates/years in copy).
    order: z.number().default(0),
    lede: z.array(z.string()).optional(), // hook: 2-3 short punchy lines (no box)
    aeo: z.string().optional(), // AEO answer block: short italic, citable (BLOG_WRITING_STANDARDS_v1)
    tldr: z.array(z.string()).optional(), // TL;DR skim points (top white box)
    tryThis: z
      .object({ heading: z.string(), body: z.string() })
      .optional(), // "one thing to try" (bottom white box)
    related: z
      .object({ label: z.string(), title: z.string(), href: z.string() })
      .optional(), // related-service row (rendered with the DMAICO trainline)
    closingLine: z.string().optional(), // strong closing statement (rendered as a pull-statement, not body italic)
    cta: z.object({ heading: z.string(), body: z.string() }).optional(), // per-post closing CTA (falls back to a generic one)
    draft: z.boolean().default(true),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cases" }),
  schema: z.object({
    title: z.string(),
    sector: z.string(),
    pillar: z.enum(["FRAME", "PLAN", "SOLVE", "EVOLVE", "GOVERN", "SCALE"]),
    order: z.number(),
    metric: z.string(),
    caption: z.string().optional(),
    problem: z.string(),
    approach: z.string(),
    outcome: z.string(),
    illustrative: z.boolean().default(false),
    fullStudy: z.boolean().default(false),
    // full-study-only fields
    heroSubhead: z.string().optional(),
    pathwaySummary: z.string().optional(),
    problemFull: z.string().optional(),
    approachFull: z.string().optional(),
    resultFull: z.string().optional(),
    stats: z
      .array(z.object({ figure: z.string(), caption: z.string() }))
      .optional(),
    flagship: z.object({ quote: z.string(), source: z.string().optional() }).optional(),
    related: z
      .array(
        z.object({
          kind: z.string(),
          title: z.string(),
          body: z.string(),
          href: z.string(),
        }),
      )
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights, cases };
