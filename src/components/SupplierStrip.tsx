import { business } from "@/lib/business";

export function SupplierStrip() {
  if (!business.suppliers || business.suppliers.length === 0) return null;
  return (
    <section className="bg-white border-y border-navy/10">
      <div className="container-x py-8">
        <div className="text-xs uppercase tracking-widest text-steel text-center mb-5">Trusted equipment partners</div>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 items-center">
          {business.suppliers.map((s) => (
            <div key={s} className="font-display text-xl sm:text-2xl text-navy/70 font-bold tracking-tight">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
