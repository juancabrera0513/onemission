import { Link } from "react-router-dom";
import { assets } from "../data/content";

export default function About() {
  return (
    <>
      <section className="about-hero-new">
        <div className="container about-hero-new-grid">
          <div className="about-hero-new-copy">
            <h1>
              About <span>Stacey</span>
            </h1>

            <p className="hero-text">
              Metabolic Health Coaching, storytelling, and creative strategy.
            </p>
          </div>

          <div className="about-hero-new-images">
            <img
              src={assets.staceyAboutPortrait}
              alt="Stacey smiling outside her home"
              className="about-hero-portrait"
              width="1537"
              height="1023"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-heading">
            <h2>
              Heart-led <span>transformation</span>
            </h2>
          </div>

          <div className="about-story-card">
            <p>
              Stacey is a metabolic health coach, storyteller, and creative
              strategist who believes in the power of heart-led transformation.
              With a background in health and wellness, English Literature, and
              a gift for hearing the story under the surface, she brings a
              unique and effective perspective to holistic health.
            </p>

            <p>
              Whether guiding clients toward whole-life wellness or drafting
              stories that spark connection and self-empowerment in her
              children’s book series, The Overcomers, Stacey’s work reflects her
              deep commitment to helping others thrive.
            </p>

            <p>
              Living in St. Louis with her retired Air Force husband and her
              beloved Son, she coaches, writes, and dreams about helping people
              of all ages grow into the strongest, most empowered version of
              themselves.
            </p>
          </div>
        </div>
      </section>

      <section className="about-paths-section">
        <div className="container">
          <div className="section-heading center">
            <h2 className="about-paths-title">
              <span>Two avenues. One mission.</span>
              <span>Helping people grow.</span>
            </h2>
          </div>

          <div className="choice-grid">
            <Link to="/metabolic-reset" className="choice-card choice-health">
              <p className="card-label">Metabolic Health Coaching</p>
              <div className="choice-logo-box">
                <img src={assets.alifeLogo} alt="A Life of Style logo" />
              </div>

              <span className="choice-link">Explore Metabolic Coaching</span>
            </Link>

            <Link to="/the-overcomers" className="choice-card choice-books">
              <p className="card-label">Children’s Books</p>
              <div className="choice-logo-box wide">
                <img src={assets.overcomersLogo} alt="The Overcomers logo" />
              </div>

              <span className="choice-link">Explore The Books</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
