import type {
    ButtonHTMLAttributes,
    CSSProperties,
    ReactNode,
} from "react"

import { LoaderCircle } from "lucide-react"
import { cn } from "../../utils/cn"


export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success"

type IconPosition = "left" | "right"

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
    enabled?: boolean

    icon?: ReactNode
    iconPosition?: IconPosition

    loading?: boolean
    fullWidth?: boolean

    className?: string
    style?: CSSProperties
  }

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-950 text-white hover:bg-zinc-800",

  secondary:
    "bg-zinc-100 text-zinc-950 hover:bg-zinc-200",

  outline:
    "border border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-50",

  ghost:
    "bg-transparent text-zinc-700 hover:bg-zinc-100",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  success:
    "bg-emerald-600 text-white hover:bg-emerald-700",
}

export default function Button({
  children,

  variant = "primary",
  enabled = true,

  icon,
  iconPosition = "left",

  loading = false,
  fullWidth = false,

  disabled = false,

  className,
  style,

  type = "button",

  ...props
}: ButtonProps) {
  const isDisabled =
    disabled ||
    !enabled ||
    loading

  return (
    <button
      type={type}
      disabled={isDisabled}
      style={style}
      className={cn(
        "cursor-pointer inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-medium transition-colors duration-200",

        "disabled:pointer-events-none disabled:opacity-50",

        variants[variant],

        fullWidth && "w-full",

        className
      )}
      {...props}
    >
      {loading && (
        <LoaderCircle
          size={18}
          className="animate-spin"
        />
      )}

      {!loading &&
        iconPosition === "left" &&
        icon}

      {children}

      {!loading &&
        iconPosition === "right" &&
        icon}
    </button>
  )
}
