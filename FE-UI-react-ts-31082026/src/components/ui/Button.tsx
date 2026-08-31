import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  to?: string;
  variant?: "primary" | "secondary" | "inverse";
};

const buttonClasses = {
  primary: "button",
  secondary: "button-secondary",
  inverse: "button-inverse",
};

function Button({ children, to, variant = "primary", ...props }: ButtonProps) {
  const className = buttonClasses[variant];

  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
