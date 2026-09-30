# SEO overhaul: audit + TODOs

This is the summary Keith asked for at the end of the 13-section SEO brief.
It lives here (not in `README.md`) so it stays in git and can be diffed on
future rounds. Numbers below are approximate main-content word counts, so
they exclude header, footer and sticky-nav chrome.

## Page inventory

| URL | Title | H1 | ~Words | Schema | Indexable |
|---|---|---|---|---|---|
| `/` | Cool Rooms, Refrigeration & Air Con Brisbane | Cherry Refrigeration | Brisbane Cool Room & Refrigeration Specialists | 900 | HVACBusiness, Organization, WebSite | Yes |
| `/about` | About Cherry Refrigeration | Brisbane Cool Room Specialists | Cold rooms, refrigeration and electrical: done by the same team | 500 | BreadcrumbList | Yes |
| `/contact` | Contact Cherry Refrigeration | Brisbane Cool Room Specialists | Talk to Keith: Brisbane's cool room specialist | 300 | BreadcrumbList | Yes |
| `/get-a-quote` | Get a Free Cool Room Quote Brisbane | Cherry Refrigeration | Get a Free Fixed Price Cool Room Quote | 250 | BreadcrumbList | No (noindex, follow) |
| `/quote-received` | Quote Received | Cherry Refrigeration | Thanks, we've got it | 80 | - | No (noindex, nofollow) |
| `/emergency-repairs` | 24/7 Emergency Refrigeration Repairs Brisbane | Cherry Refrigeration | Cool Room or Freezer Down? Call the 24/7 Emergency Line | 600 | Service, BreadcrumbList | Yes |
| `/cost-guide/cool-room-installation-cost-brisbane` | Cool Room Cost Guide Brisbane | Cherry Refrigeration | What Actually Affects the Cost of a Brisbane Cool Room | 1000 | BlogPosting, FAQPage, BreadcrumbList | Yes |
| `/services/cool-room-installation-brisbane` (money) | Cool Room Installation Brisbane | Custom Built | Cherry Refrigeration | Cool Room Installation Brisbane | 1800 | Service, FAQPage, BreadcrumbList | Yes |
| `/services/cool-room-repairs-brisbane` | Cool Room Repairs Brisbane | 24/7 Same-Day | Cherry Refrigeration | Cool Room Repairs Brisbane, Same-Day Response | 1100 | Service, FAQPage, BreadcrumbList | Yes |
| `/services/cool-room-design-brisbane` | Cool Room Design Brisbane | CAD & Heat Load | Cherry Refrigeration | Cool Room Design Brisbane | 700 | Service, FAQPage, BreadcrumbList | Yes |
| `/services/cool-room-doors-brisbane` | Cool Room Doors Brisbane | Hinged, Sliding, Seals | Cherry Refrigeration | Custom Cool Room Doors Brisbane | 700 | Service, FAQPage, BreadcrumbList | Yes |
| `/services/freezer-room-installation-brisbane` | Freezer Room Installation Brisbane | -18°C to -25°C | Cherry Refrigeration | Freezer Room Installation Brisbane | 800 | Service, FAQPage, BreadcrumbList | Yes |
| `/services/commercial-refrigeration-brisbane` | Commercial Refrigeration Brisbane | Install & Repair | Cherry Refrigeration | Commercial Refrigeration Brisbane | 750 | Service, FAQPage, BreadcrumbList | Yes |
| `/services/air-conditioning-installation-brisbane` | Air Conditioning Installation Brisbane | Split & Ducted | Cherry Refrigeration | Air Conditioning Installation Brisbane | 700 | Service, FAQPage, BreadcrumbList | Yes |
| `/services/air-conditioning-repair-brisbane` | Air Conditioning Repair Brisbane | Same-Day Service | Cherry Refrigeration | Air Conditioning Repair Brisbane | 650 | Service, FAQPage, BreadcrumbList | Yes |
| `/services/electrical-installation-brisbane` | Electrical Installation Brisbane | Licensed | Cherry Refrigeration | Electrical Installation & Repairs Brisbane | 650 | Service, FAQPage, BreadcrumbList | Yes |
| `/services/cool-room-maintenance-brisbane` | Cool Room Maintenance Brisbane | HACCP Logbooks | Cherry Refrigeration | Cool Room Maintenance Brisbane | 650 | Service, FAQPage, BreadcrumbList | Yes |
| `/services/cool-room-regas-refrigerant-leak-repair-brisbane` | Cool Room Regas & Leak Repair Brisbane | Cherry Refrigeration | Cool Room Regas and Refrigerant Leak Repair Brisbane | 700 | Service, FAQPage, BreadcrumbList | Yes |
| `/services/cool-room-door-seal-replacement-brisbane` | Cool Room Door Seal Replacement Brisbane | Cherry Refrigeration | Cool Room Door Seal Replacement Brisbane | 650 | Service, FAQPage, BreadcrumbList | Yes |
| `/services/commercial-fridge-repairs-brisbane` | Commercial Fridge Repairs Brisbane | All Brands | Cherry Refrigeration | Commercial Fridge Repairs Brisbane | 750 | Service, FAQPage, BreadcrumbList | Yes |
| `/industries/[8 slugs]` | (per industry) | (per industry) | 500 each | Service, BreadcrumbList | Yes |
| `/locations/[8 slugs]` | (per city) | (per city) | 700 each | Service, BreadcrumbList | Yes |
| `/service-area/[city]/[3 services]` (24 combos) | (per combo) | (per combo) | 700 each | Service, FAQPage, BreadcrumbList | Yes |
| `/blog` | Cool Room & Refrigeration Blog | Cherry Refrigeration Brisbane | Cool room & refrigeration field notes | 250 | BreadcrumbList | Yes |
| `/blog/cool-room-installation-cost-brisbane` | (matching) | (matching H1) | 400 | BlogPosting, BreadcrumbList | Yes |
| `/blog/cool-room-vs-cold-room` | (matching) | (matching) | 400 | BlogPosting, BreadcrumbList | Yes |
| `/blog/energy-efficient-cool-rooms-brisbane` | (matching) | (matching) | 400 | BlogPosting, BreadcrumbList | Yes |
| `/blog/cool-room-sizing-guide` | (matching) | (matching) | 400 | BlogPosting, BreadcrumbList | Yes |
| `/blog/haccp-cool-room-checklist-brisbane` | (matching) | (matching) | 350 | BlogPosting, BreadcrumbList | Yes |
| `/blog/cool-room-not-cooling-troubleshooting` | (matching) | (matching) | 350 | BlogPosting, BreadcrumbList | Yes |
| `/blog/qbcc-licensed-cool-room-installer-brisbane` | (matching) | (matching) | 350 | BlogPosting, BreadcrumbList | Yes |
| `/blog/low-gwp-refrigerant-retrofit-brisbane` | (matching) | (matching) | 400 | BlogPosting, BreadcrumbList | Yes |
| `/blog/cool-room-door-seal-replacement` | (matching) | (matching) | 400 | BlogPosting, BreadcrumbList | Yes |
| `/blog/starting-a-cafe-brisbane-cool-room-guide` | (matching) | (matching) | 400 | BlogPosting, BreadcrumbList | Yes |
| `/blog/trusted-cool-room-installation-company-brisbane` | (matching) | (matching) | 1400 | BlogPosting, FAQPage, BreadcrumbList | Yes |
| `/blog/cool-room-not-cooling-9-causes-and-fixes` | (matching) | (matching) | 800 | BlogPosting, FAQPage, BreadcrumbList | Yes |
| `/blog/second-hand-vs-new-cool-room-panels` | (matching) | (matching) | 500 | BlogPosting, BreadcrumbList | Yes |
| `/blog/cool-room-requirements-food-businesses-queensland` | (matching) | (matching) | 700 | BlogPosting, BreadcrumbList | Yes |
| `/projects` | Cool Room Projects Brisbane | Cherry Refrigeration | Cool rooms we've installed across Brisbane | 100 | - | No (noindex, follow) |
| `/privacy` | Privacy Policy | Cherry Refrigeration | Privacy Policy | 400 | - | Yes |
| `/terms` | Terms of Service | Cherry Refrigeration | Terms of Service | 400 | - | Yes |
| `/404` | Page not found | Cherry Refrigeration | That page is in defrost mode. | 40 | - | No (noindex, follow) |

