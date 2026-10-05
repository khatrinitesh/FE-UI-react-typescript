import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  value: string;
}

interface ClickDropdownProps {
  items: DropdownItem[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const ClickDropdown = ({
  items,
  value,
  onChange,
  placeholder = "Select option",
  className = "",
}: ClickDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState("");

  const selectedValue = value ?? internalValue;
  const selectedItem = items.find((item) => item.value === selectedValue);

  const handleSelect = (item: DropdownItem) => {
    if (value === undefined) setInternalValue(item.value);
    onChange?.(item.value);
    setIsOpen(false);
  };

  return (
    <div className={`click-dropdown relative w-full max-w-sm ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="click-dropdown__button flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm hover:border-gray-400"
      >
        <span>{selectedItem?.label ?? placeholder}</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="click-dropdown__menu absolute left-0 top-full z-50 mt-1 w-full overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
          {items.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => handleSelect(item)}
              className={`click-dropdown__item block w-full px-4 py-2.5 text-left text-sm hover:bg-gray-100 ${selectedValue === item.value ? "bg-gray-100 font-medium text-black" : "text-gray-700"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClickDropdown;
