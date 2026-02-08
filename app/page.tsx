const projects = [
  {
    title: "HQ Tooling Platform",
    summary:
      "Built an internal command-center for tool orchestration and process control.",
    links: [
      { label: "Case Study", href: "#" },
      { label: "Source", href: "#" }
    ]
  },
  {
    title: "Jobber Automation",
    summary:
      "Created browser-side job data extraction and workflow automation modules.",
    links: [
      { label: "Demo", href: "#" },
      { label: "Source", href: "#" }
    ]
  },
  {
    title: "Microtools Lab",
    summary:
      "Designed and shipped rapid utility tools with tight user-feedback loops.",
    links: [{ label: "futuretool.dimy.dev", href: "https://futuretool.dimy.dev" }]
  }
];

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dimitris",
    alternateName: "dimydev",
    url: "https://dimy.dev",
    sameAs: ["https://github.com/dimydev", "https://linkedin.com/in/dimydev"],
    jobTitle: "Product Engineer"
  };

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="profile-header">
          <div className="profile-photo" aria-hidden />
          <div>
            <p className="eyebrow">Product Engineer</p>
            <h1>Dimitris</h1>
          </div>
        </div>
        <p className="hero-copy">
          I build practical web products with a focus on speed, clarity, and
          useful outcomes.
        </p>
        <div className="profile-links">
          <a href="https://github.com/dimydev" className="btn btn-ghost">
            GitHub
          </a>
          <a href="https://linkedin.com/in/dimydev" className="btn btn-ghost">
            LinkedIn
          </a>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </main>
  );
}
