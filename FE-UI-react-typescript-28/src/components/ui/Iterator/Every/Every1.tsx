import { useState } from "react";

const Every1 = () => {
  const [numbers] = useState<number[]>([2, 4, 6, 8, 10]);

  const allEven = numbers.every((num) => num % 2 === 0);
  const allGreaterThanFive = numbers.every((num) => num > 5);
  return (
    <div>
      <h2>every() Iterator Helper Example in React + TypeScript</h2>

      <h3>Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>

      <h3>Are all numbers even?</h3>
      <p>{allEven ? "Yes ✅" : "No ❌"}</p>

      <h3>Are all numbers greater than 5?</h3>
      <p>{allGreaterThanFive ? "Yes ✅" : "No ❌"}</p>
    </div>
  );
};

export default Every1;
