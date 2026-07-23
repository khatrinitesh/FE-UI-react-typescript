import {
    forwardRef,
    useState,
    type ChangeEvent,
} from "react";
import type { FieldTextareaProps } from "../../interfaces/component.interface";
import { cn } from "../../utils/cn";


export const FieldTextarea = forwardRef<
  HTMLTextAreaElement,
  FieldTextareaProps
>(function FieldTextarea(
  {
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    maxLength,
    showCharacterCount = false,
    containerClassName,
    textareaClassName,
    className,
    style,
    value,
    defaultValue,
    onChange,
    disabled,
    rows = 5,
    ...props
  },
  ref,
) {
  const initialLength =
    typeof value === "string"
      ? value.length
      : typeof defaultValue === "string"
        ? defaultValue.length
        : 0;

  const [characterCount, setCharacterCount] = useState(initialLength);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCharacterCount(event.target.value.length);
    onChange?.(event);
  };

  const currentLength =
    typeof value === "string" ? value.length : characterCount;

  return (
    <div className={cn("w-full", containerClassName)}>
      {label && (
        <label
          htmlFor={props.id}
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          {label}

          {props.required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute top-3.5 left-3 text-slate-400">
            {leftIcon}
          </span>
        )}

        <textarea
          {...props}
          ref={ref}
          rows={rows}
          value={value}
          defaultValue={defaultValue}
          maxLength={maxLength}
          disabled={disabled}
          onChange={handleChange}
          style={style}
          className={cn(
            "w-full resize-y rounded-lg border bg-white px-3 py-3 text-sm",
            "text-slate-900 outline-none transition",
            "placeholder:text-slate-400",
            "focus:border-blue-500 focus:ring-2 focus:ring-blue-100",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            error && "border-red-500 focus:border-red-500 focus:ring-red-100",
            disabled && "cursor-not-allowed bg-slate-100 opacity-70",
            textareaClassName,
            className,
          )}
        />

        {rightIcon && (
          <span className="absolute top-3.5 right-3 text-slate-400">
            {rightIcon}
          </span>
        )}
      </div>

      <div className="mt-1 flex min-h-5 items-start justify-between gap-3">
        <div>
          {error ? (
            <p className="text-xs text-red-600">{error}</p>
          ) : helperText ? (
            <p className="text-xs text-slate-500">{helperText}</p>
          ) : null}
        </div>

        {showCharacterCount && maxLength && (
          <span
            className={cn(
              "shrink-0 text-xs text-slate-500",
              currentLength >= maxLength && "text-red-500",
            )}
          >
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
});