import { useState } from "react";

const At1 = () => {
  const numbers: number[] = [10, 20, 30, 40];
  const first = numbers.at(0); // first
  const last = numbers.at(-1); // last

  const fruits: string[] = ["apple", "banana", "orange", "mango"];
  const firstFruits = fruits.at(0);
  const lastFruits = fruits.at(-1);

  const items: string[] = ["react", "typescript", "zustand", "tailwind"];
  const [current, setCurrent] = useState<string | undefined>(items.at(0));

  const showLast = () => {
    setCurrent(items.at(-1));
  };

  const messages = ["hello", "how are you?", "welcome"];
  const lastMsg = messages.at(-1);
  return (
    <div>
      <br />
      last messages: {lastMsg}
      <br />
      first: {first}
      <br />
      last: {last}
      <br />
      fruits first: {firstFruits}
      <br />
      fruits last: {lastFruits}
      <br />
      <h2>Current Item: {current}</h2>
      <button onClick={showLast}>Show Last Item</button>
    </div>
  );
};

export default At1;
