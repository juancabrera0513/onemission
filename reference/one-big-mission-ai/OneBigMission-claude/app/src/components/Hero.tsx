import { LogoLockup } from './LogoLockup'
import './Hero.css'

export function Hero() {
  return (
    <header className="hero">
      {/* Decorative wash behind the lockup -- the sunrise and sky pulled out of
          the artwork so the mark sits in its own light rather than on flat white. */}
      <div className="hero__wash" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__inner">
        <p className="hero__eyebrow">
          Metabolic health coaching &amp; children&rsquo;s books
        </p>

        <h1 className="visually-hidden">One Big Mission</h1>

        <div className="hero__lockup">
          <LogoLockup />
        </div>

        <p className="hero__lede">
          Two callings, one mission: helping grown-ups rebuild their health, and
          helping kids fall in love with reading.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#coaching">
            Start with coaching
          </a>
          <a className="button button--ghost" href="#books">
            Browse the books
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#coaching">
        <span>Explore the mission</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </header>
  )
}
