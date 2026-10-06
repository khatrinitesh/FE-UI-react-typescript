import { LoaderCircle } from "lucide-react"
import type {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react"

import { cn } from "../../utils/cn"
import { notifyDanger, notifySuccess } from "../../utils/notify"

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "filled"
  | "ghost"
  | "dark"
  | "danger"
  | "success"

type IconPosition = "left" | "right"

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    variant?: ButtonVariant
    icon?: ReactNode
    iconPosition?: IconPosition
    enabled?: boolean
    loading?: boolean
    fullWidth?: boolean
    className?: string
    style?: CSSProperties
    text: string
    successMessage?: string
  }

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-950 text-white hover:bg-zinc-800",

  secondary:
    "bg-zinc-200 text-zinc-950 hover:bg-zinc-300",

  outline:
    "border border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-50",

  filled:
    "bg-zinc-100 text-zinc-700 hover:bg-zinc-200",

  ghost:
    "bg-transparent text-zinc-700 hover:bg-zinc-100",

  dark:
    "bg-zinc-950 text-white hover:bg-zinc-800",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  success:
    "bg-emerald-600 text-white hover:bg-emerald-700",
}

export default function Button({
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  enabled = true,
  loading = false,
  fullWidth = false,
  disabled = false,
  className,
  style,
  text,
  successMessage = "Copied",
  onClick,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled =
    disabled ||
    !enabled ||
    loading

  async function handleClick(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    onClick?.(event)

    if (event.defaultPrevented) {
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      notifySuccess(successMessage)
    } catch {
      notifyDanger("Unable to copy text")
    }
  }

  return (
    <button
      {...props}
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
      style={style}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-medium",
        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",

        variants[variant],

        fullWidth && "w-full",

        className
      )}
    >
      {loading && (
        <LoaderCircle
          size={18}
          className="animate-spin"
        />
      )}

      {!loading &&
        icon &&
        iconPosition === "left" &&
        icon}

      {children}

      {!loading &&
        icon &&
        iconPosition === "right" &&
        icon}
    </button>
  )
}
