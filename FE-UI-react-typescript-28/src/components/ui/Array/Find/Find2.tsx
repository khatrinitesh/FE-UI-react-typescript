const Find2 = () => {
  const fruits = ["Apple", "Banana", "Mango", "Blueberry"];

  const longFruit = fruits.find((val) => val.length > 5);
  return <div>{longFruit}</div>;
};

export default Find2;
