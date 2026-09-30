// -----------------------------------------------------------------------------
// Cherry Refrigeration site config: single source of truth for real business
// data. Every unverified value is a TODO(KEITH) placeholder. Components render
// credential / rating strips conditionally, so leaving a field empty simply
// hides that piece of UI. Do NOT put made-up numbers in here.
// -----------------------------------------------------------------------------

export const siteConfig = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://cherryrefrigeration.com.au",
  name: "Cherry Refrigeration",
  legalName: "Cherry Refrigeration Pty Ltd",
  founder: "Keith Cherry",

  // Contact
  phone: "0432 115 513",
  phoneIntl: "+61432115513",
  email: "service@cherryrefrigeration.com.au",

  // TODO(KEITH): confirm the ABN once ASIC / ABR is checked. ACN is 665 634 024.
  acn: "665 634 024",
  abn: "" as string,

  // Address: service-area business. If you want a street address on the schema
  // and footer, fill it in here. Empty values are omitted from JSON-LD.
  address: {
    // TODO(KEITH): street address (or leave empty for service-area only).
    street: "",
    locality: "Brisbane",
    region: "QLD",
    // TODO(KEITH): postcode.
    postcode: "",
    country: "AU",
  },
  geo: { lat: -27.4698, lng: 153.0251 },

  // Licences — leave empty until confirmed against the register.
  // Public register links:
  //   QBCC: https://my.qbcc.qld.gov.au/s/qbcc-licensee-register
  //   ARC:  https://www.arctick.org
  //   Electrical: https://www.epw.qld.gov.au/electricalsafety
  // TODO(KEITH): fill in the numbers below once verified.
  qbccLicence: "" as string,
  arcLicence: "" as string,
  electricalLicence: "" as string,
  masterElectricians: "" as string, // membership id if applicable
  publicLiability: "" as string, // e.g. "$20,000,000"
  yearsInBusiness: 0, // TODO(KEITH): confirm year business started

  // Google Business Profile / social
  // TODO(KEITH): confirm handles and URLs.
  gbpUrl: "" as string,
  facebook: "" as string,
  instagram: "" as string,
  linkedin: "" as string,

  // Reviews: only populate when connected to real GBP data. Never hard-code fake
  // reviews or an aggregate rating.
  rating: null as null | { value: number; count: number },

  // Hours (visible in schema and footer)
  hours: [
    { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], opens: "07:00", closes: "17:00" },
    { days: ["Sat"], opens: "08:00", closes: "13:00" },
  ],
  emergency247: true,

  serviceAreas: [
    "Brisbane",
    "Gold Coast",
    "Ipswich",
    "Logan",
    "Redlands",
    "Moreton Bay",
    "Sunshine Coast",
    "Toowoomba",
  ],

  // TODO(KEITH): confirm the supplier / brand list you're an installer for.
  suppliers: [] as string[],

  // Real projects Keith wants published. Detailed structure lives in
  // /src/lib/projects.ts. Until at least three are added, /projects renders as
  // noindex and is not in the sitemap.
  hasPublishedProjects: false as boolean,
};

// Convenience derivations
export const tel = `tel:${siteConfig.phoneIntl}`;
export const mailto = `mailto:${siteConfig.email}`;

// A flat list of every TODO in this file, generated at build time when needed.
// Used by scripts/todos to print a summary.
export const TODOS = [
  "ABN (ABR lookup)",
  "Street address + postcode (or confirm service-area only)",
  "QBCC licence number",
  "ARC refrigerant licence number",
  "Electrical contractor licence number",
  "Master Electricians membership number (if applicable)",
  "Public Liability insurance amount",
  "Year Cherry Refrigeration started trading",
  "Google Business Profile URL",
  "Facebook / Instagram / LinkedIn URLs",
  "Google review rating + review count (once GBP is linked)",
  "Supplier / brand list you're an authorised installer for",
  "First 3+ real projects for /projects (photos + write-ups)",
  "Real photos for hero + service pages + about page",
];
