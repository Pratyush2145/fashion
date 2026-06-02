import editorial from "@/assets/editorial.jpg";
import lookbook from "@/assets/lookbook-1.jpg";
import accessory from "@/assets/accessory.jpg";
import { useReveal } from "@/hooks/use-reveal";

const posts = [
  {
    img: editorial,
    cat: "Culture",
    title: "The new heirs of streetwear are quieter than you think.",
    read: "6 min",
  },
  { img: lookbook, cat: "Atelier", title: "Inside our Marrakech AW26 campaign.", read: "4 min" },
  { img: accessory, cat: "Craft", title: "Why we cast every chain in 24K vermeil.", read: "3 min" },
];

export function Journal() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div
          ref={head.ref}
          className={`flex items-end justify-between mb-14 reveal-blur ${head.visible ? "is-visible" : ""}`}
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] font-mono text-[color:var(--muted-foreground)] mb-4">
              — The Journal
            </p>
            <h2 className="font-serif text-5xl lg:text-7xl tracking-[-0.02em]">
              Words, in <span className="italic">slow</span> form.
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex text-[11px] uppercase tracking-[0.3em] font-medium luxe-link pb-1"
          >
            All stories
          </a>
        </div>

        <div ref={grid.ref} className="grid md:grid-cols-3 gap-x-8 gap-y-14">
          {posts.map((p, i) => (
            <article
              key={i}
              className={`group cursor-pointer reveal-fade ${grid.visible ? "is-visible" : ""}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-luxe)] group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--muted-foreground)]">
                <span>{p.cat}</span>
                <span className="w-8 h-px bg-current" />
                <span>{p.read} read</span>
              </div>
              <h3 className="mt-4 font-serif text-2xl lg:text-3xl leading-tight group-hover:text-[color:var(--gold)] transition-colors">
                {p.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
