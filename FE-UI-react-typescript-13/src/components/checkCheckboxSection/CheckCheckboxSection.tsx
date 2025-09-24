import { useEffect, useRef, useState } from "react";
import type { AnimatedCheckboxProps } from "../../interface";
import { CHECK_ANIMATION_DURATION } from "./components/data";
import gsap from "gsap";

const CheckCheckboxSection = ({
  id,
  label,
  defaultChecked = false,
  onChange,
}: AnimatedCheckboxProps) => {
  const [checked, setChecked] = useState(defaultChecked);
  const boxRef = useRef<HTMLDivElement>(null);
  const checkmarkRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (checkmarkRef.current) {
      gsap.set(checkmarkRef.current, {
        strokeDasharray: 24,
        strokeDashoffset: checked ? 0 : 24,
      });
    }
  }, []);

  useEffect(() => {
    if (checkmarkRef.current) {
      gsap.to(checkmarkRef.current, {
        strokeDashoffset: checked ? 0 : 24,
        duration: CHECK_ANIMATION_DURATION,
        ease: "power2.out",
      });
    }

    if (boxRef.current) {
      gsap.to(boxRef.current, {
        backgroundColor: checked ? "#4CAF50" : "#fff",
        borderColor: checked ? "#4CAF50" : "#ccc",
        duration: CHECK_ANIMATION_DURATION,
      });
    }

    if (onChange) onChange(checked);
  }, [checked]);

  const toggleCheckbox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
      }}
      onClick={toggleCheckbox}
    >
      <div
        ref={boxRef}
        style={{
          width: "24px",
          height: "24px",
          border: "2px solid #ccc",
          borderRadius: "4px",
          position: "relative",
          backgroundColor: "#fff",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        >
          <path
            ref={checkmarkRef}
            d="M6 12l4 4 8-8"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <label htmlFor={id} style={{ userSelect: "none" }}>
        {label}
      </label>
    </div>
  );
};

export default CheckCheckboxSection;
