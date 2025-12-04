import { useState } from "react";

const Includes2 = () => {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  const [search, setSearch] = useState("");

  const contains = fruits.includes(search);

  return (
    <div>
      {" "}
      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>
        {search === ""
          ? "Type something..."
          : contains
          ? `"${search} is in the list"`
          : `"${search}" is NOT in the list`}
      </p>
    </div>
  );
};

export default Includes2;
