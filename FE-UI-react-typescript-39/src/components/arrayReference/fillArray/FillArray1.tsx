import { useState } from "react";

const FillArray1 = () => {
  const result = new Array(5)
    .fill(["Happy", "Sad", "Motivation", "Inspiring"])
    .join(", ");

  const numbers: number[] = [1, 2, 3, 4, 5];
  const resultNumbers = numbers.fill(9, 1, 4);

  const [numbersData, setNumbersData] = useState<number[]>([1, 2, 3, 4, 5]);
  const handleFill = () => {
    const newArr = [...numbersData];
    newArr.fill(0, 2, 5);
    setNumbersData(newArr);
  };
  return (
    <div>
      {result} <br />
      {resultNumbers}
      <br />
      <h2>{numbersData.join(", ")}</h2>
      <button onClick={handleFill}>Fill with 0</button>
    </div>
  );
};

export default FillArray1;
