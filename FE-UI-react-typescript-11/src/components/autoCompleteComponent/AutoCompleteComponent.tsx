import { useEffect, useState } from "react";
import type { AutocompleteProps, Suggestion } from "../../interface";
import { clsx } from "clsx";
import { AUTOCOMPLETE_CONFIG } from "./components/autoCompleteData";
import "./components/autocomplete-style.css";

const AutoCompleteComponent = () => {
  return (
    <>
      <Autocomplete
        suggestions={[]}
        onSelect={function (suggestion: Suggestion): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default AutoCompleteComponent;

const Autocomplete: React.FC<AutocompleteProps> = ({
  suggestions,
  onSelect,
  placeholder = "Search...",
  debounceDelay = AUTOCOMPLETE_CONFIG.DEBOUNCE_DELAY,
  maxSuggestions = AUTOCOMPLETE_CONFIG.MAX_SUGGESTIONS,
  className,
}) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>(
    []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  // Debounce logic
  useEffect(() => {
    if (!query.trim()) {
      setFilteredSuggestions([]);
      setIsOpen(false);
      return;
    }

    const handler = setTimeout(() => {
      const filtered = suggestions
        .filter((s) => s.label.toLowerCase().includes(query.toLowerCase()))
        .slice(0, maxSuggestions);
      setFilteredSuggestions(filtered);
      setIsOpen(filtered.length > 0);
      setHighlightIndex(-1);
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [query, suggestions, debounceDelay, maxSuggestions]);

  // Keyboard navigation handler
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightIndex((prev) =>
          Math.min(prev + 1, filteredSuggestions.length - 1)
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightIndex >= 0 && filteredSuggestions[highlightIndex]) {
          onSelect(filteredSuggestions[highlightIndex]);
          setIsOpen(false);
          setQuery("");
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  const onSuggestionClick = (suggestion: Suggestion) => {
    onSelect(suggestion);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div
      className={clsx("autocomplete-container", className)}
      style={{ position: "relative" }}
    >
      <input
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-activedescendant={
          highlightIndex >= 0 ? `suggestion-${highlightIndex}` : undefined
        }
        role="combobox"
        className="autocomplete-input"
      />
      {isOpen && (
        <ul
          role="listbox"
          className="autocomplete-list"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "white",
            border: "1px solid #ccc",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 1000,
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {filteredSuggestions.map((suggestion, idx) => (
            <li
              key={suggestion.id}
              id={`suggestion-${idx}`}
              role="option"
              aria-selected={highlightIndex === idx}
              onClick={() => onSuggestionClick(suggestion)}
              onMouseEnter={() => setHighlightIndex(idx)}
              style={{
                padding: "8px 12px",
                backgroundColor:
                  highlightIndex === idx ? "#ddd" : "transparent",
                cursor: "pointer",
              }}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
