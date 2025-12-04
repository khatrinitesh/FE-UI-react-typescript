const Entries2 = () => {
  const colors = ["Red", "Green", "Blue"];
  return (
    <div>
      <ul>
        {[...colors.entries()].map(([index, color]) => (
          <li key={index}>
            Index: {index}, Color:{color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Entries2;
