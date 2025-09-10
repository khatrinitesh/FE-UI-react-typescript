import type { GrayScaleImgProps } from "../../interface";
import { DEFAULT_BW_FILTER } from "./components/blackWhiteImgData";

const BlackWhiteImgComponent = () => {
  return <BlackAndWhiteImage src="https://picsum.photos/id/237/400/300" />;
};

export default BlackWhiteImgComponent;

const BlackAndWhiteImage: React.FC<GrayScaleImgProps> = ({
  src,
  alt = "black and white image",
  width = 300,
  height = "auto",
  blackAndWhite = true,
  className,
}) => {
  const filterStyle = blackAndWhite ? DEFAULT_BW_FILTER : "none";

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ filter: filterStyle }}
      className={className}
      loading="lazy"
    />
  );
};
