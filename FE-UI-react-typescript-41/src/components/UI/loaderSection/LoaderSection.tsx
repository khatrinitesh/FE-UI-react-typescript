const LoaderSection = () => (
  <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
    <div className="loader relative">
      <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
        <defs xmlns="http://www.w3.org/2000/svg">
          <linearGradient y2="2" x2="0" y1="62" x1="0" id="b">
            <stop stopColor="#973BED" />
            <stop stopColor="#007CFF" offset="1" />
          </linearGradient>

          <linearGradient y2="0" x2="0" y1="64" x1="0" id="c">
            <stop stopColor="#FFC800" />
            <stop stopColor="#F0F" offset="1" />
            <animateTransform
              repeatCount="indefinite"
              dur="8s"
              values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
              type="rotate"
              attributeName="gradientTransform"
            />
          </linearGradient>

          <linearGradient y2="2" x2="0" y1="62" x1="0" id="d">
            <stop stopColor="#00E0ED" />
            <stop stopColor="#00DA72" offset="1" />
          </linearGradient>
        </defs>
      </svg>

      <svg viewBox="0 0 64 64" height="64" width="64">
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="8"
          stroke="url(#b)"
          d="M 54.72,3.97 ... (same path)"
          className="dash"
          pathLength="360"
        />
      </svg>

      <svg
        viewBox="0 0 64 64"
        height="64"
        width="64"
        style={{ "--rotation-duration": "0ms" } as React.CSSProperties}
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="10"
          stroke="url(#c)"
          d="M 32 32 m 0 -27 a 27 27 0 1 1 0 54 a 27 27 0 1 1 0 -54"
          className="spin"
          pathLength="360"
        />
      </svg>

      <div className="w-2" />

      <svg
        viewBox="0 0 64 64"
        height="64"
        width="64"
        style={{ "--rotation-duration": "0ms" } as React.CSSProperties}
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="8"
          stroke="url(#d)"
          d="M 4,4 h 4.62 ... (same path)"
          className="dash"
          pathLength="360"
        />
      </svg>
    </div>
  </div>
);

export default LoaderSection;
