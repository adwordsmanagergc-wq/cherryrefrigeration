import { locations, type Location } from "./locations";
import { services, type Service } from "./services";

// Which services get city-scoped pages. Only the highest-intent services get
// their own city URLs — that keeps content unique per page and avoids thin
// duplicate pages.
const CITY_SERVICE_SLUGS = [
  "cold-room-installation-brisbane",
  "cold-room-repairs-brisbane",
  "freezer-room-installation-brisbane",
] as const;

export type CityServiceCombo = {
  citySlug: string;
  serviceSlug: string;
  city: Location["city"];
  service: Service["shortTitle"];
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
};

// "cold-room-installation-brisbane" → "cold-room-installation"
function trimBrisbaneSuffix(slug: string): string {
  return slug.replace(/-brisbane$/, "");
}

function friendlyServiceName(service: Service) {
  return service.shortTitle;
}

export function getCityServiceCombos(): CityServiceCombo[] {
  return locations.flatMap((l) =>
    (CITY_SERVICE_SLUGS as readonly string[]).map((serviceSlug) => {
      const s = services.find((x) => x.slug === serviceSlug)!;
      const shortServiceSlug = trimBrisbaneSuffix(s.slug);
      const url = `/service-area/${l.slug}/${shortServiceSlug}`;
      const svc = friendlyServiceName(s);
      const h1 = `${svc} in ${l.city}`;
      return {
        citySlug: l.slug,
        serviceSlug: shortServiceSlug,
        city: l.city,
        service: svc,
        url,
        h1,
        metaTitle: `${svc} ${l.city} | Cherry Refrigeration`,
        metaDescription: `${svc} in ${l.city} and surrounds. ${l.responseTime}. Free fixed-price quote within 24 hours. Call Keith on 0432 115 513.`,
      };
    })
  );
}

export function getCityServiceCombo(citySlug: string, serviceSlug: string): { combo: CityServiceCombo; location: Location; service: Service } | null {
  const location = locations.find((l) => l.slug === citySlug);
  if (!location) return null;
  const service = services.find((s) => trimBrisbaneSuffix(s.slug) === serviceSlug);
  if (!service) return null;
  const combo = getCityServiceCombos().find((c) => c.citySlug === citySlug && c.serviceSlug === serviceSlug);
  if (!combo) return null;
  return { combo, location, service };
}

export const CITY_SERVICE_SLUG_LIST = CITY_SERVICE_SLUGS.map(trimBrisbaneSuffix);
