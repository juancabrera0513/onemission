import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideOnOptions, setHideOnOptions] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/hero-options") {
      return undefined;
    }

    const handleScroll = () => setHideOnOptions(window.scrollY > 48);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <header className={`header${location.pathname === "/hero-options" && hideOnOptions ? " header-hidden-on-options" : ""}`}>
      <Link to="/" className="brand">
        <span className="brand-icon">S</span>
        <span className="brand-text">
          <strong>Stacey</strong>
          <small>One Big Mission</small>
        </span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={`nav${menuOpen ? " nav-open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/metabolic-reset">A Life of Style</NavLink>
        <NavLink to="/the-overcomers">The Overcomers</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/hero-options">Hero Options</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Link to="/contact" className="header-cta">
        Start Here
      </Link>
    </header>
  );
}
