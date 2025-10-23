import { useTooltipStore } from "../../store/useTooltipStore";

const Tooltips = () => {
  return (
    <div>
      <ButtonWithTooltip />
      <TooltipsComp />
    </div>
  );
};

export default Tooltips;

const ButtonWithTooltip = () => {
  const { showTooltip, hideTooltip, moveTooltip } = useTooltipStore();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    moveTooltip(e.clientX, e.clientY);
  };

  return (
    <button
      onMouseEnter={(e) => showTooltip("Click me!", e.clientX, e.clientY)}
      onMouseMove={handleMouseMove}
      onMouseLeave={hideTooltip}
      style={{ padding: "12px 24px", fontSize: 16, cursor: "pointer" }}
    >
      Hover me
    </button>
  );
};

const TooltipsComp = () => {
  const { visible, content, x, y } = useTooltipStore();

  if (!visible) return null;

  const style: React.CSSProperties = {
    position: "fixed",
    top: y + 15,
    left: x + 15,
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: 4,
    pointerEvents: "none",
    whiteSpace: "nowrap",
    zIndex: 9999,
    fontSize: 14,
    userSelect: "none",
    transition: "opacity 0.2s ease",
  };
  return <div style={style}>{content}</div>;
};
