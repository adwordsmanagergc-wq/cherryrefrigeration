import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import { services, getService } from "@/lib/services";
import { serviceContent } from "@/lib/serviceContent";
import { serviceFaqs } from "@/lib/serviceFaqs";
import { moneyPageFaqs } from "@/lib/faqs";
import { business, tel } from "@/lib/business";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PricingTable } from "@/components/PricingTable";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { Testimonials } from "@/components/Testimonials";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { LocationsGrid } from "@/components/LocationsGrid";
import { FAQ } from "@/components/FAQ";
import { QuoteForm } from "@/components/QuoteForm";
import { CTASection } from "@/components/CTASection";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `${business.url}/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `${business.url}/services/${s.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) return notFound();
  const isMoneyPage = s.slug === "cold-room-installation-brisbane";
  const content = serviceContent[s.slug] || [];
  const faqs = isMoneyPage ? moneyPageFaqs : serviceFaqs[s.slug] || [];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: s.title, description: s.metaDescription, slug: s.slug }),
          faqSchema(faqs),
        ]}
      />
      <Hero h1={s.h1} sub={s.intro} />
      <TrustStrip />

      <Breadcrumbs items={[{ name: "Services", href: "/services/cold-room-installation-brisbane" }, { name: s.shortTitle, href: `/services/${s.slug}` }]} />

      <section className="container-x py-14 lg:py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <ul className="grid sm:grid-cols-2 gap-3">
            {s.bullets.map((b) => (
              <li key={b} className="flex gap-3 items-start text-steel">
                <Check className="h-5 w-5 text-cherry shrink-0 mt-0.5" /> <span>{b}</span>
              </li>
            ))}
          </ul>
          {content.map((block) => (
            <div key={block.heading}>
              <h2 className="h3 mb-3">{block.heading}</h2>
              <p className="text-steel leading-relaxed">{block.copy}</p>
            </div>
          ))}
        </div>
        <aside className="lg:sticky lg:top-24 self-start">
          <QuoteForm />
        </aside>
      </section>

      {isMoneyPage && (
        <>
          <ProcessSteps />
          <section className="container-x py-14 lg:py-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="badge-cherry">Cold room types</span>
              <h2 className="h2 mt-3">Every type of cold room we install</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Walk-in chillers", copy: "2–5°C for fresh produce, dairy, drinks and prep food. 100mm panels." },
                { title: "Freezer rooms", copy: "-18°C to -25°C for meat, seafood, ice cream, dough. 150mm panels." },
                { title: "Combi cool/freezer rooms", copy: "Two zones, one envelope, one shared plant. Cheaper to run and install." },
                { title: "Blast chillers and freezers", copy: "Rapid -35°C cells matched to kill or production cycles." },
                { title: "Modular cold rooms", copy: "Fast-deploy modular rooms for sites that need it on the ground in days." },
                { title: "Mobile and trailer cold rooms", copy: "Event, overflow and emergency cold storage on wheels." },
              ].map((x) => (
                <div key={x.title} className="card p-6">
                  <h3 className="font-display font-bold text-navy mb-2">{x.title}</h3>
                  <p className="text-sm text-steel leading-relaxed">{x.copy}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="container-x py-14 lg:py-20 bg-ice -mx-5 sm:-mx-6 lg:-mx-8 px-5 sm:px-6 lg:px-8 rounded-xl">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="badge-cherry">Cost guide</span>
                <h2 className="h2 mt-3">Cold room installation cost in Brisbane</h2>
                <p className="lede mt-3">
                  Most companies don't publish pricing. The table below shows indicative 2025 ranges for a fully
                  installed, commissioned and certified Brisbane cold room. Your fixed-price quote is confirmed after
                  on-site measure-up. Variations come from refrigerant choice, condenser sizing, door package, sub-main
                  electrical and tenancy fitout requirements.
                </p>
                <p className="text-steel mt-3 leading-relaxed">
                  Cherry Refrigeration is one of the only Brisbane refrigeration companies publishing fixed installation
                  pricing, because we'd rather you have an honest number to budget against than a vague conversation. Once
                  we measure on-site, the quote is fixed for the scope agreed.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/cost-guide/cold-room-installation-cost-brisbane" className="btn-primary">Read full cost guide</Link>
                  <Link href="/get-a-quote" className="btn-outline">Get a fixed quote</Link>
                </div>
              </div>
              <PricingTable />
            </div>
          </section>
          <ProjectsGallery limit={6} />
          <Testimonials />
          <IndustriesGrid />
        </>
      )}

      <section className="container-x py-14 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge-cherry">FAQ</span>
          <h2 className="h2 mt-3">Frequently asked questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs} />
        </div>
      </section>

      {isMoneyPage && (
        <>
          <LocationsGrid />
          <ComparisonTable />
        </>
      )}

      <section className="container-x py-14">
        <div className="grid sm:grid-cols-3 gap-4">
          {s.related.map((slug) => {
            const r = getService(slug);
            if (!r) return null;
            return (
              <Link key={slug} href={`/services/${slug}`} className="card p-6 group">
                <div className="text-xs uppercase text-cherry tracking-widest font-semibold mb-1">Related service</div>
                <h3 className="font-display font-bold text-navy group-hover:text-cherry">{r.shortTitle}</h3>
                <p className="text-sm text-steel mt-2 line-clamp-2">{r.intro}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-cherry">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ComparisonTable() {
  const rows = [
    ["Refrigeration + electrical in one team", true, false],
    ["Fully licensed refrigeration + electrical scope", true, false],
    ["Fixed-price quote within 24 hours", true, false],
    ["Transparent installed pricing on site", true, false],
    ["Workmanship warranty in writing", true, false],
    ["24/7 emergency response", true, false],
    ["HACCP-ready logbook on every visit", true, false],
    ["Tenancy drawings and council documentation included", true, false],
  ];
  return (
    <section className="container-x py-14 lg:py-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="badge-cherry">Cherry vs typical installer</span>
        <h2 className="h2 mt-3">What sets us apart</h2>
      </div>
      <div className="overflow-x-auto rounded-xl border border-navy/10 bg-white">
        <table className="w-full text-left">
          <thead className="bg-ice text-navy text-sm">
            <tr>
              <th className="px-4 py-3 font-display font-bold">Capability</th>
              <th className="px-4 py-3 font-display font-bold text-cherry">Cherry Refrigeration</th>
              <th className="px-4 py-3 font-display font-bold">Typical installer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy/10 text-sm text-steel">
            {rows.map(([label, c, t], i) => (
              <tr key={i}>
                <td className="px-4 py-3 font-semibold text-navy">{label as string}</td>
                <td className="px-4 py-3">{c ? <Check className="h-5 w-5 text-cherry" /> : "—"}</td>
                <td className="px-4 py-3">{t ? <Check className="h-5 w-5" /> : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
