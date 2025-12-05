import { useState } from "react";

const ReduceRight1 = () => {
  const [numbers] = useState<number[]>([1, 2, 3, 4]);

  const sumRight = numbers.reduceRight((acc, val) => acc + val, 0);

  const concatRight = numbers.reduceRight((acc, val) => acc + val, "Numbers");
  return (
    <div>
      <h2>reduceRight() Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>

      <h3>Sum from Right to Left:</h3>
      <p>{sumRight}</p>

      <h3>Concatenated String from Right to Left:</h3>
      <p>{concatRight}</p>
    </div>
  );
};

export default ReduceRight1;
