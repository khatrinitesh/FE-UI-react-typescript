import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

type AutocompleteProps = {
  options: string[];
  placeholder?: string;
  onSelect?: (value: string) => void;
};

export function Autocomplete({ options, placeholder = "Search...", onSelect }: AutocompleteProps) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const filteredOptions = useMemo(() => options.filter((option) => option.toLowerCase().includes(value.toLowerCase())), [options, value]);

  const handleSelect = (option: string) => {
    setValue(option);
    setOpen(false);
    onSelect?.(option);
  };

  const handleClear = () => {
    setValue("");
    setOpen(false);
  };

  return (
    <div className="relative w-full max-w-sm">
      <div className="flex items-center border border-neutral-200 bg-white px-3 transition focus-within:border-neutral-400">
        <Search className="size-4 shrink-0 text-neutral-400" />

        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-neutral-400"
        />

        {value && (
          <button type="button" onClick={handleClear} className="text-neutral-400 transition hover:text-neutral-900">
            <X className="size-4" />
          </button>
        )}
      </div>

      {open && value && (
        <div className="absolute left-0 top-full z-50 mt-1 max-h-56 w-full overflow-y-auto border border-neutral-200 bg-white shadow-lg">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <button key={option} type="button" onClick={() => handleSelect(option)} className="block w-full px-4 py-2.5 text-left text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950">
                {option}
              </button>
            ))
          ) : (
            <div className="px-4 py-3 text-sm text-neutral-400">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}
