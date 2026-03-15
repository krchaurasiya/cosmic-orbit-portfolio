import { PORTFOLIO } from '../config';

const ICONS = {
  email:    '✉',
  github:   '⌥',
  linkedin: 'in',
  twitter:  '✕',
};

const LABELS = {
  email:    'Email',
  github:   'GitHub',
  linkedin: 'LinkedIn',
  twitter:  'Twitter',
};

export default function Contact() {
  const { contact } = PORTFOLIO;

  const links = Object.entries(contact).filter(([, v]) => v);

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <p style={{ color: 'var(--text-dim)', letterSpacing: '1px', fontSize: '1.05rem' }}>
        Let's connect — reach out through any of these channels.
      </p>
      <div className="contact-links">
        {links.map(([key, href]) => (
          <a
            key={key}
            className="contact-link"
            href={key === 'email' ? `mailto:${href}` : href}
            target={key !== 'email' ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{ICONS[key]}</span>
            {LABELS[key]}
          </a>
        ))}
      </div>
    </section>
  );
}
