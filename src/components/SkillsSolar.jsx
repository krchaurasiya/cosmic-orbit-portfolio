import { useEffect, useRef } from 'react';
import { PORTFOLIO } from '../config';

export default function SkillsSolar() {
  const systemRef = useRef(null);

  useEffect(() => {
    const system = systemRef.current;
    if (!system) return;

    const skills   = PORTFOLIO.skills;
    const count    = skills.length;
    const isMobile = window.innerWidth < 768;
    const maxR     = isMobile ? 130 : 290; // max orbit radius from center
    const minR     = isMobile ? 45  : 90;  // min orbit radius

    const wrappers = system.querySelectorAll('.planet-wrapper');
    const orbitPaths = system.querySelectorAll('.orbit-path');

    // Set orbit path sizes
    orbitPaths.forEach((p, i) => {
      const r = minR + ((maxR - minR) / Math.max(count - 1, 1)) * i;
      const d = r * 2;
      p.style.width  = d + 'px';
      p.style.height = d + 'px';
    });

    const animations = [];

    wrappers.forEach((wrapper, i) => {
      const skill   = skills[i];
      const r       = minR + ((maxR - minR) / Math.max(count - 1, 1)) * i;
      const size    = isMobile ? (8 + skill.level * 1.8) : (12 + skill.level * 2.4);
      const planet  = wrapper.querySelector('.planet');
      const speed   = 0.0006 + (count - i) * 0.00015; // outer = slower
      let angle     = (i / count) * Math.PI * 2;

      planet.style.width        = size + 'px';
      planet.style.height       = size + 'px';
      planet.style.marginLeft   = (-size / 2) + 'px';
      planet.style.marginTop    = (-size / 2) + 'px';
      planet.style.background   = skill.color;
      planet.style.boxShadow    = `0 0 ${size}px ${skill.color}, 0 0 ${size * 2}px ${skill.color}55`;

      let lastTs = null;
      function tick(ts) {
        if (lastTs === null) lastTs = ts;
        const dt = ts - lastTs;
        lastTs = ts;
        angle += speed * dt;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        planet.style.transform = `translate(${x}px, ${y}px)`;
        animations[i] = requestAnimationFrame(tick);
      }
      animations[i] = requestAnimationFrame(tick);
    });

    return () => animations.forEach(id => cancelAnimationFrame(id));
  }, []);

  const skills = PORTFOLIO.skills;

  return (
    <section id="skills">
      <h2 className="section-title">Skill Solar System</h2>

      <div className="solar-system" ref={systemRef}>
        {/* Center sun */}
        <div className="solar-center">YOU</div>

        {/* Orbit path rings */}
        {skills.map((_, i) => (
          <div className="orbit-path" key={`path-${i}`} />
        ))}

        {/* Planets */}
        {skills.map((skill, i) => (
          <div className="planet-wrapper" key={skill.name}>
            <div className="planet">
              <div className="planet-label">{skill.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
