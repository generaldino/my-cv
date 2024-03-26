import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <img
        src="https://baileymatthews.dev/bailey-matthews.jpeg"
        alt="Bailey Matthews"
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
