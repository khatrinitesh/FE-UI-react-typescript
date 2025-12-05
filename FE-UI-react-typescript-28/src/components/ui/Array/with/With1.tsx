import { useState } from "react";

const With1 = () => {
  const [fruits] = useState<string[]>(["Apple", "Banana", "Orange", "Grape"]);

  const updatedFruits = fruits.slice(1, "mango");
  return (
    <div>
      <h2>with() Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(fruits, null, 2)}</pre>

      <h3>New Array After with(1, "Mango"):</h3>
      <pre>{JSON.stringify(updatedFruits, null, 2)}</pre>

      <h3>Comparison:</h3>
      <p>
        Are <code>fruits</code> and <code>updatedFruits</code> the same object?{" "}
        {fruits === updatedFruits ? "Yes ❌" : "No ✅"}
      </p>
    </div>
  );
};

export default With1;
