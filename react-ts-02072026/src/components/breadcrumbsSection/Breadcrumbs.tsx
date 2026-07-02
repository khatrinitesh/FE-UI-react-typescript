import { Link, useLocation } from "@tanstack/react-router"
import { motion } from "framer-motion"
import { ChevronRight, Home } from "lucide-react"

type BreadcrumbItem = {
  label: string
  path: string
}

const routeLabels: Record<string, string> = {
  "": "Home",
  about: "About",
  contact: "Contact",
  workshops: "Workshops",
  users: "Users",
  coaches: "Coaches",
  edit: "Edit",
  create: "Create",
}

export default function Breadcrumbs() {
  const location = useLocation()

  const pathSegments = location.pathname.split("/").filter(Boolean)

  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: "Home",
      path: "/",
    },
    ...pathSegments.map((segment, index) => {
      const path = "/" + pathSegments.slice(0, index + 1).join("/")

      return {
        label: routeLabels[segment] || formatLabel(segment),
        path,
      }
    }),
  ]

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <motion.ol
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex flex-wrap items-center gap-1 text-sm text-gray-500"
      >
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1

          return (
            <li key={item.path} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}

              {isLast ? (
                <motion.span
                  layout
                  className="font-medium text-gray-900"
                >
                  {item.label}
                </motion.span>
              ) : (
                <Link
                  to={item.path}
                  className="flex items-center gap-1 rounded-md px-1.5 py-1 font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                >
                  {index === 0 && <Home className="h-4 w-4" />}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          )
        })}
      </motion.ol>
    </nav>
  )
}

function formatLabel(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
}