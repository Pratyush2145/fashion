import accessory from "@/assets/accessory.jpg";
import { ArrowUpRight } from "lucide-react";

export function Accessories() {
  const categories = [
    { name: "Fine Jewelry", count: "24 pieces" },
    { name: "Leather Goods", count: "38 pieces" },
    { name: "Eyewear", count: "12 pieces" },
    { name: "Footwear", count: "46 pieces" },
  ];
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 bg-[color:var(--beige)]">
      <div className="mx-auto max-w-[1600px] grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <div className="aspect-[5/6] overflow-hidden">
            <img
              src={accessory}
              alt="Gold chain"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass border hairline p-5 max-w-[200px] hidden sm:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
              24K Vermeil
            </p>
            <p className="font-serif text-xl mt-1">Heritage Chain</p>
            <p className="font-mono text-sm mt-2">€640</p>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <p className="text-[11px] uppercase tracking-[0.4em] font-mono text-[color:var(--noir)]/60 mb-6">
            — Chapter 02
          </p>
          <h2 className="font-serif text-5xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-balance">
            The accessories <span className="italic">edit</span>.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[color:var(--noir)]/75 max-w-md">
            Sculpted hardware, hand-finished leathers, and jewelry cast in 24K gold vermeil. Objects
            designed to outlive the season.
          </p>

          <ul className="mt-10 divide-y border-y hairline">
            {categories.map((c) => (
              <li key={c.name}>
                <a href="#" className="flex items-center justify-between py-5 group">
                  <span className="font-serif text-2xl lg:text-3xl">{c.name}</span>
                  <span className="flex items-center gap-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--muted-foreground)]">
                      {c.count}
                    </span>
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
