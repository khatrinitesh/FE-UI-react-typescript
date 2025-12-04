import { useState } from "react";

const Filter3 = () => {
  const [numbers] = [[10, 15, 20, 25, 30]];

  const [threshold, setThreshold] = useState(0);

  const filteredNumbers = numbers.filter((num) => num > threshold);
  return (
    <div>
      {numbers.join(", ")}
      <br />
      <label htmlFor="">
        show numbers greater than:{" "}
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
        />
      </label>
      <p>Filtered: {filteredNumbers.join(", ")}</p>
    </div>
  );
};

export default Filter3;
