import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { CTASection } from "@/components/CTASection";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Cold Room Projects Brisbane | Cherry Refrigeration",
  description: "Recent cold room and refrigeration installs across Brisbane and SE QLD — restaurants, butchers, breweries, pharmacy, supermarkets and 3PLs.",
  alternates: { canonical: `${business.url}/projects` },
};

export default function ProjectsPage() {
  return (
    <>
      <Hero eyebrow="Portfolio" h1="Cold rooms we've installed across Brisbane" sub="Filterable case studies from real Brisbane installs. Industry, suburb, size — every project is one we'd happily walk you through on site." showImage={false} />
      <Breadcrumbs items={[{ name: "Projects", href: "/projects" }]} />
      <ProjectsGallery />
      <CTASection />
    </>
  );
}
