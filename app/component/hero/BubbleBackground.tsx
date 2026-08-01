const BubbleBackground = () => {
  return (
    <div className="hero-splash" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="hero-splash__svg"
      >
        <defs>
          <linearGradient id="splashTeal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: "var(--splash-a)" }} stopOpacity="0.12" />
            <stop offset="55%" style={{ stopColor: "var(--splash-a)" }} stopOpacity="0.55" />
            <stop offset="100%" style={{ stopColor: "var(--splash-a)" }} stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="splashCoral" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: "var(--splash-b)" }} stopOpacity="0.45" />
            <stop offset="100%" style={{ stopColor: "var(--splash-b)" }} stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="splashSunny" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: "var(--splash-c)" }} stopOpacity="0.95" />
            <stop offset="100%" style={{ stopColor: "var(--splash-c)" }} stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="bubbleTeal" cx="35%" cy="30%" r="72%">
            <stop offset="0%" style={{ stopColor: "var(--card)" }} stopOpacity="0.9" />
            <stop offset="45%" style={{ stopColor: "var(--bubble-a)" }} stopOpacity="0.45" />
            <stop offset="100%" style={{ stopColor: "var(--splash-a)" }} stopOpacity="0.25" />
          </radialGradient>
          <radialGradient id="bubbleCoral" cx="35%" cy="30%" r="72%">
            <stop offset="0%" style={{ stopColor: "var(--card)" }} stopOpacity="0.9" />
            <stop offset="45%" style={{ stopColor: "var(--bubble-b)" }} stopOpacity="0.45" />
            <stop offset="100%" style={{ stopColor: "var(--splash-b)" }} stopOpacity="0.25" />
          </radialGradient>
          <radialGradient id="bubbleSunny" cx="35%" cy="30%" r="72%">
            <stop offset="0%" style={{ stopColor: "var(--card)" }} stopOpacity="0.9" />
            <stop offset="45%" style={{ stopColor: "var(--bubble-c)" }} stopOpacity="0.45" />
            <stop offset="100%" style={{ stopColor: "var(--splash-c)" }} stopOpacity="0.25" />
          </radialGradient>
        </defs>

        <g className="hero-splash__blob hero-splash__blob--main">
          <path
            d="M0,900 C90,760 210,700 360,720 C520,742 640,680 800,700 C960,720 1080,650 1220,680 C1330,703 1410,660 1440,640 L1440,900 Z"
            fill="url(#splashTeal)"
          />
        </g>

        <g className="hero-splash__blob hero-splash__blob--coral">
          <path
            d="M0,300 C60,380 170,470 320,520 C380,538 420,610 370,660 C320,710 180,750 60,770 C20,778 5,790 0,800 Z"
            fill="url(#splashCoral)"
          />
        </g>

        <g className="hero-splash__blob hero-splash__blob--sunny">
          <path
            d="M1440,0 C1290,30 1210,130 1240,250 C1270,370 1360,430 1440,400 Z"
            fill="url(#splashSunny)"
          />
        </g>

        <g className="hero-splash__bubbles">
          <circle className="bubble" cx="180" cy="640" r="92" fill="url(#bubbleTeal)" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="2" />
          <circle className="bubble" cx="322" cy="508" r="42" fill="url(#bubbleCoral)" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.5" />
          <circle className="bubble" cx="120" cy="410" r="26" fill="url(#bubbleSunny)" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1.5" />
          <circle className="bubble" cx="545" cy="292" r="62" fill="url(#bubbleCoral)" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.5" />
          <circle className="bubble" cx="625" cy="404" r="24" fill="url(#bubbleTeal)" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1" />
          <circle className="bubble" cx="762" cy="204" r="38" fill="url(#bubbleSunny)" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1.5" />
          <circle className="bubble" cx="905" cy="500" r="82" fill="url(#bubbleTeal)" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />
          <circle className="bubble" cx="1005" cy="326" r="22" fill="url(#bubbleSunny)" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
          <circle className="bubble" cx="1102" cy="562" r="50" fill="url(#bubbleCoral)" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.5" />
          <circle className="bubble" cx="1240" cy="196" r="30" fill="url(#bubbleTeal)" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.5" />
          <circle className="bubble" cx="1332" cy="356" r="18" fill="url(#bubbleCoral)" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
          <circle className="bubble" cx="858" cy="682" r="34" fill="url(#bubbleSunny)" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.5" />
          <circle className="bubble" cx="1086" cy="118" r="52" fill="url(#bubbleSunny)" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1.5" />
          <circle className="bubble" cx="700" cy="120" r="20" fill="url(#bubbleTeal)" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
          <circle className="bubble" cx="420" cy="170" r="30" fill="url(#bubbleCoral)" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1.5" />
          <circle className="bubble" cx="230" cy="240" r="14" fill="url(#bubbleSunny)" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
          <circle className="bubble" cx="1220" cy="760" r="60" fill="url(#bubbleTeal)" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
};

export default BubbleBackground;
