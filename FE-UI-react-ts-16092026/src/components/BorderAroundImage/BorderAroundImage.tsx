import "./BorderAroundImage.css";

export const BorderAroundImage = () => {
  return (
    <div className="borderImage">
      <div className="borderImageFrame">
        <img className="borderImagePicture" src="/images/image.jpg" alt="Border example" />
      </div>
    </div>
  );
};
