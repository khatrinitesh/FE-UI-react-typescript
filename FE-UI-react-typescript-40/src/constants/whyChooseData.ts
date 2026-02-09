import {  Briefcase, Puzzle, ShieldCheck, type LucideIcon } from "lucide-react";

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean; // for the blue card
}

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    title: "Industry Experience",
    description:
      "With 25+ years of experience in the cybersecurity domain, we possess deep knowledge and insights to tackle even the most complex security challenges.",
    icon: Briefcase,
    highlight: true,
  },
  {
    title: "Customized Solutions",
    description:
      "We understand that each organization is unique. Hence, we provide tailored solutions that address your specific technology needs, align with your budget, and accommodate your growth plans.",
    icon: Puzzle,
  },
  {
    title: "Skilled Professionals",
    description:
      "Our team consists of highly skilled and certified cybersecurity professionals who stay up to date with the latest threats, technologies, and industry trends to deliver top-notch services.",
    icon: ShieldCheck,
  },
];
