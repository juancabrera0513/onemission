import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = () => {
    setMenuOpen(false);

    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <Link to="/" className="brand" onClick={handleHomeClick}>
        <img
          className="brand-logo"
          src="/assets/one-big-mission/one-big-mission-header-transparent.png"
          alt="One Big Mission"
          width="1254"
          height="930"
          decoding="async"
        />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
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
        aria-label="Primary navigation"
        className={`nav${menuOpen ? " nav-open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <NavLink to="/" onClick={handleHomeClick}>Home</NavLink>
        <NavLink to="/metabolic-reset">A Life of Style</NavLink>
        <NavLink to="/the-overcomers">The Overcomers</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

    </header>
  );
}
