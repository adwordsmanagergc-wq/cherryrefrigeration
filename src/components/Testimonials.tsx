// Reviews are intentionally not rendered until real Google Business Profile
// reviews are wired in. Faking testimonials is misleading and (for star
// ratings in JSON-LD) a Google rich-results policy violation.
//
// To enable: pull reviews from the Google Places API (or paste verified
// review copy from the live GBP), populate `reviews` below, and re-export.

type Review = { name: string; business: string; quote: string };
const reviews: Review[] = [];

export function Testimonials() {
  if (reviews.length === 0) return null;
  return null;
}