**Every indexable page is in `sitemap.xml`. Every noindexed page is out.**
`/projects` is also blocked via `robots.txt` and removed from the header nav
until at least three real projects are populated.

## Redirects (all 308 permanent)

- `/services/cold-room-installation-brisbane` → `/services/cool-room-installation-brisbane`
- `/services/cold-room-repairs-brisbane` → `/services/cool-room-repairs-brisbane`
- `/services/coldroom-design-brisbane` → `/services/cool-room-design-brisbane`
- `/services/custom-cold-room-doors-brisbane` → `/services/cool-room-doors-brisbane`
- `/services/cold-room-maintenance-brisbane` → `/services/cool-room-maintenance-brisbane`
- `/cost-guide/cold-room-installation-cost-brisbane` → `/cost-guide/cool-room-installation-cost-brisbane`
- `/service-area/:city/cold-room-installation` → `/service-area/:city/cool-room-installation`
- `/service-area/:city/cold-room-repairs` → `/service-area/:city/cool-room-repairs`
- Blog: 10 `cold-*` slugs → `cool-*` slugs, and the pricing post loses `-2025`
- `/resources/*` (3 URLs) → `/blog/*` equivalents (dedup)
- Legacy: `/index.html`, `/home`, `/services`, `/contact.html`

All internal links now point at the final URLs. No internal link should
hit a redirect.

