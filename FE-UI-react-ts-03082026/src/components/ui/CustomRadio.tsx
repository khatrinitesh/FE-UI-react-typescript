import { Check } from "lucide-react";

interface CustomRadioProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export default function CustomRadio({
  id,
  name,
  value,
  label,
  checked,
  disabled = false,
  onChange,
}: CustomRadioProps) {
  return (
    <label
      htmlFor={id}
      className={`
        flex cursor-pointer items-center gap-3 rounded-xl border
        p-4 transition-all duration-200
        ${
          checked
            ? "border-primary bg-primary/10"
            : "border-gray-300 bg-white hover:border-primary"
        }
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
      `}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(value)}
        className="hidden"
      />

      <div
        className={`
          flex h-6 w-6 items-center justify-center rounded-full border-2
          transition-all
          ${checked ? "border-primary bg-primary" : "border-gray-400"}
        `}
      >
        {checked && <Check size={14} className="text-white" strokeWidth={3} />}
      </div>

      <span className="text-gray-800 font-medium">{label}</span>
    </label>
  );
}
