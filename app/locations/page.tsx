import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { CITIES } from "@/lib/constants"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"
import CTASection from "@/components/sections/CTASection"
import { MapPin } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Home Renovation Services — All Central Florida Locations",
  description: "S&S FL Renovations serves 24+ cities across Central Florida. Find your city for local home renovation, kitchen & bathroom remodeling services.",
  slug: "locations",
})

export default function LocationsPage() {
  return (
    <>
      <TrustBar />
      <BreadcrumbNav items={[{ name: "Locations", href: "/locations" }]} />

      <section className="py-16 bg-[#1B2B4B] section-pattern relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">Service Areas</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-5">
            Home Renovation Services Across Central Florida
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From Orlando to Daytona Beach, Winter Park to Melbourne — we serve 24 cities across 7 Central Florida counties.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group bg-white border border-gray-200 hover:border-[#D4922A] hover:shadow-md rounded-xl p-5 flex flex-col gap-2 transition-all"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#D4922A] shrink-0" />
                  <span className="font-display font-bold text-[#1B2B4B] group-hover:text-[#D4922A] transition-colors">
                    {city.name}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{city.county} County, FL</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
