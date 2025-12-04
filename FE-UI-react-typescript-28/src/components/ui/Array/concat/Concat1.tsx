const Concat1 = () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = arr1.concat(arr2);
  return <div>{JSON.stringify(combined)}</div>;
};

export default Concat1;
