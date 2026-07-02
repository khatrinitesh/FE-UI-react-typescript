import type { AccordionItem } from "./Accordion"
import Accordion from "./Accordion"

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "What is React TypeScript?",
    description:
      "React TypeScript is a combination of React and TypeScript. It gives type safety, better autocomplete, and helps catch errors while developing.",
  },
  {
    id: 2,
    title: "What is TailwindCSS?",
    description:
      "TailwindCSS is a utility-first CSS framework. It helps you design UI quickly using predefined utility classes directly in your JSX.",
  },
  {
    id: 3,
    title: "What is Framer Motion?",
    description:
      "Framer Motion is an animation library for React. It is used to create smooth transitions, hover effects, page animations, and accordion animations.",
  },
]

export default function AccordionSection() {
  return (
    <>
     <Accordion items={accordionItems} /></>
  )
}
