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

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const IconComp = iconMap[project.icon] || LayersIcon;
  const catInfo = projectCategories[project.category];
  const fullUrl = `${siteConfig.url}/projects/${project.slug}`;
  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(projectIndex + 1) % projects.length];

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
      <main
        className="pd-page"
        style={{ "--accent-hl": project.color } as React.CSSProperties}
      >
        <div className="pd-frame pd-topbar pd-mount pd-mount--1">
          <Link className="pd-back" href="/#work">
            <ArrowLeftIcon /> Back to selected work
          </Link>
          <span>Case study / {String(projectIndex + 1).padStart(2, "0")}</span>
        </div>

        <header className="pd-frame pd-hero">
          <div className="pd-hero__copy pd-mount pd-mount--2">
            <div className="pd-hero__meta">
              <span className="pd-category" style={{ color: catInfo.color }}>{catInfo.label}</span>
              <span className="pd-meta-line" />
              <span>{project.dateStarted.slice(0, 4)}</span>
            </div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="pd-hero__actions">
              {project.liveLink && (
                <a className="pd-btn pd-btn--primary" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Visit live project <ArrowUpRightIcon />
                </a>
              )}
              {project.repoLink && (
                <a className="pd-text-link" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  View source <ArrowUpRightIcon />
                </a>
              )}
            </div>
          </div>

          <div className="pd-visual pd-mount pd-mount--3">
            <div className="pd-visual__grid" />
            <span className="pd-visual__index">EC / {String(projectIndex + 1).padStart(2, "0")}</span>
            <div className="pd-visual__orb" style={{ background: `radial-gradient(circle at 35% 30%, ${project.color}, color-mix(in srgb, ${project.color} 34%, #111210) 62%, #111210)` }}>
              <IconComp size={72} color="#f4f0e8" />
            </div>
            <span className={`pd-status pd-status--${project.status}`}>{project.status}</span>
          </div>
        </header>

        <section className="pd-frame pd-overview" data-reveal>
          <div className="pd-section-label"><span>01</span><p>Overview</p></div>
          <div className="pd-overview__body">
            <p className="pd-lead">{project.longDescription}</p>
            <dl className="pd-facts">
              <div><dt>Discipline</dt><dd>{catInfo.label}</dd></div>
              <div><dt>Timeline</dt><dd>{project.dateStarted} - {project.dateEnded ?? "Present"}</dd></div>
              <div><dt>Status</dt><dd>{project.status}</dd></div>
              <div><dt>Role</dt><dd>Product engineering</dd></div>
            </dl>
          </div>
        </section>

        <section className="pd-feature-section" data-reveal>
          <div className="pd-frame">
            <div className="pd-section-label pd-section-label--light"><span>02</span><p>Core experience</p></div>
            <div className="pd-feature-heading">
              <h2>Designed around what matters.</h2>
              <p>Core functionality shaped into a clear, dependable experience.</p>
            </div>
            <ol className="pd-features">
              {project.features.map((feature, index) => (
                <li key={feature} data-reveal data-reveal-delay={index % 3}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{feature}</h3>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pd-frame pd-stack-section" data-reveal>
          <div className="pd-section-label"><span>03</span><p>Technology</p></div>
          <div>
            <h2>A focused stack for reliable delivery.</h2>
            <div className="pd-tech">
              {project.techStack.map((tech, index) => (
                <span key={tech}><i>{String(index + 1).padStart(2, "0")}</i>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        <nav className="pd-next" aria-label="Project navigation" data-reveal>
          <div className="pd-frame pd-next__inner">
            <div><span>Next project</span><p>Keep exploring the work</p></div>
            <Link href={`/projects/${nextProject.slug}`}>
              {nextProject.name} <ArrowUpRightIcon size={30} />
            </Link>
          </div>
        </nav>

        <div className="pd-frame pd-return" data-reveal>
          <Link href="/#work">
            <ArrowLeftIcon /> Return to all selected work
          </Link>
        </div>
      </main>
    </>
  );
}
