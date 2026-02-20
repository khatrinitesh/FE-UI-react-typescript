import { useState } from "react";

// export const numbers = [1, 2, 3, 4];

const NewEmpty1 = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };
  return (
    <div>
      <button onClick={addNumber}>Add number</button>
      <p>{numbers.join(", ")}</p>
    </div>
  );
};

export default NewEmpty1;
