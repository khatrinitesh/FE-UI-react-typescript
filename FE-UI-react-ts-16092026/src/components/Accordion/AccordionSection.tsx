import { Accordion, type AccordionItem } from "./Accordion";

export const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "What services do you provide?",
    description: "I design and develop websites, applications and digital experiences with a focus on usability, performance and modern technology.",
  },
  {
    id: 2,
    title: "What technologies do you work with?",
    description: "I work with React, TypeScript, Node.js, Express, PostgreSQL, Supabase, AWS and modern frontend development tools.",
  },
  {
    id: 3,
    title: "Do you work on AI-powered products?",
    description: "Yes. I build AI-powered applications and experiences involving generative AI, image generation, automation and intelligent workflows.",
  },
  {
    id: 4,
    title: "Can you handle complete product development?",
    description: "Yes. I can work across frontend development, backend APIs, databases, deployment, integrations and product implementation.",
  },
];

export default function AccordionSection() {
  return (
    <>
      <Accordion data={accordionData} />
    </>
  );
}
