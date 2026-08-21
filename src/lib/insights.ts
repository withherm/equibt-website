import { getCollection, type CollectionEntry } from "astro:content";

export type InsightEntry = CollectionEntry<"insights">;

export const sortInsights = (a: InsightEntry, b: InsightEntry) =>
  b.data.publishedDate.getTime() - a.data.publishedDate.getTime() ||
  b.data.order - a.data.order;

export const getPublishedInsights = async () =>
  (await getCollection("insights", ({ data }) => !data.draft)).sort(sortInsights);

export const getPublishedInsightsForPillar = async (pillar: string) => {
  const insightPillar = pillar.toUpperCase();
  return (await getPublishedInsights()).filter(
    ({ data }) => data.pillar === insightPillar,
  );
};
