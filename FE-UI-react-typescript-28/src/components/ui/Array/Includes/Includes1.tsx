const Includes1 = () => {
  const fruits = ["Apple", "Banana", "Mango"];
  const hasMango = fruits.includes("Mango");
  const hasOrange = fruits.includes("Orange");

  return (
    <div>
      <p>Fruits: {fruits.join(", ")}</p>
      <p>Contains "Mango"? {hasMango ? "Yes" : "No"}</p>
      <p>Contains "Orange"? {hasOrange ? "Yes" : "No"}</p>
    </div>
  );
};

export default Includes1;
