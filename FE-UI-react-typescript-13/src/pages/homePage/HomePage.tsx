import { FaDownload } from "react-icons/fa";
import ButtonSection from "../../components/buttonSection/ButtonSection";
import { useState } from "react";
import SliderSection from "../../components/sliderSection/SliderSection";
import { SWIPER_DATA } from "../../components/sliderSection/data";
import TimelineSection from "../../components/timelineSection/TimelineSection";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const handleClickEnable = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Submitted!");
    }, 500);
  };
  return (
    <div className="homePage spacingContent">
      <div className="container mx-auto">
        <div className="innerContent">
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
