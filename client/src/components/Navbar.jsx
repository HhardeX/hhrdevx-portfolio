import { useScrollProgress, useActiveSection } from '../hooks/useScroll';

const NAV_IDS = ['home', 'about', 'projects', 'skills', 'contact'];

export default function Navbar() {
  const { scrolled } = useScrollProgress();
  const active = useActiveSection(NAV_IDS);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#home" className="nav-logo">HC<span>_</span></a>
      <ul className="nav-links">
        {NAV_IDS.map(id => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'active' : ''}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-status">
        <div className="status-dot" />
        <span>ONLINE // AHD-IN</span>
      </div>
    </nav>
  );
}
