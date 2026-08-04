import Link from "next/link"
import { Home, Phone, Search, ArrowRight } from "lucide-react"
import { COMPANY, SERVICES } from "@/lib/constants"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-[#F7F6F2] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="font-accent text-8xl font-bold text-[#1B2B4B]/10 mb-4">404</div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1B2B4B] mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1B2B4B] text-white font-bold px-6 py-3.5 rounded-lg hover:bg-[#2D4A7A] transition-colors"
          >
            <Home size={18} /> Back to Home
          </Link>
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2 bg-[#D4922A] text-white font-bold px-6 py-3.5 rounded-lg hover:bg-[#F0B84A] transition-colors"
          >
            <Phone size={18} /> {COMPANY.phone}
          </a>
          <Link
            href="/free-estimate"
            className="inline-flex items-center gap-2 border-2 border-[#1B2B4B] text-[#1B2B4B] font-bold px-6 py-3.5 rounded-lg hover:bg-[#1B2B4B] hover:text-white transition-colors"
          >
            Free Estimate <ArrowRight size={18} />
          </Link>
        </div>

        <div className="text-left">
          <h2 className="font-display font-bold text-[#1B2B4B] text-xl mb-4 flex items-center gap-2">
            <Search size={18} className="text-[#D4922A]" /> Popular Services
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {SERVICES.slice(0, 8).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="text-gray-600 hover:text-[#D4922A] text-sm transition-colors flex items-center gap-1"
              >
                <ArrowRight size={12} className="text-[#D4922A]" /> {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
