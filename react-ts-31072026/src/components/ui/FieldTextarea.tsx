import { forwardRef, type ReactNode, type TextareaHTMLAttributes } from "react";

import { cn } from "../../utils/cn";

import type { IconPosition } from "./FieldInput";

export interface FieldTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: ReactNode;
  iconPosition?: IconPosition;
  containerClassName?: string;
}

export const FieldTextarea = forwardRef<
  HTMLTextAreaElement,
  FieldTextareaProps
>(function FieldTextarea(
  {
    icon,
    iconPosition = "left",
    containerClassName,
    className,
    disabled,
    maxLength,
    rows = 5,
    style,
    ...textareaProps
  },
  ref,
) {
  const hasLeftIcon = Boolean(icon) && iconPosition === "left";

  const hasRightIcon = Boolean(icon) && iconPosition === "right";

  return (
    <span className={cn("relative inline-block w-full", containerClassName)}>
      {hasLeftIcon && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-3 inline-flex text-brand-500"
        >
          {icon}
        </span>
      )}

      <textarea
        ref={ref}
        disabled={disabled}
        maxLength={maxLength}
        rows={rows}
        style={style}
        className={cn(
          "min-h-32 w-full resize-y rounded-brand-md",
          "border border-border bg-surface px-3 py-2.5",
          "text-sm text-foreground outline-none",
          "transition duration-200",
          "placeholder:text-muted-foreground",
          "hover:border-brand-300",
          "focus:border-primary focus:ring-4 focus:ring-brand-100",
          "disabled:cursor-not-allowed disabled:bg-brand-50 disabled:opacity-70",
          hasLeftIcon && "pl-10",
          hasRightIcon && "pr-10",
          className,
        )}
        {...textareaProps}
      />

      {hasRightIcon && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-3 inline-flex text-brand-500"
        >
          {icon}
        </span>
      )}
    </span>
  );
});
