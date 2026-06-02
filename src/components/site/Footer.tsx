import { Instagram } from "lucide-react";

export function Footer() {
  const cols = [
    { title: "Maison", links: ["Our story", "Atelier", "Sustainability", "Careers", "Press"] },
    { title: "Shop", links: ["Women", "Men", "Accessories", "Gifts", "Sale"] },
    { title: "Care", links: ["Contact", "Shipping", "Returns", "Repairs", "Sizing"] },
  ];
  return (
    <footer className="bg-[color:var(--ivory)] border-t hairline pt-20 pb-10 px-6 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b hairline">
          <div className="lg:col-span-5">
            <p className="font-serif text-4xl lg:text-5xl tracking-[0.25em]">
              MAISON<span className="text-[color:var(--gold)]">.</span>
            </p>
            <p className="mt-6 max-w-sm text-[color:var(--muted-foreground)] leading-relaxed text-sm">
              Founded in Paris, made in Italy. A modern house for those who dress with intent.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border hairline flex items-center justify-center hover:bg-[color:var(--noir)] hover:text-[color:var(--ivory)] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--muted-foreground)]">
                @maison
              </span>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--muted-foreground)] mb-5">
                {c.title}
              </p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm luxe-link">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-1 text-right hidden lg:block">
            <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--muted-foreground)]">
              EU · €
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--muted-foreground)]">
          <p>© 2026 Maison. All rights reserved.</p>
          <p>Privacy · Terms · Cookies</p>
        </div>
      </div>
    </footer>
  );
}
