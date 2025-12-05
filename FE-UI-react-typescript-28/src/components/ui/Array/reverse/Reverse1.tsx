import { useState } from "react";

const Reverse1 = () => {
  const [fruits, setFruits] = useState<string[]>([
    "Banana",
    "Apple",
    "Orange",
    "Grape",
  ]);

  const handleReverse = () => {
    const newArray = [...fruits].reverse();
    setFruits(newArray);
  };
  return (
    <>
      <h2>reverse() Example in React + TypeScript</h2>

      <h3>Current Array:</h3>
      <pre>{JSON.stringify(fruits, null, 2)}</pre>

      <button onClick={handleReverse} style={{ marginTop: 10 }}>
        Reverse Array
      </button>

      <h3>Rendered List:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
};

export default Reverse1;
