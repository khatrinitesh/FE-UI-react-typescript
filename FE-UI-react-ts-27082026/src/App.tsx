import Accordion from "./components/AccordionSection/AccordionSection";
import CardSection from "./components/CardSection/CardSection";
import ThreeDCard from "./components/ThreeDCardSection/ThreeDCardSection";
import VerticalTimeline from "./components/VerticalTimelineSection/VerticalTimelineSection";
import { accordionItems } from "./data/dataAccordion";
import { timelineItems } from "./data/dataVerticalTimeline";

function App() {
  return (
    <>
      <main className="main-page">
        <div className="main-container">
          <div className="component-list">
            <Accordion items={accordionItems} />

            <ThreeDCard badge="Featured" title="3D Card Effect" description="Interactive card with perspective tilt effect on mouse movement." image="https://images.unsplash.com/photo-1562979314-bee7453e911c?auto=format&fit=crop&w=1200&q=80" />

            <VerticalTimeline items={timelineItems} />

            <CardSection />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
