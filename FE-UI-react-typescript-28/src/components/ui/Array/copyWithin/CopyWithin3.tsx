import { useState } from "react";

const CopyWithin3 = () => {
  const [array, setArray] = useState([10, 20, 30, 40, 50]);

  const applyCopy = () => {
    const newArr = [...array].copyWithin(1, 3, 5);
    setArray(newArr);
  };
  return (
    <div>
      {" "}
      <p>Array: {array.join(", ")}</p>
      <button onClick={applyCopy}>CopyWithin (index 3→1)</button>
    </div>
  );
};

export default CopyWithin3;
