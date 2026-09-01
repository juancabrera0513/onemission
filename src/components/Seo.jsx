import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://onebigmission.com";
const SOCIAL_IMAGE = `${SITE_URL}/og.png`;

const PAGE_META = {
  "/": {
    title: "One Big Mission | Health Coaching & Children’s Books",
    description:
      "One Big Mission by Stacey brings together metabolic health coaching and uplifting children’s books that encourage confidence, compassion, and growth.",
  },
  "/metabolic-reset": {
    title: "Metabolic Health Coaching | One Big Mission",
    description:
      "Explore Stacey’s heart-led metabolic health coaching, pre-call assessment, and metabolic scan through A Life of Style.",
  },
  "/the-overcomers": {
    title: "The Overcomers Children’s Books | One Big Mission",
    description:
      "Discover The Overcomers, Stacey’s rhyming children’s book series about confidence, kindness, courage, and embracing what makes you different.",
  },
  "/about": {
    title: "About Stacey | One Big Mission",
    description:
      "Meet Stacey, a metabolic health coach, storyteller, and creative strategist helping people grow through heart-led transformation.",
  },
  "/contact": {
    title: "Contact Stacey | One Big Mission",
    description:
      "Connect with Stacey about metabolic health coaching, author appearances, book readings, and general questions.",
  },
};

function upsertMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function getPageSchema(pathname, canonical, meta) {
  const page = {
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-US",
  };

  if (pathname === "/the-overcomers") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        page,
        {
          "@type": "Book",
          name: "Flippy the Frog: More Like Me",
          url: canonical,
          image: `${SITE_URL}/assets/flippy-cover-optimized.jpg`,
          author: { "@type": "Person", name: "Stacey Solomon Pratt" },
          audience: { "@type": "PeopleAudience", suggestedMinAge: 3, suggestedMaxAge: 7 },
          sameAs:
            "https://www.amazon.com/Flippy-Frog-More-Like-Overcomers/dp/1956581812",
        },
      ],
    };
  }

  if (pathname === "/metabolic-reset") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        page,
        {
          "@type": "Service",
          name: "Metabolic Health Coaching",
          url: canonical,
          provider: { "@id": `${SITE_URL}/#stacey` },
          serviceType: "Metabolic health coaching",
        },
      ],
    };
  }

  return { "@context": "https://schema.org", ...page };
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname];
    const isKnownPage = Boolean(meta);
    const resolvedMeta =
      meta || {
        title: "Page Not Found | One Big Mission",
        description: "The requested page could not be found.",
      };
    const canonical = isKnownPage ? `${SITE_URL}${pathname === "/" ? "/" : pathname}` : SITE_URL;

    document.documentElement.lang = "en";
    document.title = resolvedMeta.title;

    upsertMeta("name", "description", resolvedMeta.description);
    upsertMeta(
      "name",
      "robots",
      isKnownPage ? "index, follow, max-image-preview:large" : "noindex, nofollow"
    );
    upsertMeta("property", "og:title", resolvedMeta.title);
    upsertMeta("property", "og:description", resolvedMeta.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", SOCIAL_IMAGE);
    upsertMeta("property", "og:image:alt", "One Big Mission by Stacey");
    upsertMeta("property", "og:site_name", "One Big Mission");
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", resolvedMeta.title);
    upsertMeta("name", "twitter:description", resolvedMeta.description);
    upsertMeta("name", "twitter:image", SOCIAL_IMAGE);
    upsertCanonical(canonical);

    let schema = document.head.querySelector('script[data-page-schema="true"]');

    if (!isKnownPage) {
      schema?.remove();
      return;
    }

    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.pageSchema = "true";
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify(getPageSchema(pathname, canonical, resolvedMeta));
  }, [pathname]);

  return null;
}
