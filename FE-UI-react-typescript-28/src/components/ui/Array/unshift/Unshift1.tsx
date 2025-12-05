import { useState } from "react";

const Unshift1 = () => {
  const [fruits, setFruits] = useState<string[]>(["Apple", "Banana", "Orange"]);

  const [newFruit, setNewFruit] = useState<string>("");
  const [newLength, setNewLength] = useState<number | null>(null);

  const handleUnshift = () => {
    if (!newFruit.trim()) return;
    const newArray = [...fruits];
    const lengthAfterUnshift = newArray.unshift(newFruit);
    setFruits(newArray);
    setNewLength(lengthAfterUnshift);
    setNewFruit("");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>unshift() Example in React + TypeScript</h2>

      <h3>Current Array:</h3>
      <pre>{JSON.stringify(fruits, null, 2)}</pre>

      <input
        type="text"
        value={newFruit}
        placeholder="Enter a fruit"
        onChange={(e) => setNewFruit(e.target.value)}
      />

      <button onClick={handleUnshift} style={{ marginLeft: 10 }}>
        Add to Beginning (unshift)
      </button>

      {newLength !== null && (
        <div style={{ marginTop: 15 }}>
          <h3>New Array Length:</h3>
          <p>{newLength}</p>
        </div>
      )}

      <h3>Rendered List:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Unshift1;
