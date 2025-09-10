import type { AvatarProps } from "../../interface";
import "./components/avatar-style.css";
import { AVATAR_SIZES, DEFAULT_AVATAR } from "./components/avatarImgData";
import { clsx } from "clsx";

const AvatarImgComponent = () => {
  return (
    <>
      <Avatar src="https://i.pravatar.cc/150?img=3" size="SMALL" />
      <Avatar src="https://i.pravatar.cc/150?img=10" size="MEDIUM" />
      <Avatar size="LARGE" />
      <Avatar size="XLARGE" rounded={false} />
    </>
  );
};

export default AvatarImgComponent;

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User avatar",
  size = "MEDIUM",
  className,
  onClick,
  rounded = true,
}) => {
  const dimension = AVATAR_SIZES[size];

  return (
    <img
      src={src || DEFAULT_AVATAR}
      alt={alt}
      width={dimension}
      height={dimension}
      onClick={onClick}
      className={clsx("avatar", className, {
        rounded,
      })}
      style={{
        width: dimension,
        height: dimension,
        cursor: onClick ? "pointer" : "default",
      }}
      loading="lazy"
    />
  );
};
