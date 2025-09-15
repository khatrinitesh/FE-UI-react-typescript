import type { TimelineItem } from "../../../../interface";
import styles from "./styles/Timeline.module.css";

interface Props {
  item: TimelineItem;
  align: "left" | "right";
}

const TimelineItem = ({ item, align }: Props) => {
  return (
    <div className={`${styles.item} ${styles[align]}`}>
      <div className={styles["year"]}>{item.year}</div>
      <div>{item.description}</div>
      <div className={styles["date-time"]}>
        {item.date} <br /> {item.time}
      </div>
    </div>
  );
};

export default TimelineItem;
