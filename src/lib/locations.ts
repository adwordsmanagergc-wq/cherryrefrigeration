export type Location = {
  slug: string;
  city: string;
  region: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  nearbySuburbs: string[];
  responseTime: string;
  sampleProject: { title: string; copy: string };
  geo: { lat: number; lng: number };
};

export const locations: Location[] = [
  {
    slug: "brisbane-cbd",
    city: "Brisbane CBD",
    region: "Inner Brisbane",
    h1: "Cold Room Installation in Brisbane CBD",
    metaTitle: "Cold Room Installation Brisbane CBD | Cherry Refrigeration",
    metaDescription:
      "Custom cold room installation in Brisbane CBD. Tenancy-friendly, after-hours installs, QBCC licensed. Free quote in 24 hours. Call 0432 115 513.",
    intro:
      "Brisbane CBD installs come with a unique mix of constraints — tower loading docks, after-hours-only access, strict body-corporate rules and tenancies that already share power. Cherry Refrigeration handles all of it routinely, with night-shift install crews and tenancy-compliant fitout drawings.",
    nearbySuburbs: ["Spring Hill", "Fortitude Valley", "South Brisbane", "Kangaroo Point", "Milton"],
    responseTime: "Same-day breakdown response, 24/7 emergency line",
    sampleProject: {
      title: "Hotel kitchen cold room, Queen Street",
      copy: "Twin walk-in chillers (3.6m × 2.4m and 2.4m × 1.8m) installed across two overnight shifts in a 30-storey tower. Goods-lift booking, body corp permits and tenancy drawings handled in-house.",
    },
    geo: { lat: -27.4698, lng: 153.0251 },
  },
  {
    slug: "gold-coast",
    city: "Gold Coast",
    region: "Gold Coast",
    h1: "Cold Room Installation on the Gold Coast",
    metaTitle: "Cold Room Installation Gold Coast | Cherry Refrigeration",
    metaDescription:
      "Custom cold rooms, freezer rooms and commercial refrigeration on the Gold Coast. Brisbane-based, 5-year warranty. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration covers the Gold Coast week in, week out — from Coomera and Helensvale down to Burleigh, Palm Beach and Coolangatta. Coastal climate matters: we spec corrosion-resistant condensers and stainless cabinets on every coastal install.",
    nearbySuburbs: ["Surfers Paradise", "Broadbeach", "Burleigh Heads", "Robina", "Coomera"],
    responseTime: "Same-day Gold Coast service, weekly Tuesday & Thursday route",
    sampleProject: {
      title: "Beachfront cafe cold room, Burleigh Heads",
      copy: "2.4m × 2.0m walk-in chiller with marine-grade condenser and stainless skin panels. Salt-air corrosion warranty 5 years. Installed in 8 days.",
    },
    geo: { lat: -28.0167, lng: 153.4 },
  },
  {
    slug: "ipswich",
    city: "Ipswich",
    region: "Western Brisbane",
    h1: "Cold Room Installation in Ipswich",
    metaTitle: "Cold Room Installation Ipswich | Cherry Refrigeration",
    metaDescription:
      "Custom cold rooms and refrigeration in Ipswich. Brisbane-based, fixed quotes, 5-year warranty. Call 0432 115 513.",
    intro:
      "From Booval to Springfield Lakes and out to Rosewood, Cherry Refrigeration installs and services cold rooms across Ipswich. Local trade, statewide capability — and we don't tack on a regional surcharge.",
    nearbySuburbs: ["Springfield Lakes", "Booval", "Goodna", "Bundamba", "Yamanto"],
    responseTime: "Same-day for breakdowns, 24-hour quote turnaround",
    sampleProject: {
      title: "RSL kitchen cold room, Booval",
      copy: "5m × 3m combi cool/freezer room with 100mm and 150mm panels respectively. Three-phase install and rewire of bain-marie circuits in a single 4-day shutdown.",
    },
    geo: { lat: -27.6171, lng: 152.7608 },
  },
  {
    slug: "logan",
    city: "Logan",
    region: "South Brisbane",
    h1: "Cold Room Installation in Logan",
    metaTitle: "Cold Room Installation Logan | Cherry Refrigeration",
    metaDescription:
      "Custom cold rooms, freezer rooms and air conditioning in Logan. QBCC licensed, fixed quotes. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration installs cold rooms across Logan — Springwood, Beenleigh, Underwood, Browns Plains and out to Jimboomba. Industrial estates, retail tenancies and restaurant fitouts, all covered.",
    nearbySuburbs: ["Springwood", "Beenleigh", "Underwood", "Browns Plains", "Jimboomba"],
    responseTime: "Same-day Logan response Mon–Sat",
    sampleProject: {
      title: "Asian grocer cold room, Springwood",
      copy: "4m × 3m glass-front display chiller plus a back-of-house 6m × 3m walk-in. Phased install over 5 days with no trading interruption.",
    },
    geo: { lat: -27.6395, lng: 153.1085 },
  },
  {
    slug: "redlands",
    city: "Redlands",
    region: "Bayside",
    h1: "Cold Room Installation in Redland City",
    metaTitle: "Cold Room Installation Redlands | Cherry Refrigeration",
    metaDescription:
      "Custom cold rooms and refrigeration across the Redlands. Cleveland, Capalaba, Victoria Point. Free quote. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration covers Redland City weekly — Cleveland, Capalaba, Victoria Point, Wellington Point and the bay islands. Coastal-spec components on every install, and we'll quote North Stradbroke Island jobs without batting an eye.",
    nearbySuburbs: ["Cleveland", "Capalaba", "Victoria Point", "Wellington Point", "Birkdale"],
    responseTime: "Same-day Redlands response, ferry-arranged for SIBI/NSI",
    sampleProject: {
      title: "Seafood retailer, Cleveland",
      copy: "3m × 2.5m chiller and 3m × 2.5m freezer room with 316 stainless skins, trough drains and oversized condenser for coastal humidity.",
    },
    geo: { lat: -27.5267, lng: 153.2675 },
  },
  {
    slug: "moreton-bay",
    city: "Moreton Bay",
    region: "North Brisbane",
    h1: "Cold Room Installation in Moreton Bay Region",
    metaTitle: "Cold Room Installation Moreton Bay | Cherry Refrigeration",
    metaDescription:
      "Custom cold rooms and refrigeration in Moreton Bay. North Lakes, Caboolture, Redcliffe. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration runs a North Brisbane / Moreton Bay route covering North Lakes, Caboolture, Redcliffe, Strathpine and Bribie Island. From cafe walk-ins to industrial freezer rooms, we install and service the whole region.",
    nearbySuburbs: ["North Lakes", "Caboolture", "Redcliffe", "Strathpine", "Bribie Island"],
    responseTime: "Same-day Moreton Bay response Mon–Fri",
    sampleProject: {
      title: "Bakery freezer room, North Lakes",
      copy: "3m × 2.4m -20°C freezer room for dough and finished goods, with heated frame and pump-down circuit. Installed in 6 days, commissioned overnight.",
    },
    geo: { lat: -27.2294, lng: 153.0265 },
  },
  {
    slug: "sunshine-coast",
    city: "Sunshine Coast",
    region: "Sunshine Coast",
    h1: "Cold Room Installation on the Sunshine Coast",
    metaTitle: "Cold Room Installation Sunshine Coast | Cherry Refrigeration",
    metaDescription:
      "Custom cold rooms and refrigeration on the Sunshine Coast. Maroochydore, Noosa, Caloundra. Call 0432 115 513.",
    intro:
      "Cherry Refrigeration runs Sunshine Coast routes weekly — Maroochydore, Noosa, Caloundra, Mooloolaba and the hinterland. Coastal-grade install spec, statewide reach, no regional surcharges.",
    nearbySuburbs: ["Maroochydore", "Noosa", "Caloundra", "Mooloolaba", "Buderim"],
    responseTime: "Sunshine Coast service Tue & Thu, same-day breakdown for plan customers",
    sampleProject: {
      title: "Hinterland brewery cold store, Maleny",
      copy: "Insulated 8m × 4m keg cold store with marine-grade condenser, plus glycol loop to four fermenters. Installed during a 5-day brew shutdown.",
    },
    geo: { lat: -26.65, lng: 153.0667 },
  },
  {
    slug: "toowoomba",
    city: "Toowoomba",
    region: "Darling Downs",
    h1: "Cold Room Installation in Toowoomba",
    metaTitle: "Cold Room Installation Toowoomba | Cherry Refrigeration",
    metaDescription:
      "Custom cold rooms in Toowoomba and the Darling Downs. Plant sized for the climate range. Call 0432 115 513.",
    intro:
      "Toowoomba's range climate — frost mornings to 35°C summer afternoons — demands properly sized refrigeration. Cherry Refrigeration travels weekly to Toowoomba and the Downs with the right plant for the climate, every time.",
    nearbySuburbs: ["Highfields", "Drayton", "Wilsonton", "Kearneys Spring", "Glenvale"],
    responseTime: "Weekly Toowoomba route, 24-hour breakdown response",
    sampleProject: {
      title: "Butcher cold room, Wilsonton",
      copy: "4m × 3m carcass chiller with twin rails and 0.5°C set point, plus 3m × 3m -22°C freezer room. Plant sized for the local 38°C summer ambient.",
    },
    geo: { lat: -27.5598, lng: 151.9507 },
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
