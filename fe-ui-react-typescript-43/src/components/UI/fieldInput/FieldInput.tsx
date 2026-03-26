import type { InputProps } from "../../../interface";

const FieldInput = ({
  value,
  onChange,
  placeholder,
  maxLength,
  disabled = false,
  className = "",
  leftIcon,
  rightIcon,
}: InputProps) => {
  return (
    <>
      {leftIcon && (
        <span className="absolute left-2 top-1/2 -translate-y-1/2">
          {leftIcon}
        </span>
      )}

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        className={`
          border rounded px-2 py-2 outline-none w-full
          ${leftIcon ? "pl-8" : ""}
          ${rightIcon ? "pr-8" : ""}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${className}
        `}
      />

      {rightIcon && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2">
          {rightIcon}
        </span>
      )}
    </>
  );
};

export default FieldInput;
