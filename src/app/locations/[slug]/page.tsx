import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, Phone } from "lucide-react";
import { locations, getLocation } from "@/lib/locations";
import { services } from "@/lib/services";
import { CITY_SERVICE_SLUG_LIST } from "@/lib/cityServiceCombos";
import { siteConfig, tel } from "@/lib/siteConfig";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { QuoteForm } from "@/components/QuoteForm";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { localAngles } from "@/lib/localAngles";

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const l = getLocation(params.slug);
  if (!l) return {};
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    alternates: { canonical: `${siteConfig.siteUrl}/locations/${l.slug}` },
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const l = getLocation(params.slug);
  if (!l) return notFound();
  const angle = localAngles[l.slug];
  const mapEmbed = `https://www.google.com/maps?q=${l.geo.lat},${l.geo.lng}&z=11&output=embed`;
  const nearby = locations.filter((x) => x.slug !== l.slug);
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Locations", href: `/locations/${l.slug}` },
    { name: l.city, href: `/locations/${l.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Cool Room Services ${l.city}`,
            description: l.metaDescription,
            slug: `locations/${l.slug}`,
            area: l.city,
            alternateName: [`Cold Room Services ${l.city}`, `Coolroom Services ${l.city}`],
          }),
          breadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.name, url: siteConfig.siteUrl + b.href }))),
        ]}
      />
      <Hero eyebrow={`Service area: ${l.city}`} h1={l.h1} sub={l.intro} />
      <Breadcrumbs items={breadcrumbItems.slice(1)} />

      <section className="container-x py-14 lg:py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="h3 mb-3">Cool room and refrigeration services in {l.city}</h2>
            <p className="text-steel leading-relaxed">
              {l.city} is a working part of Cherry Refrigeration's weekly route. Whether you are a hospitality operator
              fitting out a new tenancy, a butcher upgrading to a carcass-rated room, or a logistics operator
              commissioning a distribution-scale freezer, we install, service and certify across {l.city} every week,
              without the regional surcharge most installers tack on.
            </p>
            {angle && (
              <>
                <p className="text-steel leading-relaxed mt-4">
                  Our {l.city} customer mix is heavy on {angle.customers}. Recent work has spanned {angle.landmarks}.
                </p>
                <p className="text-steel leading-relaxed mt-4">
                  On the technical side, {angle.climateNote}. Refrigeration, electrical, panels and doors are all
                  delivered under one Cherry Refrigeration quote, one trade and one warranty.
                </p>
              </>
            )}
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
                <MapPin className="h-4 w-4" /> Nearby suburbs we cover
              </div>
              <p className="text-sm text-steel">{l.nearbySuburbs.join(" • ")}</p>
            </div>
          </div>

          <div className="card p-6 bg-ice">
            <div className="text-xs uppercase tracking-widest text-cherry font-semibold mb-2">Recent {l.city} project</div>
            {l.sampleProject ? (
              <>
                <h3 className="font-display font-bold text-navy text-lg">{l.sampleProject.title}</h3>
                <p className="text-sm text-steel mt-2">{l.sampleProject.copy}</p>
              </>
            ) : (
              <p className="text-sm text-steel">
                TODO(KEITH): send a short write-up of a recent {l.city} job (title, room size, temperature, panel type,
                photos) and it will appear here.
              </p>
            )}
          </div>

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
              {services.map((s) => {
                const shortSlug = s.slug.replace(/-brisbane$/, "");
                const hasLocalPage = CITY_SERVICE_SLUG_LIST.includes(shortSlug);
                const href = hasLocalPage ? `/service-area/${l.slug}/${shortSlug}` : `/services/${s.slug}`;
                return (
                  <Link key={s.slug} href={href} className="card p-4 hover:bg-navy hover:text-white block group">
                    <div className="font-display font-bold text-sm">{s.shortTitle}</div>
                    {hasLocalPage && <div className="text-[11px] text-cherry group-hover:text-frost mt-0.5">Local {l.city} page</div>}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="h3 mb-3">Nearby areas we also cover</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {nearby.map((n) => (
                <Link key={n.slug} href={`/locations/${n.slug}`} className="card p-3 group">
                  <div className="font-display font-bold text-navy text-sm group-hover:text-cherry">{n.city}</div>
                  <div className="text-[11px] text-steel">{n.region}</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="card p-6 bg-cherry text-white">
            <h3 className="font-display font-bold text-xl mb-2">Cool room down in {l.city}?</h3>
            <p className="text-white/90 text-sm mb-4">24/7 emergency line for total breakdowns. Same-day response across {l.region} during business hours.</p>
            <a href={tel} className="inline-flex items-center gap-2 bg-white text-cherry font-bold px-4 py-2 rounded-md hover:bg-ice">
              <Phone className="h-4 w-4" /> Call {siteConfig.phone}
            </a>
          </div>
        </div>

        <aside id="quote" className="lg:sticky lg:top-24 self-start scroll-mt-24">
          <QuoteForm />
        </aside>
      </section>

      <CTASection heading={`Get a free fixed price quote for your ${l.city} cool room`} />
    </>
  );
}
