import { useState } from "react";

const FlatMap1 = () => {
  const [numbers] = useState<number[]>([1, 2, 3]);

  const flatMappedArray = numbers.flatMap((num) => [num, num * 2]);

  return (
    <div>
      <h2>flatMap() Iterator Helper Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>

      <h3>After flatMap::</h3>
      <pre>{JSON.stringify(flatMappedArray, null, 2)}</pre>

      <h3>Rendered List:</h3>
      <ul>
        {flatMappedArray.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlatMap1;
