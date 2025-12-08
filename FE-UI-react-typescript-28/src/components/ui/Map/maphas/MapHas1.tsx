import { useState } from "react";

const MapHas1 = () => {
  const [fruits] = useState<Map<string, number>>(
    new Map([
      ["apple", 10],
      ["banana", 5],
      ["orange", 7],
    ])
  );
  const checkFruit = (key: string): boolean => {
    return fruits.has(key);
  };
  return (
    <div>
      <h3>Check if a Fruit Exists</h3>

      <p>Does apple exist? {checkFruit("apple") ? "Yes" : "No"}</p>
      <p>Does mango exist? {checkFruit("mango") ? "Yes" : "No"}</p>

      <h4>All Fruits</h4>
      <ul>
        {Array.from(fruits.keys()).map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
    </div>
  );
};

export default MapHas1;
