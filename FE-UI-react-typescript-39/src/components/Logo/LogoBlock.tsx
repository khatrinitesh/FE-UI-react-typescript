import { useNavigate } from "react-router";
import type { LogoProps } from "../../interface";
import { getImage } from "../../utils/assets";

const LogoBlock = ({ variant = "default" }: LogoProps) => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };
  const src =
    variant === "home" ? getImage("logo.jpg") : getImage("logo-2.png");

  return (
    <div className="logoBlock text-xl font-bold cursor-pointer">
      {/* {variant === "home" ? "LOGO 1" : "LOGO 2"} */}
      <img
        src={src}
        alt=""
        className="max-w-full aspect-square w-20"
        onClick={handleBackHome}
      />
    </div>
  );
};

export default LogoBlock;
