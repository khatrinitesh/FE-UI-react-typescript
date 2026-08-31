import { useRef, type MouseEvent } from "react";

interface ThreeDCardProps {
  title: string;
  description: string;
  badge?: string;
  image?: string;
}

export default function ThreeDCard({ title, description, badge, image }: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="card3d-wrapper">
      <div ref={cardRef} className="card3d" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {image && <img src={image} alt={title} className="card3d-image" />}
        <div className="card3d-content">
          {badge && <span className="card3d-badge">{badge}</span>}
          <h3 className="card3d-title">{title}</h3>
          <p className="card3d-description">{description}</p>
        </div>
      </div>
    </div>
  );
}
