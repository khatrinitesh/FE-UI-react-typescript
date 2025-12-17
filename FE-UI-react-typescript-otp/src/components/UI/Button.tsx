import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  iconLeft?: ReactNode | boolean; // boolean true shows default icon
  iconRight?: ReactNode | boolean; // boolean true shows default icon
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`custom-button ${className} ${disabled ? "disabled" : ""}`}
    >
      {iconLeft && (
        <span className="icon-left">
          {typeof iconLeft === "boolean" ? "⬅️" : iconLeft}
        </span>
      )}
      <span className="button-text">{children}</span>
      {iconRight && (
        <span className="icon-right">
          {typeof iconRight === "boolean" ? "➡️" : iconRight}
        </span>
      )}
    </button>
  );
};

export default Button;
