import Link from "next/link"
import {
  ChefHat, Bath, Home, Trees, Shield, Layers,
  Triangle, Paintbrush, Zap, Droplets, Wind, Building2, Brush,
  ArrowRight,
} from "lucide-react"
import { SERVICES } from "@/lib/constants"

const iconMap: Record<string, React.ElementType> = {
  ChefHat, Bath, Home, Trees, Shield, Layers,
  Triangle, Paintbrush, Zap, Droplets, Wind, Building2, Brush,
}

// Highlight the most profitable/popular services
const FEATURED = new Set(["kitchen-remodeling", "bathroom-renovation", "outdoor-renovations", "hurricane-protection"])

interface ServicesGridProps {
  title?: string
  subtitle?: string
  limit?: number
}

export default function ServicesGrid({
  title = "Home Renovation Services in Central Florida",
  subtitle = "From kitchen remodels to whole-home transformations — licensed, insured, and serving all of Orlando & Central Florida.",
  limit,
}: ServicesGridProps) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES

  return (
    <section className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 id="services-heading" className="font-display text-3xl sm:text-4xl font-bold text-[#1B2B4B] mt-2 mb-4">
            {title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((svc) => {
            const Icon = iconMap[svc.icon] ?? Home
            const isFeatured = FEATURED.has(svc.slug)
            return (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className={`group relative rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col gap-4 border ${
                  isFeatured
                    ? "bg-[#1B2B4B] border-[#2D4A7A] hover:border-[#D4922A]"
                    : "bg-[#F7F6F2] border-gray-100 hover:bg-[#1B2B4B] hover:border-[#2D4A7A]"
                }`}
              >
                {/* Popular badge */}
                {isFeatured && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold text-[#D4922A] bg-[#D4922A]/15 border border-[#D4922A]/30 px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Popular
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isFeatured
                      ? "bg-[#D4922A]/20"
                      : "bg-[#1B2B4B] group-hover:bg-[#D4922A]/20"
                  }`}
                >
                  <Icon
                    size={22}
                    className={`transition-colors ${
                      isFeatured ? "text-[#D4922A]" : "text-[#D4922A] group-hover:text-[#D4922A]"
                    }`}
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3
                    className={`font-display font-bold text-[1.05rem] mb-1.5 transition-colors leading-snug ${
                      isFeatured ? "text-white" : "text-[#1B2B4B] group-hover:text-white"
                    }`}
                  >
                    {svc.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed line-clamp-2 transition-colors ${
                      isFeatured ? "text-gray-400" : "text-gray-500 group-hover:text-gray-400"
                    }`}
                  >
                    {svc.description}
                  </p>
                </div>

                {/* Sub-services preview */}
                {svc.subServices.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {svc.subServices.slice(0, 3).map((sub) => (
                      <span
                        key={sub.slug}
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium transition-colors ${
                          isFeatured
                            ? "bg-white/10 text-gray-400"
                            : "bg-gray-200 text-gray-500 group-hover:bg-white/10 group-hover:text-gray-400"
                        }`}
                      >
                        {sub.name}
                      </span>
                    ))}
                    {svc.subServices.length > 3 && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          isFeatured ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500"
                        }`}
                      >
                        +{svc.subServices.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                <div
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                    isFeatured ? "text-[#D4922A]" : "text-[#D4922A] group-hover:text-[#F0B84A]"
                  }`}
                >
                  View Service
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#1B2B4B] hover:bg-[#2D4A7A] text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg"
          >
            View All {SERVICES.length} Services
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/free-estimate"
            className="inline-flex items-center gap-2 border-2 border-[#D4922A] text-[#D4922A] hover:bg-[#D4922A] hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Get Free Estimate
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
