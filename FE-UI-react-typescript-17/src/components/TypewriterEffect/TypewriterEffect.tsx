import { useEffect } from "react";
import { useTypewriterStore } from "../../store/typewriterStore";

const TypewriterEffect = () => {
  const displayedText = useTypewriterStore((state) => state.displayedText);
  const startTyping = useTypewriterStore((state) => state.startTyping);
  const resetTyping = useTypewriterStore((state) => state.resetTyping);

  useEffect(() => {
    resetTyping();
    startTyping();
  }, [resetTyping, startTyping]);
  return (
    <h1 style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
      {displayedText}
      <span className="cursor">|</span>
      <style>{`
        .cursor {
          animation: blink 1s step-start infinite;
          color: #000;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </h1>
  );
};

export default TypewriterEffect;
