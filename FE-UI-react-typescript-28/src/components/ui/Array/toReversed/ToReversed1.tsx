import { useState } from "react";

const ToReversed1 = () => {
  const [fruits] = useState<string[]>(["Apple", "Banana", "Orange", "Grape"]);

  // Create a new reversed array without mutating the original
  const reversedFruits = fruits.toReversed();
  return (
    <div>
      <h2>toReversed() Example in React + TypeScript</h2>

      <h3>Original Array:</h3>
      <pre>{JSON.stringify(fruits, null, 2)}</pre>

      <h3>New Reversed Array:</h3>
      <pre>{JSON.stringify(reversedFruits, null, 2)}</pre>
    </div>
  );
};

export default ToReversed1;
