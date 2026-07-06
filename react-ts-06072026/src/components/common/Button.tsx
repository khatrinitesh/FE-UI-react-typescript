import { LoaderCircle } from "lucide-react";
import type { ButtonProps } from "../../interface/Button.interface";

const Button = ({
  children,
  variant = "primary",
  loading = false,
  leftIcon,
  rightIcon,
  className = "",
  style,
  disabled,
  ...props
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white",

    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      style={style}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        px-6
        py-3
        transition
        disabled:opacity-60
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {loading ? (
        <>
          <LoaderCircle className="animate-spin" size={18} />
          Loading...
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;