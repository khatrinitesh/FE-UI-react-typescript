interface BorderImageProps {
  src: string;
  alt?: string;
  title?: string;
  borderColor?: "black" | "white" | "primary" | "gray";
  borderWidth?: "thin" | "medium" | "thick";
  rounded?: boolean;
}

const BorderImage = ({
  src,
  alt = "Image",
  title,
  borderColor = "black",
  borderWidth = "medium",
  rounded = true,
}: BorderImageProps) => {
  return (
    <div
      className={`
        border-image
        border-image--${borderColor}
        border-image--${borderWidth}
        ${rounded ? "border-image--rounded" : ""}
      `}
    >
      <img src={src} alt={alt} className="border-image__img" />

      {title && <p className="border-image__title">{title}</p>}
    </div>
  );
};

export default BorderImage;
