import type { CSSProperties, InputHTMLAttributes, ReactNode } from "react"

type FieldInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
  inputClassName?: string
  style?: CSSProperties
}

export default function FieldInput({
  label,
  error,
  leftIcon,
  rightIcon,
  className = "",
  inputClassName = "",
  maxLength,
  disabled,
  style,
  ...props
}: FieldInputProps) {
  return (
    <div className={`w-full space-y-2 ${className}`} style={style}>
      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {leftIcon}
          </span>
        )}

        <input
          disabled={disabled}
          maxLength={maxLength}
          className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-black disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 ${
            leftIcon ? "pl-10" : ""
          } ${rightIcon ? "pr-10" : ""} ${inputClassName}`}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            {rightIcon}
          </span>
        )}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}