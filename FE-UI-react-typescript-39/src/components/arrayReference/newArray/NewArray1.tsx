const NewArray1 = () => {
  // empty array
  const arr: number[] = [];
  const numbers: number[] = [];
  //   array with values
  const fruits: string[] = ["Apple", "Banana", "Orange"];
  const items: string[] = ["items1", "items2", "items3"];
  const arrNumberWise: number[] = new Array(10);
  const exampleFill: string[] = Array(fruits.length).fill("kiwi");
  const numberWise = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div>
      it is an empty array: {arr} <br /> {numbers}
      <br />
      {fruits.join(", ")}
      <br />
      {items}
      <br />
      {exampleFill}
      <br />
      {arrNumberWise}
      <br />
      {numberWise}
      <br />
      {items.map((val) => (
        <p key={val}>{val}</p>
      ))}
    </div>
  );
};

export default NewArray1;
