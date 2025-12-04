import { useState } from "react";

const From3 = () => {
  const [length, setLength] = useState(0);

  const array = Array.from({ length }, (_, i) => i + 1);
  return (
    <div>
      <h2>Example 3: Array.from() + State</h2>

      <label>
        Enter array length:{" "}
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </label>

      <p>Generated Array: {array.join(", ")}</p>
    </div>
  );
};

export default From3;
