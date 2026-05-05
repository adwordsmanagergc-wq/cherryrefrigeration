import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { locations } from "@/lib/locations";
import { resources } from "@/lib/resources";
import { blogPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => ({ url: `${business.url}${path}`, lastModified: now, changeFrequency: "weekly" as const });

  return [
    { ...url("/"), priority: 1 },
    { ...url("/get-a-quote"), priority: 0.9 },
    { ...url("/contact"), priority: 0.8 },
    { ...url("/about") },
    { ...url("/projects") },
    { ...url("/blog") },
    { ...url("/emergency-repairs"), priority: 0.8 },
    { ...url("/cost-guide/cold-room-installation-cost-brisbane"), priority: 0.9 },
    { ...url("/privacy"), priority: 0.3 },
    { ...url("/terms"), priority: 0.3 },
    ...services.map((s) => ({ ...url(`/services/${s.slug}`), priority: s.slug === "cold-room-installation-brisbane" ? 1 : 0.8 })),
    ...industries.map((i) => url(`/industries/${i.slug}`)),
    ...locations.map((l) => url(`/locations/${l.slug}`)),
    ...resources.map((r) => url(`/resources/${r.slug}`)),
    ...blogPosts.map((p) => url(`/blog/${p.slug}`)),
    ...projects.map((p) => url(`/projects/${p.slug}`)),
  ];
}
