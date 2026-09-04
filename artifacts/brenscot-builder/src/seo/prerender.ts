import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import {
  NOT_FOUND_SEO,
  SITE_ORIGIN,
  STATIC_PAGES,
  applySeoHead,
  projectPageSeo,
} from "./config";

export function extractProjectRecords(source: string): {
  slug: string;
  title: string;
  location: string;
}[] {
  const records: { slug: string; title: string; location: string }[] = [];
  const re =
    /slug:\s*"([^"]+)"\s*,\s*title:\s*"([^"]+)"\s*,\s*location:\s*"([^"]+)"/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(source))) {
    records.push({ slug: match[1], title: match[2], location: match[3] });
  }
  return records;
}

function routeToFile(outDir: string, routePath: string): string {
  if (routePath === "/") {
    return path.join(outDir, "index.html");
  }
  return path.join(outDir, routePath.replace(/^\//, ""), "index.html");
}

function writeFile(filePath: string, contents: string) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents);
}

function renderSitemap(paths: string[]): string {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = paths
    .map((routePath) => {
      const loc =
        routePath === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${routePath}`;
      const priority = routePath === "/" ? "1.0" : routePath.startsWith("/projects/") ? "0.7" : "0.8";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function renderNotFoundHtml(template: string): string {
  const withHead = applySeoHead(template, NOT_FOUND_SEO);
  return withHead.replace(
    '<div id="root"></div>',
    `<div id="root">
      <main style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0b1526;color:#fff;font-family:Georgia,serif;text-align:center;padding:48px 24px;">
        <div>
          <p style="letter-spacing:0.3em;text-transform:uppercase;font-size:11px;color:#C8A24A;margin-bottom:16px;">Brenscot Builders</p>
          <h1 style="font-size:42px;margin:0 0 16px;">Page not found</h1>
          <p style="color:rgba(255,255,255,0.65);max-width:420px;margin:0 auto 32px;font-family:system-ui,sans-serif;font-weight:300;">This URL is not a Brenscot page. Return home for industrial warehouse development in Brisbane and SEQ.</p>
          <a href="/" style="display:inline-block;background:#C8A24A;color:#fff;text-decoration:none;letter-spacing:0.2em;text-transform:uppercase;font-size:12px;padding:14px 28px;font-family:system-ui,sans-serif;">Back to home</a>
        </div>
      </main>
    </div>`,
  );
}

export function seoPrerenderPlugin(projectsFile: string): Plugin {
  let outDir = "";

  return {
    name: "brenscot-seo-prerender",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const indexPath = path.join(outDir, "index.html");
      if (!fs.existsSync(indexPath)) {
        this.error(`SEO prerender: missing ${indexPath}`);
        return;
      }

      const template = fs.readFileSync(indexPath, "utf8");
      const projectSource = fs.readFileSync(projectsFile, "utf8");
      const projects = extractProjectRecords(projectSource);
      const home = STATIC_PAGES.find((page) => page.path === "/")!;

      writeFile(indexPath, applySeoHead(template, home));

      for (const page of STATIC_PAGES.filter((item) => item.path !== "/")) {
        writeFile(routeToFile(outDir, page.path), applySeoHead(template, page));
      }

      for (const project of projects) {
        const page = projectPageSeo(project);
        writeFile(routeToFile(outDir, page.path), applySeoHead(template, page));
      }

      const sitemapPaths = [
        ...STATIC_PAGES.filter((page) => page.path !== "/privacy-policy" && page.path !== "/terms-conditions").map(
          (page) => page.path,
        ),
        ...projects.map((project) => `/projects/${project.slug}`),
      ];
      writeFile(path.join(outDir, "sitemap.xml"), renderSitemap(sitemapPaths));
      writeFile(path.join(outDir, "404.html"), renderNotFoundHtml(template));

      this.info(
        `SEO prerender: ${STATIC_PAGES.length} pages + ${projects.length} projects, sitemap, 404.html`,
      );
    },
  };
}
