import { assets, links } from "../data/content";

export default function Overcomers() {
  return (
    <>
      <section className="sub-hero books-hero">
        <div className="container sub-hero-grid overcomers-hero-layout">
          <h1 className="visually-hidden">The Overcomers Children’s Book Series</h1>
          <div className="overcomers-hero-copy">
            <p className="hero-text">
              The Overcomers is a heartwarming series of beautifully told, rhyming
              stories that inspire readers of all ages to believe in themselves, 
              embrace who they are, and rise above life’s challenges. Each book 
              follows a lovable animal friend as they face self-doubt, teasing, or fear
              —and discover courage, kindness, and purpose along the way.
            </p>
          </div>

          <div className="logo-feature logo-feature-clean overcomers-logo-feature">
            <img
              src={assets.overcomersLogo}
              alt="The Overcomers logo"
              width="2045"
              height="969"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="book-intro-section">
        <div className="container book-intro-layout">
          <div className="book-intro-card">
            <p>
              With gentle lessons about confidence, compassion, and the power within, 
              these stories remind children that being different is often their 
              greatest strength. Perfect for ages 3–7, and for those young at heart. 
              The Overcomers will spark conversations, build character, and leave 
              hearts encouraged to shine just as they are.
            </p>
          </div>

          <figure className="book-intro-image">
            <img
              src={assets.staceyBookSigning}
              alt="Stacey signing copies of Flippy the Frog at a book signing"
              width="1452"
              height="1085"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="featured-book-section">
        <div className="container featured-book-grid">
          <div className="book-cover-panel">
            <img
              src={assets.flippyCover}
              alt="Flippy the Frog: More Like Me"
              width="969"
              height="1000"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="book-content">
            <h2 className="book-title">
              <span>Flippy the Frog:</span>
              <span>More Like Me</span>
            </h2>

            <p>
              Flippy the frog is dearly loved by his family—a boy named Sam and a 
              mouse named Squeaky — but sometimes, even when you’re surrounded by 
              love, you can still feel a little different. Flippy doesn’t look like 
              Sam and he doesn’t sound like Squeaky, and somewhere deep inside, he 
              wonders: “Is there anyone more like me?”
            </p>

            <p>
              With a curious heart and a hopeful hop, Flippy sets out into the wide, 
              wonderful world to find some answers. Along the way, he meets all 
              kinds of animals each with their own home and voice.
            </p>

            <p>Will Flippy find someone more like him?</p>

            <p>Or will he discover something even more important along the way?</p>

            <p>
              Full of warmth, rhythm, and heart, Flippy the Frog: More Like Me is a 
              sweet tale about finding your voice, embracing who you are, and 
              knowing that love and belonging aren’t about being the same—
              they’re about being you.
            </p>

            <p>
              This story was written for any child who has ever felt like they don’t 
              quite fit, and every grown-up who wants to show them just how deeply 
              they belong.
            </p>

            <p>
              Perfect for children ages 3–7 and for anyone—at any age—who’s ever 
              felt a little different.
            </p>

            <div className="button-row">
              <a
                href={links.flippyAmazon}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Paperback and Hardback Books
              </a>

              <a
                href={links.flippyColoringBook}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-pink"
              >
                The Coloring Book
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="characters-section">
        <div className="container">
          <div className="section-heading center">
            <h2 className="character-title">
              <span>Lovable Animal Friends</span>
              <span>Discovering Courage, Kindness and Purpose</span>
            </h2>
          </div>

          <div className="character-grid">
            <img src={assets.flippyFrog} alt="Flippy the Frog illustration" width="735" height="750" loading="lazy" decoding="async" />
            <img src={assets.penguin} alt="Penguin illustration" width="615" height="750" loading="lazy" decoding="async" />
            <img src={assets.elephantSketch} alt="Elephant sketch" width="440" height="750" loading="lazy" decoding="async" />
            <img src={assets.dogSketch} alt="Dog sketch" width="750" height="679" loading="lazy" decoding="async" />
            <img src={assets.rhinoSketch} alt="Rhino sketch" width="689" height="700" loading="lazy" decoding="async" />
            <img src={assets.penguinScene} alt="Penguin scene" width="750" height="479" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>
    </>
  );
}
