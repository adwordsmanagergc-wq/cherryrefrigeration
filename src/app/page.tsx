import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServicesGrid } from "@/components/ServicesGrid";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { LocationsGrid } from "@/components/LocationsGrid";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { Testimonials } from "@/components/Testimonials";
import { SupplierStrip } from "@/components/SupplierStrip";
import { CTASection } from "@/components/CTASection";
import { PricingTable } from "@/components/PricingTable";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero
        h1="Cold Room Installation Brisbane — Custom Built and Energy-Efficient"
        sub="Cherry Refrigeration designs, manufactures and installs commercial cold rooms across Brisbane and SE Queensland. Free fixed-price quote within 24 hours."
      />
      <Benefits />
      <ProcessSteps />
      <SupplierStrip />

      <section className="container-x py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge-cherry">Transparent pricing</span>
            <h2 className="h2 mt-3">Cold room installation cost in Brisbane</h2>
            <p className="lede mt-3">
              Most refrigeration companies hide pricing — we don't. Here's a real range for a Brisbane cold room install
              in 2025, from a small cafe walk-in through to industrial-scale combi rooms.
            </p>
            <Link href="/cost-guide/cold-room-installation-cost-brisbane" className="btn-outline mt-6">
              Read the full cost guide
            </Link>
          </div>
          <PricingTable />
        </div>
      </section>

      <ServicesGrid />
      <IndustriesGrid />
      <ProjectsGallery limit={6} />
      <Testimonials />
      <LocationsGrid />
      <CTASection />
    </>
  );
}
