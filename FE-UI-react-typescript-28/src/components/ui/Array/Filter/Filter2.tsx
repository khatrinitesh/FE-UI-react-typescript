const Filter2 = () => {
  const fruits = ["Apple", "Banana", "Mango", "Blueberry", "Pear"];
  const longFruits = fruits.filter((fruit) => fruit.length > 5);
  return (
    <div>
      <p>All Fruits: {fruits.join(", ")}</p>
      <p>long fruits: {longFruits.join(", ")}</p>
    </div>
  );
};

export default Filter2;
