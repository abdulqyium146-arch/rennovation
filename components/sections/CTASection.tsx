import Link from "next/link"
import { ArrowRight, Phone, Clock, DollarSign, CheckCircle } from "lucide-react"
import { COMPANY } from "@/lib/constants"

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  showFinancing?: boolean
}

export default function CTASection({
  title = "Ready to Transform Your Home?",
  subtitle = "Join 500+ happy Central Florida homeowners. Your free estimate takes less than 2 minutes to request.",
  primaryLabel = "Get My Free Estimate",
  primaryHref = "/free-estimate",
  showFinancing = true,
}: CTASectionProps) {
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" })

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1B2B4B 0%, #0D1F3C 60%, #0F1923 100%)" }}
      aria-label="Call to action"
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #D4922A, #F0B84A, #D4922A)" }}
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4922A 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Urgency pill */}
          <div className="inline-flex items-center gap-2 bg-[#D4922A]/15 border border-[#D4922A]/40 text-[#F0B84A] text-sm font-semibold px-4 py-2 rounded-full mb-7">
            <Clock size={14} />
            {currentMonth} slots filling fast — Book now to lock in your date
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            {title}
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href={primaryHref}
              className="group inline-flex items-center justify-center gap-2 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-2xl shadow-[#D4922A]/25 hover:shadow-[#D4922A]/50 hover:-translate-y-0.5"
            >
              {primaryLabel}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-10 py-5 rounded-xl text-lg transition-all hover:bg-white/5"
            >
              <Phone size={20} className="text-[#D4922A]" />
              {COMPANY.phone}
            </a>
          </div>

          {/* Micro-trust row */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            {[
              { icon: CheckCircle, text: "No obligation" },
              { icon: CheckCircle, text: "100% free estimate" },
              { icon: CheckCircle, text: "Response within 24hrs" },
              showFinancing ? { icon: DollarSign, text: "0% financing available" } : null,
            ]
              .filter(Boolean)
              .map((item) => {
                const { icon: Icon, text } = item!
                return (
                  <span key={text} className="flex items-center gap-1.5">
                    <Icon size={13} className="text-[#D4922A]" />
                    {text}
                  </span>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}
