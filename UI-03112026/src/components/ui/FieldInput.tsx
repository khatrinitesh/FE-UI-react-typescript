import {
    forwardRef,
    type InputHTMLAttributes,
    type ReactNode,
} from "react";

import { cn } from "../../lib/cn";

type FieldInputProps =
  InputHTMLAttributes<HTMLInputElement> & {
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    error?: string;
  };

export const FieldInput = forwardRef<
  HTMLInputElement,
  FieldInputProps
>(function FieldInput(
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
  const input = (
    <input
      ref={ref}
      aria-invalid={Boolean(error)}
      style={style}
      className={cn(
        "w-full min-h-11 rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-indigo-100",
        error && "border-red-500",
        Boolean(icon) && iconPosition === "left" && "pl-10",
        Boolean(icon) && iconPosition === "right" && "pr-10",
        className
      )}
      {...props}
    />
  );

  if (!icon) {
    return input;
  }

  return (
    <span className="relative block">
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 text-zinc-500",
          iconPosition === "left"
            ? "left-3"
            : "right-3"
        )}
      >
        {icon}
      </span>

      {input}
    </span>
  );
});