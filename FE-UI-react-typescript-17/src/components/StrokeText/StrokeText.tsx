import type { StrokeTextProps } from "../../interface";

const StrokeText = () => {
  return (
    <StrokeTextComp
      text="hello world"
      strokeColor="#ff6347"
      fillColor="white"
    />
  );
};

export default StrokeText;

const StrokeTextComp: React.FC<StrokeTextProps> = ({
  text,
  strokeColor = "#1e90ff",
  fillColor = "transparent",
  fontSize = "48px",
}) => {
  return (
    <h1
      style={{
        fontSize,
        color: fillColor,
        WebkitTextStroke: `2px ${strokeColor}`,
        fontWeight: "bold",
        textAlign: "center",
        margin: "1rem 0",
      }}
    >
      {text}
    </h1>
  );
};
