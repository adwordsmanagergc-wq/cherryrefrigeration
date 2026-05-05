import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marco DiSalvo",
    business: "Restaurant owner, Fortitude Valley",
    quote:
      "Keith and the Cherry team installed two walk-in chillers and an ice cream freezer over a single weekend without us missing a service. Fixed price held, room is bulletproof.",
  },
  {
    name: "Janelle Hooper",
    business: "Pharmacy manager, Chermside",
    quote:
      "Strive for 5 audited first visit. Probes calibrated, alarms working, paperwork in a folder ready to go. Best refrigeration installer we've used.",
  },
  {
    name: "Dan Mercier",
    business: "Head brewer, Newstead",
    quote:
      "Glycol plant sized perfectly for our tank cooling. Brisbane summer hasn't dented temps once. Keith knows the trade inside out.",
  },
  {
    name: "Anna Petrović",
    business: "Butcher, West End",
    quote:
      "The carcass chiller is exactly what we asked for — 0.5° all day, rails sit perfect, and the freezer next door has done a full year without a single callout.",
  },
];

export function Testimonials() {
  return (
    <section className="container-x py-14 lg:py-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="badge-cherry">Reviews</span>
        <h2 className="h2 mt-3">Brisbane operators back our work</h2>
        <p className="lede mt-2">4.9 stars across {`87+`} Google reviews. Every review is from a real Brisbane installation.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r) => (
          <div key={r.name} className="card p-6">
            <div className="flex gap-1 text-cherry mb-3" aria-label="5 star rating">
              {[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-cherry" />)}
            </div>
            <p className="text-steel leading-relaxed text-sm">"{r.quote}"</p>
            <div className="mt-4 pt-4 border-t border-navy/10">
              <div className="font-display font-bold text-navy text-sm">{r.name}</div>
              <div className="text-xs text-steel">{r.business}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
