import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MetabolicReset from "./pages/MetabolicReset";
import Overcomers from "./pages/Overcomers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HeroOptions from "./pages/HeroOptions";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const revealTargets = document.querySelectorAll(
      "main section, .choice-card, .steps-grid article, .character-grid img, .about-path-card, .contact-card"
    );
    const parallaxTargets = document.querySelectorAll(
      ".home-hero-copy, .home-hero-panel, .image-stack, .logo-feature, .book-cover-panel, .about-hero-new-images"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px" }
    );

    revealTargets.forEach((target, index) => {
      target.classList.add("reveal");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
      observer.observe(target);
    });

    let animationFrame;

    const updateScrollEffects = () => {
      const scrollTop = window.scrollY;
      const scrollRange =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollRange > 0 ? scrollTop / scrollRange : 0;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        progress.toString()
      );

      parallaxTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const targetCenter = rect.top + rect.height / 2;
        const distance = (targetCenter - viewportCenter) / window.innerHeight;
        const offset = Math.max(-24, Math.min(24, distance * -28));

        target.style.setProperty("--parallax-offset", `${offset}px`);
      });

      animationFrame = undefined;
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateScrollEffects);
      }
    };

    updateScrollEffects();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [location.pathname]);

  return (
    <div className="site">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="ambient-motion" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-orb ambient-orb-three" />
      </div>

      <Header />

      <main className="page-shell" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metabolic-reset" element={<MetabolicReset />} />
          <Route path="/the-overcomers" element={<Overcomers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hero-options" element={<HeroOptions />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
