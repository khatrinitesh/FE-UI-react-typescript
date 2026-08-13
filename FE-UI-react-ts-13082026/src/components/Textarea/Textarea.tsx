import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = ({ className = "", ...props }: TextareaProps) => {
  return (
    <textarea
      {...props}
      className={`
        min-h-32
        w-full
        resize-none
        border
        border-gray-300
        p-4
        outline-none
        transition
        focus:border-black
        ${className}
      `}
    />
  );
};

export default Textarea;
