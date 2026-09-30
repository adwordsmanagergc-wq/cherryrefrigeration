import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Get a Free Cool Room Quote Brisbane | Cherry Refrigeration",
  description: "Free fixed price cool room quote within 24 business hours. Custom design and full electrical scope. Brisbane and SE QLD. Call 0432 115 513.",
  alternates: { canonical: `${siteConfig.siteUrl}/get-a-quote` },
  // Conversion / form landing pages are not primary indexing targets.
  robots: { index: false, follow: true },
};

export default function GetAQuote() {
  return (
    <>
      <Hero
        eyebrow="Free quote in 24 hours"
        h1="Get a Free Fixed Price Cool Room Quote"
        sub="Tell Keith what you need. We will send a fixed price quote within 24 business hours. No obligations, no chasing."
        showImage={false}
      />
      <Breadcrumbs items={[{ name: "Get a Quote", href: "/get-a-quote" }]} />
      <section className="container-x py-14 lg:py-20 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="h3">Why operators trust our quotes</h2>
          <ul className="space-y-3 text-steel">
            {[
              "Free on-site assessment within Greater Brisbane",
              "Fixed price quote within 24 business hours",
              "Refrigeration and electrical scope in one number",
              "Tenancy compliance letter included where needed",
              "Workmanship warranty in writing",
              "24/7 emergency line for total breakdowns",
            ].map((b) => (
              <li key={b} className="flex gap-3"><Check className="h-5 w-5 text-cherry shrink-0 mt-0.5" /> <span>{b}</span></li>
            ))}
          </ul>
          <div className="card p-6 bg-navy text-white">
            <div className="font-display font-bold text-xl mb-2">Our 24 hour quote promise</div>
            <p className="text-white/85 leading-relaxed">
              Submit a quote request before 5pm Brisbane time on a business day and you will have a fixed price quote in
              your inbox within 24 hours, or your first service call is on us.
            </p>
          </div>
        </div>
        <div id="quote" className="scroll-mt-24">
          <QuoteForm multiStep />
        </div>
      </section>
    </>
  );
}
