import type { ButtonProps } from "../../../interface";

const Button = ({
  children,
  leftIcon,
  rightIcon,
  isLeftIcon = false,
  isRightIcon = false,
  variant = "primary",
  disabled,
  className = "",
  maxLength,
  ...props
}: ButtonProps) => {
  // 🎨 Variant styles
  const variantStyles = {
    primary: "bg-black text-white hover:opacity-90",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  // ✂️ optional text trimming
  const content =
    typeof children === "string" && maxLength
      ? children.slice(0, maxLength)
      : children;
  return (
    <>
      <button
        {...props}
        disabled={disabled}
        className={`
        cursor-pointer inline-flex items-center justify-center gap-2
        px-4 py-2 rounded transition
        ${variantStyles[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      >
        {isLeftIcon && leftIcon && <span>{leftIcon}</span>}

        <span>{content}</span>

        {isRightIcon && rightIcon && <span>{rightIcon}</span>}
      </button>
    </>
  );
};

export default Button;
