import { timelineData } from "./data";
import Timeline from "./Timeline";

const TimelineSection = () => {
  return (
    <>
      <Timeline items={timelineData} />
    </>
  );
};

export default TimelineSection;
