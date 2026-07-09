import type { CSSProperties, ReactNode, TextareaHTMLAttributes } from "react"

type FieldTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  error?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
  textareaClassName?: string
  style?: CSSProperties
}

export default function FieldTextarea({
  label,
  error,
  leftIcon,
  rightIcon,
  className = "",
  textareaClassName = "",
  maxLength,
  disabled,
  style,
  ...props
}: FieldTextareaProps) {
  return (
    <div className={`w-full space-y-2 ${className}`} style={style}>
      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 top-4 text-slate-400">
            {leftIcon}
          </span>
        )}

        <textarea
          disabled={disabled}
          maxLength={maxLength}
          className={`min-h-32 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-black disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 ${
            leftIcon ? "pl-10" : ""
          } ${rightIcon ? "pr-10" : ""} ${textareaClassName}`}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3 top-4 text-slate-400">
            {rightIcon}
          </span>
        )}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}