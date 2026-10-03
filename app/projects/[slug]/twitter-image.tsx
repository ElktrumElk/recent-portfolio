import { notFound } from "next/navigation";
import { buildProjectSocialCard } from "../../lib/project-social-card";
import { projects } from "../../lib/projects";

export const alt = "Project case study by Elkanah Cole";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return buildProjectSocialCard(project);
}
