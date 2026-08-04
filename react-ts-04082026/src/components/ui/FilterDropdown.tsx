import { ChevronDown, Filter, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterDropdownProps {
  label?: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  className?: string;
}

export default function FilterDropdown({
  label = "Filter",
  options,
  selectedValues,
  onChange,
  className = "",
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownId = useId();

  const handleOptionChange = (value: string) => {
    const isSelected = selectedValues.includes(value);

    onChange(
      isSelected
        ? selectedValues.filter((item) => item !== value)
        : [...selectedValues, value],
    );
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-controls={dropdownId}
        className={`
          inline-flex min-w-40 items-center justify-between gap-3 rounded-lg
          border px-4 py-3 text-sm font-medium transition
          ${
            isOpen
              ? "border-[#009eff] bg-[#009eff]/5 text-[#009eff] ring-4 ring-[#009eff]/10"
              : "border-slate-300 bg-white text-slate-700 hover:border-[#009eff]"
          }
        `}
      >
        <span className="flex items-center gap-2">
          <Filter size={18} aria-hidden="true" />
          {label}

          {selectedValues.length > 0 && (
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#009eff] text-xs text-white">
              {selectedValues.length}
            </span>
          )}
        </span>

        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={dropdownId}
        className={`
          absolute right-0 z-40 mt-2 w-72 origin-top-right rounded-xl
          border border-slate-200 bg-white p-3 shadow-xl transition-all
          duration-200
          ${
            isOpen
              ? "visible scale-100 opacity-100"
              : "invisible scale-95 opacity-0"
          }
        `}
      >
        <div className="mb-2 flex items-center justify-between px-2 py-1">
          <p className="font-semibold text-slate-900">Filter options</p>

          {selectedValues.length > 0 && (
            <button
              type="button"
              onClick={() => onChange([])}
              className="inline-flex items-center gap-1 text-sm font-medium text-[#009eff] hover:text-[#007dcc]"
            >
              <X size={15} />
              Clear
            </button>
          )}
        </div>

        <div className="max-h-64 space-y-1 overflow-y-auto">
          {options.map((option) => {
            const isSelected = selectedValues.includes(option.value);

            return (
              <label
                key={option.value}
                className={`
                  flex cursor-pointer items-center justify-between rounded-lg
                  px-3 py-2.5 transition
                  ${
                    isSelected
                      ? "bg-[#009eff]/10 text-[#009eff]"
                      : "text-slate-700 hover:bg-slate-100"
                  }
                `}
              >
                <span className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={isSelected}
                    onChange={() => handleOptionChange(option.value)}
                    className="size-4 accent-[#009eff]"
                  />

                  <span className="text-sm font-medium">{option.label}</span>
                </span>

                {option.count !== undefined && (
                  <span className="text-xs text-slate-400">{option.count}</span>
                )}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
