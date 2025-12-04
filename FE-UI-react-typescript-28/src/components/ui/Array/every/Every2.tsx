const Every2 = () => {
  const words = ["hello", "hi", "hey"];
  const allEven = words.every((word) => word.length <= 5);
  return (
    <div>
      <ul>
        {words.join(", ")}
        <br />
        <p>{allEven ? "yes" : "no"}</p>
      </ul>
    </div>
  );
};

export default Every2;
