import { useState } from "react";

function isNumeric(value: unknown): boolean {
  if (typeof value === "number") {
    return Number.isFinite(value);
  }

  if (typeof value !== "string" || value.trim() === "") {
    return false;
  }

  return Number.isFinite(Number(value));
}

export function NumericChecker() {
  const [value, setValue] = useState("");

  const validNumber = isNumeric(value);

  return (
    <div>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Enter a value"
        className="rounded-lg border px-4 py-2"
      />

      <p className={validNumber ? "text-green-600" : "text-red-600"}>
        {validNumber ? "Value is numeric" : "Value is not numeric"}
      </p>
    </div>
  );
}
