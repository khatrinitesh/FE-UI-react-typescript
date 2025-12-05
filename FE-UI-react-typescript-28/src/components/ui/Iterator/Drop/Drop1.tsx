function* drop<T>(arr: T[], n: number) {
  for (let i = n; i < arr.length; i++) {
    yield arr[i];
  }
}

import { useState } from "react";

const Drop1 = () => {
  const [numbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);

  const droppedIterator = drop(numbers, 2);

  const droppedArray = Array.from(droppedIterator);
  return (
    <div>
      {" "}
      <h2>Custom drop Iterator Example in React + TypeScript</h2>
      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>
      <h3>After dropping first 3 elements:</h3>
      <pre>{JSON.stringify(droppedArray, null, 2)}</pre>
      <h3>Rendered List:</h3>
      <ul>
        {droppedArray.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Drop1;
