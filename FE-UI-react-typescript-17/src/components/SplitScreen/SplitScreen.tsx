import { useEffect, useRef } from "react";
import { useSplitStore } from "../../store/splitStore";
import { MAX_PANEL_WIDTH, MIN_PANEL_WIDTH } from "./constants";

const SplitScreen = () => {
  const { leftWidth, setLeftWidth, setDragging, isDragging } = useSplitStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setDragging(true);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newLeftWidth = ((e.clientX - rect.left) / rect.width) * 100;

    if (newLeftWidth > MIN_PANEL_WIDTH && newLeftWidth < MAX_PANEL_WIDTH) {
      setLeftWidth(newLeftWidth);
    }
  };

  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });
  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        userSelect: isDragging ? "none" : "auto",
      }}
    >
      <div
        style={{
          width: `${leftWidth}%`,
          background: "#f0f0f0",
          padding: "1rem",
        }}
      >
        <h2>Left Panel</h2>
      </div>

      <div
        onMouseDown={handleMouseDown}
        style={{
          width: "5px",
          cursor: "col-resize",
          background: "#999",
        }}
      />

      <div
        style={{
          flex: 1,
          background: "#ddd",
          padding: "1rem",
        }}
      >
        <h2>Right Panel</h2>
      </div>
    </div>
  );
};

export default SplitScreen;
