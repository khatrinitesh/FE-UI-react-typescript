import {
    forwardRef,
    useState,
    type ChangeEvent,
} from "react";
import type { FieldInputProps } from "../../interfaces/component.interface";
import { cn } from "../../utils/cn";



export const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  function FieldInput(
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      maxLength,
      showCharacterCount = false,
      containerClassName,
      inputClassName,
      className,
      style,
      value,
      defaultValue,
      onChange,
      disabled,
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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
            <span className="pointer-events-none absolute top-1/2 left-3 flex -translate-y-1/2 text-slate-400">
              {leftIcon}
            </span>
          )}

          <input
            {...props}
            ref={ref}
            value={value}
            defaultValue={defaultValue}
            maxLength={maxLength}
            disabled={disabled}
            onChange={handleChange}
            style={style}
            className={cn(
              "h-11 w-full rounded-lg border bg-white px-3 text-sm text-slate-900",
              "outline-none transition",
              "placeholder:text-slate-400",
              "focus:border-blue-500 focus:ring-2 focus:ring-blue-100",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-red-500 focus:border-red-500 focus:ring-red-100",
              disabled && "cursor-not-allowed bg-slate-100 opacity-70",
              inputClassName,
              className,
            )}
          />

          {rightIcon && (
            <span className="absolute top-1/2 right-3 flex -translate-y-1/2 text-slate-400">
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
  },
);