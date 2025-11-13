import { useEffect, useRef } from "react";
import { useAutocompleteStore } from "../../../store/useAutocompleteStore";
import gsap from "gsap";
import "./Autocomplete.css";

const Autocomplete = () => {
  const { query, filtered, setQuery, filterSuggestions } =
    useAutocompleteStore();
  const dropdownRef = useRef<HTMLUListElement>(null);

  // Animate dropdown on change
  useEffect(() => {
    if (dropdownRef.current && filtered.length > 0) {
      gsap.fromTo(
        dropdownRef.current.children,
        { opacity: 0, y: -5 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [filtered]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    filterSuggestions(value);
  };

  const handleSelect = (value: string) => {
    setQuery(value);
    filterSuggestions(value);
  };
  return (
    <div className="autocomplete-container">
      <h2 className="title">Animated Autocomplete</h2>
      <input
        type="text"
        className="autocomplete-input border-[1px] border-red-500"
        placeholder="Type to search..."
        value={query}
        onChange={handleChange}
      />
      {filtered.length > 0 && query && (
        <ul className="suggestions-list" ref={dropdownRef}>
          {filtered.map((item) => (
            <li
              key={item.id}
              className="suggestion-item"
              onClick={() => handleSelect(item.label)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
