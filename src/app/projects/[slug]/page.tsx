import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/lib/projects";
import { business } from "@/lib/business";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: `${p.title} (${p.suburb}) | Cherry Refrigeration Projects`,
    description: p.summary,
    alternates: { canonical: `${business.url}/projects/${p.slug}` },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) return notFound();
  return (
    <>
      <Hero eyebrow={`${p.industry} • ${p.suburb}`} h1={p.title} sub={p.summary} showImage={false} />
      <Breadcrumbs items={[{ name: "Projects", href: "/projects" }, { name: p.title, href: `/projects/${p.slug}` }]} />
      <article className="container-x py-14 max-w-prose mx-auto space-y-8">
        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div><dt className="text-steel">Industry</dt><dd className="font-display font-bold text-navy">{p.industry}</dd></div>
          <div><dt className="text-steel">Suburb</dt><dd className="font-display font-bold text-navy">{p.suburb}</dd></div>
          <div className="col-span-2"><dt className="text-steel">Size</dt><dd className="font-display font-bold text-navy">{p.size}</dd></div>
        </dl>
        <div>
          <h2 className="h3 mb-3">Scope</h2>
          <ul className="space-y-2 text-steel">
            {p.details.map((d) => <li key={d}>• {d}</li>)}
          </ul>
        </div>
        <div className="text-sm text-steel">
          More projects: {projects.filter((o) => o.slug !== p.slug).slice(0, 3).map((o) => (
            <Link key={o.slug} href={`/projects/${o.slug}`} className="text-cherry hover:underline mr-3">{o.title.split(" — ")[0]}</Link>
          ))}
        </div>
      </article>
      <CTASection />
    </>
  );
}
