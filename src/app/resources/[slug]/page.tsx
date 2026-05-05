import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resources, getResource } from "@/lib/resources";
import { business } from "@/lib/business";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd, articleSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const r = getResource(params.slug);
  if (!r) return {};
  return {
    title: `${r.title} | Cherry Refrigeration`,
    description: r.description,
    alternates: { canonical: `${business.url}/resources/${r.slug}` },
  };
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const r = getResource(params.slug);
  if (!r) return notFound();
  const url = `${business.url}/resources/${r.slug}`;
  return (
    <>
      <JsonLd data={articleSchema({ title: r.title, description: r.description, date: r.date, author: r.author, url })} />
      <Hero eyebrow="Resource" h1={r.title} sub={r.description} />
      <Breadcrumbs items={[{ name: "Resources", href: "/resources/cold-room-sizing-guide" }, { name: r.title, href: `/resources/${r.slug}` }]} />
      <article className="container-x py-14 lg:py-20 max-w-prose mx-auto">
        <div className="text-sm text-steel mb-6">By {r.author} • {new Date(r.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}</div>
        <div className="space-y-8">
          {r.body.map((b) => (
            <section key={b.heading}>
              <h2 className="h3 mb-3">{b.heading}</h2>
              <p className="text-steel leading-relaxed">{b.copy}</p>
            </section>
          ))}
        </div>
      </article>
      <CTASection />
    </>
  );
}
