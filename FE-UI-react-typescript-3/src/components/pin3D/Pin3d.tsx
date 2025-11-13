import usePinStore from "../../logicStore/zustand/usePinStore/usePinStore";
import "./style.css";

const Pin3d = () => {
  const { rotateX, rotateY, setRotation, resetRotation } = usePinStore();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateYVal = (x / width - 0.5) * 30; // left-right
    const rotateXVal = -(y / height - 0.5) * 30; // up-down

    setRotation(rotateXVal, rotateYVal);
  };
  return (
    <div
      className="pin-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
    >
      <div
        className="pin"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        📍
      </div>
    </div>
  );
};

export default Pin3d;
