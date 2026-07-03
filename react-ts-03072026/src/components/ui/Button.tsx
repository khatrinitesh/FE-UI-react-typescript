import { Loader2 } from "lucide-react"
import type { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonVariant = "color1" | "color2"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
  loading?: boolean
  className?: string
}

export default function Button({
  children,
  variant = "color1",
  loading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const variantClasses: Record<ButtonVariant, string> = {
    color1: "bg-blue-600 text-white hover:bg-blue-700",
    color2: "bg-slate-900 text-white hover:bg-slate-800",
  }

  return (
    <button
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3
        text-sm font-semibold transition-all duration-200
        disabled:cursor-not-allowed disabled:opacity-60
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {loading && <Loader2 className="size-4 animate-spin" />}
      {children}
    </button>
  )
}