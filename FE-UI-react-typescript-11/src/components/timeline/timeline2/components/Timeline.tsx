import { useTimelineStore } from "../../../../logic-store-state-management/useTimelineStore/useTimelineStore";
import styles from "./styles/Timeline.module.css";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const { items } = useTimelineStore();
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          align={index % 2 === 0 ? "right" : "left"}
        />
      ))}
    </div>
  );
};

export default Timeline;
