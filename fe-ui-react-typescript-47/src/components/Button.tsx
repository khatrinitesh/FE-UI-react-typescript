import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import Loader from "./Loader";

type ButtonVariant = "solid" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  color1?: string;
  color2?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  className?: string;
  style?: CSSProperties;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "solid",
  color1 = "#111827",
  color2 = "#ffffff",
  icon,
  iconPosition = "left",
  loading = false,
  disabled = false,
  className = "",
  style,
  onClick,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const variantStyles: CSSProperties =
    variant === "solid"
      ? {
          backgroundColor: color1,
          color: color2,
          border: `1px solid ${color1}`,
        }
      : variant === "outline"
        ? {
            backgroundColor: "transparent",
            color: color1,
            border: `1px solid ${color1}`,
          }
        : {
            backgroundColor: "transparent",
            color: color1,
            border: "1px solid transparent",
          };

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      style={{
        ...variantStyles,
        ...style,
      }}
      className={`
        cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5
        text-sm font-medium transition
        disabled:cursor-not-allowed disabled:opacity-60
        ${className}
      `}
      {...props}
    >
      {loading && <Loader size="sm" />}

      {!loading && icon && iconPosition === "left" && icon}

      <span>{children}</span>

      {!loading && icon && iconPosition === "right" && icon}
    </button>
  );
}
