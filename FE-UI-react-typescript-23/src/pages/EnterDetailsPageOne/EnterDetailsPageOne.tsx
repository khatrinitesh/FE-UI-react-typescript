import IntroMessage from "../../components/IntroMessage/IntroMessage";
import ProfileStatusCard from "../../components/ProfileStatusCard/ProfileStatusCard";
import { getImage } from "../../utils/assets";

const EnterDetailsPageOne = () => {
  return (
    <div className="enterDetailsSection w-full h-full ">
      <ProfileStatusCard
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
      />

      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
      >
        <span className="text-base congenial-regular text-white">
          Before personalizing your song, I need some info 🎵 Don&apos;t worry,
          it takes less than two minutes 😄
        </span>
      </IntroMessage>
    </div>
  );
};

export default EnterDetailsPageOne;
