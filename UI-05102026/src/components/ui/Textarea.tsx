import type {
    CSSProperties,
    TextareaHTMLAttributes,
} from "react"
import { cn } from "../../utils/cn"


type TextareaVariant =
  | "default"
  | "outline"
  | "filled"
  | "ghost"

type TextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: TextareaVariant
    enabled?: boolean
    className?: string
    style?: CSSProperties
  }

const variants: Record<TextareaVariant, string> = {
  default:
    "border-zinc-300 bg-white focus:border-zinc-950",

  outline:
    "border-zinc-300 bg-transparent focus:border-zinc-950",

  filled:
    "border-transparent bg-zinc-100 focus:border-zinc-300 focus:bg-white",

  ghost:
    "border-transparent bg-transparent focus:border-zinc-300",
}

export default function Textarea({
  variant = "default",
  enabled = true,
  disabled = false,

  className,
  style,

  rows = 5,

  ...props
}: TextareaProps) {
  const isDisabled = disabled || !enabled

  return (
    <textarea
      rows={rows}
      disabled={isDisabled}
      className={cn(
        "w-full resize-none rounded-xl border px-4 py-3 text-sm text-zinc-950 outline-none transition-colors duration-200",

        "placeholder:text-zinc-400",

        "disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-400 disabled:opacity-60",

        "read-only:bg-zinc-50",

        variants[variant],

        className
      )}
      style={style}
      {...props}
    />
  )
}