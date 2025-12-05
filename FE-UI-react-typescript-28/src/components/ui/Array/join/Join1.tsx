import { useState } from "react";

const Join1 = () => {
  const [items] = useState<string[]>(["Apple", "Banana", "Orange"]);

  const joinedItems = items.join(", ");

  return (
    <>
      <h2>join() Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(items, null, 2)}</pre>

      <h3>After using join():</h3>
      <p>{joinedItems}</p>
    </>
  );
};

export default Join1;
