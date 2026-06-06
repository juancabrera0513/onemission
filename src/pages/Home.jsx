import { Link } from "react-router-dom";
import { assets } from "../data/content";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">One Big Mission</p>
            <h1>
              One Big <span>Mission</span>
            </h1>

            <p className="hero-text">
              Sometimes our mission doesn’t make sense, or it feels fractured 
              like the parts of us that need healing. My One Big Mission is to 
              bring all the scattered bits together and create a balanced version 
              of you that is physically stronger, emotionally and mentally 
              empowered, and healthier than ever. It doesn’t matter if you are 
              6 or 60; through metabolic health coaching or storytelling, I have 
              something for you.
            </p>

            <div className="button-row">
              <Link to="/metabolic-reset" className="btn btn-dark">
                A Life of Style
              </Link>
              <Link to="/the-overcomers" className="btn btn-outline-pink">
                The Overcomers
              </Link>
            </div>
          </div>

          <div className="home-hero-panel">
            <p>
              The habits that harm us as adults often come from childhood 
              wounds formed long before we knew their names.
            </p>
            <p>
              My mission is twofold: to help adults break free from those patterns 
              through metabolic coaching, and to help children avoid them through 
              stories that build confidence, resilience, and power.
            </p>
          </div>
        </div>
      </section>

      <section className="choice-section">
        <div className="container">
          <div className="section-heading center">
            <p className="eyebrow">Choose Your Path</p>
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
            <p className="eyebrow">Biography</p>
            <h2>Meet Stacey</h2>

            <p>
              Stacey is a Metabolic Reset Coach, storyteller, and creative strategist 
              who believes in the power of heart-led transformation. With a 
              background in health and wellness, English Literature, and a gift for 
              hearing the story under the surface, she brings a unique and effective
              perspective to holistic health.
            </p>

            <Link to="/about" className="btn btn-outline-dark">
              Learn More About Stacey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}