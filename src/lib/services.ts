export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  bullets: string[];
  body: { heading: string; copy: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "cold-room-installation-brisbane",
    shortTitle: "Cold Room Installation",
    title: "Cold Room Installation Brisbane",
    h1: "Cold Room Installation Brisbane — Custom Built and Energy-Efficient",
    metaTitle: "Cold Room Installation Brisbane | Cherry Refrigeration",
    metaDescription:
      "Custom cold room installation in Brisbane. Fixed-price quote within 24 hours, 24/7 emergency line. Call Keith on 0432 115 513.",
    intro:
      "Brisbane custom cold room installer. Cherry Refrigeration designs, manufactures and installs commercial cold rooms across Brisbane, the Gold Coast and South East Queensland.",
    bullets: [
      "Custom-built to your exact floor plan",
      "Energy-efficient 100mm/150mm EPS panels",
      "Fully licensed refrigeration and electrical scope",
      "Fixed-price quote within 24 hours",
      "Typical 2-week turnaround from sign-off",
      "Workmanship warranty (terms confirmed in your quote)",
    ],
    body: [],
    faqs: [],
    related: ["cold-room-repairs-brisbane", "freezer-room-installation-brisbane", "custom-cold-room-doors-brisbane"],
  },
  {
    slug: "cold-room-repairs-brisbane",
    shortTitle: "Cold Room Repairs",
    title: "Cold Room Repairs Brisbane",
    h1: "Cold Room Repairs Brisbane — Same-Day Response, 24/7 Emergency",
    metaTitle: "Cold Room Repairs Brisbane | 24/7 Emergency | Cherry Refrigeration",
    metaDescription:
      "Cold room not cooling? Cherry Refrigeration responds same-day across Brisbane. 24/7 emergency repairs, all brands. Call 0432 115 513.",
    intro:
      "When your cold room stops cooling, every hour costs you stock. Cherry Refrigeration responds same-day across Brisbane and runs a 24/7 emergency line for total breakdowns. We diagnose, source parts and repair on the first visit wherever possible.",
    bullets: [
      "Same-day response across Greater Brisbane",
      "24/7 emergency breakdown line",
      "All makes and brands serviced",
      "Refrigerant leak detection and repair",
      "Compressor, condenser, evaporator overhauls",
      "Compliant logbook records for HACCP",
    ],
    body: [],
    faqs: [],
    related: ["cold-room-maintenance-brisbane", "commercial-refrigeration-brisbane", "cold-room-installation-brisbane"],
  },
  {
    slug: "coldroom-design-brisbane",
    shortTitle: "Cold Room Design",
    title: "Cold Room Design Brisbane",
    h1: "Cold Room Design Brisbane — Custom Engineering for Your Space",
    metaTitle: "Cold Room Design Brisbane | Cherry Refrigeration",
    metaDescription:
      "Bespoke cold room design in Brisbane. CAD drawings, heat-load calcs, energy-efficient engineering. Free site assessment. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration produces detailed CAD drawings, heat-load calculations and refrigerant sizing for every cold room we install. Whether you're fitting a tight tenancy or building a 200m² distribution chiller, we engineer the room to your stock, throughput and energy targets.",
    bullets: [
      "On-site measure-up and CAD floor plan",
      "AS 1731-compliant heat-load calculations",
      "Refrigerant and condenser sizing to climate",
      "Door placement, traffic flow and shelving layout",
      "Council and landlord submission drawings",
      "Energy-efficient design — typical 25–40% running cost savings",
    ],
    body: [],
    faqs: [],
    related: ["cold-room-installation-brisbane", "freezer-room-installation-brisbane", "custom-cold-room-doors-brisbane"],
  },
  {
    slug: "custom-cold-room-doors-brisbane",
    shortTitle: "Custom Cold Room Doors",
    title: "Custom Cold Room Doors Brisbane",
    h1: "Custom Cold Room Doors Brisbane — Hinged, Sliding & Strip Curtains",
    metaTitle: "Custom Cold Room Doors Brisbane | Cherry Refrigeration",
    metaDescription:
      "Custom cold room doors in Brisbane — hinged, sliding, glass-view, strip curtains. Made-to-measure, fitted in days. Call 0432 115 513.",
    intro:
      "Doors are the most failure-prone part of any cold room. Cherry Refrigeration manufactures and installs custom hinged, sliding and double-action cold room doors built for Queensland conditions, with seal kits and self-closing hardware that actually last.",
    bullets: [
      "Hinged, sliding and double-action doors",
      "Glass-view inspection windows on request",
      "Stainless and powder-coated frames",
      "Heavy-duty traffic doors and PVC strip curtains",
      "Replacement seals, hinges and heater wires",
      "Fitted within 5–10 business days of measure",
    ],
    body: [],
    faqs: [],
    related: ["cold-room-installation-brisbane", "cold-room-repairs-brisbane", "cold-room-maintenance-brisbane"],
  },
  {
    slug: "freezer-room-installation-brisbane",
    shortTitle: "Freezer Room Installation",
    title: "Freezer Room Installation Brisbane",
    h1: "Freezer Room Installation Brisbane — Built to -18°C and Below",
    metaTitle: "Freezer Room Installation Brisbane | Cherry Refrigeration",
    metaDescription:
      "Custom freezer room installation in Brisbane. -18°C to -25°C, 150mm panels, energy-efficient. Free fixed-price quote. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration builds high-performance freezer rooms across Brisbane for butchers, seafood distributors, ice cream makers and cold storage operators. Every freezer room is engineered for stable -18°C to -25°C operation, with 150mm panels, heated doorframes and pump-down refrigeration designed for Queensland summers.",
    bullets: [
      "150mm high-density EPS or PIR panels",
      "Heated frames, sills and pressure-relief vents",
      "Bitzer and Tecumseh low-temperature compressors",
      "Pump-down circuits to protect compressors",
      "Anti-condensation door heater wires",
      "Combi cool/freezer room configurations",
    ],
    body: [],
    faqs: [],
    related: ["cold-room-installation-brisbane", "commercial-refrigeration-brisbane", "coldroom-design-brisbane"],
  },
  {
    slug: "commercial-refrigeration-brisbane",
    shortTitle: "Commercial Refrigeration",
    title: "Commercial Refrigeration Brisbane",
    h1: "Commercial Refrigeration Brisbane — Install, Service & Repair",
    metaTitle: "Commercial Refrigeration Brisbane | Cherry Refrigeration",
    metaDescription:
      "Commercial refrigeration installation, service and repair across Brisbane. Cool rooms, display fridges, glycol systems. Call 0432 115 513.",
    intro:
      "From single-deck display fridges to full glycol-based supermarket racks, Cherry Refrigeration delivers commercial refrigeration installation, scheduled servicing and breakdown response across South East Queensland.",
    bullets: [
      "Display fridges, drink fridges and bain-maries",
      "Glycol and direct-expansion plant",
      "Remote condensing unit installations",
      "Refrigerant retrofits (R22, R404A → low-GWP)",
      "Scheduled HACCP-compliant servicing",
      "Energy audits and efficiency upgrades",
    ],
    body: [],
    faqs: [],
    related: ["cold-room-installation-brisbane", "cold-room-repairs-brisbane", "cold-room-maintenance-brisbane"],
  },
  {
    slug: "air-conditioning-installation-brisbane",
    shortTitle: "Air Conditioning Installation",
    title: "Air Conditioning Installation Brisbane",
    h1: "Air Conditioning Installation Brisbane — Split, Ducted & Commercial",
    metaTitle: "Air Conditioning Installation Brisbane | Cherry Refrigeration",
    metaDescription:
      "Air conditioning installation in Brisbane. Split, multi-head and ducted systems. Daikin, Mitsubishi, Fujitsu. Free quote. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration installs split, multi-head and ducted air conditioning across Brisbane homes, offices and commercial sites. Because we're licensed in both refrigeration and electrical, the install is start-to-finish — wiring, isolators, condensate and commissioning included.",
    bullets: [
      "Split, multi-head and inverter ducted systems",
      "Daikin, Mitsubishi Electric and Fujitsu",
      "Heat-load sizing — never over- or under-spec",
      "Single-trade install (electrical + refrigeration)",
      "Tenancy-friendly bracket and condensate options",
      "5–7 year manufacturer warranty registration",
    ],
    body: [],
    faqs: [],
    related: ["air-conditioning-repair-brisbane", "electrical-installation-brisbane", "commercial-refrigeration-brisbane"],
  },
  {
    slug: "air-conditioning-repair-brisbane",
    shortTitle: "Air Conditioning Repair",
    title: "Air Conditioning Repair Brisbane",
    h1: "Air Conditioning Repair Brisbane — Fast, Same-Day Service",
    metaTitle: "Air Conditioning Repair Brisbane | Cherry Refrigeration",
    metaDescription:
      "Air conditioner not cooling? Same-day AC repair across Brisbane. All brands, all systems. Honest fixed quotes. Call 0432 115 513.",
    intro:
      "Air conditioner blowing warm? Tripping the breaker? Leaking water? Cherry Refrigeration's technicians diagnose and repair split, multi-head and ducted systems across Brisbane — usually within the same day.",
    bullets: [
      "Same-day Brisbane response",
      "All makes and brands",
      "Refrigerant top-up and leak repair",
      "PCB, sensor and fan motor replacements",
      "Drain line clearing and pump replacement",
      "Honest fixed quote before any work",
    ],
    body: [],
    faqs: [],
    related: ["air-conditioning-installation-brisbane", "cold-room-repairs-brisbane", "electrical-installation-brisbane"],
  },
  {
    slug: "electrical-installation-brisbane",
    shortTitle: "Electrical Installation",
    title: "Electrical Installation Brisbane",
    h1: "Electrical Installation & Repairs Brisbane — Licensed Master Electricians",
    metaTitle: "Electrical Installation Brisbane | Cherry Refrigeration",
    metaDescription:
      "Licensed electrical installation and repairs across Brisbane. Three-phase, switchboards, sub-mains, commercial fitouts. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration's in-house Master Electricians handle every spark of an installation — three-phase mains, switchboards, isolators, sub-circuits and commercial kitchen fitouts. One trade, one quote, one warranty.",
    bullets: [
      "Three-phase mains and sub-main upgrades",
      "Switchboard installs and RCD compliance",
      "Commercial kitchen and refrigeration circuits",
      "Lighting, power and data fitouts",
      "Fault-finding and Certificate of Test",
      "Licensed in-house electrical scope on every install",
    ],
    body: [],
    faqs: [],
    related: ["air-conditioning-installation-brisbane", "commercial-refrigeration-brisbane", "cold-room-installation-brisbane"],
  },
  {
    slug: "cold-room-maintenance-brisbane",
    shortTitle: "Cold Room Maintenance",
    title: "Cold Room Maintenance Brisbane",
    h1: "Cold Room Maintenance Brisbane — Scheduled Servicing & HACCP Logbooks",
    metaTitle: "Cold Room Maintenance Brisbane | Cherry Refrigeration",
    metaDescription:
      "Scheduled cold room maintenance across Brisbane. HACCP-compliant servicing, breakdown prevention, energy savings. Call 0432 115 513.",
    intro:
      "Most cold room failures are preventable. Cherry Refrigeration's scheduled maintenance plans catch refrigerant leaks, dirty condensers and worn seals before they take your room down — and we leave a HACCP-ready logbook entry every visit.",
    bullets: [
      "Quarterly, biannual or monthly visit plans",
      "Refrigerant pressure and superheat checks",
      "Condenser and evaporator coil cleaning",
      "Door seal, hinge and heater wire inspection",
      "HACCP-compliant logbook records",
      "Priority response for service-plan customers",
    ],
    body: [],
    faqs: [],
    related: ["cold-room-repairs-brisbane", "commercial-refrigeration-brisbane", "cold-room-installation-brisbane"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
