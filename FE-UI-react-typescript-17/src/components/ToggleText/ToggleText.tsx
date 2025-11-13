import { useEffect, useState } from "react";
import { useTextStore } from "../../store/useTextStore";

const ToggleText = () => {
  //   const [text, setText] = useState("world");
  const [count, setCount] = useState(0);
  const { text, toggleText } = useTextStore();

  //   const handleChangeText = () => {
  //     setText((prev) => (prev === "world" ? "there" : "world"));
  //     console.log(text);
  //   };
  useEffect(() => {
    document.title = `Hello ${text}`;
  });
  const handleInc = () => {
    setCount((prev) => prev + 1);
  };
  const handleDec = () => {
    setCount((prev) => prev - 1);
  };
  const handleRes = () => {
    setCount(0);
  };
  return (
    <div>
      {/* hello {text}
      <button onClick={handleChangeText}>Click Toggle text</button> */}
      <hr />
      {count}
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleRes}>reset</button>
      <hr />
      hello {text}
      <button onClick={toggleText}>Click Toggle Text</button>
    </div>
  );
};

export default ToggleText;
