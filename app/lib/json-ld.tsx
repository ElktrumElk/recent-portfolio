import { siteConfig } from "./site";
import { projects } from "./projects";

function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    sameAs: [siteConfig.github, siteConfig.twitter],
    knowsAbout: siteConfig.keywords,
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Freetown",
        addressCountry: "SL",
      },
    },
    workLocation: {
      "@type": "Place",
      name: siteConfig.location,
    },
    nationality: {
      "@type": "Country",
      name: "Sierra Leone",
    },
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
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    author: { "@id": `${siteConfig.url}/#person` },
    sameAs: [siteConfig.github, siteConfig.twitter],
  };
}

function buildProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profile`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    mainEntity: { "@id": `${siteConfig.url}/#person` },
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
  const profilePageSchema = buildProfilePageSchema();
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
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
