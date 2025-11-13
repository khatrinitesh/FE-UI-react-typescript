import { FaDownload } from "react-icons/fa";
import ButtonSection from "../../components/buttonSection/ButtonSection";
import { useState } from "react";
import SliderSection from "../../components/sliderSection/SliderSection";
import { SWIPER_DATA } from "../../components/sliderSection/data";
import TimelineSection from "../../components/timelineSection/TimelineSection";
import CarRunningSection from "../../components/carRunningSection/CarRunningSection";
import CardHoverEffectSection from "../../components/cardHoverEffectSection/CardHoverEffectSection";
import CardSpotLightSection from "../../components/cardSpotLightSection/CardSpotLightSection";
import CardStackSection from "../../components/cardStackSection/CardStackSection";
import { mockCards } from "../../components/cardStackSection/components/data";
import DropdownBgColorChanger from "../../components/dropdownBgColorChanger/DropdownbgColorChanger";
import ChangeBgScrollSection from "../../components/changeBgScrollSection/ChangeBgScrollSection";
import CharacterCounterSection from "../../components/characterCounterSection/CharacterCounterSection";
import ChatMessageSection from "../../components/chatMessageSection/ChatMessageSection";
import CheckCheckboxSection from "../../components/checkCheckboxSection/CheckCheckboxSection";
import CheckoutFormSection from "../../components/checkoutFormSection/CheckoutFormSection";
import CircleMenuMobileSection from "../../components/circleMenuMobileSection/CircleMenuMobileSection";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const handleClickEnable = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Submitted!");
    }, 500);
  };

  const handleCheckboxChange = (checked: boolean) => {
    console.log("Checkbox is now:", checked);
  };
  let name: string = "test";
  let age: number = 35;

  let result1: string[] = ["happy", "sad", "understand", "misunderstand"].join(
    ", "
  );
  let result2: Array<string> = ["moment", "wonderful"].join(", ");

  let result3: [string, number] = ["test", 123];

  type User = {
    fname: string;
    lname: string;
    age: number;
    dob?: string;
  };

  let user: User = {
    fname: "nitesh",
    lname: "khatri",
    age: 35,
    dob: "17-06-1989",
  };

  function greet(name: string): string {
    return `hello ${name}`;
  }

  let input: string | number = "test0";

  return (
    <div className="homePage spacingContent">
      <div className="container mx-auto">
        <div className="innerContent">
          {user}
          <br />
          {result3}
          <br />
          {name} - {age}
          <br />
          {result1} - {result2}
          <CircleMenuMobileSection />
          <CheckoutFormSection />
          <CheckCheckboxSection
            id="agree"
            label="I agree to the terms"
            defaultChecked={false}
            onChange={handleCheckboxChange}
          />
          <ChatMessageSection />
          <CharacterCounterSection />
          <ChangeBgScrollSection />
          <DropdownBgColorChanger />
          <CardStackSection cards={mockCards} />
          <CardSpotLightSection
            title="Interactive Spotlight Card"
            description="Move your cursor over the card to see the light follow it."
            backgroundColor="#f7f7f7"
          />
          <CardHoverEffectSection
            title="Modern UI Card"
            description="This is a beautiful card with GSAP hover effect."
            imageUrl="https://via.placeholder.com/300x100"
          />
          <CardHoverEffectSection
            title="Second Card"
            description="You can reuse this card component anywhere."
          />
          <CarRunningSection color="blue" speed={5} />
          <TimelineSection />
          <SliderSection slides={SWIPER_DATA} />
          <ButtonSection
            text="Download"
            icon={<FaDownload />}
            iconPosition="left"
            onClick={() => alert("Downloading...")}
          />
          {/* Button 2: Dynamic loading state */}
          <ButtonSection
            text="Submit"
            isLoading={loading}
            iconPosition="right"
            className="ml-4"
            onClick={handleClickEnable}
          />
          <ButtonSection
            text="Download"
            isDisabled={true}
            icon={<FaDownload />}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
