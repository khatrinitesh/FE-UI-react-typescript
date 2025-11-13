import { useRef, useState } from "react";
import { COLOR_OPTIONS } from "./components/data";
import gsap from "gsap";
import type { ColorOption } from "../../interface";

const DropdownBgColorChanger = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedColor, setSelectedColor] = useState<string>(
    COLOR_OPTIONS[0].value
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        backgroundColor: newColor,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };
  return (
    <div
      ref={containerRef}
      style={{
        height: "300px",
        borderRadius: "12px",
        padding: "20px",
        transition: "background-color 0.3s ease",
        backgroundColor: selectedColor,
      }}
    >
      <label
        htmlFor="color-select"
        style={{ fontSize: "16px", fontWeight: "bold" }}
      >
        Select Background Color:
      </label>
      <br />
      <select
        id="color-select"
        onChange={handleChange}
        value={selectedColor}
        style={{ marginTop: "10px", padding: "8px", fontSize: "16px" }}
      >
        {COLOR_OPTIONS.map((option: ColorOption) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownBgColorChanger;
