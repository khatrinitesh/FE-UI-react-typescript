import { useState } from "react";

interface CheckCheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const CheckCheckbox = ({ label = "Accept terms and conditions", checked, defaultChecked = false, onChange, disabled = false, className = "" }: CheckCheckboxProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked ?? internalChecked;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    if (checked === undefined) setInternalChecked(value);
    onChange?.(value);
  };

  return (
    <label className={`check-checkbox inline-flex cursor-pointer items-center gap-2 ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} disabled={disabled} className="check-checkbox__input h-4 w-4 cursor-pointer accent-black" />
      <span className="check-checkbox__label text-sm text-gray-700">{label}</span>
    </label>
  );
};

export default CheckCheckbox;