import React from "react";
import type { FieldInputProps } from "../../../interface";

const FieldInput: React.FC<FieldInputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  maxLength,
  disabled = false,
  className = "",
  rightIcon,
  readOnly = false,
}) => {
  return (
    <div
      className={`
        w-full
        rounded-full
        border border-[#d4cbea]
        bg-[#f3f3f5]
        h-9
        px-5
        flex items-center
        gap-2
        transition-all duration-200
        focus-within:border-[#6c4b97]
        focus-within:shadow-[0_0_0_3px_rgba(181,164,199,0.9)]
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-text"}
        ${className}
      `}
    >
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        className="
          flex-1
          bg-transparent
          text-sm congenial-regular
          text-[#111827]
          placeholder:text-[#b3b1c3]
          focus:outline-none
          border-none
        "
      />

      {rightIcon && (
        <span className="flex items-center justify-center text-[#6c4b97]">
          {rightIcon}
        </span>
      )}
    </div>
  );
};

export default FieldInput;
