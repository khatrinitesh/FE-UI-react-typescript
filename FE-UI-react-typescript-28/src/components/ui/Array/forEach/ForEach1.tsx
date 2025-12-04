const ForEach1 = () => {
  const numbers = [1, 2, 3, 4, 5];
  const squares: number[] = [];

  // Push the square of each number into squares array
  numbers.forEach((num) => {
    squares.push(num * num);
  });
  return (
    <>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>Squares: {squares.join(", ")}</p>
    </>
  );
};

export default ForEach1;
