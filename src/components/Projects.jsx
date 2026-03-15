import { PORTFOLIO } from '../config';

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {PORTFOLIO.projects.map((project, i) => (
          <div
            className="project-card"
            key={i}
            style={{ '--accent-color': project.color, animationDelay: `${i * 0.1}s` }}
          >
            {/* top glow line */}
            <div className="project-top-line" style={{ background: project.color }} />

            <div className="project-icon">{project.icon}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map(t => (
                <span className="tech-tag" key={t} style={{ borderColor: project.color + '55', color: project.color }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
