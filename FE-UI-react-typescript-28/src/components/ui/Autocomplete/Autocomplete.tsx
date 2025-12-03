import { useAutocompleteStore } from "../../../store/useAutocompleteStore";
import { useSearch } from "./useSearch";
import { motion, AnimatePresence } from "framer-motion";

const Autocomplete = () => {
  const { query, setQuery, isOpen, open, close, setSelected } =
    useAutocompleteStore();

  const { data = [], isLoading } = useSearch();

  const handleSelect = (value: string) => {
    setSelected(value);
    setQuery(value);
    close();
  };
  return (
    <div className="relative w-72">
      {/* Input Field */}
      <motion.input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          open();
        }}
        placeholder="Search product..."
        className="w-full border rounded-md p-2 shadow-sm outline-none"
        whileFocus={{ scale: 1.01 }}
      />

      {/* Dropdown List */}
      <AnimatePresence>
        {isOpen && query && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 mt-1 bg-white border rounded-md shadow-lg max-h-56 overflow-auto z-10"
          >
            {isLoading && (
              <li className="p-2 text-gray-500 text-sm">Loading…</li>
            )}

            {!isLoading && data.length === 0 && (
              <li className="p-2 text-gray-500 text-sm">No results</li>
            )}

            {data.map((item: any) => (
              <motion.li
                key={item.id}
                onClick={() => handleSelect(item.title)}
                whileHover={{ backgroundColor: "#f3f4f6" }}
                whileTap={{ scale: 0.98 }}
                className="p-2 cursor-pointer text-sm"
              >
                {item.title}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Autocomplete;
