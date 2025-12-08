import { useState } from "react";

const MapKeys1 = () => {
  const [fruits] = useState<Map<string, number>>(
    new Map([
      ["apple", 10],
      ["banana", 5],
      ["orange", 7],
    ])
  );

  const fruitsKeys = Array.from(fruits.keys());
  return (
    <div>
      {" "}
      <h3>Fruit Keys</h3>
      <ul>
        {fruitsKeys.map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
    </div>
  );
};

export default MapKeys1;
