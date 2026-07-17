const projects = [
  {
    id: "road-safety",
    label: "Data Quality / Monitoring",
    title: "NZ Road Safety Data Quality & Monitoring Review",
    summary:
      "Validation-led project using NZ road safety data to check completeness, consistency, and reliability before producing monitoring-style reporting outputs.",
    tools:
      "SQL-style validation logic, Excel, Power BI / reporting view, GitHub documentation",
    focus:
      "Data quality, completeness checks, consistency review, monitoring, reporting caveats",
    why:
      "Shows that I can check data carefully before creating insights, document limitations, and prepare clearer reporting outputs for non-technical users.",
    repo:
      "https://github.com/DAjik-03/nz-road-safety-data-quality-monitoring",
  },
  {
    id: "nestle",
    label: "Forecasting / KPI Reporting",
    title: "AUT × Nestlé Forecasting KPI Reporting Project",
    summary:
      "Academic-industry collaboration focused on forecasting KPI reporting, Power BI-based assumptions, and clear handover documentation. Confidential business details are removed.",
    tools: "Power BI, Excel, forecasting assumptions, documentation",
    focus:
      "KPI reporting, forecasting logic, business-facing reporting, handover material",
    why:
      "Shows that I can work with structured reporting logic, explain assumptions, and prepare documentation that others can understand and continue using.",
    detail:
      "In this team project, I focused on Power BI prototyping and helped connect forecasting outputs to an interactive reporting workflow. I also supported data-loading checks and clear project communication. Product-level data, internal figures, and client files are not shown.",
  },
  {
    id: "justice",
    label: "Public Sector / Reporting Scenario",
    title: "Justice Sector Reporting Scenario Project",
    summary:
      "Self-developed reporting project extended from a public-sector style analyst scenario. Focused on turning raw data into a short briefing, clear visuals, and practical reporting insights.",
    tools: "Power BI, Excel, data cleaning, briefing documentation",
    focus:
      "Public-sector reporting, KPI interpretation, visual summary, stakeholder briefing",
    why:
      "Shows that I can prepare a clear analyst-style output under realistic reporting conditions and communicate findings in a simple, decision-focused way.",
    detail:
      "This is a self-developed portfolio scenario, not professional employment. The work is structured around the type of concise reporting, visual review, and plain-English briefing expected in a public-sector analyst setting.",
  },
]

