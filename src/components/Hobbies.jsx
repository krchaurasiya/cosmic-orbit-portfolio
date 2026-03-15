import { PORTFOLIO } from '../config';

export default function Hobbies() {
  return (
    <section id="hobbies">
      <h2 className="section-title">Hobbies &amp; Interests</h2>
      <div className="hobbies-space">
        {PORTFOLIO.hobbies.map((hobby, i) => (
          <div
            className="hobby-bubble"
            key={i}
            style={{
              '--dur':   `${3.5 + (i % 4) * 0.8}s`,
              '--delay': `${i * 0.3}s`,
            }}
          >
            <span className="hobby-icon">{hobby.icon}</span>
            <span className="hobby-name">{hobby.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
