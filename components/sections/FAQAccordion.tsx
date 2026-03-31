"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { FAQ_GENERAL } from "@/lib/constants"
import { buildFAQSchema } from "@/lib/schema"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { COMPANY } from "@/lib/constants"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs?: FAQItem[]
  title?: string
  dark?: boolean
  includeSchema?: boolean
  twoColumn?: boolean
}

export default function FAQAccordion({
  faqs = FAQ_GENERAL,
  title = "Frequently Asked Questions",
  dark = false,
  includeSchema = true,
  twoColumn = true,
}: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0)

  // Split into two columns if twoColumn and enough items
  const leftFaqs = twoColumn ? faqs.slice(0, Math.ceil(faqs.length / 2)) : faqs
  const rightFaqs = twoColumn ? faqs.slice(Math.ceil(faqs.length / 2)) : []

  const FAQItem = ({ faq, index, baseIndex = 0 }: { faq: FAQItem; index: number; baseIndex?: number }) => {
    const globalIndex = baseIndex + index
    return (
      <div
        className={cn(
          "rounded-xl border transition-all duration-200",
          dark
            ? "border-white/10 bg-white/5 hover:bg-white/8"
            : "border-gray-200 bg-white hover:border-[#D4922A]/30",
          open === globalIndex && "border-[#D4922A]/40 shadow-sm"
        )}
      >
        <button
          className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
          onClick={() => setOpen(open === globalIndex ? null : globalIndex)}
          aria-expanded={open === globalIndex}
        >
          <span className={`font-semibold text-sm leading-relaxed ${dark ? "text-white" : "text-[#1B2B4B]"}`}>
            {faq.question}
          </span>
          <ChevronDown
            size={17}
            className={cn(
              "shrink-0 mt-0.5 transition-transform text-[#D4922A]",
              open === globalIndex && "rotate-180"
            )}
          />
        </button>
        {open === globalIndex && (
          <div className={`px-5 pb-4 text-sm leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
            {faq.answer}
          </div>
        )}
      </div>
    )
  }

  return (
    <section
      className={`py-24 ${dark ? "bg-[#1B2B4B]" : "bg-[#F7F6F2]"}`}
      aria-labelledby="faq-heading"
    >
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(faqs)) }}
        />
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2
            id="faq-heading"
            className={`font-display text-3xl sm:text-4xl font-bold mt-2 mb-3 ${dark ? "text-white" : "text-[#1B2B4B]"}`}
          >
            {title}
          </h2>
          <p className={`text-sm max-w-lg mx-auto ${dark ? "text-gray-400" : "text-gray-500"}`}>
            Have a question not answered here? Call us or send a message — we respond within hours.
          </p>
        </div>

        {/* Two-column layout */}
        {twoColumn && rightFaqs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
            <div className="flex flex-col gap-3">
              {leftFaqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} baseIndex={0} />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {rightFaqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} baseIndex={leftFaqs.length} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 max-w-3xl mx-auto mb-10">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className={`rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5 ${dark ? "bg-white/8 border border-white/10" : "bg-white border border-gray-100 shadow-sm"}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D4922A]/10 rounded-full flex items-center justify-center shrink-0">
              <MessageCircle size={18} className="text-[#D4922A]" />
            </div>
            <div>
              <p className={`font-bold text-sm ${dark ? "text-white" : "text-[#1B2B4B]"}`}>Still have questions?</p>
              <p className={`text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>Our team responds within 2 hours, 24/7.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              href="/free-estimate"
              className="bg-[#D4922A] hover:bg-[#F0B84A] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              Get Free Estimate
            </Link>
            <a
              href={COMPANY.phoneHref}
              className={`font-semibold text-sm px-5 py-2.5 rounded-lg border-2 transition-colors whitespace-nowrap ${dark ? "border-white/20 text-white hover:border-white/40" : "border-[#1B2B4B] text-[#1B2B4B] hover:bg-[#1B2B4B] hover:text-white"}`}
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
