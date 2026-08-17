import { ImageResponse } from "next/og";
import { siteConfig } from "./site";

export const size = { width: 1200, height: 630 } as const;
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;

type Font = {
  name: string;
  data: ArrayBuffer;
  style: "normal";
  weight: 400 | 500 | 600 | 700;
};

async function fetchFont(url: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(url);
    return res.ok ? res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export async function buildSocialCard(): Promise<ImageResponse> {
  const [fraunces, grotesk] = await Promise.all([
    fetchFont(
      "https://cdn.jsdelivr.net/fontsource/fonts/fraunces@latest/latin-700-normal.ttf"
    ),
    fetchFont(
      "https://cdn.jsdelivr.net/fontsource/fonts/space-grotesk@latest/latin-500-normal.ttf"
    ),
  ]);

  const fonts: Font[] = [];
  if (fraunces) {
    fonts.push({ name: "Fraunces", data: fraunces, style: "normal", weight: 700 });
  }
  if (grotesk) {
    fonts.push({ name: "Space Grotesk", data: grotesk, style: "normal", weight: 500 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0f1419",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          position: "relative",
          overflow: "hidden",
          fontFamily: "Space Grotesk",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 440,
            height: 440,
            borderRadius: 9999,
            backgroundColor: "#205a8a",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            bottom: -140,
            width: 360,
            height: 360,
            borderRadius: 9999,
            backgroundColor: "#c0512f",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 200,
            bottom: 36,
            width: 96,
            height: 96,
            borderRadius: 9999,
            backgroundColor: "#c9992e",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#d97347",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            <span style={{ width: 44, height: 6, backgroundColor: "#c9992e", borderRadius: 9999 }} />
            {siteConfig.role}
          </div>
          <div
            style={{
              marginTop: 28,
              color: "#e6eaee",
              fontSize: 104,
              fontWeight: 700,
              fontFamily: "Fraunces",
              lineHeight: 1,
              letterSpacing: -2,
              display: "flex",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            position: "relative",
          }}
        >
          <div style={{ width: 96, height: 8, backgroundColor: "#c0512f", borderRadius: 9999 }} />
          <div
            style={{
              color: "#aeb8c0",
              fontSize: 28,
              lineHeight: 1.4,
              maxWidth: 640,
              display: "flex",
            }}
          >
            Crafting sophisticated, accessible interfaces for web &amp; mobile.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#6b7b88",
              fontSize: 22,
            }}
          >
            <span>React</span>
            <span style={{ color: "#c9992e" }}>·</span>
            <span>Next.js</span>
            <span style={{ color: "#c9992e" }}>·</span>
            <span>TypeScript</span>
            <span style={{ color: "#c9992e" }}>·</span>
            <span>Node.js</span>
            <span style={{ color: "#c9992e" }}>·</span>
            <span>Flutter</span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
