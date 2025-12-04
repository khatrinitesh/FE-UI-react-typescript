const Entries1 = () => {
  const fruits = ["Apple", "Banana", "Mango"];
  const entriesArray = [...fruits.entries()];
  return <div>{JSON.stringify(entriesArray)}</div>;
};

export default Entries1;
