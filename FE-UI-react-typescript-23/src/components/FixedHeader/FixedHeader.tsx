import { getImage } from "../../utils/assets";
import Progressbar from "../UI/Progressbar/Progressbar";
import { useEffect, useState } from "react";

const FixedHeader = () => {
  const [progress, setProgress] = useState(0);

  // demo: fake loading
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 5));
    }, 400);
    return () => clearInterval(id);
  }, []);
  return (
    <header className="z-[99] fixed top-0 left-0 w-full bg-[#6c4b97] shadow-[0_25px_50px_-12px_var(--tw-shadow-color,#00000040)]">
      <div className="innerHeader flex gap-[10px] px-[1rem]">
        <div className="logoBlock">
          <img
            src={getImage("milka-logo-header.png")}
            alt=""
            className="w-22 h-22 mx-auto"
          />
        </div>
        <Progressbar value={progress} />
      </div>
    </header>
  );
};

export default FixedHeader;
