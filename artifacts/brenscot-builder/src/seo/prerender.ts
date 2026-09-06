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
  area?: string;
}[] {
  const records: { slug: string; title: string; location: string; area?: string }[] = [];
  const chunks = source.split(/slug:\s*"/).slice(1);
  for (const chunk of chunks) {
    const slug = chunk.match(/^([^"]+)"/)?.[1];
    const title = chunk.match(/title:\s*"([^"]+)"/)?.[1];
    const location = chunk.match(/location:\s*"([^"]+)"/)?.[1];
    if (!slug || !title || !location) {
      continue;
    }
    const area = chunk.match(
      /label:\s*"[^"]*(?:GFA|building area|lettable)[^"]*"\s*,\s*value:\s*"([^"]+)"/i,
    )?.[1];
    records.push(area ? { slug, title, location, area } : { slug, title, location });
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
      const priority =
        routePath === "/"
          ? "1.0"
          : routePath === "/warehouse-builders-brisbane" ||
              routePath === "/design-and-construct-warehouse-brisbane" ||
              routePath === "/process"
            ? "0.9"
            : routePath.startsWith("/projects/")
              ? "0.7"
              : "0.8";
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
    config(_cfg, env) {
      if (env.isPreview) {
        return { appType: "mpa" };
      }
      return undefined;
    },
    configResolved(config) {
      outDir = config.build.outDir;
    },
    configurePreviewServer(server) {
      const root = server.config.build.outDir || outDir;
      server.middlewares.use((req, res, next) => {
        if (req.method !== "GET" && req.method !== "HEAD") {
          return next();
        }
        const raw = req.url ?? "/";
        const [pathname, search] = raw.split("?");
        if (!pathname || pathname === "/") {
          return next();
        }
        if (path.posix.basename(pathname).includes(".")) {
          return next();
        }
        const cleaned = pathname.replace(/\/$/, "");
        const htmlFile = path.join(root, cleaned.replace(/^\//, ""), "index.html");
        if (fs.existsSync(htmlFile)) {
          req.url = `${cleaned}/index.html${search ? `?${search}` : ""}`;
          return next();
        }
        const notFound = path.join(root, "404.html");
        if (fs.existsSync(notFound)) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(fs.readFileSync(notFound));
          return;
        }
        next();
      });
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
