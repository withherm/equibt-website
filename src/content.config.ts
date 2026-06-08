import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const insights = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    pillar: z.enum(["FRAME", "PLAN", "SOLVE", "EVOLVE", "GOVERN", "SCALE"]),
    summary: z.string(),
    draft: z.boolean(),
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
