import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";

import "./Autocomplete.css";

interface Option {
  id: number;
  name: string;
  category: string;
}

const options: Option[] = [
  { id: 1, name: "React", category: "Frontend" },
  { id: 2, name: "TypeScript", category: "Programming" },
  { id: 3, name: "JavaScript", category: "Programming" },
  { id: 4, name: "Tailwind CSS", category: "CSS Framework" },
  { id: 5, name: "Node.js", category: "Backend" },
  { id: 6, name: "Next.js", category: "Frontend" },
  { id: 7, name: "Angular", category: "Frontend" },
  { id: 8, name: "Vue.js", category: "Frontend" },
  { id: 9, name: "Python", category: "Programming" },
  { id: 10, name: "Docker", category: "DevOps" },
];

const Autocomplete = () => {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(value.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: Option) => {
    setValue(option.name);
    setSelected(option);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && event.key === "ArrowDown") {
      setIsOpen(true);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      setActiveIndex((current) =>
        current < filteredOptions.length - 1 ? current + 1 : 0,
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setActiveIndex((current) =>
        current > 0 ? current - 1 : filteredOptions.length - 1,
      );
    }

    if (event.key === "Enter") {
      event.preventDefault();

      if (activeIndex >= 0 && filteredOptions[activeIndex]) {
        handleSelect(filteredOptions[activeIndex]);
      }
    }

    if (event.key === "Escape") {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  const handleClear = () => {
    setValue("");
    setSelected(null);
    setActiveIndex(-1);
    setIsOpen(true);
  };

  const highlightMatch = (text: string) => {
    if (!value) return text;

    const index = text.toLowerCase().indexOf(value.toLowerCase());

    if (index === -1) return text;

    return (
      <>
        {text.slice(0, index)}

        <strong>{text.slice(index, index + value.length)}</strong>

        {text.slice(index + value.length)}
      </>
    );
  };

  return (
    <main className="autocomplete-page">
      <div className="autocomplete-container">
        <div className="autocomplete-heading">
          <span>REACT COMPONENT</span>

          <h1>Autocomplete</h1>

          <p>Search and select an option using your mouse or keyboard.</p>
        </div>

        <div ref={containerRef} className="autocomplete-wrapper">
          <div
            className={`autocomplete-input-box ${isOpen ? "is-focused" : ""}`}
          >
            <Search size={20} className="autocomplete-search-icon" />

            <input
              type="text"
              value={value}
              placeholder="Search technology..."
              onChange={(event) => {
                setValue(event.target.value);
                setSelected(null);
                setIsOpen(true);
                setActiveIndex(-1);
              }}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
            />

            {value && (
              <button
                type="button"
                className="autocomplete-clear"
                onClick={handleClear}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}

            <ChevronDown
              size={18}
              className={`autocomplete-chevron ${isOpen ? "rotate" : ""}`}
            />
          </div>

          {isOpen && (
            <div className="autocomplete-dropdown">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`autocomplete-option ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      handleSelect(option);
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className="option-content">
                      <span className="option-name">
                        {highlightMatch(option.name)}
                      </span>

                      <span className="option-category">{option.category}</span>
                    </div>

                    {selected?.id === option.id && <Check size={18} />}
                  </button>
                ))
              ) : (
                <div className="autocomplete-empty">
                  <Search size={22} />

                  <span>No results found</span>

                  <small>Try another search term</small>
                </div>
              )}
            </div>
          )}
        </div>

        {selected && (
          <div className="selected-result">
            <Check size={18} />

            <span>
              Selected: <strong>{selected.name}</strong>
            </span>
          </div>
        )}
      </div>
    </main>
  );
};

export default Autocomplete;
