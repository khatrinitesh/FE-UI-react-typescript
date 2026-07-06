import type { NumericInputProps } from "./NumericInput.types";

export default function NumericInput({
  value,
  label,
  placeholder = "Enter value",
  maxLength,
  className = "",
  style,
  disabled = false,
  onChange,
}: NumericInputProps) {
  const isNumeric = (text: string): boolean => {
    if (text.trim() === "") return false;
    return /^-?\d+(\.\d+)?$/.test(text);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange?.(inputValue, isNumeric(inputValue));
  };

  const valid = isNumeric(value);

  return (
    <div className={`space-y-2 ${className}`} style={style}>
      {label && (
        <label className="font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type="text"
        value={value}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleChange}
        className={`w-full rounded-lg border px-4 py-2 outline-none transition ${
          valid
            ? "border-green-500 focus:ring-2 focus:ring-green-400"
            : "border-red-500 focus:ring-2 focus:ring-red-400"
        }`}
      />

      <p
        className={`text-sm ${
          valid ? "text-green-600" : "text-red-600"
        }`}
      >
        {valid ? "✓ Numeric Value" : "✗ Not a Numeric Value"}
      </p>
    </div>
  );
}