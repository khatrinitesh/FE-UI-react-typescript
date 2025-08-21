import { useState } from "react";
import { countCharacters } from "../../utils/utils";

const CharacterCountComponent = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(countCharacters(text));
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Character Counter</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button onClick={handleCount} style={{ marginLeft: "1rem" }}>
        Count Characters
      </button>
      {count > 0 && (
        <p>
          Number of characters: <strong>{count}</strong>
        </p>
      )}
    </div>
  );
};

export default CharacterCountComponent;
