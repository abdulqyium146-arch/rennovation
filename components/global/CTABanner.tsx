import { Phone, AlertCircle } from "lucide-react"
import { COMPANY } from "@/lib/constants"

interface CTABannerProps {
  title?: string
  subtitle?: string
  dark?: boolean
}

export default function CTABanner({
  title = "Lines Are Open — Call Now for Same-Day Response",
  subtitle = "Don't wait weeks — speak to a renovation expert today.",
  dark = true,
}: CTABannerProps) {
  return (
    <section className={`py-4 ${dark ? "bg-[#1B2B4B]" : "bg-[#D4922A]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <AlertCircle size={18} className="text-[#D4922A] shrink-0 hidden sm:block" />
          <div className="text-white">
            <p className="font-semibold text-lg leading-tight">{title}</p>
            <p className="text-sm text-white/75">{subtitle}</p>
          </div>
        </div>
        <a
          href={COMPANY.phoneHref}
          className="relative inline-flex items-center gap-2 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap shadow-lg shrink-0"
          aria-label={`Call ${COMPANY.name} now at ${COMPANY.phone}`}
        >
          <span className="absolute inset-0 rounded-lg animate-ping bg-[#D4922A]/30 pointer-events-none" />
          <Phone size={16} className="relative" />
          <span className="relative">{COMPANY.phone}</span>
        </a>
      </div>
    </section>
  )
}
