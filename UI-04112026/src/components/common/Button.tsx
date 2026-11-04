import { Loader2 } from "lucide-react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline";
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
};

export default function Button({
  children,
  variant = "primary",
  loading = false,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold transition ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {loading && <Loader2 size={18} className="animate-spin" />}
      {loading ? "Please wait..." : children}
    </button>
  );
}
