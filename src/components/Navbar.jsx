import { PORTFOLIO } from '../config';

const links = [
  { href: '#hero',      label: 'Home' },
  { href: '#skills',    label: 'Skills' },
  { href: '#projects',  label: 'Projects' },
  { href: '#prizes',    label: 'Awards' },
  { href: '#certs',     label: 'Certs' },
  { href: '#hobbies',   label: 'Hobbies' },
  { href: '#education', label: 'Education' },
  { href: '#contact',   label: 'Contact' },
];

export default function Navbar() {
  const initials = PORTFOLIO.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <nav>
      <div className="nav-logo">{initials}</div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
