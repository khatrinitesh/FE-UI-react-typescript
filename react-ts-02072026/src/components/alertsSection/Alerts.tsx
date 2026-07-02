import { AnimatePresence, motion } from "framer-motion"
import {
    AlertCircle,
    CheckCircle,
    Info,
    TriangleAlert,
    X,
} from "lucide-react"

export type AlertVariant = "success" | "error" | "warning" | "info"

interface AlertProps {
  title: string
  description?: string
  variant?: AlertVariant
  isOpen: boolean
  onClose?: () => void
}

const alertStyles = {
  success: {
    wrapper: "border-green-200 bg-green-50 text-green-800",
    icon: "text-green-600",
    Icon: CheckCircle,
  },
  error: {
    wrapper: "border-red-200 bg-red-50 text-red-800",
    icon: "text-red-600",
    Icon: AlertCircle,
  },
  warning: {
    wrapper: "border-yellow-200 bg-yellow-50 text-yellow-800",
    icon: "text-yellow-600",
    Icon: TriangleAlert,
  },
  info: {
    wrapper: "border-blue-200 bg-blue-50 text-blue-800",
    icon: "text-blue-600",
    Icon: Info,
  },
}

export default function Alert({
  title,
  description,
  variant = "info",
  isOpen,
  onClose,
}: AlertProps) {
  const styles = alertStyles[variant]
  const Icon = styles.Icon

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -12,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -12,
            scale: 0.96,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className={`flex w-full items-start gap-3 rounded-xl border p-4 shadow-sm ${styles.wrapper}`}
        >
          <Icon className={`mt-0.5 size-5 shrink-0 ${styles.icon}`} />

          <div className="flex-1">
            <h3 className="text-sm font-semibold">{title}</h3>

            {description && (
              <p className="mt-1 text-sm leading-5 opacity-80">
                {description}
              </p>
            )}
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-1 opacity-70 transition hover:bg-black/5 hover:opacity-100"
              aria-label="Close alert"
            >
              <X size={16} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}