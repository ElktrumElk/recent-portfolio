import { ImageResponse } from "next/og";
import { alt, buildSocialCard, contentType, size } from "./lib/social-card";

export { alt, contentType, size };

export default async function Image(): Promise<ImageResponse> {
  return buildSocialCard();
}
