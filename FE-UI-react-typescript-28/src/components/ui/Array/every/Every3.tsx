import { useState } from "react";

const Every3 = () => {
  const [numbers, setNumbers] = useState<number[]>([2, 4, 6]);
  const [input, setInput] = useState("");

  const addNumbers = () => {
    const num = Number(input);
    if (!isNaN(num)) {
      setNumbers((prev) => [...prev, num]);
      setInput("");
    }
  };

  const allEven = numbers.every((num) => num % 2 === 0);
  return (
    <div>
      {numbers.join(", ")}
      <p>{allEven ? "yes" : "no"}</p>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addNumbers}>Add Number</button>
    </div>
  );
};

export default Every3;
