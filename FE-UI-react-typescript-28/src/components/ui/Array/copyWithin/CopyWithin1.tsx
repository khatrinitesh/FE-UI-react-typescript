const CopyWithin1 = () => {
  const arr = [1, 2, 3, 4, 5];
  const result = [...arr].copyWithin(3, 0, 1);
  return (
    <div>
      original: {JSON.stringify(arr)};
      <br />
      result: {JSON.stringify(result)}
    </div>
  );
};

export default CopyWithin1;
