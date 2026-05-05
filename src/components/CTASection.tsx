import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { business, tel } from "@/lib/business";

export function CTASection({ heading = "Get a fixed-price quote within 24 hours", sub }: { heading?: string; sub?: string }) {
  return (
    <section className="bg-navy text-white">
      <div className="container-x py-14 lg:py-20 grid lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">{heading}</h2>
          <p className="text-white/80 mt-3 text-lg">
            {sub ||
              "Tell Keith what you need. We'll send you a fixed-price quote within 24 business hours — no obligations, no chasing."}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
          <Link href="/get-a-quote" className="btn-primary text-base">
            Get My Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={tel} className="btn-outline border-white text-white hover:bg-white hover:text-navy text-base">
            <Phone className="h-4 w-4" /> Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
