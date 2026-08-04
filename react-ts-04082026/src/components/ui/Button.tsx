import { LoaderCircle } from "lucide-react";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
  loadingText?: string;
}

const variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-100",

  secondary:
    "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 focus:ring-slate-200",

  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-100",

  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-200",
};

const sizeClasses = {
  small: "min-h-9 px-3 py-1.5 text-xs",
  medium: "min-h-11 px-5 py-2.5 text-sm",
  large: "min-h-13 px-6 py-3 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      icon,
      iconPosition = "left",
      variant = "primary",
      size = "medium",
      isLoading = false,
      loadingText = "Please wait...",
      type = "button",
      disabled,
      className,
      onClick,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        onClick={onClick}
        style={style}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl",
          "font-semibold outline-none transition-all duration-200",
          "focus:ring-4",
          "disabled:cursor-not-allowed disabled:opacity-60",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {isLoading && (
          <LoaderCircle size={18} aria-hidden="true" className="animate-spin" />
        )}

        {!isLoading && iconPosition === "left" && icon}

        {isLoading ? loadingText : children}

        {!isLoading && iconPosition === "right" && icon}
      </button>
    );
  },
);

Button.displayName = "Button";
