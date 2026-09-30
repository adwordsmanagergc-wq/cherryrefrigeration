import { siteConfig } from "./siteConfig";
import { services } from "./services";

const url = () => siteConfig.siteUrl;

function nonEmptyAddress() {
  const a = siteConfig.address;
  const parts: Record<string, string> = {};
  if (a.street) parts.streetAddress = a.street;
  if (a.locality) parts.addressLocality = a.locality;
  if (a.region) parts.addressRegion = a.region;
  if (a.postcode) parts.postalCode = a.postcode;
  parts.addressCountry = a.country;
  return { "@type": "PostalAddress", ...parts };
}

export function localBusinessSchema() {
  const sameAs = [siteConfig.gbpUrl, siteConfig.facebook, siteConfig.instagram, siteConfig.linkedin].filter(Boolean);
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${url()}#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    image: `${url()}/images/cherry-refrigeration-logo.png`,
    logo: `${url()}/images/cherry-refrigeration-logo.png`,
    url: url(),
    telephone: siteConfig.phoneIntl,
    email: siteConfig.email,
    priceRange: "$$",
    address: nonEmptyAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    areaServed: siteConfig.serviceAreas.map((a) => ({ "@type": "City", name: a })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "13:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Refrigeration and Electrical Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          alternateName: s.alternateNames,
          url: `${url()}/services/${s.slug}`,
        },
      })),
    },
  };

  if (siteConfig.emergency247) {
    (schema.openingHoursSpecification as unknown[]).push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 emergency line for total breakdowns",
    });
  }

  if (siteConfig.abn) schema.taxID = siteConfig.abn;
  if (sameAs.length) schema.sameAs = sameAs;
  if (siteConfig.rating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
    };
  }
  return schema;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: url(),
    logo: `${url()}/images/cherry-refrigeration-logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneIntl,
      contactType: "customer service",
      areaServed: "AU",
      availableLanguage: "en",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url()}#website`,
    url: url(),
    name: siteConfig.name,
    inLanguage: "en-AU",
    publisher: { "@id": `${url()}#business` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  slug: string;
  area?: string;
  alternateName?: string[];
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${url()}#business` },
    areaServed: { "@type": "City", name: opts.area || "Brisbane" },
    url: `${url()}/${opts.slug.replace(/^\//, "")}`,
  };
  if (opts.alternateName?.length) schema.alternateName = opts.alternateName;
  return schema;
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.updated || opts.date,
    author: {
      "@type": "Person",
      name: opts.author,
      url: `${url()}/about`,
    },
    image: opts.image ? [opts.image] : [`${url()}/images/og-default.jpg`],
    publisher: { "@id": `${url()}#business` },
    mainEntityOfPage: opts.url,
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
