import type { FieldInputProps } from "../../../interface";

const FieldInput: React.FC<FieldInputProps> = ({
  name,
  value,
  placeholder,
  error,
  type = "text",
  onChange,
  disabled = false,
  className = "",
  maxLength,
}) => {
  return (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      maxLength={maxLength}
      className={`
        border p-2 rounded outline-none transition w-full
        ${error ? "border-red-500 focus:ring-2 focus:ring-red-300" : "focus:ring-2 focus:ring-black"}
        ${disabled ? "bg-gray-100 cursor-not-allowed opacity-70" : ""}
        ${className}
      `}
    />
  );
};

export default FieldInput;
