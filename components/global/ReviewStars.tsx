import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface ReviewStarsProps {
  rating?: number
  maxRating?: number
  size?: number
  className?: string
}

export default function ReviewStars({
  rating = 5,
  maxRating = 5,
  size = 16,
  className,
}: ReviewStarsProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.floor(rating) ? "fill-[#D4922A] text-[#D4922A]" : "text-gray-300"}
        />
      ))}
    </div>
  )
}
