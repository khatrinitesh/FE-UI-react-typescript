import { ICONS } from "../../constants/constants";

const AnimateIcons = () => {
  return (
    <div className="flex gap-4">
      {ICONS.map((item) => {
        const IconComponent = item.icon;
        return (
          <div key={item.id}>
            <IconComponent />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AnimateIcons;
