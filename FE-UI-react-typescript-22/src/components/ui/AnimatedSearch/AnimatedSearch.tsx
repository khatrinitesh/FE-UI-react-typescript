import { useEffect, useRef } from "react";
import { useSearchStore } from "../../../store/searchStore";
import { FaSearch, FaTimes } from "react-icons/fa";
import "./AnimatedSearch.css";

const AnimatedSearch = () => {
  const { query, setQuery, isActive, setActive } = useSearchStore();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when activated
  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  const handleClear = () => {
    setQuery("");
    setActive(false);
  };
  return (
    <div className={`search-container ${isActive ? "active" : ""}`}>
      <FaSearch className="search-icon" onClick={() => setActive(true)} />
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        onBlur={() => !query && setActive(false)}
      />
      {query && <FaTimes className="clear-icon" onClick={handleClear} />}
    </div>
  );
};

export default AnimatedSearch;
