import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PricingTable } from "@/components/PricingTable";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { QuoteForm } from "@/components/QuoteForm";
import { JsonLd, articleSchema, faqSchema } from "@/lib/schema";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Cold Room Cost Guide Brisbane — What Affects Your Quote | Cherry Refrigeration",
  description:
    "What actually affects the cost of a cold room install in Brisbane — panel thickness, refrigerant, door package, electrical and more. Every quote is custom.",
  alternates: { canonical: `${business.url}/cost-guide/cold-room-installation-cost-brisbane` },
};

const url = `${business.url}/cost-guide/cold-room-installation-cost-brisbane`;

const costFaqs = [
  {
    q: "Why don't you publish prices on the website?",
    a: "Because no two cold rooms are the same. Panel thickness, refrigerant choice, door package, electrical scope and tenancy access all move the number. We custom-quote every job after an on-site measure-up, so you get an accurate fixed price rather than a range you have to guess against.",
  },
  {
    q: "What actually affects my cold room cost?",
    a: "The biggest levers are panel thickness (100mm vs 150mm), refrigerant choice, condenser sizing for our Queensland climate, door package (hinged vs sliding vs heated freezer doors), and electrical sub-mains work. Tenancy conditions, council requirements and after-hours access can add on top.",
  },
  {
    q: "Are your quotes fixed?",
    a: "Yes — once we measure on site, the quote is fixed for the agreed scope. The only variations are client-requested scope changes, signed off in writing.",
  },
  {
    q: "How long does the quote take?",
    a: "Free on-site assessment, then a written fixed-price quote in your inbox within 24 business hours.",
  },
  {
    q: "Do you charge for the site visit or design?",
    a: "No — on-site assessment and design work is included in the install package.",
  },
  {
    q: "Can I finance a cold room install?",
    a: "Yes — we work with several commercial equipment financiers and can arrange a referral. Many operators finance the install and pay it off from the running-cost savings on modern efficient plant.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: "Cold Room Cost Guide Brisbane — What Affects Your Quote",
            description: metadata.description as string,
            date: "2025-09-01",
            author: "Keith Cherry",
            url,
          }),
          faqSchema(costFaqs),
        ]}
      />
      <Hero
        eyebrow="Cost Guide"
        h1="What actually affects the cost of a Brisbane cold room"
        sub="Every Cherry Refrigeration cold room is custom-quoted after an on-site measure-up. Here's what moves the number — so you know what to expect before we visit."
      />
      <Breadcrumbs items={[{ name: "Cost guide", href: "/cost-guide/cold-room-installation-cost-brisbane" }]} />

      <article className="container-x py-14 lg:py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="h3 mb-3">Typical Brisbane cold room sizes we install</h2>
            <PricingTable />
            <p className="text-xs text-steel mt-3">
              A quick reference for size, temperature and typical use. Your quote is based on the exact spec we measure
              on site — no two rooms are alike, so we don't publish prices.
            </p>
          </section>

          <section>
            <h2 className="h3 mb-3">What actually affects your cold room cost</h2>
            <p className="text-steel leading-relaxed mb-4">
              Call three Brisbane refrigeration companies and you'll often get three different numbers — the difference
              is scope, not margin. Here are the variables, in rough order of impact on the final quote.
            </p>
            <ol className="space-y-3 text-steel list-decimal pl-5">
              <li><strong className="text-navy">Panel thickness.</strong> 100mm vs 150mm. 150mm panels are non-negotiable for freezer rooms and add materially to panel cost on larger rooms.</li>
              <li><strong className="text-navy">Refrigerant choice.</strong> R448A and R449A are now standard for new medium-temp installs. Low-temp R454C is becoming standard. Plant cost varies with refrigerant compatibility.</li>
              <li><strong className="text-navy">Condenser sizing for our climate.</strong> Brisbane summers are unforgiving — undersized condensers struggle in February. We oversize to 38°C ambient, which is a small cost premium versus a catalogue "spec sheet" install.</li>
              <li><strong className="text-navy">Door package.</strong> A simple solid hinged door is the low end. Heated freezer doors, glass-view doors and rapid-roll traffic doors add up on multi-door rooms.</li>
              <li><strong className="text-navy">Electrical sub-mains.</strong> If your switchboard or sub-main can't take the new load, you'll need three-phase upgrades. We do this in-house — but it's still real scope.</li>
              <li><strong className="text-navy">Tenancy and council requirements.</strong> Body corp permits, after-hours installs, council approvals, hoist hire and goods-lift bookings can add meaningfully on top of the base build.</li>
            </ol>
          </section>

          <section>
            <h2 className="h3 mb-3">Running cost matters more than install cost</h2>
            <p className="text-steel leading-relaxed">
              A cold room runs 24/7 for 10–15 years. Even a small inefficiency compounds over that time. The cheapest
              install is rarely the cheapest cold room. Our standard package targets a 25–40% reduction in running cost
              versus a 10-year-old install, through 150mm panels on freezer rooms, EC-fan evaporators, variable-speed
              condensers and tight door management.
            </p>
          </section>

          <section>
            <h2 className="h3 mb-3">How Cherry Refrigeration quotes a cold room</h2>
            <ol className="space-y-2 text-steel list-decimal pl-5">
              <li>Free on-site assessment. Keith measures the space and asks about your stock, throughput and growth.</li>
              <li>CAD floor plan, heat-load calc and refrigeration + electrical scope produced in-house.</li>
              <li>Single fixed-price quote in writing within 24 business hours — refrigeration, electrical, panels, doors, commissioning, certification and a 30-day tune-up all included.</li>
              <li>No add-ons after the fact. The number you sign is the number you pay.</li>
            </ol>
          </section>

          <section>
            <h2 className="h3 mb-3">FAQs about cold room cost in Brisbane</h2>
            <FAQ items={costFaqs} />
          </section>
        </div>

        <aside id="quote" className="lg:sticky lg:top-24 self-start space-y-5 scroll-mt-24">
          <QuoteForm />
          <div className="card p-5">
            <div className="font-display font-bold text-navy mb-2">Why operators trust our quotes</div>
            <ul className="space-y-2 text-sm text-steel">
              <li>• Free on-site assessment</li>
              <li>• Fixed-price quote in writing, in 24 hours</li>
              <li>• Refrigeration + electrical in one number</li>
              <li>• Workmanship warranty in writing</li>
              <li>• No hidden extras — signed scope is the scope</li>
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
