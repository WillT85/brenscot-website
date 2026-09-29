import { useMemo } from "react";
import { Link, useRoute } from "wouter";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/layout/page-hero";
import { LanderCtas } from "@/components/layout/lander-ctas";
import { SeoHead } from "@/seo/SeoHead";
import { getStaticPage, insightPageSeo } from "@/seo/config";
import { INSIGHTS, getInsight } from "@/data/insights-index";
import { INSIGHT_HTML } from "@/data/insights-content";
import NotFound from "@/pages/not-found";

const indexSeo = getStaticPage("/insights")!;

const categories = Array.from(new Set(INSIGHTS.map((item) => item.category)));

export function InsightsIndexPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SeoHead {...indexSeo} />
      <NavBar />
      <PageHero title="Insights." eyebrow="Industrial warehouse guides">
        <p className="text-white/40 text-lg font-light mt-8 max-w-2xl">
          Plain-English guides to designing, approving and building industrial warehouses in Brisbane and South East
          Queensland, checked against the National Construction Code and Queensland legislation.
        </p>
      </PageHero>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          {categories.map((category) => (
            <div key={category} className="mb-20 last:mb-0">
              <h2 className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-10">{category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
                {INSIGHTS.filter((item) => item.category === category).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/insights/${item.slug}`}
                    className="group block pt-8 border-t border-black/10"
                  >
                    <h3 className="text-2xl font-serif text-black leading-snug mb-4 transition-colors group-hover:text-[#C8A24A]">
                      {item.h1}
                    </h3>
                    <p className="text-black/60 font-light leading-relaxed mb-6">{item.description}</p>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A24A]">Read the guide</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white border-t border-black/10">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight mb-4">Planning an industrial warehouse?</h2>
          <p className="text-black/60 text-lg font-light leading-relaxed max-w-2xl mb-10">
            Talk to Brenscot about your site or your requirements. Call 0480 800 077 or send an enquiry.
          </p>
          <LanderCtas
            ctas={[
              { href: "/contact", label: "Start an enquiry", variant: "primary" },
              { href: "/process", label: "How we work" },
            ]}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export function InsightArticlePage() {
  const [, params] = useRoute("/insights/:slug");
  const insight = params?.slug ? getInsight(params.slug) : undefined;
  const seo = useMemo(() => (insight ? insightPageSeo(insight) : undefined), [insight]);
  const html = insight ? INSIGHT_HTML[insight.slug] : undefined;

  if (!insight || !seo || !html) {
    return <NotFound />;
  }

  const related = INSIGHTS.filter((item) => item.slug !== insight.slug)
    .sort((a, b) => Number(b.category === insight.category) - Number(a.category === insight.category))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans">
      <SeoHead {...seo} />
      <NavBar />

      <section className="pt-40 pb-16 md:pt-48 md:pb-20 bg-[#0b1526]">
        <div className="container mx-auto px-6 md:px-12">
          <nav aria-label="Breadcrumb" className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-3">/</span>
            <Link href="/insights" className="hover:text-white">Insights</Link>
            <span className="mx-3">/</span>
            <span className="text-[#C8A24A]">{insight.category}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-4xl">
            {insight.h1}
          </h1>
          <p className="text-white/50 text-sm font-light mt-8">
            By Brenscot Builders <span className="mx-2">|</span> Last reviewed {insight.reviewed}
          </p>
        </div>
      </section>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div
            className="insight-prose prose prose-lg max-w-3xl prose-headings:font-serif prose-headings:font-normal prose-headings:text-black prose-p:font-light prose-p:text-black/70 prose-li:font-light prose-li:text-black/70 prose-strong:font-semibold prose-strong:text-black prose-a:text-[#9a7a2e] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>

      <section className="py-20 md:py-24 bg-[#f8f6f1]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-black/50 font-sans uppercase tracking-[0.2em] text-xs mb-10">More insights</h2>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
            {related.map((item) => (
              <Link key={item.slug} href={`/insights/${item.slug}`} className="group block pt-8 border-t border-black/10">
                <h3 className="text-xl font-serif text-black leading-snug mb-3 transition-colors group-hover:text-[#C8A24A]">
                  {item.h1}
                </h3>
                <p className="text-black/60 text-sm font-light leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white border-t border-black/10">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight mb-4">Planning an industrial warehouse?</h2>
          <p className="text-black/60 text-lg font-light leading-relaxed max-w-2xl mb-10">
            Talk to Brenscot about your site or your requirements. Call 0480 800 077 or send an enquiry.
          </p>
          <LanderCtas
            ctas={[
              { href: "/contact", label: "Start an enquiry", variant: "primary" },
              { href: "/process", label: "How we work" },
            ]}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
