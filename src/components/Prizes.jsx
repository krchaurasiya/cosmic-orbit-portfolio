import { PORTFOLIO } from '../config';

export default function Prizes() {
  return (
    <section id="prizes">
      <h2 className="section-title">Prizes &amp; Awards</h2>
      <div className="prizes-grid">
        {PORTFOLIO.prizes.map((prize, i) => (
          <div
            className="prize-card"
            key={i}
            style={{
              '--float-dur':   `${3.5 + i * 0.7}s`,
              '--float-delay': `${i * 0.4}s`,
            }}
          >
            <span className="prize-icon">{prize.icon}</span>
            <div className="prize-title">{prize.title}</div>
            <div className="prize-event">{prize.event}</div>
            <div className="prize-year">{prize.year}</div>
            <div className="prize-desc">{prize.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
