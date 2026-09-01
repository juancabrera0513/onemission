import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="contact-hero">
      <div className="container narrow center">
        <p className="card-label">404</p>
        <h1>That page wandered off.</h1>
        <p className="hero-text">
          Let’s get you back to One Big Mission.
        </p>
        <Link to="/" className="btn btn-outline-dark">
          Return Home
        </Link>
      </div>
    </section>
  );
}
