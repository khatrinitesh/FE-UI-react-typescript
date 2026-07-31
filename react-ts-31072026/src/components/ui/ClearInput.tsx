import { Search, X } from "lucide-react";
import { useState } from "react";

type ClearInputProps = {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export default function ClearInput({
  label = "Search",
  placeholder = "Type something...",
  onChange,
}: ClearInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (nextValue: string) => {
    setValue(nextValue);
    onChange?.(nextValue);
  };

  const handleClear = () => {
    setValue("");
    onChange?.("");
  };

  return (
    <div className="w-full max-w-md">
      <label
        htmlFor="clear-input"
        className="mb-2 block font-montserrat text-14 font-semibold text-secondary"
      >
        {label}
      </label>

      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary/60"
          size={19}
        />

        <input
          id="clear-input"
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(event) => handleChange(event.target.value)}
          className="
            h-12 w-full rounded-xl border border-slate-300 bg-white
            pl-11 pr-12 font-montserrat text-16 text-slate-900
            outline-none transition
            placeholder:text-slate-400
            focus:border-primary
            focus:ring-4 focus:ring-primary/10
          "
        />

        {value && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear input"
            className="
              absolute right-3 top-1/2 flex h-8 w-8
              -translate-y-1/2 items-center justify-center
              rounded-full text-secondary transition
              hover:bg-slate-100 hover:text-primary
              focus:outline-none focus:ring-2 focus:ring-primary/30
            "
          >
            <X size={18} aria-hidden="true" />
          </button>
        )}
      </div>

      <p className="mt-2 font-montserrat text-12 text-secondary">
        {value ? `You entered: ${value}` : "Start typing in the field."}
      </p>
    </div>
  );
}
