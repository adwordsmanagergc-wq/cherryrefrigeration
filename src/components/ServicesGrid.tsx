import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { Reveal, RevealStagger, RevealChild } from "./Reveal";

export function ServicesGrid() {
  return (
    <section className="container-x py-14 lg:py-20">
      <Reveal className="text-center max-w-2xl mx-auto mb-10">
        <span className="badge-cherry">Our services</span>
        <h2 className="h2 mt-3">Refrigeration, electrical & air conditioning — under one licensed roof</h2>
      </Reveal>
      <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <RevealChild key={s.slug}>
            <Link href={`/services/${s.slug}`} className="card p-6 group block h-full">
              <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-cherry transition-colors">{s.shortTitle}</h3>
              <p className="text-sm text-steel leading-relaxed line-clamp-3">{s.intro}</p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-cherry">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </RevealChild>
        ))}
      </RevealStagger>
    </section>
  );
}
