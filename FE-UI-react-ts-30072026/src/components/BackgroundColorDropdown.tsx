import { Check, ChevronDown, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type BackgroundOption = {
  id: string;
  label: string;
  backgroundClass: string;
  previewClass: string;
  textClass: string;
};

const backgroundOptions: BackgroundOption[] = [
  {
    id: "white",
    label: "White",
    backgroundClass: "bg-white",
    previewClass: "bg-white border border-slate-300",
    textClass: "text-slate-900",
  },
  {
    id: "primary",
    label: "Primary",
    backgroundClass: "bg-primary",
    previewClass: "bg-primary",
    textClass: "text-secondary",
  },
  {
    id: "secondary",
    label: "Secondary",
    backgroundClass: "bg-secondary",
    previewClass: "bg-secondary",
    textClass: "text-white",
  },
  {
    id: "slate",
    label: "Slate",
    backgroundClass: "bg-slate-100",
    previewClass: "bg-slate-100 border border-slate-300",
    textClass: "text-slate-900",
  },
  {
    id: "dark",
    label: "Dark",
    backgroundClass: "bg-slate-950",
    previewClass: "bg-slate-950",
    textClass: "text-white",
  },
  {
    id: "gradient",
    label: "Gradient",
    backgroundClass: "bg-gradient-to-br from-primary via-white to-emerald-100",
    previewClass: "bg-gradient-to-br from-primary to-secondary",
    textClass: "text-secondary",
  },
];

export function BackgroundColorDropdown() {
  const [selectedBackground, setSelectedBackground] =
    useState<BackgroundOption>(backgroundOptions[0]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleBackgroundChange = (option: BackgroundOption) => {
    setSelectedBackground(option);
    setIsDropdownOpen(false);
  };

  return (
    <section
      className={`flex min-h-screen items-center justify-center px-5 py-12 font-brand transition-colors duration-500 ${selectedBackground.backgroundClass} ${selectedBackground.textClass}`}
    >
      <div className="w-full max-w-xl">
        <div className="rounded-3xl border border-white/40 bg-white/75 p-7 shadow-2xl backdrop-blur-xl dark:bg-slate-900/80">
          <div className="flex items-center gap-4">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-secondary">
              <Palette size={23} />
            </span>

            <div>
              <p className="text-brand-12 text-slate-500">UI component</p>

              <h1 className="text-brand-28 text-secondary">
                Background selector
              </h1>
            </div>
          </div>

          <p className="mt-5 text-brand-14 leading-7 text-slate-600">
            Select a color from the dropdown to change the page background.
          </p>

          <div ref={dropdownRef} className="relative mt-7">
            <label
              htmlFor="background-selector"
              className="mb-2 block text-brand-14 text-slate-700"
            >
              Background color
            </label>

            <button
              id="background-selector"
              type="button"
              onClick={() => setIsDropdownOpen((currentValue) => !currentValue)}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-left text-slate-900 shadow-sm outline-none transition hover:border-primary focus:border-primary focus:ring-4 focus:ring-primary/20"
            >
              <span className="flex items-center gap-3">
                <span
                  className={`size-6 rounded-lg ${selectedBackground.previewClass}`}
                />

                <span className="text-brand-14">
                  {selectedBackground.label}
                </span>
              </span>

              <ChevronDown
                size={19}
                className={`text-slate-400 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              role="listbox"
              className={`absolute left-0 right-0 top-full z-20 mt-2 origin-top overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl transition-all duration-200 ${
                isDropdownOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-95 opacity-0"
              }`}
            >
              {backgroundOptions.map((option) => {
                const isSelected = selectedBackground.id === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleBackgroundChange(option)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition ${
                      isSelected
                        ? "bg-primary/15 text-secondary"
                        : "text-slate-600 hover:bg-slate-100 hover:text-secondary"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`size-7 rounded-lg ${option.previewClass}`}
                      />

                      <span className="text-brand-14">{option.label}</span>
                    </span>

                    {isSelected && (
                      <Check size={18} className="text-secondary" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-slate-100 p-5">
            <p className="text-brand-12 text-slate-500">Selected background</p>

            <div className="mt-3 flex items-center gap-3">
              <span
                className={`size-10 rounded-xl ${selectedBackground.previewClass}`}
              />

              <div>
                <p className="text-brand-16 text-slate-900">
                  {selectedBackground.label}
                </p>

                <code className="text-brand-12 text-slate-500">
                  {selectedBackground.backgroundClass}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
