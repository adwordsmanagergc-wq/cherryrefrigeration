// Per-service related content: industries, blog posts, and locations. Used by
// the /services/[slug] page to add rich internal linking so Google can crawl
// the tag topology and each page picks up 4+ contextual out-links.

import type { RelatedItem } from "@/components/ServiceRelated";
import { locations } from "./locations";
import { industries } from "./industries";
import { getPost } from "./blog";

type Row = {
  industries: string[];    // industry slugs
  blogs: string[];         // blog slugs
  hasCostGuide: boolean;   // true = show cost-guide link
  serviceAreaShortSlug?: string; // when a matching /service-area/[city]/[shortSlug] page exists
};

const map: Record<string, Row> = {
  "cool-room-installation-brisbane": {
    industries: ["restaurants-cafes", "butchers", "supermarkets-grocers"],
    blogs: ["trusted-cool-room-installation-company-brisbane", "cool-room-installation-cost-brisbane", "cool-room-sizing-guide"],
    hasCostGuide: true,
    serviceAreaShortSlug: "cool-room-installation",
  },
  "cool-room-repairs-brisbane": {
    industries: ["restaurants-cafes", "supermarkets-grocers", "pharmacy-medical"],
    blogs: ["cool-room-not-cooling-troubleshooting", "cool-room-door-seal-replacement"],
    hasCostGuide: false,
    serviceAreaShortSlug: "cool-room-repairs",
  },
  "cool-room-design-brisbane": {
    industries: ["breweries-distilleries", "butchers", "cold-storage-logistics"],
    blogs: ["cool-room-sizing-guide", "trusted-cool-room-installation-company-brisbane"],
    hasCostGuide: true,
  },
  "cool-room-doors-brisbane": {
    industries: ["restaurants-cafes", "supermarkets-grocers", "florists"],
    blogs: ["cool-room-door-seal-replacement", "energy-efficient-cool-rooms-brisbane"],
    hasCostGuide: false,
  },
  "freezer-room-installation-brisbane": {
    industries: ["butchers", "seafood-distributors", "cold-storage-logistics"],
    blogs: ["cool-room-vs-cold-room", "energy-efficient-cool-rooms-brisbane", "cool-room-sizing-guide"],
    hasCostGuide: true,
    serviceAreaShortSlug: "freezer-room-installation",
  },
  "commercial-refrigeration-brisbane": {
    industries: ["supermarkets-grocers", "restaurants-cafes", "cold-storage-logistics"],
    blogs: ["low-gwp-refrigerant-retrofit-brisbane", "energy-efficient-cool-rooms-brisbane"],
    hasCostGuide: false,
  },
  "air-conditioning-installation-brisbane": {
    industries: ["restaurants-cafes", "pharmacy-medical"],
    blogs: ["trusted-cool-room-installation-company-brisbane"],
    hasCostGuide: false,
  },
  "air-conditioning-repair-brisbane": {
    industries: ["restaurants-cafes", "pharmacy-medical"],
    blogs: ["cool-room-not-cooling-troubleshooting"],
    hasCostGuide: false,
  },
  "electrical-installation-brisbane": {
    industries: ["restaurants-cafes", "supermarkets-grocers"],
    blogs: ["qbcc-licensed-cool-room-installer-brisbane"],
    hasCostGuide: false,
  },
  "cool-room-maintenance-brisbane": {
    industries: ["restaurants-cafes", "butchers", "pharmacy-medical"],
    blogs: ["haccp-cool-room-checklist-brisbane", "cool-room-door-seal-replacement"],
    hasCostGuide: false,
  },
  "cool-room-regas-refrigerant-leak-repair-brisbane": {
    industries: ["restaurants-cafes", "supermarkets-grocers", "seafood-distributors"],
    blogs: ["low-gwp-refrigerant-retrofit-brisbane", "cool-room-not-cooling-troubleshooting"],
    hasCostGuide: false,
  },
  "cool-room-door-seal-replacement-brisbane": {
    industries: ["restaurants-cafes", "supermarkets-grocers", "butchers"],
    blogs: ["cool-room-door-seal-replacement", "energy-efficient-cool-rooms-brisbane"],
    hasCostGuide: false,
  },
  "commercial-fridge-repairs-brisbane": {
    industries: ["restaurants-cafes", "supermarkets-grocers"],
    blogs: ["cool-room-not-cooling-troubleshooting", "low-gwp-refrigerant-retrofit-brisbane"],
    hasCostGuide: false,
  },
};

export function getServiceRelated(slug: string): {
  costGuideHref?: string;
  industries: RelatedItem[];
  blogPosts: RelatedItem[];
  serviceAreas: RelatedItem[];
} {
  const row = map[slug];
  if (!row) {
    return { industries: [], blogPosts: [], serviceAreas: [] };
  }
  return {
    costGuideHref: row.hasCostGuide ? "/cost-guide/cool-room-installation-cost-brisbane" : undefined,
    industries: row.industries
      .map((s) => industries.find((i) => i.slug === s))
      .filter(Boolean)
      .map((i) => ({ label: i!.name, href: `/industries/${i!.slug}` })),
    blogPosts: row.blogs
      .map((s) => getPost(s))
      .filter(Boolean)
      .map((p) => ({ label: p!.title, href: `/blog/${p!.slug}` })),
    serviceAreas: row.serviceAreaShortSlug
      ? locations.slice(0, 4).map((l) => ({
          label: `${l.city}`,
          href: `/service-area/${l.slug}/${row.serviceAreaShortSlug}`,
          hint: l.region,
        }))
      : locations.slice(0, 4).map((l) => ({ label: l.city, href: `/locations/${l.slug}`, hint: l.region })),
  };
}
