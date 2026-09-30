import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { locations } from "@/lib/locations";
import { blogPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";
import { getCityServiceCombos } from "@/lib/cityServiceCombos";
import { siteConfig } from "@/lib/siteConfig";

function toDate(dateStr: string | undefined) {
  return dateStr ? new Date(dateStr) : new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const url = (path: string, lastModified: Date = new Date(), priority = 0.7, changeFrequency: "daily" | "weekly" | "monthly" = "weekly") => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  const entries: MetadataRoute.Sitemap = [
    url("/", new Date(), 1, "weekly"),
    url("/get-a-quote", new Date(), 0.9),
    url("/contact", new Date(), 0.8),
    url("/about", new Date(), 0.6),
    url("/blog", new Date(), 0.7),
    url("/emergency-repairs", new Date(), 0.8),
    url("/cost-guide/cool-room-installation-cost-brisbane", new Date(), 0.9),
    url("/privacy", new Date(), 0.3, "monthly"),
    url("/terms", new Date(), 0.3, "monthly"),
    ...services.map((s) => url(`/services/${s.slug}`, new Date(), s.slug === "cool-room-installation-brisbane" ? 1 : 0.85)),
    ...industries.map((i) => url(`/industries/${i.slug}`, new Date(), 0.7)),
    ...locations.map((l) => url(`/locations/${l.slug}`, new Date(), 0.8)),
    ...blogPosts.map((p) => url(`/blog/${p.slug}`, toDate(p.updated || p.date), 0.6)),
    ...getCityServiceCombos().map((c) => url(c.url, new Date(), 0.85)),
  ];

  // /projects is noindex until real projects are populated. Do not include in
  // the sitemap while empty.
  if (siteConfig.hasPublishedProjects && projects.length > 0) {
    entries.push(url("/projects", new Date(), 0.7));
    entries.push(...projects.map((p) => url(`/projects/${p.slug}`, new Date(), 0.6)));
  }

  return entries;
}
