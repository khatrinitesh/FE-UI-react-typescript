// src/constants/timeline.ts
import { FaRocket, FaCheckCircle, FaTools } from "react-icons/fa";
import type { TimelineItem } from "../../interface";

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Project Started",
    date: "Jan 2022",
    description: "We kicked off development and planned initial features.",
    icon: FaRocket, // ✅ pass reference, not JSX
  },
  {
    id: 2,
    title: "First Release",
    date: "Jun 2022",
    description: "Version 1.0 went live for public users.",
    icon: FaCheckCircle,
  },
  {
    id: 3,
    title: "Ongoing Improvements",
    date: "2023 - Present",
    description: "We continue to add new features and fix bugs.",
    icon: FaTools,
  },
];
