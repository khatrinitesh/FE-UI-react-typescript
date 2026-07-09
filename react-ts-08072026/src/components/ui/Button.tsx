import type { ButtonHTMLAttributes, ReactNode } from "react"
import LoaderSpinner from "./LoaderSpinner"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
}

export default function Button({
  children,
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = "",
  onClick,
  style,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      style={style}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {loading ? <LoaderSpinner /> : leftIcon}

      <span>{children}</span>

      {!loading && rightIcon}
    </button>
  )
}