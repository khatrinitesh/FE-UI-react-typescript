import type { LogoProps } from "../../interface";
import { getImage } from "../../utils/assets";

const LogoBlock = ({ variant = "default" }: LogoProps) => {
  const src =
    variant === "home" ? getImage("logo.jpg") : getImage("logo-2.png");

  return (
    <div className="text-xl font-bold">
      {/* {variant === "home" ? "LOGO 1" : "LOGO 2"} */}
      <img src={src} alt="" className="max-w-full aspect-square w-20" />
    </div>
  );
};

export default LogoBlock;
