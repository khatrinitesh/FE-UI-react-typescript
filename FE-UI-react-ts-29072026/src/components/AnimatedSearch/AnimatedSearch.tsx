import {
  ArrowUpRight,
  Clock3,
  LoaderCircle,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";

export type SearchSuggestion = {
  id: number | string;
  title: string;
  category?: string;
};

type AnimatedSearchProps = {
  placeholder?: string;
  suggestions?: SearchSuggestion[];
  onSearch?: (value: string) => void;
  onSelect?: (suggestion: SearchSuggestion) => void;
};

export function AnimatedSearch({
  placeholder = "Search components...",
  suggestions = [],
  onSearch,
  onSelect,
}: AnimatedSearchProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.title.toLowerCase().includes(query.toLowerCase()),
  );

  const visibleSuggestions =
    query.trim().length > 0
      ? filteredSuggestions.slice(0, 5)
      : suggestions.slice(0, 4);

  const openSearch = () => {
    setIsExpanded(true);

    window.setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const closeSearch = () => {
    setIsExpanded(false);
    setQuery("");
    setIsLoading(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchValue = query.trim();

    if (!searchValue || isLoading) return;

    setIsLoading(true);

    window.setTimeout(() => {
      onSearch?.(searchValue);
      setIsLoading(false);
    }, 800);
  };

  const handleSelect = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.title);
    onSelect?.(suggestion);
    setIsExpanded(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      closeSearch();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative transition-all duration-500 ease-out ${
        isExpanded ? "w-full max-w-xl" : "w-14"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`group relative flex h-14 items-center overflow-hidden rounded-full border backdrop-blur-xl transition-all duration-500 ${
          isExpanded
            ? "border-violet-400/40 bg-zinc-950/90 shadow-[0_20px_60px_rgba(124,58,237,0.2)]"
            : "border-white/10 bg-white/[0.07] hover:border-violet-400/40 hover:bg-violet-500/10"
        }`}
      >
        <button
          type={isExpanded ? "submit" : "button"}
          onClick={!isExpanded ? openSearch : undefined}
          aria-label={isExpanded ? "Submit search" : "Open search"}
          className="flex size-14 shrink-0 items-center justify-center text-zinc-400 transition-colors duration-300 hover:text-white"
        >
          {isLoading ? (
            <LoaderCircle className="size-5 animate-spin text-violet-300" />
          ) : (
            <Search
              className={`size-5 transition-transform duration-300 ${
                isExpanded
                  ? "text-violet-300"
                  : "group-hover:scale-110 group-hover:text-violet-300"
              }`}
            />
          )}
        </button>

        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsExpanded(true)}
          placeholder={placeholder}
          autoComplete="off"
          className={`h-full min-w-0 flex-1 bg-transparent pr-2 text-sm text-white outline-none placeholder:text-zinc-600 transition-all duration-300 ${
            isExpanded
              ? "translate-x-0 opacity-100"
              : "pointer-events-none -translate-x-3 opacity-0"
          }`}
        />

        {isExpanded && query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="mr-1 flex size-9 shrink-0 items-center justify-center rounded-full text-zinc-500 transition hover:bg-white/10 hover:text-white"
          >
            <X className="size-4" />
          </button>
        )}

        {isExpanded && (
          <div className="mr-3 hidden rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-zinc-500 sm:block">
            ESC
          </div>
        )}

        <div
          className={`absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent transition-opacity duration-500 ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        />
      </form>

      <div
        className={`absolute left-0 right-0 top-[calc(100%+12px)] z-50 origin-top overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 p-2 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
          isExpanded
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
            {query ? (
              <>
                <Sparkles className="size-3.5 text-violet-300" />
                Search results
              </>
            ) : (
              <>
                <Clock3 className="size-3.5" />
                Recent searches
              </>
            )}
          </div>

          <span className="text-xs text-zinc-600">
            {visibleSuggestions.length} items
          </span>
        </div>

        <div className="mt-1 space-y-1">
          {visibleSuggestions.length > 0 ? (
            visibleSuggestions.map((suggestion, index) => (
              <button
                key={suggestion.id}
                type="button"
                onClick={() => handleSelect(suggestion)}
                className="group/item flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition duration-200 hover:bg-white/[0.07]"
                style={{
                  animationDelay: `${index * 60}ms`,
                }}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-500 transition group-hover/item:border-violet-400/30 group-hover/item:bg-violet-500/10 group-hover/item:text-violet-300">
                  <Search className="size-4" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-zinc-300 transition group-hover/item:text-white">
                    {suggestion.title}
                  </span>

                  {suggestion.category && (
                    <span className="mt-0.5 block text-xs text-zinc-600">
                      {suggestion.category}
                    </span>
                  )}
                </span>

                <ArrowUpRight className="size-4 shrink-0 text-zinc-700 transition duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-violet-300" />
              </button>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center px-5 py-10 text-center">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/5 text-zinc-600">
                <Search className="size-5" />
              </div>

              <p className="font-ogilvy-regular mt-4 text-base text-zinc-300">
                No results found
              </p>

              <p className="mt-1 text-sm text-zinc-600">
                Try searching with another keyword.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
