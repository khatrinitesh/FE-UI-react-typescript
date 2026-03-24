import type { ButtonProps } from "../../../interface";

const Button = ({
  text,
  type = "button",
  className = "",
  onClick,
  children,
  disabled = false,
  variant = "primary",
  icon,
  iconPosition = "left",
}: ButtonProps) => {
  // 🎨 variants
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 rounded transition disabled:opacity-50 ${variants[variant]} ${className}`}
      >
        {/* Icon Left */}
        {icon && iconPosition === "left" && <span>{icon}</span>}

        {/* Text / Children */}
        {children ? children : text}

        {/* Icon Right */}
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </button>
    </>
  );
};

export default Button;
