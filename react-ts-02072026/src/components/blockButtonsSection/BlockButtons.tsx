import { motion } from "framer-motion"
import { ArrowRight, Download, Send } from "lucide-react"

type BlockButtonProps = {
  children: React.ReactNode
  icon?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  variant?: "primary" | "secondary" | "dark"
}

function BlockButton({
  children,
  icon,
  onClick,
  disabled = false,
  className = "",
  variant = "primary",
}: BlockButtonProps) {
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    dark: "bg-black text-white hover:bg-gray-900",
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: disabled ? 1 : 0.96 }}
      whileHover={{ y: disabled ? 0 : -2 }}
      transition={{ duration: 0.2 }}
      className={`
        flex w-full items-center justify-center gap-2
        rounded-xl px-5 py-4 text-base font-semibold
        shadow-sm transition-all duration-300
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
    >
      <span>{children}</span>
      {icon && <span className="flex items-center">{icon}</span>}
    </motion.button>
  )
}

export default function BlockButtonsExample() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-md space-y-4 rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900">Block Buttons</h1>

        <BlockButton icon={<ArrowRight size={20} />}>
          Continue
        </BlockButton>

        <BlockButton variant="secondary" icon={<Download size={20} />}>
          Download File
        </BlockButton>

        <BlockButton variant="dark" icon={<Send size={20} />}>
          Send Message
        </BlockButton>

        <BlockButton disabled>
          Disabled Button
        </BlockButton>
      </div>
    </div>
  )
}