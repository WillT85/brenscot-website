import { useEffect } from "react";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteAsset,
  absoluteUrl,
  organizationJsonLd,
  webPageJsonLd,
  type PageSeo,
} from "./config";

type SeoHeadProps = PageSeo & {
  ogImage?: string;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: unknown) {
  let el = document.head.querySelector<HTMLScriptElement>(`script[data-seo="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.dataset.seo = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function SeoHead({ path, title, description, robots, ogImage }: SeoHeadProps) {
  useEffect(() => {
    const url = path === "/404" ? `${absoluteUrl("/")}` : absoluteUrl(path);
    const image = absoluteAsset(ogImage ?? DEFAULT_OG_IMAGE);
    const page: PageSeo = { path, title, description, robots };

    document.title = title;
    upsertMeta("name", "description", description);
    if (robots) {
      upsertMeta("name", "robots", robots);
    } else {
      document.head.querySelector('meta[name="robots"]')?.remove();
    }
    upsertLink("canonical", url);
    upsertMeta("property", "og:locale", "en_AU");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:secure_url", image);
    upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
    upsertJsonLd("ld", [organizationJsonLd(), webPageJsonLd(page)]);
  }, [path, title, description, robots, ogImage]);

  return null;
}
