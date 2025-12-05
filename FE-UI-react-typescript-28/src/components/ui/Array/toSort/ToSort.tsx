import { useState } from "react";

const ToSort = () => {
  const [numbers] = useState<number[]>([20, 5, 15, 10]);
  const sortedNumbers = numbers.toSorted((a, b) => a - b);
  return (
    <>
      <h2>toSorted() Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>

      <h3>New Sorted Array (Ascending):</h3>
      <pre>{JSON.stringify(sortedNumbers, null, 2)}</pre>
    </>
  );
};

export default ToSort;
