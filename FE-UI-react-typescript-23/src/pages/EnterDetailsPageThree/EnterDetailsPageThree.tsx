import { useState } from "react";
import IntroMessage from "../../components/IntroMessage/IntroMessage";
import OtpSection from "../../components/OtpSection/OtpSection";
import { getImage } from "../../utils/assets";

const EnterDetailsPageThree = () => {
  const [, setCode] = useState("");
  return (
    <div className="enterDetailsSection w-full h-full inline-grid gap-[20px]">
      <IntroMessage
        name="Matt Pokora"
        avatarSrc={getImage("avatar-profile.avif")}
        className="w-[90%]"
      >
        <span className="text-[0.938rem] congenial-regular text-white">
          I just sent you a code to your email address 📩, enter it here to
          continue.
        </span>
      </IntroMessage>
      <div className="ms-5 md:ms-10">
        <OtpSection
          length={6}
          onChange={(value) => setCode(value)}
          onComplete={(value) => {
            console.log("OTP complete:", value);
            // submit / verify here
          }}
          onResend={() => {
            console.log("Resend clicked");
          }}
        />
      </div>
    </div>
  );
};

export default EnterDetailsPageThree;
