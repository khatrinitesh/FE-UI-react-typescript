import { useState } from "react";

const Find1 = () => {
  const [numbers] = useState<number[]>([5, 12, 8, 130, 44]);

  const firstGreaterThanTen = numbers.find((num) => num > 10);

  // Find the first even number
  const firstEven = numbers.find((num) => num % 2 === 0);
  return (
    <div>
      <h2>find() Iterator Helper Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>

      <h3>First Number Greater Than 10:</h3>
      <p>
        {firstGreaterThanTen !== undefined ? firstGreaterThanTen : "Not found"}
      </p>

      <h3>First Even Number:</h3>
      <p>{firstEven !== undefined ? firstEven : "Not found"}</p>
    </div>
  );
};

export default Find1;
