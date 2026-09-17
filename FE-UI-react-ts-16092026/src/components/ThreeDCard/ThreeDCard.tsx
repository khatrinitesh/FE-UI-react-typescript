import "./ThreeDCard.css";

interface ThreeDCardProps {
  tag: string;
  title: string;
  description: string;
  image: string;
}

export const ThreeDCard = ({ tag, title, description, image }: ThreeDCardProps) => {
  return (
    <div className="threeDCard">
      <div className="threeDCardInner">
        <div className="threeDCardImageWrapper">
          <img className="threeDCardImage" src={image} alt={title} />
        </div>

        <div className="threeDCardContent">
          <span className="threeDCardTag">{tag}</span>

          <h3 className="threeDCardTitle">{title}</h3>

          <p className="threeDCardDescription">{description}</p>

          <button className="threeDCardButton" type="button">
            Explore
            <span>→</span>
          </button>
        </div>

        <div className="threeDCardShine" />
      </div>
    </div>
  );
};
