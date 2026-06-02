import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/contexts/CartContext";

const leftLinks = ["New", "Women", "Men"];
const rightLinks = ["Accessories", "Lookbook", "Journal"];

interface NavProps {
  onCartClick?: () => void;
}

export function Nav({ onCartClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, wishlist } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 h-16 lg:h-20 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* Left */}
        <div className="flex items-center gap-7 xl:gap-9 text-[11px] uppercase tracking-[0.22em] font-medium min-w-0">
          <button className="lg:hidden" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {leftLinks.map((l) => (
              <a key={l} href="#" className="luxe-link whitespace-nowrap">
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* Center logo */}
        <a
          href="/"
          className="font-serif text-xl lg:text-2xl tracking-[0.3em] whitespace-nowrap justify-self-center"
        >
          MAISON<span className="text-[color:var(--gold)]">.</span>
        </a>

        {/* Right */}
        <div className="flex items-center justify-end gap-5 xl:gap-7 min-w-0">
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[11px] uppercase tracking-[0.22em] font-medium">
            {rightLinks.map((l) => (
              <a key={l} href="#" className="luxe-link whitespace-nowrap">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="hover:text-[color:var(--gold)] transition-colors"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button
              aria-label="Account"
              className="hidden sm:block hover:text-[color:var(--gold)] transition-colors"
            >
              <User className="w-[18px] h-[18px]" />
            </button>
            <button
              aria-label="Wishlist"
              className="hidden sm:block hover:text-[color:var(--gold)] transition-colors relative"
            >
              <Heart className="w-[18px] h-[18px]" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 text-[10px] font-mono bg-[color:var(--gold)] text-[color:var(--noir)] rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button
              onClick={onCartClick}
              aria-label="Shopping bag"
              className="relative hover:text-[color:var(--gold)] transition-colors"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 text-[10px] font-mono bg-[color:var(--gold)] text-[color:var(--noir)] rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
