import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import { industries, getIndustry } from "@/lib/industries";
import { services } from "@/lib/services";
import { business } from "@/lib/business";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { QuoteForm } from "@/components/QuoteForm";
import { Testimonials } from "@/components/Testimonials";
import { JsonLd, serviceSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const i = getIndustry(params.slug);
  if (!i) return {};
  return {
    title: i.metaTitle,
    description: i.metaDescription,
    alternates: { canonical: `${business.url}/industries/${i.slug}` },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const i = getIndustry(params.slug);
  if (!i) return notFound();

  return (
    <>
      <JsonLd data={serviceSchema({ name: `Cold rooms for ${i.name}`, description: i.metaDescription, slug: `industries/${i.slug}` })} />
      <Hero h1={i.h1} sub={i.intro} eyebrow={`Industry: ${i.name}`} />
      <TrustStrip />
      <Breadcrumbs items={[{ name: "Industries", href: "/industries/restaurants-cafes" }, { name: i.name, href: `/industries/${i.slug}` }]} />

      <section className="container-x py-14 lg:py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="h3 mb-3">Pain points we hear from {i.name.toLowerCase()}</h2>
            <ul className="space-y-2">
              {i.pains.map((p) => (
                <li key={p} className="flex gap-3 text-steel">
                  <span className="h-6 w-6 rounded-full bg-cherry/10 text-cherry grid place-items-center text-xs font-bold shrink-0 mt-0.5">!</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="h3 mb-3">How Cherry Refrigeration solves them</h2>
            <ul className="space-y-2">
              {i.solutions.map((s) => (
                <li key={s} className="flex gap-3 text-steel">
                  <Check className="h-5 w-5 text-cherry shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6 bg-navy text-white">
            <div className="text-xs uppercase tracking-widest text-frost font-semibold mb-1">Sample project</div>
            <h3 className="font-display font-bold text-xl">{i.caseStudy.title} — {i.caseStudy.suburb}</h3>
            <p className="text-white/85 mt-3 leading-relaxed">{i.caseStudy.copy}</p>
          </div>

          <div>
            <h2 className="h3 mb-3">Services we deliver for {i.name.toLowerCase()}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.slice(0, 6).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card p-4 group">
                  <div className="font-display font-bold text-navy group-hover:text-cherry text-sm">{s.shortTitle}</div>
                  <span className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-cherry">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 self-start">
          <QuoteForm />
        </aside>
      </section>

      <Testimonials />
      <CTASection heading={`Need a cold room for your ${i.name.toLowerCase().replace(/s$/, "")} business?`} />
    </>
  );
}
