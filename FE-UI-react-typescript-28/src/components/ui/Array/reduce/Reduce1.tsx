import { useState } from "react";

const Reduce1 = () => {
  const [numbers] = useState<number[]>([10, 20, 30, 40]);
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const max = numbers.reduce(
    (accumulator, currentValue) => Math.max(accumulator, currentValue),
    numbers[0]
  );

  // Concatenate numbers into a string
  const concatenated = numbers.reduce((acc, num) => acc + "-" + num, "Numbers");

  return (
    <div>
      {" "}
      <h2>reduce() Example in React + TypeScript</h2>
      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>
      <h3>Sum of Numbers:</h3>
      <p>{sum}</p>
      <h3>Maximum Number:</h3>
      <p>{max}</p>
      <h3>Concatenated String:</h3>
      <p>{concatenated}</p>
    </div>
  );
};

export default Reduce1;