function ProjectCard({ project }) {
  return (
    <article className="project-card" id={`${project.id}-project`}>
      <p className="card-label">{project.label}</p>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>

      <div className="project-meta">
        <p>
          <span>Tools</span>
          {project.tools}
        </p>
        <p>
          <span>Focus</span>
          {project.focus}
        </p>
      </div>

      <p className="project-why">
        <span>Why it matters</span>
        {project.why}
      </p>

      <div className="project-actions">
        {project.repo ? (
          <a
            className="small-button"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        ) : (
          <details className="project-detail">
            <summary className="small-button secondary">View Summary</summary>
            <p>{project.detail}</p>
          </details>
        )}
      </div>
    </article>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand-wrap" href="#about" aria-label="Wonjik Kim — back to top">
          <div className="brand-mark" aria-hidden="true">WK</div>
          <div className="brand-text">
            <span className="brand-name">Wonjik Kim</span>
            <span className="brand-role">Junior Analyst Portfolio</span>
          </div>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about" className="section hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="profile-photo-wrap">
                <img
                  src="/profile.jpeg"
                  alt="Wonjik Kim"
                  className="profile-photo"
                />
              </div>

              <p className="eyebrow">
                Wellington-based / Junior Data / Reporting / BI
              </p>

              <h1>
                Junior data analyst
                <br />
                focused on reporting,
                <br />
                dashboards and data quality
              </h1>

              <p className="hero-text">
                Recent Data Science graduate targeting junior Data Analyst,
                Reporting Analyst, BI Analyst, Data Quality Analyst, and Data
                Specialist roles. Strongest tools: SQL, Power BI, and Excel.
                Full-time work rights in New Zealand. No sponsorship required.
              </p>

              <div className="hero-tags" aria-label="Core skills">
                <span>SQL</span>
                <span>Power BI</span>
                <span>Excel</span>
                <span>Data Quality</span>
                <span>Reporting</span>
                <span>Documentation</span>
              </div>

              <div className="hero-actions">
                <a
                  href="/cv.pdf?v=3"
                  className="hero-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  View CV
                </a>
                <a href="#projects" className="hero-button secondary">
                  See Projects
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Candidate summary">
              <div className="summary-card large">
                <p className="summary-label">RECRUITER SNAPSHOT</p>
                <h2>Ready for junior data and reporting work</h2>
                <p>
                  Practical project evidence in validation, dashboards, KPI
                  reporting, and documentation for non-technical users.
                </p>

                <dl className="snapshot-list">
                  <div>
                    <dt>Based</dt>
                    <dd>Wellington, New Zealand</dd>
                  </div>
                  <div>
                    <dt>Strongest tools</dt>
                    <dd>SQL, Power BI, Excel</dd>
                  </div>
                  <div>
                    <dt>Work status</dt>
                    <dd>Full-time NZ work rights</dd>
                  </div>
                  <div>
                    <dt>Sponsorship</dt>
                    <dd>Not required</dd>
                  </div>
                </dl>
              </div>

              <div className="mini-card-grid">
                <article className="summary-card">
                  <p className="summary-label">REPORTING</p>
                  <h3>KPI thinking</h3>
                  <p>Clear recurring outputs and practical decision support.</p>
                </article>

                <article className="summary-card">
                  <p className="summary-label">DATA QUALITY</p>
                  <h3>Check first</h3>
                  <p>Completeness, consistency, caveats, and reliable outputs.</p>
                </article>

                <article className="summary-card">
                  <p className="summary-label">DOCUMENTATION</p>
                  <h3>Easy handover</h3>
                  <p>Assumptions and limitations written for continued use.</p>
                </article>

                <article className="summary-card">
                  <p className="summary-label">COMMUNICATION</p>
                  <h3>Plain English</h3>
                  <p>Analysis translated for non-technical stakeholders.</p>
                </article>
              </div>
            </aside>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="section-kicker">Portfolio</p>
            <h2>Featured Projects</h2>
            <p className="section-intro">
              Project evidence in data quality, reporting, dashboards,
              documentation, and stakeholder-facing analysis.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="section-kicker">Capability</p>
            <h2>Skills</h2>
          </div>

          <div className="card-grid">
            <article className="card">
              <p className="card-label">Core Tools</p>
              <h3>SQL / Power BI / Excel</h3>
              <p>
                My strongest day-to-day tools for querying, validation,
                dashboard development, and practical reporting work.
              </p>
            </article>

            <article className="card">
              <p className="card-label">Analysis</p>
              <h3>Reporting / Dashboarding / Data QA</h3>
              <p>
                KPI interpretation, structured checks, clear visuals, and
                outputs that are easy for others to review.
              </p>
            </article>

            <article className="card">
              <p className="card-label">Additional Tools</p>
              <h3>Python / R / GitHub / Quarto</h3>
              <p>
                Supporting tools for analysis, version control, and documented
                project work when the task calls for them.
              </p>
            </article>

            <article className="card">
              <p className="card-label">Working Style</p>
              <h3>Documentation / Communication</h3>
              <p>
                Careful written logic, reporting caveats, and plain-English
                communication for non-technical stakeholders.
              </p>
            </article>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="section-kicker">Background</p>
            <h2>Experience</h2>
          </div>

          <div className="card-grid experience-grid">
            <article className="card">
              <p className="card-label">Academic-industry Collaboration</p>
              <h3>AUT × Nestlé project</h3>
              <p>
                Contributed to Power BI prototyping, forecasting-oriented
                reporting, data checks, documentation, and team communication
                in a structured academic project.
              </p>
            </article>

            <article className="card">
              <p className="card-label">Operations Support</p>
              <h3>Reservations &amp; inventory assistant</h3>
              <p>
                Seasonal operational work involving accurate tracking,
                coordination, customer communication, and day-to-day booking
                and inventory detail.
              </p>
            </article>

            <article className="card">
              <p className="card-label">Customer-facing Work</p>
              <h3>Front-of-house experience</h3>
              <p>
                Developed responsiveness, attention to detail, and confidence
                communicating with different people in fast-moving environments.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="section-kicker">Connect</p>
            <h2>Contact</h2>
            <p className="section-intro">
              Open to full-time junior data, reporting, BI, data quality, and
              data specialist opportunities in New Zealand.
            </p>
          </div>

          <div className="card contact-card">
            <div>
              <span>Location</span>
              <p>Wellington, New Zealand</p>
            </div>
            <div>
              <span>Work rights</span>
              <p>Full-time NZ work rights — no sponsorship required</p>
            </div>
            <div>
              <span>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/wonjikkim"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/wonjikkim
              </a>
            </div>
            <div>
              <span>GitHub</span>
              <a
                href="https://github.com/DAjik-03"
                target="_blank"
                rel="noreferrer"
              >
                github.com/DAjik-03
              </a>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:dajik03@outlook.com">dajik03@outlook.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Wonjik Kim · Junior Data / Reporting Analyst Portfolio</p>
      </footer>
    </div>
  )
}
