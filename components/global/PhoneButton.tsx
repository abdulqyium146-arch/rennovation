"use client"

import { Phone } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface PhoneButtonProps {
  variant?: "primary" | "outline" | "ghost" | "white"
  size?: "sm" | "md" | "lg"
  className?: string
  showIcon?: boolean
  label?: string
}

export default function PhoneButton({
  variant = "primary",
  size = "md",
  className,
  showIcon = true,
  label,
}: PhoneButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded transition-all duration-200 whitespace-nowrap"

  const variants = {
    primary: "bg-[#D4922A] hover:bg-[#F0B84A] text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-[#D4922A] text-[#D4922A] hover:bg-[#D4922A] hover:text-white",
    ghost: "text-[#D4922A] hover:text-[#F0B84A] underline underline-offset-2",
    white: "bg-white text-[#1B2B4B] hover:bg-[#F7F6F2] shadow",
  }

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-7 py-4 text-lg",
  }

  return (
    <a
      href={COMPANY.phoneHref}
      className={cn(base, variants[variant], sizes[size], className)}
      aria-label={`Call ${COMPANY.name} at ${COMPANY.phone}`}
    >
      {showIcon && <Phone className="shrink-0" size={size === "sm" ? 14 : size === "lg" ? 20 : 16} />}
      {label ?? COMPANY.phone}
    </a>
  )
}
