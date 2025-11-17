import React from "react";

const PreloaderSpinner: React.FC = () => {
  return (
    <div className="preloaderSpinner bg-[rgba(255,255,255,.6)] fixed inset-0 z-[9999] flex items-center justify-center h-dvh">
      <div className="loader"></div>
    </div>
  );
};

export default PreloaderSpinner;
