import type { JSX } from "react";

const ForEach2 = () => {
  const fruits = ["Apple", "Banana", "Mango"];
  const fruitList: JSX.Element[] = [];
  fruits.forEach((fruit, index) => {
    fruitList.push(<li key={index}>{fruit}</li>);
  });
  return (
    <div>
      <ul>{fruitList}</ul>
    </div>
  );
};

export default ForEach2;
