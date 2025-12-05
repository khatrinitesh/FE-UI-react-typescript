import { useState } from "react";

function take<T>(arr: T[], n: number): T[] {
  return arr.slice(0, n);
}

const Take = () => {
  const [numbers] = useState<number[]>([10, 20, 30, 40, 50, 60]);

  const firstThree = take(numbers, 3);
  const firstFive = take(numbers, 5);
  return (
    <div>
      {" "}
      <h2>Custom take() Iterator Example in React + TypeScript</h2>
      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>
      <h3>First 3 Elements:</h3>
      <pre>{JSON.stringify(firstThree, null, 2)}</pre>
      <h3>First 5 Elements:</h3>
      <pre>{JSON.stringify(firstFive, null, 2)}</pre>
    </div>
  );
};

export default Take;
