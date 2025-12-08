import { useState } from "react";

const MapGet1 = () => {
  const [prices] = useState<Map<string, number>>(
    new Map([
      ["apple", 1.2],
      ["banana", 0.8],
      ["orange", 1.5],
    ])
  );

  const getPrice = (key: string): number | undefined => {
    return prices.get(key);
  };
  return (
    <>
      <h3>Fruit Prices</h3>
      <p>Apple price: {getPrice("apple")}</p>
      <p>Banana price: {getPrice("banana")}</p>
      <p>Watermelon price: {String(getPrice("watermelon"))}</p>
    </>
  );
};

export default MapGet1;
