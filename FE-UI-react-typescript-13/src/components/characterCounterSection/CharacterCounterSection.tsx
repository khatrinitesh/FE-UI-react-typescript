import { useRef, useState } from "react";
import { CHAR_LIMIT, WARNING_THRESHOLD } from "./components/data";
import type { CharacterCounterProps } from "../../interface";

const CharacterCounterSection = ({
  limit = CHAR_LIMIT,
  warningAt = WARNING_THRESHOLD,
}: CharacterCounterProps) => {
  const [text, setText] = useState("");
  const counterRef = useRef<HTMLSpanElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);

    if (counterRef.current) {
      const charCount = value.length;

      // Animate if at or over limit
      if (charCount >= warningAt) {
        gsap.fromTo(
          counterRef.current,
          { scale: 1 },
          {
            scale: 1.2,
            color: charCount > limit ? "#f44336" : "#ffa726",
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          }
        );
      } else {
        gsap.to(counterRef.current, {
          color: "#333",
          scale: 1,
          duration: 0.2,
        });
      }
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "500px", margin: "40px auto" }}>
      <textarea
        value={text}
        onChange={handleChange}
        rows={6}
        style={{
          width: "100%",
          fontSize: "16px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          resize: "none",
        }}
        placeholder="Start typing..."
      />
      <div style={{ marginTop: "8px", textAlign: "right" }}>
        <span ref={counterRef} style={{ fontSize: "14px", fontWeight: 600 }}>
          {text.length}/{limit}
        </span>
      </div>
    </div>
  );
};

export default CharacterCounterSection;
