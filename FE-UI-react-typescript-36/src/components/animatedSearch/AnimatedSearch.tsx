import { useState } from "react";
import { SEARCH_ANIMATION, SEARCH_CONFIG } from "../../constants/constants";
import { useSearchStore } from "../../store/useSearchStore";
import { motion } from "framer-motion";

interface AnimatedSearchProps {
  id: string;
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const AnimatedSearch = ({ id, placeholder, onSearch }: AnimatedSearchProps) => {
  const { activeId, setActive } = useSearchStore();
  const isActive = activeId === id;
  const [value, setValue] = useState("");

  const handleFocus = () => setActive(id);
  const handleBlur = () => setActive(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };
  return (
    <motion.div
      style={{
        display: "flex",
        alignItems: "center",
        height: SEARCH_CONFIG.HEIGHT,
        background: "#f3f4f6",
        borderRadius: SEARCH_CONFIG.BORDER_RADIUS,
        padding: "0 12px",
        gap: 8,
        cursor: "text",
        overflow: "hidden",
      }}
      animate={{
        width: isActive
          ? SEARCH_CONFIG.WIDTH_EXPANDED
          : SEARCH_CONFIG.WIDTH_COLLAPSED,
      }}
      transition={SEARCH_ANIMATION.transition}
      onClick={() => setActive(id)}
    >
      {/* Search Icon */}
      <motion.div
        animate={{ rotate: isActive ? 90 : 0 }}
        transition={SEARCH_ANIMATION.transition}
        style={{ display: "flex", alignItems: "center" }}
      >
        🔍
      </motion.div>

      {/* Input Field */}
      {isActive && (
        <motion.input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          placeholder={placeholder}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: 16,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

export default AnimatedSearch;
