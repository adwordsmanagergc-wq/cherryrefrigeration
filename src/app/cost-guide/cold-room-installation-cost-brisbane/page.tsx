import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PricingTable } from "@/components/PricingTable";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { QuoteForm } from "@/components/QuoteForm";
import { JsonLd, articleSchema, faqSchema } from "@/lib/schema";
import { business } from "@/lib/business";
import { EnergyCalculator } from "@/components/EnergyCalculator";

export const metadata: Metadata = {
  title: "Cold Room Installation Cost Brisbane (2025 Guide) | Cherry Refrigeration",
  description:
    "Real Brisbane cold room installation costs in 2025 — small chiller to industrial freezer, what changes the price, and how to budget. Free fixed quotes.",
  alternates: { canonical: `${business.url}/cost-guide/cold-room-installation-cost-brisbane` },
};

const url = `${business.url}/cost-guide/cold-room-installation-cost-brisbane`;

const costFaqs = [
  {
    q: "How much does a small cafe cold room cost in Brisbane?",
    a: "A 3m × 3m × 2.4m walk-in chiller for a cafe runs $4,000–$8,000 fully installed in Brisbane. Variations come from condenser sizing, panel thickness, door type and electrical sub-main work.",
  },
  {
    q: "How much does a freezer room cost in Brisbane?",
    a: "A standard 5m × 5m × 2.7m freezer at -18°C runs $12,000–$25,000 installed. Larger -22°C industrial rooms with 150mm panels and oversized condensers run $25,000–$40,000 and beyond.",
  },
  {
    q: "What changes the price most?",
    a: "In rough order of impact: panel thickness, refrigerant choice, condenser sizing, door package, electrical sub-mains, and whether a council application is required.",
  },
  {
    q: "Are your quotes fixed?",
    a: "Yes — once we measure on site, the quote is fixed for the agreed scope. The only variations are client-requested scope changes, signed off in writing.",
  },
  {
    q: "Do you charge for site visits or design?",
    a: "Free on-site quote and design within Greater Brisbane. Design is included in the install package if you proceed.",
  },
  {
    q: "Can I finance a cold room install?",
    a: "Yes — we work with several commercial equipment financiers and can arrange a referral. Most operators finance the install and pay it off from the running cost savings.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: "Cold Room Installation Cost in Brisbane — 2025 Guide",
            description: metadata.description as string,
            date: "2025-09-01",
            author: "Keith Cherry",
            url,
          }),
          faqSchema(costFaqs),
        ]}
      />
      <Hero
        eyebrow="2025 Cost Guide"
        h1="Cold Room Installation Cost in Brisbane — 2025"
        sub="An indicative guide to Brisbane cold room installation costs in 2025 — small cafe walk-in to industrial freezer, plus the variables that move the price. Your fixed-price quote is confirmed after on-site measure-up."
      />
      <TrustStrip />
      <Breadcrumbs items={[{ name: "Cost guide", href: "/cost-guide/cold-room-installation-cost-brisbane" }]} />

      <article className="container-x py-14 lg:py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="h3 mb-3">Brisbane cold room pricing at a glance (2025)</h2>
            <PricingTable />
            <p className="text-xs text-steel mt-3">
              Prices are fully installed and commissioned within Greater Brisbane, and include refrigeration, electrical
              sub-circuit, standard door package, panels, commissioning and certification.
            </p>
          </section>

          <section>
            <h2 className="h3 mb-3">What actually moves the price?</h2>
            <p className="text-steel leading-relaxed mb-4">
              If you call three Brisbane refrigeration companies for a cold room quote you'll often get three wildly
              different numbers — sometimes a $4,000 spread on the same room. The variation isn't usually about margin.
              It's about scope. Here are the variables, ranked by how much they change the price.
            </p>
            <ol className="space-y-3 text-steel list-decimal pl-5">
              <li><strong className="text-navy">Panel thickness.</strong> 100mm vs 150mm. 150mm panels are non-negotiable for freezer rooms and add roughly 10–15% to panel cost on big rooms.</li>
              <li><strong className="text-navy">Refrigerant choice.</strong> R448A and R449A are now standard for new medium-temp installs. Low-temp R454C is becoming standard. Plant cost varies with refrigerant compatibility.</li>
              <li><strong className="text-navy">Condenser sizing for our climate.</strong> Brisbane summers are unforgiving — undersized condensers struggle in February. We oversize to 38°C ambient. That sometimes adds 8–12% versus a "spec sheet" install.</li>
              <li><strong className="text-navy">Door package.</strong> A simple solid hinged door is cheap. Heated freezer doors, glass-view doors, and rapid-roll traffic doors add up fast on multi-door rooms.</li>
              <li><strong className="text-navy">Electrical sub-mains.</strong> If your switchboard or sub-main can't take the new load, you'll need three-phase upgrades. We do this in-house — but it's still a real cost.</li>
              <li><strong className="text-navy">Tenancy and council requirements.</strong> Body corp permits, after-hours installs, council approvals, hoist hire and goods-lift bookings can add 5–15% on top of base build.</li>
            </ol>
          </section>

          <section>
            <h2 className="h3 mb-3">Running cost matters more than install cost</h2>
            <p className="text-steel leading-relaxed">
              A cold room runs 24/7 for 10–15 years. Even a small inefficiency compounds into thousands of dollars per
              year. The cheapest install is rarely the cheapest cold room. Below is a quick estimator — pop in your
              dimensions and see roughly what your room would cost to run.
            </p>
            <div className="mt-5"><EnergyCalculator /></div>
          </section>

          <section>
            <h2 className="h3 mb-3">How Cherry Refrigeration prices a cold room</h2>
            <p className="text-steel leading-relaxed">
              We measure on site. We produce a CAD floor plan and a heat-load calculation. We size the refrigeration
              and electrical scope. We issue a single fixed-price quote — refrigeration, electrical, panels, doors,
              commissioning, certification and 30-day tune-up included. No add-ons after the fact. The number you
              sign is the number you pay.
            </p>
          </section>

          <section>
            <h2 className="h3 mb-3">FAQs about cold room cost in Brisbane</h2>
            <FAQ items={costFaqs} />
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 self-start space-y-5">
          <QuoteForm />
          <div className="card p-5">
            <div className="font-display font-bold text-navy mb-2">Why operators trust our pricing</div>
            <ul className="space-y-2 text-sm text-steel">
              <li>• Fixed-price quote in 24 hours</li>
              <li>• Published Brisbane pricing</li>
              <li>• Refrigeration + electrical in one quote</li>
              <li>• Workmanship warranty in writing</li>
              
            </ul>
          </div>
          <div className="card p-5">
            <div className="font-display font-bold text-navy mb-2">Read more</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resources/cold-room-sizing-guide" className="text-cherry hover:underline">Cold Room Sizing Guide</Link></li>
              <li><Link href="/resources/cold-room-vs-freezer-room" className="text-cherry hover:underline">Cold Room vs Freezer Room</Link></li>
              <li><Link href="/resources/energy-efficient-cold-rooms" className="text-cherry hover:underline">Energy-Efficient Cold Rooms</Link></li>
            </ul>
          </div>
        </aside>
      </article>

      <CTASection />
    </>
  );
}
