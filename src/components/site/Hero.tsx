import hero from "@/assets/hero.jpg";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[color:var(--beige)]">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Luxury fashion campaign"
          className="w-full h-full object-cover object-center scale-105"
          width={1536}
          height={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--noir)]/20 via-transparent to-[color:var(--noir)]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--beige)]/70 via-transparent to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-10 pt-44 lg:pt-56 pb-20 min-h-screen flex flex-col justify-between">
        <div className="max-w-3xl">
          <h1 className="font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] tracking-[-0.02em] text-[color:var(--noir)] text-balance [animation:var(--animate-fade-up)] [animation-delay:0.15s] [animation-fill-mode:both]">
            Redefining
            <br />
            <span className="italic font-light">modern</span> luxury
            <span className="text-[color:var(--gold)]">.</span>
          </h1>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-[color:var(--noir)]/75 [animation:var(--animate-fade-up)] [animation-delay:0.3s] [animation-fill-mode:both]">
            A house built on quiet confidence — heirloom craft, unhurried silhouettes, and an
            unmistakable eye for the now.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4 [animation:var(--animate-fade-up)] [animation-delay:0.45s] [animation-fill-mode:both]">
            <a
              href="#arrivals"
              className="group inline-flex items-center gap-3 bg-[color:var(--noir)] text-[color:var(--ivory)] px-8 py-4 text-[11px] uppercase tracking-[0.3em] font-medium transition-all hover:bg-[color:var(--noir)]/85"
            >
              Shop Collection
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#lookbook"
              className="group inline-flex items-center gap-3 px-8 py-4 text-[11px] uppercase tracking-[0.3em] font-medium border border-[color:var(--noir)]/30 hover:border-[color:var(--noir)] transition-all"
            >
              Explore Lookbook
            </a>
          </div>
        </div>

        {/* Floating glass card */}
        <div className="hidden lg:flex justify-end">
          <div className="glass rounded-sm border hairline p-5 max-w-xs shadow-[var(--shadow-soft)] [animation:var(--animate-fade-up)] [animation-delay:0.8s] [animation-fill-mode:both]">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[color:var(--gold)] [animation:var(--animate-shimmer)]" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Now Featured</span>
            </div>
            <p className="font-serif text-2xl leading-tight">The Ivory Tailoring Edit</p>
            <p className="text-xs text-[color:var(--noir)]/60 mt-2">
              12 pieces · Limited atelier release
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-mono text-[color:var(--noir)]/60">
        Scroll
        <span className="w-px h-10 bg-[color:var(--noir)]/30" />
      </div>
    </section>
  );
}
