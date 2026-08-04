import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { CITIES } from "@/lib/constants"

// Group cities by county for better UX
const COUNTY_GROUPS = [
  { county: "Orange County", color: "bg-[#1B2B4B]", cities: ["Orlando", "Winter Park", "Apopka", "Windermere", "Winter Garden", "Maitland"] },
  { county: "Seminole County", color: "bg-[#2D4A7A]", cities: ["Sanford", "Altamonte Springs", "Lake Mary", "Oviedo", "Longwood", "Casselberry"] },
  { county: "Osceola County", color: "bg-[#1B2B4B]", cities: ["Kissimmee", "Celebration", "St. Cloud"] },
  { county: "Volusia County", color: "bg-[#2D4A7A]", cities: ["Deltona", "Daytona Beach", "DeLand", "Edgewater", "Port Orange"] },
  { county: "Other Counties", color: "bg-[#1B2B4B]", cities: ["Clermont", "Lakeland", "Palm Bay", "Melbourne"] },
]

export default function ServiceAreaMap() {
  return (
    <section className="py-24 bg-white" aria-labelledby="area-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-widest">
            Service Coverage
          </span>
          <h2 id="area-heading" className="font-display text-3xl sm:text-4xl font-bold text-[#1B2B4B] mt-2 mb-4">
            We Serve All of Central Florida
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Our licensed crew travels throughout Orange, Seminole, Osceola, Volusia, Lake, Polk, and Brevard counties — no travel fees within our service area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: county groups */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {COUNTY_GROUPS.map(({ county, color, cities }) => (
              <div key={county} className="bg-[#F7F6F2] rounded-2xl p-5 border border-gray-100">
                <div className={`inline-flex items-center gap-2 ${color} text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4`}>
                  <MapPin size={11} />
                  {county}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cities.map((cityName) => {
                    const city = CITIES.find((c) => c.name === cityName)
                    if (!city) return <span key={cityName} className="text-xs text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-lg font-medium">{cityName}</span>
                    return (
                      <Link
                        key={city.slug}
                        href={`/locations/${city.slug}`}
                        className="text-xs text-[#1B2B4B] bg-white border border-gray-200 hover:border-[#D4922A] hover:text-[#D4922A] px-3 py-1.5 rounded-lg font-medium transition-colors"
                      >
                        {city.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right: map placeholder + CTA */}
          <div className="flex flex-col gap-5">
            {/* Map visual */}
            <div
              className="rounded-2xl overflow-hidden h-64 flex items-center justify-center relative border border-gray-100 shadow-sm"
              style={{ background: "linear-gradient(135deg, #1B2B4B 0%, #0F1923 100%)" }}
            >
              {/* Simplified FL map visual */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg viewBox="0 0 200 300" className="h-full w-auto fill-white">
                  <path d="M60,20 L140,20 L160,60 L155,140 L170,180 L160,200 L140,220 L120,270 L110,280 L100,290 L90,270 L70,230 L50,200 L40,180 L30,140 L40,60 Z" />
                </svg>
              </div>
              <div className="relative text-center px-6">
                <MapPin size={32} className="text-[#D4922A] mx-auto mb-2" />
                <p className="font-display font-bold text-white text-lg">Central Florida</p>
                <p className="text-gray-400 text-sm mt-1">7 Counties · 24+ Cities</p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="bg-[#1B2B4B] text-white rounded-2xl p-5 flex flex-col gap-3">
              <p className="font-display font-bold text-base">Serving Your Area</p>
              <div className="flex flex-col gap-2 text-sm text-gray-300">
                <p className="flex items-center gap-2"><MapPin size={13} className="text-[#D4922A]" /> 24+ cities across 7 counties</p>
                <p className="flex items-center gap-2"><MapPin size={13} className="text-[#D4922A]" /> No travel fees in our service area</p>
                <p className="flex items-center gap-2"><MapPin size={13} className="text-[#D4922A]" /> In-home estimates within 48 hours</p>
              </div>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-[#D4922A] hover:text-[#F0B84A] font-semibold text-sm transition-colors mt-1"
              >
                Find your city <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
