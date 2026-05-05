import type { Metadata } from "next";
import { Phone, AlertTriangle, Clock, Check } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { business, tel } from "@/lib/business";

export const metadata: Metadata = {
  title: "24/7 Emergency Cold Room & Refrigeration Repairs Brisbane | Cherry Refrigeration",
  description: "Cold room down? Cherry Refrigeration's 24/7 Brisbane emergency line responds same-day. All brands, all faults. Call 0432 115 513.",
  alternates: { canonical: `${business.url}/emergency-repairs` },
};

export default function Emergency() {
  return (
    <>
      <Hero
        eyebrow="24/7 Emergency Line"
        h1="Cold room down? Same-day Brisbane response."
        sub="Cherry Refrigeration's emergency line runs 24/7 for total breakdowns. Same-day across Greater Brisbane during business hours. Stock-loss support available."
        showImage={false}
      />
      <TrustStrip />
      <Breadcrumbs items={[{ name: "Emergency repairs", href: "/emergency-repairs" }]} />
      <section className="container-x py-14 lg:py-20">
        <div className="card p-8 bg-cherry text-white text-center max-w-xl mx-auto">
          <AlertTriangle className="h-10 w-10 mx-auto mb-3" />
          <div className="text-sm uppercase tracking-widest text-white/70 font-semibold">Total breakdown?</div>
          <a href={tel} className="block font-display text-4xl sm:text-5xl font-extrabold mt-2">{business.phone}</a>
          <p className="text-white/85 mt-3 text-sm">24/7 emergency line — Keith answers, day or night.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {[
            { icon: Clock, title: "Same-day response", copy: "Across Greater Brisbane Mon–Sat. Out-of-area dispatch within 24 hours." },
            { icon: Check, title: "All brands, all faults", copy: "Refrigerant leaks, compressor failures, controller faults, evaporator icing, door seal failures." },
            { icon: Phone, title: "Stock-loss mitigation", copy: "Trailer cold rooms and temporary plant available if your room is down and stock is at risk." },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <item.icon className="h-6 w-6 text-cherry mb-3" />
              <h3 className="font-display font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-steel leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="max-w-prose mx-auto mt-14 space-y-6 text-steel leading-relaxed">
          <h2 className="h3">What to do right now if your cold room is failing</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Stop opening the door — every open is heat in.</li>
            <li>If you can, move at-risk stock to another fridge or freezer.</li>
            <li>Take a photo of the temperature reading (HACCP record).</li>
            <li>Check the condenser — clear of leaves, fan running, no flame light flashing on the controller.</li>
            <li>Call us. We'll either talk you through a quick fix or dispatch a technician.</li>
          </ol>
        </div>
      </section>
      <CTASection heading="Service plan customers get priority response" sub="Lock in priority response within 2 business hours and a HACCP-ready logbook on every visit." />
    </>
  );
}
