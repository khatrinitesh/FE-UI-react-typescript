import CircularLoader from "../UI/CircularLoader/CircularLoader";

const FinalizingVideoCard = () => {
  return (
    <div className="w-full max-w-3xl rounded-tl-[4px] rounded-[24px] bg-[#744fa1]  p-5 flex flex-col items-center justify-center text-center ">
      <p className="text-[0.938rem] congenial-medium mb-8 text-white">
        Finalizing your video... 🎬
      </p>

      <CircularLoader
        size="lg"
        className="mb-8"
        color="#ffffff"
        trackColor="rgba(255,255,255,0.25)"
      />

      <div className="text-sm  congenial-medium  text-white leading-relaxed">
        <p>Video generation can take up to 15 minutes.</p>
        <p>You&apos;ll receive your video by email 📩</p>
      </div>
    </div>
  );
};

export default FinalizingVideoCard;
