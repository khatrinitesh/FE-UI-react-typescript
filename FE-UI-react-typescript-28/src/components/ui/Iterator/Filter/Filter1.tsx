import { useState } from "react";

const Filter1 = () => {
  const [numbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  const allPositive = evenNumbers.every((num) => num > 0);

  const allGreaterThanFive = evenNumbers.every((num) => num > 5);
  return (
    <div>
      <h2>filter() + every() Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>

      <h3>Filtered Array (Even Numbers):</h3>
      <pre>{JSON.stringify(evenNumbers, null, 2)}</pre>

      <h3>Checks on Filtered Array:</h3>
      <p>
        Are all filtered numbers positive? {allPositive ? "Yes ✅" : "No ❌"}
      </p>
      <p>
        Are all filtered numbers greater than 5?{" "}
        {allGreaterThanFive ? "Yes ✅" : "No ❌"}
      </p>

      <h3>Rendered List of Even Numbers:</h3>
      <ul>
        {evenNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter1;
