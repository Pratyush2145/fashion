import lookbook from "@/assets/lookbook-1.jpg";
import editorial from "@/assets/editorial.jpg";
import { ArrowUpRight } from "lucide-react";

export function Lookbook() {
  return (
    <section
      id="lookbook"
      className="bg-[color:var(--noir)] text-[color:var(--ivory)] py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.4em] font-mono text-[color:var(--ivory)]/60 mb-6">
              — Seasonal Lookbook
            </p>
            <h2 className="font-serif text-5xl lg:text-8xl leading-[0.95] tracking-[-0.02em] text-balance">
              A study in <span className="italic gold-text">stillness</span> & light.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[color:var(--ivory)]/70 leading-relaxed">
              Captured in the golden hour of Marrakech — the AW26 collection moves between
              architectural tailoring and the soft poetry of liquid silk.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          <figure className="lg:col-span-5 relative aspect-[4/5] overflow-hidden group">
            <img
              src={lookbook}
              alt="Lookbook silk"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover transition-transform duration-[1500ms] ease-[var(--ease-luxe)] group-hover:scale-105"
            />
            <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.3em] font-mono glass-dark px-3 py-1.5">
              Look 03 — Aurora Silk
            </figcaption>
          </figure>

          <div className="lg:col-span-7 grid grid-rows-2 gap-6 lg:gap-8">
            <figure className="relative aspect-[16/9] lg:aspect-auto overflow-hidden group">
              <img
                src={editorial}
                alt="Editorial street"
                loading="lazy"
                width={1536}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-[1500ms] ease-[var(--ease-luxe)] group-hover:scale-105"
              />
              <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.3em] font-mono glass-dark px-3 py-1.5">
                Look 08 — Concrete Heirs
              </figcaption>
            </figure>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="flex min-w-0 flex-col justify-between bg-[color:var(--ivory)]/[0.04] border border-[color:var(--ivory)]/10 p-8">
                <p className="font-serif text-3xl lg:text-5xl leading-tight italic break-words">
                  "Quiet, considered, never loud."
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--ivory)]/50 mt-6">
                  — Vogue Italia
                </p>
              </div>
              <a
                href="#"
                className="group min-w-0 flex flex-col justify-between bg-[color:var(--gold)] text-[color:var(--noir)] p-8 transition-all hover:bg-[color:var(--gold-soft)]"
              >
                <p className="font-serif text-3xl lg:text-4xl leading-tight">
                  View the interactive lookbook
                </p>
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-medium mt-6">
                  Enter{" "}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
