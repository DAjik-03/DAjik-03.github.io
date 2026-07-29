const projects = [
  {
    number: "01",
    category: "Service Operations / SQL",
    title: "Service Operations & SLA Performance Analytics",
    summary:
      "Modelled 60,000 synthetic service cases from six relational tables into a SQL Server star schema, then built a two-page Power BI decision dashboard and Excel controls.",
    evidence:
      "Found 173 overdue Billing cases, traced 172 to Payment Verification, and recommended process and routing controls before broad staffing. All 72 team-month backlog balances reconciled.",
    tools: ["SQL Server", "Power BI", "Excel", "Star Schema"],
    repo: "https://github.com/DAjik-03/service-operations-sla-analytics",
    image: "/service-operations-sla-dashboard.png",
    imageAlt:
      "Service operations dashboard preview showing Billing Operations root-cause metrics and Payment Verification backlog evidence",
    imageLabel: "SLA root-cause dashboard",
  },
  {
    number: "02",
    category: "Data Quality / Monitoring",
    title: "NZ Road Safety Data Quality & Monitoring Review",
    summary:
      "Validated 913,464 NZ road safety records and connected a reproducible DuckDB SQL handoff to a Power BI monitoring page.",
    evidence:
      "12 quality rules, 8 reporting views, exact R-SQL reconciliation, 12/12 release tests, and data-backed monitoring KPIs.",
    tools: ["SQL", "DuckDB", "Power BI", "Data Quality"],
    repo: "https://github.com/DAjik-03/nz-road-safety-data-quality-monitoring",
    image: "/road-safety-sql-monitoring.png",
    imageAlt:
      "Power BI SQL monitoring page with annual crash trends, quality-rule outcomes, and validation KPI cards",
    imageLabel: "SQL-connected Power BI",
  },
  {
    number: "03",
    category: "Public Sector / Reporting",
    title: "Justice Sector Reporting Scenario",
    summary:
      "A self-developed analyst scenario that turns raw data into a concise briefing, clear visuals, and decision-focused reporting insights.",
    evidence:
      "Demonstrates practical KPI interpretation, data cleaning, visual review, and stakeholder-ready communication.",
    tools: ["Power BI", "Excel", "KPI Reporting", "Briefing"],
    repo: "https://github.com/DAjik-03/justice-sector-reporting-scenario",
    image: "/justice-sector-power-bi.png",
    imageAlt:
      "Power BI briefing comparing public adult conviction-rate trends for Auckland and New Zealand",
    imageLabel: "Public-data Power BI brief",
  },
]

const capabilities = [
  {
    label: "Query & validate",
    title: "SQL + data modelling",
    text: "Joining operational sources, defining reliable metrics, and shaping star schemas so reporting starts from a controlled base.",
  },
  {
    label: "Build & explain",
    title: "Power BI + Excel",
    text: "Creating practical dashboards, recurring reports, and tracking views that make key movements easier to understand.",
  },
  {
    label: "Hand over clearly",
    title: "Documentation",
    text: "Writing assumptions, caveats, and process notes so non-technical users can trust and continue the work.",
  },
]

