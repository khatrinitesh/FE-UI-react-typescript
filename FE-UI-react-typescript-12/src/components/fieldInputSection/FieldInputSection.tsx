import clsx from "clsx";
import type { InputProps } from "../../interface";

const FieldInputSection = ({
  type = "text",
  name,
  id,
  placeholder,
  maxLength,
  disabled,
  readOnly,
  variant = "default",
  onChange,
  className,
  value,
}: InputProps) => {
  const baseClasses =
    "w-full px-3 py-2 rounded text-sm transition border focus:outline-none";

  const variantClasses = {
    default: "border-gray-300 focus:border-blue-500",
    outlined: "border border-gray-400 focus:border-blue-600",
    underlined:
      "border-0 border-b border-gray-400 focus:border-blue-600 rounded-none",
  };
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      onChange={onChange}
      className={clsx(baseClasses, variantClasses[variant], className)}
    />
  );
};

export default FieldInputSection;
