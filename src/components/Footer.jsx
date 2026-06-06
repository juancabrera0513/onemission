import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>Helping people of all ages grow into the strongest, most empowered version of themselves.</h2>
        </div>

        <div className="footer-links">
          <Link to="/metabolic-reset">A Life of Style</Link>
          <Link to="/the-overcomers">The Overcomers</Link>
          <Link to="/about">About Stacey</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
