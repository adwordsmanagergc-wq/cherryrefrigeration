import Link from "next/link";
import { industries } from "@/lib/industries";

export function IndustriesGrid({ heading = "Industries we serve" }: { heading?: string }) {
  return (
    <section className="container-x py-14 lg:py-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="badge-cherry">Industries</span>
        <h2 className="h2 mt-3">{heading}</h2>
        <p className="lede mt-2">Cold room engineering tuned for your industry's specific cold-chain needs.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((i) => (
          <Link key={i.slug} href={`/industries/${i.slug}`} className="card p-5 hover:bg-navy hover:text-white block group">
            <h3 className="font-display font-bold text-base group-hover:text-white">{i.name}</h3>
            <p className="text-xs text-steel group-hover:text-white/80 mt-1 line-clamp-2">{i.intro.slice(0, 90)}…</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
