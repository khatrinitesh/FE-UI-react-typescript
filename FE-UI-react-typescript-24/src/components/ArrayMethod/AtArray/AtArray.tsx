import { useState } from "react";


const AtArray = () => {
    const [index, setIndex] = useState<number>(0);

     const fruits: string[] = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

      const fruitAtIndex = fruits.at(index);

      const handleIncrement = () => {
        setIndex((prevIndex) => prevIndex + 1);
      }
      const handleDecement = () => {
        setIndex((prevIndex) => prevIndex - 1);
      }
  return (
    <>
       <h2>Fruit at Index</h2>
      <p>
        Index: {index} → Fruit: {fruitAtIndex || "No fruit found"}
      </p>

      <button onClick={handleIncrement}>Next Fruit</button>
      <button onClick={handleDecement}>Previous Fruit</button>
    </>
  )
}

export default AtArray
