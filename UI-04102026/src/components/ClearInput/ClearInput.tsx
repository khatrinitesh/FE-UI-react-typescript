import { X } from "lucide-react";
import { useState } from "react";

interface ClearInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const ClearInput = ({
  value,
  onChange,
  placeholder = "Enter text...",
  className = "",
}: ClearInputProps): React.JSX.Element => {
  const [internalValue, setInternalValue] = useState(value ?? "");
  const currentValue = value ?? internalValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    if (value === undefined) setInternalValue(nextValue);
    onChange?.(nextValue);
  };

  const handleClear = () => {
    if (value === undefined) setInternalValue("");
    onChange?.("");
  };

  return (
    <div className={`clear-input relative w-full max-w-sm ${className}`}>
      <input
        type="text"
        value={currentValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="clear-input__field w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-sm outline-none focus:border-black"
      />
      {currentValue && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear input"
          className="clear-input__button absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default ClearInput;
