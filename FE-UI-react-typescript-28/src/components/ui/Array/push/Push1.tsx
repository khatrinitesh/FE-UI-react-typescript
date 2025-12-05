import { useState } from "react";

const Push1 = () => {
  const [fruits, setFruits] = useState<string[]>(["Apple", "Banana", "Orange"]);
  const [newFruit, setNewFruit] = useState<string>("");
  const [newLength, setNewLength] = useState<number | null>(null);

  const handlePush = () => {
    if (!newFruit.trim()) return;
    const newArray = [...fruits];
    const lengthAfterPush = newArray.push(newFruit);
    setFruits(newArray);
    setNewLength(lengthAfterPush);
    setNewFruit("");
  };
  return (
    <div>
      <h2>push() Example in React + TypeScript</h2>

      <h3>Current Array:</h3>
      <pre>{JSON.stringify(fruits, null, 2)}</pre>

      <input
        type="text"
        value={newFruit}
        placeholder="Enter a fruit"
        onChange={(e) => setNewFruit(e.target.value)}
      />

      <button onClick={handlePush} style={{ marginLeft: 10 }}>
        Add Fruit (push)
      </button>

      {newLength !== null && (
        <div style={{ marginTop: 15 }}>
          <h3>New Array Length:</h3>
          <p>{newLength}</p>
        </div>
      )}
    </div>
  );
};

export default Push1;
