import "./BentoGrid.css";

interface BentoItem {
  id: number;
  title: string;
  description: string;
  image?: string;
  size?: "large" | "wide" | "tall" | "small";
}

interface BentoGridProps {
  data: BentoItem[];
}

export const BentoGrid = ({ data }: BentoGridProps) => {
  return (
    <div className="bentoGrid">
      {data.map((item) => (
        <article className={`bentoItem ${item.size ?? "small"}`} key={item.id}>
          {item.image && (
            <div className="bentoImageWrapper">
              <img className="bentoImage" src={item.image} alt={item.title} />
            </div>
          )}

          <div className="bentoContent">
            <h3 className="bentoTitle">{item.title}</h3>

            <p className="bentoDescription">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
