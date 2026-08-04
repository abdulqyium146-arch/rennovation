import Link from "next/link"
import PhoneButton from "./PhoneButton"
import { ArrowRight } from "lucide-react"

interface CTABannerProps {
  title?: string
  subtitle?: string
  showPhone?: boolean
  estimateLabel?: string
  dark?: boolean
}

export default function CTABanner({
  title = "Ready to Transform Your Home?",
  subtitle = "Get your free, no-obligation estimate today.",
  showPhone = true,
  estimateLabel = "Get Free Estimate",
  dark = true,
}: CTABannerProps) {
  return (
    <section
      className={`py-4 ${dark ? "bg-[#1B2B4B]" : "bg-[#D4922A]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white text-center sm:text-left">
          <p className="font-semibold text-lg leading-tight">{title}</p>
          <p className="text-sm text-white/75">{subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/free-estimate"
            className="inline-flex items-center gap-2 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-semibold px-5 py-2.5 rounded transition-colors whitespace-nowrap"
          >
            {estimateLabel}
            <ArrowRight size={16} />
          </Link>
          {showPhone && <PhoneButton variant="white" size="sm" />}
        </div>
      </div>
    </section>
  )
}
