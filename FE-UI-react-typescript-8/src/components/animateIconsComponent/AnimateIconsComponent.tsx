import { ICON_SIZE } from "../../interface";
import { useAnimationIcons } from "../../store/useAnimationIcons/useAnimationIcons";
import "./animateicons-style.css";
import { FaSync } from "react-icons/fa";

const AnimateIconsComponent = ({ size = ICON_SIZE }) => {
  const { isIconActive, toggleIcon } = useAnimationIcons();
  return (
    <FaSync
      size={size}
      onClick={toggleIcon}
      className={`icon ${isIconActive ? "active" : ""}`}
    />
  );
};

export default AnimateIconsComponent;
