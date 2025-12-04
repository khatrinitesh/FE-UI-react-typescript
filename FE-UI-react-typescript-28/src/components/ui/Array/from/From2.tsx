const From2 = () => {
  const squares = Array.from({ length: 5 }, (_, i) => i * i);

  return <div>{squares.join(", ")}</div>;
};

export default From2;
