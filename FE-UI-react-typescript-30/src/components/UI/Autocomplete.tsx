import { useEffect } from "react";
import { useAutocompleteStore } from "../../store/autocomplete.store";
import { AUTOCOMPLETE_ITEMS } from "../../constants/constants";

const Autocomplete = () => {
  const { query, setQuery, results, setResults } = useAutocompleteStore();

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = AUTOCOMPLETE_ITEMS.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <div className="w-full max-w-md mx-auto mt-10 relative">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {results.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-auto">
          {results.map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => setQuery(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
