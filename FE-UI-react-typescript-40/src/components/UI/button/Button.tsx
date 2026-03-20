import type { ButtonProps, Variant } from "../../../interface";

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant = "primary",
  disabled = false,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-4 py-2 rounded transition";

  const variants: Record<Variant, string> = {
    primary: "bg-black text-white hover:opacity-80",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline: "border border-black text-black hover:bg-black hover:text-white",
  };

  const disabledStyle = "opacity-50 cursor-not-allowed";

  return (
    <button
      {...props}
      disabled={disabled}
      className={`
       cursor-pointer ${baseStyle}
        ${variants[variant]}
        ${disabled ? disabledStyle : ""}
        ${className}
      `}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
};
