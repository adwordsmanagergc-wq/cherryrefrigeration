import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Service | Cherry Refrigeration",
  description: "Terms of service for Cherry Refrigeration.",
  alternates: { canonical: `${business.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms", href: "/terms" }]} />
      <article className="container-x py-14 max-w-prose mx-auto">
        <h1 className="h1 mb-6">Terms of Service</h1>
        <p className="text-steel">Last updated: 1 January 2025</p>
        <p className="text-steel mt-6">These terms apply to your use of cherryrefrigeration.com.au and to engagements between you and {business.legalName} (ACN {business.acn}).</p>

        <h2 className="h3 mt-8 mb-3">Quotes and scope</h2>
        <p className="text-steel">All quotes are valid for 30 days unless otherwise stated. Fixed-price quotes are based on the agreed scope and the conditions confirmed at site assessment. Variations require written sign-off.</p>

        <h2 className="h3 mt-8 mb-3">Warranty</h2>
        <p className="text-steel">Cherry Refrigeration registers full manufacturer warranty on compressors, condensers and evaporators on each install, plus a workmanship warranty whose duration and scope is set out in your written quote. Warranty excludes damage from misuse, third-party modifications, or events outside our control.</p>

        <h2 className="h3 mt-8 mb-3">Payment</h2>
        <p className="text-steel">Standard terms are 30% deposit on order, balance on commissioning. Service work is invoiced on completion, payable within 7 days unless otherwise agreed.</p>

        <h2 className="h3 mt-8 mb-3">Liability</h2>
        <p className="text-steel">Cherry Refrigeration carries Public Liability insurance to {business.publicLiability}. Our liability is limited to the value of the engagement. We do not accept liability for consequential losses including stock loss except as required by law or our insurer.</p>

        <h2 className="h3 mt-8 mb-3">Governing law</h2>
        <p className="text-steel">These terms are governed by the laws of Queensland, Australia.</p>
      </article>
    </>
  );
}
