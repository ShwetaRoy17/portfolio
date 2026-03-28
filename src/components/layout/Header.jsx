import { navLinks, profile } from "../../data/data";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <a href="#hero" className="n-logo">
          {profile.name}
        </a>

        <ul className="n-links">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <a href={`mailto:${profile.email}`} className="n-cta">
          Hire Me
        </a>
      </nav>
    </header>
  );
}
