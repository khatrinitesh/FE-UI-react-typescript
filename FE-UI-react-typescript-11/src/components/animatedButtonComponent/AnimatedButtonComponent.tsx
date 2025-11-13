import { useUIAnimationStore } from "../../logic-store-state-management/useUIAnimationStore/useUIAnimationStore";
import "./animated-button.css";

const AnimatedButtonComponent = () => {
  const { isVisible, toggleVisibility } = useUIAnimationStore();
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Box
      </button>

      <div className={`box ${isVisible ? "fade-in" : "fade-out"}`}>
        {isVisible && <p>This box is {isVisible ? "visible" : "hidden"}</p>}
      </div>
    </div>
  );
};

export default AnimatedButtonComponent;
