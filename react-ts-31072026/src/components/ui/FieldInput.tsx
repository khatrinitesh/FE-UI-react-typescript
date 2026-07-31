import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

export type IconPosition = "left" | "right";

export interface FieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  iconPosition?: IconPosition;
  containerClassName?: string;
}

export const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  function FieldInput(
    {
      icon,
      iconPosition = "left",
      containerClassName,
      className,
      disabled,
      maxLength,
      style,
      ...inputProps
    },
    ref,
  ) {
    const hasLeftIcon = Boolean(icon) && iconPosition === "left";

    const hasRightIcon = Boolean(icon) && iconPosition === "right";

    return (
      <span
        className={cn(
          "relative inline-flex w-full items-center",
          containerClassName,
        )}
      >
        {hasLeftIcon && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-3 inline-flex items-center justify-center text-brand-500"
          >
            {icon}
          </span>
        )}

        <input
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          style={style}
          className={cn(
            "h-11 w-full rounded-brand-md border border-border",
            "bg-surface px-3 text-sm text-foreground",
            "outline-none transition duration-200",
            "placeholder:text-muted-foreground",
            "hover:border-brand-300",
            "focus:border-primary focus:ring-4 focus:ring-brand-100",
            "disabled:cursor-not-allowed disabled:bg-brand-50 disabled:opacity-70",
            hasLeftIcon && "pl-10",
            hasRightIcon && "pr-10",
            className,
          )}
          {...inputProps}
        />

        {hasRightIcon && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3 inline-flex items-center justify-center text-brand-500"
          >
            {icon}
          </span>
        )}
      </span>
    );
  },
);
