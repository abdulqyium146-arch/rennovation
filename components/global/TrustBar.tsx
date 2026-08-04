import Link from "next/link"
import { Star, ShieldCheck, Award, Clock, BadgeCheck } from "lucide-react"
import { COMPANY } from "@/lib/constants"

export default function TrustBar() {
  return (
    <div className="bg-[#0F1923] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5">
          {/* Left: Google Rating */}
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 text-white hover:text-[#F0B84A] transition-colors group"
          >
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
              <span className="font-bold text-[10px]" style={{ color: "#4285F4" }}>G</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-[#D4922A] text-[#D4922A]" />
              ))}
            </div>
            <span className="text-white font-semibold text-sm">{COMPANY.rating}</span>
            <span className="text-gray-400 text-xs hidden sm:inline">({COMPANY.reviewCount} Google Reviews)</span>
          </a>

          {/* Right: trust items */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {[
              { icon: ShieldCheck, text: "Licensed & Insured" },
              { icon: BadgeCheck, text: "FL " + COMPANY.licenseNumber },
              { icon: Award, text: "BBB A+ Rated" },
              { icon: Clock, text: "Open 24/7" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-xs text-gray-400">
                <Icon size={12} className="text-[#D4922A] shrink-0" />
                <span className="hidden sm:inline">{text}</span>
                <span className="sm:hidden">{text.split(" ")[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
