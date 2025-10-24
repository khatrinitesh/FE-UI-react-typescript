import { useToggleStore } from "../../store/useToggleStore";

const ToggleSwitch = () => {
  const { state, toggle } = useToggleStore();
  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <p>
        Switch is: <strong>{state}</strong>
      </p>
      <button
        onClick={toggle}
        style={{
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          backgroundColor: state === "ON" ? "limegreen" : "gray",
          color: "white",
          border: "none",
          transition: "0.3s",
        }}
      >
        {state === "ON" ? "TURN OFF" : "TURN ON"}
      </button>
    </div>
  );
};

export default ToggleSwitch;
