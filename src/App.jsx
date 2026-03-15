import './index.css';
import StarCanvas   from './components/StarCanvas';
import CustomCursor from './components/CustomCursor';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import SkillsSolar  from './components/SkillsSolar';
import Projects     from './components/Projects';
import Prizes       from './components/Prizes';
import Certificates from './components/Certificates';
import Hobbies      from './components/Hobbies';
import Education    from './components/Education';
import Contact      from './components/Contact';
import { PORTFOLIO } from './config';

export default function App() {
  return (
    <>
      {/* Layer 0 — fixed starfield */}
      <StarCanvas />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content — sits above the canvas */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <SkillsSolar />
        <Projects />
        <Prizes />
        <Certificates />
        <Hobbies />
        <Education />
        <Contact />
      </main>

      <footer>
        <span style={{ color: 'var(--primary)' }}>✦</span>
        &nbsp; {PORTFOLIO.name} &nbsp;
        <span style={{ color: 'var(--secondary)' }}>—</span>
        &nbsp; Gravity Defied Portfolio &nbsp;
        <span style={{ color: 'var(--accent)' }}>✦</span>
      </footer>
    </>
  );
}
