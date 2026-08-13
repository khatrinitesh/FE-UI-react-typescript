import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "color1" | "color2";
type IconPosition = "left" | "right";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  className?: string;
}

const Button = ({
  children,
  variant = "color1",
  icon,
  iconPosition = "right",
  className = "",
  ...props
}: ButtonProps) => {
  const variantClasses = {
    color1: "bg-black text-white hover:bg-gray-800",
    color2: "bg-white text-black border border-black hover:bg-gray-100",
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        min-h-11
        items-center
        justify-center
        gap-2
        px-5
        py-2.5
        transition-colors
        duration-200
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {icon && iconPosition === "left" && icon}

      <span>{children}</span>

      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
