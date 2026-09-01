import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2>Helping people of all ages grow into the strongest, most empowered version of themselves.</h2>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/metabolic-reset">A Life of Style</Link>
            <Link to="/the-overcomers">The Overcomers</Link>
            <Link to="/about">About Stacey</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-credit">
          Website by{" "}
          <a href="https://domiwebsites.com/" target="_blank" rel="noreferrer">
            Domi Websites
          </a>
        </div>
      </div>
    </footer>
  );
}
