import { useState } from "react";
import { Copy } from "lucide-react";

interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
  className?: string;
}

const ColorPicker = ({ value, onChange, className = "" }: ColorPickerProps) => {
  const [internalColor, setInternalColor] = useState(value ?? "#6366F1");
  const color = value ?? internalColor;

  const handleChange = (nextColor: string) => {
    if (value === undefined) setInternalColor(nextColor);
    onChange?.(nextColor);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color);
    } catch {
      console.error("Unable to copy color code.");
    }
  };

  return (
    <div
      className={`color-picker w-full max-w-xs space-y-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm ${className}`}
    >
      <label className="block text-sm font-semibold text-gray-800">
        Choose a color
      </label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={color}
          onChange={(event) => handleChange(event.target.value)}
          aria-label="Select color"
          className="h-12 w-14 cursor-pointer rounded-lg border-0 bg-transparent p-0"
        />
        <div className="min-w-0 flex-1">
          <p className="text-xs text-gray-500">HEX color</p>
          <p className="font-mono text-sm font-medium uppercase text-gray-900">
            {color}
          </p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy HEX color"
          title="Copy color code"
          className="rounded-lg border border-gray-200 p-2 text-gray-600 hover:bg-gray-100"
        >
          <Copy size={16} />
        </button>
      </div>
      <div
        className="h-16 w-full rounded-lg border border-gray-200"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default ColorPicker;
