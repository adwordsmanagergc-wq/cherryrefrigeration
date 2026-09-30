import { Shield, Award, Star, FileCheck } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

// Renders only when at least one credential is populated in siteConfig.
// Kept intentionally lightweight so it can sit on any service or repairs page
// without dominating the layout.
export function LicensedInsuredStrip() {
  const items: { icon: any; label: string }[] = [];
  if (siteConfig.qbccLicence) items.push({ icon: Shield, label: `QBCC ${siteConfig.qbccLicence}` });
  if (siteConfig.arcLicence) items.push({ icon: FileCheck, label: `ARC ${siteConfig.arcLicence}` });
  if (siteConfig.electricalLicence) items.push({ icon: Shield, label: `Electrical ${siteConfig.electricalLicence}` });
  if (siteConfig.masterElectricians) items.push({ icon: Award, label: siteConfig.masterElectricians });
  if (siteConfig.publicLiability) items.push({ icon: Shield, label: `PL insurance ${siteConfig.publicLiability}` });
  if (siteConfig.rating) items.push({ icon: Star, label: `${siteConfig.rating.value}★ · ${siteConfig.rating.count} Google reviews` });
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
