import { buildHomeSocialCard } from "./lib/home-social-card";

export const alt = "Elkanah Cole, product-minded software developer in Freetown, Sierra Leone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return buildHomeSocialCard();
}
