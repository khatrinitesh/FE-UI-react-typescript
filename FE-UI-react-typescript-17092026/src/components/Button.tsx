import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary/90",
  outline: "border border-black/20 text-black hover:bg-black/5",
  secondary: "bg-secondary text-black hover:bg-secondary/90",
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button {...props} className={`cursor-pointer rounded-md px-6 py-3 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
}