## Structured data coverage

- Site-wide (root layout): HVACBusiness, Organization, WebSite
- Every non-home page: BreadcrumbList
- Every service page: Service (with alternateName), FAQPage
- Every service-area page: Service (city-scoped), FAQPage
- Every location page: Service (city-scoped)
- Every blog post: BlogPosting (with Person author + dateModified + image),
  optional FAQPage when the post has FAQs
- Cost guide: BlogPosting + FAQPage
- Emergency repairs: Service (with alternateName)

Empty schema fields (streetAddress, aggregateRating, sameAs, etc.) are
omitted entirely rather than sent as empty strings. Once the TODO
placeholders below are filled in, the same schema functions will start
emitting them.

## Ready for domain cutover

- All canonicals, og:url, sitemap and schema URLs come from
  `siteConfig.siteUrl`, which reads `NEXT_PUBLIC_SITE_URL`. One env var
  change in Vercel flips the whole site over.
- `src/middleware.ts` returns `X-Robots-Tag: noindex, nofollow` on any
  `*.vercel.app` host, and once the apex is live it 308-redirects `www` to
  the apex.
- `robots.txt` no longer emits the non-standard `Host:` line and blocks
  `/api/`, `/quote-received` and `/projects`.

## Performance and tracking

- Fonts self-hosted via `next/font` (Inter, Manrope) with `display: swap`.
- `next/script strategy="afterInteractive"` for gtag.
- GA4 events wired: `phone_clicked` (header + mobile sticky bar),
  `quote_start` (first focus on a form), `quote_submitted` (after success),
  `conversion` on `/quote-received`.
- Removed the three empty `<link rel="preload">` tags that were rendering
  with `href=""`.
- Mobile sticky bar: click-to-call button + quote button always visible on
  mobile.

## TODOs for Keith

Every unverified fact in the site is behind one of these placeholders. Once
Keith confirms a value, drop it into `src/lib/siteConfig.ts` and it flows
through automatically (footer, schema, licence strip, About page, etc.).

**Business data (`src/lib/siteConfig.ts`)**
- [ ] `abn` (from ABR lookup on ACN 665 634 024)
- [ ] `address.street` + `address.postcode` (or confirm service-area only)
- [ ] `qbccLicence` number
- [ ] `arcLicence` number
- [ ] `electricalLicence` number
- [ ] `masterElectricians` membership number (if applicable, otherwise leave empty)
- [ ] `publicLiability` amount
- [ ] `yearsInBusiness` (from ASIC registration date)
- [ ] `gbpUrl` (Google Business Profile URL)
- [ ] `facebook`, `instagram`, `linkedin` URLs (whichever exist)
- [ ] `rating` (once Google reviews are connected. Do NOT hard-code fake reviews)
- [ ] `suppliers` (brands you are an authorised installer for)
- [ ] Set `hasPublishedProjects: true` once the first 3 real projects are in

**Content**
- [ ] Real project write-ups (title, suburb, industry, room size, temperature,
      panel type, timeline, photos, short write-up). Populate
      `src/lib/projects.ts` and set `siteConfig.hasPublishedProjects = true`.
      That flips `/projects` back on, removes it from noindex, and adds it
      to the sitemap.
- [ ] Local project write-ups per suburb (currently render as a TODO card on
      every location page and service-area page)
- [ ] Real photos for hero + service pages + about page (currently one
      Unsplash cool-room photo behind the hero). Save under
      `/public/images/*.webp` with descriptive filenames:
      - `hero-brisbane-cool-room.webp` (1920 x 1080)
      - `cool-room-install-brisbane.webp` (900 x 1200, hero side card)
      - `cool-room-restaurant-brisbane.webp`
      - `freezer-room-brisbane.webp`
      - `condensing-unit-outdoor.webp`
      - `service-van-brisbane.webp`
      - `keith-cherry.webp` (about page)
- [ ] OG image at `/public/images/og-default.jpg` (1200 x 630). Currently
      referenced by metadata + BlogPosting schema.
- [ ] AC install and repair FAQs mention "confirm your preferred install
      brands", which is a Keith TODO.
- [ ] Cool room repairs FAQ has one TODO for the preferred brand list.

**One-time env var flip when the domain goes live**
- [ ] `NEXT_PUBLIC_SITE_URL=https://cherryrefrigeration.com.au` in Vercel
- [ ] Point cherryrefrigeration.com.au A/AAAA/CNAME at Vercel
- [ ] Once DNS is live, verify the `www` -> apex redirect fires
- [ ] Submit sitemap in Google Search Console and Bing Webmaster Tools

## Copy discipline

No em dashes were used in any newly written or rewritten copy in this
overhaul. Colons, commas or full stops instead. Older copy that has not
been rewritten this pass may still contain em dashes and will be swept the
next time each page is touched.
