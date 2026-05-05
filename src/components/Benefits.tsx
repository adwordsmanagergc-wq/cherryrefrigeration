import { Wrench, Zap, Clock, ShieldCheck, Award, PhoneCall } from "lucide-react";

const items = [
  { icon: Wrench, title: "Custom-built to your space", copy: "Every cold room is engineered to fit your tenancy — corner pieces, awkward walls, low ceilings, no problem." },
  { icon: Zap, title: "Energy-efficient panels", copy: "100mm and 150mm high-density EPS or PIR. Combined with EC-fan evaporators and inverter condensers, typically 25–40% cheaper to run." },
  { icon: Clock, title: "Fast 2-week turnaround", copy: "From sign-off to commissioning in 7–14 working days for most fitouts. Industrial scale on a documented timeline." },
  { icon: ShieldCheck, title: "Refrigeration + electrical in one team", copy: "Master Electricians and ARC-licensed refrigeration mechanics under one roof. One trade, one quote, one warranty." },
  { icon: Award, title: "5-year workmanship warranty", copy: "Full manufacturer warranty registration on compressors, condensers and evaporators — plus our own 5-year workmanship cover." },
  { icon: PhoneCall, title: "24/7 emergency support", copy: "Live emergency line for total breakdowns, with same-day response across Greater Brisbane." },
];

export function Benefits({ heading = "Why Brisbane operators choose Cherry Refrigeration" }: { heading?: string }) {
  return (
    <section className="container-x py-14 lg:py-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="badge-cherry">Why Cherry</span>
        <h2 className="h2 mt-3">{heading}</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="card p-6">
            <div className="h-11 w-11 rounded-lg bg-cherry/10 grid place-items-center mb-4">
              <item.icon className="h-5 w-5 text-cherry" />
            </div>
            <h3 className="font-display font-bold text-navy mb-2">{item.title}</h3>
            <p className="text-sm text-steel leading-relaxed">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
