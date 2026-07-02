import { Link, NavLink } from "react-router-dom";
import { assets } from "../data/content";

const concepts = [
  { id: "01", className: "palette-white-violet" },
  { id: "02", className: "palette-white-blue" },
  { id: "03", className: "palette-brand-gold palette-logo-buttons", logoButtons: true },
  { id: "04", className: "palette-brand-bright palette-logo-buttons", logoButtons: true },
  { id: "05", className: "palette-brand-balanced palette-logo-buttons", logoButtons: true },
  { id: "06", className: "palette-turquoise" },
  { id: "07", className: "palette-lavender" },
  { id: "08", className: "palette-sunny" },
  { id: "09", className: "palette-green" },
  { id: "10", className: "palette-sky" },
  { id: "11", className: "palette-mint" },
  { id: "12", className: "palette-lemon" },
  { id: "13", className: "palette-lilac" },
  { id: "14", className: "palette-brand-gold" },
  { id: "15", className: "palette-brand-mix" },
];

function PreviewHeader() {
  return (
    <header className="header preview-real-header">
      <Link to="/" className="brand">
        <span className="brand-icon">S</span>
        <span className="brand-text"><strong>Stacey</strong><small>One Big Mission</small></span>
      </Link>
      <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-hidden="true" tabIndex="-1">
        <span /><span /><span />
      </button>
      <nav className="nav preview-real-nav">
        <NavLink to="/" className="active">Home</NavLink>
        <NavLink to="/metabolic-reset">A Life of Style</NavLink>
        <NavLink to="/the-overcomers">The Overcomers</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Link to="/contact" className="header-cta">Start Here</Link>
    </header>
  );
}

function RealHeroPreview({ concept }) {
  return (
    <section className={`hero-concept ${concept.className}`}>
      <div className="concept-label">
        <span>Option {concept.id}</span>
      </div>
      <div className="concept-frame">
        <PreviewHeader />
        <section className="home-hero concept-home-hero">
          <div className="container home-hero-grid">
            <div className="home-hero-copy">
              <h1>One Big <span>Mission</span></h1>
              <p className="hero-text">
                Sometimes our mission doesn’t make sense, or it feels fractured like
                the parts of us that need healing. My One Big Mission is to bring all
                the scattered bits together and create a balanced version of you that
                is physically stronger, emotionally and mentally empowered, and
                healthier than ever. It doesn’t matter if you are 6 or 60; through
                metabolic health coaching or storytelling, I have something for you.
              </p>
              {concept.logoButtons ? (
                <div className="button-row logo-button-row">
                  <Link to="/metabolic-reset" className="logo-hero-button logo-hero-button-life" aria-label="Explore A Life of Style">
                    <img src={assets.alifeLogo} alt="A Life of Style" />
                  </Link>
                  <Link to="/the-overcomers" className="logo-hero-button logo-hero-button-books" aria-label="Explore The Overcomers">
                    <img src={assets.overcomersLogo} alt="The Overcomers" />
                  </Link>
                </div>
              ) : (
                <div className="button-row">
                  <Link to="/metabolic-reset" className="btn btn-dark">A Life of Style</Link>
                  <Link to="/the-overcomers" className="btn btn-outline-pink">The Overcomers</Link>
                </div>
              )}
            </div>
            <div className="home-hero-panel">
              <p>The habits that harm us as adults often come from childhood wounds formed long before we knew their names.</p>
              <p>My mission is twofold: to help adults break free from those patterns through metabolic coaching, and to help children avoid them through stories that build confidence, resilience, and power.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default function HeroOptions() {
  return (
    <div className="hero-options-page">
      {concepts.map((concept) => <RealHeroPreview key={concept.id} concept={concept} />)}
    </div>
  );
}
