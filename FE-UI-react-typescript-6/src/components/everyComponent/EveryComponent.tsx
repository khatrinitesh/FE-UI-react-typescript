import { useState } from "react";

const EveryComponent = () => {
  const ages: number[] = [22, 35, 42];
  const allAdults = ages.every((age) => age >= 18);
  const [inputs, setInputs] = useState<string[]>(["John", "Doe", ""]);

  const areAllFilled = inputs.every((input) => input.trim().length > 0);

  return (
    <div>
      {allAdults}
      <hr />
      <ul>
        {inputs.map((input, index) => (
          <li key={index}>{input && "(empty)"}</li>
        ))}
      </ul>
      <p>
        {areAllFilled
          ? "✅ All fields are filled."
          : "❌ Some fields are still empty."}
      </p>
    </div>
  );
};

export default EveryComponent;
