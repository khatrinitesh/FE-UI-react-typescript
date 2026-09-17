import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

import "./Accordion.css";

export interface AccordionItem {
  id: number;
  title: string;
  description: string;
}

interface AccordionProps {
  data: AccordionItem[];
}

export const Accordion = ({ data }: AccordionProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <div className="accordion">
      {data.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div className="accordionItem" key={item.id}>
            <button className="accordionHeader" type="button" onClick={() => handleToggle(item.id)} aria-expanded={isOpen}>
              <span className="accordionTitle">{item.title}</span>

              <span className="accordionIcon">{isOpen ? <ChevronDown /> : <ChevronRight />}</span>
            </button>

            {isOpen && (
              <div className="accordionContent">
                <p className="accordionDescription">{item.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
