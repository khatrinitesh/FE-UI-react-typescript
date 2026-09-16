import { Check, Circle, Diamond, Dot, Star } from "lucide-react";

import "./BulletList.css";

type BulletType = "dot" | "circle" | "check" | "diamond" | "star";

interface BulletItem {
  id: number;
  title: string;
  description?: string;
}

interface BulletListProps {
  title?: string;
  description?: string;
  bulletType?: BulletType;
  bulletColor?: string;
  items?: BulletItem[];
}

const defaultItems: BulletItem[] = [
  {
    id: 1,
    title: "Modern React Components",
    description: "Reusable and scalable UI components.",
  },
  {
    id: 2,
    title: "TypeScript Support",
    description: "Strong typing for better development.",
  },
  {
    id: 3,
    title: "Responsive Design",
    description: "Works smoothly across all screen sizes.",
  },
  {
    id: 4,
    title: "Smooth Animations",
    description: "Clean and interactive hover effects.",
  },
];

const BulletList = ({
  title = "Bullet List",
  description = "A reusable bullet list with customizable colors and styles.",
  bulletType = "dot",
  bulletColor = "cyan",
  items = defaultItems,
}: BulletListProps) => {
  const renderBullet = () => {
    switch (bulletType) {
      case "circle":
        return <Circle size={17} />;

      case "check":
        return <Check size={17} />;

      case "diamond":
        return <Diamond size={17} />;

      case "star":
        return <Star size={17} />;

      case "dot":
      default:
        return <Dot size={22} />;
    }
  };

  return (
    <main className="bullet-list-page">
      <div className="bullet-list-container">
        {/* Heading */}

        <header className="bullet-list-heading">
          <span>LIST COMPONENT</span>

          <h1>
            Custom <strong>Bullet List</strong>
          </h1>

          <p>{description}</p>
        </header>

        {/* List Card */}

        <section className={`bullet-list-card bullet-color-${bulletColor}`}>
          <div className="bullet-list-card-header">
            <span>FEATURES</span>

            <h2>{title}</h2>
          </div>

          <ul className="bullet-list">
            {items.map((item) => (
              <li key={item.id} className="bullet-list-item">
                <span className="bullet-icon">{renderBullet()}</span>

                <div className="bullet-content">
                  <h3>{item.title}</h3>

                  {item.description && <p>{item.description}</p>}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default BulletList;
