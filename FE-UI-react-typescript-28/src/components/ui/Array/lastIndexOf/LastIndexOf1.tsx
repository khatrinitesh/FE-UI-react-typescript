import { useState } from "react";

const LastIndexOf1 = () => {
  const items = useState<string[]>([
    "Apple",
    "Banana",
    "Orange",
    "Banana",
    "Grape",
  ]);

  const lastIndex = items.lastIndexOf("Banana");

  return (
    <div>
      <h2>lastIndexOf() Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(items, null, 2)}</pre>

      <h3>Last Index of "Banana":</h3>
      <p>{lastIndex}</p>

      <h3>Details:</h3>
      <p>
        Element found at index <strong>{lastIndex}</strong> when searching
        backwards from the end of the array.
      </p>
    </div>
  );
};

export default LastIndexOf1;
