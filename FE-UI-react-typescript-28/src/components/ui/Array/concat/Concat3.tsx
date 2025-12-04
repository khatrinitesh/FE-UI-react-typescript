import { useState } from "react";

const Concat3 = () => {
  const [items, setItems] = useState<string[]>(["A", "B", "C"]);

  const addMore = () => {
    const newItems = ["D", "E"];
    setItems((prev) => prev.concat(newItems));
  };
  return (
    <div>
      <ul>
        {items.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
      <br />
      <button onClick={addMore}>Click add</button>
    </div>
  );
};

export default Concat3;
