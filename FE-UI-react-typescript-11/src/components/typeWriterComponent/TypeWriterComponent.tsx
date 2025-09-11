import { useEffect } from "react";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useTypewriterStore } from "../../logic-store-state-management/usetypewriterStore/usetypewriterStore";
import type { TypewriterProps } from "../../interface";

const TypeWriterComponent = () => {
  return (
    <>
      <Typewriter text="Hello, this is a typewriter effect using Zustand and TypeScript!" />
    </>
  );
};

export default TypeWriterComponent;

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const { displayText, setText, setStatus, reset } = useTypewriterStore();

  useTypewriter();

  useEffect(() => {
    reset();
    setText(text);
    setStatus("TYPING");
  }, [text, setText, setStatus, reset]);

  return (
    <h2>
      {displayText}
      <span className="cursor">|</span>
    </h2>
  );
};
