const DivineCircle = () => {
  return (
    <section className="flex min-h-screen items-center justify-center overflow-hidden bg-[#160506]">
      <div className="relative flex h-[450px] w-[450px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_35%,#351013_0%,#16090a_55%,#090405_100%)]">
        {/* Rotating outer text */}
        <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
          <svg viewBox="0 0 500 500" className="h-full w-full">
            <defs>
              <path
                id="circlePath"
                d="M 250,250 m -205,0 a 205,205 0 1,1 410,0 a 205,205 0 1,1 -410,0"
                fill="none"
              />
            </defs>

            <text
              fill="white"
              fillOpacity="0.75"
              fontSize="6"
              letterSpacing="6"
              fontFamily="Arial, sans-serif"
            >
              <textPath href="#circlePath" startOffset="0%">
                OGILVY • WELCOME TO BASECAMP • THE DIVINE DISCONTENT SESSION •
                WHERE GOOD IDEAS BECOME INEVITABLE • OGILVY • WELCOME TO
                BASECAMP • THE DIVINE DISCONTENT SESSION •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Outer rings */}
        <div className="absolute inset-[12px] rounded-full border border-white/20" />
        <div className="absolute inset-[25px] rounded-full border border-white/40" />

        {/* Inner content */}
        <div className="relative z-10 flex h-[365px] w-[365px] flex-col items-center justify-center rounded-full border border-white/30 bg-[#17090b]/90 px-10 text-center shadow-[0_0_80px_rgba(255,0,0,0.12)]">
          <p className="font-serif text-[25px] leading-none text-white">
            Ogilvy
          </p>

          <p className="mt-3 text-sm text-white/50">Welcome to</p>

          <h1 className="mt-1 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
            Basecamp
          </h1>

          <div className="mt-2 h-px w-16 bg-white/40" />

          <h2 className="mt-4 max-w-[260px] font-serif text-xl font-semibold leading-tight text-white">
            The Divine
            <br />
            Discontent Session
          </h2>

          <p className="mt-3 max-w-[230px] text-sm leading-5 text-white/60">
            Where good ideas
            <br />
            become inevitable.
          </p>
        </div>

        {/* Small decorative dots */}
        <div className="absolute left-[18%] top-[30%] h-1 w-1 rounded-full bg-white/40" />
        <div className="absolute right-[18%] top-[30%] h-1 w-1 rounded-full bg-white/40" />
        <div className="absolute bottom-[25%] left-[20%] h-1 w-1 rounded-full bg-white/30" />
        <div className="absolute bottom-[25%] right-[20%] h-1 w-1 rounded-full bg-white/30" />
      </div>
    </section>
  );
};

export default DivineCircle;
