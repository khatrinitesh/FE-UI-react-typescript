import React from "react";

const PreloaderSection: React.FC = () => {
  return (
    <div className="preloaderSection bg-[rgba(255,255,255,.6)] fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default PreloaderSection;
