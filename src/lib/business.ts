// Cherry Refrigeration — single source of truth for business facts.
//
// VERIFIED (provided by Keith Cherry / the brief):
//   - Business name, owner, phone, email, ACN, service areas
//
// UNVERIFIED — DO NOT POPULATE WITH PLACEHOLDERS.
// Set these only with values pulled from the relevant public register
// or a certificate of currency. Empty strings are intentional — components
// hide the credential row when the value is empty.
//
//   QBCC licence:           https://my.qbcc.qld.gov.au/s/qbcc-licensee-register
//   ARC RTA licence:        https://www.arctick.org/find-a-technician
//   Master Electricians:    https://www.masterelectricians.com.au/find-an-electrician
//   Public liability:       from Keith's certificate of currency
//   Years in business:      from ASIC registration date for ACN 665 634 024
//   Google rating / count:  from the live Google Business Profile

export const business = {
  name: "Cherry Refrigeration",
  legalName: "Cherry Refrigeration Pty Ltd",
  acn: "665 634 024",
  founder: "Keith Cherry",
  phone: "0432 115 513",
  phoneIntl: "+61432115513",
  email: "service@cherryrefrigeration.com.au",
  url: "https://cherryrefrigeration.com.au",

  // --- Unverified credentials. Leave empty until confirmed against the register. ---
  qbcc: "",
  arc: "",
  masterElectricians: "",
  publicLiability: "",
  yearsInBusiness: 0,
  // Google rating: leave null until pulled from the live GBP.
  rating: null as null | { value: number; count: number },

  address: {
    street: "",
    locality: "Brisbane",
    region: "QLD",
    postcode: "",
    country: "AU",
  },
  geo: { lat: -27.4698, lng: 153.0251 },
  hours: [
    { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], opens: "07:00", closes: "17:00" },
    { days: ["Sat"], opens: "08:00", closes: "13:00" },
  ],
  emergencyHours: "24/7 emergency breakdown response",
  social: {
    // TODO: confirm these handles before linking from the footer.
    facebook: "",
    instagram: "",
    google: "",
  },
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
  // TODO: only list suppliers Cherry Refrigeration is actually a registered installer for.
  suppliers: [] as string[],
};

export const tel = `tel:${business.phoneIntl}`;
export const mailto = `mailto:${business.email}`;
