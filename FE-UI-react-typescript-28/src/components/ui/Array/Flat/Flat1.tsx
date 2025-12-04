const Flat1 = () => {
  const nested = [1, [2, 3], [4, [5, 6]]];

  const flattered = nested.flat();
  return (
    <div>
      {}
      {JSON.stringify(nested)}
      <p>Flattened (1 level): {JSON.stringify(flattered)}</p>
    </div>
  );
};

export default Flat1;
