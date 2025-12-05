import { useState } from "react";

const Key1 = () => {
  const [items] = useState<string[]>(["Apple", "Banana", "Orange"]);
  const keysIterator = items.keys();

  const keysArray = Array.from(keysIterator);

  return (
    <>
      <div style={{ padding: 20, fontFamily: "Arial" }}>
        <h2>keys() Example in React + TypeScript</h2>

        <h3>Original Array:</h3>
        <pre>{JSON.stringify(items, null, 2)}</pre>

        <h3>Iterator Keys:</h3>
        <pre>{JSON.stringify(keysArray, null, 2)}</pre>

        <h3>Rendering list using keys():</h3>
        <ul>
          {keysArray.map((key) => (
            <li key={key}>
              Index: {key}, Value: {items[key]}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Key1;
