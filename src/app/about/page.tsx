import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Cherry Refrigeration | Brisbane Cold Room Specialists",
  description: "Cherry Refrigeration — Brisbane custom cold room installation, refrigeration and air conditioning, founded by Keith Cherry.",
  alternates: { canonical: `${business.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Cherry Refrigeration"
        h1="Cold rooms, refrigeration and electrical — done by the same team"
        sub="Cherry Refrigeration is a Brisbane custom cold room installer founded by Keith Cherry, covering refrigeration, electrical and air conditioning across South East Queensland."
      />
      <TrustStrip />
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

      <article className="container-x py-14 lg:py-20 max-w-prose mx-auto space-y-8">
        <section>
          <h2 className="h3 mb-3">Founded by Keith Cherry</h2>
          <p className="text-steel leading-relaxed">
            Cherry Refrigeration is run by Keith Cherry, a Brisbane refrigeration mechanic who was sick of seeing
            cold rooms fail because someone cut corners on the install. The business was built around a simple
            promise: one trade, one quote, one warranty, and the same person on the phone whether you're getting
            quoted or chasing a callback.
          </p>
        </section>

        <section>
          <h2 className="h3 mb-3">What we believe</h2>
          <ul className="space-y-3 text-steel">
            <li><strong className="text-navy">Honesty up front.</strong> Fixed-price quotes, and we'll tell you when a unit isn't worth repairing.</li>
            <li><strong className="text-navy">Engineer for our climate.</strong> Brisbane summers and coastal humidity mean catalogue specs aren't enough. We size plant for actual local conditions.</li>
            <li><strong className="text-navy">Show up.</strong> Same-day breakdown response across Greater Brisbane during business hours. 24/7 emergency line for total breakdowns.</li>
            <li><strong className="text-navy">Document everything.</strong> Every install, service and repair leaves a logbook entry your auditor can read.</li>
          </ul>
        </section>

        <section>
          <h2 className="h3 mb-3">Business details</h2>
          <ul className="space-y-2 text-steel">
            <li>Trading name: <strong className="text-navy">Cherry Refrigeration</strong></li>
            <li>ACN: <strong className="text-navy">{business.acn}</strong></li>
            <li>Owner: <strong className="text-navy">{business.founder}</strong></li>
            <li>Phone: <strong className="text-navy">{business.phone}</strong></li>
            <li>Email: <strong className="text-navy">{business.email}</strong></li>
            <li>Service area: <strong className="text-navy">Brisbane, Gold Coast, Ipswich, Logan, Redlands, Moreton Bay, Sunshine Coast, Toowoomba</strong></li>
            {business.qbcc && <li>QBCC Licence: <strong className="text-navy">{business.qbcc}</strong></li>}
            {business.arc && <li>ARC Refrigerant Trading Authorisation: <strong className="text-navy">{business.arc}</strong></li>}
            {business.masterElectricians && <li>Master Electricians: <strong className="text-navy">{business.masterElectricians}</strong></li>}
            {business.publicLiability && <li>Public Liability Insurance: <strong className="text-navy">{business.publicLiability}</strong></li>}
          </ul>
        </section>
      </article>

      <CTASection />
    </>
  );
}
