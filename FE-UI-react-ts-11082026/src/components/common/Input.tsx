import type { CSSProperties, InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  wrapperClassName?: string;
  style?: CSSProperties;
}

const Input = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  wrapperClassName = "",
  className = "",
  style,
  id,
  ...props
}: InputProps) => {
  const inputId = id || props.name;

  return (
    <div className={`w-full ${wrapperClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 top-1/2 flex -translate-y-1/2 items-center text-gray-500">
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          style={style}
          className={`
            h-11
            w-full
            rounded-lg
            border
            bg-white
            px-3
            text-sm
            text-gray-900
            outline-none
            transition
            placeholder:text-gray-400
            focus:border-black
            focus:ring-1
            focus:ring-black
            disabled:cursor-not-allowed
            disabled:bg-gray-100
            ${leftIcon ? "pl-10" : ""}
            ${rightIcon ? "pr-10" : ""}
            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300"
            }
            ${className}
          `}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center text-gray-500">
            {rightIcon}
          </span>
        )}
      </div>

      {error ? (
        <p className="mt-1.5 text-xs text-red-500">{error}</p>
      ) : helperText ? (
        <p className="mt-1.5 text-xs text-gray-500">{helperText}</p>
      ) : null}
    </div>
  );
};

export default Input;
