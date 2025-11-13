import type { ZigZagSectionProps } from "../../interface";
import "./components/zig-zag-layout-style.css";
import { sections } from "./components/zigZagLayoutData";

const ZigZagLayoutComponent = () => {
  return (
    <>
      {sections.map((section, idx) => (
        <ZigZagSection
          key={section.id}
          data={section}
          isReversed={idx % 2 !== 0}
        />
      ))}
    </>
  );
};

export default ZigZagLayoutComponent;

const ZigZagSection: React.FC<ZigZagSectionProps> = ({
  data,
  isReversed = false,
  className,
}) => {
  return (
    <section
      className={`zigzag-section ${isReversed ? "reversed" : ""} ${
        className || ""
      }`}
    >
      <div className="zigzag-image">
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <div className="zigzag-text">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </section>
  );
};
