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
    stat: z.string(),
    illustrative: z.boolean(),
  }),
});

export const collections = { insights, cases };
