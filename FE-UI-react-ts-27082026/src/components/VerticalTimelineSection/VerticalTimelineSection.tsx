interface TimelineItem {
  title: string;
  description: string;
  badge?: string;
}

interface VerticalTimelineProps {
  items: TimelineItem[];
}

export default function VerticalTimeline({ items }: VerticalTimelineProps) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div className="timeline-item" key={`${item.title}-${index}`}>
          <div className="timeline-marker">
            <span className="timeline-dot">{index + 1}</span>
            {index !== items.length - 1 && <span className="timeline-line" />}
          </div>
          <div className="timeline-content">
            {item.badge && <span className="timeline-badge">{item.badge}</span>}
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
