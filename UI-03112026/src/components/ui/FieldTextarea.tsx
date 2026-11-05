import {
    forwardRef,
    type ReactNode,
    type TextareaHTMLAttributes,
} from "react";

import { cn } from "../../lib/cn";

type FieldTextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    error?: string;
  };

export const FieldTextarea = forwardRef<
  HTMLTextAreaElement,
  FieldTextareaProps
>(function FieldTextarea(
  {
    className,
    icon,
    iconPosition = "left",
    error,
    style,
    ...props
  },
  ref
) {
  const textarea = (
    <textarea
      ref={ref}
      aria-invalid={Boolean(error)}
      style={style}
      className={cn(
        "w-full min-h-28 resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-indigo-100",
        error && "border-red-500",
        Boolean(icon) && iconPosition === "left" && "pl-10",
        Boolean(icon) && iconPosition === "right" && "pr-10",
        className
      )}
      {...props}
    />
  );

  if (!icon) {
    return textarea;
  }

  return (
    <span className="relative block">
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-3 text-zinc-500",
          iconPosition === "left"
            ? "left-3"
            : "right-3"
        )}
      >
        {icon}
      </span>

      {textarea}
    </span>
  );
});