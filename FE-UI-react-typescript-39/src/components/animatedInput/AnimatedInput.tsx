import { useState } from "react";
import { motion } from "framer-motion";
import "./AnimatedInput.css";

type AnimationInputProps = {
  label: string;
  type?: string;
};

const AnimatedInput = ({ label, type = "text" }: AnimationInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-container">
      <motion.label
        animate={{
          y: isFocused || !!label ? -20 : 0,
          fontSize: isFocused ? 12 : 16,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="input-label"
      >
        {label}
      </motion.label>

      <motion.input
        type={type}
        className="input-field"
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(!!e.target.value)}
      />
    </div>
  );
};

export default AnimatedInput;
