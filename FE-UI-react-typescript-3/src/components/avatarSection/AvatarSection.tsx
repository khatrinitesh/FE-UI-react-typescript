import { AVATAR_IMAGES } from "../../constants/constants";
import type { AvatarProps } from "../../interface";

const AvatarSection: React.FC<AvatarProps> = ({
  src = AVATAR_IMAGES.default,
  alt = "User Avatar",
  size = 48,
}) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
    </>
  );
};

export default AvatarSection;
