import { PORTFOLIO } from '../config';

export default function Education() {
  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      <div className="edu-timeline">
        <div className="edu-line" />
        {PORTFOLIO.education.map((edu, i) => (
          <div className="edu-item" key={i}>
            <div className="edu-node" style={{ animationDelay: `${i * 0.4}s` }} />
            <div className="edu-content">
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-institution">{edu.institution}</div>
              <div className="edu-year">{edu.year}</div>
              <div className="edu-detail">{edu.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
