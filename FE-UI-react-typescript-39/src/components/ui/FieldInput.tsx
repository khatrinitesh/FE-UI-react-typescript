import React from "react";
import type { FieldInputProps } from "../../interface";

export const FieldInput: React.FC<FieldInputProps> = ({
  value,
  onChange,
  placeholder,
  maxLength,
  disabled,
  isLoading,
  className = "",
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled || isLoading}
      className={`border rounded-lg px-3 py-2 w-full ${className}`}
    />
  );
};
