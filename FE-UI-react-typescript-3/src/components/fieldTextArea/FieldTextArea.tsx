import React from "react";
import type { FieldTextAreaProps } from "../../interface";

const FieldTextArea: React.FC<FieldTextAreaProps> = ({
  placeholder = "",
  maxLength,
  id,
  name,
  disabled = false,
  readOnly = false,
  rows = 4,
  variant = "default",
  onChange,
  className = "",
}) => {
  const baseStyle =
    "px-4 py-2 w-full rounded-0 text-[1rem] md:text-[1rem] poppins-regular outline-none transition duration-200 resize-none";

  const variantStyles: Record<typeof variant, string> = {
    default: "border border-black focus:border-blue-500",
    outlined: "border-2 border-black focus:border-blue-600",
    underlined: "border-b border-gray-400 focus:border-b-blue-500 rounded-none",
  };

  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      readOnly={readOnly}
      rows={rows}
      onChange={onChange}
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
    />
  );
};

export default FieldTextArea;
