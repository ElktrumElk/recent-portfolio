import { ImageResponse } from "next/og";

export function buildHomeSocialCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#eeeae2",
          color: "#171816",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.35,
            backgroundImage:
              "linear-gradient(rgba(23,24,22,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(23,24,22,.22) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
          }}
        />

        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "58px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#a84927", fontSize: 18, letterSpacing: 3, textTransform: "uppercase" }}>
              <span style={{ width: 40, height: 3, display: "flex", background: "#a84927" }} />
              Product-minded software developer
            </div>
            <div style={{ display: "flex", color: "#676760", fontSize: 16, letterSpacing: 2, textTransform: "uppercase" }}>
              Freetown / Sierra Leone
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
            <div style={{ display: "flex", fontSize: 105, fontWeight: 800, lineHeight: 0.88, letterSpacing: -7 }}>
              Elkanah Cole
            </div>
            <div style={{ display: "flex", marginTop: 22, color: "#a84927", fontSize: 67, fontWeight: 500, lineHeight: 1, letterSpacing: -4 }}>
              Building products that earn attention.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid rgba(23,24,22,.35)" }}>
            <div style={{ display: "flex", gap: 18, color: "#676760", fontSize: 17 }}>
              <span>Web</span><span>•</span><span>Mobile</span><span>•</span><span>Full-stack</span><span>•</span><span>Open source</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 19, fontWeight: 700 }}>
              elktrumelk.xyz <span style={{ color: "#a84927" }}>↗</span>
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", right: -120, top: 145, width: 330, height: 330, display: "flex", borderRadius: 999, border: "2px solid #a84927" }} />
        <div style={{ position: "absolute", right: -60, top: 205, width: 210, height: 210, display: "flex", borderRadius: 999, background: "#a84927", opacity: .12 }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
