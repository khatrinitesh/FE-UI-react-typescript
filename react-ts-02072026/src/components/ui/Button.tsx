import type React from "react"

type ButtonVariant = "color1" | "color2"
type IconPosition = "left" | "right"
type ButtonAlign = "left" | "center" | "right"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  icon?: React.ReactNode
  iconPosition?: IconPosition
  align?: ButtonAlign
  children: React.ReactNode
}

export default function Button({
  variant = "color1",
  icon,
  iconPosition = "left",
  align = "center",
  className = "",
  disabled,
  style,
  children,
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "color1"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-purple-600 text-white hover:bg-purple-700"

  const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[align]

  return (
    <button
      disabled={disabled}
      style={style}
      className={`
        cursor-pointer inline-flex h-11 w-full items-center gap-2 rounded-lg px-5 text-sm font-medium
        transition
        disabled:cursor-not-allowed disabled:opacity-60
        ${variantClass}
        ${alignClass}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}

      <span>{children}</span>

      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  )
}