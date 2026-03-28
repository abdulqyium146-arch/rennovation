"use client"

import Link from "next/link"
import { Phone, FileText, HardHat, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"

const STEPS = [
  {
    step: 1,
    icon: Phone,
    title: "Free Consultation",
    description:
      "Call us or fill out our form. We schedule a free in-home visit — usually within 48 hours. No commitment required.",
    color: "from-[#D4922A] to-[#F0B84A]",
  },
  {
    step: 2,
    icon: FileText,
    title: "Detailed Written Quote",
    description:
      "We measure your space and provide a transparent, itemized estimate. You'll know exactly what you're paying for — down to the last nail.",
    color: "from-[#2D4A7A] to-[#1B2B4B]",
  },
  {
    step: 3,
    icon: HardHat,
    title: "Expert Construction",
    description:
      "Our licensed in-house crew gets to work on your timeline. Daily updates, clean worksite, and no subcontractor surprises.",
    color: "from-[#1B2B4B] to-[#2D4A7A]",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Final Walkthrough",
    description:
      "We don't consider a job done until you're 100% satisfied. We walk every inch together, fix anything you flag, and clean up completely.",
    color: "from-[#D4922A] to-[#F0B84A]",
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-white" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-widest">
            Simple & Transparent
          </span>
          <h2 id="process-heading" className="font-display text-3xl sm:text-4xl font-bold text-[#1B2B4B] mt-2 mb-4">
            How We Work — 4 Easy Steps
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            No guesswork. No confusion. Just a clear process that thousands of Central Florida homeowners have trusted since {COMPANY.founded}.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {STEPS.map(({ step, icon: Icon, title, description, color }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative bg-[#F7F6F2] rounded-2xl p-7 flex flex-col gap-4 border border-gray-100 hover:border-[#D4922A]/30 hover:shadow-lg transition-all duration-200"
            >
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#D4922A] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold font-accent">{step}</span>
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-md`}>
                <Icon size={26} className="text-white" />
              </div>

              <h3 className="font-display font-bold text-[#1B2B4B] text-xl">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>

              {/* Arrow to next step */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                    <ArrowRight size={12} className="text-[#D4922A]" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-5">Ready to start Step 1? It's free and takes under 2 minutes.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/free-estimate"
              className="inline-flex items-center gap-2 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl"
            >
              Start With a Free Estimate
              <ArrowRight size={18} />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 text-[#1B2B4B] font-semibold hover:text-[#D4922A] transition-colors text-lg"
            >
              <Phone size={18} className="text-[#D4922A]" />
              Or call {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
