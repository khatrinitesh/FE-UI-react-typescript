import { useState } from "react";

const FieldInputTel = () => {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return "";
    return [match[1], match[2], match[3]].filter(Boolean).join("-");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
    setIsValid(/^\d{3}-\d{3}-\d{4}$/.test(formatted));
  };

  return (
    <div style={{ margin: "2rem" }}>
      <label htmlFor="phone">Phone Number:</label>
      <input
        id="phone"
        type="tel"
        value={phone}
        onChange={handleChange}
        placeholder="123-456-7890"
        style={{
          borderColor: isValid ? "#ccc" : "red",
          padding: "6px",
          marginLeft: "8px",
        }}
      />
      {!isValid && <p style={{ color: "red" }}>Invalid phone format</p>}
    </div>
  );
};

export default FieldInputTel;
