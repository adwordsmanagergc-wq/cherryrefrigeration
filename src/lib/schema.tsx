import { business } from "./business";
import { services } from "./services";

export function localBusinessSchema() {
  const sameAs = [business.social.facebook, business.social.instagram, business.social.google].filter(Boolean);
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${business.url}#business`,
    name: business.name,
    legalName: business.legalName,
    image: `${business.url}/images/cherry-refrigeration-logo.png`,
    logo: `${business.url}/images/cherry-refrigeration-logo.png`,
    url: business.url,
    telephone: business.phoneIntl,
    email: business.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postcode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: business.serviceAreas.map((a) => ({ "@type": "City", name: a })),
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
      name: "Refrigeration & Electrical Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, url: `${business.url}/services/${s.slug}` },
      })),
    },
  };
  if (sameAs.length) schema.sameAs = sameAs;
  // aggregateRating intentionally omitted — only emit when real Google review
  // data is wired in. Faking it is a Google rich-results policy violation.
  if (business.rating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
    };
  }
  return schema;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: business.url,
    logo: `${business.url}/images/cherry-refrigeration-logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phoneIntl,
      contactType: "customer service",
      areaServed: "AU",
      availableLanguage: "en",
    },
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    provider: { "@type": "HVACBusiness", name: business.name, url: business.url },
    areaServed: { "@type": "City", name: opts.area || "Brisbane" },
    url: `${business.url}/services/${opts.slug}`,
  };
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
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    author: { "@type": "Person", name: opts.author },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: { "@type": "ImageObject", url: `${business.url}/images/cherry-refrigeration-logo.png` },
    },
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
