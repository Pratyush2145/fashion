import { ProductCard } from "./ProductCard";
import { useReveal } from "@/hooks/use-reveal";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

const products = [
  { id: "p1", image: p1, name: "Cashmere Cocoon Coat", category: "Outerwear", price: "€1,890", priceNum: 1890, badge: "New" },
  { id: "p2", image: p2, name: "Nappa Leather Blazer", category: "Tailoring", price: "€2,450", priceNum: 2450 },
  {
    id: "p3",
    image: p3,
    name: "Silk Bias Slip Dress",
    category: "Eveningwear",
    price: "€1,120",
    priceNum: 1120,
    badge: "Atelier",
  },
  { id: "p4", image: p4, name: "Gilded Mini Tote", category: "Accessories", price: "€980", priceNum: 980, badge: "Limited" },
];

export function Arrivals() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();
  return (
    <section id="arrivals" className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div
          ref={head.ref}
          className={`flex items-end justify-between mb-14 lg:mb-20 reveal-blur ${head.visible ? "is-visible" : ""}`}
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] font-mono text-[color:var(--muted-foreground)] mb-4">
              — Chapter 01
            </p>
            <h2 className="font-serif text-5xl lg:text-7xl tracking-[-0.02em] text-balance">
              New <span className="italic">arrivals</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-medium luxe-link pb-1"
          >
            View all 84 pieces
          </a>
        </div>

        <div ref={grid.ref} className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`reveal-fade ${grid.visible ? "is-visible" : ""}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
