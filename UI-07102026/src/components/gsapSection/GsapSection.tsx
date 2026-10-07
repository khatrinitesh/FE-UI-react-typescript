import { CardList } from "./CardList";
import { GsapDemo } from "./GsapDemo";
import { MoveBox } from "./MoveBox";
import { ScrollDemo } from "./ScrollDemo";
import { TimelineDemo } from "./TimelineDemo";

export default function GsapSection() {
  return (
    <div>
        <GsapDemo/>
        <MoveBox/>
        <CardList/>
        <TimelineDemo/>
        <ScrollDemo/>
    </div>
  )
}
