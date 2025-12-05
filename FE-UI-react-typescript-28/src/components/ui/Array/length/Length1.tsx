import { useState } from "react";

const Length1 = () => {
  const [items, setItems] = useState<string[]>([
    "Apple",
    "Banana",
    "Orange",
    "Grape",
  ]);

  const lengthOfArray = items.length;

  const shortenArray = () => {
    const newArr = [...items];
    newArr.length = 2;
    setItems(newArr);
  };

  const extendArray = () => {
    const newArr = [...items];
    newArr.length = 6;
    setItems(newArr);
  };
  return (
    <>
      {" "}
      <h2>length Property Example in React + TypeScript</h2>
      <h3>Current Array:</h3>
      <pre>{JSON.stringify(items, null, 2)}</pre>
      <h3>Length of Array:</h3>
      <p>{lengthOfArray}</p>
      <button onClick={shortenArray} style={{ marginRight: 10 }}>
        Shorten Array to length = 2
      </button>
      <button onClick={extendArray}>Extend Array to length = 6</button>
    </>
  );
};

export default Length1;
