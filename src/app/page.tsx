import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServicesGrid } from "@/components/ServicesGrid";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { LocationsGrid } from "@/components/LocationsGrid";
import { CoverageMap } from "@/components/CoverageMap";
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
            <span className="badge-cherry">Cold room sizing</span>
            <h2 className="h2 mt-3">Typical Brisbane cold room sizes</h2>
            <p className="lede mt-3">
              Every cold room is custom-built and custom-quoted — here's a quick size and temperature reference for
              the rooms we install most often across Brisbane and SE Queensland.
            </p>
            <Link href="/cost-guide/cold-room-installation-cost-brisbane" className="btn-outline mt-6">
              What affects your quote
            </Link>
          </div>
          <PricingTable />
        </div>
      </section>

      <ServicesGrid />
      <IndustriesGrid />
      <ProjectsGallery limit={6} />
      <Testimonials />
      <CoverageMap />
      <LocationsGrid />
      <CTASection />
    </>
  );
}
