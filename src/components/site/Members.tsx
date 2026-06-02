export function Members() {
  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32 bg-[color:var(--noir)] text-[color:var(--ivory)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.25), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-[1100px] text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] font-mono text-[color:var(--gold)] mb-8">
          — Cercle Privé
        </p>
        <h2 className="font-serif text-5xl lg:text-8xl leading-[0.95] tracking-[-0.02em] text-balance">
          An <span className="italic">invitation</span> to the inner circle.
        </h2>
        <p className="mt-8 text-[color:var(--ivory)]/70 leading-relaxed max-w-xl mx-auto">
          Members receive first access to atelier drops, private appointments at the maison, and the
          annual leather-bound journal.
        </p>

        <form className="mt-12 flex flex-col sm:flex-row max-w-xl mx-auto gap-3">
          <input
            type="email"
            placeholder="your@address.com"
            className="flex-1 bg-transparent border-b border-[color:var(--ivory)]/30 focus:border-[color:var(--gold)] outline-none px-1 py-3 text-sm placeholder:text-[color:var(--ivory)]/40 transition-colors"
          />
          <button className="bg-[color:var(--gold)] text-[color:var(--noir)] px-8 py-3 text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-[color:var(--gold-soft)] transition-colors">
            Request invitation
          </button>
        </form>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-left max-w-3xl mx-auto">
          {[
            ["01", "Private drops"],
            ["02", "Atelier visits"],
            ["03", "Lifetime repairs"],
            ["04", "The Annual"],
          ].map(([n, t]) => (
            <div key={n} className="border-t border-[color:var(--ivory)]/20 pt-4">
              <p className="font-mono text-[10px] tracking-[0.3em] text-[color:var(--gold)]">
                N°{n}
              </p>
              <p className="font-serif text-xl mt-2">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
