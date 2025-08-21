import { useState } from "react";
import { removeCharacter } from "../../utils/utils";

const RemoveCharacterComponent = () => {
  const [input, setInput] = useState("");
  const [charToRemove, setCharToRemove] = useState("");
  const [result, setResult] = useState("");

  const handleRemove = () => {
    if (charToRemove.length !== 1) {
      alert("Please enter a single character to remove.");
      return;
    }
    const newString = removeCharacter(input, charToRemove);
    setResult(newString);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Remove Character from String</h2>
      <input
        type="text"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "0.5rem", width: "300px", marginBottom: "0.5rem" }}
      />
      <br />
      <input
        type="text"
        placeholder="Character to remove"
        value={charToRemove}
        onChange={(e) => setCharToRemove(e.target.value)}
        maxLength={1}
        style={{ padding: "0.5rem", width: "200px" }}
      />
      <button onClick={handleRemove} style={{ marginLeft: "1rem" }}>
        Remove
      </button>

      {result && (
        <p style={{ marginTop: "1rem" }}>
          <strong>Result:</strong> {result}
        </p>
      )}
    </div>
  );
};

export default RemoveCharacterComponent;
