import { useState } from "react";
import { useButtonStore } from "../../store/buttonStore";

const TriggerButtonEnter = () => {
  const label = useButtonStore((state) => state.label);
  const clickCount = useButtonStore((state) => state.clickCount);
  const incrementCount = useButtonStore((state) => state.incrementCount);

  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      incrementCount();
      setInputValue(""); // clear input if desired
    }
  };
  return (
    <div style={{ padding: 20 }}>
      <input
        type="text"
        placeholder="Press Enter to trigger button"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ padding: 8, fontSize: 16, width: 300 }}
      />
      <button
        onClick={() => {
          incrementCount();
          setInputValue("");
        }}
        style={{ marginLeft: 10, padding: "8px 16px", fontSize: 16 }}
      >
        {label}
      </button>
      <p style={{ marginTop: 20 }}>
        Button clicked: <strong>{clickCount}</strong> times
      </p>
    </div>
  );
};

export default TriggerButtonEnter;
