import { useState } from "react";

const Slice1 = () => {
  const [fruits] = useState<string[]>([
    "Apple",
    "Banana",
    "Orange",
    "Grape",
    "Mango",
  ]);
  const slicedFruits = fruits.slice(1, 3);
  const slicedFromIndex = fruits.slice(2);

  return (
    <div>
      <h2>slice() Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(fruits, null, 2)}</pre>

      <h3>Sliced Array (1 to 3):</h3>
      <pre>{JSON.stringify(slicedFruits, null, 2)}</pre>

      <h3>Sliced Array (from index 2):</h3>
      <pre>{JSON.stringify(slicedFromIndex, null, 2)}</pre>
    </div>
  );
};

export default Slice1;
