import { Check } from "lucide-react";
import type { CheckBoxProps } from "../../interface/CheckBoxProps.interface";
import { useState } from "react";

export default function CheckboxSection(){
    const [checked,setChecked] = useState(false);
    return(
        <>
        <CheckBox
        id="agree"
        name="agree"
        label="I agree to the Terms & Conditions"
        checked={checked}
        onChange={setChecked}
      />

      <p className="mt-5">
        Checked: {checked ? "Yes" : "No"}
      </p>
        </>
    )
}

export const CheckBox = ({
  id,
  name,
  label,
  checked,
  disabled = false,
  className = "",
  style,
  children,
  onChange,
}: CheckBoxProps) => {
  return (
    <label
      htmlFor={id}
      style={style}
      className={`inline-flex items-center gap-3 select-none ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="sr-only"
      />

      <div
        className={`
          flex h-5 w-5 items-center justify-center
          rounded border-2 transition-all duration-200
          ${
            checked
              ? "border-indigo-600 bg-indigo-600"
              : "border-gray-400 bg-white"
          }
          ${disabled ? "opacity-50" : ""}
        `}
      >
        {checked && (
          <Check
            size={14}
            strokeWidth={3}
            className="text-white"
          />
        )}
      </div>

      {label && <span className="text-gray-700">{label}</span>}

      {children}
    </label>
  );
};