import type { ButtonProps, Variant } from "../../../interface";

const Button = ({
  children,
  onClick,
  disabled = false,
  className = "",
  variant = "primary",
  leftIcon,
  rightIcon,
}: ButtonProps & { variant?: Variant }) => {
  const base =
    "cursor-pointer text-base px-4 py-2 rounded flex items-center gap-2";

  const variants: Record<Variant, string> = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    danger: "bg-red-500 text-white",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
