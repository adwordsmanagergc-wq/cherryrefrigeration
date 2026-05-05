import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy | Cherry Refrigeration",
  description: "Privacy policy for Cherry Refrigeration.",
  alternates: { canonical: `${business.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy", href: "/privacy" }]} />
      <article className="container-x py-14 max-w-prose mx-auto prose-rich">
        <h1 className="h1 mb-6">Privacy Policy</h1>
        <p className="text-steel">Last updated: 1 January 2025</p>
        <p className="text-steel mt-6">Cherry Refrigeration ({business.legalName}, ACN {business.acn}) respects your privacy and is committed to handling your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</p>

        <h2 className="h3 mt-8 mb-3">What we collect</h2>
        <p className="text-steel">When you contact us or request a quote, we collect your name, phone number, email address, business name and the details of the work you've asked us to scope. If you upload photos via our quote form, we store them with the quote.</p>

        <h2 className="h3 mt-8 mb-3">How we use it</h2>
        <p className="text-steel">We use your information solely to respond to your enquiry, scope and deliver work, and follow up on related matters. We do not sell or share your information with third parties for marketing.</p>

        <h2 className="h3 mt-8 mb-3">Cookies and analytics</h2>
        <p className="text-steel">We use Google Analytics to understand site usage. Analytics data is aggregated and does not identify individual users. We use Cloudflare Turnstile on our forms to prevent spam.</p>

        <h2 className="h3 mt-8 mb-3">Storage and security</h2>
        <p className="text-steel">Quote requests and customer records are stored on encrypted cloud services within Australia and the EU. We retain data for as long as is reasonably necessary for the purposes outlined above.</p>

        <h2 className="h3 mt-8 mb-3">Access and correction</h2>
        <p className="text-steel">You can request access to or correction of your personal information at any time by emailing {business.email}.</p>

        <h2 className="h3 mt-8 mb-3">Contact</h2>
        <p className="text-steel">Privacy queries: {business.email} or {business.phone}.</p>
      </article>
    </>
  );
}
