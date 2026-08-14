import woman from '../one-big-mission-recreated-elements/01-woman-recreated.png'
import branch from '../one-big-mission-recreated-elements/02-botanical-branch-recreated.png'
import sunrise from '../one-big-mission-recreated-elements/03-sunrise-landscape-recreated.png'
import arch from '../one-big-mission-recreated-elements/04-top-arch-recreated.png'
import oneBig from '../one-big-mission-recreated-elements/06-one-big-wordmark-recreated.png'
import mission from '../one-big-mission-recreated-elements/07-mission-wordmark-recreated.png'
import stars from '../one-big-mission-recreated-elements/08-starry-brush-recreated.png'
import children from '../one-big-mission-recreated-elements/09-children-and-books-recreated.png'
import heartDivider from '../one-big-mission-recreated-elements/10-heart-divider-recreated.png'
import metabolicIcon from '../one-big-mission-recreated-elements/11-metabolic-icon-recreated.png'
import metabolicText from '../one-big-mission-recreated-elements/12-metabolic-text-recreated.png'
import booksIcon from '../one-big-mission-recreated-elements/13-childrens-books-icon-recreated.png'
import booksText from '../one-big-mission-recreated-elements/14-childrens-books-text-recreated.png'
import faith from '../one-big-mission-recreated-elements/15-faith-recreated.png'
import family from '../one-big-mission-recreated-elements/16-family-recreated.png'
import growth from '../one-big-mission-recreated-elements/17-growth-recreated.png'
import adventure from '../one-big-mission-recreated-elements/18-adventure-recreated.png'
import motto from '../one-big-mission-recreated-elements/19-bottom-motto-recreated.png'

const art = [
  ['arch', arch, ''],
  ['branch', branch, ''],
  ['sunrise', sunrise, ''],
  ['woman', woman, 'Woman standing confidently with her arms raised'],
  ['stars', stars, ''],
  ['children', children, 'Two children reading on a stack of books'],
  ['one-big', oneBig, 'One Big'],
  ['mission', mission, 'Mission'],
  ['heart-divider', heartDivider, ''],
  ['metabolic-icon', metabolicIcon, 'Metabolic health coaching'],
  ['metabolic-text', metabolicText, 'Metabolic health coaching — mindset, metabolism, life'],
  ['books-icon', booksIcon, "Children's books"],
  ['books-text', booksText, "Children's books — stories that inspire, lessons that last"],
  ['faith', faith, 'Faith'],
  ['family', family, 'Family'],
  ['growth', growth, 'Growth'],
  ['adventure', adventure, 'Adventure'],
  ['motto', motto, 'One mission. Endless impact.'],
]

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="One Big Mission home">
      <span className="brand__sun" aria-hidden="true" />
      <span>
        <strong>ONE BIG</strong>
        <small>MISSION</small>
      </span>
    </a>
  )
}

function HeroArtwork() {
  return (
    <div className="crest-wrap">
      <div
        className="crest"
        role="img"
        aria-label="One Big Mission: healthy bodies, brave hearts, and brighter tomorrows through health coaching and children's books"
      >
        <div className="crest__wash crest__wash--gold" aria-hidden="true" />
        <div className="crest__wash crest__wash--blue" aria-hidden="true" />
        <svg
          className="crest-tagline"
          viewBox="0 0 1000 1000"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <path
              id="crest-tagline-curve"
              d="M 140 246 C 295 34, 705 34, 860 246"
            />
          </defs>
          <text>
            <textPath
              href="#crest-tagline-curve"
              startOffset="50%"
              textAnchor="middle"
            >
              • HEALTHY BODIES. BRAVE HEARTS. BRIGHTER TOMORROWS. •
            </textPath>
          </text>
        </svg>
        {art.map(([className, src, alt], index) => (
          <img
            className={`art art--${className}`}
            src={src}
            alt=""
            aria-hidden="true"
            draggable="false"
            key={className}
            style={{ '--order': index }}
          />
        ))}
        <span className="service-rule" aria-hidden="true" />
      </div>
    </div>
  )
}

function App() {
  return (
    <main id="top" className="page-shell">
      <header className="site-header">
        <BrandMark />
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#coaching">Health coaching</a>
          <a href="#books">Children’s books</a>
        </nav>
        <a className="header-cta" href="#mission">
          Our mission <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section id="mission" className="hero" aria-labelledby="hero-title">
        <div className="hero__intro">
          <p className="eyebrow">Wellness · stories · wholehearted living</p>
          <h1 id="hero-title">
            Building brighter tomorrows,
            <em> one brave heart at a time.</em>
          </h1>
          <p className="hero__copy">
            Where metabolic health, inspiring stories, faith, and family come
            together with one purpose: helping every generation grow well.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#coaching">
              Begin your journey <span aria-hidden="true">→</span>
            </a>
            <a className="button button--quiet" href="#books">
              Discover the stories
            </a>
          </div>
          <p className="hero__note">One mission. Endless impact.</p>
        </div>

        <HeroArtwork />

        <div className="hero__rail" aria-label="Our focus areas">
          <a id="coaching" href="#coaching" className="rail-item">
            <span className="rail-item__number">01</span>
            <span>
              <strong>Mind &amp; metabolism</strong>
              <small>Health coaching for a fuller life</small>
            </span>
          </a>
          <a id="books" href="#books" className="rail-item">
            <span className="rail-item__number">02</span>
            <span>
              <strong>Stories that stay</strong>
              <small>Children’s books with heart</small>
            </span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
