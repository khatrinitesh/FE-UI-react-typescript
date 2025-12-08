import { useState } from "react";

const MapForEach1 = () => {
  const [myMap, setMyMap] = useState<Map<string, number>>(
    new Map([
      ["apple", 10],
      ["banana", 5],
      ["orange", 7],
    ])
  );

  const deleteItem = (key: string) => {
    setMyMap((prev) => {
      const updated = new Map(prev);
      updated.delete(key);
      return updated;
    });
  };

  return (
    <div>
      {" "}
      <ul>
        {Array.from(myMap.entries()).map(([key, value]) => (
          <li key={key}>
            {key} — {value}{" "}
            <button onClick={() => deleteItem(key)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapForEach1;
