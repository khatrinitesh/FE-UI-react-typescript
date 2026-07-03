import type { InputHTMLAttributes, ReactNode } from "react"

type IconPosition = "left" | "right"

type FieldInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  icon?: ReactNode
  iconPosition?: IconPosition
  className?: string
  inputClassName?: string
}

export default function FieldInput({
  label,
  error,
  icon,
  iconPosition = "left",
  className = "",
  inputClassName = "",
  disabled,
  maxLength,
  ...props
}: FieldInputProps) {
  const hasLeftIcon = icon && iconPosition === "left"
  const hasRightIcon = icon && iconPosition === "right"

  return (
    <div className={`w-full space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">
        {hasLeftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}

        <input
          disabled={disabled}
          maxLength={maxLength}
          className={`
            w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm
            outline-none transition
            placeholder:text-slate-400
            focus:border-blue-500 focus:ring-4 focus:ring-blue-100
            disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500
            ${hasLeftIcon ? "pl-10" : ""}
            ${hasRightIcon ? "pr-10" : ""}
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}
            ${inputClassName}
          `}
          {...props}
        />

        {hasRightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}
      </div>

      {error && <p className="text-xs font-medium text-red-500">{error}</p>}
    </div>
  )
}