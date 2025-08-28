import type { InputProps } from "../../interface";

const FieldInput: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  maxLength,
  id,
  name,
  value,
  disabled = false,
  readOnly = false,
  variant = "default",
  onChange,
  className = "",
}) => {
  const baseStyle =
    "px-4 py-2 w-full text-[1rem] outline-none transition duration-200";

  const variantStyles: Record<string, string> = {
    default: "border border-black focus:border-blue-500",
    outlined: "border-2 border-black focus:border-blue-600",
    underlined: "border-b border-gray-400 focus:border-b-blue-500 rounded-none",
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      readOnly={readOnly}
      autoComplete="off"
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
    />
  );
};

export default FieldInput;
