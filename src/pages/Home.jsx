import { Link } from "react-router-dom";
import MissionLogoLockup from "../components/MissionLogoLockup";
import { assets } from "../data/content";

export default function Home() {
  return (
    <>
      <section className="mission-art-hero" aria-labelledby="mission-hero-title">
        <h1 id="mission-hero-title" className="visually-hidden">One Big Mission</h1>
        <div className="mission-art-hero__lockup">
          <MissionLogoLockup interactive />
        </div>
      </section>

      <section className="choice-section">
        <div className="container">
          <div className="section-heading center">
            <h2>Two areas. One heart-led mission.</h2>
          </div>

          <div className="choice-grid">
            <Link to="/metabolic-reset" className="choice-card choice-health">
              <div className="choice-logo-box">
                <img src={assets.alifeLogo} alt="A Life of Style logo" />
              </div>
              <div>
                <p className="card-label">Metabolic Reset Coach</p>
                <h3>A Life of Style</h3>
              </div>
              <span className="choice-link">Explore Metabolic Coaching</span>
            </Link>

            <Link to="/the-overcomers" className="choice-card choice-books">
              <div className="choice-logo-box wide">
                <img src={assets.overcomersLogo} alt="The Overcomers logo" />
              </div>
              <div>
                <p className="card-label">Children’s Books</p>
                <h3>The Overcomers</h3>
              </div>
              <span className="choice-link">Explore The Books</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-about-preview">
        <div className="container about-preview-grid">
          <div className="image-stack">
            <img src={assets.staceyAbout1} alt="Stacey" />
            <img src={assets.staceyAbout2} alt="Stacey event" />
          </div>
          <div>
            <h2>Meet Stacey</h2>
            <p>
              Stacey is a Metabolic Reset Coach, storyteller, and creative strategist
              who believes in the power of heart-led transformation. With a
              background in health and wellness, English Literature, and a gift for
              hearing the story under the surface, she brings a unique and effective
              perspective to holistic health.
            </p>
            <Link to="/about" className="btn btn-outline-dark">Learn More About Stacey</Link>
          </div>
        </div>
      </section>
    </>
  );
}
