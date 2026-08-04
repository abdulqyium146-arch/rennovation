import Link from "next/link"
import { DollarSign, ArrowRight, CheckCircle } from "lucide-react"

export default function FinancingBanner() {
  return (
    <section className="py-12 bg-[#1B2B4B] border-y border-white/10" aria-label="Financing options">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#D4922A]/20 rounded-2xl flex items-center justify-center shrink-0">
              <DollarSign size={26} className="text-[#D4922A]" />
            </div>
            <div>
              <p className="font-display font-bold text-white text-xl">
                Flexible Financing Available
              </p>
              <p className="text-gray-400 text-sm mt-0.5">
                Don't let budget stop your dream renovation — ask about our 0% interest options.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {[
              "0% interest financing",
              "Low monthly payments",
              "Fast approval process",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle size={14} className="text-[#D4922A] shrink-0" />
                {item}
              </span>
            ))}
          </div>

          <Link
            href="/services/whole-home-remodeling/home-renovation-financing"
            className="inline-flex items-center gap-2 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors whitespace-nowrap shadow-lg shrink-0"
          >
            Learn About Financing
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
