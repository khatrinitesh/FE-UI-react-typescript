const At1 = () => {
  const numbers = [10, 20, 30, 40, 50];
  return (
    <div>
      <p>First element: {numbers.at(0)}</p>
      <p>Third element: {numbers.at(2)}</p>
      <p>Last element: {numbers.at(-1)}</p>
    </div>
  );
};

export default At1;
