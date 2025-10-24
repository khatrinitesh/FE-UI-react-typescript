import type { TextImageEffectProps } from "../../interface";

const TextImageEffect = () => {
  return (
    <>
      <TextImage
        text="Nature Vibes"
        imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        fontSize="8rem"
        height="400px"
      />

      <TextImage
        text="React Magic"
        imageUrl="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
        fontSize="6rem"
        height="300px"
      />
    </>
  );
};

export default TextImageEffect;

const TextImage: React.FC<TextImageEffectProps> = ({
  text,
  imageUrl,
  fontSize = "6rem",
  width = "100%",
  height = "300px",
  className,
}) => {
  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
      className={className}
    >
      <h1
        style={{
          fontSize,
          fontWeight: "bold",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          textAlign: "center",
        }}
      >
        {text}
      </h1>
    </div>
  );
};
