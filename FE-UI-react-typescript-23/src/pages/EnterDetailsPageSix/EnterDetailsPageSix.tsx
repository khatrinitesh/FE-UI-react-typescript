import { PencilLine, SquarePen } from "lucide-react";
import IntroMessage from "../../components/IntroMessage/IntroMessage";
import Button from "../../components/UI/Button/Button";
import { getImage } from "../../utils/assets";

const EnterDetailsPageSix = () => {
  return (
    <div className="enterDetailsSection  w-full h-full ">
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
      >
        <span className="text-[0.938rem] congenial-regular text-white">
          Here's your personalized song 🎵 You can generate up to 3 versions.
          Choose the one you prefer.
        </span>
      </IntroMessage>
      <div className="ms-5 md:ms-15 max-w-w-[88%] mx-auto">
        <div className="fillForm grid gap-[5px] bg-white border border-[#6E4A8E]/10 shadow-[0_4px_16px_rgba(110,76,165,0.15)] p-5  rounded-[24px] ">
          <Button
            onClick={() => {
              console.log("clicked");
            }}
            iconLeft={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
                <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
              </svg>
            }
            className="
          mt-1
          border-[#eee7fa]
          !bg-[#eee7fa]
          text-[#6c4b97]
          rounded-full text-[0.938rem] congenial-medium  py-3
        "
          >
            Generate another version
          </Button>
          <Button
            onClick={() => {
              console.log("clicked");
            }}
            iconLeft={<SquarePen className="text-xs" />}
            className="
          mt-1
          border-[#eee7fa]
          !bg-[#eee7fa]
          text-[#6c4b97]
          rounded-full text-[0.938rem] congenial-medium  py-3
        "
          >
            Edit my instructions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnterDetailsPageSix;
