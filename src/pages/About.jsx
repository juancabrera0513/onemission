import { Link } from "react-router-dom";
import { assets } from "../data/content";

export default function About() {
  return (
    <>
      <section className="about-hero-new">
        <div className="container about-hero-new-grid">
          <div className="about-hero-new-copy">
            <p className="eyebrow">Biography</p>
            <h1>
              About <span>Stacey</span>
            </h1>

            <p className="hero-text">
              Metabolic Reset Coach, storyteller, and creative strategist.
            </p>
          </div>

          <div className="about-hero-new-images">
            <img
              src={assets.staceyAbout2}
              alt="Stacey with reader"
              className="about-main-img"
            />

            <img
              src={assets.staceyAbout1}
              alt="Stacey event"
              className="about-floating-img"
            />
          </div>
        </div>
      </section>

      <section className="about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-heading">
            <p className="eyebrow">Her Story</p>
            <h2>
              Heart-led <span>transformation</span>
            </h2>
          </div>

          <div className="about-story-card">
            <p>
              Stacey is a Metabolic Reset Coach, storyteller, and creative
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
            <p className="eyebrow">One Big Mission</p>
            <h2>Two ways Stacey helps people grow.</h2>
          </div>

          <div className="about-paths-grid">
            <Link to="/metabolic-reset" className="about-path-card">
              <div className="about-path-logo about-path-logo-small">
                <img src={assets.alifeLogo} alt="A Life of Style logo" />
              </div>

              <div>
                <p className="card-label">Metabolic Reset Coach</p>
                <h3>A Life of Style</h3>
              </div>

              <span>Explore Metabolic Coaching</span>
            </Link>

            <Link to="/the-overcomers" className="about-path-card">
              <div className="about-path-logo">
                <img src={assets.overcomersLogo} alt="The Overcomers logo" />
              </div>

              <div>
                <p className="card-label">Children’s Books</p>
                <h3>The Overcomers</h3>
              </div>

              <span>Explore The Books</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}