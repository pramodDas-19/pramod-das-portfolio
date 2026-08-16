import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          borderRadius: "8px",
          fontWeight: 900,
          letterSpacing: "-0.5px",
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
