import { useState } from "react";

const Some = () => {
  const [numbers] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const hasEven = numbers.some((num) => num % 2 === 0);
  const hasGreaterThanTen = numbers.some((num) => num > 10);
  return (
    <div>
      {" "}
      <h2>some() Iterator Helper Example in React + TypeScript</h2>
      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>
      <h3>Does the array contain an even number?</h3>
      <p>{hasEven ? "Yes ✅" : "No ❌"}</p>
      <h3>Does the array contain a number greater than 10?</h3>
      <p>{hasGreaterThanTen ? "Yes ✅" : "No ❌"}</p>
    </div>
  );
};

export default Some;
