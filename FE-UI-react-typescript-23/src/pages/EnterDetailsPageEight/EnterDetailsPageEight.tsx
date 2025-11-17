import { useState } from "react";
import IntroMessage from "../../components/IntroMessage/IntroMessage";
import { getImage, getVideo } from "../../utils/assets";
import Button from "./../../components/UI/Button/Button";
import { ArrowDownToLine, Share2 } from "lucide-react";
import VideoPreview from "../../components/VideoPreview/VideoPreview";

const EnterDetailsPageEight = () => {
  const [isDownload, setIsDownload] = useState(false);
  const [isShare, setIsShare] = useState(false);

  const videoSrc = getVideo("view.mp4");

  const handleDownload = () => {
    try {
      setIsDownload(true);

      // Create a temporary <a> element
      const link = document.createElement("a");
      link.href = videoSrc;
      link.download = "video.mp4"; // the filename user will see
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      // re-enable button
      setIsDownload(false);
    }
  };

  const handleShare = async () => {
    try {
      setIsShare(true);

      if (navigator.share) {
        await navigator.share({
          title: "My personalized video",
          text: "Check out my personalized video!",
          url: videoSrc,
        });
      } else {
        // fallback – copy link, show toast, etc.
        await navigator.clipboard.writeText(videoSrc);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsShare(false);
    }
  };

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
          <VideoPreview src={videoSrc} />

          <Button
            disabled={isDownload}
            onClick={handleDownload}
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
            {isDownload ? "Downloading..." : "Download Video"}
          </Button>

          <Button
            disabled={isShare}
            onClick={handleShare}
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
            {isShare ? "Sharing..." : "Share"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnterDetailsPageEight;
