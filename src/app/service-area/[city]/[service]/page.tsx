import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, MapPin, Phone } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQ } from "@/components/FAQ";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig, tel } from "@/lib/siteConfig";
import { serviceFaqs } from "@/lib/serviceFaqs";
import { getCityServiceCombos, getCityServiceCombo } from "@/lib/cityServiceCombos";
import { locations } from "@/lib/locations";
import { localAngles } from "@/lib/localAngles";

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
    alternates: { canonical: `${siteConfig.siteUrl}${combo.combo.url}` },
    openGraph: {
      title: combo.combo.metaTitle,
      description: combo.combo.metaDescription,
      url: `${siteConfig.siteUrl}${combo.combo.url}`,
    },
  };
}

// Natural-grammar service verb per service (avoids the templated
// "Cool Room Repairs is delivered by..." wording).
function serviceIntro(serviceSlug: string, city: string, angle: (typeof localAngles)[string] | undefined): string {
  const customers = angle?.customers ?? `hospitality, food retail and industrial operators`;
  const climate = angle?.climateNote ?? `we spec plant to Queensland design ambient conditions`;
  switch (serviceSlug) {
    case "cool-room-installation":
      return `Cherry Refrigeration installs custom cool rooms across ${city} for ${customers}. Every install runs the same tight process: free on-site assessment, CAD floor plan and refrigeration sizing, fixed price quote within 24 business hours, panel manufacture, on-site build and commissioning. For ${city}, ${climate}.`;
    case "cool-room-repairs":
      return `When a cool room fails in ${city}, Cherry Refrigeration responds same day where possible and runs a 24/7 emergency line for total breakdowns. We service ${customers}, diagnose on the first visit wherever possible, and can mobilise a trailer cool room if stock is at risk. For ${city}, ${climate}.`;
    case "freezer-room-installation":
      return `Cherry Refrigeration designs and installs freezer rooms across ${city}, engineered to hold -18°C to -25°C in Queensland ambient. We work with ${customers}, spec 150mm high-density panels and heated door frames as standard, and commission every room under real load before handover. For ${city}, ${climate}.`;
    default:
      return `Cherry Refrigeration delivers commercial refrigeration in ${city} for ${customers}.`;
  }
}

export default function CityServicePage({ params }: { params: { city: string; service: string } }) {
  const result = getCityServiceCombo(params.city, params.service);
  if (!result) return notFound();
  const { combo, location: l, service: s } = result;
  const angle = localAngles[l.slug];

  const nearbyLocations = locations.filter((x) => x.slug !== l.slug).slice(0, 4);

  const faqs = serviceFaqs[s.slug] || [];
  const localFaqs = [
    { q: `Do you cover ${l.city} for ${combo.service.toLowerCase()}?`, a: `Yes. ${l.city} is on our regular service route. ${l.responseTime}.` },
    { q: `Which suburbs near ${l.city} do you serve?`, a: `We cover ${l.nearbySuburbs.join(", ")} and the wider ${l.region} area.` },
    { q: `How fast can you get to ${l.city} for a breakdown?`, a: `${l.responseTime}. Priority response for service plan customers, typically 2 hours in business hours across Greater Brisbane.` },
    ...faqs.slice(0, 3),
  ];

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Service areas", href: `/locations/${l.slug}` },
    { name: l.city, href: `/locations/${l.slug}` },
    { name: combo.service, href: combo.url },
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
            alternateName: s.alternateNames?.map((a) => a.replace(/Brisbane$/, l.city)),
          }),
          faqSchema(localFaqs),
          breadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.name, url: siteConfig.siteUrl + b.href }))),
        ]}
      />
      <Hero
        eyebrow={`${l.city} • ${combo.service}`}
        h1={combo.h1}
        sub={serviceIntro(combo.serviceSlug, l.city, angle)}
      />
      <Breadcrumbs items={breadcrumbItems.slice(1)} />

      <section className="container-x py-14 lg:py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="h3 mb-3">Why {l.city} operators choose Cherry Refrigeration</h2>
            <p className="text-steel leading-relaxed">
              We work weekly in {l.city}. That means someone on the crew knows your street, your building, your landlord.
              Where {l.region} conditions matter (coastal humidity, high summer ambient, tenancy access, body corporate
              constraints), we spec plant and materials accordingly.
            </p>
            {angle && (
              <p className="text-steel leading-relaxed mt-4">
                Recent {l.city} work has been focused on {angle.customers}, from {angle.landmarks}.
                {" "}{angle.climateNote.charAt(0).toUpperCase() + angle.climateNote.slice(1)}.
              </p>
            )}
          </div>

          <div>
            <h2 className="h3 mb-3">What is included</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-3 items-start text-steel">
                  <Check className="h-5 w-5 text-cherry shrink-0 mt-0.5" /> <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6 bg-ice">
            <div className="text-xs uppercase tracking-widest text-cherry font-semibold mb-2">Recent {l.city} project</div>
            <p className="text-sm text-steel">
              {siteConfig.hasPublishedProjects
                ? `Details of a recent ${l.city} install will appear here shortly.`
                : `TODO(KEITH): send a short write-up (title, suburb, room size, temperature, panel type, photos) of a recent ${l.city} ${combo.service.toLowerCase()} job and it will appear here.`}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <div className="flex gap-2 items-center text-cherry text-sm font-semibold mb-2">
                <MapPin className="h-4 w-4" /> Nearby {l.city} suburbs
              </div>
              <p className="text-sm text-steel">{l.nearbySuburbs.join(" • ")}</p>
            </div>
            <div className="card p-5">
              <div className="flex gap-2 items-center text-cherry text-sm font-semibold mb-2">
                <Phone className="h-4 w-4" /> {l.city} response time
              </div>
              <p className="text-sm text-steel">{l.responseTime}</p>
            </div>
          </div>

          <div>
            <h2 className="h3 mb-3">Frequently asked questions</h2>
            <FAQ items={localFaqs} />
          </div>

          <div>
            <h2 className="h3 mb-3">Nearby areas we also cover</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {nearbyLocations.map((n) => (
                <Link key={n.slug} href={`/locations/${n.slug}`} className="card p-4 group">
                  <div className="font-display font-bold text-navy text-sm group-hover:text-cherry">{n.city}</div>
                  <div className="text-xs text-steel">{n.region}</div>
                </Link>
              ))}
            </div>
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
              <div className="font-display font-bold text-navy group-hover:text-cherry text-sm">{combo.service}: full guide</div>
              <span className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-cherry">
                Read more <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>

          <div className="card p-5 bg-cherry text-white">
            <div className="font-display font-bold text-lg mb-1">Need it fixed now?</div>
            <p className="text-sm text-white/90 mb-3">24/7 emergency line for total breakdowns across {l.city}.</p>
            <a href={tel} className="inline-flex items-center gap-2 bg-white text-cherry font-bold px-4 py-2 rounded-md hover:bg-ice text-sm">
              <Phone className="h-4 w-4" /> Call {siteConfig.phone}
            </a>
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
