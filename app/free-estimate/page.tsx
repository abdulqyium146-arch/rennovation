"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CheckCircle, Phone, ArrowRight, Shield } from "lucide-react"
import Link from "next/link"
import { COMPANY, SERVICES, CITIES } from "@/lib/constants"
import BreadcrumbNav from "@/components/global/BreadcrumbNav"
import TrustBar from "@/components/global/TrustBar"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  city: z.string().min(1, "Please select your city"),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function FreeEstimatePage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    // Replace with your form submission endpoint (e.g. Formspree, Resend, or API route)
    console.log("Form data:", data)
    await new Promise((r) => setTimeout(r, 800)) // simulate network
    setSubmitted(true)
  }

  return (
    <>
      <TrustBar />
      <BreadcrumbNav items={[{ name: "Free Estimate", href: "/free-estimate" }]} />

      <section className="py-16 bg-[#F7F6F2] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <span className="text-[#D4922A] font-accent font-semibold text-sm uppercase tracking-wider">
                  100% Free · No Obligation
                </span>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1B2B4B] mt-2 leading-tight">
                  Get Your Free Home Renovation Estimate
                </h1>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Tell us about your project and we'll schedule a free in-home consultation — usually within 48 hours. No pressure, no commitments.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  "Free in-home consultation",
                  "Detailed written quote — no hidden fees",
                  "Licensed & insured crew",
                  "Response within 24 hours",
                  "Serving all of Central Florida",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-[#D4922A] shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#1B2B4B] text-white rounded-xl p-6 flex flex-col gap-3">
                <p className="font-display font-bold text-lg">Prefer to call?</p>
                <p className="text-gray-300 text-sm">Our team is available Mon–Sat, 8AM–6PM</p>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-2 text-[#D4922A] font-bold text-xl hover:text-[#F0B84A] transition-colors"
                >
                  <Phone size={20} />
                  {COMPANY.phone}
                </a>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield size={14} className="text-[#D4922A]" />
                License {COMPANY.licenseNumber} · Fully Insured · {COMPANY.rating}★ Rated
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center gap-5">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-[#1B2B4B]">
                    Estimate Request Sent!
                  </h2>
                  <p className="text-gray-600 max-w-sm">
                    Thank you! We'll reach out within 24 hours to schedule your free in-home consultation.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-[#D4922A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#F0B84A] transition-colors"
                  >
                    Back to Home <ArrowRight size={16} />
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-5"
                  noValidate
                >
                  <h2 className="font-display text-2xl font-bold text-[#1B2B4B]">
                    Request Your Free Estimate
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        {...register("name")}
                        className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4922A] focus:ring-1 focus:ring-[#D4922A]"
                      />
                      {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(407) 000-0000"
                        {...register("phone")}
                        className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4922A] focus:ring-1 focus:ring-[#D4922A]"
                      />
                      {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4922A] focus:ring-1 focus:ring-[#D4922A]"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700" htmlFor="service">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        {...register("service")}
                        className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4922A] focus:ring-1 focus:ring-[#D4922A] bg-white"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.slug}>{s.name}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-red-500 text-xs">{errors.service.message}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-gray-700" htmlFor="city">
                        Your City *
                      </label>
                      <select
                        id="city"
                        {...register("city")}
                        className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4922A] focus:ring-1 focus:ring-[#D4922A] bg-white"
                      >
                        <option value="">Select your city...</option>
                        {CITIES.map((c) => (
                          <option key={c.slug} value={c.slug}>{c.name}, FL</option>
                        ))}
                      </select>
                      {errors.city && <p className="text-red-500 text-xs">{errors.city.message}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700" htmlFor="message">
                      Project Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Describe your project — size, materials, timeline, budget range..."
                      {...register("message")}
                      className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#D4922A] focus:ring-1 focus:ring-[#D4922A] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D4922A] hover:bg-[#F0B84A] disabled:opacity-60 text-white font-bold py-4 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Request Free Estimate"}
                    {!isSubmitting && <ArrowRight size={20} />}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    By submitting, you agree to be contacted by {COMPANY.name}. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
