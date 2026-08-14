import { Link } from "react-router-dom";

const base = "/assets/one-big-mission";

const layers = [
  ["arch", 70, 38, 840],
  ["tagline", 224, 82, 630],
  ["starry-brush", 644, 214, 330],
  ["botanical", 32, 318, 116],
  ["sunrise", 8, 516, 500],
  ["woman", 94, 216, 222],
  ["wordmark-one-big", 278, 306, 438],
  ["wordmark-mission", 294, 506, 398],
  ["children-books", 720, 406, 236],
  ["heart-divider", 312, 706, 384],
  ["pillar-metabolic-icon", 132, 744, 92],
  ["pillar-metabolic-text", 240, 762, 232],
  ["pillar-books-icon", 550, 744, 96],
  ["pillar-books-text", 658, 762, 232],
  ["value-faith", 182, 860, 106],
  ["value-family", 348, 868, 120],
  ["value-growth", 538, 866, 136],
  ["value-adventure", 732, 868, 142],
  ["motto", 248, 910, 538],
];

const pct = (value) => `${value / 10}%`;

export default function MissionLogoLockup({ interactive = false, className = "" }) {
  return (
    <div
      className={`mission-logo-stage ${className}`.trim()}
      role="img"
      aria-label="One Big Mission: healthy bodies, brave hearts, brighter tomorrows. Metabolic health coaching and children’s books, united by faith, family, growth, and adventure."
    >
      {layers.map(([name, left, top, width], index) => (
        <img
          key={name}
          className={`mission-logo-layer mission-logo-layer--${name}`}
          src={`${base}/${name}.webp`}
          alt=""
          aria-hidden="true"
          draggable="false"
          decoding="async"
          loading={index < 10 ? "eager" : "lazy"}
          style={{
            left: pct(left),
            top: pct(top),
            width: pct(width),
            zIndex: index + 1,
            "--layer-delay": `${Math.min(index * 45, 500)}ms`,
          }}
        />
      ))}

      <span className="mission-logo-rule" aria-hidden="true" />
      <span className="mission-logo-dot mission-logo-dot--one" aria-hidden="true" />
      <span className="mission-logo-dot mission-logo-dot--two" aria-hidden="true" />
      <span className="mission-logo-dot mission-logo-dot--three" aria-hidden="true" />

      {interactive && (
        <>
          <Link
            className="mission-logo-hotspot mission-logo-hotspot--health"
            to="/metabolic-reset"
            aria-label="Explore metabolic health coaching"
          />
          <Link
            className="mission-logo-hotspot mission-logo-hotspot--books"
            to="/the-overcomers"
            aria-label="Explore children’s books"
          />
        </>
      )}
    </div>
  );
}
