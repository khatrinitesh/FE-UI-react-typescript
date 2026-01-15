import { useState } from "react";
import { autocompleteSuggestions } from "../constants/constants";

const Autocomplete = () => {
  const [query, setQuery] = useState("");
  const filtered = autocompleteSuggestions.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-64 mx-auto relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Type to search..."
      />
      {query && (
        <ul className="absolute w-full bg-white border rounded mt-1 z-10">
          {filtered.map((item, index) => (
            <li
              key={index}
              className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
              onClick={() => setQuery(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
