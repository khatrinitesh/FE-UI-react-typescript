import { useState } from "react";
import IntroMessage from "../../components/IntroMessage/IntroMessage";
import { getImage, getVideo } from "../../utils/assets";
import Button from "./../../components/UI/Button/Button";
import { ArrowDownToLine, Share2 } from "lucide-react";
import VideoPreview from "../../components/VideoPreview/VideoPreview";

const EnterDetailsPageEight = () => {
  const [isDownload, setIsDownload] = useState(false);
  const [isShare, setIsShare] = useState(false);
  return (
    <div className="enterDetailsSection  w-full h-full inline-grid gap-[20px] ">
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
        className="w-full"
      >
        <span className="text-[0.938rem] congenial-regular text-white">
          Your participation has been registered! ✅
        </span>
      </IntroMessage>
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
        className="w-full"
      >
        <span className="text-[0.938rem] congenial-regular text-white">
          Your personalized video is ready! 🎬
          <br />
          You can watch it, download it, or share it.
        </span>
      </IntroMessage>
      <div className="ms-5 md:ms-15 mx-auto w-full">
        <div className="fillForm grid gap-[5px] bg-white border border-[#6E4A8E]/10 shadow-[0_4px_16px_rgba(110,76,165,0.15)] p-5 rounded-[24px]">
          <VideoPreview src={getVideo("view.mp4")} />
          <Button
            disabled={isDownload}
            onClick={() => {
              setIsDownload(false);
            }}
            iconLeft={<ArrowDownToLine />}
            className="
      mt-1 rounded-full outline-none py-3 text-[0.938rem] congenial-medium
      border-[#eee7fa] !bg-[#eee7fa] text-[#6c4b97]
      hover:bg-[#e3ddf3]
      disabled:bg-[#f3f2f4] disabled:text-[#9ca6b6]
      disabled:border-[#eee7fa] disabled:shadow-none
      disabled:cursor-not-allowed disabled:hover:bg-[#eee7fa]
    "
          >
            Download Video
          </Button>

          <Button
            disabled={isShare}
            onClick={() => {
              setIsShare(false);
            }}
            iconLeft={<Share2 className="text-xs" />}
            className="
      mt-1 rounded-full py-3  outline-none  text-[0.938rem] congenial-medium
      border-[#eee7fa] !bg-[#eee7fa] text-[#6c4b97]
      hover:bg-[#e3ddf3]
      disabled:bg-[#f3f2f4] disabled:text-[#9ca6b6]
      disabled:border-[#eee7fa] disabled:shadow-none
      disabled:cursor-not-allowed disabled:hover:bg-[#eee7fa]
    "
          >
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnterDetailsPageEight;
