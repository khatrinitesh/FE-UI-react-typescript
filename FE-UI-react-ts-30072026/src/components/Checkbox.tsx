import { Check } from "lucide-react";
import { useId } from "react";

type CheckboxProps = {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled = false,
}: CheckboxProps) {
  const checkboxId = useId();

  return (
    <label
      htmlFor={checkboxId}
      className={[
        "group flex items-start gap-3 rounded-2xl border p-4 transition",
        checked
          ? "border-primary bg-primary/10"
          : "border-slate-200 bg-white hover:border-primary/60 dark:border-slate-700 dark:bg-slate-900",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
      ].join(" ")}
    >
      <span className="relative mt-0.5 shrink-0">
        <input
          id={checkboxId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(event) => onChange(event.target.checked)}
          className="peer sr-only"
        />

        <span className="flex size-6 items-center justify-center rounded-lg border-2 border-slate-300 bg-white transition peer-checked:border-secondary peer-checked:bg-secondary peer-focus-visible:ring-4 peer-focus-visible:ring-primary/30 dark:border-slate-600 dark:bg-slate-950 dark:peer-checked:border-primary dark:peer-checked:bg-primary">
          <Check
            size={16}
            strokeWidth={3}
            className="scale-0 text-white transition-transform peer-checked:scale-100 dark:text-slate-950"
          />
        </span>
      </span>

      <span className="min-w-0">
        <span className="block text-brand-14 text-slate-900 dark:text-white">
          {label}
        </span>

        {description && (
          <span className="mt-1 block text-brand-12 leading-5 text-slate-500 dark:text-slate-400">
            {description}
          </span>
        )}
      </span>
    </label>
  );
}
