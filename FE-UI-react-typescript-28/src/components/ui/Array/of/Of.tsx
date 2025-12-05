import { useState } from "react";

const Of = () => {
  const numbers = Array.of(10, 20, 30, 40);
  const mixed = Array.of("Apple", 42, true, { id: 1 });

  const [count, setCount] = useState<number>(3);

  const generatedArray = Array.of(
    ...Array(count)
      .fill(0)
      .map((_, index) => index + 1)
  );

  return (
    <div>
      <h2>Array.of() Example in React + TypeScript</h2>

      <h3>Array.of() with Numbers:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>

      <h3>Array.of() with Mixed Types:</h3>
      <pre>{JSON.stringify(mixed, null, 2)}</pre>

      <h3>Dynamically Generated Array (1 to N):</h3>
      <input
        type="number"
        value={count}
        min={1}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <pre>{JSON.stringify(generatedArray, null, 2)}</pre>

      <h3>Rendered List:</h3>
      <ul>
        {generatedArray.map((num) => (
          <li key={num}>Item {num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Of;
