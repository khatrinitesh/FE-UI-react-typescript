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
  children,
}) => {
  return (
    <div
      className={`
        w-full
        rounded-full
        border border-[#d4cbea]
        bg-[#f3f3f5]
        px-4 h-9
        flex items-center

        transition-colors transition-shadow duration-200
        focus-within:border-[#6c4b97]
        focus-within:shadow-[0_0_0_3px_rgba(181,164,199,1)]

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
        className="
          w-full
          bg-transparent
          text-sm congenial-regular
          text-black
          placeholder:text-[#9ca3af]
          focus:outline-none
          border-none
        "
      />

      {children && (
        <div className="ml-2 flex items-center shrink-0">{children}</div>
      )}
    </div>
  );
};

export default FieldInput;
