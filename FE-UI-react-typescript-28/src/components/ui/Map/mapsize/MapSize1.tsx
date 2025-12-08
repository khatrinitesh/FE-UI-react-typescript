import { useState } from "react";

const MapSize1 = () => {
  const [fruits, setFruits] = useState<Map<string, number>>(
    new Map([
      ["apple", 10],
      ["banana", 5],
      ["orange", 7],
    ])
  );

  const addFruit = (key: string, value: number) => {
    setFruits((prev) => {
      const updated = new Map(prev);
      updated.set(key, value);
      return updated;
    });
  };
  return (
    <>
      <h3>Fruits Map</h3>
      <p>Total fruits: {fruits.size}</p> {/* Using size */}
      <ul>
        {Array.from(fruits.entries()).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <button onClick={() => addFruit(" ", 4)}>Add Mango</button>
    </>
  );
};

export default MapSize1;
