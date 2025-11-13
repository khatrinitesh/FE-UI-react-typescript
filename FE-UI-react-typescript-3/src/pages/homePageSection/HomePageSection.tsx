import AccordionSection from "../../components/accordionSection/AccordionSection";
import AnimatedArrow from "../../components/AnimatedArrow/AnimatedArrow";
import AnimatedIcon from "../../components/AnimatedIcon/AnimatedIcon";
import AnimatedSearchIcon from "../../components/AnimatedSearchIcon/AnimatedSearchIcon";
import Animation from "../../components/Animation/Animation";
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import AvatarSection from "../../components/avatarSection/AvatarSection";
import ButtonLoadingSpinner from "../../components/buttonLoadingSpinner/ButtonLoadingSpinner";
import Card3D from "../../components/card3D/Card3D";
import Pin3d from "../../components/pin3D/Pin3d";

const HomePageSection = () => {
  return (
    <div className="innerContent">
      <div className="container mx-auto">
        Home
        <br />
        <AvatarSection src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" />
        <Autocomplete />
        <AnimatedArrow direction="right" />
        <AnimatedArrow direction="top" />
        <AnimatedArrow direction="bottom" />
        <AnimatedArrow direction="left" />
        <Animation />
        <AnimatedSearchIcon />
        <AnimatedIcon />
        <ButtonLoadingSpinner />
        <AccordionSection />
        <Card3D />
        <Pin3d />
      </div>
    </div>
  );
};

export default HomePageSection;
