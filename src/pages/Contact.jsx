import { Link } from "react-router-dom";
import { links } from "../data/content";

export default function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="container narrow center">
          <h1>
            Choose the path that fits your season.
          </h1>

          <p className="hero-text">
            One Big Mission brings together metabolic health coaching and storytelling 
            to help people of all ages grow into the strongest, most empowered version 
            of themselves.
          </p>
        </div>
      </section>

      <section className="contact-options">
        <div className="container contact-grid">
          <article className="contact-card">
            <p className="card-label">Metabolic Reset Coach</p>
            <h2>A Life of Style</h2>
            <p>Let’s reset your metabolism:</p>

            <div className="button-column">
              <a
                href={links.preCallAssessment}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Pre-Call Assessment
              </a>

              <a
                href={links.metabolicScan}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark"
              >
                Metabolic Scan
              </a>
            </div>
          </article>

          <article className="contact-card">
            <p className="card-label">Children’s Books</p>
            <h2>The Overcomers</h2>
            <p>Perfect for ages 3–7, and for those young at heart.</p>

            <div className="button-column">
              <a
                href={links.flippyAmazon}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                View On Amazon
              </a>

              <Link to="/the-overcomers" className="btn btn-outline-pink">
                Learn About The Books
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
