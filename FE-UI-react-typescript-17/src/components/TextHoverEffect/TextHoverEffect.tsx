import type { TextHoverEffectProps } from "../../interface";

const TextHoverEffect = ({
  text,
  fontSize = "2rem",
  color = "#333",
  hoverColor = "#ff4081",
  transitionDuration = "0.3s",
  className,
}: TextHoverEffectProps) => {
  return (
    <span
      className={className}
      style={{
        fontSize,
        color,
        cursor: "pointer",
        transition: `color ${transitionDuration}, transform ${transitionDuration}`,
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.color = hoverColor;
        target.style.transform = "scale(1.2)";
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.color = color;
        target.style.transform = "scale(1)";
      }}
    >
      {text}
    </span>
  );
};

export default TextHoverEffect;
