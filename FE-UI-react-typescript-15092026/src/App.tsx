import Accordion from "./components/Accordion/Accordion";
import Alerts from "./components/Alerts/Alerts";
import ArrowAnimation from "./components/ArrowAnimation/ArrowAnimation";
import AuroraBackground from "./components/AuroraBackground/AuroraBackground";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import AvatarImages from "./components/AvatarImages/AvatarImages";
import BentoGrid from "./components/BentoGrid/BentoGrid";
import BorderFrame from "./components/BorderFrame/BorderFrame";
import BulletList from "./components/BulletList/BulletList";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Calculator from "./components/Calculator/Calculator";
import Calendar from "./components/Calendar/Calendar";
import Callout from "./components/Callout/Callout";
import CanvasReveal from "./components/CanvasReveal/CanvasReveal";
import CarRunning from "./components/CarRunning/CarRunning";
import ThreeDCard from "./components/ThreeDCard/ThreeDCard";

function App() {
  return (
    <>
      <CarRunning />
      <CanvasReveal />
      <Callout />
      <Calendar />
      <Calculator />
      <ButtonGroup />
      <BulletList />
      <BorderFrame />
      <BentoGrid />
      <AvatarImages />
      <Autocomplete />
      <AuroraBackground />
      <ArrowAnimation />
      <Alerts />
      <Accordion />
      <ThreeDCard
        title="Sample Title"
        description="Sample description for the three-dimensional card."
        image="https://via.placeholder.com/350"
        category="Sample Category"
      />
    </>
  );
}

export default App;
