import type {
    CSSProperties,
    InputHTMLAttributes,
    ReactNode,
} from "react"

import { cn } from "../../utils/cn"

type RadioVariant =
  | "default"
  | "dark"
  | "success"
  | "danger"

type RadioSize =
  | "sm"
  | "default"
  | "lg"

type CustomRadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> & {
  label?: ReactNode
  variant?: RadioVariant
  size?: RadioSize
  enabled?: boolean

  className?: string
  radioClassName?: string
  labelClassName?: string

  style?: CSSProperties
}

const variants: Record<RadioVariant, string> = {
  default:
    "peer-checked:border-zinc-950",

  dark:
    "peer-checked:border-black",

  success:
    "peer-checked:border-emerald-600",

  danger:
    "peer-checked:border-red-600",
}

const dotVariants: Record<RadioVariant, string> = {
  default:
    "peer-checked:bg-zinc-950",

  dark:
    "peer-checked:bg-black",

  success:
    "peer-checked:bg-emerald-600",

  danger:
    "peer-checked:bg-red-600",
}

const sizes: Record<RadioSize, string> = {
  sm: "size-4",

  default:
    "size-5",

  lg:
    "size-6",
}

const dotSizes: Record<RadioSize, string> = {
  sm:
    "after:size-1.5",

  default:
    "after:size-2",

  lg:
    "after:size-2.5",
}

export default function CustomRadio({
  id,
  label,

  variant = "default",
  size = "default",

  enabled = true,
  disabled = false,

  className,
  radioClassName,
  labelClassName,

  style,

  ...props
}: CustomRadioProps) {
  const isDisabled =
    disabled || !enabled

  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex w-fit items-center gap-3",

        isDisabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer",

        className
      )}
      style={style}
    >
      <span
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-white",

          "transition-colors duration-200",

          "has-focus-visible:ring-2 has-focus-visible:ring-zinc-950 has-focus-visible:ring-offset-2",

          sizes[size],
          variants[variant],

          radioClassName
        )}
      >
        <input
          {...props}
          id={id}
          type="radio"
          disabled={isDisabled}
          className="peer absolute inset-0 cursor-inherit opacity-0"
        />

        <span
          className={cn(
            "pointer-events-none rounded-full bg-transparent",
            "transition-all duration-150",

            "peer-checked:scale-100",
            "scale-0",

            sizes[size] === "size-4" && "size-1.5",
            sizes[size] === "size-5" && "size-2",
            sizes[size] === "size-6" && "size-2.5",

            dotVariants[variant]
          )}
        />
      </span>

      {label && (
        <span
          className={cn(
            "text-sm font-medium text-zinc-700",
            labelClassName
          )}
        >
          {label}
        </span>
      )}
    </label>
  )
}