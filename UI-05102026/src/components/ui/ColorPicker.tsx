import type {
    CSSProperties,
    InputHTMLAttributes,
} from "react"
import { cn } from "../../utils/cn"


type ColorPickerVariant =
  | "default"
  | "outline"
  | "ghost"

type ColorPickerSize =
  | "sm"
  | "default"
  | "lg"

type ColorPickerProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> & {
  variant?: ColorPickerVariant
  size?: ColorPickerSize
  enabled?: boolean
  className?: string
  style?: CSSProperties
}

const variants: Record<ColorPickerVariant, string> = {
  default:
    "border-zinc-300 bg-white",

  outline:
    "border-zinc-400 bg-transparent",

  ghost:
    "border-transparent bg-transparent",
}

const sizes: Record<ColorPickerSize, string> = {
  sm: "size-8",
  default: "size-10",
  lg: "size-12",
}

export default function ColorPicker({
  variant = "default",
  size = "default",
  enabled = true,
  disabled = false,
  className,
  style,
  ...props
}: ColorPickerProps) {
  const isDisabled =
    disabled ||
    !enabled

  return (
    <input
      type="color"
      disabled={isDisabled}
      className={cn(
        "cursor-pointer rounded-lg border p-1",
        "transition-colors duration-200",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",

        "[&::-webkit-color-swatch-wrapper]:p-0",
        "[&::-webkit-color-swatch]:rounded-md",
        "[&::-webkit-color-swatch]:border-0",

        "[&::-moz-color-swatch]:rounded-md",
        "[&::-moz-color-swatch]:border-0",

        variants[variant],
        sizes[size],
        className
      )}
      style={style}
      {...props}
    />
  )
}