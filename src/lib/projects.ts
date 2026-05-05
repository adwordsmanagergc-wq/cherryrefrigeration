export type Project = {
  slug: string;
  title: string;
  industry: string;
  suburb: string;
  size: string;
  summary: string;
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "modern-italian-fortitude-valley",
    title: "Modern Italian Restaurant — Twin Walk-In Chillers",
    industry: "Restaurants & Cafes",
    suburb: "Fortitude Valley",
    size: "3.6m × 2.4m + 2.4m × 1.8m + freezer",
    summary: "Twin walk-in chillers and -20°C ice cream freezer commissioned overnight to keep service uninterrupted.",
    details: [
      "Twin chillers: 4°C, 100mm panels, EC-fan evaporators",
      "Ice cream freezer: -20°C, 150mm panels, pump-down circuit",
      "Body corp permits, goods-lift booking and tenancy drawings handled in-house",
      "Installed across 9 days; commissioning completed overnight",
    ],
  },
  {
    slug: "south-brisbane-butcher-carcass-chiller",
    title: "Family Butcher — Carcass Chiller & Freezer Room",
    industry: "Butchers",
    suburb: "West End",
    size: "Carcass chiller 4m × 3m + freezer 3m × 3m",
    summary: "Carcass-rail chiller with engineer-certified rails and matching -22°C freezer, HACCP-signed first visit.",
    details: [
      "Twin rails, 35 kg/m capacity, 0.5°C set point",
      "Stainless cove skirtings, graded epoxy floor, trough drain",
      "150mm freezer panels with heated frame and pump-down",
      "11 working days install + HACCP sign-off",
    ],
  },
  {
    slug: "paddington-florist-display-chiller",
    title: "Boutique Florist — Glass-Front Display Chiller",
    industry: "Florists",
    suburb: "Paddington",
    size: "3.0m × 2.0m",
    summary: "Glass-front display cold room with humidifier and powder-coated bronze frames matched to shopfit.",
    details: [
      "4°C / 90% RH twin-evaporator design",
      "Heated double-glazed display doors",
      "Ultrasonic humidifier integrated to control",
      "Bronze powder-coated frames colour-matched to shopfit",
    ],
  },
  {
    slug: "chermside-medical-vaccine-coldroom",
    title: "Medical Centre — Vaccine-Grade Cold Room",
    industry: "Pharmacy & Medical",
    suburb: "Chermside",
    size: "2.4m × 2.0m",
    summary: "Dual-redundant 2–8°C vaccine cold room with NATA-calibrated probes and SMS alarming. Strive for 5 audited.",
    details: [
      "Twin refrigeration with auto fail-over",
      "UPS-backed control circuit with battery alarm",
      "NATA-calibrated probes and digital data logger",
      "SMS + email escalation paths",
    ],
  },
  {
    slug: "carindale-grocer-combi-room",
    title: "Independent Grocer — Combi Cool/Freezer & Glycol Plant",
    industry: "Supermarkets & Grocers",
    suburb: "Carindale",
    size: "8m × 4m combi room + 12 display cases",
    summary: "Combi room with shared plant, glycol loop to display cases. Cut energy bills 31% year-on-year.",
    details: [
      "4°C cool zone + -20°C freezer zone in one envelope",
      "Glycol loop to 12 front-of-house display cases",
      "R448A low-GWP refrigerant",
      "Phased install over consecutive Tuesday nights — zero trading lost",
    ],
  },
  {
    slug: "newstead-brewery-glycol-keg-store",
    title: "Craft Brewery — Glycol Plant & Keg Cold Store",
    industry: "Breweries & Distilleries",
    suburb: "Newstead",
    size: "30 kW glycol + 8m × 6m × 3.6m keg store",
    summary: "Glycol chiller with buffer, large-format keg store and rapid cold-crash evaporator for brite tanks.",
    details: [
      "30 kW glycol chiller with 1,500 L buffer tank",
      "8m × 6m × 3.6m insulated keg cold store",
      "Brite-tank rapid cold-crash evaporator",
      "Installed during a 6-day brew shutdown",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
