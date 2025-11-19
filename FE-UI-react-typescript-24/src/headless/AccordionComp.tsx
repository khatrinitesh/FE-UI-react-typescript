import { Accordion, AccordionItem } from "@heroui/accordion";

const AccordionComp = () => {
  const defaultContent =
    "Voluptate ex mollit elit duis deserunt fugiat aliquip ex incididunt consequat laborum exercitation. Sit minim eiusmod adipisicing ullamco quis ex quis. Aliqua in amet minim magna commodo culpa irure est laboris. Excepteur tempor velit exercitation pariatur adipisicing qui ipsum reprehenderit commodo. Esse elit minim reprehenderit aliqua duis dolore aute esse ullamco labore ipsum deserunt. Quis laboris voluptate dolore culpa qui esse eiusmod. Incididunt aliqua culpa laborum occaecat aliquip incididunt occaecat sit ad. Voluptate ad quis nostrud est est ipsum consequat adipisicing duis cillum adipisicing.";

  return (
    <>
      {" "}
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionComp;
