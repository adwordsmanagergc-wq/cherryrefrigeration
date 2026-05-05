import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { business, tel, mailto } from "@/lib/business";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { LocationsGrid } from "@/components/LocationsGrid";

export const metadata: Metadata = {
  title: "Contact Cherry Refrigeration | Brisbane Cold Room Specialists",
  description: "Call Keith on 0432 115 513 or email service@cherryrefrigeration.com.au. Free fixed-price quote within 24 hours, 24/7 emergency line, Brisbane and SE QLD.",
  alternates: { canonical: `${business.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Hero eyebrow="Contact" h1="Talk to Keith — Brisbane's cold room specialist" sub="Free fixed-price quote within 24 hours. Same-day breakdown response across Greater Brisbane. 24/7 emergency line for total breakdowns." showImage={false} />
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <section className="container-x py-14 lg:py-20 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          <div className="card p-6">
            <h3 className="h3 mb-3">Direct contact</h3>
            <ul className="space-y-3 text-steel">
              <li className="flex gap-3"><Phone className="h-5 w-5 text-cherry" /> <a href={tel} className="hover:underline font-semibold">{business.phone}</a> — Keith Cherry</li>
              <li className="flex gap-3"><Mail className="h-5 w-5 text-cherry" /> <a href={mailto} className="hover:underline">{business.email}</a></li>
              <li className="flex gap-3"><MapPin className="h-5 w-5 text-cherry" /> Brisbane, Queensland — Service across SE QLD</li>
              <li className="flex gap-3"><Clock className="h-5 w-5 text-cherry" /> Mon–Fri 7am–5pm • Sat 8am–1pm • 24/7 emergency</li>
            </ul>
          </div>
          <div className="aspect-[16/10] rounded-xl overflow-hidden border border-navy/10">
            <iframe
              src={`https://www.google.com/maps?q=Brisbane,QLD&z=10&output=embed`}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cherry Refrigeration service area"
            />
          </div>
          <div className="card p-6 bg-cherry text-white">
            <h3 className="font-display font-bold text-xl mb-2">Cold room down right now?</h3>
            <p className="text-white/90 text-sm mb-4">Call our 24/7 emergency line. Same-day Brisbane response, even on weekends.</p>
            <a href={tel} className="inline-flex items-center gap-2 bg-white text-cherry font-bold px-4 py-2 rounded-md hover:bg-ice">
              <Phone className="h-4 w-4" /> Call {business.phone}
            </a>
          </div>
        </div>
        <div id="quote" className="scroll-mt-24">
          <QuoteForm />
        </div>
      </section>
      <LocationsGrid />
    </>
  );
}
