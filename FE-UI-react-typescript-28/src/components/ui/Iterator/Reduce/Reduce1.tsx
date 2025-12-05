import { useState } from "react";

const Reduce1 = () => {
  const [numbers] = useState<number[]>([1, 2, 3, 4, 5]);
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  // Reduce: multiply all numbers in the array
  const product = numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
  return (
    <div>
      {" "}
      <h2>reduce() Iterator Helper Example in React + TypeScript</h2>
      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>
      <h3>Sum of Numbers (using reduce):</h3>
      <p>{sum}</p>
      <h3>Product of Numbers (using reduce):</h3>
      <p>{product}</p>
    </div>
  );
};

export default Reduce1;
