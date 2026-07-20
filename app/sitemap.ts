import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { treatments } from "@/content/treatments";
import { surgeons } from "@/content/surgeons";
import { articles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/treatments",
    "/suitability",
    "/about",
    "/surgeons",
    "/patient-stories",
    "/pricing",
    "/resources",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/complaints-procedure",
  ];

  const dynamicRoutes = [
    ...treatments.map((t) => `/treatments/${t.slug}`),
    ...surgeons.map((s) => `/surgeons/${s.slug}`),
    ...articles.map((a) => `/resources/${a.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
