import { getImage } from "../../utils/assets";

const LandscapeScreen = () => {
  return (
    <div className="landscapeWrapper fixed inset-0 w-full h-full  text-center z-[999] flex items-center justify-center bg-[#6e4ca5]">
      <div className="box w-full gap-1 flex flex-col absolute inset-0  items-center justify-center">
        <div className="logo1  items-center justify-center flex">
          <img
            src={getImage("milka-logo-header.png")}
            alt="Cal Scan"
            title="Cal Scan"
            className="max-w-full w-40 h-40"
          />
        </div>
        <h2 className="text-[32px] text-white font-din text-center tracking-ls2">
          Best Viewed in Portrait Mode
        </h2>
      </div>
    </div>
  );
};

export default LandscapeScreen;
