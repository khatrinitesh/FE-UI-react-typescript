const Filter1 = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const allEven = numbers.filter((val) => val % 2 === 0);
  return (
    <div>
      original number: {numbers}
      <br />
      even number: {allEven}
    </div>
  );
};

export default Filter1;
