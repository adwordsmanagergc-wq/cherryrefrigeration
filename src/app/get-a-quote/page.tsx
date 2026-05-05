import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { Testimonials } from "@/components/Testimonials";
import { Check } from "lucide-react";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Get a Free Cold Room Quote — Brisbane | Cherry Refrigeration",
  description: "Free fixed-price cold room quote within 24 business hours. Custom design, full electrical, 5-year warranty. Brisbane and SE QLD.",
  alternates: { canonical: `${business.url}/get-a-quote` },
};

export default function GetAQuote() {
  return (
    <>
      <Hero eyebrow="Free quote — 24 hours" h1="Get a free fixed-price cold room quote" sub="Tell Keith what you need. We'll send a fixed-price quote within 24 business hours — no obligations, no chasing." showImage={false} />
      <TrustStrip />
      <Breadcrumbs items={[{ name: "Get a Quote", href: "/get-a-quote" }]} />
      <section className="container-x py-14 lg:py-20 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="h3">Why operators trust our quotes</h2>
          <ul className="space-y-3 text-steel">
            {[
              "Free on-site assessment within Greater Brisbane",
              "Fixed-price quote within 24 business hours",
              "Refrigeration + electrical scope in one number",
              "Published Brisbane pricing — no hidden surprises",
              "Tenancy compliance letter included where needed",
              "5-year workmanship warranty in writing",
            ].map((b) => (
              <li key={b} className="flex gap-3"><Check className="h-5 w-5 text-cherry shrink-0 mt-0.5" /> <span>{b}</span></li>
            ))}
          </ul>
          <div className="card p-6 bg-navy text-white">
            <div className="font-display font-bold text-xl mb-2">Our 24-hour quote promise</div>
            <p className="text-white/85 leading-relaxed">
              Submit a quote request before 5pm Brisbane time on a business day, and you'll have a fixed-price quote in
              your inbox within 24 hours — or your first service call is on us.
            </p>
          </div>
        </div>
        <div>
          <QuoteForm multiStep />
        </div>
      </section>
      <Testimonials />
    </>
  );
}
