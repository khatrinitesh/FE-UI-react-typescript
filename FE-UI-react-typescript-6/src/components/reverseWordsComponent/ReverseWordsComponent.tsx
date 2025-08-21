import { useState } from "react";
import { reverseWords } from "../../utils/utils";

const ReverseWordsComponent = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleReverse = () => {
    setOutput(reverseWords(input));
  };
  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Reverse Each Word</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button onClick={handleReverse} style={{ marginLeft: "1rem" }}>
        Reverse
      </button>
      {output && (
        <p>
          <strong>Result:</strong> {output}
        </p>
      )}
    </div>
  );
};
export default ReverseWordsComponent;
