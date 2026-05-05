export type Industry = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  pains: string[];
  solutions: string[];
  caseStudy: { title: string; suburb: string; copy: string };
};

export const industries: Industry[] = [
  {
    slug: "restaurants-cafes",
    name: "Restaurants & Cafes",
    h1: "Cold Rooms & Refrigeration for Brisbane Restaurants and Cafes",
    metaTitle: "Restaurant Cold Rooms Brisbane | Cherry Refrigeration",
    metaDescription:
      "Cold rooms, walk-in chillers and commercial fridges built for Brisbane restaurants and cafes. Tenancy-friendly, HACCP compliant. Call 0432 115 513.",
    intro:
      "Brisbane restaurants and cafes work to tight tenancies, tighter timelines and zero tolerance for stock loss. Cherry Refrigeration designs cold rooms that fit awkward kitchens, hold prep temps through 35°C summer days, and stay quiet enough not to upset the dining room.",
    pains: [
      "Tight kitchen footprints with no straight walls",
      "Power supply already at capacity",
      "Strict landlord and council fitout requirements",
      "Service interruptions during operating hours",
      "HACCP records the auditor actually accepts",
    ],
    solutions: [
      "Custom L-shape and corner cold rooms to use every inch",
      "Energy-efficient inverter condensers that work on existing power",
      "Tenancy-compliant penetrations, drains and condensate runs",
      "After-hours installs and overnight commissioning",
      "Digital temperature logging integrated with your HACCP plan",
    ],
    caseStudy: {
      title: "Modern Italian, James Street",
      suburb: "Fortitude Valley",
      copy: "Twin walk-in chillers (3.6m × 2.4m and 2.4m × 1.8m) plus a -20°C ice cream freezer fitted in 9 days, commissioned overnight to avoid a single lost service.",
    },
  },
  {
    slug: "butchers",
    name: "Butchers",
    h1: "Cold Rooms for Brisbane Butchers — HACCP-Ready, Built for Carcass Hanging",
    metaTitle: "Butcher Cold Rooms Brisbane | Cherry Refrigeration",
    metaDescription:
      "Carcass cold rooms, ageing chambers and freezer rooms for Brisbane butchers. Rail systems, drainage, HACCP compliant. Call 0432 115 513.",
    intro:
      "Butcher cold rooms aren't shop fridges. Cherry Refrigeration designs and installs carcass-rated chillers, dry-ageing chambers and -25°C freezer rooms across Brisbane and South East Queensland — with the rail systems, fall-to-drain floors and humidity control your operation actually needs.",
    pains: [
      "Carcass weight on rails and supporting beams",
      "Humidity drift causing surface drying or slime",
      "Fall-to-drain floor for wash-down compliance",
      "Maintaining 0–2°C through summer heatwaves",
      "Rapid blast chilling for fresh-killed product",
    ],
    solutions: [
      "Engineer-certified rail and beam systems",
      "Humidity-managed dry ageing chambers (2°C / 80% RH)",
      "Stainless cove skirtings and graded epoxy floors",
      "Oversized condensers spec'd for 38°C ambient",
      "Blast chiller add-ons matched to your kill cycle",
    ],
    caseStudy: {
      title: "Family Butcher, South Brisbane",
      suburb: "West End",
      copy: "Carcass chiller with twin rails, 35 kg/m capacity, 0.5°C set point, plus matching -22°C freezer room. Installed and HACCP-signed-off in 11 working days.",
    },
  },
  {
    slug: "florists",
    name: "Florists",
    h1: "Florist Cold Rooms Brisbane — Humidity-Controlled Display Chillers",
    metaTitle: "Florist Cold Rooms Brisbane | Cherry Refrigeration",
    metaDescription:
      "Glass-front florist cold rooms with humidity control. Custom built for Brisbane florists. Free quote. Call 0432 115 513.",
    intro:
      "Cut flowers don't want a fridge — they want 4°C and 90% humidity, with airflow that doesn't blast petals dry. Cherry Refrigeration builds glass-front florist cold rooms tuned exactly for this, with even airflow and humidifier integration as standard.",
    pains: [
      "Standard cold rooms drying out flower stems",
      "Uneven airflow wilting back-row stock",
      "Glass doors fogging over before the morning rush",
      "Footprint constraints inside small retail tenancies",
      "Aesthetic mismatch with shopfit",
    ],
    solutions: [
      "Twin-evaporator design for even, gentle airflow",
      "Integrated ultrasonic humidifiers (85–95% RH)",
      "Heated, anti-fog double-glazed display doors",
      "Powder-coated frames colour-matched to shopfit",
      "Compact corner footprints from 2m × 1.5m",
    ],
    caseStudy: {
      title: "Boutique Florist, Paddington",
      suburb: "Paddington",
      copy: "3.0m × 2.0m glass-front display cold room at 4°C / 90% RH with ultrasonic humidifier and powder-coated bronze frames to match the shopfit. Installed in 7 days.",
    },
  },
  {
    slug: "pharmacy-medical",
    name: "Pharmacy & Medical",
    h1: "Pharmacy & Medical Cold Rooms Brisbane — TGA & Vaccine-Grade Storage",
    metaTitle: "Pharmacy Cold Rooms Brisbane | Vaccine Storage | Cherry Refrigeration",
    metaDescription:
      "TGA-compliant pharmacy and vaccine cold rooms. 2–8°C, alarms, data logging. Brisbane installation. Call 0432 115 513.",
    intro:
      "Pharmacy and medical cold storage has to hold 2–8°C, alarm on excursion and document every minute. Cherry Refrigeration installs vaccine-grade cold rooms across Brisbane with redundant refrigeration, calibrated probes and data logging that satisfies TGA and Strive for 5 audits.",
    pains: [
      "Single point of failure on existing fridges",
      "TGA audit trail and probe calibration",
      "Power outage exposure to vaccines",
      "Tight 2–8°C window with no warm or freezer excursions",
      "Alarms staff actually hear out of hours",
    ],
    solutions: [
      "Dual redundant refrigeration with auto fail-over",
      "NATA-calibrated probes and digital data logger",
      "UPS-backed control circuit and battery alarm",
      "Tight ±0.5°C control with anti-freeze logic",
      "SMS and email alarm escalation paths",
    ],
    caseStudy: {
      title: "Medical Centre Cold Room, Chermside",
      suburb: "Chermside",
      copy: "2.4m × 2.0m vaccine-grade cold room with twin refrigeration, UPS controls, calibrated probes and SMS alarming. Strive for 5 audited and signed off first visit.",
    },
  },
  {
    slug: "supermarkets-grocers",
    name: "Supermarkets & Grocers",
    h1: "Supermarket & Grocer Cold Rooms Brisbane — Coolrooms, Display Cases & Glycol Plant",
    metaTitle: "Supermarket Cold Rooms Brisbane | Cherry Refrigeration",
    metaDescription:
      "Coolrooms, freezer rooms, display cases and glycol plant for Brisbane supermarkets and grocers. 24/7 service. Call 0432 115 513.",
    intro:
      "Supermarkets live or die on uptime. Cherry Refrigeration installs and services back-of-house cold rooms, freezer rooms, glycol plant and front-of-house display cases for independent grocers and small-format chains across Brisbane.",
    pains: [
      "Multiple temperature zones in one back room",
      "Display case run-outs during peak trade",
      "High running cost from older R404A plant",
      "Shutdown windows that can only happen overnight",
      "Compliance documentation for store managers",
    ],
    solutions: [
      "Combi cool/freezer rooms with shared plant",
      "Glycol-loop refrigeration for stable display temps",
      "Low-GWP refrigerant retrofits (R448A, R449A)",
      "Overnight install and commissioning crews",
      "Monthly service plans with photo reports",
    ],
    caseStudy: {
      title: "Independent Grocer, Carindale",
      suburb: "Carindale",
      copy: "Combi 4°C / -20°C back-of-house room (8m × 4m), glycol loop to 12 display cases, R448A refrigerant. Cut running costs 31% year-on-year.",
    },
  },
  {
    slug: "breweries-distilleries",
    name: "Breweries & Distilleries",
    h1: "Brewery & Distillery Cold Rooms Brisbane — Fermentation, Cold Crash & Keg Storage",
    metaTitle: "Brewery Cold Rooms Brisbane | Cherry Refrigeration",
    metaDescription:
      "Glycol chillers, fermentation cold rooms and keg storage for Brisbane breweries and distilleries. Custom engineered. Call 0432 115 513.",
    intro:
      "Beer is just chemistry on a clock. Cherry Refrigeration builds glycol-cooled fermentation chambers, cold-crash rooms and large-format keg cold stores for Brisbane breweries and distilleries — engineered for the heat loads your tanks actually pull.",
    pains: [
      "Glycol loop sizing for tank cooling jackets",
      "Fast cold crash from 18°C to 2°C",
      "Heat rejection from large condenser banks in summer",
      "Insulated keg and brite-tank storage",
      "Hose, drain and CIP integration",
    ],
    solutions: [
      "Custom glycol chiller plant with buffer tanks",
      "High-capacity evaporators for rapid cold crash",
      "Acoustic-treated outdoor condenser plant",
      "150mm panel keg stores with insulated floors",
      "Stainless penetrations for CIP and gas lines",
    ],
    caseStudy: {
      title: "Craft Brewery, Newstead",
      suburb: "Newstead",
      copy: "30 kW glycol chiller with 1,500 L buffer, 8m × 6m × 3.6m keg cold store, and rapid-crash evap on the brite-tank. Installed during a 6-day brew shutdown.",
    },
  },
  {
    slug: "seafood-distributors",
    name: "Seafood Distributors",
    h1: "Seafood Cold Rooms & Freezer Rooms Brisbane — Built for the Cold Chain",
    metaTitle: "Seafood Cold Rooms Brisbane | Cherry Refrigeration",
    metaDescription:
      "Seafood cold rooms, blast freezers and -25°C freezer rooms in Brisbane. Stainless, drained, HACCP ready. Call 0432 115 513.",
    intro:
      "Seafood needs cold chain that doesn't blink. Cherry Refrigeration builds 0–2°C ice rooms, -25°C freezer rooms and blast freezers for Brisbane wholesalers and distributors, with stainless skins and graded floors built to wash down twice a day.",
    pains: [
      "Constant wash-down corroding panel skins",
      "Drainage and ice-melt management",
      "Holding -22°C in a Queensland summer",
      "Blast chilling fresh catch within HACCP limits",
      "Roller-door traffic causing temp excursions",
    ],
    solutions: [
      "316 stainless skin panels and stainless cove",
      "Graded epoxy floors with trough drains",
      "150mm panels, oversized low-temp condensers",
      "Blast freezer cells from -35°C",
      "Rapid-roll insulated traffic doors with strip curtains",
    ],
    caseStudy: {
      title: "Seafood Wholesaler, Rocklea",
      suburb: "Rocklea",
      copy: "10m × 8m -22°C freezer room with stainless skin and trough drainage, plus a 3-tonne blast freezer cell at -35°C. Held temp through the 2024 February heatwave.",
    },
  },
  {
    slug: "cold-storage-logistics",
    name: "Cold Storage & Logistics",
    h1: "Cold Storage & Logistics Cold Rooms Brisbane — Distribution-Scale Refrigeration",
    metaTitle: "Cold Storage Brisbane | 3PL Cold Rooms | Cherry Refrigeration",
    metaDescription:
      "Distribution-scale cold rooms and freezer rooms for Brisbane 3PLs and cold storage operators. Racking-ready, energy-efficient. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration designs and installs distribution-scale cold rooms and freezer rooms for Brisbane 3PLs, importers and cold-chain operators — from 100 m² to 1,500 m², racking-ready, with energy-efficient plant sized for 24/7 operation.",
    pains: [
      "Forklift traffic damaging panels and doors",
      "Energy bills dominating P&L",
      "Throughput dock doors causing temperature drift",
      "Racking integration and panel reinforcement",
      "Compliance with cold-chain audits (HACCP, BRC)",
    ],
    solutions: [
      "Forklift-rated bollards and panel protectors",
      "Variable-speed plant and EC fans for energy savings",
      "Air-curtained dock doors and fast-roll doors",
      "Engineer-signed racking integration",
      "BRC and HACCP-ready documentation pack",
    ],
    caseStudy: {
      title: "3PL Cold Store, Eagle Farm",
      suburb: "Eagle Farm",
      copy: "1,200 m² combi facility with 600 m² of -22°C, 600 m² of 2°C, racking integration and EC-fan evaporators. 27% energy reduction vs the previous facility.",
    },
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
