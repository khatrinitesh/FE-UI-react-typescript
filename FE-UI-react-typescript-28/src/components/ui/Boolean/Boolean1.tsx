import { useState } from "react";

const Boolean1 = () => {
  const [values] = useState<any[]>([
    0,
    1,
    "",
    "Hello",
    null,
    undefined,
    [],
    [1, 2],
  ]);
  return (
    <div>
      {" "}
      <h2>Boolean() Example in React + TypeScript</h2>
      <h3>Original Values:</h3>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <h3>Converted to Boolean:</h3>
      <ul>
        {values.map((val, index) => (
          <li key={index}>
            Value: {JSON.stringify(val)} → Boolean: {Boolean(val).toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Boolean1;
