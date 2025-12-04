import { useState } from "react";

const At3 = () => {
  const colors = ["Red", "Green", "Blue", "Purple", "Orange"];
  const [index, setIndex] = useState(0);
  return (
    <div>
      <h2>Example 3 : Dynamic Array.at()</h2>
      <label>Choose index: </label>
      <input
        type="number"
        min={-colors.length}
        max={colors.length - 1}
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
      />

      <p style={{ marginTop: 10 }}>
        Element at index {index}: <strong>{colors.at(index)}</strong>
      </p>
    </div>
  );
};

export default At3;
