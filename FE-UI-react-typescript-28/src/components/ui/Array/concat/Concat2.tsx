const Concat2 = () => {
  const fruits1 = ["Apple", "Banana"];
  const fruits2 = ["Mango", "Orange"];
  const allFruits = fruits1.concat(fruits2);
  return (
    <div>
      {allFruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </div>
  );
};

export default Concat2;
