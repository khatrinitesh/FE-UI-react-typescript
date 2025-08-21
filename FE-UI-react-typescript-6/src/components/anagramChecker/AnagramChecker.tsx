import { useState } from "react";
import { areAnagrams } from "../../utils/utils";

const AnagramChecker = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [result, setResult] = useState<boolean | null>(null);

  const handleCheck = () => {
    const res = areAnagrams(str1, str2);
    setResult(res);
  };
  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Anagram Checker</h2>
      <input
        type="text"
        placeholder="First string"
        value={str1}
        onChange={(e) => setStr1(e.target.value)}
        style={{ padding: "0.5rem", width: "250px", marginBottom: "0.5rem" }}
      />
      <br />
      <input
        type="text"
        placeholder="Second string"
        value={str2}
        onChange={(e) => setStr2(e.target.value)}
        style={{ padding: "0.5rem", width: "250px" }}
      />
      <br />
      <button onClick={handleCheck} style={{ marginTop: "1rem" }}>
        Check Anagram
      </button>

      {result !== null && (
        <p style={{ marginTop: "1rem" }}>
          <strong>Result:</strong>{" "}
          {result ? "✅ They are anagrams!" : "❌ Not anagrams."}
        </p>
      )}
    </div>
  );
};

export default AnagramChecker;
