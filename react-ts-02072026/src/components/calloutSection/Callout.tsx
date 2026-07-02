import { motion } from "framer-motion"
import {
    AlertTriangle,
    CheckCircle,
    Info,
    XCircle,
    type LucideIcon,
} from "lucide-react"

type CalloutType = "info" | "success" | "warning" | "error"

interface CalloutProps {
  type?: CalloutType
  title: string
  children: React.ReactNode
}

const calloutStyles: Record<
  CalloutType,
  {
    icon: LucideIcon
    wrapper: string
    iconBox: string
    title: string
  }
> = {
  info: {
    icon: Info,
    wrapper: "border-blue-200 bg-blue-50 text-blue-900",
    iconBox: "bg-blue-100 text-blue-600",
    title: "text-blue-950",
  },
  success: {
    icon: CheckCircle,
    wrapper: "border-green-200 bg-green-50 text-green-900",
    iconBox: "bg-green-100 text-green-600",
    title: "text-green-950",
  },
  warning: {
    icon: AlertTriangle,
    wrapper: "border-yellow-200 bg-yellow-50 text-yellow-900",
    iconBox: "bg-yellow-100 text-yellow-600",
    title: "text-yellow-950",
  },
  error: {
    icon: XCircle,
    wrapper: "border-red-200 bg-red-50 text-red-900",
    iconBox: "bg-red-100 text-red-600",
    title: "text-red-950",
  },
}

export default function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  const styles = calloutStyles[type]
  const Icon = styles.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex gap-4 rounded-2xl border p-4 shadow-sm ${styles.wrapper}`}
    >
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${styles.iconBox}`}
      >
        <Icon size={20} />
      </div>

      <div>
        <h3 className={`text-sm font-semibold ${styles.title}`}>{title}</h3>

        <div className="mt-1 text-sm leading-6">{children}</div>
      </div>
    </motion.div>
  )
}