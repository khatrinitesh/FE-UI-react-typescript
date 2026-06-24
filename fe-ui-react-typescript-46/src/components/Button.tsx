import type {
  AppButtonProps,
  ButtonAlign,
  ButtonVariant,
} from "../interfaces/common.interface";

export default function Button({
  children,
  variant = "color1",
  icon,
  iconPosition = "left",
  align = "center",
  fullWidth = false,
  disabled = false,
  className = "",
  ...props
}: AppButtonProps) {
  const variantClasses: Record<ButtonVariant, string> = {
    color1: "bg-black text-white hover:bg-gray-800",
    color2: "bg-blue-600 text-white hover:bg-blue-700",
  };

  const alignClasses: Record<ButtonAlign, string> = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <button
      disabled={disabled}
      className={`
        inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium
        transition-all disabled:bg-gray-300 disabled:text-gray-500
        disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${alignClasses[align]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
}
