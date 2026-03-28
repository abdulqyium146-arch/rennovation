import { Star, ShieldCheck, Trophy, Users, Clock } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import Link from "next/link"

const PROOF_ITEMS = [
  {
    icon: Star,
    value: `${COMPANY.rating}★`,
    label: "Google Rating",
    sub: `${COMPANY.reviewCount}+ verified reviews`,
    href: "/testimonials",
  },
  {
    icon: Trophy,
    value: "500+",
    label: "Projects Completed",
    sub: "In Central Florida",
    href: "/gallery",
  },
  {
    icon: Clock,
    value: "10+",
    label: "Years in Business",
    sub: `Serving FL since ${COMPANY.founded}`,
    href: "/about",
  },
  {
    icon: ShieldCheck,
    value: "Licensed",
    label: "& Fully Insured",
    sub: COMPANY.licenseNumber,
    href: "/about",
  },
  {
    icon: Users,
    value: "24",
    label: "Cities Served",
    sub: "All of Central Florida",
    href: "/locations",
  },
]

export default function SocialProofBar() {
  return (
    <section className="bg-white border-b border-gray-100 shadow-sm" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-gray-100">
          {PROOF_ITEMS.map(({ icon: Icon, value, label, sub, href }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col items-center text-center py-5 px-4 hover:bg-[#F7F6F2] transition-colors"
            >
              <Icon size={20} className="text-[#D4922A] mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-accent font-bold text-xl text-[#1B2B4B]">{value}</span>
              <span className="font-semibold text-[#1B2B4B] text-sm">{label}</span>
              <span className="text-gray-400 text-xs mt-0.5">{sub}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
