import type { Metadata } from "next"
import Script from "next/script"
import { buildMetadata } from "@/lib/seo"
import { COMPANY } from "@/lib/constants"

// Global components
import TrustBar from "@/components/global/TrustBar"

// Sections — ordered by conversion priority
import HeroSection from "@/components/sections/HeroSection"
import SocialProofBar from "@/components/sections/SocialProofBar"
import ServicesGrid from "@/components/sections/ServicesGrid"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import StatsCounter from "@/components/sections/StatsCounter"
import ProcessSteps from "@/components/sections/ProcessSteps"
import FinancingBanner from "@/components/sections/FinancingBanner"
import ProjectGallery from "@/components/sections/ProjectGallery"
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel"
import ServiceAreaMap from "@/components/sections/ServiceAreaMap"
import FAQAccordion from "@/components/sections/FAQAccordion"
import BlogPreview from "@/components/sections/BlogPreview"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = buildMetadata({
  title: "Home Renovation & Painting Contractor Deltona, FL | Volusia County",
  description: `S&S FL Renovations LLC — Deltona's trusted renovation and house painting contractor. Cabinet painting, popcorn ceiling removal, kitchen & bathroom renovations across Volusia County. Free estimates: ${COMPANY.phone}.`,
  slug: "",
  keywords: [
    "home renovation Deltona FL",
    "house painting Deltona FL",
    "renovation contractor Volusia County",
    "cabinet painting Deltona FL",
    "popcorn ceiling removal Deltona",
    "painting contractor DeBary FL",
    "renovation contractor near me Deltona",
  ],
})

const heroVideoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Deltona FL Home Renovation & Painting — S&S FL Renovations LLC | Volusia County Contractor",
  description:
    "Watch S&S FL Renovations LLC's licensed contractors performing real home renovation and painting work in Deltona, FL — cabinet painting, popcorn ceiling removal, bathroom remodels, exterior painting and more across Volusia County.",
  contentUrl: `${COMPANY.domain}/videos/central-florida-home-renovation-hero-orlando-fl.mp4`,
  thumbnailUrl: `${COMPANY.domain}/gallery/home-renovation-interior-central-florida.webp`,
  uploadDate: "2026-03-27T00:00:00.000Z",
  duration: "PT1M",
  embedUrl: COMPANY.domain,
  keywords:
    "home renovation Deltona FL, house painting Deltona FL, cabinet painting Volusia County, popcorn ceiling removal Deltona, renovation contractor DeBary FL",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "S&S FL Renovations LLC",
    url: COMPANY.domain,
    logo: {
      "@type": "ImageObject",
      url: `${COMPANY.domain}/icon-512.png`,
    },
  },
}

export default function HomePage() {
  return (
    <>
      <Script
        id="hero-video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroVideoSchema) }}
      />
      {/* ── Top bar: license, BBB, hours, Google rating ── */}
      <TrustBar />

      {/* ── SECTION 1: Hero — full viewport, geo-targeted H1, inline social proof ── */}
      <HeroSection
        heading="Deltona's Trusted Renovation & Painting Contractor"
        subheading={`Expert house painting, kitchen renovations, bathroom remodels, and more across Deltona, DeBary, Orange City, DeLand, and all of Volusia County. Licensed, insured, and trusted by ${COMPANY.projectCount}+ homeowners since ${COMPANY.founded}.`}
      />

      {/* ── SECTION 2: Social proof bar — immediately below hero fold ── */}
      <SocialProofBar />

      {/* ── SECTION 3: Services grid — what we offer, with sub-service previews ── */}
      <ServicesGrid
        title="Renovation & Painting Services in Deltona, FL"
        subtitle={`${COMPANY.projectCount}+ completed projects across Volusia County. From cabinet painting and popcorn ceiling removal to full kitchen and bathroom renovations — all performed by our licensed in-house crew.`}
      />

      {/* ── SECTION 4: Why us — split layout with inline review + two CTAs ── */}
      <WhyChooseUs />

      {/* ── SECTION 5: Stats — animated, clickable to detail pages ── */}
      <StatsCounter />

      {/* ── SECTION 6: Process — 4 steps with connectors and CTA ── */}
      <ProcessSteps />

      {/* ── SECTION 7: Financing — intercept price-sensitive visitors ── */}
      <FinancingBanner />

      {/* ── SECTION 8: Gallery — visual proof, links to gallery page ── */}
      <ProjectGallery />

      {/* ── SECTION 9: Testimonials — 3-up on desktop with Google branding ── */}
      <TestimonialsCarousel />

      {/* ── SECTION 10: Service area — county-grouped cities with map visual ── */}
      <ServiceAreaMap />

      {/* ── SECTION 11: FAQ — two-column, schema-marked ── */}
      <FAQAccordion
        title="Renovation & Painting Questions — Answered for Deltona Homeowners"
        twoColumn
      />

      {/* ── SECTION 12: Blog — 3 priority posts ── */}
      <BlogPreview />

      {/* ── SECTION 13: Final CTA — urgency + financing reminder ── */}
      <CTASection
        title="Ready to Transform Your Deltona Home?"
        subtitle={`Join ${COMPANY.projectCount}+ happy Volusia County homeowners. Free estimates anywhere in the Deltona area — we respond within 24 hours. Financing available.`}
        showFinancing
      />
    </>
  )
}
