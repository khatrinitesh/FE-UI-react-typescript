import { useState } from "react";

const NewArray2 = () => {
  const [count, setCount] = useState(0);

  const arrNumbers = new Array(count).fill(0).map((_, i) => `Box ${i + 1}`);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Add Box</button>
      <button onClick={() => setCount((c) => Math.max(1, c - 1))}>
        Remove Box
      </button>

      <div style={{ marginTop: "10px" }}>
        {arrNumbers.map((box, i) => (
          <div
            key={i}
            style={{
              width: 80,
              height: 80,
              background: "lightblue",
              margin: "5px",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
            }}
          >
            {box}
          </div>
        ))}
      </div>
    </>
  );
};

export default NewArray2;
