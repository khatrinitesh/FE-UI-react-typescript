import { useState } from "react";

const Some1 = () => {
  const [numbers] = useState<number[]>([1, 2, 3, 4, 5]);
  const anyGreaterThanThree = numbers.some((num) => num > 3);

  const anyNegative = numbers.some((num) => num < 0);
  return (
    <>
      <h2>some() Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>

      <h3>Is any number greater than 3?</h3>
      <p>{anyGreaterThanThree ? "Yes" : "No"}</p>

      <h3>Is any number negative?</h3>
      <p>{anyNegative ? "Yes" : "No"}</p>
    </>
  );
};

export default Some1;
