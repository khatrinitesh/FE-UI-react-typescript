import { useState } from "react";
import { useStore } from "../store/useStore";

const User = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);

  const { user, setUser } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name,
      age,
    });
  };

  return (
    <div>
      <h2>User</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ) : (
        <p>No user data</p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <button type="submit">Set User</button>
      </form>
    </div>
  );
};

export default User;
