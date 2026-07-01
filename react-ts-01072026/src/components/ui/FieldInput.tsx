
import type React from "react"
import { cn } from "../../utils/cn"

interface FieldInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  inputClassName?: string
}

const FieldInput = ({
  label,
  error,
  leftIcon,
  rightIcon,
  className,
  inputClassName,
  disabled,
  maxLength,
  style,
  ...props
}: FieldInputProps) => {
  return (
    <>
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <span
        className={cn(
          "relative block",
          disabled && "cursor-not-allowed opacity-60",
          className,
        )}
        style={style}
      >
        {leftIcon && (
          <span className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center text-gray-400">
            {leftIcon}
          </span>
        )}

        <input
          {...props}
          disabled={disabled}
          maxLength={maxLength}
          className={cn(
            "w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition",
            "focus:border-red-500 focus:ring-2 focus:ring-red-100",
            "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
            leftIcon ? "pl-10" : undefined,
            rightIcon ? "pr-10" : undefined,
            error && "border-red-500 focus:border-red-500 focus:ring-red-100",
            inputClassName,
          )}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center text-gray-400">
            {rightIcon}
          </span>
        )}
      </span>

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </>
  )
}

export default FieldInput