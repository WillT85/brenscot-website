export const QBCC_PLACEHOLDER = "QBCC licence: [to be confirmed]";

const defaultItems = [
  "Established 2020",
  "Northside & SEQ",
  "Up to about 10,000m²",
  "Developer-builder",
  QBCC_PLACEHOLDER,
];

export function TrustStrip({ items = defaultItems }: { items?: string[] }) {
  return (
    <section className="bg-[#081220] border-y border-white/10">
      <div className="container mx-auto px-6 md:px-12 py-6 md:py-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.2em] text-white/55">
          {items.map((item) => (
            <li key={item}>
              {item.includes("10,000") ? (
                <>
                  Up to about <span className="normal-case tracking-normal">10,000m²</span>
                </>
              ) : item.includes("[to be confirmed]") ? (
                <span className="normal-case tracking-[0.12em]">{item}</span>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
