import FinalizingVideoCard from "../../components/FinalizingVideoCard/FinalizingVideoCard";
import IntroMessage from "../../components/IntroMessage/IntroMessage";
import { getImage } from "../../utils/assets";

const EnterDetailsPageSix = () => {
  return (
    <div className="enterDetailsSection  w-full h-full inline-grid gap-[20px] ">
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
      ></IntroMessage>
      <FinalizingVideoCard />
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
        className="w-full"
      >
        <span className="text-[0.938rem] congenial-regular text-white">
          You can leave the page during generation, or participate in the
          contest to try to meet me 😎🎤
        </span>
      </IntroMessage>
    </div>
  );
};

export default EnterDetailsPageSix;
