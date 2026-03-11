import { useState } from "react";
import { USERSEVERY } from "../../../constants/constants";

const EveryArray1 = () => {
  const [numbers, setNumbers] = useState<number[]>([10, 20, 30, 40]);
  const allGreaterThanFive = numbers.every((num) => num > 5);

  const allActive = USERSEVERY.every((user) => user.active);

  return (
    <div>
      <h2>Numbers: {numbers.join(", ")}</h2>
      <p>All numbers greater than 5: {allGreaterThanFive ? "Yes" : "No"}</p>
      {allActive ? "yes" : "no"}
    </div>
  );
};

export default EveryArray1;
