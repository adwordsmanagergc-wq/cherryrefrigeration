// Back-compat shim: all business data now lives in ./siteConfig. Existing
// imports of `business`, `tel`, `mailto` still work.
import { siteConfig } from "./siteConfig";

export const business = {
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  acn: siteConfig.acn,
  abn: siteConfig.abn,
  founder: siteConfig.founder,
  phone: siteConfig.phone,
  phoneIntl: siteConfig.phoneIntl,
  email: siteConfig.email,
  url: siteConfig.siteUrl,
  qbcc: siteConfig.qbccLicence,
  arc: siteConfig.arcLicence,
  masterElectricians: siteConfig.masterElectricians,
  publicLiability: siteConfig.publicLiability,
  yearsInBusiness: siteConfig.yearsInBusiness,
  rating: siteConfig.rating,
  address: siteConfig.address,
  geo: siteConfig.geo,
  hours: siteConfig.hours,
  emergencyHours: "24/7 emergency breakdown response",
  social: {
    facebook: siteConfig.facebook,
    instagram: siteConfig.instagram,
    google: siteConfig.gbpUrl,
  },
  serviceAreas: siteConfig.serviceAreas,
  suppliers: siteConfig.suppliers,
};

export const tel = `tel:${siteConfig.phoneIntl}`;
export const mailto = `mailto:${siteConfig.email}`;
