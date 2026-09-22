import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type AnimatedSearchProps = {
  placeholder?: string;
  onSearch?: (value: string) => void;
};

export function AnimatedSearch({ placeholder = "Search...", onSearch }: AnimatedSearchProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onSearch?.(newValue);
  };

  const handleClose = () => {
    setValue("");
    setOpen(false);
    onSearch?.("");
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
          group flex size-10 items-center justify-center
          border border-neutral-200
          bg-white
          transition-all duration-200
          hover:bg-neutral-100
        "
        aria-label="Open search"
      >
        <Search
          className="
            size-5
            transition-transform duration-200
            group-hover:scale-110
          "
        />
      </button>
    );
  }

  return (
    <div
      className="
        animated-search
        w-70
        animate-search-open
        origin-right
      "
    >
      <Search className="ml-3 size-4 shrink-0 text-neutral-400" />

      <input
        ref={inputRef}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="
          min-w-0 flex-1
          bg-transparent
          px-3 py-2.5
          text-sm
          outline-none
          placeholder:text-neutral-400
        "
      />

      <button
        type="button"
        onClick={handleClose}
        className="
          mr-2 flex size-7 items-center justify-center
          text-neutral-400
          transition
          hover:text-neutral-950
        "
        aria-label="Close search"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
