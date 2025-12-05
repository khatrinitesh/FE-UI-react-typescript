import { useState } from "react";

const Pop1 = () => {
  const [fruits, setFruits] = useState<string[]>([
    "Apple",
    "Banana",
    "Orange",
    "Grape",
  ]);

  const [removedFruit, setRemovedFruit] = useState<string | undefined>();

  const handlePop = () => {
    const newArray = [...fruits];
    const popped = newArray.pop();
    setRemovedFruit(popped);
    setFruits(newArray);
  };
  return (
    <div>
      <h2>pop() Example in React + TypeScript</h2>

      <h3>Current Array:</h3>
      <pre>{JSON.stringify(fruits, null, 2)}</pre>

      <button onClick={handlePop} style={{ marginTop: 10 }}>
        Pop Last Fruit
      </button>

      {removedFruit && (
        <div style={{ marginTop: 15 }}>
          <h3>Last Removed Element:</h3>
          <p>{removedFruit}</p>
        </div>
      )}
    </div>
  );
};

export default Pop1;
