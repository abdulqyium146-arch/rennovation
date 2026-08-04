import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { COMPANY } from "@/lib/constants"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: `Contact ${COMPANY.name} — Central Florida's top renovation contractor. Call ${COMPANY.phone} or request a free estimate online. Serving Orlando & all Central FL.`,
  slug: "contact",
})

export default function ContactPage() {
  return (
    <>
      <TrustBar />
      <BreadcrumbNav items={[{ name: "Contact", href: "/contact" }]} />

      <section className="py-20 bg-[#F7F6F2] min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h1 className="font-display text-4xl font-bold text-[#1B2B4B] mt-2">
              Contact S&S FL Renovations
            </h1>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Ready to start your project? Have a question? We're here to help — reach out any way you prefer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact cards */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: Phone,
                  title: "Call or Text",
                  value: COMPANY.phone,
                  href: COMPANY.phoneHref,
                  sub: "Available 24/7",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  value: COMPANY.email,
                  href: `mailto:${COMPANY.email}`,
                  sub: "We reply within 24 hours",
                },
                {
                  icon: MapPin,
                  title: "Service Area",
                  value: "Central Florida",
                  href: "/locations",
                  sub: "24 cities, all of Central FL",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  value: "Open 24/7",
                  href: null,
                  sub: "Always available — call anytime",
                },
              ].map(({ icon: Icon, title, value, href, sub }) => (
                <div key={title} className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-[#D4922A]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#D4922A]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{title}</p>
                    {href ? (
                      <a href={href} className="font-bold text-[#1B2B4B] hover:text-[#D4922A] transition-colors text-base">
                        {value}
                      </a>
                    ) : (
                      <p className="font-bold text-[#1B2B4B] text-base">{value}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA panel */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-[#1B2B4B] rounded-2xl p-8 text-white flex flex-col gap-5">
                <h2 className="font-display text-2xl font-bold">Get Your Free Estimate</h2>
                <p className="text-gray-300 leading-relaxed">
                  The fastest way to get started is our free estimate form. Tell us about your project and we'll schedule an in-home consultation — usually within 48 hours.
                </p>
                <Link
                  href="/free-estimate"
                  className="inline-flex items-center gap-2 bg-[#D4922A] hover:bg-[#F0B84A] text-white font-bold px-6 py-3.5 rounded-lg transition-colors w-fit"
                >
                  Request Free Estimate <ArrowRight size={18} />
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="font-display text-xl font-bold text-[#1B2B4B] mb-4">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { q: "How quickly can you start my project?", a: "Most projects begin within 2–4 weeks of signing the contract, depending on material lead times and schedule availability." },
                    { q: "Do you service my city?", a: "We serve 24 cities across Central Florida. Check our locations page or call us to confirm coverage in your area." },
                    { q: "What's included in the free estimate?", a: "A detailed written quote with itemized labor, materials, timeline, and payment schedule — no hidden fees." },
                  ].map(({ q, a }) => (
                    <div key={q} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <p className="font-semibold text-[#1B2B4B] text-sm mb-1">{q}</p>
                      <p className="text-gray-600 text-sm">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
