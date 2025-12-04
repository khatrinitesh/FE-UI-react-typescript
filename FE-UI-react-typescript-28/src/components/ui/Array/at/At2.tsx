const At2 = () => {
  const fruits = ["apple", "banan", "grape", "mango"];
  const selectedFruits = fruits.at(2);
  return (
    <div>
      <h2>Selected fruits {selectedFruits}</h2>
    </div>
  );
};

export default At2;
