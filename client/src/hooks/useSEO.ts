import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function useSEO({ title, description, ogTitle, ogDescription }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes("The Revival Fund") ? title : `${title} | The Revival Fund`;
    document.title = fullTitle;

    const metaDescription = description || "An experimental fund supporting scholars, experimentalists, and original thinkers to excavate intellectual lineages and revive forgotten or marginalized research.";
    const activeOgTitle = ogTitle || title;
    const activeOgDescription = ogDescription || metaDescription;

    const updateMetaTag = (selector: string, attributeName: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const matches = selector.match(/\[(name|property)="(.+?)"\]/);
        if (matches) {
          element.setAttribute(matches[1], matches[2]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attributeName, value);
    };

    updateMetaTag('meta[name="description"]', 'content', metaDescription);
    updateMetaTag('meta[property="og:title"]', 'content', activeOgTitle);
    updateMetaTag('meta[property="og:description"]', 'content', activeOgDescription);
    updateMetaTag('meta[name="twitter:title"]', 'content', activeOgTitle);
    updateMetaTag('meta[name="twitter:description"]', 'content', activeOgDescription);
  }, [title, description, ogTitle, ogDescription]);
}
