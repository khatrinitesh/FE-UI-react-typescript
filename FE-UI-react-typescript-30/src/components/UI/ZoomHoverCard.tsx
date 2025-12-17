import { ZOOM_DURATION, ZOOM_SCALE } from "../../constants/constants";
import type { ZoomHoverProps } from "../../interface/auth";
import { useZoomHoverStore } from "../../store/useZoomHoverStore";

const ZoomHoverCard = ({ id, title, image }: ZoomHoverProps) => {
  const { hoveredId, setHoveredId } = useZoomHoverStore();
  const isHovered = hoveredId === id;
  return (
    <div
      onMouseEnter={() => setHoveredId(id)}
      onMouseLeave={() => setHoveredId(null)}
      className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        style={{
          transform: `scale(${isHovered ? ZOOM_SCALE : 1})`,
          transition: `transform ${ZOOM_DURATION}ms ease`,
        }}
        className="w-full h-48 object-cover"
      />
      <div className="p-3 bg-red-500 text-center font-medium">{title}</div>
    </div>
  );
};

export default ZoomHoverCard;
