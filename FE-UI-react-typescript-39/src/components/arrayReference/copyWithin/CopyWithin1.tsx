import { useState } from "react";

const CopyWithin1 = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5]);

  const handleCopy = () => {
    const newArr = [...numbers];
    newArr.copyWithin(0, 3);
    setNumbers(newArr);
  };

  const fruits: string[] = ["apple", "banana", "orange", "mango"];
  const resultFruits = fruits.copyWithin(1, 2, 4).join(", ");
  return (
    <div>
      <h2>{numbers.join(", ")}</h2>
      <button onClick={handleCopy}>Copy within</button>
      <br />
      {resultFruits}
    </div>
  );
};

export default CopyWithin1;
