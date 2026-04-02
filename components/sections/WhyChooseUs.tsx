"use client"

import Link from "next/link"
import { ShieldCheck, Award, Clock, Users, ThumbsUp, Wrench, ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Licensed & Fully Insured",
    description: "Florida State Contractor License + full general liability & workers' comp on every job. Your Deltona or Volusia County home and investment are fully protected.",
  },
  {
    icon: Award,
    title: "10+ Years of Proven Results",
    description: "Since 2014, we've delivered 500+ renovation and painting projects across Deltona and Volusia County. Our track record speaks louder than any sales pitch.",
  },
  {
    icon: Users,
    title: "Our Crew — Not Subcontractors",
    description: "Every worker on your project is our employee. Background-checked, trained, and accountable to us — and to you.",
  },
  {
    icon: Clock,
    title: "On Time & On Budget — Guaranteed",
    description: "We set a realistic timeline and price upfront and stick to both. No surprise invoices. No excuses. Just results.",
  },
  {
    icon: ThumbsUp,
    title: `${COMPANY.rating}★ Google Rated`,
    description: `${COMPANY.reviewCount}+ verified 5-star reviews from real Deltona, DeBary, Orange City, and Volusia County homeowners. We earn our reputation on every project.`,
  },
  {
    icon: Wrench,
    title: "One Call. Total Accountability.",
    description: "We handle permits, design, materials, construction, inspections, and cleanup. You have one local point of contact — us.",
  },
]

interface WhyChooseUsProps {
  title?: string
  dark?: boolean
}

export default function WhyChooseUs({
  title = "Why Deltona & Volusia County Homeowners Choose S&S FL Renovations",
  dark = false,
}: WhyChooseUsProps) {
  return (
    <section
      className={`py-24 ${dark ? "bg-[#1B2B4B]" : "bg-[#F7F6F2]"}`}
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          {/* Left: heading + CTA (sticky context column) */}
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2
              id="why-heading"
              className={`font-display text-3xl sm:text-4xl font-bold mt-3 mb-5 leading-tight ${dark ? "text-white" : "text-[#1B2B4B]"}`}
            >
              {title}
            </h2>
            <p className={`text-base leading-relaxed mb-8 ${dark ? "text-gray-300" : "text-gray-600"}`}>
              With plenty of contractors to choose from in the Deltona and Volusia County area, we earn your trust through transparency, local roots, and a decade of doing exactly what we say we'll do.
            </p>

            {/* Review snippet */}
            <div className={`rounded-2xl p-5 mb-6 ${dark ? "bg-white/10 border border-white/10" : "bg-white border border-gray-100 shadow-sm"}`}>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-[#D4922A] text-[#D4922A]" />
                ))}
                <span className={`text-xs ml-2 ${dark ? "text-gray-400" : "text-gray-500"}`}>Google Review</span>
              </div>
              <p className={`text-sm italic leading-relaxed ${dark ? "text-gray-300" : "text-gray-700"}`}>
                "S&S FL transformed our master bathroom and repainted our entire interior — clean, professional, and done on time. Couldn't ask for a better contractor right here in Deltona."
              </p>
              <p className={`text-xs mt-2 font-semibold ${dark ? "text-gray-400" : "text-gray-500"}`}>— Linda & Tom H., Deltona, FL</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/free-estimate"
                className="inline-flex items-center gap-2 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-6 py-3.5 rounded-xl transition-colors shadow-lg"
              >
                Get Free Estimate <ArrowRight size={16} />
              </Link>
              <Link
                href="/testimonials"
                className={`inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl border-2 transition-colors ${dark ? "border-white/20 text-white hover:border-white/50" : "border-[#1B2B4B] text-[#1B2B4B] hover:bg-[#1B2B4B] hover:text-white"}`}
              >
                Read Reviews
              </Link>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {REASONS.map(({ icon: Icon, title: t, description }, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`rounded-2xl p-6 flex flex-col gap-4 ${
                  dark
                    ? "bg-white/8 border border-white/10 hover:border-[#D4922A]/40"
                    : "bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#D4922A]/30"
                } transition-all duration-200`}
              >
                <div className="w-11 h-11 bg-[#D4922A]/10 rounded-xl flex items-center justify-center">
                  <Icon size={22} className="text-[#D4922A]" />
                </div>
                <h3 className={`font-display font-bold text-[1.05rem] leading-snug ${dark ? "text-white" : "text-[#1B2B4B]"}`}>
                  {t}
                </h3>
                <p className={`text-sm leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
