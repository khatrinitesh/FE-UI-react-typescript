import { type ReactNode } from "react";

import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "../../utils/cn";

import { Loader } from "./Loader";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<
  HTMLMotionProps<"button">,
  "children"
> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  loadingText?: string;
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",

  secondary: "bg-brand-100 text-brand-950 hover:bg-brand-200",

  outline:
    "border border-brand-400 bg-transparent text-brand-700 hover:bg-brand-50",

  ghost: "bg-transparent text-brand-700 hover:bg-brand-50",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-xs",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  isLoading = false,
  loadingText,
  className,
  disabled,
  type = "button",
  ...buttonProps
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <motion.button
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading}
      whileHover={isDisabled ? undefined : { y: -1 }}
      whileTap={isDisabled ? undefined : { scale: 0.98 }}
      transition={{
        duration: 0.15,
      }}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "rounded-brand-md font-sans font-medium",
        "outline-none transition-colors duration-200",
        "focus-visible:ring-4 focus-visible:ring-brand-200",
        "disabled:cursor-not-allowed disabled:opacity-60",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...buttonProps}
    >
      {isLoading ? (
        <>
          <Loader size="sm" />

          <span>{loadingText || children}</span>
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span aria-hidden="true" className="inline-flex shrink-0">
              {icon}
            </span>
          )}

          <span>{children}</span>

          {icon && iconPosition === "right" && (
            <span aria-hidden="true" className="inline-flex shrink-0">
              {icon}
            </span>
          )}
        </>
      )}
    </motion.button>
  );
}
