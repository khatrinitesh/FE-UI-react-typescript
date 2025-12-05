import { useState } from "react";

const Sort1 = () => {
  const [fruits, setFruits] = useState<string[]>([
    "Banana",
    "Apple",
    "Grape",
    "Orange",
  ]);

  const [numbers, setNumbers] = useState<number[]>([10, 5, 20, 15]);

  const handleSortFruits = () => {
    const sortedFruits = [...fruits].sort();
    setFruits(sortedFruits);
  };

  const handleSortNumbers = () => {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    setNumbers(sortedNumbers);
  };
  return (
    <div>
      {" "}
      <h2>sort() Example in React + TypeScript</h2>
      <h3>Fruits:</h3>
      <pre>{JSON.stringify(fruits, null, 2)}</pre>
      <button onClick={handleSortFruits}>Sort Fruits Alphabetically</button>
      <h3 style={{ marginTop: 20 }}>Numbers:</h3>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>
      <button onClick={handleSortNumbers}>Sort Numbers Ascending</button>
    </div>
  );
};

export default Sort1;
