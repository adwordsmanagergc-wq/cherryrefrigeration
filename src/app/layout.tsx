import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { JsonLd, localBusinessSchema, organizationSchema } from "@/lib/schema";
import { business } from "@/lib/business";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: "Cold Room Installation Brisbane | Cherry Refrigeration",
    template: "%s | Cherry Refrigeration",
  },
  description:
    "Brisbane's most trusted custom cold room installer. QBCC licensed, 5-year warranty, 24/7 emergency service. Free quote in 24 hours. Call Keith on 0432 115 513.",
  alternates: { canonical: business.url },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: business.url,
    siteName: business.name,
    title: "Cold Room Installation Brisbane | Cherry Refrigeration",
    description:
      "Custom-built, energy-efficient cold rooms across Brisbane and SE QLD. Free fixed-price quote within 24 hours.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Cherry Refrigeration Brisbane" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold Room Installation Brisbane | Cherry Refrigeration",
    description: "Brisbane's most trusted cold room installer. Free quote in 24 hours.",
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
        <link rel="alternate" hrefLang="en-AU" href={business.url} />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <JsonLd data={[localBusinessSchema(), organizationSchema()]} />
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
