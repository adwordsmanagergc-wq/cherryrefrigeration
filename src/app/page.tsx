import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServicesGrid } from "@/components/ServicesGrid";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { LocationsGrid } from "@/components/LocationsGrid";
import { CoverageMap } from "@/components/CoverageMap";
import { Testimonials } from "@/components/Testimonials";
import { SupplierStrip } from "@/components/SupplierStrip";
import { CTASection } from "@/components/CTASection";
import { PricingTable } from "@/components/PricingTable";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Cool Rooms, Refrigeration & Air Con Brisbane | Cherry Refrigeration",
  description:
    "Brisbane specialists in cool room installation, cool room repairs, freezer rooms, commercial refrigeration and AC. Free fixed price quote in 24 hours. Call 0432 115 513.",
  alternates: { canonical: siteConfig.siteUrl + "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Brisbane & South East Queensland"
        h1="Brisbane Cool Room & Refrigeration Specialists"
        sub="Cherry Refrigeration designs, installs and services cool rooms, freezer rooms, commercial refrigeration, air conditioning and electrical across Brisbane and SE Queensland. Custom built, licensed, fixed price quote in 24 hours."
      />
      <Benefits />
      <ProcessSteps />
      <SupplierStrip />

      <section className="container-x py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge-cherry">Cool room sizing</span>
            <h2 className="h2 mt-3">Typical Brisbane cool room sizes</h2>
            <p className="lede mt-3">
              Every cool room is custom built and custom quoted. Here is a quick size and temperature reference for
              the rooms we install most often across Brisbane and SE Queensland.
            </p>
            <Link href="/cost-guide/cool-room-installation-cost-brisbane" className="btn-outline mt-6">
              What affects your quote
            </Link>
          </div>
          <PricingTable />
        </div>
      </section>

      <ServicesGrid />
      <IndustriesGrid />
      <Testimonials />
      <CoverageMap />
      <LocationsGrid />
      <CTASection />
    </>
  );
}
