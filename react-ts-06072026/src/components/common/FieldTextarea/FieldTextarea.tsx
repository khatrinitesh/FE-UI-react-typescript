import type {
  CSSProperties,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

 interface FieldTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  style?: CSSProperties;
  containerClassName?: string;
  showCount?: boolean;
}

const FieldTextarea = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = "",
  containerClassName = "",
  style,
  showCount = false,
  value,
  maxLength,
  ...props
}: FieldTextareaProps) => {
  const currentLength = String(value ?? "").length;

  return (
    <div
      className={`space-y-2 ${containerClassName}`}
      style={style}
    >
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div
        className={`
          flex
          items-start
          rounded-lg
          border
          px-3
          py-2
          transition
          ${
            error
              ? "border-red-500"
              : "border-gray-300 focus-within:border-indigo-600"
          }
        `}
      >
        {leftIcon && (
          <div className="mt-2 mr-2 text-gray-500">
            {leftIcon}
          </div>
        )}

        <textarea
          {...props}
          value={value}
          maxLength={maxLength}
          className={`
            w-full
            resize-none
            bg-transparent
            outline-none
            ${className}
          `}
        />

        {rightIcon && (
          <div className="mt-2 ml-2 text-gray-500">
            {rightIcon}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div>
          {error ? (
            <p className="text-sm text-red-500">
              {error}
            </p>
          ) : (
            helperText && (
              <p className="text-sm text-gray-500">
                {helperText}
              </p>
            )
          )}
        </div>

        {showCount && maxLength && (
          <span className="text-xs text-gray-400">
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

export default FieldTextarea;