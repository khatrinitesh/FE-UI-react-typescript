import { useState } from "react";
import type { Fruit } from "../../interface";
import { sumFruits } from "../../utils/utils";

const FruitSumComponent = () => {
  const [fruits, setFruits] = useState<Fruit[]>([
    { name: "apple", quantity: 3 },
    { name: "banana", quantity: 5 },
    { name: "orange", quantity: 2 },
  ]);
  const total = sumFruits(fruits);
  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Fruit Basket</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit.name}: {fruit.quantity}
          </li>
        ))}
      </ul>
      <p>
        <strong>Total Fruits:</strong> {total}
      </p>
    </div>
  );
};

export default FruitSumComponent;
