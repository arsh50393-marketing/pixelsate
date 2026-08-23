const stats = [
  { value: "₹14.5L+", label: "ad spend portfolio managed" },
  { value: "16.69x", label: "best ROAS achieved on Meta ads" },
  { value: "250+", label: "average monthly leads generated for clients" },
];

export default function Numbers() {
  return (
    <section className="border-y border-black/5 bg-ink text-paper">
      <div className="section">
        <p className="eyebrow text-mint" data-aos="fade-up">Numbers</p>
        <h2 className="h-display mt-4 text-paper" data-aos="fade-up">
          What our work has added up to, so far.
        </h2>
        <p className="sub text-white/60" data-aos="fade-up">
          A track record, not a scoreboard.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="border-t border-white/15 pt-6"
            >
              <div className="text-5xl font-semibold tracking-tight md:text-6xl">
                {s.value}
              </div>
              <p className="mt-3 text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
