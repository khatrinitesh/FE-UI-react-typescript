import type React from "react"

type FieldInputVariant = "color1" | "color2"
type IconPosition = "left" | "right"
type TextAlign = "left" | "center" | "right"

interface FieldInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: FieldInputVariant
  icon?: React.ReactNode
  iconPosition?: IconPosition
  textAlign?: TextAlign
}

export default function FieldInput({
  variant = "color1",
  icon,
  iconPosition = "left",
  textAlign = "left",
  className = "",
  disabled,
  style,
  ...props
}: FieldInputProps) {
  const variantClass =
    variant === "color1"
      ? "border-blue-300 focus:border-blue-600 focus:ring-blue-100"
      : "border-purple-300 focus:border-purple-600 focus:ring-purple-100"

  const textAlignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[textAlign]

  const paddingClass = icon
    ? iconPosition === "left"
      ? "pl-11 pr-4"
      : "pl-4 pr-11"
    : "px-4"

  return (
    <span className="relative block">
      {icon && iconPosition === "left" && (
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}

      <input
        disabled={disabled}
        style={style}
        className={`
          h-11 w-full rounded-lg border bg-white py-2.5 text-sm text-gray-900
          outline-none transition
          placeholder:text-gray-400
          focus:ring-2
          disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500
          ${variantClass}
          ${textAlignClass}
          ${paddingClass}
          ${className}
        `}
        {...props}
      />

      {icon && iconPosition === "right" && (
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}
    </span>
  )
}