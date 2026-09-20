import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { assets, links } from "../data/content";

export default function MetabolicReset() {
  const [resetOpen, setResetOpen] = useState(false);
  const resetDialog = useRef(null);

  useEffect(() => {
    if (!resetOpen) return;

    const dialog = resetDialog.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [resetOpen]);

  return (
    <>
      <section className="sub-hero health-hero">
        <div className="container health-hero-content">
          <h1 className="visually-hidden">Metabolic Health Coaching with A Life of Style</h1>
          <div className="logo-feature logo-feature-clean alife-logo-feature health-hero-logo">
            <img
              src={assets.alifeLogo}
              alt="A Life of Style logo"
              width="500"
              height="500"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <div className="health-hero-actions">
            <p className="hero-text">Let’s reset your metabolism:</p>

            <div className="button-row">
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
            <article className="step-card--linked">
              <a
                href={links.preCallAssessment}
                target="_blank"
                rel="noreferrer"
                className="step-card-hitarea"
                aria-label="Open the Pre-Call Assessment"
              />
              <span>Step 1</span>
              <h3>Pre-Call Assessment</h3>
              <p>Start with the health evaluation so the next step is&nbsp;clear.</p>
            </article>

            <article className="step-card--linked">
              <a
                href={links.metabolicScan}
                target="_blank"
                rel="noreferrer"
                className="step-card-hitarea"
                aria-label="Open the Metabolic Scan"
              />
              <span>Step 2</span>
              <h3>Metabolic Scan</h3>
              <p>Answer a few questions and get a metabolic assessment in your inbox&nbsp;today.</p>
            </article>

            <article className="step-card--linked">
              <button
                type="button"
                className="step-card-hitarea step-card-modal-trigger"
                aria-label="Read six small steps to start resetting your metabolism"
                aria-haspopup="dialog"
                onClick={() => setResetOpen(true)}
              />
              <span>Step 3</span>
              <h3>Reset Your Metabolism</h3>
              <p>Build simple habits that support your health-span and&nbsp;lifespan.</p>
            </article>
          </div>
        </div>
      </section>
      <dialog
        ref={resetDialog}
        className="reset-dialog"
        aria-labelledby="reset-dialog-title"
        onClose={() => setResetOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setResetOpen(false);
        }}
      >
        <div className="reset-dialog-content">
          <form method="dialog" className="reset-dialog-dismiss">
            <button type="submit" className="reset-dialog-close" aria-label="Close metabolic reset tips">
              ×
            </button>
          </form>
          <h2 id="reset-dialog-title">6 small steps to start resetting your metabolism</h2>
          <ol className="reset-dialog-steps">
            <li>Prioritize protein.</li>
            <li>Eat consistently throughout the day.</li>
            <li>Drink more water.</li>
            <li>Walk every day.</li>
            <li>Protect your sleep.</li>
            <li>Stop relying on willpower—create a system.</li>
          </ol>
          <p><strong>Simple? Yes.</strong></p>
          <p>
            But knowing what to do and knowing exactly how to make it work for your
            body are two different things.
          </p>
          <p>That’s where the right nutrition, structure and accountability come in.</p>
          <p>Curious what a metabolic reset could look like for you?</p>
          <p className="reset-dialog-invitation">
            <Link to="/contact" onClick={() => setResetOpen(false)}>Message me RESET</Link>{" "}
            and I’ll show you what we can do together
          </p>
        </div>
      </dialog>
    </>
  );
}
