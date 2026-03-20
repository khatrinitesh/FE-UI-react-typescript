import type { TextAreaProps } from "../../../interface";

export const FieldTextArea: React.FC<TextAreaProps> = ({
  name,
  value,
  placeholder,
  error,
  onChange,
  disabled = false,
  className = "",
  maxLength,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
        className={`
          border p-2 rounded outline-none transition w-full resize-none
          ${error ? "border-red-500 focus:ring-2 focus:ring-red-300" : "focus:ring-2 focus:ring-black"}
          ${disabled ? "bg-gray-100 cursor-not-allowed opacity-70" : ""}
          ${className}
        `}
      />

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};
