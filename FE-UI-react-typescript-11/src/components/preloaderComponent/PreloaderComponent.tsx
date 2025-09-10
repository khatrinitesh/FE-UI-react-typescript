const PreloaderComponent = () => {
  return (
    <div className="preloaderSpinner bg-[rgba(255,255,255,.6)] fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default PreloaderComponent;
