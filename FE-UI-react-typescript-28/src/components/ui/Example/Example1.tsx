import { useState } from "react";

const Example1 = () => {
  let count: number = 5;
  const name: string = "test";
  let isActive: boolean = true;
  const age = 30; // inferred as number
  const messsage = "hello world";
  const [count1, setCount1] = useState<number>(44);

  const handleIncrement = () => {
    setCount1((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount1((prev) => prev - 1);
  };
  return (
    <div className="flex flex-col">
      <span>{count}</span>
      <span>{name}</span>
      <span>{isActive ? "happy" : "unhappy"}</span>
      <span>Age: {age}</span>
      <span>Messsage: {messsage}</span>
      <span>{count1}</span>
    </div>
  );
};

export default Example1;
