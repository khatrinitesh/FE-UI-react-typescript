import { FaSearch } from "react-icons/fa";
import { SEARCH_PLACEHOLDER } from "../../constants/constants";
import { useAnimatedSearchStore } from "../../store/useAnimatedSearchStore/useAnimatedSearchStore";
import "./animated-search-style.css";

const AnimatedSearchComponent = () => {
  const { isSearchOpen, toggleSearch } = useAnimatedSearchStore();

  return (
    <div className="search-container">
      <input
        type="text"
        className={`search-input ${isSearchOpen ? "open" : ""}`}
        placeholder={SEARCH_PLACEHOLDER}
      />
      <FaSearch className="search-icon" onClick={toggleSearch} />
    </div>
  );
};

export default AnimatedSearchComponent;
