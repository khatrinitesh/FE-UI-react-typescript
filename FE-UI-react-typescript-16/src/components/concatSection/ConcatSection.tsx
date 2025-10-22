const ConcatSection = () => {
  const maleNames = ["Nitesh", "Vishal"];
  const femaleNames = ["Tiya", "Pamisha"];

  const allNames = [...maleNames, ...femaleNames];
  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-2">All Names:</h2>
      <ul className="list-disc pl-6">
        {allNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConcatSection;
