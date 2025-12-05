import { useState } from "react";

const Map1 = () => {
  const [numbers] = useState<number[]>([1, 2, 3, 4, 5]);

  // map: create a new array with each number squared
  const squaredNumbers = numbers.map((num) => num * num);
  return (
    <div>
      <h2>map() Iterator Helper Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>

      <h3>Squared Numbers (using map):</h3>
      <pre>{JSON.stringify(squaredNumbers, null, 2)}</pre>

      <h3>Rendered List of Squares:</h3>
      <ul>
        {squaredNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Map1;
