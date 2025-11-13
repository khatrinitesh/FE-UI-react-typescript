import type { AnimatedIconProps } from "../../../interface";
import { useIconStore } from "../../../store/iconStore";
import "./AnimatedIcon.css";

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ item }) => {
  const { activeId, setActive } = useIconStore();
  const isActive = activeId === item.id;
  const IconComp = item.icon;

  return (
    <div
      className={`icon-wrapper ${isActive ? "active" : ""}`}
      onClick={() => setActive(item.id)}
      title={item.name}
    >
      <span className="icon">
        <IconComp className="icon-svg" /> {/* render component type */}
      </span>
      <span className="icon-label">{item.name}</span>
    </div>
  );
};

export default AnimatedIcon;
