const CopyWithin2 = () => {
  const letters = ["A", "B", "C", "D", "E", "F"];
  const result = [...letters].copyWithin(0, 1, 4);
  return (
    <div>
      <p>Original: {letters}</p>
      <p>Result: {result}</p>
    </div>
  );
};

export default CopyWithin2;
