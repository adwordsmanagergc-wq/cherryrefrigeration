import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { JsonLd, localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

const DEFAULT_TITLE = "Cool Rooms, Refrigeration & Air Con Brisbane | Cherry Refrigeration";
const DEFAULT_DESCRIPTION =
  "Brisbane specialists in cool room installation, cool room repairs, freezer rooms, commercial refrigeration and AC. Free fixed price quote in 24 hours. Call 0432 115 513.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  // Titles set on individual pages replace the whole title. Only leaf pages
  // that do not set a title fall back to DEFAULT_TITLE. The template pattern
  // "%s | Cherry Refrigeration" is intentionally NOT used because page titles
  // already include the brand suffix, which caused a duplicated
  // "| Cherry Refrigeration | Cherry Refrigeration" bug in every inner page.
  title: {
    default: DEFAULT_TITLE,
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: siteConfig.siteUrl + "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Cherry Refrigeration Brisbane cool room specialists" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  manifest: "/manifest.json",
  other: { "geo.region": "AU-QLD", "geo.placename": "Brisbane" },
};

export const viewport: Viewport = {
  themeColor: "#1A2547",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-QCM5GYXMSH";
  return (
    <html lang="en-AU" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <JsonLd data={[localBusinessSchema(), organizationSchema(), websiteSchema()]} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:bg-cherry focus:text-white focus:px-3 focus:py-2 focus:rounded-md focus:z-50">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
