import { useState } from "react";

const CopyWithinComponent = () => {
  const fruits: string[] = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const resultFruits = fruits.copyWithin(2, 0, 2);

  const [items, setItems] = useState<string[]>(["A", "B", "C", "D", "E"]);

  const handleCopy = () => {
    const copied = [...items]; // Make a copy to avoid mutating state directly
    copied.copyWithin(1, 3, 5); // Copy 'D', 'E' into positions starting at index 1
    setItems(copied);
  };

  return (
    <div>
      {resultFruits}
      <hr />
      <button onClick={handleCopy}>Copy Within</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CopyWithinComponent;
