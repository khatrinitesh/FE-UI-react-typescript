import { useState } from "react";

interface CharacterCounterProps {
  maxLength?: number;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const CharacterCounter = ({ maxLength = 200, placeholder = "Type something...", value, onChange, className = "" }: CharacterCounterProps) => {
  const [internalValue, setInternalValue] = useState(value ?? "");
  const text = value ?? internalValue;
  const remaining = maxLength - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextValue = event.target.value;
    if (value === undefined) setInternalValue(nextValue);
    onChange?.(nextValue);
  };

  return (
    <div className={`character-counter w-full max-w-lg ${className}`}>
      <textarea value={text} maxLength={maxLength} onChange={handleChange} placeholder={placeholder} className="character-counter__input min-h-32 w-full resize-none rounded-lg border border-gray-300 p-3 text-sm text-gray-900 outline-none transition focus:border-black" />
      <div className={`character-counter__count mt-1 text-right text-xs ${remaining <= 20 ? "text-red-500" : "text-gray-500"}`}>
        {text.length} / {maxLength}
      </div>
    </div>
  );
};

export default CharacterCounter;