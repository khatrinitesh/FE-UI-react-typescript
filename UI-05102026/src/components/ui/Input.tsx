import type {
    CSSProperties,
    InputHTMLAttributes,
} from "react"
import { cn } from "../../utils/cn"


type InputVariant =
  | "default"
  | "outline"
  | "filled"
  | "ghost"

type IconPosition = "left" | "right"

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  variant?: InputVariant
  enabled?: boolean

  /**
   * URL/path to icon.
   *
   * Example:
   * /assets/icons/mail.svg
   */
  icon?: string

  iconPosition?: IconPosition

  className?: string
  style?: CSSProperties
}

const variants: Record<InputVariant, string> = {
  default:
    "border-zinc-300 bg-white focus:border-zinc-950",

  outline:
    "border-zinc-300 bg-transparent focus:border-zinc-950",

  filled:
    "border-transparent bg-zinc-100 focus:border-zinc-300 focus:bg-white",

  ghost:
    "border-transparent bg-transparent focus:border-zinc-300",
}

export default function Input({
  variant = "default",
  enabled = true,
  disabled = false,

  icon,
  iconPosition = "left",

  className,
  style,

  ...props
}: InputProps) {
  const isDisabled = disabled || !enabled

  return (
    <input
      disabled={isDisabled}
      className={cn(
        "h-12 w-full rounded-xl border px-4 text-sm text-zinc-950 outline-none transition-colors duration-200",

        "placeholder:text-zinc-400",

        "disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-400 disabled:opacity-60",

        "read-only:bg-zinc-50",

        variants[variant],

        icon && iconPosition === "left" && "pl-11",

        icon && iconPosition === "right" && "pr-11",

        className
      )}
      style={{
        ...style,

        ...(icon
          ? {
              backgroundImage: `url("${icon}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "18px 18px",

              backgroundPosition:
                iconPosition === "left"
                  ? "16px center"
                  : "calc(100% - 16px) center",
            }
          : {}),
      }}
      {...props}
    />
  )
}