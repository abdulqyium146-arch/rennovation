"use client"

import Link from "next/link"
import { AlertTriangle, Home, Phone, RefreshCw } from "lucide-react"
import { COMPANY } from "@/lib/constants"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[80vh] bg-[#F7F6F2] flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={36} className="text-red-500" />
        </div>
        <h1 className="font-display text-3xl font-bold text-[#1B2B4B] mb-3">
          Something Went Wrong
        </h1>
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error. Please try refreshing the page or contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-[#D4922A] text-white font-bold px-6 py-3.5 rounded-lg hover:bg-[#F0B84A] transition-colors"
          >
            <RefreshCw size={18} /> Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border-2 border-[#1B2B4B] text-[#1B2B4B] font-bold px-6 py-3.5 rounded-lg hover:bg-[#1B2B4B] hover:text-white transition-colors"
          >
            <Home size={18} /> Home
          </Link>
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2 bg-[#1B2B4B] text-white font-bold px-6 py-3.5 rounded-lg hover:bg-[#2D4A7A] transition-colors"
          >
            <Phone size={18} /> Call Us
          </a>
        </div>
      </div>
    </div>
  )
}
