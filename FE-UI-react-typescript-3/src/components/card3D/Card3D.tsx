import useCardstore from "../../logicStore/zustand/cardStore/useCardstore";
import "./card.css";

const Card3D = () => {
  const { rotateX, rotateY, setRotation, resetRotation } = useCardstore();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const { offsetX, offsetY } = e.nativeEvent;

    const x = (offsetY / height - 0.5) * 20;
    const y = (offsetX / width - 0.5) * 20;

    setRotation(x, y);
  };

  return (
    <div
      className="card-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
    >
      <div
        className="card"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        <h2>3D Card</h2>
        <p>Hover to tilt</p>
      </div>
    </div>
  );
};

export default Card3D;
