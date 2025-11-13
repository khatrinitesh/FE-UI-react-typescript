import { useVerticalLineStore } from "../../store/verticalLineStore";

const VerticalLine = () => {
  const { color, height, thickness, visible } = useVerticalLineStore();

  if (!visible) return null;

  return (
    <div
      style={{
        width: thickness,
        height,
        backgroundColor: color,
        margin: "0 auto",
      }}
      aria-label="Vertical decorative line"
    />
  );
};

export default VerticalLine;
