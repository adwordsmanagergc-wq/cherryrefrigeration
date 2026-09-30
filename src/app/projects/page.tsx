import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/lib/projects";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Cool Room Projects Brisbane | Cherry Refrigeration",
  description: "Recent cool room and refrigeration installs across Brisbane and SE QLD.",
  alternates: { canonical: `${business.url}/projects` },
  // Portfolio is being populated. Keep the route live but hidden from Google
  // and remove from nav / sitemap until at least three real projects exist.
  robots: { index: false, follow: true },
};

export default function ProjectsPage() {
  return (
    <>
      <Hero
        eyebrow="Portfolio"
        h1="Cool rooms we've installed across Brisbane"
        sub="Case studies from real Brisbane installs."
        showImage={false}
      />
      <Breadcrumbs items={[{ name: "Projects", href: "/projects" }]} />
      {projects.length === 0 ? (
        <section className="container-x py-14 lg:py-20 max-w-prose mx-auto text-center">
          <p className="lede">
            Our portfolio is being prepared. To discuss a project of your own, get in touch and we'll walk you
            through similar Brisbane installs in person or over the phone.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/get-a-quote" className="btn-primary">Get a free quote</Link>
            <Link href="/contact" className="btn-outline">Contact Keith</Link>
          </div>
        </section>
      ) : (
        <ProjectsGallery />
      )}
      <CTASection />
    </>
  );
}
