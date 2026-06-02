import { Heart, Plus } from "lucide-react";

interface Props {
  image: string;
  name: string;
  category: string;
  price: string;
  badge?: string;
}

export function ProductCard({ image, name, category, price, badge }: Props) {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--muted)]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={1024}
          height={1280}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-luxe)] group-hover:scale-[1.06]"
        />
        {badge && (
          <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.3em] font-mono bg-[color:var(--ivory)]/90 backdrop-blur px-2.5 py-1">
            {badge}
          </span>
        )}
        <button
          aria-label="Wishlist"
          className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-[color:var(--ivory)]"
        >
          <Heart className="w-4 h-4" />
        </button>
        <button className="absolute inset-x-4 bottom-4 bg-[color:var(--noir)] text-[color:var(--ivory)] text-[10px] uppercase tracking-[0.3em] font-medium py-3 flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <Plus className="w-3.5 h-3.5" /> Quick Add
        </button>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--muted-foreground)]">
            {category}
          </p>
          <h3 className="font-serif text-xl mt-1 leading-tight">{name}</h3>
        </div>
        <p className="font-mono text-sm pt-1">{price}</p>
      </div>
    </article>
  );
}
