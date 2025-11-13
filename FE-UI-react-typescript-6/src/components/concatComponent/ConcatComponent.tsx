import { useState } from "react";

const ConcatComponent = () => {
  const numbers1 = [1, 2, 3];
  const numbers2 = [4, 5, 6];
  const combineNumbers = numbers1.concat(numbers2);
  const [items, setItems] = useState<string[]>(["Apple", "Banana"]);

  const addMoreItems = () => {
    const newItems = ["pineapple", "grape"];
    const updatedItems = items.concat(newItems);
    setItems(updatedItems);
  };

  return (
    <div>
      {combineNumbers}
      <button onClick={addMoreItems}>Add Fruits</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConcatComponent;
