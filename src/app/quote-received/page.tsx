import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Quote Received | Cherry Refrigeration",
  description: "Thanks — we've received your quote request. Keith will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function QuoteReceived() {
  return (
    <>
      <Script id="ga-conv" strategy="afterInteractive">{`
        if (window.gtag) {
          gtag('event', 'conversion', { send_to: 'G-QCM5GYXMSH', value: 1.0, currency: 'AUD', event_category: 'lead', event_label: 'quote_form' });
        }
      `}</Script>
      <section className="container-x py-20 max-w-prose mx-auto text-center">
        <CheckCircle2 className="h-16 w-16 text-cherry mx-auto mb-4" />
        <h1 className="h1">Thanks — we've got it.</h1>
        <p className="lede mt-4">
          Keith will call you back within 60 minutes during business hours, or first thing next morning if it's after
          hours. For urgent breakdowns, call <a href="tel:+61432115513" className="text-cherry font-semibold">0432 115 513</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/blog" className="btn-outline">Read the blog</Link>
        </div>
      </section>
    </>
  );
}
