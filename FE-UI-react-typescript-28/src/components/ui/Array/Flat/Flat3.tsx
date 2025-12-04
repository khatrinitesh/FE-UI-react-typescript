import { useState } from "react";

const Flat3 = () => {
  const [nestedArrays] = useState([
    [1, 2],
    [3, 4],
    [5, [6, 7]],
  ]);

  const flattened = nestedArrays.flat(2); // Flatten 2 levels

  return (
    <div>
      <p>Nested Arrays: {JSON.stringify(nestedArrays)}</p>
      <p>Flattened Arrays: {JSON.stringify(flattened)}</p>
    </div>
  );
};

export default Flat3;
