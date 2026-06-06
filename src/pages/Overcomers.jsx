import { assets, links } from "../data/content";

export default function Overcomers() {
  return (
    <>
      <section className="sub-hero books-hero">
        <div className="container sub-hero-grid">
          <div>
            <p className="eyebrow">Children’s Books</p>
            <h1>
              The <span>Overcomers</span>
            </h1>

            <p className="hero-text">
              The Overcomers is a heartwarming series of beautifully told, rhyming
              stories that inspire readers of all ages to believe in themselves, 
              embrace who they are, and rise above life’s challenges. Each book 
              follows a lovable animal friend as they face self-doubt, teasing, or fear
              —and discover courage, kindness, and purpose along the way.
            </p>
          </div>

          <div className="logo-feature logo-feature-clean overcomers-logo-feature">
            <img src={assets.overcomersLogo} alt="The Overcomers logo" />
          </div>
        </div>
      </section>

      <section className="book-intro-section">
        <div className="container">
          <div className="book-intro-card">
            <p>
              With gentle lessons about confidence, compassion, and the power within, 
              these stories remind children that being different is often their 
              greatest strength. Perfect for ages 3–7, and for those young at heart. 
              The Overcomers will spark conversations, build character, and leave 
              hearts encouraged to shine just as they are.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-book-section">
        <div className="container featured-book-grid">
          <div className="book-cover-panel">
            <img src={assets.flippyCover} alt="Flippy the Frog: More Like Me" />
          </div>

          <div className="book-content">
            <p className="eyebrow">Back cover of Flippy Description:</p>
            <h2>Flippy the Frog: More Like Me</h2>

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
                href={links.flippyAmazon}
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
            <p className="eyebrow">Characters</p>
            <h2>Lovable animal friends with gentle lessons.</h2>
          </div>

          <div className="character-grid">
            <img src={assets.flippyFrog} alt="Flippy the Frog illustration" />
            <img src={assets.penguin} alt="Penguin illustration" />
            <img src={assets.elephantSketch} alt="Elephant sketch" />
            <img src={assets.dogSketch} alt="Dog sketch" />
            <img src={assets.rhinoSketch} alt="Rhino sketch" />
            <img src={assets.penguinScene} alt="Penguin scene" />
          </div>
        </div>
      </section>
    </>
  );
}