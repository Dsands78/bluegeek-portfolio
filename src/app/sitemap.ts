import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";

type CaseStudyIndex = {
  slug: string;
  date?: string | Date; // ISO string or Date (optional)
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/projects`, lastModified: now },
    { url: `${base}/case-studies`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
  ];

  const proj = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
  }));

  const studies = (caseStudies as CaseStudyIndex[]).map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: c.date ? new Date(c.date) : now,
  }));

  return [...core, ...proj, ...studies];
}
