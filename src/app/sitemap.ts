import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/formatting";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = siteUrl();
  return [
    { url, changeFrequency: "weekly", priority: 1 },
    ...projects.map((project) => ({
      url: `${url}/works/${project.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
