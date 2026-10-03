import Link from "next/link";
import Github from "./component/github/page";
import ScrollToTop from "./component/ScrollToTop";
import ContactForm from "./component/ContactForm";
import { experiences } from "./lib/experience";
import { projects } from "./lib/projects";
import { siteConfig } from "./lib/site";
import "./portfolio.css";

const selectedProjects = projects.slice(0, 4);

const capabilities = [
  {
    number: "01",
    title: "Product engineering",
    text: "Full-stack products shaped from a clear user problem through architecture, interface, and deployment.",
    tools: "Next.js / React / Node.js / MySQL",
  },
  {
    number: "02",
    title: "Interface systems",
    text: "Accessible, responsive interfaces and component systems built to stay coherent as products grow.",
    tools: "TypeScript / Tailwind / Design systems",
  },
  {
    number: "03",
    title: "Mobile experiences",
    text: "Focused cross-platform apps that translate complex workflows into simple, dependable interactions.",
    tools: "Flutter / Dart / Firebase",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      {diagonal ? (
        <path d="M7 17 17 7M8 7h9v9" />
      ) : (
        <path d="M5 12h14m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <main className="portfolio-main">
      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="page-frame hero-inner">
          <div className="hero-kicker reveal reveal-1">
            <span className="status-dot" />
            Available for selected projects
          </div>

          <div className="hero-heading reveal reveal-2">
            <p className="hero-index">01 / 06</p>
            <h1>
              I build digital products
              <span>that earn attention.</span>
            </h1>
          </div>

          <div className="hero-bottom reveal reveal-3">
            <p className="hero-intro">
              Elkanah Cole is a product-minded software developer creating
              useful, refined web and mobile experiences from Freetown to the
              world.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#work">
                Explore selected work <Arrow />
              </Link>
              <Link className="text-link" href="#message">
                Start a conversation <Arrow diagonal />
              </Link>
            </div>
          </div>

          <div className="hero-foot reveal reveal-4">
            <span>UI / Full-stack / Mobile</span>
            <span className="hero-scroll">Scroll to explore <i /></span>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="page-frame">
          <header className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">Selected work</span>
              <h2>Projects with purpose.</h2>
            </div>
            <p>
              A selection of platforms, tools, and product systems built for
              real people and practical outcomes.
            </p>
          </header>

          <div className="work-list">
            {selectedProjects.map((project, index) => (
              <article className="work-card" key={project.id} data-reveal data-reveal-delay={index % 2}>
                <Link
                  className="work-visual"
                  href={`/projects/${project.slug}`}
                  style={{ "--project-color": project.color } as React.CSSProperties}
                  aria-label={`View ${project.name} case study`}
                >
                  <span className="work-number">0{index + 1}</span>
                  <div className="work-mark" aria-hidden="true">
                    <span>{project.name.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <span className="work-open"><Arrow diagonal /></span>
                </Link>
                <div className="work-copy">
                  <div className="work-meta">
                    <span>{project.category.replace("fullstack", "Full stack")}</span>
                    <span>{project.dateStarted.slice(0, 4)}</span>
                  </div>
                  <h3><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a className="button button-outline all-work" href={siteConfig.github} target="_blank" rel="noreferrer">
            View all work on GitHub <Arrow diagonal />
          </a>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="page-frame about-grid">
          <div className="about-sticky">
            <span className="eyebrow">About / Approach</span>
            <p className="section-index">02</p>
          </div>
          <div className="about-content" data-reveal>
            <h2>Engineering clarity into every interaction.</h2>
            <div className="about-columns">
              <p>
                I&apos;m a full-stack developer who cares equally about how a
                product works and how it feels. My process starts with the
                problem, not the framework, and moves deliberately from rough
                idea to dependable software.
              </p>
              <p>
                I work across interface design, frontend architecture,
                backends, and mobile apps. The goal is always the same: make
                complex things feel direct, accessible, and worth using.
              </p>
            </div>
            <div className="about-stats">
              <div><strong>50+</strong><span>Projects delivered</span></div>
              <div><strong>3+</strong><span>Years building</span></div>
              <div><strong>9+</strong><span>Core technologies</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section capabilities-section" id="skills">
        <div className="page-frame">
          <header className="section-heading compact" data-reveal>
            <div>
              <span className="eyebrow">Capabilities</span>
              <h2>How I can help.</h2>
            </div>
            <p>Focused expertise for taking a useful idea from concept to a production-ready experience.</p>
          </header>
          <div className="capability-list">
            {capabilities.map((item) => (
              <article className="capability" key={item.number} data-reveal data-reveal-delay={Number(item.number) - 1}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.tools}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="page-frame experience-grid">
          <header data-reveal>
            <span className="eyebrow">Experience</span>
            <h2>Built through practice.</h2>
          </header>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article key={experience.id} data-reveal>
                <div className="experience-topline">
                  <span>{experience.startDate.slice(0, 4)} - {experience.endDate?.slice(0, 4) ?? "Now"}</span>
                  <span>{experience.location}</span>
                </div>
                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>
                <p>{experience.description}</p>
                <ul>
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </article>
            ))}
            <article className="education-row" data-reveal>
              <div className="experience-topline"><span>2023 - Now</span><span>Education</span></div>
              <h3>Software Engineering</h3>
              <h4>College of Digital Excellence (CODE)</h4>
            </article>
          </div>
        </div>
      </section>

      <section className="section github-section" id="github">
        <Github />
      </section>

      <section className="section message-section" id="message">
        <div className="page-frame message-grid" data-reveal>
          <div className="message-intro">
            <span className="eyebrow">Start a conversation</span>
            <h2>Tell me what you&apos;re building.</h2>
            <p>Your name and email are required so I can get back to you. Share as much context as you can.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="page-frame contact-inner" data-reveal>
          <span className="eyebrow">Have something in mind?</span>
          <h2>Let&apos;s build something<br />worth remembering.</h2>
          <a className="contact-email" href="mailto:festinacole373@example.com">
            festinacole373@example.com <Arrow diagonal />
          </a>
          <div className="contact-footer">
            <p>Based in Freetown, Sierra Leone<br />Available worldwide</p>
            <div>
              <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={siteConfig.twitter} target="_blank" rel="noreferrer">X / Twitter</a>
              <Link href="/admin/login">Admin login</Link>
            </div>
            <p>© {new Date().getFullYear()} Elkanah Cole</p>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </main>
  );
}
