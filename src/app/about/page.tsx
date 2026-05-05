import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Cherry Refrigeration | Brisbane Cold Room Specialists",
  description: "Cherry Refrigeration is Brisbane's most-trusted cold room installer — refrigeration, electrical and HVAC under one licensed roof, founded by Keith Cherry.",
  alternates: { canonical: `${business.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Cherry Refrigeration"
        h1="Brisbane refrigeration done properly, by the trade that does both halves"
        sub="Cherry Refrigeration is one of Queensland's only refrigeration companies that holds in-house QBCC, ARC and Master Electricians licences. We don't sub-contract the sparky. We don't outsource the design. We do the whole job — and we own it."
      />
      <TrustStrip />
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

      <article className="container-x py-14 lg:py-20 max-w-prose mx-auto space-y-8">
        <section>
          <h2 className="h3 mb-3">Founded by Keith Cherry</h2>
          <p className="text-steel leading-relaxed">
            Cherry Refrigeration was founded by Keith Cherry, a Brisbane-born refrigeration mechanic who was sick of
            seeing cold rooms fail because someone cut corners on the install. After 15+ years on the tools — kitchens,
            butchers, supermarkets, breweries, distribution centres — Keith built Cherry Refrigeration around a simple
            promise: one trade, one quote, one warranty, and the same person on the phone whether you're getting quoted
            or chasing a callback.
          </p>
        </section>

        <section>
          <h2 className="h3 mb-3">Licensed across the trade</h2>
          <p className="text-steel leading-relaxed">
            Cold room installs in Queensland touch three licensing regimes — QBCC for the building work, ARC for
            refrigerant handling, and an open electrical licence for the wiring. Most installers hold one and
            sub-contract the others. Cherry Refrigeration holds all three in-house: {business.qbcc}, {business.arc}, and
            Master Electricians member status. That's the difference.
          </p>
        </section>

        <section>
          <h2 className="h3 mb-3">What we believe</h2>
          <ul className="space-y-3 text-steel">
            <li><strong className="text-navy">Honesty up front.</strong> Fixed-price quotes, published Brisbane pricing, and we'll tell you when a unit isn't worth repairing.</li>
            <li><strong className="text-navy">Engineer for our climate.</strong> Brisbane summers and coastal humidity mean catalogue specs aren't enough. We oversize for our actual conditions.</li>
            <li><strong className="text-navy">Show up.</strong> Same-day breakdown response across Greater Brisbane. 24/7 emergency line. Your day is already bad if you're calling us.</li>
            <li><strong className="text-navy">Document everything.</strong> Every install, every service, every repair has a logbook entry your auditor will love.</li>
          </ul>
        </section>

        <section>
          <h2 className="h3 mb-3">Our fleet and team</h2>
          <p className="text-steel leading-relaxed">
            Cherry Refrigeration runs branded service vans across Brisbane, the Gold Coast and the Sunshine Coast, with
            in-house refrigeration mechanics, electricians and a fabrication crew for custom doors and panel work. Every
            technician carries a current trade licence, RABS card and white card — and gets a copy of your job pack
            before they arrive.
          </p>
        </section>

        <section>
          <h2 className="h3 mb-3">Insurance and credentials</h2>
          <ul className="space-y-2 text-steel">
            <li>QBCC Licence: <strong className="text-navy">{business.qbcc}</strong></li>
            <li>ARC Refrigerant Trading Authorisation: <strong className="text-navy">{business.arc}</strong></li>
            <li>Master Electricians member</li>
            <li>Public Liability Insurance: <strong className="text-navy">{business.publicLiability}</strong></li>
            <li>ACN: <strong className="text-navy">{business.acn}</strong></li>
          </ul>
        </section>
      </article>

      <Testimonials />
      <CTASection />
    </>
  );
}
