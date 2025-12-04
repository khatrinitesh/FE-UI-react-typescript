import { useState } from "react";

const Entries3 = () => {
  const [items] = useState(["A", "B", "C", "D"]);
  return (
    <div>
      <ul>
        {[...items.entries()].map(([idx, val]) => (
          <li key={idx}>
            <p>{val}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Entries3;
