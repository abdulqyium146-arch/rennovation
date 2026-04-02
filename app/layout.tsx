import type { Metadata, Viewport } from "next"
import { Playfair_Display, DM_Sans, Oswald } from "next/font/google"
import "./globals.css"
import Header from "@/components/global/Header"
import Footer from "@/components/global/Footer"
import { buildLocalBusinessSchema, buildWebsiteSchema, safeJsonLd } from "@/lib/schema"
import { COMPANY } from "@/lib/constants"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1B2B4B" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1923" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: "S&S FL Renovations LLC | Renovation & Painting Contractor Deltona, FL",
    template: "%s | S&S FL Renovations LLC",
  },
  description:
    "S&S FL Renovations LLC — Deltona's trusted home renovation and house painting contractor. Cabinet painting, popcorn ceiling removal, kitchen & bathroom renovations across Volusia County. Licensed, insured, 500+ projects. Free estimate: (213) 841-6924.",
  metadataBase: new URL(COMPANY.domain),
  alternates: {
    canonical: COMPANY.domain,
  },
  keywords: [
    "home renovation Deltona FL",
    "house painting Deltona FL",
    "renovation contractor Volusia County",
    "cabinet painting Deltona FL",
    "popcorn ceiling removal Deltona",
    "painting contractor DeBary FL",
    "renovation contractor near me Deltona",
  ].join(", "),
  openGraph: {
    siteName: "S&S FL Renovations LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: `${COMPANY.domain}/og/default.jpg`, width: 1200, height: 630, alt: "S&S FL Renovations LLC — Deltona, FL" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ssflorenovations",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${oswald.variable}`}>
      <head>
        {/* Structured data — LocalBusiness + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(buildLocalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(buildWebsiteSchema()) }}
        />
        {/* Google Tag Manager — replace GTM-XXXXXX with your container ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXX');`,
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main id="main-content" className="pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
