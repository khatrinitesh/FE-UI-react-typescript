const NewArray1 = () => {
  const numbers = new Array(10).fill(0).map((_, i) => `Item ${i + 1}`);
  return (
    <div>
      <h2>Example 1:Basic array new Array()</h2>
      <pre>{JSON.stringify(numbers)}</pre>
    </div>
  );
};

export default NewArray1;
