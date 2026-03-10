import { useRef } from "react";

const UnControlledComponent = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameRef.current?.value;

    if (!name) {
      alert("Please enter your name");
      return;
    }

    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Uncontrolled Component Example</h3>

      <input type="text" ref={nameRef} placeholder="Enter your name" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UnControlledComponent;
