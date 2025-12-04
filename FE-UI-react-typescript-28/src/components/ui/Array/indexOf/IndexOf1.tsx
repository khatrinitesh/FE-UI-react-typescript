const IndexOf1 = () => {
  const numbers = [10, 20, 30, 40];
  const index30 = numbers.indexOf(30);
  const index100 = numbers.indexOf(100);
  return (
    <div>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>Index of 30: {index30}</p>
      <p>Index of 100: {index100}</p>
    </div>
  );
};

export default IndexOf1;
