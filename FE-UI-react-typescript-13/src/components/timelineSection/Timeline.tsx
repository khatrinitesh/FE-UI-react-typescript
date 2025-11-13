import type { TimelineProps } from "../../interface";
import "./style.css";

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="timeline">
      {items.map((item) => {
        const Icon = item.icon; // ✅ use the reference
        return (
          <div key={item.id} className="timeline-item">
            <div className="timeline-marker">
              {Icon ? (
                <Icon color="#007bff" size={20} />
              ) : (
                <span className="dot" />
              )}
            </div>
            <div className="timeline-content">
              {item.date && <span className="timeline-date">{item.date}</span>}
              <h3 className="timeline-title">{item.title}</h3>
              {item.description && (
                <p className="timeline-description">{item.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
