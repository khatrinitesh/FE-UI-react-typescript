const Find1 = () => {
  const numbers = [10, 15, 20, 25, 30];
  const firstLarge = numbers.find((num) => num > 18);
  return (
    <div>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>First number greater than 18: {firstLarge}</p>
    </div>
  );
};

export default Find1;
