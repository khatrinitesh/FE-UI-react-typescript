import { useHoverTransitionStore } from "../../store/hoverTransitionStore";

const TransitionHover = () => {
  const { scale, duration, color, setScale, setDuration, setColor } =
    useHoverTransitionStore();
  return (
    <div style={{ padding: 20, maxWidth: 400, margin: "0 auto" }}>
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#e5e7eb", // gray background
          margin: "auto",
          borderRadius: 10,
          transition: `all ${duration}s ease-in-out`,
        }}
        className="hover-box"
      >
        <style>
          {`
            .hover-box:hover {
              transform: scale(${scale});
              background-color: ${color};
            }
          `}
        </style>
      </div>

      <div style={{ marginTop: 20 }}>
        <label style={{ display: "block", marginBottom: 10 }}>
          Scale on hover:
          <input
            type="number"
            value={scale}
            min={1}
            max={2}
            step={0.05}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            style={{ marginLeft: 10 }}
          />
        </label>

        <label style={{ display: "block", marginBottom: 10 }}>
          Duration (seconds):
          <input
            type="number"
            value={duration}
            min={0.1}
            max={2}
            step={0.1}
            onChange={(e) => setDuration(parseFloat(e.target.value))}
            style={{ marginLeft: 10 }}
          />
        </label>

        <label style={{ display: "block", marginBottom: 10 }}>
          Hover Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ marginLeft: 10 }}
          />
        </label>
      </div>
    </div>
  );
};

export default TransitionHover;
