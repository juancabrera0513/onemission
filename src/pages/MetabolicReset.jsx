import { assets, links } from "../data/content";

export default function MetabolicReset() {
  return (
    <>
      <section className="sub-hero health-hero">
        <div className="container sub-hero-grid">
          <div>
            <h1>
              A Life <span>of Style</span>
            </h1>
            <p className="hero-text">Let’s reset your metabolism:</p>

            <div className="button-row">
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
          </div>

          <div className="logo-feature logo-feature-clean alife-logo-feature">
            <img src={assets.alifeLogo} alt="A Life of Style logo" />
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="container editorial-grid">
          <div className="editorial-title">
            <h2>You are not alone.</h2>
          </div>

          <div className="editorial-copy">
            <p>
              A metabolic reset helps quiet the noise in your body and breaks the 
              patterns that keep you stuck. By integrating a structured nutrition 
              plan and simple habits to lower inflammation, stabilize blood sugar, 
              and restore systemic balance. The plans I offer are medically designed
              to improve your health-span and support a longer, stronger lifespan, 
              helping you feel better, move better, and live with more confidence 
              and vitality.
            </p>

            <p>
              One small yes can move you toward the goals that matter most, 
              whether that’s steadier energy, better sleep, balanced hormones, or 
              freedom from cravings and chronic fatigue, and those early wins 
              become the catalyst for bigger change. As you build easy, powerful 
              habits into your daily life, you’ll feel yourself stepping into a bigger, 
              healthier life that’s been waiting for you all along.
            </p>
          </div>
        </div>
      </section>

      <section className="black-panel-section">
        <div className="container black-panel">
          <div>
            <h2>Saying yes is the moment you stop letting old patterns run your life.</h2>
          </div>

          <div>
            <p>
              Saying yes is the moment you stop letting old patterns run your life 
              and start choosing a future built on strength, clarity, and longevity. 
              It’s the first small shift that expands your health-span, supports your 
              lifespan, and opens the door to feeling better in your body than you 
              have in years.
            </p>

            <a
              href={links.preCallAssessment}
              target="_blank"
              rel="noreferrer"
              className="btn btn-pink"
            >
              Start With The Pre-Call Assessment
            </a>
          </div>
        </div>
      </section>

      <section className="steps-section">
        <div className="container">
          <div className="section-heading center">
            <h2>Small shifts. Bigger change.</h2>
          </div>

          <div className="steps-grid">
            <article>
              <span>01</span>
              <h3>Pre-Call Assessment</h3>
              <p>Start with the health evaluation so the next step is clear.</p>
            </article>

            <article>
              <span>02</span>
              <h3>Metabolic Scan</h3>
              <p>Answer a few questions and get a metabolic assessment in your inbox today.</p>
            </article>

            <article>
              <span>03</span>
              <h3>Reset Your Metabolism</h3>
              <p>Build simple habits that support your health-span and lifespan.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
