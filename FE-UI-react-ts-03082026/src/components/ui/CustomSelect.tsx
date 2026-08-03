import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface SelectOption {
  label: string;
  value: string;
}

interface CustomSelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export default function CustomSelect({
  label,
  placeholder = "Select",
  options,
  value,
  disabled = false,
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const selected = options.find((item) => item.value === value);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("click", close);

    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      {label && <label className="mb-2 block font-medium">{label}</label>}

      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={`
          flex h-12 w-full items-center justify-between rounded-xl
          border px-4 transition
          ${open ? "border-primary ring-2 ring-primary/20" : "border-gray-300"}
          ${disabled ? "cursor-not-allowed bg-gray-100" : "bg-white"}
        `}
      >
        <span className={selected ? "text-gray-900" : "text-gray-400"}>
          {selected?.label ?? placeholder}
        </span>

        <ChevronDown
          size={20}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="
            absolute
            z-50
            mt-2
            max-h-60
            w-full
            overflow-y-auto
            rounded-xl
            border
            bg-white
            shadow-xl
          "
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`
                flex
                w-full
                items-center
                justify-between
                px-4
                py-3
                text-left
                transition
                hover:bg-primary/10
                ${value === option.value ? "bg-primary/10 text-primary" : ""}
              `}
            >
              {option.label}

              {value === option.value && <Check size={18} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
