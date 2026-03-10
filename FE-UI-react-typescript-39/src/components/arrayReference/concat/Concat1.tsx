import { useState } from "react";

const Concat1 = () => {
  const arr1: number[] = [1, 2, 3];
  const arr2: number[] = [4, 5, 6];
  const merged = arr1.concat(arr2);
  const frontend: string[] = ["React", "Vue"];
  const backend: string[] = ["Node", "Python"];
  const allTech = frontend.concat(backend);
  const [items, setItems] = useState<string[]>(["Apple", "Banana"]);
  const addMore = () => {
    const newItems = ["orange", "mango"];
    setItems(items.concat(newItems));
  };

  const a = [1];
  const b = [2];
  const c = [3];
  const result = a.concat(b, c);
  return (
    <div>
      {result}
      <br />
      arr1: {arr1}
      <br />
      arr2: {arr2}
      <br />
      merged: {merged}
      <br />
      <ul>
        {allTech.map((val) => (
          <li key={val}>{val}</li>
        ))}
      </ul>
      <br />
      <button onClick={addMore}>Add fruits</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Concat1;
