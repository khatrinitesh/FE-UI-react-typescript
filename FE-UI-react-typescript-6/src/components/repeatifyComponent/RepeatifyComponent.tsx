import { useState } from "react";
import { repeatify } from "../../utils/utils";

const RepeatifyComponent = () => {
  const [input, setInput] = useState("");
  const [times, setTimes] = useState(3);
  const [result, setResult] = useState("");

  const handleRepeat = () => {
    if (times < 0) {
      alert("Please enter a positive number");
      return;
    }
    setResult(repeatify(input, times));
  };
  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Repeatify String</h2>
      <input
        type="text"
        placeholder="Enter string"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />
      <input
        type="number"
        value={times}
        onChange={(e) => setTimes(Number(e.target.value))}
        min={0}
        style={{ width: "60px", padding: "0.5rem" }}
      />
      <button onClick={handleRepeat} style={{ marginLeft: "1rem" }}>
        Repeat
      </button>

      {result && (
        <p>
          <strong>Result:</strong> {result}
        </p>
      )}
    </div>
  );
};

export default RepeatifyComponent;
