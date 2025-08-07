import { useEffect } from "react";
import {
  AUTOCOMPLETE_CONFIG,
  mockDataAutoComplete,
} from "../../constants/constants";
import { useAutocompleteStore } from "../../logicStore/zustand/useAutocompleteStore/useAutocompleteStore";

const Autocomplete = () => {
  const { query, suggestions, setQuery, setSuggestions } =
    useAutocompleteStore();

  useEffect(() => {
    if (query.length >= AUTOCOMPLETE_CONFIG.minChars) {
      const filtered = mockDataAutoComplete.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query, setSuggestions]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
        style={{ padding: "8px", width: "200px" }}
      />
      {query.length >= AUTOCOMPLETE_CONFIG.minChars &&
        (suggestions.length > 0 ? (
          <ul
            style={{ border: "1px solid #ccc", marginTop: "4px", padding: "0" }}
          >
            {suggestions.map((s) => (
              <li key={s} style={{ listStyle: "none", padding: "4px" }}>
                {s}
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ marginTop: "4px", color: "#93102b" }}>
            No data found
          </div>
        ))}
    </div>
  );
};

export default Autocomplete;
