import { ClipboardList, PencilRuler, Hammer, Truck, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Free site assessment",
    copy: "Keith comes on-site, measures the space, asks about your stock, throughput and growth — and walks you through what's possible.",
  },
  {
    icon: PencilRuler,
    title: "2. Custom design + fixed quote",
    copy: "Within 24 business hours you get CAD floor plans, refrigeration sizing, electrical scope and a single fixed-price number — no nasty surprises.",
  },
  {
    icon: Hammer,
    title: "3. Panel manufacture",
    copy: "Australian-made EPS or PIR panels manufactured to your design, with custom doors, glass and stainless skins as specified.",
  },
  {
    icon: Truck,
    title: "4. On-site install",
    copy: "Cherry's in-house crew handles panels, refrigeration and electrical end-to-end. After-hours and overnight installs available.",
  },
  {
    icon: BadgeCheck,
    title: "5. Commissioning + handover",
    copy: "Pull-down test, refrigerant leak check, electrical Certificate of Test, HACCP-ready logbook and a 30-day free tune-up booked in.",
  },
];

export function ProcessSteps() {
  return (
    <section className="container-x py-14 lg:py-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="badge-cherry">Our process</span>
        <h2 className="h2 mt-3">Site visit to commissioning, in 5 clear steps</h2>
        <p className="lede mt-2">Every Cherry Refrigeration cold room install follows the same proven process — with you in the loop the whole way.</p>
      </div>
      <ol className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
        {steps.map((s) => (
          <li key={s.title} className="card p-6 relative">
            <div className="h-11 w-11 rounded-lg bg-navy/5 grid place-items-center mb-4">
              <s.icon className="h-5 w-5 text-cherry" />
            </div>
            <h3 className="font-display font-bold text-navy mb-2">{s.title}</h3>
            <p className="text-sm text-steel leading-relaxed">{s.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
