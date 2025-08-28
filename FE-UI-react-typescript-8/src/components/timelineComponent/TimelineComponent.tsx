import { timelineData } from "../../constants/constants";
import "./timeline-style.css";

const TimelineComponent = () => {
  return (
    <section className="timeline-section">
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="timeline-icon">{item.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineComponent;
