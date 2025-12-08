import { useState } from "react";

const MapSet1 = () => {
  const [fruits, setFruits] = useState<Map<string, number>>(
    new Map([
      ["apple", 10],
      ["banana", 5],
      ["orange", 7],
    ])
  );

  const addOrUpdateFruit = (key: string, value: number) => {
    setFruits((prev) => {
      const updated = new Map(prev);
      updated.set(key, value);
      return updated;
    });
  };
  return (
    <div>
      <h3>Fruits</h3>
      <ul>
        {Array.from(fruits.entries()).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>

      <button onClick={() => addOrUpdateFruit("orange", 7)}>Add Orange</button>
      <button onClick={() => addOrUpdateFruit("banana", 12)}>
        Update Banana
      </button>
    </div>
  );
};

export default MapSet1;
