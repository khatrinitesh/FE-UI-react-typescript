import type { FieldInputProps } from "../../interface";

const FieldInput: React.FC<FieldInputProps> = ({
  type = "text",
  placeholder = "",
  maxLength,
  id,
  name,
  disabled = false,
  readOnly = false,
  variant = "default",
  onChange,
  className = "",
}) => {
  const baseStyle =
    "px-4 py-2 w-full rounded-0 text-[1rem] md:text-[1rem] h-[6vh] 2xl:h-[5vh] poppins-regular outline-none transition duration-200";

  const variantStyles: Record<typeof variant, string> = {
    default: "border border-black focus:border-blue-500",
    outlined: "border-2 border-black focus:border-blue-600",
    underlined: "border-b border-gray-400 focus:border-b-blue-500 rounded-none",
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      autoComplete="new"
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      className={`${baseStyle} ${variantStyles[variant]} ${className} `}
    />
  );
};

export default FieldInput;
