import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations } from "@/lib/locations";

export function LocationsGrid() {
  return (
    <section className="bg-ice border-y border-navy/10">
      <div className="container-x py-14 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge-cherry">Service areas</span>
          <h2 className="h2 mt-3">Brisbane and South East Queensland-wide</h2>
          <p className="lede mt-2">Same-day breakdown response across Greater Brisbane. Weekly routes to the Coast and Toowoomba.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((l) => (
            <Link key={l.slug} href={`/locations/${l.slug}`} className="card p-5 flex items-start gap-3 group">
              <MapPin className="h-5 w-5 text-cherry shrink-0 mt-1" />
              <div>
                <div className="font-display font-bold text-navy group-hover:text-cherry">{l.city}</div>
                <div className="text-xs text-steel mt-1">{l.region}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
