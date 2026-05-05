import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, Phone } from "lucide-react";
import { locations, getLocation } from "@/lib/locations";
import { services } from "@/lib/services";
import { business, tel } from "@/lib/business";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { QuoteForm } from "@/components/QuoteForm";
import { JsonLd, serviceSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const l = getLocation(params.slug);
  if (!l) return {};
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    alternates: { canonical: `${business.url}/locations/${l.slug}` },
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const l = getLocation(params.slug);
  if (!l) return notFound();
  const mapEmbed = `https://www.google.com/maps?q=${l.geo.lat},${l.geo.lng}&z=11&output=embed`;

  return (
    <>
      <JsonLd data={serviceSchema({ name: `Cold Room Installation ${l.city}`, description: l.metaDescription, slug: `locations/${l.slug}`, area: l.city })} />
      <Hero eyebrow={`Service area: ${l.city}`} h1={l.h1} sub={l.intro} />
      <Breadcrumbs items={[{ name: "Locations", href: "/locations/brisbane-cbd" }, { name: l.city, href: `/locations/${l.slug}` }]} />

      <section className="container-x py-14 lg:py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="h3 mb-3">Cold room installation in {l.city}</h2>
            <p className="text-steel leading-relaxed">
              {l.city} is a working part of Cherry Refrigeration's weekly route. Whether you're a hospitality operator
              fitting out a new tenancy, a butcher upgrading to a carcass-rated room, or a logistics operator commissioning
              a distribution-scale freezer, we install, service and certify across {l.city} every week — without the
              regional surcharge most installers tack on.
            </p>
            <p className="text-steel leading-relaxed mt-4">
              Every {l.city} install is delivered by Cherry Refrigeration's in-house licensed crew. Refrigeration,
              electrical, panels and doors all under one quote, one trade and one warranty. Where coastal humidity or
              corrosive salt-air is in play, we spec marine-grade condensers and stainless skin panels as standard.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <div className="flex gap-2 items-center text-cherry text-sm font-semibold mb-2">
                <Clock className="h-4 w-4" /> Response time
              </div>
              <p className="text-sm text-steel">{l.responseTime}</p>
            </div>
            <div className="card p-5">
              <div className="flex gap-2 items-center text-cherry text-sm font-semibold mb-2">
                <MapPin className="h-4 w-4" /> Nearby suburbs
              </div>
              <p className="text-sm text-steel">{l.nearbySuburbs.join(" • ")}</p>
            </div>
          </div>

          {l.sampleProject && (
            <div className="card p-6 bg-navy text-white">
              <div className="text-xs uppercase tracking-widest text-frost font-semibold mb-1">Sample project</div>
              <h3 className="font-display font-bold text-xl">{l.sampleProject.title}</h3>
              <p className="text-white/85 mt-3 leading-relaxed">{l.sampleProject.copy}</p>
            </div>
          )}

          <div className="aspect-[16/9] rounded-xl overflow-hidden border border-navy/10 bg-white">
            <iframe
              src={mapEmbed}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${l.city} service area map`}
            />
          </div>

          <div>
            <h2 className="h3 mb-3">Services we deliver in {l.city}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card p-4 hover:bg-navy hover:text-white block group">
                  <div className="font-display font-bold text-sm">{s.shortTitle}</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="card p-6 bg-cherry text-white">
            <h3 className="font-display font-bold text-xl mb-2">Cold room down in {l.city}?</h3>
            <p className="text-white/90 text-sm mb-4">24/7 emergency line for total breakdowns. Same-day breakdown response across {l.region} during business hours.</p>
            <a href={tel} className="inline-flex items-center gap-2 bg-white text-cherry font-bold px-4 py-2 rounded-md hover:bg-ice">
              <Phone className="h-4 w-4" /> Call {business.phone}
            </a>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 self-start">
          <QuoteForm />
        </aside>
      </section>

      <CTASection heading={`Get a free fixed-price quote for your ${l.city} cold room`} />
    </>
  );
}
