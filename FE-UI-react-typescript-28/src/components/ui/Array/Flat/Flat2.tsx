const Flat2 = () => {
  const nested = [1, [2, 3], [4, [5, 6]]];

  // Flatten all levels using Infinity
  const fullyFlattened = nested.flat(Infinity);
  return (
    <div>
      <p>Original: {JSON.stringify(nested)}</p>
      <p>Fully Flattened: {JSON.stringify(fullyFlattened)}</p>
    </div>
  );
};

export default Flat2;
