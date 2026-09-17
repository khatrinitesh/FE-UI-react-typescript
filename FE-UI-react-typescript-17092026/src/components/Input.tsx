import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full rounded-md border border-black/20 px-4 py-3 outline-none transition-colors focus:border-primary disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    />
  );
}