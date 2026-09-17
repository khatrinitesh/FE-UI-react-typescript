import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`w-full resize-none rounded-md border border-black/20 px-4 py-3 outline-none transition-colors focus:border-primary disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    />
  );
}