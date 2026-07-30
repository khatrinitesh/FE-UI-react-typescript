import {
  Check,
  ChevronDown,
  Clock3,
  LoaderCircle,
  Search,
  UserRound,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";

export type AutocompleteOption = {
  id: string | number;
  label: string;
  description?: string;
  category?: string;
  icon?: LucideIcon;
};

type AutocompleteProps = {
  options: AutocompleteOption[];
  placeholder?: string;
  label?: string;
  emptyMessage?: string;
  defaultValue?: AutocompleteOption | null;
  isLoading?: boolean;
  disabled?: boolean;
  onChange?: (option: AutocompleteOption | null) => void;
};

export function Autocomplete({
  options,
  placeholder = "Search people, projects or components...",
  label = "Search",
  emptyMessage = "No matching results found",
  defaultValue = null,
  isLoading = false,
  disabled = false,
  onChange,
}: AutocompleteProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState(defaultValue?.label ?? "");
  const [selectedOption, setSelectedOption] =
    useState<AutocompleteOption | null>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const filteredOptions = useMemo(() => {
    const searchValue = query.trim().toLowerCase();

    if (!searchValue || selectedOption?.label === query) {
      return options;
    }

    return options.filter((option) => {
      const searchableText = [option.label, option.description, option.category]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchValue);
    });
  }, [options, query, selectedOption]);

  const visibleOptions = filteredOptions.slice(0, 6);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setQuery(value);
    setSelectedOption(null);
    setIsOpen(true);
    setActiveIndex(-1);

    onChange?.(null);
  };

  const handleSelect = (option: AutocompleteOption) => {
    setSelectedOption(option);
    setQuery(option.label);
    setIsOpen(false);
    setActiveIndex(-1);

    onChange?.(option);
  };

  const handleClear = () => {
    setQuery("");
    setSelectedOption(null);
    setIsOpen(true);
    setActiveIndex(-1);

    onChange?.(null);
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && event.key === "ArrowDown") {
      setIsOpen(true);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      setActiveIndex((currentIndex) =>
        currentIndex < visibleOptions.length - 1 ? currentIndex + 1 : 0,
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setActiveIndex((currentIndex) =>
        currentIndex > 0 ? currentIndex - 1 : visibleOptions.length - 1,
      );
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();

      const activeOption = visibleOptions[activeIndex];

      if (activeOption) {
        handleSelect(activeOption);
      }
    }

    if (event.key === "Escape") {
      setIsOpen(false);
      setActiveIndex(-1);
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <label className="mb-2 block text-sm font-medium text-zinc-300">
        {label}
      </label>

      <div
        className={`relative flex min-h-14 items-center rounded-2xl border bg-zinc-950/90 transition-all duration-300 ${
          isOpen
            ? "border-violet-400/60 shadow-[0_0_0_4px_rgba(139,92,246,0.10),0_20px_60px_rgba(0,0,0,0.35)]"
            : "border-white/10 hover:border-white/20"
        } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
      >
        <div className="flex size-14 shrink-0 items-center justify-center text-zinc-500">
          {isLoading ? (
            <LoaderCircle className="size-5 animate-spin text-violet-300" />
          ) : (
            <Search
              className={`size-5 transition-colors ${
                isOpen ? "text-violet-300" : ""
              }`}
            />
          )}
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete="off"
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls="autocomplete-options"
          aria-activedescendant={
            activeIndex >= 0 ? `autocomplete-option-${activeIndex}` : undefined
          }
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="h-14 min-w-0 flex-1 bg-transparent pr-2 text-sm text-white outline-none placeholder:text-zinc-600 disabled:cursor-not-allowed"
        />

        {query && !disabled ? (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="mr-2 flex size-9 shrink-0 items-center justify-center rounded-full text-zinc-500 transition hover:bg-white/10 hover:text-white"
          >
            <X className="size-4" />
          </button>
        ) : (
          <button
            type="button"
            disabled={disabled}
            onClick={() => {
              setIsOpen((currentValue) => !currentValue);
              inputRef.current?.focus();
            }}
            aria-label="Toggle options"
            className="mr-2 flex size-9 shrink-0 items-center justify-center rounded-full text-zinc-500 transition hover:bg-white/10 hover:text-white"
          >
            <ChevronDown
              className={`size-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      <div
        className={`absolute left-0 right-0 top-[calc(100%+10px)] z-50 origin-top overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-200 ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
            <Clock3 className="size-3.5" />

            {query ? "Matching results" : "Suggested options"}
          </div>

          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-500">
            {visibleOptions.length} results
          </span>
        </div>

        <div
          id="autocomplete-options"
          role="listbox"
          className="mt-1 max-h-80 space-y-1 overflow-y-auto"
        >
          {isLoading ? (
            <div className="flex min-h-40 flex-col items-center justify-center text-center">
              <LoaderCircle className="size-6 animate-spin text-violet-300" />

              <p className="mt-3 text-sm text-zinc-500">Searching options...</p>
            </div>
          ) : visibleOptions.length > 0 ? (
            visibleOptions.map((option, index) => {
              const Icon = option.icon ?? UserRound;
              const isSelected = selectedOption?.id === option.id;
              const isActive = activeIndex === index;

              return (
                <button
                  id={`autocomplete-option-${index}`}
                  key={option.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => handleSelect(option)}
                  className={`group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all duration-200 ${
                    isActive ? "bg-violet-500/15" : "hover:bg-white/[0.06]"
                  }`}
                >
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-xl border transition ${
                      isActive
                        ? "border-violet-400/30 bg-violet-500/15 text-violet-300"
                        : "border-white/10 bg-white/5 text-zinc-500"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span
                      className={`block truncate text-sm font-medium transition ${
                        isActive ? "text-white" : "text-zinc-300"
                      }`}
                    >
                      {option.label}
                    </span>

                    {option.description && (
                      <span className="mt-1 block truncate text-xs text-zinc-600">
                        {option.description}
                      </span>
                    )}
                  </span>

                  {option.category && !isSelected && (
                    <span className="hidden shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-500 sm:block">
                      {option.category}
                    </span>
                  )}

                  {isSelected && (
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-violet-500 text-white">
                      <Check className="size-4" />
                    </span>
                  )}
                </button>
              );
            })
          ) : (
            <div className="flex min-h-48 flex-col items-center justify-center px-5 text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-600">
                <Search className="size-6" />
              </div>

              <h3 className="font-ogilvy-regular mt-4 text-base text-zinc-300">
                {emptyMessage}
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-600">
                Try entering another keyword or selecting a suggested option.
              </p>
            </div>
          )}
        </div>

        <div className="mt-2 flex items-center gap-4 border-t border-white/10 px-3 py-3 text-[11px] text-zinc-600">
          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5">
              ↑
            </kbd>
            <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5">
              ↓
            </kbd>
            Navigate
          </span>

          <span className="flex items-center gap-1.5">
            <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5">
              Enter
            </kbd>
            Select
          </span>

          <span className="ml-auto hidden items-center gap-1.5 sm:flex">
            <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5">
              Esc
            </kbd>
            Close
          </span>
        </div>
      </div>
    </div>
  );
}
