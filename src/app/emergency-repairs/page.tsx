import type { Metadata } from "next";
import Link from "next/link";
import { Phone, AlertTriangle, Clock, Check } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { siteConfig, tel } from "@/lib/siteConfig";
import { JsonLd, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "24/7 Emergency Refrigeration Repairs Brisbane | Cherry Refrigeration",
  description: "Cool room down? 24/7 emergency refrigeration line, same day Brisbane response, all brands. Stock loss support available. Call 0432 115 513.",
  alternates: { canonical: `${siteConfig.siteUrl}/emergency-repairs` },
};

const path = "/emergency-repairs";

export default function Emergency() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "24/7 Emergency Refrigeration Repairs Brisbane",
          description: metadata.description as string,
          slug: path.replace(/^\//, ""),
          alternateName: [
            "After Hours Cool Room Repairs Brisbane",
            "24/7 Cool Room Emergency Brisbane",
          ],
        })}
      />
      <Hero
        eyebrow="24/7 Emergency Line"
        h1="Cool Room or Freezer Down? Call the 24/7 Emergency Line"
        sub="Cherry Refrigeration's emergency line runs day and night for total refrigeration breakdowns. Same day across Greater Brisbane during business hours. Stock loss support and temporary refrigeration available."
        showImage={false}
      />
      <Breadcrumbs items={[{ name: "Emergency repairs", href: path }]} />
      <section className="container-x py-14 lg:py-20">
        <div className="card p-8 bg-cherry text-white text-center max-w-xl mx-auto">
          <AlertTriangle className="h-10 w-10 mx-auto mb-3" />
          <div className="text-sm uppercase tracking-widest text-white/70 font-semibold">Total breakdown?</div>
          <a href={tel} className="block font-display text-4xl sm:text-5xl font-extrabold mt-2">{siteConfig.phone}</a>
          <p className="text-white/85 mt-3 text-sm">24/7 emergency line: Keith answers, day or night.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {[
            { icon: Clock, title: "Same day response", copy: "Across Greater Brisbane Mon to Sat. Out of area dispatch within 24 hours." },
            { icon: Check, title: "All brands, all faults", copy: "Refrigerant leaks, compressor failures, controller faults, evaporator icing, door seal failures. Every make and brand." },
            { icon: Phone, title: "Stock loss mitigation", copy: "Trailer cool rooms and temporary plant available if your room is down and stock is at risk. Ask when you call." },
          ].map((item) => (
            <div key={item.title} className="card p-6">
              <item.icon className="h-6 w-6 text-cherry mb-3" />
              <h3 className="font-display font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-steel leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="max-w-prose mx-auto mt-14 space-y-6 text-steel leading-relaxed">
          <h2 className="h3">Emergency vs scheduled repairs</h2>
          <p>
            This page covers 24/7 emergency response for total refrigeration breakdowns: rooms not cooling, temp
            alarms, refrigerant leaks and after hours failures. For scheduled diagnostic visits, non-urgent faults
            and planned repair work, see our{" "}
            <Link href="/services/cool-room-repairs-brisbane" className="text-cherry font-semibold underline underline-offset-2">
              cool room repairs page
            </Link>
            .
          </p>

          <h2 className="h3">What to do right now if your cool room is failing</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Stop opening the door. Every open is heat in.</li>
            <li>If you can, move at-risk stock to another fridge or freezer.</li>
            <li>Take a photo of the temperature reading for your HACCP record.</li>
            <li>Check the condenser is clear of leaves, that the fan is running, and that no flame light is flashing on the controller.</li>
            <li>Call us. We will either talk you through a quick fix or dispatch a technician.</li>
          </ol>

          <h2 className="h3">Emergency response by area</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Greater Brisbane: same day Mon to Sat, priority for service plan customers (typically 2 hours in business hours).</li>
            <li>Gold Coast, Sunshine Coast, Ipswich, Logan, Redlands, Moreton Bay: same day where possible, 24 hour maximum.</li>
            <li>Toowoomba and Downs: 24 hour dispatch.</li>
          </ul>
        </div>
      </section>
      <CTASection
        heading="Service plan customers get priority emergency response"
        sub="Lock in priority response within 2 business hours and a HACCP-ready logbook on every visit."
      />
    </>
  );
}
