import { useState } from "react";

const Shift1 = () => {
  const [fruits, setFruits] = useState<string[]>([
    "Apple",
    "Banana",
    "Orange",
    "Grape",
  ]);

  const [removedFruit, setRemovedFruit] = useState<string | undefined>();
  const handleShift = () => {
    const newArray = [...fruits];
    const shifted = newArray.shift();
    setFruits(newArray);
    setRemovedFruit(shifted);
  };
  return (
    <>
      <h2>shift() Example in React + TypeScript</h2>

      <h3>Current Array:</h3>
      <pre>{JSON.stringify(fruits, null, 2)}</pre>

      <button onClick={handleShift} style={{ marginTop: 10 }}>
        Remove First Element (shift)
      </button>

      {removedFruit && (
        <div style={{ marginTop: 15 }}>
          <h3>Removed Element:</h3>
          <p>{removedFruit}</p>
        </div>
      )}

      <h3>Rendered List:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
};

export default Shift1;
