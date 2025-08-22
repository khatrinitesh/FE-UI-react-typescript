import { useState } from "react";

const FilterComponent = () => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  const filterNum = numbers.filter((num) => num > 3);

  const [query, setQuery] = useState<string>("");
  const items: string[] = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      {filterNum} <hr />
      {filteredItems}
      <input
        className="border shadow focus:border-blue-500 p-2"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
