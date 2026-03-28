import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { buildBreadcrumbSchema } from "@/lib/schema"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(allItems)),
        }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 bg-[#F7F6F2] border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            {allItems.map((item, i) => (
              <li key={item.href} className="flex items-center gap-1">
                {i === 0 && <Home size={13} className="text-gray-400 mr-0.5" />}
                {i < allItems.length - 1 ? (
                  <>
                    <Link
                      href={item.href}
                      className="hover:text-[#1B2B4B] hover:underline transition-colors"
                    >
                      {item.name}
                    </Link>
                    <ChevronRight size={13} className="text-gray-400" />
                  </>
                ) : (
                  <span className="text-[#1B2B4B] font-medium">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
