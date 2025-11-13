import { useState, useTransition } from "react";

function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<string[]>([]);

  const handleClick = () => {
    // Immediate update (important)
    setCount((c) => c + 1);

    // Deferred update (not urgent)
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
      setItems(newItems);
    });
  };

  return (
    <>
      {" "}
      <div style={{ padding: 20 }}>
        <h2>useTransition Example</h2>
        <p>Count: {count}</p>

        <button onClick={handleClick}>Update</button>

        {isPending && <p style={{ color: "orange" }}>Loading list...</p>}

        <ul>
          {items.slice(0, 50).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
