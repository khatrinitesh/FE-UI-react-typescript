import { useEffect, useRef, useState } from "react";
import { examples } from "../../constants/constants";
import { Play, Pause } from "lucide-react";

const DiscoverSection = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlay = (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    if (playingIndex === index) {
      currentVideo.pause();
      setPlayingIndex(null);
    } else {
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) v.pause();
      });
      currentVideo.play();
      setPlayingIndex(index);
    }
  };

  useEffect(() => {
    return () => {
      videoRefs.current.forEach((v) => v?.pause());
    };
  }, []);

  return (
    <section
      id="sectionDiscover"
      className="w-full bg-[#f8f5fc] px-5 py-16 sm:py-20 md:py-24"
    >
      <h2 className="text-center text-3xl sm:text-4xl font-bold uppercase text-[#6d498c] mb-10">
        Discover Examples
      </h2>

      {/* Mobile: horizontal scroll 1-card view, md+: 2/3 column grid */}
      <div
        className="
          flex md:grid cursor-pointer
          md:grid-cols-2 lg:grid-cols-3 gap-8
          max-w-7xl mx-auto
          overflow-x-auto md:overflow-visible
          px-4 sm:px-8
          scroll-smooth snap-x snap-mandatory
        "
      >
        {examples.map((item, i) => (
          <div
            key={item.id}
            className="
              relative aspect-[9/16]
              min-w-full md:min-w-0      /* 1 full-width card at a time on mobile */
              bg-black rounded-[40px] overflow-hidden
              flex flex-col justify-end text-white
              shadow-lg shadow-black/20
              snap-center
              mx-auto md:mx-0
            "
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={item.videoSrc}
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              preload="metadata"
            />

            {/* Play / Pause Button */}
            <div className="absolute inset-0 cursor-pointer flex justify-center items-center">
              <button
                onClick={() => togglePlay(i)}
                className="bg-white/20 hover:bg-white/40 cursor-pointer p-4 rounded-full transition"
              >
                {playingIndex === i ? (
                  <Pause className="w-10 h-10 text-white" />
                ) : (
                  <Play className="w-10 h-10 text-white" />
                )}
              </button>
            </div>

            {/* Caption */}
            <div className="relative bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-center">
              <p className="text-sm md:text-base font-medium leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverSection;
