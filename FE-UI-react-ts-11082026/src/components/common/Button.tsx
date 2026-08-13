import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
}

const Button = ({
  children,
  leftIcon,
  rightIcon,
  loading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={`
        inline-flex
        min-h-11
        items-center
        justify-center
        gap-2
        rounded-lg
        bg-black
        px-5
        py-2.5
        text-sm
        font-medium
        text-white
        transition
        hover:bg-gray-800
        focus:outline-none
        focus:ring-2
        focus:ring-black
        focus:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : (
        <>
          {leftIcon && (
            <span className="flex shrink-0 items-center">{leftIcon}</span>
          )}

          <span>{children}</span>

          {rightIcon && (
            <span className="flex shrink-0 items-center">{rightIcon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
