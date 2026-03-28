import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { SERVICES } from "@/lib/constants"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"
import ServicesGrid from "@/components/sections/ServicesGrid"
import CTASection from "@/components/sections/CTASection"
import WhyChooseUs from "@/components/sections/WhyChooseUs"

export const metadata: Metadata = buildMetadata({
  title: "Home Renovation Services in Central Florida",
  description: "Complete home renovation services in Orlando & Central Florida — kitchens, bathrooms, outdoor living, roofing, flooring & more. Licensed, insured. Free estimate.",
  slug: "services",
})

export default function ServicesPage() {
  return (
    <>
      <TrustBar />
      <BreadcrumbNav items={[{ name: "Services", href: "/services" }]} />

      <section className="py-16 bg-[#1B2B4B] section-pattern relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">
            Full-Service Renovation
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-5">
            Home Renovation Services in Central Florida
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From a single bathroom remodel to a complete whole-home transformation — S&S FL Renovations handles every aspect of your renovation project with expert craftsmanship.
          </p>
        </div>
      </section>

      <ServicesGrid
        title={`All ${SERVICES.length} Renovation Services`}
        subtitle="Every service delivered by our licensed, insured in-house crew — no subcontractors, no surprises."
      />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
