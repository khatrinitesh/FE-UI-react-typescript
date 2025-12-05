import { useState } from "react";

const Map1 = () => {
  const [numbers] = useState<number[]>([1, 2, 3, 4, 5]);

  const doubledNumbers = numbers.map((num) => num * 2);

  const labels = numbers.map((num) => `Item ${num}`);
  return (
    <div>
      <h2>map() Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>

      <h3>Doubled Numbers (map result):</h3>
      <pre>{JSON.stringify(doubledNumbers, null, 2)}</pre>

      <h3>Labels (map result):</h3>
      <pre>{JSON.stringify(labels, null, 2)}</pre>

      <h3>Rendering With map():</h3>
      <ul>
        {labels.map((label, index) => (
          <li key={index}>{label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Map1;
