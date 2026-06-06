import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
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
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Link to="/contact" className="header-cta">
        Start Here
      </Link>
    </header>
  );
}
