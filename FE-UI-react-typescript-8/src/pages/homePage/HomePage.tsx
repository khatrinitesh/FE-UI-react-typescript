import AccordionComponent from "../../components/accordionComponent/AccordionComponent";
import AlertsComponent from "../../components/alertsComponent/AlertsComponent";
import AnimatedSearchComponent from "../../components/animatedSearchComponent/AnimatedSearchComponent";
import AnimateIconsComponent from "../../components/animateIconsComponent/AnimateIconsComponent";
import AutoCompleteComponent from "../../components/autocompleteComponent/AutoCompleteComponent";
import ThreeCardComponent from "../../components/threeCardComponent/ThreeCardComponent";
import TimelineComponent from "../../components/timelineComponent/TimelineComponent";
import AccordionShadcn from "../../components/ui-shadcn/accordionShadcn/AccordionShadcn";
import { cards } from "../../constants/constants";

const HomePage = () => {
  return (
    <div className="homePage spacingContent">
      <div className="container mx-auto">
        HomePage
        <AccordionShadcn />
        <AnimatedSearchComponent />
        <AnimateIconsComponent />
        <AlertsComponent />
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
