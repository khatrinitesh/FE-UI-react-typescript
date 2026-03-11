const Entries1 = () => {
  const fruits: string[] = ["apple", "banana", "mango"];
  const resultFruit = Array.from(fruits.entries());
  return (
    <div className="space-y-1">
      {Array.from(fruits.entries()).map(([index, fruit]) => (
        <p
          className="text-red-500 font-bold italic underline underline-offset-2"
          key={index}
        >
          {index} - {fruit}
        </p>
      ))}
      {resultFruit}
    </div>
  );
};

export default Entries1;
