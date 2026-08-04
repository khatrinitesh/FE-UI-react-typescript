import type { ButtonHTMLAttributes, ReactNode } from "react";

type FadeButtonVariant = "primary" | "secondary" | "danger";

interface FadeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: FadeButtonVariant;
}

const variants: Record<FadeButtonVariant, string> = {
  primary:
    "bg-[#009eff] text-white hover:bg-[#007dcc] hover:shadow-lg hover:shadow-blue-500/30",
  secondary:
    "border border-[#525659] bg-white text-[#525659] hover:bg-[#525659] hover:text-white",
  danger:
    "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30",
};

export default function FadeButton({
  children,
  variant = "primary",
  className = "",
  disabled,
  ...props
}: FadeButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`
        inline-flex items-center justify-center rounded-lg px-5 py-3
        font-medium transition-all duration-500 ease-in-out
        hover:-translate-y-0.5
        active:translate-y-0 active:opacity-70
        disabled:cursor-not-allowed disabled:opacity-40
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
