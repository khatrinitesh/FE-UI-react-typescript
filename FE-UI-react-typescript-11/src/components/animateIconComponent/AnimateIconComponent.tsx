import { FaSpinner } from "react-icons/fa";
import { useIconStore } from "../../logic-store-state-management/useIconStore/useIconStore";

const AnimateIconComponent = () => {
  const { isAnimating, toggleAnimation } = useIconStore();
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <button onClick={toggleAnimation} style={{ marginBottom: "1rem" }}>
        {isAnimating ? "Stop Animation" : "Start Animation"}
      </button>

      <div>
        <FaSpinner
          className={isAnimating ? "spin" : ""}
          size={60}
          color="#007bff"
        />
      </div>
    </div>
  );
};

export default AnimateIconComponent;
