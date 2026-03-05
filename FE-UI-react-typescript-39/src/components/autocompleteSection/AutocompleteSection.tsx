import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useAutocomplete } from "../../store/useAutocomplete";
import type { AutoCompleteItem } from "../../interface";
import { autoCompleteItems } from "../../constants/constants";

const AutocompleteSection = () => {
  const { query, filteredItems, setQuery } = useAutocomplete();
  const [isFocused, setIsFocused] = useState(false);

  const handleSelect = (item: AutoCompleteItem) => {
    setQuery(item.name, autoCompleteItems);
    setIsFocused(false);
  };
  return (
    <div className="relative w-80 mx-auto mt-20">
      <input
        type="text"
        value={query}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value, autoCompleteItems)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 150)} // delay to allow click
        className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <AnimatePresence>
        {isFocused && filteredItems.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full mt-1 bg-white shadow-lg rounded-md max-h-48 overflow-y-auto z-10"
          >
            {filteredItems.map((item) => (
              <li
                key={item.id}
                onMouseDown={() => handleSelect(item)}
                className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AutocompleteSection;
