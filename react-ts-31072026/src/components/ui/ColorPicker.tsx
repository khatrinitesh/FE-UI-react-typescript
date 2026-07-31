import { Check, Copy, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

type ColorPickerProps = {
  label?: string;
  defaultColor?: string;
  onChange?: (color: string) => void;
};

const presetColors = [
  "#009EFF",
  "#525659",
  "#EF4444",
  "#F97316",
  "#FACC15",
  "#22C55E",
  "#14B8A6",
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#111827",
  "#FFFFFF",
];

function isValidHex(value: string) {
  return /^#[0-9A-F]{6}$/i.test(value);
}

export default function ColorPicker({
  label = "Choose color",
  defaultColor = "#ff0000",
  onChange,
}: ColorPickerProps) {
  const initialColor = isValidHex(defaultColor)
    ? defaultColor.toUpperCase()
    : "#009EFF";

  const [color, setColor] = useState(initialColor);
  const [hexInput, setHexInput] = useState(initialColor);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    onChange?.(color);
  }, [color, onChange]);

  const updateColor = (nextColor: string) => {
    const formattedColor = nextColor.toUpperCase();

    setColor(formattedColor);
    setHexInput(formattedColor);
  };

  const handleHexChange = (value: string) => {
    let nextValue = value.trim().toUpperCase();

    if (!nextValue.startsWith("#")) {
      nextValue = `#${nextValue}`;
    }

    nextValue = nextValue.slice(0, 7);
    setHexInput(nextValue);

    if (isValidHex(nextValue)) {
      setColor(nextValue);
    }
  };

  const copyColor = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  };

  const resetColor = () => {
    updateColor(initialColor);
  };

  return (
    <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-5 shadow-lg desktop-sm:p-7">
      <header className="mb-6">
        <p className="font-montserrat text-12 font-semibold uppercase tracking-[0.16em] text-primary">
          Brand settings
        </p>

        <h2 className="mt-2 font-arialnb text-28 font-bold text-secondary">
          {label}
        </h2>

        <p className="mt-2 font-montserrat text-14 text-secondary/70">
          Select a color or enter a hexadecimal value.
        </p>
      </header>

      <div
        className="relative h-40 overflow-hidden rounded-2xl border border-slate-200"
        style={{ backgroundColor: color }}
      >
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/20 px-4 py-3 backdrop-blur-sm">
          <span className="font-montserrat text-16 font-semibold text-white">
            {color}
          </span>

          <span className="rounded-full bg-white/20 px-3 py-1 font-montserrat text-12 text-white">
            Preview
          </span>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="native-color-picker"
          className="mb-2 block font-montserrat text-12 font-semibold uppercase tracking-[0.08em] text-secondary"
        >
          Custom color
        </label>

        <div className="flex gap-3">
          <label
            htmlFor="native-color-picker"
            className="relative flex h-12 w-14 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-slate-300 bg-white p-1"
          >
            <span
              className="h-full w-full rounded-lg"
              style={{ backgroundColor: color }}
            />

            <input
              id="native-color-picker"
              type="color"
              value={color}
              onChange={(event) => updateColor(event.target.value)}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </label>

          <div className="relative min-w-0 flex-1">
            <input
              type="text"
              value={hexInput}
              maxLength={7}
              aria-label="Hexadecimal color value"
              onChange={(event) => handleHexChange(event.target.value)}
              className={`
                h-12 w-full rounded-xl border bg-white px-4 pr-12
                font-montserrat text-14 font-semibold uppercase
                text-slate-900 outline-none transition
                focus:ring-4 focus:ring-primary/10
                ${
                  isValidHex(hexInput)
                    ? "border-slate-300 focus:border-primary"
                    : "border-red-400 focus:border-red-500"
                }
              `}
            />

            <button
              type="button"
              onClick={copyColor}
              aria-label="Copy color"
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-secondary transition hover:bg-primary/10 hover:text-primary"
            >
              {copied ? (
                <Check size={17} aria-hidden="true" />
              ) : (
                <Copy size={17} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {!isValidHex(hexInput) && (
          <p className="mt-2 font-montserrat text-12 text-red-600">
            Enter a valid six-digit hexadecimal color.
          </p>
        )}
      </div>

      <div className="mt-6">
        <p className="mb-3 font-montserrat text-12 font-semibold uppercase tracking-[0.08em] text-secondary">
          Preset colors
        </p>

        <div className="grid grid-cols-6 gap-3">
          {presetColors.map((presetColor) => {
            const isSelected = color === presetColor;

            return (
              <button
                key={presetColor}
                type="button"
                title={presetColor}
                aria-label={`Select ${presetColor}`}
                onClick={() => updateColor(presetColor)}
                className={`
                  relative aspect-square rounded-full border-2
                  transition hover:scale-110
                  focus:outline-none focus:ring-4 focus:ring-primary/20
                  ${
                    isSelected
                      ? "border-primary ring-4 ring-primary/15"
                      : "border-slate-200"
                  }
                `}
                style={{ backgroundColor: presetColor }}
              >
                {isSelected && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Check
                      size={18}
                      strokeWidth={3}
                      className={
                        presetColor === "#FFFFFF"
                          ? "text-slate-900"
                          : "text-white"
                      }
                      aria-hidden="true"
                    />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
        <div className="flex items-center gap-3">
          <span
            className="h-10 w-10 rounded-xl border border-slate-200"
            style={{ backgroundColor: color }}
          />

          <div>
            <p className="font-montserrat text-12 text-secondary/70">
              Selected color
            </p>

            <p className="font-montserrat text-14 font-semibold text-slate-900">
              {color}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={resetColor}
          className="flex h-10 items-center gap-2 rounded-xl border border-slate-300 px-4 font-montserrat text-12 font-semibold text-secondary transition hover:border-primary hover:text-primary"
        >
          <RotateCcw size={16} aria-hidden="true" />
          Reset
        </button>
      </div>
    </section>
  );
}
