import {
    forwardRef,
    type ButtonHTMLAttributes,
    type ReactNode,
} from "react";

import { cn } from "../../lib/cn";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    loading?: boolean;
    variant?: "primary" | "outline" | "ghost";
  };

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(function Button(
  {
    className,
    children,
    icon,
    iconPosition = "left",
    loading = false,
    variant = "primary",
    disabled,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" &&
          "bg-brand-600 text-white hover:bg-brand-700",
        variant === "outline" &&
          "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50",
        variant === "ghost" &&
          "text-zinc-700 hover:bg-zinc-100",
        className
      )}
      {...props}
    >
      {loading && (
        <span
          aria-hidden
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}

      {!loading && icon && iconPosition === "left" && (
        <span aria-hidden>{icon}</span>
      )}

      {children}

      {!loading && icon && iconPosition === "right" && (
        <span aria-hidden>{icon}</span>
      )}
    </button>
  );
});