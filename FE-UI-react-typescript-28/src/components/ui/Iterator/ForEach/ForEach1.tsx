import { useEffect, useState } from "react";

const ForEach1 = () => {
  const [numbers] = useState<number[]>([1, 2, 3, 4, 5]);
  const [squaredNumbers, setSquaredNumbers] = useState<number[]>([]);

  useEffect(() => {
    const result: number[] = [];

    // forEach: calculate the square of each number
    numbers.forEach((num) => {
      result.push(num * num);
    });

    setSquaredNumbers(result);
  }, [numbers]);
  return (
    <div>
      {" "}
      <h2>forEach() Iterator Helper Example in React + TypeScript</h2>
      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>
      <h3>Squared Numbers (using forEach):</h3>
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

export default ForEach1;
