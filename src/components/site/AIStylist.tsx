import { Sparkles, ArrowRight } from "lucide-react";

export function AIStylist() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px] relative overflow-hidden rounded-sm border hairline">
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: "var(--gradient-ivory)" }}
        />
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[color:var(--beige)] opacity-50 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-10 p-10 lg:p-20">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-mono glass border hairline px-3 py-1.5 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[color:var(--gold)]" /> AI Atelier
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-balance">
              Your personal <span className="italic gold-text">stylist</span>, on call.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[color:var(--noir)]/75 max-w-md">
              Built with our in-house atelier, Maison AI composes wardrobes around your silhouette,
              calendar and the architecture of your daily life.
            </p>
            <button className="mt-10 group inline-flex items-center gap-3 bg-[color:var(--noir)] text-[color:var(--ivory)] px-8 py-4 text-[11px] uppercase tracking-[0.3em] font-medium">
              Compose my wardrobe
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="relative">
            <div className="glass border hairline rounded-sm p-6 shadow-[var(--shadow-luxe)] max-w-md ml-auto">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[color:var(--gold)] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[color:var(--noir)]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Maison AI</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--muted-foreground)]">
                    Composing
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                For Thursday's gallery opening — the Ivory Cocoon Coat over the Bias Slip Dress,
                anchored with the Gilded Heritage Chain.
              </p>
              <div className="mt-5 flex gap-2">
                {["Cocoon Coat", "Bias Slip", "Heritage Chain"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-[0.25em] font-mono border hairline px-2.5 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t hairline flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--muted-foreground)]">
                  Total Look
                </p>
                <p className="font-mono text-sm">€3,650</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
