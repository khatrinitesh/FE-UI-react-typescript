import {
  forwardRef,
  type CSSProperties,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "../../utils/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: string;
  iconPosition?: "left" | "right";
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      icon,
      iconPosition = "left",
      className,
      style,
      maxLength,
      onClick,
      onChange,
      ...props
    },
    ref,
  ) => {
    const iconStyle: CSSProperties = icon
      ? {
          backgroundImage: `url("${icon}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "18px",
          backgroundPosition:
            iconPosition === "left" ? "16px 16px" : "calc(100% - 16px) 16px",
        }
      : {};

    return (
      <textarea
        ref={ref}
        maxLength={maxLength}
        onClick={onClick}
        onChange={onChange}
        className={cn(
          "min-h-32 w-full resize-y rounded-xl border border-slate-300",
          "bg-white px-4 py-3 text-sm text-slate-900",
          "placeholder:text-slate-400",
          "outline-none transition-all duration-200",
          "hover:border-slate-400",
          "focus:border-blue-500 focus:ring-4 focus:ring-blue-100",
          "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-60",
          icon && iconPosition === "left" && "pl-12",
          icon && iconPosition === "right" && "pr-12",
          className,
        )}
        style={{
          ...iconStyle,
          ...style,
        }}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
