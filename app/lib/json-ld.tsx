import { siteConfig } from "./site";
import { projects } from "./projects";

function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    sameAs: [siteConfig.github, siteConfig.twitter],
   knowsAbout: siteConfig.keywords,
    alumniOf: {
      "@type": "Organization",
      name: "Self-Directed Learning",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };
}

function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}

function buildProjectSchemas() {
  return projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.description,
    url: project.repoLink || siteConfig.url,
    codeRepository: project.repoLink || undefined,
    programmingLanguage: project.techStack,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    dateCreated: project.dateStarted,
    dateModified: project.dateEnded || undefined,
    keywords: project.seo.keywords.join(", "),
    applicationCategory: project.category,
    license: "MIT",
  }));
}

export function JsonLd() {
  const personSchema = buildPersonSchema();
  const websiteSchema = buildWebsiteSchema();
  const projectSchemas = buildProjectSchemas();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {projectSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
