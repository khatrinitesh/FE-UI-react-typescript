import { motion } from "motion/react";

import type { ButtonProps } from "../../interfaces/component.interface";
import { cn } from "../../utils/cn";

const variantClasses = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-300",

  secondary:
    "bg-slate-800 text-white hover:bg-slate-900 focus-visible:ring-slate-300",

  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-300",

  outline:
    "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-200",

  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-200",
};

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <motion.button
      type={type}
      disabled={isDisabled}
      whileTap={isDisabled ? undefined : { scale: 0.97 }}
      className={cn(
        "cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg font-medium",
        "transition focus-visible:ring-4 focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="size-4 rounded-full border-2 border-current border-t-transparent"
          />

          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </motion.button>
  );
}