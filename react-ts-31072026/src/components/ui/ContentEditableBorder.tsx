import { Check, Pencil, RotateCcw } from "lucide-react";
import { useRef, useState, type FormEvent, type KeyboardEvent } from "react";

type ContentEditableBorderProps = {
  defaultValue?: string;
  placeholder?: string;
  onSave?: (value: string) => void;
};

export default function ContentEditableBorder({
  defaultValue = "Click here to edit this content.",
  placeholder = "Enter your content...",
  onSave,
}: ContentEditableBorderProps) {
  const editableRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState(defaultValue);
  const [savedValue, setSavedValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleInput = (event: FormEvent<HTMLDivElement>) => {
    setValue(event.currentTarget.textContent ?? "");
  };

  const handleSave = () => {
    const nextValue = value.trim();
    setValue(nextValue);
    setSavedValue(nextValue);
    onSave?.(nextValue);
    editableRef.current?.blur();
  };

  const handleReset = () => {
    setValue(savedValue);

    if (editableRef.current) {
      editableRef.current.textContent = savedValue;
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSave();
    }
    if (event.key === "Escape") {
      handleReset();
      editableRef.current?.blur();
    }
  };

  return (
    <section className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-5 shadow-lg desktop-sm:p-7">
      <header className="mb-5">
        <p className="font-montserrat text-12 font-semibold uppercase tracking-[0.16em] text-primary">
          Editable content
        </p>

        <h1 className="mt-2 font-arialnb text-28 font-bold text-secondary">
          Contenteditable Border
        </h1>

        <p className="mt-2 font-montserrat text-14 text-secondary/70">
          Click inside the bordered area to edit the content.
        </p>
      </header>

      <div className="relative">
        <Pencil
          size={18}
          aria-hidden="true"
          className={`
            pointer-events-none absolute right-4 top-4
            transition
            ${isFocused ? "text-primary" : "text-secondary/40"}
          `}
        />

        <div
          ref={editableRef}
          role="textbox"
          contentEditable
          suppressContentEditableWarning
          aria-label="Editable content"
          data-placeholder={placeholder}
          onInput={handleInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          className={`
            min-h-40 w-full rounded-2xl border-2
            bg-slate-50 px-5 py-4 pr-12
            font-montserrat text-16 leading-7 text-secondary
            outline-none transition duration-200

            empty:before:pointer-events-none
            empty:before:text-secondary/40
            empty:before:content-[attr(data-placeholder)]

            ${
              isFocused
                ? "border-primary bg-white shadow-[0_0_0_4px_rgba(0,158,255,0.12)]"
                : "border-dashed border-slate-300 hover:border-primary/50"
            }
          `}
        >
          {defaultValue}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-montserrat text-12 text-secondary/60">
          Press Enter to save, Shift + Enter for a new line, or Escape to
          cancel.
        </p>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="
              flex h-11 items-center justify-center gap-2
              rounded-xl border border-slate-300 px-4
              font-montserrat text-12 font-semibold text-secondary
              transition hover:border-primary hover:text-primary
            "
          >
            <RotateCcw size={16} aria-hidden="true" />
            Reset
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="
              flex h-11 items-center justify-center gap-2
              rounded-xl bg-primary px-5
              font-montserrat text-12 font-semibold text-white
              transition hover:bg-sky-600
              focus:outline-none focus:ring-4 focus:ring-primary/20
            "
          >
            <Check size={16} aria-hidden="true" />
            Save
          </button>
        </div>
      </div>
    </section>
  );
}
