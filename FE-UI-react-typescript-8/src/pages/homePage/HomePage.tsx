import AccordionComponent from "../../components/accordionComponent/AccordionComponent";
import AutoCompleteComponent from "../../components/autocompleteComponent/AutoCompleteComponent";
import ThreeCardComponent from "../../components/threeCardComponent/ThreeCardComponent";
import TimelineComponent from "../../components/timelineComponent/TimelineComponent";
import { cards } from "../../constants/constants";

const HomePage = () => {
  return (
    <div className="homePage spacingContent">
      <div className="container mx-auto">
        HomePage
        <AutoCompleteComponent />
        <AccordionComponent />
        <section
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {cards.map((card, i) => (
            <ThreeCardComponent data={card} key={i} />
          ))}
        </section>
        <TimelineComponent />
      </div>
    </div>
  );
};

export default HomePage;
