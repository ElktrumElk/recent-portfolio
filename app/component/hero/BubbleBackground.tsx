const FILLS = [
  "rgba(28, 30, 36, 0.55)",
  "rgba(20, 22, 28, 0.6)",
  "rgba(36, 38, 44, 0.45)",
];

const BUBBLES = [
  { cx: 168, cy: 636, r: 96, f: 0, o: 0.9, w: 1.4 },
  { cx: 318, cy: 512, r: 44, f: 1, o: 0.85, w: 1.1 },
  { cx: 122, cy: 402, r: 27, f: 2, o: 0.8, w: 1 },
  { cx: 546, cy: 286, r: 62, f: 1, o: 0.9, w: 1.2 },
  { cx: 624, cy: 398, r: 25, f: 0, o: 0.8, w: 1 },
  { cx: 764, cy: 198, r: 39, f: 2, o: 0.85, w: 1.1 },
  { cx: 906, cy: 496, r: 84, f: 0, o: 0.9, w: 1.3 },
  { cx: 1004, cy: 322, r: 24, f: 1, o: 0.8, w: 1 },
  { cx: 1100, cy: 560, r: 52, f: 2, o: 0.9, w: 1.2 },
  { cx: 1240, cy: 196, r: 31, f: 0, o: 0.85, w: 1.1 },
  { cx: 1332, cy: 352, r: 19, f: 1, o: 0.8, w: 1 },
  { cx: 856, cy: 680, r: 35, f: 2, o: 0.85, w: 1.1 },
  { cx: 1086, cy: 118, r: 54, f: 0, o: 0.9, w: 1.2 },
  { cx: 700, cy: 118, r: 21, f: 1, o: 0.8, w: 1 },
  { cx: 420, cy: 168, r: 31, f: 2, o: 0.85, w: 1.1 },
  { cx: 1218, cy: 758, r: 61, f: 0, o: 0.9, w: 1.3 },
];

const SPARKS = [
  { cx: 96, cy: 208, r: 2.4 },
  { cx: 232, cy: 720, r: 3 },
  { cx: 480, cy: 150, r: 2 },
  { cx: 672, cy: 700, r: 2.6 },
  { cx: 940, cy: 120, r: 2.2 },
  { cx: 1160, cy: 640, r: 3 },
  { cx: 1360, cy: 500, r: 2.2 },
  { cx: 820, cy: 300, r: 2 },
];

const BubbleBackground = () => {
  return (
    <div className="hero-splash" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="hero-splash__svg"
      >
        <g className="hero-splash__bubbles">
          {BUBBLES.map((b, i) => (
            <circle
              key={i}
              className="bubble"
              cx={b.cx}
              cy={b.cy}
              r={b.r * 0.78}
              fill={FILLS[b.f % FILLS.length]}
              fillOpacity={b.o}
              stroke="var(--bubble-stroke)"
              strokeWidth={b.w}
            />
          ))}
          {SPARKS.map((s, i) => (
            <circle
              key={`spark-${i}`}
              className="bubble spark"
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill="var(--bubble-stroke)"
              fillOpacity={0.7}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default BubbleBackground;