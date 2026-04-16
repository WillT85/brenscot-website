import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center px-8">
        <h1 className="text-6xl font-serif text-primary mb-4">404</h1>
        <p className="text-lg text-primary/60 mb-8">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="inline-block bg-secondary text-primary px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-primary hover:text-white transition-colors"
          data-testid="link-back-home"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
