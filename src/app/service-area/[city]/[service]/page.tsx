import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQ } from "@/components/FAQ";
import { JsonLd, serviceSchema, faqSchema } from "@/lib/schema";
import { business } from "@/lib/business";
import { serviceFaqs } from "@/lib/serviceFaqs";
import { getCityServiceCombos, getCityServiceCombo } from "@/lib/cityServiceCombos";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getCityServiceCombos().map((c) => ({ city: c.citySlug, service: c.serviceSlug }));
}

export async function generateMetadata({ params }: { params: { city: string; service: string } }): Promise<Metadata> {
  const combo = getCityServiceCombo(params.city, params.service);
  if (!combo) return {};
  return {
    title: combo.combo.metaTitle,
    description: combo.combo.metaDescription,
    alternates: { canonical: `${business.url}${combo.combo.url}` },
    openGraph: { title: combo.combo.metaTitle, description: combo.combo.metaDescription, url: `${business.url}${combo.combo.url}` },
  };
}

export default function CityServicePage({ params }: { params: { city: string; service: string } }) {
  const result = getCityServiceCombo(params.city, params.service);
  if (!result) return notFound();
  const { combo, location: l, service: s } = result;

  const faqs = serviceFaqs[s.slug] || [];
  const localFaqs = [
    { q: `Do you cover ${l.city} for ${combo.service.toLowerCase()}?`, a: `Yes — ${l.city} is on our regular service route. ${l.responseTime}.` },
    { q: `Which suburbs near ${l.city} do you serve?`, a: `We cover ${l.nearbySuburbs.join(", ")} and the wider ${l.region} area.` },
    ...faqs.slice(0, 4),
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${combo.service} in ${l.city}`,
            description: combo.metaDescription,
            slug: combo.url.replace(/^\//, ""),
            area: l.city,
          }),
          faqSchema(localFaqs),
        ]}
      />
      <Hero eyebrow={`${l.city} • ${combo.service}`} h1={combo.h1} sub={`${l.intro} ${combo.service} is delivered by our in-house crew with the same fixed-price, single-quote approach across every ${l.city} job.`} />
      <Breadcrumbs
        items={[
          { name: "Service areas", href: "/locations/brisbane-cbd" },
          { name: l.city, href: `/locations/${l.slug}` },
          { name: combo.service, href: combo.url },
        ]}
      />

      <section className="container-x py-14 lg:py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="h3 mb-3">{combo.service} in {l.city} — how it works</h2>
            <p className="text-steel leading-relaxed">{s.intro}</p>
            <p className="text-steel leading-relaxed mt-4">
              Every {l.city} project runs the same tight process — free on-site assessment, CAD floor plan and
              refrigeration sizing, fixed-price quote within 24 business hours, and a documented install and
              commissioning phase. Where {l.region} conditions matter (coastal humidity, high summer ambient,
              tenancy access), we spec plant and materials accordingly.
            </p>
          </div>

          <div>
            <h2 className="h3 mb-3">What's included</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-3 items-start text-steel">
                  <Check className="h-5 w-5 text-cherry shrink-0 mt-0.5" /> <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <div className="flex gap-2 items-center text-cherry text-sm font-semibold mb-2">
              <MapPin className="h-4 w-4" /> Nearby {l.city} suburbs we cover
            </div>
            <p className="text-sm text-steel">{l.nearbySuburbs.join(" • ")}</p>
          </div>

          <div>
            <h2 className="h3 mb-3">Frequently asked questions</h2>
            <FAQ items={localFaqs} />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <Link href={`/locations/${l.slug}`} className="card p-4 group">
              <div className="text-xs uppercase text-cherry tracking-widest font-semibold mb-1">More in {l.city}</div>
              <div className="font-display font-bold text-navy group-hover:text-cherry text-sm">All {l.city} services</div>
              <span className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-cherry">
                See coverage <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
            <Link href={`/services/${s.slug}`} className="card p-4 group">
              <div className="text-xs uppercase text-cherry tracking-widest font-semibold mb-1">More on this service</div>
              <div className="font-display font-bold text-navy group-hover:text-cherry text-sm">{combo.service} — full guide</div>
              <span className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-cherry">
                Read more <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </div>

        <aside id="quote" className="lg:sticky lg:top-24 self-start scroll-mt-24">
          <QuoteForm />
        </aside>
      </section>

      <CTASection heading={`Free ${combo.service.toLowerCase()} quote for ${l.city}`} />
    </>
  );
}
