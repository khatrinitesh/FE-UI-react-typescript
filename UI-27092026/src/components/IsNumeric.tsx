import { useState } from "react";

interface IsNumericProps {
  value?: string;
  onChange?: (value: string, isNumeric: boolean) => void;
  placeholder?: string;
  className?: string;
}

const IsNumeric = ({ value, onChange, placeholder = "Enter a number", className = "" }: IsNumericProps) => {
  const [internalValue, setInternalValue] = useState(value ?? "");
  const currentValue = value ?? internalValue;
  const isNumeric = currentValue.trim() !== "" && Number.isFinite(Number(currentValue));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    const numeric = nextValue.trim() !== "" && Number.isFinite(Number(nextValue));

    if (value === undefined) setInternalValue(nextValue);
    onChange?.(nextValue, numeric);
  };

  return (
    <div className={`is-numeric w-full max-w-sm ${className}`}>
      <input type="text" value={currentValue} onChange={handleChange} placeholder={placeholder} className={`is-numeric__input w-full rounded-lg border px-4 py-2.5 text-sm outline-none ${!currentValue ? "border-gray-300" : isNumeric ? "border-green-500" : "border-red-500"}`} />
      {currentValue && <p className={`is-numeric__message mt-1 text-xs ${isNumeric ? "text-green-600" : "text-red-600"}`}>{isNumeric ? "Value is numeric" : "Please enter a numeric value"}</p>}
    </div>
  );
};

export default IsNumeric;