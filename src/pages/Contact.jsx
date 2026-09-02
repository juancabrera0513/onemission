import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { assets, links } from "../data/content";

const EMAILJS_SERVICE_ID = "service_vgn4uus";
const EMAILJS_TEMPLATE_ID = "template_f5cokgn";
const EMAILJS_PUBLIC_KEY = "yeWDJPhbNnW95gXML";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    setFormStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <>
      <section className="contact-hero">
        <div className="container narrow center">
          <h1 className="contact-title">
            <span>Choose the path</span>
            <span>that fits your season.</span>
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
          <article className="contact-card contact-card--health">
            <p className="card-label">Metabolic Health Coaching</p>
            <div className="contact-card-logo">
              <img src={assets.alifeLogo} alt="A Life of Style logo" />
            </div>
            <p>Let’s reset your metabolism:</p>

            <div className="button-column">
              <a
                href={links.preCallAssessment}
                target="_blank"
                rel="noreferrer"
                className="btn btn-precall"
              >
                Pre-Call Assessment
              </a>

              <a
                href={links.metabolicScan}
                target="_blank"
                rel="noreferrer"
                className="btn btn-metabolic"
              >
                Metabolic Scan
              </a>
            </div>
          </article>

          <aside className="contact-connect-card" aria-labelledby="contact-form-title">
            <p className="card-label">General Inquiries</p>
            <h2 id="contact-form-title">Let’s start a conversation.</h2>
            <p className="contact-connect-copy">
              For health coaching questions, author appearances, or book readings.
            </p>

            <form
              className="contact-form"
              data-emailjs-ready="true"
              onSubmit={handleSubmit}
            >
              <label htmlFor="contact-name">
                Name
                <input
                  id="contact-name"
                  name="from_name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </label>

              <label htmlFor="contact-email">
                Email
                <input
                  id="contact-email"
                  name="reply_to"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>

              <label htmlFor="contact-interest">
                I’m interested in
                <select id="contact-interest" name="inquiry_type" defaultValue="" required>
                  <option value="" disabled>Choose one</option>
                  <option value="Health coaching">Health coaching</option>
                  <option value="Author appearance">Author appearance</option>
                  <option value="Book reading">Book reading</option>
                  <option value="General question">General question</option>
                </select>
              </label>

              <label htmlFor="contact-message">
                Message
                <textarea id="contact-message" name="message" rows="4" required />
              </label>

              <button
                type="submit"
                className="btn btn-precall contact-submit"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Let’s Connect"}
              </button>

              <div className="contact-form-feedback" aria-live="polite">
                {formStatus === "success" && (
                  <p className="contact-form-feedback--success">
                    Thank you! Your message is on its way.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="contact-form-feedback--error">
                    We couldn’t send your message. Please try again in a moment.
                  </p>
                )}
              </div>
            </form>
          </aside>

          <article className="contact-card contact-card--books">
            <p className="card-label">Children’s Books</p>
            <div className="contact-card-logo contact-card-logo-books">
              <img src={assets.overcomersLogo} alt="The Overcomers logo" />
            </div>
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

              <a
                href={links.flippyColoringBook}
                target="_blank"
                rel="noreferrer"
                className="btn btn-metabolic"
              >
                The Coloring Book
              </a>

              <Link to="/the-overcomers" className="btn btn-tertiary">
                Learn About The Books
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
