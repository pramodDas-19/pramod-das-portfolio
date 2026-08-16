import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 84,
          background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          borderRadius: "40px",
          fontWeight: 900,
          letterSpacing: "-2px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        PD
      </div>
    ),
    {
      ...size,
    }
  );
}
