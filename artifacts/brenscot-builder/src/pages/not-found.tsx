import { Link } from "wouter";
import { SeoHead } from "@/seo/SeoHead";
import { NOT_FOUND_SEO } from "@/seo/config";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0b1526] px-6">
      <SeoHead {...NOT_FOUND_SEO} />
      <div className="max-w-lg text-center">
        <p className="text-[#C8A24A] text-[10px] uppercase tracking-[0.3em] mb-6">Brenscot Builders</p>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Page not found</h1>
        <p className="text-white/60 font-light leading-relaxed mb-10">
          This URL is not a Brenscot page. Return home for industrial warehouse development in Brisbane and SEQ.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#C8A24A] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C8A24A]/85 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
