import { useState } from "react";

const Clear1 = () => {
  const [userMap, setUserMap] = useState<Map<string, string>>(
    new Map([
      ["name", "Alice"],
      ["country", "USA"],
      ["role", "Developer"],
    ])
  );
  const handleClear = () => {
    const newMap = new Map(userMap);
    newMap.clear();
    setUserMap(newMap);
  };
  return (
    <div>
      <h2>Map.clear() Example in React + TypeScript</h2>

      <h3>Current Map Entries:</h3>

      {userMap.size === 0 ? (
        <p>The map is empty.</p>
      ) : (
        <ul>
          {[...userMap.entries()].map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={handleClear}
        style={{ marginTop: 20, padding: "8px 14px" }}
      >
        Clear Map
      </button>
    </div>
  );
};

export default Clear1;
