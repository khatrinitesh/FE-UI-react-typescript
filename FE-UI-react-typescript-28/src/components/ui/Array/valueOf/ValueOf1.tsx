import { useState } from "react";

const ValueOf1 = () => {
  const [fruits] = useState<string[]>(["Apple", "Banana", "Orange"]);
  const primitiveValue = fruits.valueOf();
  return (
    <div>
      {JSON.stringify(fruits, null, 2)}
      <br />
      {JSON.stringify(primitiveValue, null, 2)}
      <br />
      {primitiveValue ? "true" : "false"}
    </div>
  );
};

export default ValueOf1;
