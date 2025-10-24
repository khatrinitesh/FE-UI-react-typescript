import { useVisibilityStore } from "../../store/useVisibilityStore";

const ToggleShowHide = () => {
  const { state, toggleVisibility } = useVisibilityStore();
  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <button
        onClick={toggleVisibility}
        style={{
          padding: "10px 20px",
          borderRadius: "6px",
          backgroundColor: state === "SHOW" ? "#2196f3" : "#888",
          color: "white",
          border: "none",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        {state === "SHOW" ? "HIDE" : "SHOW"}
      </button>

      {state === "SHOW" && (
        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          🎉 This content is visible!
        </div>
      )}
    </div>
  );
};

export default ToggleShowHide;
