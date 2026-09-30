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
  /** Alternate schema names (used in JSON-LD alternateName) */
  alternateNames?: string[];
};

export const services: Service[] = [
  {
    slug: "cool-room-installation-brisbane",
    shortTitle: "Cool Room Installation",
    title: "Cool Room Installation Brisbane",
    h1: "Cool Room Installation Brisbane",
    metaTitle: "Cool Room Installation Brisbane | Custom Built",
    metaDescription:
      "Custom cool room installation in Brisbane. Fixed price quote in 24 hours, licensed refrigeration and electrical scope. Call Keith 0432 115 513.",
    intro:
      "Cherry Refrigeration designs, manufactures and installs commercial cool rooms (also called cold rooms) across Brisbane and South East Queensland. Every install is custom built to your floor plan, quoted on site and delivered by our in-house licensed crew.",
    bullets: [
      "Custom built to your exact floor plan",
      "Energy efficient 100mm or 150mm EPS or PIR panels",
      "Fully licensed refrigeration and electrical scope",
      "Fixed price quote within 24 hours of measure up",
      "Typical 2 week turnaround from sign off",
      "Workmanship warranty in writing on every install",
    ],
    body: [],
    faqs: [],
    related: ["cool-room-repairs-brisbane", "freezer-room-installation-brisbane", "cool-room-doors-brisbane"],
    alternateNames: ["Cold Room Installation Brisbane", "Coolroom Installation Brisbane", "Walk-in Cool Room Installation Brisbane"],
  },
  {
    slug: "cool-room-repairs-brisbane",
    shortTitle: "Cool Room Repairs",
    title: "Cool Room Repairs Brisbane",
    h1: "Cool Room Repairs Brisbane, Same-Day Response",
    metaTitle: "Cool Room Repairs Brisbane | 24/7 Same-Day",
    metaDescription:
      "Cool room not cooling? Same-day Brisbane response, 24/7 emergency line, all brands. Fixed diagnostic and repair. Call 0432 115 513.",
    intro:
      "When a cool room (also called a cold room) stops cooling, every hour costs you stock. Cherry Refrigeration responds same-day across Greater Brisbane and runs a 24/7 emergency line for total breakdowns. We diagnose, source parts and repair on the first visit wherever possible.",
    bullets: [
      "Same-day response across Greater Brisbane",
      "24/7 emergency breakdown line",
      "All makes and brands serviced",
      "Refrigerant leak detection and repair",
      "Compressor, condenser and evaporator overhauls",
      "HACCP-compliant logbook records every visit",
    ],
    body: [],
    faqs: [],
    related: ["cool-room-maintenance-brisbane", "commercial-refrigeration-brisbane", "cool-room-installation-brisbane"],
    alternateNames: ["Cold Room Repairs Brisbane", "Coolroom Repairs Brisbane"],
  },
  {
    slug: "cool-room-design-brisbane",
    shortTitle: "Cool Room Design",
    title: "Cool Room Design Brisbane",
    h1: "Cool Room Design Brisbane",
    metaTitle: "Cool Room Design Brisbane | CAD & Heat Load",
    metaDescription:
      "Cool room design in Brisbane. CAD plans, heat load calcs, refrigerant sizing, energy efficient engineering. Free site assessment. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration produces detailed CAD drawings, heat load calculations and refrigerant sizing for every cool room we install. Whether you are fitting a tight tenancy or a 200m² distribution chiller, we engineer the room to your stock, throughput and energy targets.",
    bullets: [
      "On-site measure up and CAD floor plan",
      "AS 1731-compliant heat load calculations",
      "Refrigerant and condenser sizing to Queensland climate",
      "Door placement, traffic flow and shelving layout",
      "Council and landlord submission drawings",
      "Energy efficient design: typical 25 to 40% running cost savings",
    ],
    body: [],
    faqs: [],
    related: ["cool-room-installation-brisbane", "freezer-room-installation-brisbane", "cool-room-doors-brisbane"],
    alternateNames: ["Cold Room Design Brisbane", "Coolroom Design Brisbane"],
  },
  {
    slug: "cool-room-doors-brisbane",
    shortTitle: "Cool Room Doors",
    title: "Custom Cool Room Doors Brisbane",
    h1: "Custom Cool Room Doors Brisbane",
    metaTitle: "Cool Room Doors Brisbane | Hinged, Sliding, Seals",
    metaDescription:
      "Custom cool room doors, seals, hinges and strip curtains fitted across Brisbane. Made to measure, fitted in days. Call 0432 115 513.",
    intro:
      "Doors are the most failure prone part of any cool room. Cherry Refrigeration manufactures and installs custom hinged, sliding and double action cool room doors built for Queensland conditions, with seal kits and self closing hardware that actually last.",
    bullets: [
      "Hinged, sliding and double action doors",
      "Glass view inspection windows on request",
      "Stainless and powder coated frames",
      "Heavy duty traffic doors and PVC strip curtains",
      "Replacement seals, hinges and heater wires",
      "Fitted within 5 to 10 business days of measure up",
    ],
    body: [],
    faqs: [],
    related: ["cool-room-installation-brisbane", "cool-room-repairs-brisbane", "cool-room-maintenance-brisbane"],
    alternateNames: ["Cold Room Doors Brisbane", "Cool Room Door Seals Brisbane"],
  },
  {
    slug: "freezer-room-installation-brisbane",
    shortTitle: "Freezer Room Installation",
    title: "Freezer Room Installation Brisbane",
    h1: "Freezer Room Installation Brisbane",
    metaTitle: "Freezer Room Installation Brisbane | -18°C to -25°C",
    metaDescription:
      "Custom freezer room installation in Brisbane. -18°C to -25°C, 150mm panels, energy efficient. Free fixed price quote. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration builds high performance freezer rooms across Brisbane for butchers, seafood distributors, ice cream makers and cold storage operators. Every freezer room is engineered for stable -18°C to -25°C operation, with 150mm panels, heated door frames and pump down refrigeration designed for Queensland summers.",
    bullets: [
      "150mm high density EPS or PIR panels",
      "Heated frames, sills and pressure relief vents",
      "Low temperature compressors sized for Queensland ambient",
      "Pump down circuits to protect compressors",
      "Anti condensation door heater wires",
      "Combi cool room and freezer configurations",
    ],
    body: [],
    faqs: [],
    related: ["cool-room-installation-brisbane", "commercial-refrigeration-brisbane", "cool-room-design-brisbane"],
    alternateNames: ["Cold Storage Freezer Brisbane", "Walk-in Freezer Installation Brisbane"],
  },
  {
    slug: "commercial-refrigeration-brisbane",
    shortTitle: "Commercial Refrigeration",
    title: "Commercial Refrigeration Brisbane",
    h1: "Commercial Refrigeration Brisbane",
    metaTitle: "Commercial Refrigeration Brisbane | Install & Repair",
    metaDescription:
      "Commercial refrigeration installation, service and repair across Brisbane. Cool rooms, display fridges, glycol systems. Call 0432 115 513.",
    intro:
      "From single deck display fridges to full glycol based supermarket racks, Cherry Refrigeration delivers commercial refrigeration installation, scheduled servicing and breakdown response across South East Queensland.",
    bullets: [
      "Display fridges, drink fridges and bain-maries",
      "Glycol and direct expansion plant",
      "Remote condensing unit installations",
      "Refrigerant retrofits (R22, R404A to low GWP)",
      "Scheduled HACCP-compliant servicing",
      "Energy audits and efficiency upgrades",
    ],
    body: [],
    faqs: [],
    related: ["cool-room-installation-brisbane", "cool-room-repairs-brisbane", "cool-room-maintenance-brisbane"],
    alternateNames: ["Commercial Fridge Repairs Brisbane", "Refrigeration Contractor Brisbane"],
  },
  {
    slug: "air-conditioning-installation-brisbane",
    shortTitle: "Air Conditioning Installation",
    title: "Air Conditioning Installation Brisbane",
    h1: "Air Conditioning Installation Brisbane",
    metaTitle: "Air Conditioning Installation Brisbane | Split & Ducted",
    metaDescription:
      "Air conditioning installation in Brisbane. Split, multi-head and ducted systems. Licensed refrigeration and electrical. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration installs split, multi head and ducted air conditioning across Brisbane homes, offices and commercial sites. Because we are licensed in both refrigeration and electrical, the install is start to finish: wiring, isolators, condensate and commissioning included.",
    bullets: [
      "Split, multi head and inverter ducted systems",
      "Premium brand installs by request",
      "Heat load sizing (no square metre guesses)",
      "Single trade install (electrical + refrigeration)",
      "Tenancy friendly bracket and condensate options",
      "Manufacturer warranty registration on every install",
    ],
    body: [],
    faqs: [],
    related: ["air-conditioning-repair-brisbane", "electrical-installation-brisbane", "commercial-refrigeration-brisbane"],
  },
  {
    slug: "air-conditioning-repair-brisbane",
    shortTitle: "Air Conditioning Repair",
    title: "Air Conditioning Repair Brisbane",
    h1: "Air Conditioning Repair Brisbane",
    metaTitle: "Air Conditioning Repair Brisbane | Same-Day Service",
    metaDescription:
      "Air conditioner not cooling? Same-day AC repair across Brisbane. All brands, all systems. Honest fixed quotes. Call 0432 115 513.",
    intro:
      "Air conditioner blowing warm, tripping the breaker, or leaking water? Cherry Refrigeration technicians diagnose and repair split, multi head and ducted systems across Brisbane, usually within the same day.",
    bullets: [
      "Same-day Brisbane response",
      "All makes and brands",
      "Refrigerant top up and leak repair",
      "PCB, sensor and fan motor replacements",
      "Drain line clearing and pump replacement",
      "Honest fixed quote before any work",
    ],
    body: [],
    faqs: [],
    related: ["air-conditioning-installation-brisbane", "cool-room-repairs-brisbane", "electrical-installation-brisbane"],
  },
  {
    slug: "electrical-installation-brisbane",
    shortTitle: "Electrical Installation",
    title: "Electrical Installation Brisbane",
    h1: "Electrical Installation & Repairs Brisbane",
    metaTitle: "Electrical Installation Brisbane | Licensed",
    metaDescription:
      "Licensed electrical installation and repairs across Brisbane. Three-phase, switchboards, sub-mains, commercial fitouts. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration's in-house licensed electricians handle every spark of an installation: three-phase mains, switchboards, isolators, sub-circuits and commercial kitchen fitouts. One trade, one quote, one warranty.",
    bullets: [
      "Three-phase mains and sub-main upgrades",
      "Switchboard installs and RCD compliance",
      "Commercial kitchen and refrigeration circuits",
      "Lighting, power and data fitouts",
      "Fault finding and Certificate of Test",
      "Full insurance and licensing on every job",
    ],
    body: [],
    faqs: [],
    related: ["air-conditioning-installation-brisbane", "commercial-refrigeration-brisbane", "cool-room-installation-brisbane"],
  },
  {
    slug: "cool-room-maintenance-brisbane",
    shortTitle: "Cool Room Maintenance",
    title: "Cool Room Maintenance Brisbane",
    h1: "Cool Room Maintenance Brisbane",
    metaTitle: "Cool Room Maintenance Brisbane | HACCP Logbooks",
    metaDescription:
      "Scheduled cool room maintenance across Brisbane. HACCP-compliant servicing, breakdown prevention, energy savings. Call 0432 115 513.",
    intro:
      "Most cool room failures are preventable. Cherry Refrigeration's scheduled maintenance plans catch refrigerant leaks, dirty condensers and worn seals before they take your room down, and we leave a HACCP-ready logbook entry every visit.",
    bullets: [
      "Quarterly, biannual or monthly visit plans",
      "Refrigerant pressure and superheat checks",
      "Condenser and evaporator coil cleaning",
      "Door seal, hinge and heater wire inspection",
      "HACCP-compliant logbook records",
      "Priority response for service plan customers",
    ],
    body: [],
    faqs: [],
    related: ["cool-room-repairs-brisbane", "commercial-refrigeration-brisbane", "cool-room-installation-brisbane"],
    alternateNames: ["Cold Room Maintenance Brisbane", "Coolroom Servicing Brisbane"],
  },
  {
    slug: "cool-room-regas-refrigerant-leak-repair-brisbane",
    shortTitle: "Cool Room Regas & Leaks",
    title: "Cool Room Regas & Refrigerant Leak Repair Brisbane",
    h1: "Cool Room Regas and Refrigerant Leak Repair Brisbane",
    metaTitle: "Cool Room Regas & Leak Repair Brisbane | Cherry Refrigeration",
    metaDescription:
      "Cool room refrigerant leak detection and regas across Brisbane. ARC licensed, all gases including R448A, R449A, R454C. Call 0432 115 513.",
    intro:
      "Refrigerant leaks are the number one hidden cost in a cool room. Cherry Refrigeration finds them fast with electronic leak detectors, repairs them properly, and regasses with the correct low-GWP refrigerant for your plant.",
    bullets: [
      "Electronic leak detection on flare joints, brazes and coils",
      "Full pressure test and vacuum before recharge",
      "Low-GWP regas: R448A, R449A, R454C, R513A",
      "Legacy retrofits: R22, R404A, R134a",
      "Documented gas log for HACCP and ARC compliance",
      "ARC licensed refrigerant handling on every visit",
    ],
    body: [],
    faqs: [],
    related: ["cool-room-repairs-brisbane", "cool-room-maintenance-brisbane", "commercial-refrigeration-brisbane"],
    alternateNames: ["Cold Room Regas Brisbane", "Refrigerant Leak Repair Brisbane"],
  },
  {
    slug: "cool-room-door-seal-replacement-brisbane",
    shortTitle: "Cool Room Door Seals",
    title: "Cool Room Door Seal Replacement Brisbane",
    h1: "Cool Room Door Seal Replacement Brisbane",
    metaTitle: "Cool Room Door Seal Replacement Brisbane | Cherry Refrigeration",
    metaDescription:
      "Cool room door seal replacement in Brisbane. Every common profile in stock. Same-day fit on scheduled visits. Call 0432 115 513.",
    intro:
      "Door seals are the cheapest part of your cool room and the biggest source of energy loss when they fail. Cherry Refrigeration carries seals for every common Australian door profile and fits replacements on scheduled visits within days.",
    bullets: [
      "Every common Australian seal profile in stock",
      "Hinged, sliding and heated freezer door seals",
      "30 minute fit time on standard doors",
      "Anti-condensation heater wire replacement",
      "Free 30 second door seal test on any service visit",
      "Optional door and frame audit as part of a service plan",
    ],
    body: [],
    faqs: [],
    related: ["cool-room-doors-brisbane", "cool-room-maintenance-brisbane", "cool-room-repairs-brisbane"],
    alternateNames: ["Cold Room Door Seal Replacement Brisbane"],
  },
  {
    slug: "commercial-fridge-repairs-brisbane",
    shortTitle: "Commercial Fridge Repairs",
    title: "Commercial Fridge Repairs Brisbane",
    h1: "Commercial Fridge Repairs Brisbane",
    metaTitle: "Commercial Fridge Repairs Brisbane | All Brands",
    metaDescription:
      "Commercial fridge, display cabinet and drink fridge repairs in Brisbane. All brands, same day response, ARC licensed. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration services and repairs commercial fridges, display cabinets, bain-maries and drink fridges across Brisbane. Every make, every brand, ARC licensed, same day response where possible.",
    bullets: [
      "Display fridges, drink fridges and bain-maries",
      "Same-day Brisbane response",
      "All makes and imported brands",
      "PCB, controller, fan motor and evaporator repairs",
      "Refrigerant leak detection and low-GWP retrofit",
      "HACCP-ready logbook entry every visit",
    ],
    body: [],
    faqs: [],
    related: ["commercial-refrigeration-brisbane", "cool-room-repairs-brisbane", "cool-room-maintenance-brisbane"],
    alternateNames: ["Commercial Refrigerator Repairs Brisbane", "Display Fridge Repairs Brisbane"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

// Legacy slug -> new slug map, used by next.config redirects and any places
// that historically referenced the old value.
export const legacyServiceSlugMap: Record<string, string> = {
  "cold-room-installation-brisbane": "cool-room-installation-brisbane",
  "cold-room-repairs-brisbane": "cool-room-repairs-brisbane",
  "coldroom-design-brisbane": "cool-room-design-brisbane",
  "custom-cold-room-doors-brisbane": "cool-room-doors-brisbane",
  "cold-room-maintenance-brisbane": "cool-room-maintenance-brisbane",
};