function ProjectCard({ project }) {
  return (
    <a
      className="project-card"
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title} GitHub repository`}
    >
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
      </div>

      {project.image && (
        <div className="project-visual">
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
          <span>{project.imageLabel}</span>
        </div>
      )}

      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <p className="project-evidence">{project.evidence}</p>

      <ul className="tool-list" aria-label="Tools and focus areas">
        {project.tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>

      <span className="project-link">
        View project on GitHub <span aria-hidden="true">↗</span>
      </span>
    </a>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Wonjik Kim - back to top">
          <span className="brand-mark" aria-hidden="true">WK</span>
          <span>
            <strong>Wonjik Kim</strong>
            <small>Reporting / Data Analyst</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Skills</a>
          <a className="nav-contact" href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Wellington, New Zealand · Open to opportunities</p>
            <h1 id="hero-title">
              I turn raw data into
              <span> clear, reliable reporting.</span>
            </h1>
            <p className="hero-intro">
              Graduate reporting and data analyst focused on SQL, Power BI,
              Excel, and operational analytics. I build practical reporting
              outputs and explain findings clearly to the people who use them.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work
              </a>
              <a
                className="button button-secondary"
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View CV <span aria-hidden="true">↗</span>
              </a>
            </div>

            <dl className="hero-facts" aria-label="Candidate highlights">
              <div>
                <dt>Core tools</dt>
                <dd>SQL · Power BI · Excel</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Operations · BI · Data quality</dd>
              </div>
              <div>
                <dt>Work status</dt>
                <dd>Full NZ work rights</dd>
              </div>
            </dl>
          </div>

          <aside className="profile-card" aria-label="About Wonjik Kim">
            <div className="profile-image-wrap">
              <img src="/profile.jpeg" alt="Wonjik Kim" className="profile-image" />
              <span className="availability-badge">
                <span aria-hidden="true"></span> Available for full-time roles
              </span>
            </div>

            <div className="profile-copy">
              <p className="section-label">Candidate snapshot</p>
              <h2>Careful with the data. Clear with the story.</h2>
              <p>
                Recent New Zealand Data Science graduate with hands-on project
                experience in relational modelling, validation, dashboards,
                KPI reporting, and stakeholder-friendly documentation.
              </p>
              <div className="profile-links">
                <a href="https://github.com/DAjik-03" target="_blank" rel="noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a href="https://www.linkedin.com/in/wonjikkim" target="_blank" rel="noreferrer">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section id="projects" className="section projects-section" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="section-label">Selected work</p>
              <h2 id="projects-title">Projects built for real reporting needs.</h2>
            </div>
            <p>
              Each project shows how I approach a different part of the analyst
              workflow: validating the source, shaping the reporting, and
              communicating what matters.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section" aria-labelledby="experience-title">
          <div className="section-heading compact-heading">
            <div>
              <p className="section-label">Experience</p>
              <h2 id="experience-title">Analysis grounded in practical work.</h2>
            </div>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-meta">
                <p>Mar 2025 - Nov 2025</p>
                <span>AUT × Nestlé</span>
              </div>
              <div className="timeline-content">
                <p className="role-type">Industry collaboration</p>
                <h3>Project Team Lead / Analyst</h3>
                <p>
                  Analysed product sales data, built Power BI reporting views,
                  and explained forecast movements to non-technical stakeholders.
                  Coordinated a three-person development stream within a
                  six-person team and maintained clear handover documentation.
                </p>
              </div>
            </article>

          </div>
        </section>

        <section id="capabilities" className="section capability-section" aria-labelledby="capabilities-title">
          <div className="section-heading compact-heading">
            <div>
              <p className="section-label">How I work</p>
              <h2 id="capabilities-title">Reliable analysis, useful outputs.</h2>
            </div>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.title}>
                <p>{capability.label}</p>
                <h3>{capability.title}</h3>
                <span>{capability.text}</span>
              </article>
            ))}
          </div>

          <div className="skills-line" aria-label="Additional tools">
            <span>Additional tools</span>
            <p>Python · R · GitHub · Quarto · Forecasting · Star-schema modelling</p>
          </div>
        </section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <div>
            <p className="section-label">Let&apos;s connect</p>
            <h2 id="contact-title">Looking for a thoughtful junior analyst?</h2>
            <p>
              I am open to full-time reporting, BI, data quality, and data
              analyst opportunities across New Zealand. No sponsorship required.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:dajik03@outlook.com">
              dajik03@outlook.com
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/wonjikkim"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Wonjik Kim</p>
        <p>Graduate Reporting / Data Analyst · Wellington, New Zealand</p>
      </footer>
    </div>
  )
}
