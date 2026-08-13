import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`
        h-11
        w-full
        border
        border-gray-300
        px-4
        outline-none
        transition
        focus:border-black
        ${className}
      `}
    />
  );
};

export default Input;
