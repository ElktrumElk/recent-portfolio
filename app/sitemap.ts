import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site";
import { projects } from "./lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: project.dateEnded ?? project.dateStarted,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
