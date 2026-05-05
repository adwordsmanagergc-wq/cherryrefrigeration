import { Shield, Award, Star, Clock, Zap } from "lucide-react";
import { business } from "@/lib/business";

export function TrustStrip() {
  const items: { icon: any; label: string }[] = [];
  if (business.qbcc) items.push({ icon: Shield, label: business.qbcc });
  if (business.arc) items.push({ icon: Award, label: business.arc });
  if (business.masterElectricians) items.push({ icon: Zap, label: "Master Electricians" });
  if (business.rating) items.push({ icon: Star, label: `${business.rating.value}★ • ${business.rating.count}+ reviews` });
  if (business.yearsInBusiness > 0) items.push({ icon: Clock, label: `${business.yearsInBusiness}+ yrs in business` });
  if (business.publicLiability) items.push({ icon: Shield, label: `PL Insurance ${business.publicLiability}` });

  if (items.length === 0) return null;

  return (
    <div className="bg-white border-y border-navy/10">
      <div className="container-x py-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs sm:text-sm">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-steel">
            <item.icon className="h-4 w-4 text-cherry shrink-0" />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
