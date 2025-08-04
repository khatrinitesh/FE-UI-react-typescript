import "./PreloaderSection.css";

const PreloaderSection = () => {
  return (
    <div className="preloaderSection fixed inset-0 w-full h-full bg-[rgba(0,0,0,.8)]">
      <div className="loader"></div>
    </div>
  );
};

export default PreloaderSection;
