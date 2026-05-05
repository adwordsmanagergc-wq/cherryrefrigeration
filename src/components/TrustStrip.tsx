import { Shield, Award, Star, Clock, Zap } from "lucide-react";
import { business } from "@/lib/business";

export function TrustStrip() {
  const items = [
    { icon: Shield, label: business.qbcc },
    { icon: Award, label: business.arc },
    { icon: Zap, label: "Master Electricians" },
    { icon: Star, label: `${business.rating.value}★ • ${business.rating.count}+ reviews` },
    { icon: Clock, label: `${business.yearsInBusiness}+ yrs in business` },
    { icon: Shield, label: `PL Insurance ${business.publicLiability}` },
  ];
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
