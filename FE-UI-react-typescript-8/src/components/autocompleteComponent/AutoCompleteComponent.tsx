import { useEffect, useMemo, useRef } from "react";
import { useAutoCompleteStore } from "../../store/useAutoCompleteStore/useAutoCompleteStore";
import { autoCompleteOptions } from "../../constants/constants";
import "./autocomplete-style.css";

const AutoCompleteComponent = () => {
  const { query, setQuery, selectedId, setSelectedId } = useAutoCompleteStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    return autoCompleteOptions.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  useEffect(() => {
    if (filtered.length > 0) {
      setSelectedId(filtered[0].id);
    } else {
      setSelectedId(null);
    }
  }, [filtered]);
  return (
    <div className="autocomplete-wrapper">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="autocomplete-input"
      />

      {filtered.length > 0 && (
        <ul className="autocomplete-list">
          {filtered.map((item) => (
            <li
              key={item.id}
              className={`autocomplete-item ${
                item.id === selectedId ? "active" : ""
              }`}
              onClick={() => {
                setQuery(item.label);
                setSelectedId(item.id);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteComponent;
