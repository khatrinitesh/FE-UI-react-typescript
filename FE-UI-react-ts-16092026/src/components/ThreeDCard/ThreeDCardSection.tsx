// threeDCardData.ts

import { ThreeDCard } from "./ThreeDCard";

const threeDCardData = [
  {
    id: 1,
    tag: "Featured",
    title: "Interactive 3D Experience",
    description: "A responsive 3D card with depth, hover interaction and smooth animation.",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    tag: "Web Design",
    title: "Modern Digital Experience",
    description: "A clean and immersive interface designed for modern digital products.",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    tag: "Development",
    title: "Full Stack Application",
    description: "A scalable application built with modern frontend and backend technologies.",
    image: "/images/project-3.jpg",
  },
];

export default function ThreeDCardSection() {
  return (
    <>
      {threeDCardData.map((card) => (
        <ThreeDCard key={card.id} tag={card.tag} title={card.title} description={card.description} image={card.image} />
      ))}
    </>
  );
}
