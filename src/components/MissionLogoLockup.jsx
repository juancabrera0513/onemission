import { Link } from "react-router-dom";

const source = "/assets/one-big-mission/mission-hero-v2.jpg";

const layers = [
  {
    name: "arch",
    clip: "inset(0 0 78% 0)",
  },
  {
    name: "health-scene",
    clip: "polygon(0 22%, 25% 22%, 25% 64%, 58% 64%, 58% 72%, 0 72%)",
  },
  {
    name: "wordmark",
    clip: "inset(22% 23% 36% 25%)",
  },
  {
    name: "book-scene",
    clip: "polygon(77% 22%, 100% 22%, 100% 72%, 58% 72%, 58% 64%, 77% 64%)",
  },
  {
    name: "services",
    clip: "inset(72% 0 14% 0)",
  },
  {
    name: "values",
    clip: "inset(86% 0 8% 0)",
  },
  {
    name: "motto",
    clip: "inset(92% 0 0 0)",
  },
];

export default function MissionLogoLockup({ interactive = false, className = "" }) {
  return (
    <div
      className={`mission-logo-stage mission-logo-stage--v2 ${className}`.trim()}
      role="img"
      aria-label="One Big Mission: healthy bodies, brave hearts, brighter tomorrows. Health and stories that transform lives. Metabolic health coaching and children’s books, united by faith, family, growth, and adventure."
    >
      {layers.map(({ name, clip }, index) => (
        <img
          key={name}
          className={`mission-logo-layer mission-logo-v2-layer mission-logo-v2-layer--${name}`}
          src={source}
          alt=""
          aria-hidden="true"
          draggable="false"
          decoding="async"
          loading="eager"
          fetchPriority={index === 0 ? "high" : "auto"}
          style={{
            "--mission-clip": clip,
            "--layer-delay": `${index * 70}ms`,
            zIndex: index + 1,
          }}
        />
      ))}

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
