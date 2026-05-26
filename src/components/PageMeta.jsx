import { useEffect } from "react";
import { site } from "../data/siteContent";

const defaultKeywords =
  "scaffolding contractor Laois, scaffolding Midlands Ireland, residential scaffolding, specialist scaffold services, scaffold access solutions, industrial scaffolding Ireland";

const upsertMeta = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

export default function PageMeta({ title, description, keywords = defaultKeywords, canonicalPath }) {
  useEffect(() => {
    document.title = title;

    upsertMeta("description", description);
    upsertMeta("robots", "index, follow");
    upsertMeta("keywords", keywords);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    const path = canonicalPath || window.location.pathname || "/";
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    canonical.setAttribute("href", `https://www.${site.domain}${normalizedPath}`);
  }, [title, description, keywords, canonicalPath]);

  return null;
}
