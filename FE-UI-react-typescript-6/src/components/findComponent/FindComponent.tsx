const FindComponent = () => {
  const numbers: number[] = [10, 15, 20, 25];
  const foundResult = numbers.find((num) => num > 18);
  return <div>{foundResult}</div>;
};

export default FindComponent;
