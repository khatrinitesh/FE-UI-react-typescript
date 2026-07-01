
import type React from "react"
import { cn } from "../../utils/cn"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  variant?: "primary" | "outline" | "ghost"
}

export const Button = ({
  children,
  leftIcon,
  rightIcon,
  className,
  disabled,
  onClick,
  style,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          "bg-red-600 text-white hover:bg-red-700",
        variant === "outline" &&
          "border border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white",
        variant === "ghost" &&
          "bg-transparent text-red-600 hover:bg-red-50",
        className,
      )}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}

      {children}

      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  )
}
