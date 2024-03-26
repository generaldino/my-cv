import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <img
        src="https://github.com/generaldino/my-cv/blob/main/public/og-image.jpg?raw=true"
        alt="og-image"
        width={1200}
        height={600}
      />
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
