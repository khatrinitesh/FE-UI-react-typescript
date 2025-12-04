import { useState } from "react";

const ForEach3 = () => {
  const [numbers] = useState([1, 2, 3, 4, 5]);
  const [squares, setSquares] = useState<number[]>([]);

  const calculateSquares = () => {
    const newSquares: number[] = [];
    numbers.forEach((num) => newSquares.push(num * num));
    setSquares(newSquares);
  };
  return (
    <>
      <h2>Example 3: forEach() + State</h2>
      <p>Numbers: {numbers.join(", ")}</p>
      <button onClick={calculateSquares}>Calculate Squares</button>
      {squares.length > 0 && <p>Squares: {squares.join(", ")}</p>}
    </>
  );
};

export default ForEach3;
