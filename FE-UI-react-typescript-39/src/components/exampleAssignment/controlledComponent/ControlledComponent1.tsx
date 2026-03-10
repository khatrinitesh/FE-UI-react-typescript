import { useState } from "react";

const ControlledComponent1 = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("submitted name" + name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Controlled Component</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button type="submit">Submit</button>

      <p>Live Value: {name}</p>
    </form>
  );
};

export default ControlledComponent1;
