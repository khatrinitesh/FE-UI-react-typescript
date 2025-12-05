import { useState } from "react";

const Splice1 = () => {
  const [fruits, setFruits] = useState<string[]>([
    "Apple",
    "Banana",
    "Orange",
    "Grape",
  ]);

  const [removedFruits, setRemovedFruits] = useState<string[]>([]);

  const handleRemove = () => {
    const newArray = [...fruits];
    const removed = newArray.splice(1, 2);
    setRemovedFruits(removed);
    setFruits(newArray);
  };
  const handleAdd = () => {
    const newArray = [...fruits];
    newArray.splice(1, 0, "Mango", "Pineapple"); // add without removing
    setFruits(newArray);
  };
  return (
    <div>
      <h2>splice() Example in React + TypeScript</h2>

      <h3>Current Array:</h3>
      <pre>{JSON.stringify(fruits, null, 2)}</pre>

      <button onClick={handleRemove} style={{ marginRight: 10 }}>
        Remove 2 Elements from Index 1
      </button>

      <button onClick={handleAdd}>Add 2 Elements at Index 1</button>

      {removedFruits.length > 0 && (
        <div style={{ marginTop: 15 }}>
          <h3>Removed Elements:</h3>
          <pre>{JSON.stringify(removedFruits, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Splice1;
