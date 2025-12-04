const Every1 = () => {
  const numbers = [2, 4, 6, 8];

  const allEven = numbers.every((val) => val % 2 === 0);
  return (
    <div>
      {numbers.join(", ")}
      <br />
      {allEven ? "yes" : "no"}
    </div>
  );
};

export default Every1;
