import { useState } from "react";

const Find3 = () => {
  const [numbers] = useState([5, 10, 15, 20, 25]);
  const [threshold, setThreshold] = useState(0);

  const firstAbove = numbers.find((num) => num > threshold);
  return (
    <div>
      <p>Numbers: {numbers.join(", ")}</p>

      <label>
        Find first number greater than:{" "}
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
        />
      </label>

      <p>
        First number above {threshold}: {firstAbove ?? "None"}
      </p>
    </div>
  );
};

export default Find3;
