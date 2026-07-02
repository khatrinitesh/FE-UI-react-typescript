import type React from "react"

type FieldTextareaVariant = "color1" | "color2"
type IconPosition = "left" | "right"
type TextAlign = "left" | "center" | "right"

interface FieldTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: FieldTextareaVariant
  icon?: React.ReactNode
  iconPosition?: IconPosition
  textAlign?: TextAlign
}

export default function FieldTextarea({
  variant = "color1",
  icon,
  iconPosition = "left",
  textAlign = "left",
  className = "",
  disabled,
  style,
  rows = 5,
  ...props
}: FieldTextareaProps) {
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
        <span className="pointer-events-none absolute left-4 top-4 text-gray-400">
          {icon}
        </span>
      )}

      <textarea
        disabled={disabled}
        rows={rows}
        style={style}
        className={`
          w-full resize-none rounded-lg border bg-white py-3 text-sm text-gray-900
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
        <span className="pointer-events-none absolute right-4 top-4 text-gray-400">
          {icon}
        </span>
      )}
    </span>
  )
}