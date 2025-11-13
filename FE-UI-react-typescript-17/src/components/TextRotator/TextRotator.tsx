import { useEffect, useState } from "react";
import { ROTATOR_STATUS } from "./textRotatorConstants";
import { useTextRotatorStore } from "../../store/useTextRotatorStore";

const TextRotator = () => {
  const [input, setInput] = useState("");
  const {
    texts,
    currentIndex,
    status,
    addText,
    removeText,
    nextText,
    toggleStatus,
    clearTexts,
  } = useTextRotatorStore();

  useEffect(() => {
    if (status === ROTATOR_STATUS.PLAYING && texts.length > 0) {
      const interval = setInterval(() => {
        nextText();
      }, 2000); // Rotate every 2 seconds
      return () => clearInterval(interval);
    }
  }, [status, texts, nextText]);

  const handleAdd = () => {
    if (!input.trim()) return;
    addText(input);
    setInput("");
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", textAlign: "center" }}>
      <h2>🔄 Text Rotator</h2>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Add new text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "6px", width: "200px", marginRight: "8px" }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div
        style={{
          minHeight: "40px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        {texts.length > 0 ? texts[currentIndex] : "No texts available"}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button onClick={toggleStatus}>
          {status === ROTATOR_STATUS.PLAYING ? "⏸ Pause" : "▶️ Play"}
        </button>
        <button onClick={clearTexts}>🧹 Clear All</button>
      </div>

      <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
        {texts.map((text, i) => (
          <li key={i} style={{ marginBottom: "4px" }}>
            {text}{" "}
            <button
              onClick={() => removeText(i)}
              style={{
                background: "none",
                border: "none",
                color: "red",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextRotator;
