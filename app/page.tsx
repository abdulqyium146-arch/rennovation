import type { Metadata } from "next"
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
  title: "Home Renovation Contractor in Orlando & Central Florida",
  description: `${COMPANY.name} — Orlando's top-rated home renovation contractor. Kitchen, bathroom, outdoor & full-home remodeling. Licensed & insured. 500+ projects. Free estimate: ${COMPANY.phone}.`,
  slug: "",
  keywords: [
    "home renovation Orlando FL",
    "home remodeling Central Florida",
    "kitchen remodeling Orlando",
    "bathroom renovation Orlando",
    "renovation contractor Central Florida",
    "licensed contractor Orlando",
  ],
})

export default function HomePage() {
  return (
    <>
      {/* ── Top bar: license, BBB, hours, Google rating ── */}
      <TrustBar />

      {/* ── SECTION 1: Hero — full viewport, geo-targeted H1, inline social proof ── */}
      <HeroSection
        heading="Orlando's #1 Home Renovation Contractor"
        subheading={`Expert kitchen, bathroom, outdoor & full-home renovations across Orlando, Kissimmee, Winter Park, Sanford and all of Central Florida. Licensed, insured, and trusted by ${COMPANY.projectCount}+ homeowners since ${COMPANY.founded}.`}
      />

      {/* ── SECTION 2: Social proof bar — immediately below hero fold ── */}
      <SocialProofBar />

      {/* ── SECTION 3: Services grid — what we offer, with sub-service previews ── */}
      <ServicesGrid
        title="Home Renovation Services in Central Florida"
        subtitle={`${COMPANY.projectCount}+ completed renovations. From a single bathroom refresh to a complete whole-home transformation — all performed by our licensed in-house crew.`}
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
        title="Home Renovation Questions — Answered"
        twoColumn
      />

      {/* ── SECTION 12: Blog — 3 priority posts ── */}
      <BlogPreview />

      {/* ── SECTION 13: Final CTA — urgency + financing reminder ── */}
      <CTASection
        title="Ready to Start Your Renovation?"
        subtitle={`Join ${COMPANY.projectCount}+ happy Central Florida homeowners. Free estimates — respond within 24 hours. Financing available.`}
        showFinancing
      />
    </>
  )
}
