import { useSpeedStore } from "../../store/speedStore";
import { SPEED_CONSTANTS } from "./constants";

const SpeedMeter = () => {
  const { speed, increaseSpeed, decreaseSpeed } = useSpeedStore();

  // Compute angle or fill for gauge
  const percentage = (speed / SPEED_CONSTANTS.MAX_SPEED) * 100;
  return (
    <div
      style={{
        textAlign: "center",
        width: "300px",
        margin: "2rem auto",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `conic-gradient(#4caf50 ${
            percentage * 3.6
          }deg, #ccc 0deg)`,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        }}
      >
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {speed} km/h
        </span>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => decreaseSpeed()} style={buttonStyle}>
          -
        </button>
        <button onClick={() => increaseSpeed()} style={buttonStyle}>
          +
        </button>
      </div>
    </div>
  );
};

export default SpeedMeter;

const buttonStyle: React.CSSProperties = {
  margin: "0 0.5rem",
  padding: "0.5rem 1rem",
  fontSize: "1.2rem",
  cursor: "pointer",
};
