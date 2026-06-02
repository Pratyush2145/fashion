export function Marquee() {
  const items = [
    "Atelier-Crafted",
    "Free Global Shipping",
    "Members-Only Drops",
    "Carbon-Neutral Atelier",
    "Conscious Materials",
    "Lifetime Repairs",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="border-y hairline bg-[color:var(--ivory)] overflow-hidden py-5">
      <div className="flex gap-16 whitespace-nowrap [animation:var(--animate-marquee)]">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-16 text-[11px] uppercase tracking-[0.4em] font-mono text-[color:var(--noir)]/70"
          >
            {t}
            <span className="text-[color:var(--gold)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
