import type { ZoomImageProps } from "../../interface";
import { ZOOM_IMAGE_DEFAULTS } from "./components/zoomHoverData";
import "./components/zoom-hover-style.css";

const ZoomHoverComponent = () => {
  return (
    <>
      <ZoomImage
        src="https://picsum.photos/id/1025/400/300"
        scale={1.3}
        width={400}
        transitionDuration="0.4s"
      />
    </>
  );
};

export default ZoomHoverComponent;

const ZoomImage: React.FC<ZoomImageProps> = ({
  src,
  alt = "Zoomable image",
  width = "100%",
  height = "auto",
  scale = ZOOM_IMAGE_DEFAULTS.SCALE,
  transitionDuration = ZOOM_IMAGE_DEFAULTS.TRANSITION_DURATION,
  className,
  style,
}) => {
  const inlineStyle: React.CSSProperties = {
    width,
    height,
    transition: `transform ${transitionDuration} ease`,
    ...style,
  };

  return (
    <div
      className={`zoom-image-wrapper ${className || ""}`}
      style={{ overflow: "hidden", display: "inline-block" }}
    >
      <img
        src={src}
        alt={alt}
        className="zoom-image"
        style={inlineStyle}
        data-zoom-scale={scale}
      />
    </div>
  );
};
