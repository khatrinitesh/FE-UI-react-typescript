import { Check } from "lucide-react"
import type {
    CSSProperties,
    InputHTMLAttributes,
    ReactNode,
} from "react"

import { cn } from "../../utils/cn"

type CheckboxVariant =
  | "default"
  | "dark"
  | "success"
  | "danger"

type CheckboxSize =
  | "sm"
  | "default"
  | "lg"

type CustomCheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> & {
  label?: ReactNode
  variant?: CheckboxVariant
  size?: CheckboxSize
  enabled?: boolean

  className?: string
  checkboxClassName?: string
  labelClassName?: string

  style?: CSSProperties
}

const variants: Record<
  CheckboxVariant,
  string
> = {
  default:
    "peer-checked:border-zinc-950 peer-checked:bg-zinc-950",

  dark:
    "peer-checked:border-black peer-checked:bg-black",

  success:
    "peer-checked:border-emerald-600 peer-checked:bg-emerald-600",

  danger:
    "peer-checked:border-red-600 peer-checked:bg-red-600",
}

const sizes: Record<
  CheckboxSize,
  string
> = {
  sm: "size-4 rounded",

  default:
    "size-5 rounded-md",

  lg:
    "size-6 rounded-md",
}

const iconSizes: Record<
  CheckboxSize,
  number
> = {
  sm: 12,
  default: 14,
  lg: 17,
}

export default function CustomCheckbox({
  id,
  label,
  variant = "default",
  size = "default",
  enabled = true,
  disabled = false,
  className,
  checkboxClassName,
  labelClassName,
  style,
  ...props
}: CustomCheckboxProps) {
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
      <input
        {...props}
        id={id}
        type="checkbox"
        disabled={isDisabled}
        className="peer sr-only"
      />

      <span
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center border border-zinc-300 bg-white transition-colors duration-200",

          "peer-focus-visible:ring-2 peer-focus-visible:ring-zinc-950 peer-focus-visible:ring-offset-2",

          variants[variant],
          sizes[size],

          checkboxClassName
        )}
      >
        <Check
          size={iconSizes[size]}
          strokeWidth={3}
          className="scale-75 text-white opacity-0 transition-all duration-150 peer-checked:scale-100 peer-checked:opacity-100"
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