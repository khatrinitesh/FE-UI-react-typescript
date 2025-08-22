const EntriesComponent = () => {
  const colors: string[] = ["red", "green", "blue"];

  for (const [index, color] of colors.entries()) {
    console.log(index, color);
  }
  const animals: string[] = ["Cat", "Dog", "Elephant"];
  return (
    <div>
      {" "}
      {animals}
      <ul>
        {[...animals.entries()].map(([index, animal]) => (
          <li key={index}>
            {index}: {animal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntriesComponent;
