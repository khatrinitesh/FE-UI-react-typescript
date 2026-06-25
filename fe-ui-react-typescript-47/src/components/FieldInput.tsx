import type { CSSProperties, InputHTMLAttributes, ReactNode } from "react";

type FieldInputProps = {
  label?: string;
  error?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  wrapperClassName?: string;
  className?: string;
  style?: CSSProperties;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FieldInput({
  label,
  error,
  icon,
  iconPosition = "left",
  wrapperClassName = "",
  className = "",
  style,
  disabled,
  maxLength,
  ...props
}: FieldInputProps) {
  const hasLeftIcon = icon && iconPosition === "left";
  const hasRightIcon = icon && iconPosition === "right";

  return (
    <div className={`w-full ${wrapperClassName}`}>
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        {hasLeftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}

        <input
          disabled={disabled}
          maxLength={maxLength}
          style={style}
          className={`
            w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none transition
            placeholder:text-gray-400
            disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500
            ${hasLeftIcon ? "pl-10" : ""}
            ${hasRightIcon ? "pr-10" : ""}
            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-gray-900"
            }
            ${className}
          `}
          {...props}
        />

        {hasRightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
