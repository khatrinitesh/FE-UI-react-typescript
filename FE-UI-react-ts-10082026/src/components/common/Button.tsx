import type { CSSProperties, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Button = ({
  children,
  className = "",
  style,
  onClick,
  type = "button",
  disabled = false,
  icon,
  iconPosition = "left",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`cursor-pointer inline-flex items-center justify-center gap-2 ${className}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && icon}

      {children}

      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
