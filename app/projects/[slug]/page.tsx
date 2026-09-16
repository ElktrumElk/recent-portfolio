import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, projectCategories } from "../../lib/projects";
import { siteConfig } from "../../lib/site";
import {
  CreditCardIcon,
  LayersIcon,
  ShareIcon,
  CloudIcon,
  TerminalIcon,
  ClockIcon,
  NewspaperIcon,
} from "../../lib/BrandIcons";
import "./project-detail.css";

interface Props {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; color?: string }>
> = {
  CreditCard: CreditCardIcon,
  Layers: LayersIcon,
  ShareLogo: ShareIcon,
  CloudUpload: CloudIcon,
  Terminal: TerminalIcon,
  Clock: ClockIcon,
  Newspaper: NewspaperIcon,
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const { seo } = project;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "website",
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url: `/projects/${project.slug}`,
      siteName: siteConfig.title,
    },
  };
}

const CheckIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowLeftIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ArrowUpRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const GitBranchIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const IconComp = iconMap[project.icon] || LayersIcon;
  const catInfo = projectCategories[project.category];
  const fullUrl = `${siteConfig.url}/projects/${project.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.longDescription,
    url: fullUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    keywords: project.seo.keywords.join(", "),
    dateCreated: project.dateStarted,
    ...(project.dateEnded ? { datePublished: project.dateEnded } : {}),
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div
        className="pd-page"
        style={{ "--accent-hl": project.color } as React.CSSProperties}
      >
        <Link className="pd-back" href="/#projects">
          <ArrowLeftIcon />
          Projects
        </Link>

        <header className="pd-hero">
          <div
            className="pd-hero__gradient"
            style={{
              background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`,
            }}
          >
            <div className="pd-hero__icon" style={{ color: `${project.color}55` }}>
              <IconComp size={72} color={project.color} />
            </div>
          </div>
          <div className="pd-hero__info">
            <div className="pd-hero__meta">
              <span className="pd-category" style={{ color: catInfo.color }}>
                {catInfo.label}
              </span>
              <span className={`pd-status pd-status--${project.status}`}>
                {project.status}
              </span>
            </div>
            <h1 className="pd-title">{project.name}</h1>
            <p className="pd-tagline">{project.description}</p>
            <span className="pd-dates">
              {project.dateStarted}
              {project.dateEnded ? ` — ${project.dateEnded}` : " — Present"}
            </span>
          </div>
        </header>

        <section className="pd-section">
          <h2 className="pd-section__title">Overview</h2>
          <p className="pd-section__body">{project.longDescription}</p>
        </section>

        <section className="pd-section">
          <h2 className="pd-section__title">Key Features</h2>
          <ul className="pd-features">
            {project.features.map((feature) => (
              <li key={feature} className="pd-feature">
                <span className="pd-feature__check">
                  <CheckIcon />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="pd-section">
          <h2 className="pd-section__title">Tech Stack</h2>
          <div className="pd-tech">
            {project.techStack.map((tech) => (
              <span key={tech} className="pd-tech__tag">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="pd-actions">
          {project.liveLink && (
            <a
              className="pd-btn pd-btn--primary"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <ArrowUpRightIcon />
            </a>
          )}
          {project.repoLink && (
            <a
              className="pd-btn pd-btn--ghost"
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranchIcon />
              View Source
            </a>
          )}
          <Link className="pd-btn pd-btn--ghost" href="/#projects">
            Back to projects
          </Link>
        </div>
      </div>
    </>
  );
}