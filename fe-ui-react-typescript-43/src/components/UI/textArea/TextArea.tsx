import type { TextareaProps } from "../../../interface";

const TextArea = ({
  value,
  onChange,
  placeholder,
  maxLength,
  disabled = false,
  className = "",
}: TextareaProps) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      className={`border rounded p-2 w-full outline-none ${className} ${
        disabled ? "opacity-50" : ""
      }`}
    />
  );
};

export default TextArea;
