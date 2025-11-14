import type { VideoPreviewProps } from "../../interface";
import { useRef, useState } from "react";

const VideoPreview = ({ src, poster, className }: VideoPreviewProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };
  return (
    <div
      className={`
        cursor-pointer
        aspect-[16/9]
        relative
        w-full
        rounded-[28px]
        overflow-hidden
        shadow-[0_24px_60px_rgba(57,30,112,0.35)]
        bg-gradient-to-br from-[#6e3ba9] via-[#7d53b8] to-[#b39ce6]
        ${className ?? ""}
      `}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onEnded={handleEnded}
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* Gradient overlay when not playing (optional, remove if you want to always see video) */}
      {!isPlaying && (
        <div className="cursor-pointer absolute inset-0 bg-gradient-to-br from-[#6e3ba9]/70 to-[#b39ce6]/70" />
      )}

      {/* Play / Pause button */}
      <button
        type="button"
        onClick={togglePlay}
        className="
          absolute inset-0
          flex items-center justify-center
          focus:outline-none cursor-pointer
        "
      >
        <div
          className="
            flex items-center justify-center
            w-20 h-20
            rounded-full
            bg-white/25
            shadow-[0_18px_35px_rgba(0,0,0,0.35)]
            backdrop-blur-sm
            transition-transform duration-150
            hover:scale-105
          "
        >
          {/* Icon */}
          {isPlaying ? (
            // Pause icon
            <div className="flex gap-1">
              <span className="w-2.5 h-6 rounded-full bg-white" />
              <span className="w-2.5 h-6 rounded-full bg-white" />
            </div>
          ) : (
            // Play icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 h-7 text-white translate-x-[1px]"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};

export default VideoPreview;
