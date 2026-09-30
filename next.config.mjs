/** @type {import('next').NextConfig} */
const SERVICE_SLUG_REDIRECTS = {
  "cold-room-installation-brisbane": "cool-room-installation-brisbane",
  "cold-room-repairs-brisbane": "cool-room-repairs-brisbane",
  "coldroom-design-brisbane": "cool-room-design-brisbane",
  "custom-cold-room-doors-brisbane": "cool-room-doors-brisbane",
  "cold-room-maintenance-brisbane": "cool-room-maintenance-brisbane",
};

const BLOG_SLUG_REDIRECTS = {
  "cold-room-installation-cost-brisbane-2025": "cool-room-installation-cost-brisbane",
  "cold-room-vs-freezer-room": "cool-room-vs-cold-room",
  "energy-efficient-cold-rooms-brisbane": "energy-efficient-cool-rooms-brisbane",
  "cold-room-sizing-guide": "cool-room-sizing-guide",
  "haccp-cold-room-checklist-brisbane": "haccp-cool-room-checklist-brisbane",
  "cold-room-not-cooling-troubleshooting": "cool-room-not-cooling-troubleshooting",
  "qbcc-licensed-cold-room-installer-brisbane": "qbcc-licensed-cool-room-installer-brisbane",
  "cold-room-door-seal-replacement": "cool-room-door-seal-replacement",
  "starting-a-cafe-brisbane-cold-room-guide": "starting-a-cafe-brisbane-cool-room-guide",
  "trusted-cold-room-installation-company-brisbane": "trusted-cool-room-installation-company-brisbane",
};

const SERVICE_AREA_SERVICE_REDIRECTS = {
  "cold-room-installation": "cool-room-installation",
  "cold-room-repairs": "cool-room-repairs",
};

// /resources/* now folds into /blog/*.
const RESOURCE_REDIRECTS = {
  "cold-room-sizing-guide": "/blog/cool-room-sizing-guide",
  "cold-room-vs-freezer-room": "/blog/cool-room-vs-cold-room",
  "energy-efficient-cold-rooms": "/blog/energy-efficient-cool-rooms-brisbane",
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    const redirects = [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/services", destination: "/services/cool-room-installation-brisbane", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      // /emergency-repairs stays live and refocused on 24/7 refrigeration
      // emergency response, distinct from /services/cool-room-repairs-brisbane.
    ];

    for (const [oldSlug, newSlug] of Object.entries(SERVICE_SLUG_REDIRECTS)) {
      redirects.push({
        source: `/services/${oldSlug}`,
        destination: `/services/${newSlug}`,
        permanent: true, // 308
      });
    }

    for (const [oldSlug, newSlug] of Object.entries(BLOG_SLUG_REDIRECTS)) {
      redirects.push({
        source: `/blog/${oldSlug}`,
        destination: `/blog/${newSlug}`,
        permanent: true,
      });
    }

    for (const [oldSlug, newSlug] of Object.entries(SERVICE_AREA_SERVICE_REDIRECTS)) {
      redirects.push({
        source: `/service-area/:city/${oldSlug}`,
        destination: `/service-area/:city/${newSlug}`,
        permanent: true,
      });
    }

    for (const [oldSlug, destination] of Object.entries(RESOURCE_REDIRECTS)) {
      redirects.push({
        source: `/resources/${oldSlug}`,
        destination,
        permanent: true,
      });
    }

    // Cost guide URL rename.
    redirects.push({
      source: "/cost-guide/cold-room-installation-cost-brisbane",
      destination: "/cost-guide/cool-room-installation-cost-brisbane",
      permanent: true,
    });

    return redirects;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
