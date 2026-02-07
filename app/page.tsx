const projects = [
  {
    title: "HQ Tooling Platform",
    summary:
      "Built an internal command-center for tool orchestration and process control.",
    result: "Cut onboarding setup time by 42% for new contributors.",
    links: [
      { label: "Case Study", href: "#" },
      { label: "Source", href: "#" }
    ]
  },
  {
    title: "Jobber Automation",
    summary:
      "Created browser-side job data extraction and workflow automation modules.",
    result: "Reduced manual triage effort by 8+ hours per week.",
    links: [
      { label: "Demo", href: "#" },
      { label: "Source", href: "#" }
    ]
  },
  {
    title: "Microtools Lab",
    summary:
      "Designed and shipped rapid utility tools with tight user-feedback loops.",
    result: "Launched from idea to production in under 48 hours per tool.",
    links: [{ label: "futuretool.dimy.dev", href: "https://futuretool.dimy.dev" }]
  }
];

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "Automation",
  "Product Design",
  "Vercel + Cloudflare"
];

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dimitris",
    alternateName: "dimydev",
    url: "https://dimy.dev",
    sameAs: ["https://x.com/dimydev"],
    jobTitle: "Product Engineer"
  };

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Dimitris @dimydev</p>
        <h1>I build useful web products with speed and taste.</h1>
        <p className="hero-copy">
          Product-focused engineer shipping practical tools, polished interfaces,
          and fast iterations from idea to launch.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="mailto:hello@dimy.dev" className="btn btn-ghost">
            Contact Me
          </a>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Selected Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="result">{project.result}</p>
              <div className="project-links">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>About</h2>
          <p>
            I care about building products people actually use. My workflow
            blends engineering, UX decisions, and quick validation with real
            users.
          </p>
          <p>
            I share experiments on X and ship microtools at{" "}
            <a href="https://futuretool.dimy.dev">futuretool.dimy.dev</a>.
          </p>
        </div>
        <div>
          <h2>Stack</h2>
          <ul className="chips">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Let&apos;s build something useful.</h2>
        <p>
          Open to collaborations, contract builds, and product partnerships.
        </p>
        <div className="hero-actions">
          <a href="mailto:hello@dimy.dev" className="btn btn-primary">
            hello@dimy.dev
          </a>
          <a href="https://x.com/dimydev" className="btn btn-ghost">
            DM on X
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Dimitris</span>
        <a href="https://futuretool.dimy.dev">Labs</a>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </main>
  );
}
