import { Bell, Heart, LoaderCircle, Settings } from "lucide-react";

import "./AnimateIcons.css";

export const AnimateIcons = () => {
  return (
    <div className="animateIcons">
      <button className="animateIconButton">
        <Heart className="animateIconHeart" />
      </button>

      <button className="animateIconButton">
        <Bell className="animateIconBell" />
      </button>

      <button className="animateIconButton">
        <Settings className="animateIconRotate" />
      </button>

      <button className="animateIconButton">
        <LoaderCircle className="animateIconSpin" />
      </button>
    </div>
  );
};
