import { AnimationSection } from "./AnimationSection";
import { Button } from "./Button";
import { Card } from "./Card";
import { List } from "./List";
import { ListVariants } from "./ListVariants";
import { Section } from "./Section";

export default function FramerMotionSection() {
  return (
    <div>
        <Card/>
        <Button/>
        <List/>
        <ListVariants/>
        <Section/>
        <AnimationSection/>
    </div>
  )
}
