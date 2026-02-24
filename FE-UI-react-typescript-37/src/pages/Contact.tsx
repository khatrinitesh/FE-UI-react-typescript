import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    if (!value.includes("@")) {
      setError("Invalid Email");
    } else {
      setError("");
    }
  };

  return (
    <div className="p-6">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
        className="border p-2 w-full"
        placeholder="Enter Email"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Contact;
