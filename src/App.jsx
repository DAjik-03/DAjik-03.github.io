export default function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <div className="brand-wrap">
          <div className="brand-mark">WK</div>
          <div className="brand-text">
            <span className="brand-name">Wonjik Kim</span>
            <span className="brand-role">Analyst Portfolio</span>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about" className="section hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Wellington-based / Data / Reporting / BI</p>

              <h1>
                Turning data into
                <br />
                clear reporting and
                <br />
                practical insight
              </h1>

              <p className="hero-text">
                Recent Data Science graduate focused on reporting, dashboards,
                data quality, and stakeholder-friendly analysis using SQL,
                Power BI, Excel, and structured documentation.
              </p>

              <div className="hero-tags">
                <span>SQL</span>
                <span>Power BI</span>
                <span>Excel</span>
                <span>Data Quality</span>
                <span>Reporting</span>
              </div>
<div className="hero-actions">
  <a
    href="/cv.pdf"
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

            <div className="hero-panel">
              <div className="summary-card large">
                <p className="summary-label">PROFILE</p>
                <h3>Junior Analyst positioning</h3>
                <p>
                  Wellington-based graduate with practical strengths in reporting,
                  dashboard thinking, data quality review, and translating analysis
                  into clear business-facing output.
                </p>
              </div>

              <div className="mini-card-grid">
                <article className="summary-card">
                  <p className="summary-label">FOCUS</p>
                  <h3>Reporting</h3>
                  <p>Decision support, KPI thinking, recurring reporting structure</p>
                </article>

                <article className="summary-card">
                  <p className="summary-label">TOOLS</p>
                  <h3>BI Stack</h3>
                  <p>SQL, Power BI, Excel, and documentation-first workflow</p>
                </article>

                <article className="summary-card">
                  <p className="summary-label">STRENGTH</p>
                  <h3>Clarity</h3>
                  <p>Translate data into plain English for non-technical stakeholders</p>
                </article>

                <article className="summary-card">
                  <p className="summary-label">MINDSET</p>
                  <h3>Quality</h3>
                  <p>Structured checks, reliable outputs, and careful analysis logic</p>
                </article>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <span>Analyst Snapshot</span>
                  <span className="chart-badge">Portfolio View</span>
                </div>

                <div className="chart-area">
                  <div className="chart-grid-lines"></div>
                  <div className="chart-line">
                    <span className="dot dot-1"></span>
                    <span className="dot dot-2"></span>
                    <span className="dot dot-3"></span>
                    <span className="dot dot-4"></span>
                    <span className="dot dot-5"></span>
                  </div>
                </div>

                <div className="chart-footer">
                  <span>Reporting</span>
                  <span>Dashboarding</span>
                  <span>Data Quality</span>
                  <span>Communication</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="section-kicker">Background</p>
            <h2>Experience</h2>
          </div>

          <div className="card-grid">
            <article className="card">
              <p className="card-label">Industry Collaboration</p>
              <h3>AUT × Nestlé project</h3>
              <p>
                Worked on an academic-industry collaboration project, contributing
                to structured analysis, business-facing thinking, and clear project
                communication.
              </p>
            </article>

            <article className="card">
              <p className="card-label">Operations Support</p>
              <h3>Reservations &amp; inventory assistant</h3>
              <p>
                Seasonal operational experience involving tracking, coordination,
                accuracy checks, and handling day-to-day booking and inventory detail.
              </p>
            </article>

            <article className="card">
              <p className="card-label">Customer-facing Work</p>
              <h3>Front-of-house experience</h3>
              <p>
                Built practical communication skills, responsiveness, and confidence
                working with different people in fast-moving environments.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="section-kicker">Portfolio</p>
            <h2>Projects</h2>
          </div>

          <div className="card-grid">
            <article className="card">
              <p className="card-label">Power BI</p>
              <h3>Forecasting dashboard</h3>
              <p>
                Built a reporting-focused dashboard designed to present trends,
                summaries, and key information clearly for quick review and decision
                support.
              </p>
            </article>

            <article className="card">
              <p className="card-label">Data Quality</p>
              <h3>NZ road safety data quality monitoring</h3>
              <p>
                Focused on checking completeness, consistency, and reliability before
                deeper analysis, with the goal of surfacing data issues early.
              </p>
            </article>

            <article className="card">
              <p className="card-label">Reporting Design</p>
              <h3>Monthly reporting system project</h3>
              <p>
                Designed a realistic reporting workflow around KPI tracking,
                exception handling, documentation, and stakeholder-friendly output.
              </p>
            </article>
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
                Strongest day-to-day toolset for reporting, dashboarding, and practical
                analyst work.
              </p>
            </article>

            <article className="card">
              <p className="card-label">Analysis Style</p>
              <h3>Reporting / Dashboarding / QA</h3>
              <p>
                Focused on clarity, usability, validation, and outputs that are easy
                for others to review quickly.
              </p>
            </article>

            <article className="card">
              <p className="card-label">Working Style</p>
              <h3>Documentation / Communication</h3>
              <p>
                Structured written thinking, careful logic, and clear communication
                with non-technical stakeholders.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-heading">
            <p className="section-kicker">Connect</p>
            <h2>Contact</h2>
          </div>

          <div className="card contact-card">
            <p>
              <strong>Location:</strong> Wellington, New Zealand
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/wonjikkim"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/wonjikkim
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/DAjik-03"
                target="_blank"
                rel="noreferrer"
              >
                github.com/DAjik-03
              </a>
            </p>
            <p>
              <strong>Project Repo:</strong>{" "}
              <a
                href="https://github.com/DAjik-03/nz-road-safety-data-quality-monitoring"
                target="_blank"
                rel="noreferrer"
              >
                nz-road-safety-data-quality-monitoring
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:dajik03@outlook.com">dajik03@outlook.com</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}