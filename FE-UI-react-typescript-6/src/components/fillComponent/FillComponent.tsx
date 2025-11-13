import { useState } from "react";

const FillComponent = () => {
  const nums = [1, 2, 3, 4, 5];
  const resultNum = nums.fill(0, 1, 4);

  const [board, setBoard] = useState<string[]>(new Array(9).fill(""));

  const resetBoard = () => {
    const cleared = [...board].fill("");
  };
  const fillWithX = () => {
    const filled = [...board].fill("X", 0, 5); // Fill first 5 squares with 'X'
    setBoard(filled);
  };

  return (
    <div>
      {resultNum}
      <hr />
      <h3>Game Board</h3>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          width: "120px",
        }}
      >
        {board.map((cell, i) => (
          <div
            key={i}
            style={{
              width: "30px",
              height: "30px",
              border: "1px solid black",
              textAlign: "center",
              lineHeight: "30px",
            }}
          >
            {cell}
          </div>
        ))}
      </div>
      <button onClick={fillWithX}>Fill First 5 with "X"</button>
      <button onClick={resetBoard}>Reset Board</button>
    </div>
  );
};

export default FillComponent;
