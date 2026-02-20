import "./App.css";
import AccordionComponent from "./components/accordionComponent/AccordionComponent";
import Alerts from "./components/alerts/Alerts";
import AnimatedButton from "./components/animatedButton/AnimatedButton";
import AnimatedIcon from "./components/animatedIcon/AnimatedIcon";
import AnimatedSearch from "./components/animatedSearch/AnimatedSearch";
import LearnTypescript from "./components/learnTypescript/LearnTypescript";
import ThreeDCard from "./components/threeDCard/ThreeDCard";

function App() {
  return (
    <>
      <LearnTypescript />
      {/* <AnimatedArrow id="arrow-1" />
      <AnimatedArrow id="arrow-2" /> */}
      <AnimatedSearch
        id="search-1"
        placeholder="Search..."
        onSearch={(value) => console.log("Searching:", value)}
      />
      <AnimatedButton
        id="save-btn"
        onClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }}
      >
        Save Changes
      </AnimatedButton>

      <AnimatedButton id="secondary-btn" variant="secondary">
        Cancel
      </AnimatedButton>
      <AnimatedIcon id="icon-1" />
      <AnimatedIcon id="icon-2" />
      <Alerts />
      <ThreeDCard
        id="card-1"
        title="3D Motion Card"
        description="Smooth tilt + scale using Framer Motion & Zustand"
      />
      <AccordionComponent />
    </>
  );
}

export default App;
