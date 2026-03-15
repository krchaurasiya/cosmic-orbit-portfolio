import { PORTFOLIO } from '../config';

export default function Hero() {
  const initials = PORTFOLIO.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="hero-section" id="hero">
      {/* Orbiting avatar */}
      <div className="hero-orbit-container">
        {/* Ring 1 - blue */}
        <div className="orbit-ring orbit-ring-1">
          <div className="orbit-dot" style={{ background: '#00d4ff', boxShadow: '0 0 10px #00d4ff' }} />
        </div>

        {/* Ring 2 - gold */}
        <div className="orbit-ring orbit-ring-2">
          <div className="orbit-dot" style={{ background: '#ffd700', boxShadow: '0 0 10px #ffd700' }} />
        </div>

        {/* Ring 3 - neon green */}
        <div className="orbit-ring orbit-ring-3">
          <div className="orbit-dot" style={{ background: '#39ff14', boxShadow: '0 0 10px #39ff14' }} />
        </div>

        {/* Avatar */}
        <div className="hero-avatar">
          {PORTFOLIO.avatarImage ? (
            <img src={PORTFOLIO.avatarImage} alt={PORTFOLIO.name} />
          ) : (
            initials
          )}
        </div>
      </div>

      {/* Name */}
      <h1 className="hero-name">{PORTFOLIO.name}</h1>

      {/* Title */}
      <p className="hero-title">{PORTFOLIO.title}</p>

      {/* Bio */}
      <p className="hero-bio">{PORTFOLIO.bio}</p>

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
