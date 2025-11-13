import { useState } from "react";
import { findMaxValue } from "../../utils/utils";

const MaxValueFinderComponent = () => {
  const [input, setInput] = useState<string>('{"a":10,"b":25,"c":15}');
  const [maxValue, setMaxValue] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFindMax = () => {
    try {
      const obj = JSON.parse(input) as Record<string, number>;
      const max = findMaxValue(obj);
      setMaxValue(max);
      setError(null);
    } catch {
      setError(
        "Invalid JSON object. Please enter a valid object with numeric values."
      );
      setMaxValue(null);
    }
  };
  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Find Max Value in Object</h2>
      <textarea
        rows={4}
        cols={40}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "0.5rem" }}
      />
      <br />
      <button onClick={handleFindMax} style={{ marginTop: "1rem" }}>
        Find Max Value
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {maxValue !== null && !error && (
        <p>
          Maximum value is: <strong>{maxValue}</strong>
        </p>
      )}
    </div>
  );
};

export default MaxValueFinderComponent;
