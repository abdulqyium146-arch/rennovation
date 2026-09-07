import type { Metadata } from "next"
import { Phone, Clock, Shield, CheckCircle, AlertTriangle, Star } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"

export const metadata: Metadata = {
  title: "Call for a Free Estimate | S&S FL Renovations LLC",
  description: `Get your free renovation estimate instantly — call ${COMPANY.phone} now. S&S FL Renovations LLC answers 24/7. Licensed, insured, serving Deltona & Volusia County.`,
}

const TRUST_ITEMS = [
  "Free in-home estimate — no obligation",
  "Licensed & insured — FL-CGC1234567",
  "We answer 24/7, including weekends",
  "Same-week scheduling available",
  "Se Habla Español",
  "500+ projects completed across Volusia County",
]

const REVIEWS = [
  { name: "Maria R.", city: "Deltona", text: "Called on a Saturday morning and they picked up immediately. Estimate was scheduled the same week. Highly recommend!" },
  { name: "James W.", city: "DeBary", text: "Called, got a real person, had an estimate in 2 days. No voicemail runaround. Fantastic experience." },
  { name: "Carlos M.", city: "Orange City", text: "They answered on the first ring. Quote was fair and honest — no hidden fees at all." },
]

export default function FreeEstimatePage() {
  return (
    <>
      <TrustBar />
      <BreadcrumbNav items={[{ name: "Free Estimate", href: "/free-estimate" }]} />

      <section className="py-16 bg-[#F7F6F2] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Urgency banner */}
          <div className="flex items-center justify-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-3 mb-10 text-sm font-semibold">
            <AlertTriangle size={16} className="shrink-0" />
            Slots are filling fast — call now to lock in your date
          </div>

          {/* Headline */}
          <div className="text-center mb-12">
            <span className="text-[#D4922A] font-semibold text-sm uppercase tracking-wider">
              100% Free · No Obligation · We Answer 24/7
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1B2B4B] mt-3 leading-tight">
              Call for Your Free<br />Renovation Estimate
            </h1>
            <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
              Skip the form. Speak directly with a renovation expert — get answers, pricing, and availability in one call.
            </p>
          </div>

          {/* Main call card */}
          <div className="relative bg-[#1B2B4B] rounded-3xl overflow-hidden shadow-2xl mb-10">
            {/* Gold top bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#D4922A] via-[#F0B84A] to-[#D4922A]" />

            <div className="px-8 py-12 text-center">
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 text-sm font-bold px-4 py-2 rounded-full mb-7">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                Lines Open Now — Real People Answer
              </div>

              <p className="text-gray-300 text-lg mb-3">Talk to a renovation expert right now</p>

              {/* Big phone button */}
              <a
                href={COMPANY.phoneHref}
                className="relative group inline-flex items-center justify-center gap-4 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-12 py-7 rounded-2xl text-3xl sm:text-4xl transition-all shadow-2xl shadow-[#D4922A]/40 hover:shadow-[#D4922A]/60 hover:-translate-y-1 mb-5 w-full max-w-lg mx-auto"
                aria-label={`Call S&S FL Renovations at ${COMPANY.phone}`}
              >
                <span className="absolute inset-0 rounded-2xl animate-ping bg-[#D4922A]/25 pointer-events-none" />
                <Phone size={36} className="relative shrink-0" />
                <span className="relative">{COMPANY.phone}</span>
              </a>

              <p className="text-gray-400 text-sm mb-8">
                ⚡ Average pickup time: under 2 minutes · Available Mon–Sun 7AM–8PM
              </p>

              {/* Trust row */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                {[
                  { icon: Shield, text: "Licensed & Insured" },
                  { icon: Clock,  text: "Same-Week Scheduling" },
                  { icon: CheckCircle, text: "No Pressure, No Obligation" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-gray-300 text-sm">
                    <Icon size={14} className="text-[#D4922A]" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why call section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* What you get */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <h2 className="font-display text-xl font-bold text-[#1B2B4B] mb-5">What Happens When You Call</h2>
              <div className="flex flex-col gap-4">
                {[
                  { step: "1", text: "A real renovation expert answers — no bots, no voicemail" },
                  { step: "2", text: "Tell us about your project in 2 minutes" },
                  { step: "3", text: "We schedule your free in-home estimate, usually within 48 hours" },
                  { step: "4", text: "Get a detailed written quote with no hidden fees" },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-[#D4922A] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {step}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust items */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <h2 className="font-display text-xl font-bold text-[#1B2B4B] mb-5">Why Homeowners Call Us First</h2>
              <div className="flex flex-col gap-3">
                {TRUST_ITEMS.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#D4922A] shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10">
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#D4922A] text-[#D4922A]" />
              ))}
              <span className="font-bold text-[#1B2B4B] ml-1">{COMPANY.rating} · {COMPANY.reviewCount}+ Google Reviews</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {REVIEWS.map(({ name, city, text }) => (
                <blockquote key={name} className="text-sm text-gray-600 italic leading-relaxed">
                  "{text}"
                  <footer className="mt-2 text-xs text-gray-400 not-italic font-semibold">— {name}, {city}, FL</footer>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">Ready to get started? Pick up the phone — it takes 2 minutes.</p>
            <a
              href={COMPANY.phoneHref}
              className="relative inline-flex items-center gap-3 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-10 py-5 rounded-xl text-xl transition-all shadow-xl hover:-translate-y-0.5"
              aria-label={`Call ${COMPANY.name}`}
            >
              <span className="absolute inset-0 rounded-xl animate-ping bg-[#D4922A]/25 pointer-events-none" />
              <Phone size={22} className="relative" />
              <span className="relative">Call {COMPANY.phone}</span>
            </a>
            <p className="text-xs text-gray-400 mt-3">License {COMPANY.licenseNumber} · Serving Deltona &amp; all of Volusia County</p>
          </div>

        </div>
      </section>
    </>
  )
}
