export const business = {
  name: "Cherry Refrigeration",
  legalName: "Cherry Refrigeration Pty Ltd",
  acn: "665 634 024",
  qbcc: "QBCC #15287310",
  arc: "ARC AU45821",
  masterElectricians: "Master Electricians Member #ME-77104",
  publicLiability: "$20,000,000",
  founder: "Keith Cherry",
  phone: "0432 115 513",
  phoneIntl: "+61432115513",
  email: "service@cherryrefrigeration.com.au",
  url: "https://cherryrefrigeration.com.au",
  yearsInBusiness: 15,
  rating: { value: 4.9, count: 87 },
  address: {
    street: "PO Box 312",
    locality: "Brisbane",
    region: "QLD",
    postcode: "4000",
    country: "AU",
  },
  geo: { lat: -27.4698, lng: 153.0251 },
  hours: [
    { days: ["Mon", "Tue", "Wed", "Thu", "Fri"], opens: "07:00", closes: "17:00" },
    { days: ["Sat"], opens: "08:00", closes: "13:00" },
  ],
  emergencyHours: "24/7 emergency breakdown response",
  social: {
    facebook: "https://www.facebook.com/cherryrefrigeration",
    instagram: "https://www.instagram.com/cherryrefrigeration",
    google: "https://g.page/cherryrefrigeration",
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
  suppliers: ["Bromic", "Tecumseh", "Bitzer", "Daikin", "Mitsubishi"],
};

export const tel = `tel:${business.phoneIntl}`;
export const mailto = `mailto:${business.email}`;
