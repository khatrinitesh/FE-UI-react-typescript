import { useState } from "react";
import { TICKER_STATUS } from "./tickerConstants";
import { useTickerStore } from "../../store/useTickerStore";

const TickerMarquee = () => {
  const [input, setInput] = useState("");
  const {
    status,
    messages,
    addMessage,
    removeMessage,
    toggleStatus,
    clearMessages,
  } = useTickerStore();

  const handleAdd = () => {
    addMessage(input);
    setInput("");
  };

  return (
    <div style={{ width: "100%", textAlign: "center", padding: "1rem" }}>
      <h2>📰 Live Ticker Marquee</h2>

      {/* Add new ticker message */}
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new ticker message"
          style={{ padding: "8px", width: "300px" }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* The marquee area */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          whiteSpace: "nowrap",
          border: "2px solid #007bff",
          borderRadius: "6px",
          padding: "10px",
          background: "#f0f8ff",
          marginBottom: "1rem",
          height: "40px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation:
              status === TICKER_STATUS.PLAYING
                ? "scroll 15s linear infinite"
                : "none",
          }}
        >
          {messages.map((msg, idx) => (
            <span key={idx} style={{ marginRight: "2rem", fontWeight: 500 }}>
              {msg}
            </span>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={toggleStatus}>
          {status === TICKER_STATUS.PLAYING ? "⏸ Pause" : "▶️ Play"}
        </button>
        <button onClick={clearMessages}>🧹 Clear</button>
      </div>

      {/* Show all messages with delete option */}
      <ul style={{ marginTop: "1rem", listStyle: "none", padding: 0 }}>
        {messages.map((msg, i) => (
          <li key={i} style={{ marginBottom: "4px" }}>
            {msg}{" "}
            <button
              onClick={() => removeMessage(i)}
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

      {/* Inline CSS animation */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default TickerMarquee;
