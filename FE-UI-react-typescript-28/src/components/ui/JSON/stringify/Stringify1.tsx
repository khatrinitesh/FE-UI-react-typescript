import { useState } from "react";

const Stringify1 = () => {
  const [jsonString, setJsonString] = useState<string>(
    '{"name":"Alice","age":25,"skills":["React","TypeScript"]}'
  );
  let parsedObject: { name: string; age: number; skills: string[] } | null =
    null;

  try {
    parsedObject = JSON.parse(jsonString);
  } catch (error) {
    console.error("Invalid JSON string:", error);
  }

  return (
    <div>
      {" "}
      <h2>JSON.parse() Example in React + TypeScript</h2>
      <h3>JSON String:</h3>
      <pre>{jsonString}</pre>
      <h3>Parsed Object:</h3>
      <pre>
        {parsedObject ? JSON.stringify(parsedObject, null, 2) : "Invalid JSON"}
      </pre>
      {parsedObject && (
        <div>
          <h3>Access Object Properties:</h3>
          <p>Name: {parsedObject.name}</p>
          <p>Age: {parsedObject.age}</p>
          <p>Skills: {parsedObject.skills.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default Stringify1;
