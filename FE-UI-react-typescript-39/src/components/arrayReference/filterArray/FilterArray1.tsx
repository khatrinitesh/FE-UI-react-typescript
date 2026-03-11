const FilterArray1 = () => {
  const numbers: number[] = [10, 20, 3, 40, 5];

  const result = numbers.filter((num) => num > 10);

  return <div>Result: {result}</div>;
};

export default FilterArray1;
