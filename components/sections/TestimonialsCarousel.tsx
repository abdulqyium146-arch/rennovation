"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { TESTIMONIALS, COMPANY } from "@/lib/constants"
import Link from "next/link"

interface TestimonialsCarouselProps {
  testimonials?: typeof TESTIMONIALS
  dark?: boolean
}

export default function TestimonialsCarousel({
  testimonials = TESTIMONIALS,
  dark = false,
}: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  // Show 3 at a time on desktop
  const visibleCount = 3
  const getVisible = () => {
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      result.push(testimonials[(current + i) % testimonials.length])
    }
    return result
  }

  return (
    <section
      className={`py-24 ${dark ? "bg-[#0F1923]" : "bg-[#F7F6F2]"}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-widest">
              Real Reviews
            </span>
            <h2
              id="testimonials-heading"
              className={`font-display text-3xl sm:text-4xl font-bold mt-2 ${dark ? "text-white" : "text-[#1B2B4B]"}`}
            >
              What Homeowners Say
            </h2>
          </div>
          {/* Google review summary */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
              <span className="font-bold text-sm" style={{ color: "#4285F4" }}>G</span>
            </div>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-[#D4922A] text-[#D4922A]" />
                ))}
              </div>
              <p className={`text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>
                <span className="font-bold text-sm">{COMPANY.rating}</span> · {COMPANY.reviewCount}+ Google Reviews
              </p>
            </div>
            <Link
              href="/testimonials"
              className="text-[#D4922A] text-xs font-semibold hover:text-[#F0B84A] transition-colors ml-2"
            >
              See All →
            </Link>
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
          {getVisible().map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className={`relative rounded-2xl p-7 flex flex-col gap-5 transition-all ${
                i === 0
                  ? dark ? "bg-[#1B2B4B] border border-white/10" : "bg-[#1B2B4B] shadow-xl"
                  : dark ? "bg-white/5 border border-white/8" : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              <Quote
                size={36}
                className={`absolute top-5 right-5 ${i === 0 ? "text-[#D4922A]/30" : "text-gray-200"}`}
              />
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#D4922A] text-[#D4922A]" />
                ))}
              </div>
              <blockquote
                className={`text-sm leading-relaxed italic flex-1 ${i === 0 ? "text-gray-200" : dark ? "text-gray-300" : "text-gray-700"}`}
              >
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-display text-lg shrink-0 ${
                    i === 0 ? "bg-[#D4922A]" : "bg-[#1B2B4B]"
                  }`}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className={`font-bold text-sm ${i === 0 ? "text-white" : dark ? "text-white" : "text-[#1B2B4B]"}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs ${i === 0 ? "text-gray-400" : "text-gray-500"}`}>
                    {t.city}, FL · {t.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="lg:hidden mb-8">
          <div className={`rounded-2xl p-7 ${dark ? "bg-[#1B2B4B] border border-white/10" : "bg-white shadow-lg"}`}>
            <Quote size={40} className="text-[#D4922A]/20 mb-3" />
            <div className="flex gap-0.5 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#D4922A] text-[#D4922A]" />
              ))}
            </div>
            <blockquote className={`text-base leading-relaxed italic mb-5 ${dark ? "text-gray-300" : "text-gray-700"}`}>
              "{testimonials[current].text}"
            </blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-11 h-11 bg-[#1B2B4B] rounded-full flex items-center justify-center text-white font-bold text-xl">
                {testimonials[current].name[0]}
              </div>
              <div>
                <p className={`font-bold ${dark ? "text-white" : "text-[#1B2B4B]"}`}>{testimonials[current].name}</p>
                <p className="text-sm text-gray-500">{testimonials[current].city}, FL · {testimonials[current].service}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={prev}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${dark ? "border-white/20 text-white hover:bg-white/10" : "border-[#1B2B4B] text-[#1B2B4B] hover:bg-[#1B2B4B] hover:text-white"}`}
            aria-label="Previous review"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-200 rounded-full ${
                  i === current ? "w-6 h-2.5 bg-[#D4922A]" : "w-2.5 h-2.5 bg-gray-300"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${dark ? "border-white/20 text-white hover:bg-white/10" : "border-[#1B2B4B] text-[#1B2B4B] hover:bg-[#1B2B4B] hover:text-white"}`}
            aria-label="Next review"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
