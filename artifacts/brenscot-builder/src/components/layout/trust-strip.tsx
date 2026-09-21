export const QBCC_LICENCE = "QBCC 15213515";

const defaultItems = [
  "Established 2020",
  "Northside & SEQ",
  "Developer-builder",
  QBCC_LICENCE,
];

export function TrustStrip({ items = defaultItems }: { items?: string[] }) {
  return (
    <section className="bg-[#081220] border-y border-white/10">
      <div className="container mx-auto px-6 md:px-12 py-6 md:py-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.2em] text-white/55">
          {items.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
