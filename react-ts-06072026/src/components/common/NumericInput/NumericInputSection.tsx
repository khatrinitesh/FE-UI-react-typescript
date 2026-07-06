import { useState } from "react";
import NumericInput from "./NumericInput";

export default function NumericInputSection() {
      const [value, setValue] = useState("");
  const [isNumeric, setIsNumeric] = useState(false);

  return (
    <>
       <div className="max-w-md mx-auto mt-10">
      <NumericInput
        label="Age"
        value={value}
        maxLength={10}
        placeholder="Enter number"
        onChange={(value, numeric) => {
          setValue(value);
          setIsNumeric(numeric);
        }}
      />

      <div className="mt-4 rounded bg-gray-100 p-4">
        <p>Value: {value}</p>
        <p>isNumeric: {String(isNumeric)}</p>
      </div>
    </div> 
    </>
  )
}
