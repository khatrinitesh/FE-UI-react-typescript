import { useImageStore } from "../store/useImageStore";

const BlackWhiteImg = () => {
  const { images, activeId, setActive } = useImageStore();
  return (
    <div className="flex gap-6 justify-center">
      {images.map((img) => (
        <div
          key={img.id}
          onMouseEnter={() => setActive(img.id)}
          onMouseLeave={() => setActive(null)}
          className="overflow-hidden rounded-xl"
        >
          <img
            src={img.src}
            alt={img.alt}
            className={`w-72 h-48 object-cover transition-all duration-500
              ${activeId === img.id ? "grayscale-0 scale-105" : "grayscale"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default BlackWhiteImg;
