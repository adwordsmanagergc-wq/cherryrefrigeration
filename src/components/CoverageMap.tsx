import Link from "next/link";
import { locations } from "@/lib/locations";
import { MapPin, Clock, Phone } from "lucide-react";
import { business, tel } from "@/lib/business";

// Rough visual positions (percentage x/y) on a stylised SE QLD map.
const points: Record<string, { x: number; y: number }> = {
  "brisbane-cbd": { x: 52, y: 55 },
  "gold-coast": { x: 62, y: 78 },
  ipswich: { x: 38, y: 56 },
  logan: { x: 55, y: 66 },
  redlands: { x: 62, y: 60 },
  "moreton-bay": { x: 50, y: 42 },
  "sunshine-coast": { x: 60, y: 25 },
  toowoomba: { x: 20, y: 55 },
};

export function CoverageMap() {
  return (
    <section className="bg-navy text-white">
      <div className="container-x py-14 lg:py-20 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-2">
          <span className="badge bg-white/10 text-frost border border-white/15">Service area</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">
            Servicing Brisbane, the Coast and the Downs
          </h2>
          <p className="text-white/85 mt-4 text-lg leading-relaxed">
            Cherry Refrigeration runs weekly routes across South East Queensland — same-day breakdown response
            across Greater Brisbane, and no regional surcharge to the Coast or Toowoomba.
          </p>
          <ul className="space-y-2 mt-6 text-sm text-white/85">
            <li className="flex gap-2"><Clock className="h-4 w-4 text-frost shrink-0 mt-0.5" /> Same-day Greater Brisbane response, 24/7 emergency line</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-frost shrink-0 mt-0.5" /> {locations.length} suburb service pages, with local install experience on each</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-frost shrink-0 mt-0.5" /> Talk to Keith direct: <a href={tel} className="underline underline-offset-2">{business.phone}</a></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="relative aspect-[4/3] rounded-2xl bg-navy-700 border border-white/10 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-700 to-navy-800" />
            {/* Water */}
            <svg viewBox="0 0 100 75" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
              {/* Coastline shading */}
              <defs>
                <linearGradient id="coast" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#0B1F3A" />
                  <stop offset="80%" stopColor="#0B1F3A" />
                  <stop offset="100%" stopColor="#04101f" />
                </linearGradient>
                <linearGradient id="ocean" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#0B1F3A" />
                  <stop offset="100%" stopColor="#0a1a30" />
                </linearGradient>
              </defs>
              {/* Rough SE QLD landmass */}
              <path
                d="M 5 15 Q 15 10 25 12 L 40 8 Q 55 5 65 12 L 68 20 Q 70 30 72 40 L 72 55 Q 70 65 65 72 L 55 74 Q 40 72 30 70 L 15 65 Q 5 55 5 40 Z"
                fill="url(#coast)"
                stroke="#A9D6E5"
                strokeOpacity="0.4"
                strokeWidth="0.4"
              />
              {/* Ocean overlay right side */}
              <rect x="72" y="0" width="28" height="75" fill="url(#ocean)" opacity="0.6" />
              {/* Grid dots */}
              {Array.from({ length: 12 }).map((_, i) =>
                Array.from({ length: 9 }).map((__, j) => (
                  <circle key={`${i}-${j}`} cx={5 + i * 8.5} cy={5 + j * 8} r="0.35" fill="#A9D6E5" opacity="0.15" />
                ))
              )}
            </svg>

            {/* Pins */}
            {locations.map((l) => {
              const p = points[l.slug];
              if (!p) return null;
              return (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="absolute -translate-x-1/2 -translate-y-full group"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  aria-label={l.city}
                >
                  <span className="block relative">
                    <span className="absolute -inset-3 rounded-full bg-cherry/25 blur animate-pulse" aria-hidden />
                    <span className="relative flex flex-col items-center">
                      <span className="h-3 w-3 rounded-full bg-cherry ring-2 ring-white shadow-lg" />
                      <span className="mt-1 whitespace-nowrap text-[10px] sm:text-xs font-display font-bold text-white bg-navy/80 px-1.5 py-0.5 rounded border border-white/10 group-hover:bg-cherry transition-colors">
                        {l.city}
                      </span>
                    </span>
                  </span>
                </Link>
              );
            })}

            {/* Compass */}
            <div className="absolute top-3 right-3 text-frost/70 text-[10px] font-bold tracking-widest">SE QLD</div>
          </div>
        </div>
      </div>
    </section>
  );
}
