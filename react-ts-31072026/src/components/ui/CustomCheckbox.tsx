import clsx from "clsx";
import { Check } from "lucide-react";

interface CheckboxProps {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function Checkbox({
  checked,
  label,
  onChange,
  disabled = false,
}: CheckboxProps) {
  return (
    <label
      className={clsx(
        "group inline-flex cursor-pointer items-center gap-3 select-none",
        disabled && "cursor-not-allowed opacity-50",
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />

      <div
        className={clsx(
          "flex h-6 w-6 items-center justify-center rounded-md border-2 transition-all duration-200",
          "border-primary bg-white",
          "peer-checked:bg-primary",
          "peer-focus-visible:ring-4 peer-focus-visible:ring-primary/20",
          "group-hover:scale-105",
        )}
      >
        <Check
          size={16}
          className={clsx(
            "text-white transition-all duration-200",
            checked ? "scale-100 opacity-100" : "scale-0 opacity-0",
          )}
        />
      </div>

      <span className="font-montserrat text-16 text-secondary">{label}</span>
    </label>
  );
}
