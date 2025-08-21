import { useState } from "react";
import { toCamelCase } from "../../utils/utils";

const CamelCaseConverter = () => {
  const [input, setInput] = useState("");
  const [camel, setCamel] = useState("");

  const handleConvert = () => {
    const result = toCamelCase(input);
    setCamel(result);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Convert to camelCase</h2>
      <input
        type="text"
        placeholder="Enter your string"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button onClick={handleConvert} style={{ marginLeft: "1rem" }}>
        Convert
      </button>

      {camel && (
        <p style={{ marginTop: "1rem", display: "grid", gap: "10px" }}>
          <strong>camelCase:</strong> {camel}
        </p>
      )}
    </div>
  );
};

export default CamelCaseConverter;
