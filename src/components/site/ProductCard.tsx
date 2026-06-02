import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

interface Props {
  id: string;
  image: string;
  name: string;
  category: string;
  price: string;
  priceNum: number;
  badge?: string;
}

export function ProductCard({ id, image, name, category, price, priceNum, badge }: Props) {
  const { toggleWishlist, isInWishlist, addToCart } = useCart();
  const [showAdded, setShowAdded] = useState(false);
  const inWishlist = isInWishlist(id);

  const handleAddToCart = () => {
    addToCart({ id, name, price: priceNum, image, category });
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
  };

  const handleWishlist = () => {
    toggleWishlist({ id, name, price: priceNum, image, category });
  };

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
          onClick={handleWishlist}
          aria-label="Wishlist"
          className={`absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-[color:var(--ivory)] ${
            inWishlist ? "opacity-100 translate-y-0 fill-[color:var(--gold)]" : ""
          }`}
        >
          <Heart className="w-4 h-4" fill={inWishlist ? "currentColor" : "none"} />
        </button>
        <button
          onClick={handleAddToCart}
          className="absolute inset-x-4 bottom-4 bg-[color:var(--noir)] text-[color:var(--ivory)] text-[10px] uppercase tracking-[0.3em] font-medium py-3 flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-[color:var(--ivory)] hover:text-[color:var(--noir)]"
        >
          <Plus className="w-3.5 h-3.5" /> {showAdded ? "Added!" : "Quick Add"}
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
